/**
 * Retry Handler for AI Service
 * Implements exponential backoff and retry logic
 */

import { AI_CONFIG } from './config';
import { AIError } from './types';

export class RetryHandler {
  private maxAttempts: number;
  private initialDelay: number;
  private maxDelay: number;
  private backoffMultiplier: number;

  constructor(config = AI_CONFIG.retry) {
    this.maxAttempts = config.maxAttempts;
    this.initialDelay = config.initialDelay;
    this.maxDelay = config.maxDelay;
    this.backoffMultiplier = config.backoffMultiplier;
  }

  /**
   * Execute a function with retry logic
   */
  async execute<T>(
    fn: () => Promise<T>,
    options: {
      onRetry?: (attempt: number, error: AIError) => void;
      shouldRetry?: (error: AIError) => boolean;
    } = {}
  ): Promise<T> {
    let lastError: AIError | null = null;
    let delay = this.initialDelay;

    for (let attempt = 1; attempt <= this.maxAttempts; attempt++) {
      try {
        return await fn();
      } catch (error) {
        lastError = this.wrapError(error);

        // Check if we should retry
        const shouldRetry = options.shouldRetry 
          ? options.shouldRetry(lastError)
          : this.isRetryable(lastError);

        if (!shouldRetry || attempt === this.maxAttempts) {
          throw lastError;
        }

        // Call retry callback if provided
        if (options.onRetry) {
          options.onRetry(attempt, lastError);
        }

        // Wait before retrying
        await this.delay(delay);

        // Calculate next delay with exponential backoff
        delay = Math.min(delay * this.backoffMultiplier, this.maxDelay);
      }
    }

    throw lastError || new Error('Retry failed');
  }

  /**
   * Execute with timeout
   */
  async executeWithTimeout<T>(
    fn: () => Promise<T>,
    timeout: number = AI_CONFIG.response.timeout
  ): Promise<T> {
    return Promise.race([
      fn(),
      new Promise<T>((_, reject) => 
        setTimeout(() => reject(this.createTimeoutError()), timeout)
      )
    ]);
  }

  /**
   * Batch retry for multiple operations
   */
  async executeBatch<T>(
    operations: Array<() => Promise<T>>,
    options: {
      concurrency?: number;
      stopOnError?: boolean;
    } = {}
  ): Promise<Array<{ success: boolean; result?: T; error?: AIError }>> {
    const { concurrency = 3, stopOnError = false } = options;
    const results: Array<{ success: boolean; result?: T; error?: AIError }> = [];
    
    // Process in batches
    for (let i = 0; i < operations.length; i += concurrency) {
      const batch = operations.slice(i, i + concurrency);
      const batchPromises = batch.map(async (operation) => {
        try {
          const result = await this.execute(operation);
          return { success: true, result };
        } catch (error) {
          const aiError = this.wrapError(error);
          if (stopOnError) {
            throw aiError;
          }
          return { success: false, error: aiError };
        }
      });

      const batchResults = await Promise.all(batchPromises);
      results.push(...batchResults);
    }

    return results;
  }

  /**
   * Check if error is retryable
   */
  private isRetryable(error: AIError): boolean {
    // Check if error explicitly states it's retryable
    if ('retryable' in error) {
      return error.retryable;
    }

    // Check error codes that are typically retryable
    const retryableCodes = [
      'NVIDIA_API_ERROR_429', // Rate limit
      'NVIDIA_API_ERROR_500', // Internal server error
      'NVIDIA_API_ERROR_502', // Bad gateway
      'NVIDIA_API_ERROR_503', // Service unavailable
      'NVIDIA_API_ERROR_504', // Gateway timeout
      'TIMEOUT_ERROR',
      'NETWORK_ERROR',
    ];

    return retryableCodes.includes(error.code);
  }

  /**
   * Delay execution
   */
  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /**
   * Wrap error in AIError type
   */
  private wrapError(error: any): AIError {
    if (error && typeof error === 'object' && 'code' in error) {
      return error as AIError;
    }

    // Check for common error types
    if (error instanceof TypeError && error.message.includes('fetch')) {
      return {
        code: 'NETWORK_ERROR',
        message: 'Network request failed',
        details: error,
        retryable: true,
      };
    }

    return {
      code: 'UNKNOWN_ERROR',
      message: error?.message || 'An unknown error occurred',
      details: error,
      retryable: false,
    };
  }

  /**
   * Create timeout error
   */
  private createTimeoutError(): AIError {
    return {
      code: 'TIMEOUT_ERROR',
      message: `Request timed out after ${AI_CONFIG.response.timeout}ms`,
      retryable: true,
    };
  }
}

// Export singleton instance
export const retryHandler = new RetryHandler();
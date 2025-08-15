/**
 * NVIDIA API Client
 * Handles communication with NVIDIA's inference API
 */

import { AI_CONFIG } from './config';
import { 
  NvidiaRequest, 
  NvidiaResponse, 
  AIMessage, 
  AIError,
  StreamChunk 
} from './types';

export class NvidiaClient {
  private apiKey: string;
  private baseUrl: string;

  constructor(apiKey?: string, baseUrl?: string) {
    this.apiKey = apiKey || AI_CONFIG.nvidia.apiKey;
    this.baseUrl = baseUrl || AI_CONFIG.nvidia.baseUrl;
  }

  /**
   * Send a chat completion request to NVIDIA API
   */
  async chatCompletion(
    messages: AIMessage[],
    options: {
      model?: string;
      temperature?: number;
      maxTokens?: number;
      topP?: number;
      stream?: boolean;
    } = {}
  ): Promise<NvidiaResponse> {
    const request: NvidiaRequest = {
      model: options.model || AI_CONFIG.nvidia.model,
      messages,
      temperature: options.temperature ?? AI_CONFIG.nvidia.temperature,
      top_p: options.topP ?? AI_CONFIG.nvidia.topP,
      max_tokens: options.maxTokens ?? AI_CONFIG.nvidia.maxTokens,
      stream: options.stream ?? false,
    };

    try {
      const response = await fetch(`${this.baseUrl}/chat/completions`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(request),
      });

      if (!response.ok) {
        throw await this.handleApiError(response);
      }

      const data = await response.json();
      return data as NvidiaResponse;
    } catch (error) {
      throw this.wrapError(error);
    }
  }

  /**
   * Stream chat completion from NVIDIA API
   */
  async *streamChatCompletion(
    messages: AIMessage[],
    options: {
      model?: string;
      temperature?: number;
      maxTokens?: number;
      topP?: number;
      onChunk?: (chunk: StreamChunk) => void;
    } = {}
  ): AsyncGenerator<StreamChunk, void, unknown> {
    const request: NvidiaRequest = {
      model: options.model || AI_CONFIG.nvidia.model,
      messages,
      temperature: options.temperature ?? AI_CONFIG.nvidia.temperature,
      top_p: options.topP ?? AI_CONFIG.nvidia.topP,
      max_tokens: options.maxTokens ?? AI_CONFIG.nvidia.maxTokens,
      stream: true,
    };

    try {
      const response = await fetch(`${this.baseUrl}/chat/completions`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(request),
      });

      if (!response.ok) {
        throw await this.handleApiError(response);
      }

      const reader = response.body?.getReader();
      if (!reader) {
        throw new Error('Response body is not readable');
      }

      const decoder = new TextDecoder();
      let buffer = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() || '';

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const data = line.slice(6);
            if (data === '[DONE]') {
              yield { text: '', isComplete: true };
              if (options.onChunk) {
                options.onChunk({ text: '', isComplete: true });
              }
              return;
            }

            try {
              const parsed = JSON.parse(data);
              const content = parsed.choices[0]?.delta?.content || '';
              if (content) {
                const chunk: StreamChunk = { text: content, isComplete: false };
                yield chunk;
                if (options.onChunk) {
                  options.onChunk(chunk);
                }
              }
            } catch (e) {
              console.error('Failed to parse SSE data:', e);
            }
          }
        }
      }
    } catch (error) {
      const aiError = this.wrapError(error);
      yield { text: '', isComplete: false, error: aiError };
      throw aiError;
    }
  }

  /**
   * Handle API error responses
   */
  private async handleApiError(response: Response): Promise<AIError> {
    let errorMessage = `API request failed with status ${response.status}`;
    let errorDetails: any = null;

    try {
      const errorData = await response.json();
      errorMessage = errorData.error?.message || errorData.message || errorMessage;
      errorDetails = errorData;
    } catch {
      // If we can't parse the error response, use the default message
    }

    const isRetryable = response.status >= 500 || response.status === 429;

    return {
      code: `NVIDIA_API_ERROR_${response.status}`,
      message: errorMessage,
      details: errorDetails,
      retryable: isRetryable,
    };
  }

  /**
   * Wrap errors in AIError type
   */
  private wrapError(error: any): AIError {
    if (error && typeof error === 'object' && 'code' in error) {
      return error as AIError;
    }

    return {
      code: 'NVIDIA_CLIENT_ERROR',
      message: error?.message || 'An unexpected error occurred',
      details: error,
      retryable: false,
    };
  }

  /**
   * Test the API connection
   */
  async testConnection(): Promise<boolean> {
    try {
      const response = await this.chatCompletion([
        { role: 'user', content: 'Hello' }
      ], {
        maxTokens: 10,
        temperature: 0,
      });

      return response.choices.length > 0;
    } catch (error) {
      console.error('API connection test failed:', error);
      return false;
    }
  }
}
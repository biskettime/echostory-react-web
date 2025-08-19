// NVIDIA API Service for AI Model Integration
interface NVIDIAConfig {
  apiKey: string;
  apiToken: string;
  baseUrl?: string;
}

interface TokenMetrics {
  inputTokens: number;
  outputTokens: number;
  tokensPerSecond: number;
  latency: number;
  timestamp: number;
}

class NVIDIAService {
  private config: NVIDIAConfig;
  private tokenMetrics: TokenMetrics[] = [];

  constructor() {
    this.config = {
      apiKey: '598c13d5-1af7-4081-88bf-a8287fde9534',
      apiToken: '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',
      baseUrl: 'https://integrate.api.nvidia.com/v1'
    };
  }

  /**
   * Test token processing capability with NVIDIA API
   */
  async testTokenProcessing(testPrompt?: string): Promise<{
    success: boolean;
    metrics: TokenMetrics | null;
    error?: string;
  }> {
    const prompt = testPrompt || "Generate a creative story about a robot learning to paint. Include details about colors, emotions, and the creative process. This is a test to measure token processing speed.";
    
    try {
      const startTime = Date.now();
      
      const response = await fetch(`${this.config.baseUrl}/chat/completions`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.config.apiToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'meta/llama-3.1-8b-instruct',
          messages: [
            {
              role: 'user',
              content: prompt
            }
          ],
          temperature: 0.7,
          max_tokens: 512,
          stream: false
        })
      });

      const endTime = Date.now();
      const latency = endTime - startTime;

      if (!response.ok) {
        const errorData = await response.text();
        console.error('NVIDIA API Error:', errorData);
        return {
          success: false,
          metrics: null,
          error: `API Error: ${response.status} - ${errorData}`
        };
      }

      const data = await response.json();
      
      // Calculate metrics
      const inputTokens = this.estimateTokens(prompt);
      const outputTokens = data.usage?.completion_tokens || this.estimateTokens(data.choices[0]?.message?.content || '');
      const totalTokens = data.usage?.total_tokens || (inputTokens + outputTokens);
      const tokensPerSecond = (outputTokens / (latency / 1000));

      const metrics: TokenMetrics = {
        inputTokens: data.usage?.prompt_tokens || inputTokens,
        outputTokens: outputTokens,
        tokensPerSecond: Math.round(tokensPerSecond * 100) / 100,
        latency: latency,
        timestamp: Date.now()
      };

      this.tokenMetrics.push(metrics);

      console.log('NVIDIA API Test Results:', {
        ...metrics,
        response: data.choices[0]?.message?.content?.substring(0, 100) + '...'
      });

      return {
        success: true,
        metrics
      };

    } catch (error) {
      console.error('NVIDIA API Connection Error:', error);
      return {
        success: false,
        metrics: null,
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  /**
   * Run comprehensive performance test
   */
  async runPerformanceTest(): Promise<{
    averageTokensPerSecond: number;
    averageLatency: number;
    successRate: number;
    testResults: Array<{
      testNumber: number;
      tokensPerSecond: number;
      latency: number;
      success: boolean;
    }>;
  }> {
    const testPrompts = [
      "Write a short poem about technology.",
      "Explain quantum computing in simple terms.",
      "Create a dialogue between two AI assistants discussing the weather.",
      "Generate a list of 10 creative business ideas for 2025.",
      "Describe a futuristic city in vivid detail."
    ];

    const results = [];
    let successCount = 0;

    for (let i = 0; i < testPrompts.length; i++) {
      console.log(`Running test ${i + 1}/${testPrompts.length}...`);
      
      const result = await this.testTokenProcessing(testPrompts[i]);
      
      if (result.success && result.metrics) {
        successCount++;
        results.push({
          testNumber: i + 1,
          tokensPerSecond: result.metrics.tokensPerSecond,
          latency: result.metrics.latency,
          success: true
        });
      } else {
        results.push({
          testNumber: i + 1,
          tokensPerSecond: 0,
          latency: 0,
          success: false
        });
      }

      // Add delay between requests to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    const successfulResults = results.filter(r => r.success);
    const averageTokensPerSecond = successfulResults.length > 0
      ? successfulResults.reduce((acc, r) => acc + r.tokensPerSecond, 0) / successfulResults.length
      : 0;
    const averageLatency = successfulResults.length > 0
      ? successfulResults.reduce((acc, r) => acc + r.latency, 0) / successfulResults.length
      : 0;

    return {
      averageTokensPerSecond: Math.round(averageTokensPerSecond * 100) / 100,
      averageLatency: Math.round(averageLatency),
      successRate: (successCount / testPrompts.length) * 100,
      testResults: results
    };
  }

  /**
   * Generate story content using NVIDIA API
   */
  async generateStoryContent(prompt: string, maxTokens: number = 1024): Promise<{
    success: boolean;
    content?: string;
    error?: string;
  }> {
    try {
      const response = await fetch(`${this.config.baseUrl}/chat/completions`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.config.apiToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'meta/llama-3.1-8b-instruct',
          messages: [
            {
              role: 'system',
              content: 'You are a creative storyteller. Generate engaging and immersive story content.'
            },
            {
              role: 'user',
              content: prompt
            }
          ],
          temperature: 0.8,
          max_tokens: maxTokens,
          stream: false
        })
      });

      if (!response.ok) {
        const errorData = await response.text();
        return {
          success: false,
          error: `API Error: ${response.status} - ${errorData}`
        };
      }

      const data = await response.json();
      return {
        success: true,
        content: data.choices[0]?.message?.content
      };

    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  /**
   * Estimate token count (rough approximation)
   */
  private estimateTokens(text: string): number {
    // Rough estimation: ~4 characters per token
    return Math.ceil(text.length / 4);
  }

  /**
   * Get stored metrics
   */
  getMetrics(): TokenMetrics[] {
    return this.tokenMetrics;
  }

  /**
   * Clear stored metrics
   */
  clearMetrics(): void {
    this.tokenMetrics = [];
  }
}

// Export singleton instance
export const nvidiaService = new NVIDIAService();

// Export types
export type { TokenMetrics, NVIDIAConfig };
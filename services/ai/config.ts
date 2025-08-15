/**
 * AI Service Configuration
 * NVIDIA API configuration and model settings
 */

export const AI_CONFIG = {
  // NVIDIA API Configuration
  nvidia: {
    apiKey: process.env.REACT_APP_NVIDIA_API_KEY || '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',
    baseUrl: 'https://integrate.api.nvidia.com/v1',
    model: 'meta/llama-3.1-70b-instruct', // You can change this to other models like 'google/gemma-2-27b-it'
    maxTokens: 2048,
    temperature: 0.7,
    topP: 0.9,
  },

  // Retry configuration
  retry: {
    maxAttempts: 3,
    initialDelay: 1000,
    maxDelay: 5000,
    backoffMultiplier: 2,
  },

  // Response configuration
  response: {
    streamingEnabled: true,
    timeout: 30000, // 30 seconds
    maxResponseLength: 4000,
  },

  // Safety configuration
  safety: {
    filterProfanity: true,
    filterViolence: true,
    filterHate: true,
    maxContentWarnings: 3,
  },
};

// Available NVIDIA models
export const NVIDIA_MODELS = {
  LLAMA_70B: 'meta/llama-3.1-70b-instruct',
  LLAMA_8B: 'meta/llama-3.1-8b-instruct', 
  GEMMA_27B: 'google/gemma-2-27b-it',
  MISTRAL_7B: 'mistralai/mistral-7b-instruct-v0.3',
  MIXTRAL_8X7B: 'mistralai/mixtral-8x7b-instruct-v0.1',
  PHI_3: 'microsoft/phi-3-medium-128k-instruct',
} as const;

export type NvidiaModel = typeof NVIDIA_MODELS[keyof typeof NVIDIA_MODELS];
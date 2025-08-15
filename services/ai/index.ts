/**
 * AI Service Module Exports
 * Central export point for all AI-related services
 */

export { AIService } from './aiService';
export { NvidiaClient } from './nvidiaClient';
export { PromptBuilder } from './promptBuilder';
export { RetryHandler, retryHandler } from './retryHandler';
export { AI_CONFIG, NVIDIA_MODELS } from './config';
export { LanguageDetector } from './languageDetector';
export { CharacterPersonalityManager } from './characterPersonality';

// Export types
export type {
  AIMessage,
  AIResponse,
  AIError,
  StoryContext,
  UserContext,
  ChatContext,
  StreamChunk,
  NvidiaRequest,
  NvidiaResponse,
} from './types';

export type { SupportedLanguage } from './languageDetector';

// Export singleton instance for easy use
import { AIService } from './aiService';
export const aiService = new AIService();

// Export utility functions
export { 
  createStoryContext, 
  createUserContext,
  sanitizeInput,
  formatAIResponse,
  estimateTokens,
  generateSessionId 
} from './utils';
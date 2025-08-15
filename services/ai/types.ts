/**
 * AI Service Type Definitions
 */

// Chat message types
export interface AIMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
  name?: string;
}

// Story context for AI
export interface StoryContext {
  storyId: string;
  title: string;
  characterName: string;
  characterDescription: string;
  storySettings: string;
  secretSettings?: string;
  startingSituation: string;
  firstDialogue: string;
  safetyMode: boolean;
  language: 'ko' | 'en' | 'ja' | 'zh' | 'es' | 'fr' | 'de' | 'ru' | 'pt' | 'ar';
  webSelectedLanguage?: 'ko' | 'en' | 'ja' | 'zh' | 'es' | 'fr' | 'de' | 'ru' | 'pt' | 'ar';
}

// User context
export interface UserContext {
  nickname: string;
  userInfo?: string; // User's personal information from chat profile
  profileId?: string; // ID of the active chat profile
  preferences?: {
    responseLength?: 'short' | 'medium' | 'long';
    creativityLevel?: number; // 0-1
  };
}

// Chat session context
export interface ChatContext {
  sessionId: string;
  messages: AIMessage[];
  storyContext: StoryContext;
  userContext: UserContext;
  turnCount: number;
}

// AI response
export interface AIResponse {
  message: string;
  emotion?: string; // Character's emotion
  suggestedActions?: string[]; // Suggested user actions
  isNarration?: boolean;
  metadata?: {
    tokensUsed: number;
    modelUsed: string;
    processingTime: number;
  };
}

// NVIDIA API Request/Response types
export interface NvidiaRequest {
  model: string;
  messages: AIMessage[];
  temperature?: number;
  top_p?: number;
  max_tokens?: number;
  stream?: boolean;
}

export interface NvidiaResponse {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: Array<{
    index: number;
    message: {
      role: string;
      content: string;
    };
    logprobs: null;
    finish_reason: string;
  }>;
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}

// Error types
export interface AIError {
  code: string;
  message: string;
  details?: any;
  retryable: boolean;
}

// Streaming response
export interface StreamChunk {
  text: string;
  isComplete: boolean;
  error?: AIError;
}
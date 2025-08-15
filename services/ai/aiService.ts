/**
 * Main AI Service
 * Orchestrates AI interactions for the chat system
 */

import { NvidiaClient } from './nvidiaClient';
import { PromptBuilder } from './promptBuilder';
import { AI_CONFIG } from './config';
import { LanguageDetector, SupportedLanguage } from './languageDetector';
import {
  AIMessage,
  AIResponse,
  ChatContext,
  StoryContext,
  UserContext,
  AIError,
  StreamChunk,
} from './types';

export class AIService {
  private client: NvidiaClient;
  private conversationCache: Map<string, AIMessage[]>;

  constructor() {
    this.client = new NvidiaClient();
    this.conversationCache = new Map();
  }

  /**
   * Initialize a new chat session
   */
  initializeSession(
    sessionId: string,
    storyContext: StoryContext,
    userContext: UserContext
  ): string {
    // Build and cache the system prompt
    const systemPrompt = PromptBuilder.buildSystemPrompt(storyContext, userContext);
    
    // Initialize conversation with system prompt and character's first dialogue
    const initialMessage = PromptBuilder.buildInitialMessage(storyContext);
    
    // Store the system prompt and the character's initial message in cache
    this.conversationCache.set(sessionId, [
      { role: 'system', content: systemPrompt },
      { role: 'assistant', content: initialMessage, name: storyContext.characterName }
    ]);

    // Return the initial greeting (character's first dialogue)
    return initialMessage;
  }

  /**
   * Generate AI response for user message with multi-language support
   */
  async generateResponse(
    sessionId: string,
    userMessage: string,
    storyContext: StoryContext,
    userContext: UserContext
  ): Promise<AIResponse> {
    const startTime = Date.now();

    try {
      // Detect language from user message
      const detectedLanguage = LanguageDetector.detectLanguage(userMessage);
      
      // Update story context with detected language if significantly different
      const responseLanguage = LanguageDetector.determineResponseLanguage(
        userMessage,
        storyContext.webSelectedLanguage as SupportedLanguage,
        storyContext.language as SupportedLanguage
      );
      
      // Update story context for this response
      const updatedStoryContext = {
        ...storyContext,
        language: responseLanguage
      };

      // Get or initialize conversation history
      let conversation = this.conversationCache.get(sessionId);
      if (!conversation) {
        const systemPrompt = PromptBuilder.buildSystemPrompt(updatedStoryContext, userContext);
        conversation = [{ role: 'system', content: systemPrompt }];
        this.conversationCache.set(sessionId, conversation);
      }

      // Build messages with language detection
      const messages = PromptBuilder.buildChatPrompt(
        conversation[0].content, // system prompt
        conversation.slice(1), // conversation history without system prompt
        userMessage,
        userContext.nickname,
        updatedStoryContext
      );

      // Call NVIDIA API
      const response = await this.client.chatCompletion(messages, {
        temperature: this.getTemperature(userContext),
        maxTokens: this.getMaxTokens(userContext),
      });

      // Extract and process response
      const aiMessage = response.choices[0]?.message?.content || '';
      
      // Add messages to conversation history
      conversation.push({ 
        role: 'user', 
        content: userMessage,
        name: userContext.nickname 
      });
      conversation.push({ 
        role: 'assistant', 
        content: aiMessage 
      });

      // Keep conversation history manageable
      this.trimConversationHistory(sessionId);

      // Parse response for metadata
      const { message, emotion, isNarration } = this.parseAIResponse(aiMessage);

      return {
        message,
        emotion,
        isNarration,
        metadata: {
          tokensUsed: response.usage.total_tokens,
          modelUsed: response.model,
          processingTime: Date.now() - startTime,
        },
      };
    } catch (error) {
      console.error('AI response generation failed:', error);
      throw this.handleError(error);
    }
  }

  /**
   * Stream AI response for real-time interaction with multi-language support
   */
  async *streamResponse(
    sessionId: string,
    userMessage: string,
    storyContext: StoryContext,
    userContext: UserContext
  ): AsyncGenerator<StreamChunk, AIResponse, unknown> {
    const startTime = Date.now();
    let fullResponse = '';
    let tokenCount = 0;

    try {
      // Detect and determine response language
      const responseLanguage = LanguageDetector.determineResponseLanguage(
        userMessage,
        storyContext.webSelectedLanguage as SupportedLanguage,
        storyContext.language as SupportedLanguage
      );
      
      // Update story context for this response
      const updatedStoryContext = {
        ...storyContext,
        language: responseLanguage
      };

      // Get or initialize conversation history
      let conversation = this.conversationCache.get(sessionId);
      if (!conversation) {
        const systemPrompt = PromptBuilder.buildSystemPrompt(updatedStoryContext, userContext);
        conversation = [{ role: 'system', content: systemPrompt }];
        this.conversationCache.set(sessionId, conversation);
      }

      // Build messages with language detection
      const messages = PromptBuilder.buildChatPrompt(
        conversation[0].content,
        conversation.slice(1),
        userMessage,
        userContext.nickname,
        updatedStoryContext
      );

      // Stream from NVIDIA API
      const stream = this.client.streamChatCompletion(messages, {
        temperature: this.getTemperature(userContext),
        maxTokens: this.getMaxTokens(userContext),
      });

      for await (const chunk of stream) {
        if (chunk.error) {
          throw chunk.error;
        }

        fullResponse += chunk.text;
        tokenCount++;
        yield chunk;
      }

      // Add messages to conversation history
      conversation.push({ 
        role: 'user', 
        content: userMessage,
        name: userContext.nickname 
      });
      conversation.push({ 
        role: 'assistant', 
        content: fullResponse 
      });

      // Trim history
      this.trimConversationHistory(sessionId);

      // Parse and return final response
      const { message, emotion, isNarration } = this.parseAIResponse(fullResponse);

      return {
        message,
        emotion,
        isNarration,
        metadata: {
          tokensUsed: tokenCount,
          modelUsed: AI_CONFIG.nvidia.model,
          processingTime: Date.now() - startTime,
        },
      };
    } catch (error) {
      console.error('AI streaming failed:', error);
      throw this.handleError(error);
    }
  }

  /**
   * Generate story mode content
   */
  async generateStoryContent(
    storyContext: StoryContext,
    userInput: string,
    previousStory?: string
  ): Promise<string> {
    try {
      const prompt = PromptBuilder.buildStoryModePrompt(
        storyContext,
        userInput,
        previousStory
      );

      const response = await this.client.chatCompletion([
        { role: 'user', content: prompt }
      ], {
        temperature: 0.8,
        maxTokens: 500,
      });

      return response.choices[0]?.message?.content || '';
    } catch (error) {
      console.error('Story generation failed:', error);
      throw this.handleError(error);
    }
  }

  /**
   * Generate suggested user responses
   */
  async generateSuggestions(
    sessionId: string,
    storyContext: StoryContext
  ): Promise<string[]> {
    try {
      const conversation = this.conversationCache.get(sessionId);
      if (!conversation || conversation.length < 2) {
        return this.getDefaultSuggestions(storyContext.language);
      }

      const lastAIResponse = conversation[conversation.length - 1].content;
      const prompt = PromptBuilder.buildSuggestionPrompt(
        storyContext.characterName,
        lastAIResponse,
        storyContext.startingSituation
      );

      const response = await this.client.chatCompletion([
        { role: 'user', content: prompt }
      ], {
        temperature: 0.7,
        maxTokens: 150,
      });

      const content = response.choices[0]?.message?.content || '[]';
      
      try {
        const suggestions = JSON.parse(content);
        return Array.isArray(suggestions) ? suggestions.slice(0, 3) : this.getDefaultSuggestions(storyContext.language);
      } catch {
        return this.getDefaultSuggestions(storyContext.language);
      }
    } catch (error) {
      console.error('Suggestion generation failed:', error);
      return this.getDefaultSuggestions(storyContext.language);
    }
  }

  /**
   * Clear session cache
   */
  clearSession(sessionId: string): void {
    this.conversationCache.delete(sessionId);
  }

  /**
   * Test API connection
   */
  async testConnection(): Promise<boolean> {
    return this.client.testConnection();
  }

  // Private helper methods

  private prepareMessages(conversation: AIMessage[]): AIMessage[] {
    // Keep system prompt and limit conversation history
    const systemPrompt = conversation[0];
    const recentMessages = conversation.slice(1).slice(-20); // Keep last 20 messages
    return [systemPrompt, ...recentMessages];
  }

  private trimConversationHistory(sessionId: string): void {
    const conversation = this.conversationCache.get(sessionId);
    if (conversation && conversation.length > 50) {
      // Keep system prompt and last 40 messages
      const systemPrompt = conversation[0];
      const trimmed = conversation.slice(-40);
      this.conversationCache.set(sessionId, [systemPrompt, ...trimmed]);
    }
  }

  private parseAIResponse(response: string): {
    message: string;
    emotion?: string;
    isNarration: boolean;
  } {
    // Check if response contains narration (text in asterisks)
    const hasNarration = response.includes('*');
    
    // Extract emotion if present (simple heuristic)
    let emotion: string | undefined;
    if (response.includes('😊') || response.includes('smile')) emotion = 'happy';
    else if (response.includes('😢') || response.includes('sad')) emotion = 'sad';
    else if (response.includes('😮') || response.includes('surprise')) emotion = 'surprised';
    else if (response.includes('😡') || response.includes('angry')) emotion = 'angry';

    return {
      message: response,
      emotion,
      isNarration: hasNarration,
    };
  }

  private getTemperature(userContext: UserContext): number {
    const creativity = userContext.preferences?.creativityLevel;
    if (creativity !== undefined) {
      return 0.3 + (creativity * 0.7); // Range: 0.3 to 1.0
    }
    return AI_CONFIG.nvidia.temperature;
  }

  private getMaxTokens(userContext: UserContext): number {
    const length = userContext.preferences?.responseLength;
    switch (length) {
      case 'short': return 150;
      case 'medium': return 300;
      case 'long': return 500;
      default: return AI_CONFIG.nvidia.maxTokens;
    }
  }

  private getDefaultSuggestions(language: 'ko' | 'en' | 'ja'): string[] {
    const suggestions = {
      ko: [
        "안녕하세요! 만나서 반가워요.",
        "여기는 어떤 곳인가요?",
        "무엇을 도와드릴까요?"
      ],
      en: [
        "Hello! Nice to meet you.",
        "What is this place?",
        "How can I help you?"
      ],
      ja: [
        "こんにちは！はじめまして。",
        "ここはどんな場所ですか？",
        "何かお手伝いできますか？"
      ]
    };
    return suggestions[language];
  }

  private handleError(error: any): AIError {
    if (error && typeof error === 'object' && 'code' in error) {
      return error as AIError;
    }

    return {
      code: 'AI_SERVICE_ERROR',
      message: 'Failed to generate AI response',
      details: error,
      retryable: true,
    };
  }
}
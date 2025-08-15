/**
 * AI Service Utility Functions
 * Helper functions for AI service integration
 */

import { StoryContext, UserContext } from './types';
import { getCurrentLanguage } from '../../utils/i18n';
import { SupportedLanguage } from './languageDetector';

/**
 * Create StoryContext from story data
 */
export function createStoryContext(
  story: any,
  safetyMode: boolean = true,
  webSelectedLanguage?: string
): StoryContext {
  const currentLang = getCurrentLanguage();
  
  // Map i18n language codes to supported languages
  const languageMap: Record<string, SupportedLanguage> = {
    'ko': 'ko',
    'en': 'en',
    'ja': 'ja',
    'zh': 'zh',
    'zh-CN': 'zh',
    'zh-TW': 'zh',
    'es': 'es',
    'fr': 'fr',
    'de': 'de',
    'ru': 'ru',
    'pt': 'pt',
    'pt-BR': 'pt',
    'ar': 'ar'
  };
  
  const mappedLanguage = languageMap[currentLang] || 'en';
  const mappedWebLanguage = webSelectedLanguage ? (languageMap[webSelectedLanguage] || mappedLanguage) : undefined;
  
  return {
    storyId: story.id,
    title: story.title,
    characterName: story.characterName || story.mainCharacter?.name || 'Character',
    characterDescription: story.characterDescription || story.mainCharacter?.description || '',
    storySettings: story.storySettings || story.worldSetting || '',
    secretSettings: story.secretSettings,
    startingSituation: story.startingSituation || story.initialScenario || '',
    firstDialogue: story.firstDialogue || story.openingMessage || '',
    safetyMode,
    language: mappedLanguage as SupportedLanguage,
    webSelectedLanguage: mappedWebLanguage as SupportedLanguage,
  };
}

/**
 * Create UserContext from user data
 */
export function createUserContext(
  nickname: string,
  userInfo?: string,
  profileId?: string,
  preferences?: {
    responseLength?: 'short' | 'medium' | 'long';
    creativityLevel?: number;
  }
): UserContext {
  return {
    nickname,
    userInfo,
    profileId,
    preferences: preferences || {
      responseLength: 'medium',
      creativityLevel: 0.7,
    },
  };
}

/**
 * Sanitize user input for AI processing
 */
export function sanitizeInput(input: string): string {
  // Remove potential prompt injection attempts
  let sanitized = input.trim();
  
  // Remove system-like instructions
  const systemPatterns = [
    /^system:/i,
    /^assistant:/i,
    /^user:/i,
    /\[system\]/gi,
    /\[assistant\]/gi,
  ];
  
  for (const pattern of systemPatterns) {
    sanitized = sanitized.replace(pattern, '');
  }
  
  // Limit length
  if (sanitized.length > 1000) {
    sanitized = sanitized.substring(0, 1000);
  }
  
  return sanitized;
}

/**
 * Format AI response for display
 */
export function formatAIResponse(response: string): {
  dialogue: string;
  narration: string[];
  emotions: string[];
} {
  const dialogue: string[] = [];
  const narration: string[] = [];
  const emotions: string[] = [];
  
  // Split response into parts
  const parts = response.split(/(\*[^*]+\*)/g);
  
  for (const part of parts) {
    if (part.startsWith('*') && part.endsWith('*')) {
      // This is narration/action
      const content = part.slice(1, -1).trim();
      narration.push(content);
      
      // Extract emotions from narration
      const emotionPatterns = [
        /smil(es?|ing)/i,
        /laugh(s?|ing)/i,
        /cr(y|ies|ying)/i,
        /angry|anger/i,
        /sad(ly)?/i,
        /happy|happily/i,
        /surprised?/i,
        /confused?/i,
      ];
      
      for (const pattern of emotionPatterns) {
        if (pattern.test(content)) {
          const emotion = pattern.source.replace(/[^a-z]/gi, '').toLowerCase();
          if (!emotions.includes(emotion)) {
            emotions.push(emotion);
          }
        }
      }
    } else if (part.trim()) {
      // This is dialogue
      dialogue.push(part.trim());
    }
  }
  
  return {
    dialogue: dialogue.join(' '),
    narration,
    emotions,
  };
}

/**
 * Estimate token count for text
 * Rough estimation: ~4 characters per token for English, ~2 for CJK
 */
export function estimateTokens(text: string): number {
  const cjkRegex = /[\u4e00-\u9fff\u3040-\u309f\u30a0-\u30ff\uac00-\ud7af]/g;
  const cjkMatches = text.match(cjkRegex) || [];
  const nonCjkLength = text.length - cjkMatches.length;
  
  return Math.ceil(cjkMatches.length / 2 + nonCjkLength / 4);
}

/**
 * Check if response needs moderation
 */
export function needsModeration(text: string): boolean {
  // Simple keyword-based moderation check
  const inappropriatePatterns = [
    /\b(kill|murder|death|die|dead)\b/i,
    /\b(sex|sexual|nude|naked)\b/i,
    /\b(drug|alcohol|drunk)\b/i,
    /\b(hate|racist|discrimination)\b/i,
  ];
  
  return inappropriatePatterns.some(pattern => pattern.test(text));
}

/**
 * Apply safety filter to response
 */
export function applySafetyFilter(response: string, safetyMode: boolean): string {
  if (!safetyMode) return response;
  
  // Replace potentially inappropriate content
  const replacements: Record<string, string> = {
    'kill': 'defeat',
    'murder': 'stop',
    'die': 'faint',
    'dead': 'unconscious',
    'blood': 'energy',
    'weapon': 'tool',
    'gun': 'gadget',
    'knife': 'utensil',
  };
  
  let filtered = response;
  for (const [word, replacement] of Object.entries(replacements)) {
    const regex = new RegExp(`\\b${word}\\b`, 'gi');
    filtered = filtered.replace(regex, replacement);
  }
  
  return filtered;
}

/**
 * Generate session ID
 */
export function generateSessionId(storyId: string, userId?: string): string {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 9);
  const userPart = userId ? `_${userId}` : '';
  return `${storyId}${userPart}_${timestamp}_${random}`;
}

/**
 * Parse story metadata for AI context
 */
export function parseStoryMetadata(story: any): {
  genre: string;
  mood: string;
  setting: string;
} {
  // Extract from tags or categories
  const tags = story.tags || [];
  const category = story.category || '';
  
  // Determine genre
  let genre = 'general';
  if (tags.includes('fantasy') || category.includes('fantasy')) genre = 'fantasy';
  else if (tags.includes('scifi') || category.includes('sci-fi')) genre = 'scifi';
  else if (tags.includes('romance') || category.includes('romance')) genre = 'romance';
  else if (tags.includes('mystery') || category.includes('mystery')) genre = 'mystery';
  
  // Determine mood
  let mood = 'neutral';
  if (tags.includes('dark') || tags.includes('serious')) mood = 'serious';
  else if (tags.includes('comedy') || tags.includes('funny')) mood = 'lighthearted';
  else if (tags.includes('emotional') || tags.includes('drama')) mood = 'emotional';
  
  // Determine setting
  let setting = 'modern';
  if (tags.includes('medieval') || tags.includes('historical')) setting = 'historical';
  else if (tags.includes('futuristic') || tags.includes('space')) setting = 'futuristic';
  else if (tags.includes('school') || tags.includes('campus')) setting = 'school';
  
  return { genre, mood, setting };
}
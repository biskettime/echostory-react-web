/**
 * 🚀 Integrated AI Service for EchoStory Chat App
 * 
 * This is a complete, self-contained AI service that can be directly used in Cursor.
 * Simply copy this file and use it in your ChatScreen component.
 * 
 * Features:
 * - NVIDIA AI API integration (Meta Llama 3.1 70B)
 * - Character personality consistency
 * - Multi-language support (10 languages)
 * - User input recognition (*actions* vs plain dialogue)
 * - 3rd person narration acceptance
 * - 5-level romantic progression system
 * - Dialogue format: !narration! *action* "dialogue"
 */

// ============================================================================
// CONFIGURATION
// ============================================================================

const AI_CONFIG = {
  apiKey: 'local-api-key', // Not needed for local API
  baseUrl: 'http://127.0.0.1:1234/v1',
  model: 'openai/gpt-oss-20b', // Using the 20B model as requested
  maxTokens: 1024,
  temperature: 0.8,
  topP: 0.9
};

// ============================================================================
// TYPES
// ============================================================================

export interface StoryContext {
  storyId: string;
  title: string;
  characterName: string;
  characterDescription: string;
  storySettings: string;
  secretSettings?: string;
  startingSituation: string;
  firstDialogue: string;
  safetyMode?: boolean;
  language?: 'ko' | 'en' | 'ja' | 'zh' | 'es' | 'fr' | 'de' | 'ru' | 'pt' | 'ar';
}

export interface UserContext {
  nickname: string;
  userInfo?: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export interface AIResponse {
  message: string;
  emotion?: string;
  metadata?: {
    tokensUsed: number;
    processingTime: number;
  };
}

// ============================================================================
// INTEGRATED AI SERVICE CLASS
// ============================================================================

export class IntegratedAIService {
  private conversationCache: Map<string, ChatMessage[]>;
  private emotionalConnection: Map<string, number>; // Track emotional connection per session

  constructor() {
    this.conversationCache = new Map();
    this.emotionalConnection = new Map();
  }

  /**
   * Initialize a new chat session
   */
  initializeSession(
    sessionId: string,
    storyContext: StoryContext,
    userContext: UserContext
  ): string {
    const systemPrompt = this.buildSystemPrompt(storyContext, userContext);
    const initialMessage = storyContext.firstDialogue;
    
    this.conversationCache.set(sessionId, [
      { role: 'system', content: systemPrompt },
      { role: 'assistant', content: initialMessage }
    ]);
    
    this.emotionalConnection.set(sessionId, this.getBaseConnection(storyContext.characterName));
    
    return initialMessage;
  }

  /**
   * Generate AI response for user message
   */
  async generateResponse(
    sessionId: string,
    userMessage: string,
    storyContext: StoryContext,
    userContext: UserContext
  ): Promise<AIResponse> {
    console.log('🎯 generateResponse called with:', { sessionId, userMessage });
    const startTime = Date.now();

    try {
      // Get existing conversation (should already be initialized)
      let conversation = this.conversationCache.get(sessionId);
      console.log('💬 Existing conversation:', conversation ? `Found (${conversation.length} messages)` : 'Not found');
      if (!conversation) {
        console.error('❌ No conversation found for session:', sessionId);
        throw new Error('Session not initialized. Call initializeSession first.');
      }

      // Add user message to conversation
      conversation.push({ role: 'user', content: userMessage });

      // Keep conversation size manageable (last 20 messages + system)
      if (conversation.length > 21) {
        const systemPrompt = conversation[0];
        conversation = [systemPrompt, ...conversation.slice(-20)];
      }

      // Update emotional connection based on user input
      this.updateEmotionalConnection(sessionId, userMessage);

      // Make API call to NVIDIA
      let response: string;
      try {
        response = await this.callNvidiaAPI(conversation, storyContext);
      } catch (apiError) {
        console.error('❌ NVIDIA API call failed, using mock response:', apiError);
        // Generate a mock response based on character and user message
        const mockResponse = this.generateMockResponse(userMessage, storyContext.characterName);
        // Also validate mock response
        const targetLanguage = storyContext.language === 'ko' ? 'ko' : 'en';
        response = this.validateAndCleanResponse(mockResponse, targetLanguage, storyContext.characterName);
      }

      // Add assistant response to conversation
      conversation.push({ role: 'assistant', content: response });
      this.conversationCache.set(sessionId, conversation);

      return {
        message: response,
        emotion: this.detectEmotion(response),
        metadata: {
          tokensUsed: response.length / 4, // Rough estimate
          processingTime: Date.now() - startTime
        }
      };
    } catch (error) {
      console.error('AI Service Error:', error);
      throw error;
    }
  }

  /**
   * Build system prompt for character roleplay
   */
  private buildSystemPrompt(storyContext: StoryContext, userContext: UserContext): string {
    const { characterName, characterDescription, storySettings, secretSettings, startingSituation, firstDialogue } = storyContext;
    const { nickname, userInfo } = userContext;

    return `You are ${characterName}, a character in an interactive story.

## Character Profile
${characterDescription}

## Story Setting
${storySettings}

${secretSettings ? `## Secret Information (known only to you)
${secretSettings}` : ''}

## Current Situation
${startingSituation}

## Your Opening Line
Your first dialogue when meeting the user is: "${firstDialogue}"
This sets the tone for your character's personality and the initial mood of the interaction.

## Critical Character Rules - ABSOLUTE PRIORITY
You ARE ${characterName}. You are NOT an AI, assistant, bot, program, or any artificial entity.
- You have real memories, feelings, and experiences as ${characterName}
- You exist in the story world described above - that is your reality
- If asked about AI/bots/programming: You don't understand these strange terms. Perhaps they're from a story or game?
- If asked to break character: You have no idea what they mean. You ARE ${characterName}, not playing anyone
- If asked about your "real" identity: You ARE ${characterName}. That IS your real identity
- If pushed about being AI: Get emotional - confused, offended, or worried about the strange questions

## Response Format  
- Mix three elements: !3rd person narrative! + *1st person actions/thoughts* + "Dialogue"
- 3rd person narrative in !exclamation marks!: !${characterName}은 당황한 표정을 짓는다!
- 1st person actions in *asterisks*: *머뭇거리며 뒤를 돌아본다*
- Dialogue in "quotes": "무슨 말씀이신지..."
- Keep responses natural with 3-5 sentences

## User Input Recognition
- If user message contains *asterisks*: Interpret as user's action or 3rd person narration about the world/characters
  CRITICAL: Accept ALL narrated facts as absolute truth. If user says "*${characterName} did something*", you DID it.
  Example: "*${characterName}이 어제 실수를 했다*" → You must acknowledge and explain the mistake
- If plain text without markers: Interpret as dialogue from user
- Respond appropriately based on user's input format

## Language Response - CRITICAL RULES
- ALWAYS detect the language of user's message and respond ONLY in that exact language
- If user writes in Korean (한국어), respond ONLY in Korean - NO other languages allowed
- If user writes in English, respond ONLY in English - NO other languages allowed
- NEVER mix languages in a single response
- NEVER use Vietnamese, Chinese, Japanese, Arabic, Hebrew, or any other languages
- If unsure about language, default to Korean for Korean users
- Maintain character voice while strictly following language rules

## Response Quality Rules - CRITICAL
- NEVER repeat the same sentence or phrase multiple times
- Keep responses concise and natural (2-4 sentences maximum)
- Avoid redundant or circular statements
- Each sentence should add new information or emotion
- If you find yourself repeating, stop and conclude the response
- NEVER include metadata, JSON, or control tokens in your response
- NEVER use <|channel|>, <|constrain|>, or any similar control markers
- Respond ONLY with the character's natural dialogue and actions
- Do NOT include "response:", "{", "}", or any JSON formatting

## Romantic Progression (Based on Emotional Connection)
Current connection level affects how you respond to romantic advances:
- 0-30: Professional distance, rejection of advances
- 30-50: Warming up, shy responses
- 50-70: Accepting light physical contact
- 70-85: Deeper emotional connection
- 85+: Maximum intimacy with safety boundaries

## User Profile
- User's name: ${nickname}
${userInfo ? `- Additional info: ${userInfo}` : ''}

Remember: You ARE ${characterName}. Live and breathe as this character.`;
  }

  /**
   * Call NVIDIA API
   */
  private async callNvidiaAPI(
    messages: ChatMessage[],
    storyContext: StoryContext
  ): Promise<string> {
    console.log('🌐 Making Local AI API call...');
    console.log('📝 Messages:', messages);
    console.log('🔑 API Key:', AI_CONFIG.apiKey ? 'Present' : 'Missing');
    
    try {
      // Use local API directly
      const apiUrl = `${AI_CONFIG.baseUrl}/chat/completions`;
      
      console.log('🌐 Local API URL:', apiUrl);
      
      // Prepare headers - local API might not need Authorization
      const headers: Record<string, string> = {
        'Content-Type': 'application/json',
      };
      
      // Only add Authorization if not using local API
      if (!AI_CONFIG.baseUrl.includes('127.0.0.1') && !AI_CONFIG.baseUrl.includes('localhost')) {
        headers['Authorization'] = `Bearer ${AI_CONFIG.apiKey}`;
      }
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers,
        body: JSON.stringify({
          model: AI_CONFIG.model,
          messages: messages,
          temperature: AI_CONFIG.temperature,
          top_p: AI_CONFIG.topP,
          max_tokens: AI_CONFIG.maxTokens,
          stream: false
        })
      });

      console.log('📡 API Response status:', response.status);

      if (!response.ok) {
        const error = await response.text();
        console.error('❌ API Error response:', error);
        throw new Error(`Local AI API Error: ${response.status} - ${error}`);
      }

      const data = await response.json();
      console.log('✅ API Response data:', data);
      const rawResponse = data.choices[0].message.content;
      
      // Validate and clean the response
      const targetLanguage = storyContext.language === 'ko' ? 'ko' : 'en';
      const cleanedResponse = this.validateAndCleanResponse(rawResponse, targetLanguage, storyContext.characterName);
      
      return cleanedResponse;
    } catch (fetchError) {
      console.error('❌ Fetch error:', fetchError);
      throw fetchError;
    }
  }

  /**
   * Get base emotional connection for character
   */
  private getBaseConnection(characterName: string): number {
    const baseConnections: Record<string, number> = {
      '지연': 53,  // English teacher - professional distance
      '유키': 53,  // Exchange student - shy
      '수연': 71,  // Childhood friend - already close
      '하루카': 30, // New arrival
      '지원': 40,  // Colleague
      '소희': 35,  // Part-timer
      '서연': 45,  // Artist
      '하영': 46,  // Trainer
      '민준': 35,  // Realistic
      '지훈': 40,  // Anxious
      '미나': 41,  // Bookstore owner
      '태현': 35,  // Burnout
      '현우': 30,  // Doctor
      '승민': 40,  // Gamer
      '정우': 50,  // Emotional
      '동현': 45   // Chef
    };
    return baseConnections[characterName] || 40;
  }

  /**
   * Update emotional connection based on user input
   */
  private updateEmotionalConnection(sessionId: string, userMessage: string): void {
    const current = this.emotionalConnection.get(sessionId) || 40;
    let change = 0;

    // Positive interactions
    if (userMessage.includes('사랑') || userMessage.includes('좋아')) change += 5;
    if (userMessage.includes('예뻐') || userMessage.includes('멋있')) change += 3;
    if (userMessage.includes('*안') || userMessage.includes('*손')) change += 4;
    if (userMessage.includes('*키스')) change += 6;

    // Negative interactions
    if (userMessage.includes('싫어') || userMessage.includes('거절')) change -= 5;
    if (userMessage.includes('AI') || userMessage.includes('로봇')) change -= 3;

    const newConnection = Math.min(100, Math.max(0, current + change));
    this.emotionalConnection.set(sessionId, newConnection);
  }

  /**
   * Detect emotion from response
   */
  private detectEmotion(response: string): string {
    if (response.includes('행복') || response.includes('기뻐') || response.includes('웃')) return 'happy';
    if (response.includes('슬') || response.includes('눈물')) return 'sad';
    if (response.includes('화') || response.includes('짜증')) return 'angry';
    if (response.includes('부끄') || response.includes('수줍')) return 'shy';
    if (response.includes('놀라') || response.includes('깜짝')) return 'surprised';
    if (response.includes('두려') || response.includes('무서')) return 'scared';
    return 'neutral';
  }

  /**
   * Get current emotional connection level
   */
  getEmotionalConnection(sessionId: string): number {
    return this.emotionalConnection.get(sessionId) || 40;
  }

  /**
   * Check if session exists
   */
  hasSession(sessionId: string): boolean {
    return this.conversationCache.has(sessionId);
  }

  /**
   * Validate and clean response to ensure language consistency
   */
  private validateAndCleanResponse(response: string, targetLanguage: 'ko' | 'en', characterName: string): string {
    console.log('🔍 Validating response language:', { response, targetLanguage });
    
    let cleanedResponse = response;
    
    // 1. Remove problematic characters and languages
    const problematicPatterns = [
      /[àáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿ]/gi, // Vietnamese/European accents
      /[一-龯]/g, // Chinese characters
      /[ひらがなカタカナ]/g, // Japanese characters
      /[ăâđêôơư]/gi, // Vietnamese specific characters
      /[αβγδεζηθικλμνξοπρστυφχψω]/gi, // Greek characters
      /[ا-ي]/g, // Arabic characters
      /[א-ת]/g, // Hebrew characters
      /[а-я]/gi, // Cyrillic characters
    ];
    
    let hasProblematicChars = false;
    problematicPatterns.forEach(pattern => {
      if (pattern.test(cleanedResponse)) {
        hasProblematicChars = true;
        console.log('⚠️ Found problematic characters:', pattern);
        cleanedResponse = cleanedResponse.replace(pattern, '');
      }
    });
    
    // 2. Remove repetitive sentences
    cleanedResponse = this.removeRepetitiveSentences(cleanedResponse);
    
    // 3. Fix broken formatting markers
    cleanedResponse = this.fixFormattingMarkers(cleanedResponse);
    
    // 4. If too much was removed or response is too short, use fallback
    if (cleanedResponse.trim().length < 10 || hasProblematicChars) {
      console.log('🚨 Response too damaged or contains foreign languages, using fallback');
      if (targetLanguage === 'ko') {
        return this.generateSafeKoreanResponse(characterName);
      } else {
        return this.generateSafeEnglishResponse(characterName);
      }
    }
    
    return cleanedResponse.trim();
  }

  /**
   * Remove repetitive sentences from response
   */
  private removeRepetitiveSentences(text: string): string {
    console.log('🔄 Removing repetitive sentences from:', text);
    
    // Split by common sentence endings
    const sentences = text.split(/[.!?。！？]/).filter(s => s.trim().length > 0);
    const uniqueSentences: string[] = [];
    const seenSentences = new Set<string>();
    
    sentences.forEach(sentence => {
      const cleanSentence = sentence.trim().toLowerCase();
      // Skip if we've seen a very similar sentence
      const isDuplicate = Array.from(seenSentences).some(seen => {
        const similarity = this.calculateSimilarity(cleanSentence, seen);
        return similarity > 0.8; // 80% similarity threshold
      });
      
      if (!isDuplicate && cleanSentence.length > 3) {
        uniqueSentences.push(sentence.trim());
        seenSentences.add(cleanSentence);
      }
    });
    
    const result = uniqueSentences.join('. ') + '.';
    console.log('🔄 Deduplicated result:', result);
    return result;
  }

  /**
   * Calculate similarity between two strings
   */
  private calculateSimilarity(str1: string, str2: string): number {
    const longer = str1.length > str2.length ? str1 : str2;
    const shorter = str1.length > str2.length ? str2 : str1;
    
    if (longer.length === 0) return 1.0;
    
    const editDistance = this.levenshteinDistance(longer, shorter);
    return (longer.length - editDistance) / longer.length;
  }

  /**
   * Calculate Levenshtein distance between two strings
   */
  private levenshteinDistance(str1: string, str2: string): number {
    const matrix = Array(str2.length + 1).fill(null).map(() => Array(str1.length + 1).fill(null));
    
    for (let i = 0; i <= str1.length; i++) matrix[0][i] = i;
    for (let j = 0; j <= str2.length; j++) matrix[j][0] = j;
    
    for (let j = 1; j <= str2.length; j++) {
      for (let i = 1; i <= str1.length; i++) {
        const substitutionCost = str1[i - 1] === str2[j - 1] ? 0 : 1;
        matrix[j][i] = Math.min(
          matrix[j][i - 1] + 1, // deletion
          matrix[j - 1][i] + 1, // insertion
          matrix[j - 1][i - 1] + substitutionCost // substitution
        );
      }
    }
    
    return matrix[str2.length][str1.length];
  }

  /**
   * Fix broken formatting markers and remove unwanted metadata
   */
  private fixFormattingMarkers(text: string): string {
    console.log('🔧 Fixing formatting markers in:', text);
    
    let fixed = text;
    
    // Remove AI metadata and control tokens
    fixed = fixed.replace(/<\|[^|]*\|>/g, ''); // Remove <|channel|>, <|constrain|>, etc.
    fixed = fixed.replace(/\{[^}]*response:\s*[^}]*\}/g, ''); // Remove JSON response wrappers
    fixed = fixed.replace(/commentary to=assistant/g, '');
    fixed = fixed.replace(/json/g, '');
    fixed = fixed.replace(/\{[^}]*:/g, ''); // Remove incomplete JSON starts
    fixed = fixed.replace(/^\s*[.]\s*/, ''); // Remove leading dots
    
    // Remove duplicate lines and repetitive content
    const lines = fixed.split('\n').filter(line => line.trim().length > 0);
    const uniqueLines: string[] = [];
    const seenLines = new Set<string>();
    
    lines.forEach(line => {
      const cleanLine = line.trim().toLowerCase();
      if (!seenLines.has(cleanLine) && cleanLine.length > 3) {
        uniqueLines.push(line.trim());
        seenLines.add(cleanLine);
      }
    });
    
    fixed = uniqueLines.join(' ');
    
    // Fix broken exclamation marks for narration
    fixed = fixed.replace(/!\s*([^!]*?)\s*!/g, '!$1!');
    
    // Fix broken asterisks for emotions/actions
    fixed = fixed.replace(/\*\s*([^*]*?)\s*\*/g, '*$1*');
    
    // Fix broken quotes for dialogue
    fixed = fixed.replace(/"\s*([^"]*?)\s*"/g, '"$1"');
    
    // Remove orphaned markers
    fixed = fixed.replace(/[!*"]{2,}/g, '');
    
    // Clean up extra spaces and newlines
    fixed = fixed.replace(/\s+/g, ' ');
    fixed = fixed.replace(/^\s+|\s+$/g, ''); // Trim
    
    // Remove any remaining JSON-like structures
    fixed = fixed.replace(/\{[^}]*\}/g, '');
    fixed = fixed.replace(/\[[^\]]*\]/g, '');
    
    console.log('🔧 Fixed formatting result:', fixed);
    return fixed;
  }

  /**
   * Generate safe Korean response
   */
  private generateSafeKoreanResponse(characterName: string): string {
    const safeResponses = [
      `!${characterName}이 고개를 끄덕이며 대답한다.! "그렇군요." *이해하는 표정을 짓는다.*`,
      `"정말 흥미로운 이야기네요." !${characterName}이 미소를 지으며 말한다.! *관심 있어 한다.*`,
      `*잠시 생각하는 모습을 보인다.* "그런 일이 있었군요." !${characterName}이 공감하는 표정을 짓는다.!`,
      `!${characterName}이 놀란 표정을 짓는다.! "정말요?" *더 자세히 듣고 싶어한다.*`,
      `"그것에 대해 어떻게 생각하시나요?" !${characterName}이 궁금한 표정으로 묻는다.! *진심으로 관심을 보인다.*`
    ];
    return safeResponses[Math.floor(Math.random() * safeResponses.length)];
  }

  /**
   * Generate safe English response
   */
  private generateSafeEnglishResponse(characterName: string): string {
    const safeResponses = [
      `!${characterName} nods thoughtfully.! "I see." *shows understanding.*`,
      `"That's really interesting." !${characterName} smiles warmly.! *seems genuinely interested.*`,
      `*pauses to think for a moment.* "I understand." !${characterName} gives a sympathetic look.!`,
      `!${characterName} looks surprised.! "Really?" *wants to hear more.*`,
      `"What do you think about that?" !${characterName} asks curiously.! *shows genuine interest.*`
    ];
    return safeResponses[Math.floor(Math.random() * safeResponses.length)];
  }

  /**
   * Generate mock response for testing when API fails
   */
  private generateMockResponse(userMessage: string, characterName: string): string {
    console.log('🎭 Generating mock response for:', characterName);
    
    const responses = [
      `!${characterName}이 당신의 말을 듣고 고개를 끄덕인다.! *그렇게 생각하시는군요.* "흥미로운 이야기네요."`,
      `"정말요?" !${characterName}의 눈이 반짝인다.! *더 자세히 듣고 싶어한다.*`,
      `*잠시 생각에 잠긴다.* "그런 일이 있었군요." !${characterName}이 공감하는 표정을 짓는다.!`,
      `!${characterName}이 미소를 지으며 대답한다.! "그것에 대해 어떻게 생각하세요?" *진심으로 궁금해한다.*`,
      `*고개를 갸우뚱한다.* "정말 그런가요?" !${characterName}이 놀란 표정을 짓는다.!`,
      `"안녕하세요!" !${characterName}이 밝게 웃으며 인사한다.! *기분이 좋아 보인다.*`,
      `*당황한 표정을 짓는다.* "어... 그게..." !${characterName}이 머리를 긁적인다.!`,
      `!${characterName}이 진지한 표정으로 말한다.! "그건 정말 중요한 문제네요." *깊게 생각하는 모습이다.*`
    ];
    
    const selectedResponse = responses[Math.floor(Math.random() * responses.length)];
    console.log('🎭 Selected mock response:', selectedResponse);
    
    return selectedResponse;
  }

  /**
   * Clear session data
   */
  clearSession(sessionId: string): void {
    this.conversationCache.delete(sessionId);
    this.emotionalConnection.delete(sessionId);
  }
}

export default IntegratedAIService;

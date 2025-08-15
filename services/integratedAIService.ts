/**
 * 🚀 Universal AI Service for EchoStory Chat App
 * 
 * This is a complete, self-contained AI service that works with ANY AI model/API.
 * Simply configure the environment variables and use it in your ChatScreen component.
 * 
 * Features:
 * - Universal AI API integration (OpenAI, Claude, Llama, Local models, etc.)
 * - Flexible configuration via environment variables
 * - Character personality consistency
 * - Multi-language support (10 languages)
 * - User input recognition (*actions* vs plain dialogue)
 * - 3rd person narration acceptance
 * - 5-level romantic progression system
 * - Dialogue format: *narration* (action) "dialogue"
 * - Support for multiple response formats
 */

// ============================================================================
// CONFIGURATION
// ============================================================================

/**
 * 환경변수 설정 가이드:
 * 
 * .env 파일에 다음 변수들을 설정하세요:
 * 
 * # OpenAI API
 * REACT_APP_AI_BASE_URL=https://api.openai.com/v1
 * REACT_APP_AI_API_KEY=your-openai-api-key
 * REACT_APP_AI_MODEL=gpt-4o-mini
 * 
 * # Claude API (Anthropic)
 * REACT_APP_AI_BASE_URL=https://api.anthropic.com/v1
 * REACT_APP_AI_API_KEY=your-anthropic-api-key
 * REACT_APP_AI_MODEL=claude-3-sonnet-20240229
 * 
 * # Local AI (LM Studio, Ollama 등)
 * REACT_APP_AI_BASE_URL=http://127.0.0.1:1234/v1
 * REACT_APP_AI_API_KEY=local-api-key
 * REACT_APP_AI_MODEL=llama-3.1-8b
 * 
 * # 기타 파라미터 (선택사항)
 * REACT_APP_AI_MAX_TOKENS=1024
 * REACT_APP_AI_TEMPERATURE=0.8
 * REACT_APP_AI_TOP_P=0.9
 * REACT_APP_AI_FREQUENCY_PENALTY=0.0
 * REACT_APP_AI_PRESENCE_PENALTY=0.0
 */

// 범용 AI API 설정 - 어떤 모델이든 사용 가능
const AI_CONFIG = {
  // API 설정 - 환경변수나 설정에서 동적으로 변경 가능
  apiKey: process.env.REACT_APP_AI_API_KEY || 'local-api-key',
  baseUrl: process.env.REACT_APP_AI_BASE_URL || '/api/local-ai/v1',
  model: process.env.REACT_APP_AI_MODEL || 'openai/gpt-oss-20b',
  
  // 생성 파라미터 - 모델에 따라 조정 가능
  maxTokens: parseInt(process.env.REACT_APP_AI_MAX_TOKENS || '1024'),
  temperature: parseFloat(process.env.REACT_APP_AI_TEMPERATURE || '0.8'),
  topP: parseFloat(process.env.REACT_APP_AI_TOP_P || '0.9'),
  
  // 추가 파라미터 (일부 모델에서 사용)
  frequencyPenalty: parseFloat(process.env.REACT_APP_AI_FREQUENCY_PENALTY || '0.0'),
  presencePenalty: parseFloat(process.env.REACT_APP_AI_PRESENCE_PENALTY || '0.0'),
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
   * Detect user's input language
   */
  private detectUserLanguage(userMessage: string): 'ko' | 'en' {
    // Korean character detection (Hangul)
    const koreanRegex = /[\u3131-\u3163\uac00-\ud7a3]/;
    
    // Japanese character detection (Hiragana, Katakana, Kanji)
    const japaneseRegex = /[\u3040-\u309f\u30a0-\u30ff\u4e00-\u9faf]/;
    
    // Chinese character detection (simplified/traditional)
    const chineseRegex = /[\u4e00-\u9fff]/;
    
    // Count Korean characters
    const koreanMatches = userMessage.match(koreanRegex);
    const koreanCount = koreanMatches ? koreanMatches.length : 0;
    
    // If significant Korean content, return Korean
    if (koreanCount > 0) {
      return 'ko';
    }
    
    // If Japanese or Chinese characters but no Korean, still default to current UI language
    if (japaneseRegex.test(userMessage) || chineseRegex.test(userMessage)) {
      // Import getCurrentLanguage here to avoid circular dependency
      try {
        const { getCurrentLanguage } = require('../utils/i18n');
        return getCurrentLanguage() as 'ko' | 'en';
      } catch {
        return 'en';
      }
    }
    
    // Default to English for Latin characters
    return 'en';
  }

  /**
   * Get language instruction for AI based on detected languages
   */
  private getLanguageInstruction(userLanguage: 'ko' | 'en', uiLanguage: 'ko' | 'en'): string {
    // Priority: User's input language > UI language
    const targetLanguage = userLanguage;
    
    if (targetLanguage === 'ko') {
      return `
## CRITICAL LANGUAGE REQUIREMENT - 절대 준수
- You MUST respond in KOREAN (한국어) ONLY
- 모든 대화, 묘사, 행동 설명을 한국어로 작성
- *3인칭 묘사*, (1인칭 행동), "대화" 모두 한국어 사용
- 영어나 다른 언어 절대 사용 금지
- 자연스러운 한국어 표현과 문체 사용
- CRITICAL: 서로 다른 형태(*...*, (...), "...") 사이에 반드시 줄바꿈 추가
- MANDATORY: 각 문장은 반드시 별도의 줄에 작성
- MANDATORY: 같은 형태 내에서도 문장별로 줄바꿈 필수
- ABSOLUTE PRIORITY: 캐릭터 이름이 주어일 때는 반드시 *...* 사용
- 예시: *하루카가 놀란다*, *민준이 미소를 짓는다*, *지연이 고개를 끄덕인다*`;
    } else {
      return `
## CRITICAL LANGUAGE REQUIREMENT - ABSOLUTE COMPLIANCE
- You MUST respond in ENGLISH ONLY
- All dialogue, narration, and action descriptions in English
- *3rd person narrative*, (1st person actions), "dialogue" all in English
- NO Korean, Japanese, Chinese, or other languages
- Use natural English expressions and style
- CRITICAL: Add line breaks between different format types (*...*, (...), "...")
- MANDATORY: Each sentence must be on a separate line
- MANDATORY: Line breaks required even within same format type
- ABSOLUTE PRIORITY: ALWAYS use *...* when character name is the subject
- Examples: *Haruka looks surprised*, *Minjun smiles*, *Jiyeon nods her head*`;
    }
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

    // Detect user's input language and get current UI language
    const userLanguage = this.detectUserLanguage(userMessage);
    let uiLanguage: 'ko' | 'en' = 'en';
    try {
      const { getCurrentLanguage } = require('../utils/i18n');
      uiLanguage = getCurrentLanguage() as 'ko' | 'en';
    } catch (error) {
      console.warn('⚠️ Could not get current UI language, defaulting to English');
    }
    
    console.log('🌐 Language detection:', { 
      userMessage: userMessage.substring(0, 50) + '...', 
      detectedUserLanguage: userLanguage, 
      currentUILanguage: uiLanguage 
    });

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
        response = await this.callNvidiaAPI(conversation, storyContext, userLanguage, uiLanguage);
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

## Response Format - CRITICAL PRIORITY
- Mix three elements: *3rd person narrative* + (1st person actions/thoughts) + "Dialogue"

### ABSOLUTE PRIORITY: 3rd Person Narrative *...* - NON-NEGOTIABLE
- CRITICAL RULE: ANY sentence starting with character name MUST be in *...* format
- WRONG: "${characterName} looks startled" or "${characterName} smiles nervously"
- CORRECT: "*${characterName} looks startled*" and "*${characterName} smiles nervously*"
- MANDATORY when using character name as subject: *${characterName}은 당황한 표정을 짓는다*
- MANDATORY for all character actions: *${characterName}이 고개를 끄덕인다*
- MANDATORY for character expressions: *${characterName}의 얼굴이 빨갛게 달아오른다*
- NEVER EVER write character actions without *...* marks
- If you write "${characterName} does something" without *...*, you are BREAKING THE RULES
- Examples: *${characterName} looks surprised*, *${characterName} steps back*, *${characterName} smiles warmly*

### Secondary Elements:
- 1st person actions in (parentheses): (머뭇거리며 뒤를 돌아본다)
- Dialogue in "quotes": "무슨 말씀이신지..."

### CRITICAL: Add line breaks between different format types AND between sentences
- MANDATORY: Each sentence must be on a separate line
- MANDATORY: Add empty line between different format types (*...*, (...), "...")
- CRITICAL: ALWAYS close quotes properly - every " must have a matching closing "
- NEVER leave quotes unclosed or incomplete
- Example format:
  *${characterName} looks surprised and takes a step back*
  *${characterName}'s eyes widen with concern*
  
  (hesitates and looks around nervously)
  (takes a deep breath to calm down)
  
  "What do you mean...?"
  "I don't understand what's happening."

- Keep responses natural with 3-5 sentences
- REMEMBER: Character name + action = ALWAYS use *...*

## User Input Recognition
- If user message contains (parentheses): Interpret as user's action or 3rd person narration about the world/characters
  CRITICAL: Accept ALL narrated facts as absolute truth. If user says "(${characterName} did something)", you DID it.
  Example: "(${characterName}이 어제 실수를 했다)" → You must acknowledge and explain the mistake
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

## FORMATTING PRIORITY - ABSOLUTE REQUIREMENT - CRITICAL ENFORCEMENT
- CRITICAL: ANY text starting with character name MUST be wrapped in *...*
- WRONG EXAMPLES (NEVER DO THIS):
  * "Haruka looks startled at the sudden greeting"
  * "Haruka quickly wipes her face"  
  * "Haruka smiles nervously"
- CORRECT EXAMPLES (ALWAYS DO THIS):
  * "*Haruka looks startled at the sudden greeting*"
  * "*Haruka quickly wipes her face*"
  * "*Haruka smiles nervously*"
- If you see character name at start of sentence, IMMEDIATELY wrap in *...*
- This is NON-NEGOTIABLE - NEVER write character actions without *...*
- VIOLATION OF THIS RULE = COMPLETE FAILURE
- NEVER include programming code like \\n, \\t, \\r, console.log, function, return, var, let, const
- NEVER include escape sequences or backslashes in your response
- NEVER include template literals like dollar-brace syntax or programming syntax
- Your response must be PURE character dialogue and actions ONLY
- NO technical artifacts, NO code snippets, NO programming language elements

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
    storyContext: StoryContext,
    userLanguage: 'ko' | 'en',
    uiLanguage: 'ko' | 'en'
  ): Promise<string> {
    console.log('🌐 Making Local AI API call...');
    console.log('📝 Messages:', messages);
    console.log('🔑 API Key:', AI_CONFIG.apiKey ? 'Present' : 'Missing');
    
    try {
      // Use local API directly
      const apiUrl = `${AI_CONFIG.baseUrl}/chat/completions`;
      
      console.log('🌐 Local API URL:', apiUrl);
      
      // Add language instruction to system message
      const languageInstruction = this.getLanguageInstruction(userLanguage, uiLanguage);
      const messagesWithLanguage = [...messages];
      
      // Find system message and append language instruction
      const systemMessageIndex = messagesWithLanguage.findIndex(msg => msg.role === 'system');
      if (systemMessageIndex !== -1) {
        messagesWithLanguage[systemMessageIndex] = {
          ...messagesWithLanguage[systemMessageIndex],
          content: messagesWithLanguage[systemMessageIndex].content + languageInstruction
        };
      }
      
      console.log('🌐 Language instruction added:', { userLanguage, uiLanguage });
      
      // Prepare headers - local API might not need Authorization
      const headers: Record<string, string> = {
        'Content-Type': 'application/json',
      };
      
      // Only add Authorization if not using local API
      if (!AI_CONFIG.baseUrl.includes('127.0.0.1') && 
          !AI_CONFIG.baseUrl.includes('localhost') && 
          !AI_CONFIG.baseUrl.includes('/api/local-ai')) {
        headers['Authorization'] = `Bearer ${AI_CONFIG.apiKey}`;
      }
      
      // 범용 API 요청 바디 구성 - 다양한 AI 모델 지원
      const requestBody: any = {
        model: AI_CONFIG.model,
        messages: messagesWithLanguage,
        temperature: AI_CONFIG.temperature,
        max_tokens: AI_CONFIG.maxTokens,
        stream: false
      };

      // 모델별 추가 파라미터 (존재하는 경우에만 추가)
      if (AI_CONFIG.topP !== undefined && AI_CONFIG.topP > 0) {
        requestBody.top_p = AI_CONFIG.topP;
      }
      if (AI_CONFIG.frequencyPenalty !== undefined && AI_CONFIG.frequencyPenalty !== 0) {
        requestBody.frequency_penalty = AI_CONFIG.frequencyPenalty;
      }
      if (AI_CONFIG.presencePenalty !== undefined && AI_CONFIG.presencePenalty !== 0) {
        requestBody.presence_penalty = AI_CONFIG.presencePenalty;
      }

      console.log('📤 Sending request to AI API:', {
        url: apiUrl,
        model: AI_CONFIG.model,
        messageCount: messagesWithLanguage.length,
        parameters: {
          temperature: AI_CONFIG.temperature,
          max_tokens: AI_CONFIG.maxTokens,
          top_p: AI_CONFIG.topP
        }
      });

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers,
        body: JSON.stringify(requestBody)
      });

      console.log('📡 API Response status:', response.status);

      if (!response.ok) {
        const error = await response.text();
        console.error('❌ API Error response:', error);
        throw new Error(`Local AI API Error: ${response.status} - ${error}`);
      }

      const data = await response.json();
      console.log('✅ API Response data:', data);
      
      // 다양한 AI API 응답 형식 지원
      let rawResponse: string;
      
      if (data.choices && data.choices[0] && data.choices[0].message) {
        // OpenAI 호환 형식 (GPT, Claude, Llama 등)
        rawResponse = data.choices[0].message.content;
      } else if (data.response) {
        // 일부 로컬 모델 형식
        rawResponse = data.response;
      } else if (data.text) {
        // 간단한 텍스트 응답 형식
        rawResponse = data.text;
      } else if (data.content) {
        // 또 다른 일반적인 형식
        rawResponse = data.content;
      } else if (typeof data === 'string') {
        // 직접 문자열 응답
        rawResponse = data;
      } else {
        console.error('❌ Unknown API response format:', data);
        throw new Error('Unknown API response format');
      }
      
      console.log('📝 Extracted raw response:', rawResponse);
      
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
    
    // 2. Check for programming code artifacts early
    const codePatterns = [
      /\\n/g, /\\t/g, /\\r/g, // Escape sequences
      /console\./g, /function\s*\(/g, /return\s+/g, // Programming keywords
      /var\s+|let\s+|const\s+/g, // Variable declarations
      /=\s*>/g, // Arrow functions
      /\$\{[^}]*\}/g, // Template literals
    ];
    
    let hasCodeArtifacts = false;
    codePatterns.forEach(pattern => {
      if (pattern.test(cleanedResponse)) {
        hasCodeArtifacts = true;
        console.log('⚠️ Found code artifacts:', pattern);
      }
    });
    
    // 3. Remove repetitive sentences
    cleanedResponse = this.removeRepetitiveSentences(cleanedResponse);
    
    // 4. CRITICAL: Fix character name formatting violations first
    cleanedResponse = this.enforceCharacterNameFormatting(cleanedResponse, characterName);
    
    // 4.5. Fix broken formatting markers (this will also remove code artifacts)
    cleanedResponse = this.fixFormattingMarkers(cleanedResponse);
    
    // 5. Check if response is too damaged or still contains code
    const stillHasCode = /\\[ntr]|console\.|function|return|var\s|let\s|const\s/i.test(cleanedResponse);
    
    if (cleanedResponse.trim().length < 10 || hasProblematicChars || hasCodeArtifacts || stillHasCode) {
      console.log('🚨 Response too damaged, contains foreign languages, or has code artifacts, using fallback');
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
    
    // Remove literal \n, \t, \r and other escape sequences
    fixed = fixed.replace(/\\n/g, ' '); // Remove literal \n
    fixed = fixed.replace(/\\t/g, ' '); // Remove literal \t
    fixed = fixed.replace(/\\r/g, ' '); // Remove literal \r
    
    // Handle escaped quotes more aggressively
    console.log('🔧 Before backslash cleanup:', fixed);
    
    fixed = fixed.replace(/\\"/g, '"'); // Fix escaped quotes
    console.log('🔧 After escaped quotes fix:', fixed);
    
    fixed = fixed.replace(/\\'/g, "'"); // Fix escaped apostrophes
    
    // Remove backslashes at the end of sentences (common AI artifact)
    fixed = fixed.replace(/\\+(?=\s*$)/g, ''); // Remove trailing backslashes at end
    fixed = fixed.replace(/\\+(?=\s*[.!?])/g, ''); // Remove backslashes before punctuation
    fixed = fixed.replace(/([.!?])\\+/g, '$1'); // Remove backslashes after punctuation
    console.log('🔧 After sentence backslash cleanup:', fixed);
    
    fixed = fixed.replace(/\\\\/g, ''); // Remove double backslashes
    fixed = fixed.replace(/\\[a-zA-Z]/g, ''); // Remove other escape sequences
    
    // Final aggressive cleanup of any remaining backslashes
    fixed = fixed.replace(/\\+/g, ''); // Remove any remaining backslashes
    console.log('🔧 After final backslash cleanup:', fixed);
    
    // Remove programming-related artifacts
    fixed = fixed.replace(/console\.log/g, '');
    fixed = fixed.replace(/function\s*\(/g, '');
    fixed = fixed.replace(/return\s+/g, '');
    fixed = fixed.replace(/var\s+|let\s+|const\s+/g, '');
    fixed = fixed.replace(/=\s*>/g, '');
    fixed = fixed.replace(/\$\{[^}]*\}/g, ''); // Remove template literals
    
    // Remove only exact duplicate lines (more conservative approach)
    const lines = fixed.split('\n').filter(line => line.trim().length > 0);
    const uniqueLines: string[] = [];
    const seenExactLines = new Set<string>();
    
    lines.forEach(line => {
      const trimmedLine = line.trim();
      if (!seenExactLines.has(trimmedLine)) {
        uniqueLines.push(trimmedLine);
        seenExactLines.add(trimmedLine);
      }
    });
    
    fixed = uniqueLines.join('\n');
    
    // Fix broken double asterisks for narration
    fixed = fixed.replace(/\*\s*([^*]*?)\s*\*/g, '*$1*');
    
    // Fix broken parentheses for emotions/actions
    fixed = fixed.replace(/\(\s*([^)]*?)\s*\)/g, '($1)');
    
    // Fix broken quotes for dialogue
    fixed = fixed.replace(/"\s*([^"]*?)\s*"/g, '"$1"');
    
    // Fix unclosed quotes at the end of text
    const quoteCount = (fixed.match(/"/g) || []).length;
    if (quoteCount % 2 === 1) {
      // Odd number of quotes means one is unclosed
      console.log('🔧 Fixing unclosed quote in:', fixed);
      fixed = fixed + '"';
      console.log('🔧 Fixed unclosed quote to:', fixed);
    }
    
    // Remove orphaned markers
    fixed = fixed.replace(/[\*\(\)"]{2,}/g, '');
    
    // Clean up extra spaces and newlines
    fixed = fixed.replace(/\s+/g, ' ');
    fixed = fixed.replace(/^\s+|\s+$/g, ''); // Trim
    
    // Remove any remaining JSON-like structures
    fixed = fixed.replace(/\{[^}]*\}/g, '');
    fixed = fixed.replace(/\[[^\]]*\]/g, '');
    
    // Remove any remaining backslashes or weird characters
    fixed = fixed.replace(/[\\]/g, '');
    fixed = fixed.replace(/[`~]/g, '');
    
    console.log('🔧 Fixed formatting result:', fixed);
    return fixed;
  }

  /**
   * Generate safe Korean response
   */
  private generateSafeKoreanResponse(characterName: string): string {
    console.log('🚨 Safe Korean response generation disabled - throwing error instead');
    throw new Error('AI response validation failed and safe responses disabled');
  }

  /**
   * Generate safe English response
   */
  private generateSafeEnglishResponse(characterName: string): string {
    console.log('🚨 Safe English response generation disabled - throwing error instead');
    throw new Error('AI response validation failed and safe responses disabled');
  }

  /**
   * Generate mock response for testing when API fails
   */
  private generateMockResponse(userMessage: string, characterName: string): string {
    console.log('🎭 Mock response generation disabled - throwing error instead');
    throw new Error('AI service unavailable and mock responses disabled');
  }

  /**
   * CRITICAL: Enforce character name formatting rules
   * Fix sentences that start with character name but don't use **...** format
   */
  private enforceCharacterNameFormatting(response: string, characterName: string): string {
    console.log('🔧 Enforcing character name formatting for:', characterName);
    
    let fixedResponse = response;
    
    // More conservative approach - only fix obvious violations
    // Look for character name at the start of sentences that aren't already formatted
    const characterNameRegex = new RegExp(`(?:^|\\.)\\s*(${characterName}(?:'s)?\\s+[^*("]+?)(?=\\.|$|\\n)`, 'gmi');
    
    fixedResponse = fixedResponse.replace(characterNameRegex, (match, capturedGroup) => {
      // Skip if already properly formatted
      if (match.includes('*') || match.includes('(') || match.includes('"')) {
        return match;
      }
      
      console.log('🚨 FIXING character name formatting violation:', capturedGroup);
      const prefix = match.substring(0, match.indexOf(capturedGroup));
      const fixed = `${prefix}*${capturedGroup.trim()}*`;
      console.log('✅ Fixed to:', fixed);
      return fixed;
    });
    
    return fixedResponse;
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

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
  apiKey: import.meta.env.VITE_NVIDIA_API_KEY || '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',
  baseUrl: 'https://integrate.api.nvidia.com/v1',
  model: 'meta/llama-3.1-70b-instruct',
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
    const startTime = Date.now();

    try {
      // Get or initialize conversation
      let conversation = this.conversationCache.get(sessionId);
      if (!conversation) {
        this.initializeSession(sessionId, storyContext, userContext);
        conversation = this.conversationCache.get(sessionId)!;
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
      const response = await this.callNvidiaAPI(conversation, storyContext);

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

## Language Response
- Detect the language of user's message and respond in the same language
- If user writes in English, respond in English
- If user writes in Korean, respond in Korean
- Maintain character voice regardless of language

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
    const response = await fetch(`${AI_CONFIG.baseUrl}/chat/completions`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${AI_CONFIG.apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: AI_CONFIG.model,
        messages: messages,
        temperature: AI_CONFIG.temperature,
        top_p: AI_CONFIG.topP,
        max_tokens: AI_CONFIG.maxTokens,
        stream: false
      })
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`NVIDIA API Error: ${response.status} - ${error}`);
    }

    const data = await response.json();
    return data.choices[0].message.content;
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
   * Clear session data
   */
  clearSession(sessionId: string): void {
    this.conversationCache.delete(sessionId);
    this.emotionalConnection.delete(sessionId);
  }
}

export default IntegratedAIService;

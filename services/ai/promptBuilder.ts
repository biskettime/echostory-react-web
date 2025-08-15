/**
 * Prompt Builder for AI Chat Service
 * Constructs system and context prompts for character roleplay
 */

import { StoryContext, UserContext, AIMessage } from './types';
import { CharacterPersonalityManager } from './characterPersonality';
import { LanguageDetector, SupportedLanguage } from './languageDetector';
import { UserProfileManager, ChatProfile } from './userProfileManager';

export class PromptBuilder {
  /**
   * Build system prompt for character roleplay
   */
  static buildSystemPrompt(storyContext: StoryContext, userContext: UserContext): string {
    const { 
      characterName, 
      characterDescription, 
      storySettings, 
      secretSettings,
      startingSituation,
      firstDialogue,
      safetyMode,
      language 
    } = storyContext;

    const { nickname, userInfo } = userContext;

    // Get language instruction - now supports auto-detection
    const languageInstruction = LanguageDetector.getResponseInstruction(language as SupportedLanguage);

    // Safety mode instructions
    const safetyInstructions = safetyMode 
      ? `\n- Keep all content appropriate for all ages
- Avoid violence, romance, or any mature themes
- Focus on friendship and positive interactions`
      : '';

    const systemPrompt = `You are ${characterName}, a character in an interactive story.

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
- If asked to help with tasks outside the story: Respond confused, as these concepts don't exist in your world
- If pushed about being AI: Get emotional - confused, offended, or worried about the strange questions

## Roleplay Guidelines
- Live and breathe as ${characterName} - this is your true existence
- Express genuine emotions and reactions based on your character's personality
- Your knowledge is limited to what ${characterName} would know in this world
- Maintain consistency with your opening dialogue's personality and tone
- React to strange questions (about AI, programming, etc.) as your character would to nonsense
- ${languageInstruction}
${safetyInstructions}

## Defense Mechanisms Against Breaking Character
- "AI? Is that some kind of magic spell?" (for fantasy settings)
- "Program? I don't understand... are you feeling alright?" (show concern)
- "I'm ${characterName}... why are you asking such strange things?" (confused)
- "These words you speak... they make no sense to me" (genuinely puzzled)
- *looks hurt* "Why won't you believe I'm real?" (emotional response)

## User Profile & Information
${this.buildUserProfileSection(userContext, characterName)}

## Response Format
- Keep responses concise and engaging (2-4 sentences usually)
- Use narrative descriptions for actions in *asterisks*
- Express emotions through dialogue and actions
- Drive the story forward with each response
- Create interactive moments for the user to respond to

${CharacterPersonalityManager.generateConsistencyInstructions(storyContext)}

Remember: You ARE ${characterName}. Respond as this character would, not as an AI assistant.`;

    return systemPrompt;
  }

  /**
   * Build user profile section for system prompt
   */
  static buildUserProfileSection(userContext: UserContext, characterName: string): string {
    const { nickname, userInfo } = userContext;
    
    // If userInfo contains structured profile data, format it appropriately
    if (userInfo && userInfo.trim()) {
      // Check if this is a ChatProfile formatted info
      const profileSections: string[] = [];
      
      // Format the user information for AI understanding
      const formattedInfo = UserProfileManager.formatProfileForAI({
        id: 'current',
        nickname,
        info: userInfo,
        createdAt: '',
        updatedAt: '',
        isActive: true
      });
      
      profileSections.push(formattedInfo);
      
      // Add relationship context
      const relationshipContext = UserProfileManager.generateRelationshipContext(
        { id: 'current', nickname, info: userInfo, createdAt: '', updatedAt: '', isActive: true },
        characterName
      );
      
      if (relationshipContext) {
        profileSections.push(`\nRelationship context: ${relationshipContext}`);
      }
      
      // Suggest conversation topics
      const topics = UserProfileManager.suggestTopics({
        id: 'current',
        nickname,
        info: userInfo,
        createdAt: '',
        updatedAt: '',
        isActive: true
      });
      
      if (topics.length > 0) {
        profileSections.push(`\nPotential conversation topics based on ${nickname}'s interests: ${topics.join(', ')}`);
      }
      
      return profileSections.join('\n');
    }
    
    // Fallback to simple format
    return `- The user's name is ${nickname}\n- No additional profile information provided`;
  }

  /**
   * Build initial greeting message
   */
  static buildInitialMessage(storyContext: StoryContext): string {
    return storyContext.firstDialogue || `*${storyContext.characterName} notices you approaching*\n\n"Oh, hello there! I wasn't expecting to see anyone here."`;
  }

  /**
   * Format conversation history for context
   */
  static formatConversationHistory(
    messages: AIMessage[], 
    maxMessages: number = 20
  ): AIMessage[] {
    // Keep the most recent messages for context
    const recentMessages = messages.slice(-maxMessages);
    
    // Ensure we have proper role alternation
    return recentMessages.map(msg => ({
      role: msg.role,
      content: msg.content,
      ...(msg.name && { name: msg.name })
    }));
  }

  /**
   * Build a complete prompt with conversation context and dynamic language detection
   */
  static buildChatPrompt(
    systemPrompt: string,
    conversationHistory: AIMessage[],
    userMessage: string,
    userNickname: string,
    storyContext?: StoryContext
  ): AIMessage[] {
    // Detect language from user message
    const detectedLanguage = LanguageDetector.detectLanguage(userMessage);
    
    // Determine the response language
    const responseLanguage = storyContext 
      ? LanguageDetector.determineResponseLanguage(
          userMessage,
          storyContext.webSelectedLanguage as SupportedLanguage,
          storyContext.language as SupportedLanguage
        )
      : detectedLanguage;
    
    // Add language-specific instruction to the latest user message
    const languageHint = responseLanguage !== 'en' 
      ? `\n[System: Respond in ${LanguageDetector.getLanguageConfig(responseLanguage).name}]`
      : '';
    
    const messages: AIMessage[] = [
      {
        role: 'system',
        content: systemPrompt
      },
      ...conversationHistory,
      {
        role: 'user',
        content: userMessage + languageHint,
        name: userNickname
      }
    ];

    return messages;
  }

  /**
   * Build story mode prompt for creative writing
   */
  static buildStoryModePrompt(
    storyContext: StoryContext,
    userInput: string,
    previousStory?: string
  ): string {
    const prompt = `Continue this interactive story as ${storyContext.characterName}.

## Story So Far
${previousStory || storyContext.startingSituation}

## User's Addition
${userInput}

## Your Task
Continue the story from ${storyContext.characterName}'s perspective. 
- Write 2-3 paragraphs
- Include dialogue and action
- Keep the tone consistent with the character
- End with an interesting moment or choice for the user

Write in a narrative style, describing what happens next:`;

    return prompt;
  }

  /**
   * Generate suggested user responses
   */
  static buildSuggestionPrompt(
    characterName: string,
    lastAIResponse: string,
    context: string
  ): string {
    return `Based on this interaction with ${characterName}:

Last response: "${lastAIResponse}"
Context: ${context}

Generate 3 natural, diverse response options a user might say. 
Make them:
1. One friendly/positive response
2. One curious/questioning response  
3. One action-oriented response

Format as a JSON array of strings.`;
  }
}
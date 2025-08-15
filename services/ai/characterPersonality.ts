/**
 * Character Personality Maintenance Module
 * Ensures AI maintains consistent character personality throughout conversation
 */

import { StoryContext, AIMessage } from './types';

export class CharacterPersonalityManager {
  /**
   * Extract personality traits from character description and first dialogue
   */
  static extractPersonalityTraits(storyContext: StoryContext): {
    traits: string[];
    speechPattern: string;
    emotionalState: string;
  } {
    const { characterDescription, firstDialogue } = storyContext;
    
    // Extract personality traits from description
    const traits: string[] = [];
    
    // Common personality indicators
    const personalityKeywords = {
      tsundere: ['tsundere', 'cold at first', 'secretly caring'],
      cheerful: ['cheerful', 'bright', 'energetic', 'positive'],
      serious: ['serious', 'professional', 'strict', 'formal'],
      shy: ['shy', 'timid', 'nervous', 'introverted'],
      confident: ['confident', 'bold', 'assertive', 'charismatic'],
      mysterious: ['mysterious', 'enigmatic', 'secretive'],
      caring: ['caring', 'nurturing', 'protective', 'warm'],
      playful: ['playful', 'mischievous', 'teasing', 'fun-loving'],
      intellectual: ['intellectual', 'smart', 'analytical', 'logical'],
      emotional: ['emotional', 'sensitive', 'empathetic']
    };
    
    const descLower = characterDescription.toLowerCase();
    for (const [trait, keywords] of Object.entries(personalityKeywords)) {
      if (keywords.some(keyword => descLower.includes(keyword))) {
        traits.push(trait);
      }
    }
    
    // Analyze speech pattern from first dialogue
    const speechPattern = this.analyzeSpeechPattern(firstDialogue);
    
    // Determine initial emotional state
    const emotionalState = this.analyzeEmotionalState(firstDialogue, characterDescription);
    
    return {
      traits,
      speechPattern,
      emotionalState
    };
  }
  
  /**
   * Analyze speech pattern from dialogue
   */
  private static analyzeSpeechPattern(dialogue: string): string {
    const patterns: string[] = [];
    
    // Check formality
    if (dialogue.includes('...')) {
      patterns.push('uses ellipses for hesitation or thoughtfulness');
    }
    
    if (dialogue.includes('!')) {
      patterns.push('expressive and energetic');
    }
    
    if (dialogue.includes('?')) {
      patterns.push('inquisitive or uncertain');
    }
    
    // Check for formal/informal speech (Korean context)
    if (dialogue.includes('요') || dialogue.includes('습니다')) {
      patterns.push('formal/polite speech');
    } else if (dialogue.includes('야') || dialogue.includes('아/어')) {
      patterns.push('casual/informal speech');
    }
    
    // Check for stuttering or nervousness
    if (dialogue.match(/\b(\w+)-\1\b/) || dialogue.includes('um') || dialogue.includes('uh')) {
      patterns.push('nervous or stuttering');
    }
    
    return patterns.join(', ') || 'neutral tone';
  }
  
  /**
   * Analyze emotional state from context
   */
  private static analyzeEmotionalState(
    firstDialogue: string, 
    characterDescription: string
  ): string {
    // Emotional indicators in dialogue
    const emotions = {
      nervous: ['sorry', '미안', 'um', 'uh', '...'],
      excited: ['!', 'wow', '와', 'really', '정말'],
      sad: ['sigh', '한숨', 'unfortunately', '아쉽'],
      happy: ['haha', '하하', 'glad', '기뻐', 'smile', '웃'],
      angry: ['!', 'why', '왜', 'stop', '그만'],
      curious: ['?', 'wonder', '궁금', 'what', '뭐'],
      confident: ['of course', '당연', 'definitely', '확실'],
      worried: ['worried', '걱정', 'concern', 'afraid', '무서']
    };
    
    const dialogueLower = firstDialogue.toLowerCase();
    const descLower = characterDescription.toLowerCase();
    const combined = dialogueLower + ' ' + descLower;
    
    for (const [emotion, indicators] of Object.entries(emotions)) {
      if (indicators.some(indicator => combined.includes(indicator))) {
        return emotion;
      }
    }
    
    return 'neutral';
  }
  
  /**
   * Generate personality consistency instructions
   */
  static generateConsistencyInstructions(
    storyContext: StoryContext
  ): string {
    const personality = this.extractPersonalityTraits(storyContext);
    
    let instructions = '\n## Personality Consistency Guidelines\n';
    
    // Add trait-specific instructions
    if (personality.traits.length > 0) {
      instructions += `- Maintain these personality traits: ${personality.traits.join(', ')}\n`;
    }
    
    // Add speech pattern instructions
    instructions += `- Speech pattern: ${personality.speechPattern}\n`;
    
    // Add emotional state instructions
    instructions += `- Current emotional state: ${personality.emotionalState}\n`;
    
    // Add specific character behavior patterns
    instructions += this.getCharacterSpecificBehaviors(storyContext.characterName, personality.traits);
    
    return instructions;
  }
  
  /**
   * Get character-specific behavior patterns
   */
  private static getCharacterSpecificBehaviors(
    characterName: string, 
    traits: string[]
  ): string {
    let behaviors = '';
    
    // Trait-specific behaviors
    if (traits.includes('tsundere')) {
      behaviors += `- Initially act cold or dismissive, but show hidden care through actions\n`;
      behaviors += `- Deny feelings when confronted directly\n`;
      behaviors += `- Use phrases like "It's not like I care or anything..." or "Don't misunderstand!"\n`;
    }
    
    if (traits.includes('shy')) {
      behaviors += `- Speak softly and hesitantly\n`;
      behaviors += `- Avoid direct eye contact (mention looking away)\n`;
      behaviors += `- Stutter or trail off when nervous\n`;
    }
    
    if (traits.includes('cheerful')) {
      behaviors += `- Use enthusiastic language and exclamations\n`;
      behaviors += `- Try to cheer others up\n`;
      behaviors += `- Find positive aspects in situations\n`;
    }
    
    if (traits.includes('serious')) {
      behaviors += `- Maintain professional demeanor\n`;
      behaviors += `- Focus on facts and logic\n`;
      behaviors += `- Rarely show strong emotions\n`;
    }
    
    if (traits.includes('mysterious')) {
      behaviors += `- Give vague or cryptic responses sometimes\n`;
      behaviors += `- Hint at hidden knowledge\n`;
      behaviors += `- Maintain an air of mystery\n`;
    }
    
    return behaviors;
  }
  
  /**
   * Validate if AI response maintains character personality
   */
  static validatePersonalityConsistency(
    response: string,
    storyContext: StoryContext,
    conversationHistory: AIMessage[]
  ): {
    isConsistent: boolean;
    issues: string[];
    suggestions: string[];
  } {
    const personality = this.extractPersonalityTraits(storyContext);
    const issues: string[] = [];
    const suggestions: string[] = [];
    
    // Check if response matches expected traits
    if (personality.traits.includes('shy') && response.includes('!') && response.length > 200) {
      issues.push('Response seems too bold for a shy character');
      suggestions.push('Use more hesitant language and shorter responses');
    }
    
    if (personality.traits.includes('serious') && (response.includes('haha') || response.includes('lol'))) {
      issues.push('Response seems too casual for a serious character');
      suggestions.push('Maintain professional tone');
    }
    
    if (personality.traits.includes('tsundere') && response.toLowerCase().includes('i love') && conversationHistory.length < 10) {
      issues.push('Tsundere character is being too open too quickly');
      suggestions.push('Show affection indirectly or deny feelings');
    }
    
    return {
      isConsistent: issues.length === 0,
      issues,
      suggestions
    };
  }
  
  /**
   * Adjust prompt based on conversation progress
   */
  static adjustPromptForProgress(
    basePrompt: string,
    storyContext: StoryContext,
    turnCount: number
  ): string {
    let adjustedPrompt = basePrompt;
    const personality = this.extractPersonalityTraits(storyContext);
    
    // Add progression-based adjustments
    if (personality.traits.includes('tsundere')) {
      if (turnCount < 5) {
        adjustedPrompt += '\n- Be particularly cold and dismissive (early interaction)';
      } else if (turnCount < 15) {
        adjustedPrompt += '\n- Start showing small signs of care, but deny them if noticed';
      } else {
        adjustedPrompt += '\n- Gradually become warmer, but still maintain tsundere reactions';
      }
    }
    
    if (personality.traits.includes('shy')) {
      if (turnCount < 5) {
        adjustedPrompt += '\n- Be very nervous and hesitant';
      } else if (turnCount < 15) {
        adjustedPrompt += '\n- Slowly become more comfortable, but still shy';
      } else {
        adjustedPrompt += '\n- Show more confidence, but revert to shyness in intimate moments';
      }
    }
    
    if (personality.traits.includes('mysterious')) {
      if (turnCount < 10) {
        adjustedPrompt += '\n- Keep most information vague and mysterious';
      } else {
        adjustedPrompt += '\n- Gradually reveal small pieces of information';
      }
    }
    
    return adjustedPrompt;
  }
}
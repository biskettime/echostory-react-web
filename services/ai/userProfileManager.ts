/**
 * User Profile Manager for AI Context
 * Manages user's chat profile information for AI interactions
 */

export interface ChatProfile {
  id: string;
  nickname: string;
  info: string; // User's personal information (gender, age, preferences, etc.)
  avatar?: string;
  createdAt: string;
  updatedAt: string;
  isActive: boolean;
}

export interface UserProfileContext {
  profiles: ChatProfile[];
  activeProfile: ChatProfile | null;
  defaultProfile: ChatProfile;
}

export class UserProfileManager {
  private static readonly STORAGE_KEY = 'echostory_chat_profiles';
  private static readonly ACTIVE_PROFILE_KEY = 'echostory_active_profile';

  /**
   * Get all chat profiles from local storage
   */
  static getAllProfiles(): ChatProfile[] {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (error) {
      console.error('Failed to load chat profiles:', error);
    }
    return [this.getDefaultProfile()];
  }

  /**
   * Get the active profile
   */
  static getActiveProfile(): ChatProfile | null {
    try {
      const activeId = localStorage.getItem(this.ACTIVE_PROFILE_KEY);
      if (activeId) {
        const profiles = this.getAllProfiles();
        return profiles.find(p => p.id === activeId) || null;
      }
    } catch (error) {
      console.error('Failed to load active profile:', error);
    }
    return null;
  }

  /**
   * Create a new chat profile
   */
  static createProfile(nickname: string, info: string, avatar?: string): ChatProfile {
    const profile: ChatProfile = {
      id: `profile_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      nickname,
      info,
      avatar,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      isActive: false
    };

    const profiles = this.getAllProfiles();
    profiles.push(profile);
    this.saveProfiles(profiles);

    return profile;
  }

  /**
   * Update an existing profile
   */
  static updateProfile(profileId: string, updates: Partial<ChatProfile>): ChatProfile | null {
    const profiles = this.getAllProfiles();
    const index = profiles.findIndex(p => p.id === profileId);
    
    if (index !== -1) {
      profiles[index] = {
        ...profiles[index],
        ...updates,
        updatedAt: new Date().toISOString()
      };
      this.saveProfiles(profiles);
      return profiles[index];
    }
    
    return null;
  }

  /**
   * Set active profile
   */
  static setActiveProfile(profileId: string): boolean {
    const profiles = this.getAllProfiles();
    const profile = profiles.find(p => p.id === profileId);
    
    if (profile) {
      // Update all profiles to inactive
      profiles.forEach(p => p.isActive = false);
      // Set selected profile as active
      profile.isActive = true;
      
      this.saveProfiles(profiles);
      localStorage.setItem(this.ACTIVE_PROFILE_KEY, profileId);
      return true;
    }
    
    return false;
  }

  /**
   * Delete a profile
   */
  static deleteProfile(profileId: string): boolean {
    const profiles = this.getAllProfiles();
    const filtered = profiles.filter(p => p.id !== profileId);
    
    if (filtered.length < profiles.length) {
      this.saveProfiles(filtered);
      
      // If deleted profile was active, clear active profile
      const activeId = localStorage.getItem(this.ACTIVE_PROFILE_KEY);
      if (activeId === profileId) {
        localStorage.removeItem(this.ACTIVE_PROFILE_KEY);
      }
      
      return true;
    }
    
    return false;
  }

  /**
   * Get default profile
   */
  static getDefaultProfile(): ChatProfile {
    return {
      id: 'default',
      nickname: 'User',
      info: '',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      isActive: true
    };
  }

  /**
   * Save profiles to local storage
   */
  private static saveProfiles(profiles: ChatProfile[]): void {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(profiles));
    } catch (error) {
      console.error('Failed to save chat profiles:', error);
    }
  }

  /**
   * Format profile info for AI context
   */
  static formatProfileForAI(profile: ChatProfile): string {
    if (!profile.info || profile.info.trim() === '') {
      return `The user's name is ${profile.nickname}.`;
    }

    const sections: string[] = [`The user's name is ${profile.nickname}.`];
    
    // Parse and structure the info
    const info = profile.info.trim();
    const lines = info.split('\n').filter(line => line.trim());
    
    // Common patterns to look for
    const patterns = {
      age: /(?:age|years old|yo|살)/i,
      gender: /(?:gender|male|female|man|woman|boy|girl|남|여|성별)/i,
      occupation: /(?:job|work|occupation|student|developer|designer|직업|학생|일)/i,
      personality: /(?:personality|character|성격|성향)/i,
      interests: /(?:like|love|enjoy|hobby|interest|좋아|취미|관심)/i,
      background: /(?:from|live|country|city|출신|거주|나라|도시)/i,
      relationship: /(?:friend|boyfriend|girlfriend|partner|친구|연인|관계)/i
    };

    // Categorize information
    const categorized: Record<string, string[]> = {
      basic: [],
      personality: [],
      interests: [],
      background: [],
      other: []
    };

    for (const line of lines) {
      if (patterns.age.test(line) || patterns.gender.test(line) || patterns.occupation.test(line)) {
        categorized.basic.push(line);
      } else if (patterns.personality.test(line)) {
        categorized.personality.push(line);
      } else if (patterns.interests.test(line)) {
        categorized.interests.push(line);
      } else if (patterns.background.test(line) || patterns.relationship.test(line)) {
        categorized.background.push(line);
      } else {
        categorized.other.push(line);
      }
    }

    // Format categorized information
    if (categorized.basic.length > 0) {
      sections.push(`Basic information: ${categorized.basic.join('. ')}`);
    }
    
    if (categorized.personality.length > 0) {
      sections.push(`Personality: ${categorized.personality.join('. ')}`);
    }
    
    if (categorized.interests.length > 0) {
      sections.push(`Interests and preferences: ${categorized.interests.join('. ')}`);
    }
    
    if (categorized.background.length > 0) {
      sections.push(`Background: ${categorized.background.join('. ')}`);
    }
    
    if (categorized.other.length > 0) {
      sections.push(`Additional details: ${categorized.other.join('. ')}`);
    }

    return sections.join('\n');
  }

  /**
   * Generate relationship context based on profile
   */
  static generateRelationshipContext(profile: ChatProfile, characterName: string): string {
    const info = profile.info.toLowerCase();
    let relationshipHints: string[] = [];

    // Detect relationship type from user info
    if (info.includes('friend') || info.includes('친구')) {
      relationshipHints.push(`${profile.nickname} is your friend`);
    } else if (info.includes('student') || info.includes('학생')) {
      relationshipHints.push(`${profile.nickname} is a student you know`);
    } else if (info.includes('colleague') || info.includes('동료') || info.includes('coworker')) {
      relationshipHints.push(`${profile.nickname} is your colleague`);
    } else {
      relationshipHints.push(`${profile.nickname} is someone you're getting to know`);
    }

    // Add interaction style based on age if mentioned
    const ageMatch = info.match(/(\d+)\s*(?:years old|yo|살)/);
    if (ageMatch) {
      const age = parseInt(ageMatch[1]);
      if (age < 20) {
        relationshipHints.push('Be friendly and approachable as they are young');
      } else if (age < 30) {
        relationshipHints.push('Interact casually as you would with a peer');
      } else {
        relationshipHints.push('Show appropriate respect for their maturity');
      }
    }

    // Add gender-aware interaction if specified
    if (info.includes('female') || info.includes('woman') || info.includes('girl') || info.includes('여')) {
      relationshipHints.push('Be respectful and considerate in your interactions');
    } else if (info.includes('male') || info.includes('man') || info.includes('boy') || info.includes('남')) {
      relationshipHints.push('Be friendly and open in your interactions');
    }

    return relationshipHints.join('. ');
  }

  /**
   * Suggest conversation topics based on profile
   */
  static suggestTopics(profile: ChatProfile): string[] {
    const topics: string[] = [];
    const info = profile.info.toLowerCase();

    // Extract potential topics from interests
    if (info.includes('music') || info.includes('음악')) {
      topics.push('music and favorite artists');
    }
    if (info.includes('game') || info.includes('게임')) {
      topics.push('games and gaming experiences');
    }
    if (info.includes('movie') || info.includes('film') || info.includes('영화')) {
      topics.push('movies and shows');
    }
    if (info.includes('book') || info.includes('read') || info.includes('책') || info.includes('독서')) {
      topics.push('books and reading');
    }
    if (info.includes('travel') || info.includes('여행')) {
      topics.push('travel experiences and destinations');
    }
    if (info.includes('food') || info.includes('cook') || info.includes('음식') || info.includes('요리')) {
      topics.push('food and cooking');
    }
    if (info.includes('sport') || info.includes('exercise') || info.includes('운동')) {
      topics.push('sports and fitness');
    }
    if (info.includes('art') || info.includes('draw') || info.includes('paint') || info.includes('그림') || info.includes('미술')) {
      topics.push('art and creativity');
    }
    if (info.includes('tech') || info.includes('computer') || info.includes('programming') || info.includes('개발')) {
      topics.push('technology and innovation');
    }

    // Default topics if none found
    if (topics.length === 0) {
      topics.push('daily life', 'hobbies', 'future plans');
    }

    return topics;
  }
}
// Chat session management system

export interface ChatMessage {
  id: string;
  senderId: 'user' | 'character';
  content: string;
  timestamp: string;
  type: 'text' | 'image' | 'system';
}

export interface ChatSession {
  id: string;
  storyId: string;
  characterName: string;
  characterImage: string;
  userId: string;
  startedAt: string;
  lastMessageAt: string;
  messages: ChatMessage[];
  isActive: boolean;
  unreadCount: number;
}

class ChatSessionManager {
  private sessions: Map<string, ChatSession> = new Map();
  
  constructor() {
    this.loadFromLocalStorage();
  }
  
  // Load data from localStorage
  private loadFromLocalStorage() {
    try {
      const storedSessions = localStorage.getItem('echostory_chat_sessions');
      if (storedSessions) {
        const sessionsArray = JSON.parse(storedSessions);
        sessionsArray.forEach((session: ChatSession) => {
          this.sessions.set(session.id, session);
        });
        console.log(`Loaded ${sessionsArray.length} chat sessions from localStorage`);
      }
    } catch (error) {
      console.error('Error loading chat sessions:', error);
    }
  }
  
  // Save data to localStorage
  private saveToLocalStorage() {
    try {
      const sessionsArray = Array.from(this.sessions.values());
      localStorage.setItem('echostory_chat_sessions', JSON.stringify(sessionsArray));
      console.log('Chat sessions saved to localStorage');
    } catch (error) {
      console.error('Error saving chat sessions:', error);
    }
  }
  
  // Start new chat session
  startChatSession(storyId: string, characterName: string, characterImage: string, userId: string = 'user'): ChatSession {
    const sessionId = `${storyId}_${userId}_${Date.now()}`;
    const now = new Date().toISOString();
    
    const session: ChatSession = {
      id: sessionId,
      storyId,
      characterName,
      characterImage,
      userId,
      startedAt: now,
      lastMessageAt: now,
      messages: [],
      isActive: true,
      unreadCount: 0
    };
    
    this.sessions.set(sessionId, session);
    this.saveToLocalStorage();
    
    console.log('New chat session started:', sessionId);
    return session;
  }
  
  // Get existing session or create new session
  getOrCreateSession(storyId: string, characterName: string, characterImage: string, userId: string = 'user'): ChatSession {
    // Find active session for the story
    const existingSession = Array.from(this.sessions.values()).find(
      session => session.storyId === storyId && session.userId === userId && session.isActive
    );
    
    if (existingSession) {
      return existingSession;
    }
    
    // Create new session if no existing session
    return this.startChatSession(storyId, characterName, characterImage, userId);
  }
  
  // Add message
  addMessage(sessionId: string, senderId: 'user' | 'character', content: string, type: 'text' | 'image' | 'system' = 'text'): ChatMessage {
    const session = this.sessions.get(sessionId);
    if (!session) {
      throw new Error(`Session not found: ${sessionId}`);
    }
    
    const messageId = `${sessionId}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const now = new Date().toISOString();
    
    const message: ChatMessage = {
      id: messageId,
      senderId,
      content,
      timestamp: now,
      type
    };
    
    session.messages.push(message);
    session.lastMessageAt = now;
    
    // Increase unread message count for character messages
    if (senderId === 'character') {
      session.unreadCount++;
    }
    
    this.sessions.set(sessionId, session);
    this.saveToLocalStorage();
    
    return message;
  }
  
  // Reset unread message count
  markAsRead(sessionId: string) {
    const session = this.sessions.get(sessionId);
    if (session) {
      session.unreadCount = 0;
      this.sessions.set(sessionId, session);
      this.saveToLocalStorage();
    }
  }
  
  // End session
  endSession(sessionId: string) {
    const session = this.sessions.get(sessionId);
    if (session) {
      session.isActive = false;
      this.sessions.set(sessionId, session);
      this.saveToLocalStorage();
    }
  }
  
  // Get all active sessions for user
  getActiveSessions(userId: string = 'user'): ChatSession[] {
    return Array.from(this.sessions.values())
      .filter(session => session.userId === userId && session.isActive)
      .sort((a, b) => new Date(b.lastMessageAt).getTime() - new Date(a.lastMessageAt).getTime());
  }
  
  // Get specific session
  getSession(sessionId: string): ChatSession | null {
    return this.sessions.get(sessionId) || null;
  }
  
  // Get last message of session
  getLastMessage(sessionId: string): ChatMessage | null {
    const session = this.sessions.get(sessionId);
    if (!session || session.messages.length === 0) {
      return null;
    }
    return session.messages[session.messages.length - 1];
  }
  
  // Time formatting (relative time)
  getRelativeTime(timestamp: string): string {
    const now = new Date();
    const messageTime = new Date(timestamp);
    const diffMs = now.getTime() - messageTime.getTime();
    const diffMinutes = Math.floor(diffMs / (1000 * 60));
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    
    if (diffMinutes < 1) return 'Just now';
    if (diffMinutes < 60) return `${diffMinutes}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    
    return messageTime.toLocaleDateString('ko-KR');
  }
  
  // Initialize all data (for debugging)
  clearAllSessions() {
    this.sessions.clear();
    localStorage.removeItem('echostory_chat_sessions');
    console.log('All chat sessions have been initialized.');
  }
  
  // Statistics
  getStats() {
    const allSessions = Array.from(this.sessions.values());
    const activeSessions = allSessions.filter(s => s.isActive);
    const totalMessages = allSessions.reduce((sum, s) => sum + s.messages.length, 0);
    
    return {
      totalSessions: allSessions.length,
      activeSessions: activeSessions.length,
      totalMessages,
      averageMessagesPerSession: allSessions.length > 0 ? totalMessages / allSessions.length : 0
    };
  }
}

// Singleton instance
export const chatSessionManager = new ChatSessionManager();

// Convenience functions
export const startChat = (storyId: string, characterName: string, characterImage: string, userId?: string) =>
  chatSessionManager.startChatSession(storyId, characterName, characterImage, userId);

export const getOrCreateChatSession = (storyId: string, characterName: string, characterImage: string, userId?: string) =>
  chatSessionManager.getOrCreateSession(storyId, characterName, characterImage, userId);

export const addChatMessage = (sessionId: string, senderId: 'user' | 'character', content: string, type?: 'text' | 'image' | 'system') =>
  chatSessionManager.addMessage(sessionId, senderId, content, type);

export const markChatAsRead = (sessionId: string) =>
  chatSessionManager.markAsRead(sessionId);

export const getActiveChatSessions = (userId?: string) =>
  chatSessionManager.getActiveSessions(userId);

export const getChatSession = (sessionId: string) =>
  chatSessionManager.getSession(sessionId);

export const getLastChatMessage = (sessionId: string) =>
  chatSessionManager.getLastMessage(sessionId);

export const getRelativeTime = (timestamp: string) =>
  chatSessionManager.getRelativeTime(timestamp);

export const endChatSession = (sessionId: string) =>
  chatSessionManager.endSession(sessionId);

export const getChatStats = () =>
  chatSessionManager.getStats();

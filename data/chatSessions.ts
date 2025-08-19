// 채팅 세션 관리 시스템
import { t } from '../utils/i18n';

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
  
  // localStorage에서 데이터 로드
  private loadFromLocalStorage() {
    try {
      const storedSessions = localStorage.getItem('echostory_chat_sessions');
      if (storedSessions) {
        const sessionsArray = JSON.parse(storedSessions);
        sessionsArray.forEach((session: ChatSession) => {
          this.sessions.set(session.id, session);
        });
        console.log(`localStorage에서 ${sessionsArray.length}개의 채팅 세션 로드됨`);
      }
    } catch (error) {
      console.error('채팅 세션 로드 중 오류:', error);
    }
  }
  
  // localStorage에 데이터 저장
  private saveToLocalStorage() {
    try {
      const sessionsArray = Array.from(this.sessions.values());
      localStorage.setItem('echostory_chat_sessions', JSON.stringify(sessionsArray));
      console.log('채팅 세션이 localStorage에 저장됨');
    } catch (error) {
      console.error('채팅 세션 저장 중 오류:', error);
    }
  }
  
  // 새 채팅 세션 시작
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
    
    console.log('새 채팅 세션 시작:', sessionId);
    return session;
  }
  
  // 기존 세션 가져오기 또는 새 세션 생성
  getOrCreateSession(storyId: string, characterName: string, characterImage: string, userId: string = 'user'): ChatSession {
    // 해당 스토리의 활성 세션 찾기
    const existingSession = Array.from(this.sessions.values()).find(
      session => session.storyId === storyId && session.userId === userId && session.isActive
    );
    
    if (existingSession) {
      return existingSession;
    }
    
    // 기존 세션이 없으면 새로 생성
    return this.startChatSession(storyId, characterName, characterImage, userId);
  }
  
  // 메시지 추가
  addMessage(sessionId: string, senderId: 'user' | 'character', content: string, type: 'text' | 'image' | 'system' = 'text'): ChatMessage {
    const session = this.sessions.get(sessionId);
    if (!session) {
      throw new Error(`세션을 찾을 수 없습니다: ${sessionId}`);
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
    
    // 캐릭터 메시지인 경우 읽지 않은 메시지 수 증가
    if (senderId === 'character') {
      session.unreadCount++;
    }
    
    this.sessions.set(sessionId, session);
    this.saveToLocalStorage();
    
    return message;
  }
  
  // 읽지 않은 메시지 수 초기화
  markAsRead(sessionId: string) {
    const session = this.sessions.get(sessionId);
    if (session) {
      session.unreadCount = 0;
      this.sessions.set(sessionId, session);
      this.saveToLocalStorage();
    }
  }
  
  // 세션 종료
  endSession(sessionId: string) {
    const session = this.sessions.get(sessionId);
    if (session) {
      session.isActive = false;
      this.sessions.set(sessionId, session);
      this.saveToLocalStorage();
    }
  }
  
  // 사용자의 모든 활성 세션 가져오기
  getActiveSessions(userId: string = 'user'): ChatSession[] {
    return Array.from(this.sessions.values())
      .filter(session => session.userId === userId && session.isActive)
      .sort((a, b) => new Date(b.lastMessageAt).getTime() - new Date(a.lastMessageAt).getTime());
  }
  
  // 특정 세션 가져오기
  getSession(sessionId: string): ChatSession | null {
    return this.sessions.get(sessionId) || null;
  }
  
  // 세션의 마지막 메시지 가져오기
  getLastMessage(sessionId: string): ChatMessage | null {
    const session = this.sessions.get(sessionId);
    if (!session || session.messages.length === 0) {
      return null;
    }
    return session.messages[session.messages.length - 1];
  }
  
  // 시간 포맷팅 (상대 시간)
  getRelativeTime(timestamp: string): string {
    const now = new Date();
    const messageTime = new Date(timestamp);
    const diffMs = now.getTime() - messageTime.getTime();
    const diffMinutes = Math.floor(diffMs / (1000 * 60));
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    
    if (diffMinutes < 1) return t('time.justNow');
    if (diffMinutes < 60) return t('time.minutesAgo', { minutes: diffMinutes });
    if (diffHours < 24) return t('time.hoursAgo', { hours: diffHours });
    if (diffDays < 7) return t('time.daysAgo', { days: diffDays });
    
    return messageTime.toLocaleDateString();
  }
  
  // 특정 세션 삭제
  deleteSession(sessionId: string): boolean {
    if (this.sessions.has(sessionId)) {
      this.sessions.delete(sessionId);
      this.saveToLocalStorage();
      console.log('채팅 세션 삭제됨:', sessionId);
      return true;
    }
    return false;
  }
  
  // 모든 데이터 초기화 (디버깅용)
  clearAllSessions() {
    this.sessions.clear();
    localStorage.removeItem('echostory_chat_sessions');
    console.log('모든 채팅 세션이 초기화되었습니다.');
  }
  
  // 통계 정보
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

// 싱글톤 인스턴스
export const chatSessionManager = new ChatSessionManager();

// 편의 함수들
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

export const deleteChatSession = (sessionId: string) =>
  chatSessionManager.deleteSession(sessionId);

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

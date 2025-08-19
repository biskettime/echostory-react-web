import { 
  CreatedStoryData, 
  StoryDraft, 
  StoryTemplate, 
  StoryCategory, 
  StoryTag,
  StoryReview,
  StoryPlaySession,
  StoryFilter,
  StorySortOption,
  StoryStatus
} from './types';

// 스토리 카테고리 정의
export const storyCategories: StoryCategory[] = [
  {
    id: 'romance',
    name: '로맨스',
    description: '사랑과 관계를 중심으로 한 스토리',
    icon: '💕',
    color: '#F43F5E'
  },
  {
    id: 'fantasy',
    name: '판타지',
    description: '마법과 환상의 세계를 배경으로 한 스토리',
    icon: '✨',
    color: '#8B5CF6'
  },
  {
    id: 'slice-of-life',
    name: '일상',
    description: '현실적이고 일상적인 상황의 스토리',
    icon: '🌅',
    color: '#F59E0B'
  },
  {
    id: 'mystery',
    name: '미스터리',
    description: '수수께끼와 추리가 중심인 스토리',
    icon: '🔍',
    color: '#6366F1'
  },
  {
    id: 'adventure',
    name: '모험',
    description: '흥미진진한 모험과 탐험의 스토리',
    icon: '🗺️',
    color: '#10B981'
  },
  {
    id: 'drama',
    name: '드라마',
    description: '감정적이고 극적인 상황의 스토리',
    icon: '🎭',
    color: '#EF4444'
  },
  {
    id: 'comedy',
    name: '코미디',
    description: '유머러스하고 재미있는 스토리',
    icon: '😄',
    color: '#06B6D4'
  },
  {
    id: 'horror',
    name: '호러',
    description: '공포와 스릴을 주는 스토리',
    icon: '👻',
    color: '#1F2937'
  }
];

// 스토리 태그 정의
export const storyTags: StoryTag[] = [
  // 장르 태그
  { id: 'romance', name: 'Romance', category: 'genre', color: '#F43F5E', usageCount: 1250 },
  { id: 'fantasy', name: 'Fantasy', category: 'genre', color: '#8B5CF6', usageCount: 980 },
  { id: 'mystery', name: 'Mystery', category: 'genre', color: '#6366F1', usageCount: 750 },
  { id: 'comedy', name: 'Comedy', category: 'genre', color: '#06B6D4', usageCount: 650 },
  
  // 설정 태그
  { id: 'school', name: 'School', category: 'setting', color: '#3B82F6', usageCount: 890 },
  { id: 'office', name: 'Office', category: 'setting', color: '#6B7280', usageCount: 420 },
  { id: 'medieval', name: 'Medieval', category: 'setting', color: '#92400E', usageCount: 380 },
  { id: 'modern', name: 'Modern', category: 'setting', color: '#059669', usageCount: 720 },
  
  // 캐릭터 태그
  { id: 'tsundere', name: 'Tsundere', category: 'character', color: '#F43F5E', usageCount: 560 },
  { id: 'shy', name: 'Shy', category: 'character', color: '#EC4899', usageCount: 480 },
  { id: 'confident', name: 'Confident', category: 'character', color: '#EF4444', usageCount: 390 },
  { id: 'mysterious', name: 'Mysterious', category: 'character', color: '#6366F1', usageCount: 340 },
  
  // 관계 태그
  { id: 'childhood-friend', name: 'Childhood Friend', category: 'relationship', color: '#10B981', usageCount: 670 },
  { id: 'teacher-student', name: 'Teacher-Student', category: 'relationship', color: '#8B5CF6', usageCount: 450 },
  { id: 'boss-employee', name: 'Boss-Employee', category: 'relationship', color: '#6B7280', usageCount: 320 },
  { id: 'strangers', name: 'Strangers', category: 'relationship', color: '#F59E0B', usageCount: 580 }
];

// 스토리 템플릿 정의
export const storyTemplates: StoryTemplate[] = [
  {
    id: 'school-romance',
    name: '학교 로맨스',
    description: '학교를 배경으로 한 달콤한 로맨스 스토리',
    category: 'romance',
    tags: ['romance', 'school', 'youth'],
    template: {
      content: {
        storySettings: '고등학교 3학년 교실, 방과 후 시간\n- 주인공: 평범한 학생\n- 상대방: 같은 반 학생\n- 배경: 봄학기, 벚꽃이 피는 계절',
        characterName: '',
        characterDescription: '같은 반 학생으로, 조용하지만 친근한 성격을 가지고 있다.'
      },
      startSituation: {
        startingSituation: '방과 후 교실에서 혼자 공부하고 있는데, 같은 반 친구가 다가온다.',
        firstDialogue: '아직도 공부하고 있었구나? 같이 집에 갈래?'
      },
      introduction: {
        introduction: '평범한 고등학교 3학년의 일상 속에서 시작되는 달콤한 로맨스 이야기',
        tags: ['#Romance', '#School', '#Youth'],
        visibility: 'public',
        safetyFilter: 'all-users',
        creatorComment: '청춘 로맨스를 좋아하는 분들에게 추천합니다!'
      }
    },
    isOfficial: true,
    createdBy: 'system',
    usageCount: 245
  },
  {
    id: 'fantasy-adventure',
    name: '판타지 모험',
    description: '마법의 세계에서 펼쳐지는 모험 이야기',
    category: 'fantasy',
    tags: ['fantasy', 'adventure', 'magic'],
    template: {
      content: {
        storySettings: '마법의 숲 깊은 곳, 고대 유적지\n- 주인공: 견습 모험가\n- 상대방: 신비로운 마법사\n- 배경: 마법이 존재하는 판타지 세계',
        characterName: '',
        characterDescription: '강력한 마법을 다루는 신비로운 존재로, 고대의 비밀을 알고 있다.'
      },
      startSituation: {
        startingSituation: '고대 유적을 탐험하던 중 신비로운 마법사와 마주친다.',
        firstDialogue: '이곳에 온 것을 환영한다, 젊은 모험가여. 네가 찾는 것이 무엇인지 알고 있다.'
      },
      introduction: {
        introduction: '마법과 모험이 가득한 판타지 세계에서의 흥미진진한 여정',
        tags: ['#Fantasy', '#Adventure', '#Magic'],
        visibility: 'public',
        safetyFilter: 'all-users',
        creatorComment: '판타지 모험을 즐기는 분들을 위한 템플릿입니다!'
      }
    },
    isOfficial: true,
    createdBy: 'system',
    usageCount: 189
  }
];

// 메모리 기반 데이터 저장소 (실제 구현에서는 데이터베이스 사용)
class StoryDatabase {
  private stories: Map<string, CreatedStoryData> = new Map();
  private drafts: Map<string, StoryDraft> = new Map();
  private reviews: Map<string, StoryReview[]> = new Map();
  private playSessions: Map<string, StoryPlaySession[]> = new Map();
  
  constructor() {
    // localStorage에서 데이터 로드
    this.loadFromLocalStorage();
  }
  
  // localStorage에서 데이터 로드
  private loadFromLocalStorage() {
    try {
      // 스토리 로드
      const storedStories = localStorage.getItem('echostory_stories');
      if (storedStories) {
        const storiesArray = JSON.parse(storedStories);
        storiesArray.forEach((story: CreatedStoryData) => {
          this.stories.set(story.id, story);
        });
        console.log(`localStorage에서 ${storiesArray.length}개의 스토리 로드됨`);
      }
      
      // 드래프트 로드
      const storedDrafts = localStorage.getItem('echostory_drafts');
      if (storedDrafts) {
        try {
          const draftsArray = JSON.parse(storedDrafts);
          console.log('📖 localStorage에서 드래프트 로드:', {
            드래프트수: draftsArray.length,
            드래프트들: draftsArray.map((d: StoryDraft) => ({
              id: d.id,
              title: d.title,
              imageCount: d.data.media?.storyImages?.length || 0
            }))
          });
          
          // 큰 Base64 이미지가 있는 드래프트 정리
          const cleanedDrafts = draftsArray.filter((draft: StoryDraft) => {
            const images = draft.data.media?.storyImages || [];
            const hasLargeBase64 = images.some((img: string) => 
              img.startsWith('data:') && img.length > 100000 // 100KB 이상
            );
            
            if (hasLargeBase64) {
              console.log(`🧹 큰 Base64 이미지가 있는 드래프트 제거: ${draft.id} (${draft.title})`);
              return false;
            }
            return true;
          });
          
          if (cleanedDrafts.length !== draftsArray.length) {
            console.log(`🧹 ${draftsArray.length - cleanedDrafts.length}개의 큰 드래프트 정리됨`);
            // 정리된 드래프트만 다시 저장
            localStorage.setItem('echostory_drafts', JSON.stringify(cleanedDrafts));
          }
          
          cleanedDrafts.forEach((draft: StoryDraft) => {
            this.drafts.set(draft.id, draft);
          });
        } catch (error) {
          console.error('드래프트 로드 중 오류 (localStorage 정리):', error);
          // localStorage가 손상된 경우 초기화
          localStorage.removeItem('echostory_drafts');
          console.log('🧹 손상된 드래프트 데이터 초기화됨');
        }
      }
      
      // 리뷰 로드
      const storedReviews = localStorage.getItem('echostory_reviews');
      if (storedReviews) {
        const reviewsObj = JSON.parse(storedReviews);
        Object.entries(reviewsObj).forEach(([storyId, reviews]) => {
          this.reviews.set(storyId, reviews as StoryReview[]);
        });
      }
      
      // 플레이 세션 로드
      const storedSessions = localStorage.getItem('echostory_sessions');
      if (storedSessions) {
        const sessionsObj = JSON.parse(storedSessions);
        Object.entries(sessionsObj).forEach(([storyId, sessions]) => {
          this.playSessions.set(storyId, sessions as StoryPlaySession[]);
        });
      }
    } catch (error) {
      console.error('localStorage에서 데이터 로드 중 오류:', error);
    }
  }
  
  // localStorage에 데이터 저장
  private saveToLocalStorage() {
    try {
      // 스토리 저장
      const storiesArray = Array.from(this.stories.values());
      localStorage.setItem('echostory_stories', JSON.stringify(storiesArray));
      
      // 드래프트 저장
      const draftsArray = Array.from(this.drafts.values());
      console.log('💾 localStorage에 드래프트 저장:', {
        드래프트수: draftsArray.length,
        드래프트들: draftsArray.map(d => ({
          id: d.id,
          title: d.title,
          imageCount: d.data.media?.storyImages?.length || 0
        }))
      });
      localStorage.setItem('echostory_drafts', JSON.stringify(draftsArray));
      
      // 리뷰 저장
      const reviewsObj: Record<string, StoryReview[]> = {};
      this.reviews.forEach((reviews, storyId) => {
        reviewsObj[storyId] = reviews;
      });
      localStorage.setItem('echostory_reviews', JSON.stringify(reviewsObj));
      
      // 플레이 세션 저장
      const sessionsObj: Record<string, StoryPlaySession[]> = {};
      this.playSessions.forEach((sessions, storyId) => {
        sessionsObj[storyId] = sessions;
      });
      localStorage.setItem('echostory_sessions', JSON.stringify(sessionsObj));
      
      console.log('데이터가 localStorage에 저장됨');
    } catch (error) {
      console.error('localStorage에 데이터 저장 중 오류:', error);
    }
  }

  // 스토리 생성 (새 ID 자동 생성 또는 커스텀 ID 사용)
  createStory(storyData: Omit<CreatedStoryData, 'id' | 'createdAt' | 'updatedAt'>, customId?: string): CreatedStoryData {
    const id = customId || this.generateId();
    const now = new Date().toISOString();
    
    const newStory: CreatedStoryData = {
      ...storyData,
      id,
      createdAt: now,
      updatedAt: now,
      stats: {
        views: 0,
        likes: 0,
        bookmarks: 0,
        comments: 0,
        plays: 0,
        averageRating: 0,
        totalRatings: 0
      }
    };

    this.stories.set(id, newStory);
    this.saveToLocalStorage(); // 저장
    return newStory;
  }

  // 기존 ID를 유지하면서 스토리 추가 (샘플 데이터용)
  addStoryWithId(storyData: CreatedStoryData): CreatedStoryData {
    // 이미 존재하는 ID인지 확인
    if (this.stories.has(storyData.id)) {
      console.log(`스토리 ID ${storyData.id}가 이미 존재합니다. 건너뜁니다.`);
      return this.stories.get(storyData.id)!;
    }
    
    // 기존 ID와 데이터를 그대로 사용
    this.stories.set(storyData.id, storyData);
    console.log(`스토리 ${storyData.id} 추가됨`);
    this.saveToLocalStorage(); // 저장
    return storyData;
  }

  // 스토리 업데이트
  updateStory(id: string, updates: Partial<CreatedStoryData>): CreatedStoryData | null {
    const story = this.stories.get(id);
    if (!story) return null;

    const updatedStory: CreatedStoryData = {
      ...story,
      ...updates,
      updatedAt: new Date().toISOString()
    };

    this.stories.set(id, updatedStory);
    this.saveToLocalStorage(); // 저장
    return updatedStory;
  }

  // 스토리 조회
  getStory(id: string): CreatedStoryData | null {
    const story = this.stories.get(id);
    if (story) {
      // 조회수 증가
      story.stats.views++;
      this.stories.set(id, story);
    }
    return story || null;
  }

  // 모든 스토리 조회
  getAllStories(): CreatedStoryData[] {
    return Array.from(this.stories.values());
  }

  // 스토리 삭제
  deleteStory(id: string): boolean {
    const result = this.stories.delete(id);
    if (result) {
      this.saveToLocalStorage(); // 저장
    }
    return result;
  }

  // 초안 저장 (기존 초안 업데이트 또는 새 초안 생성)
  saveDraft(draft: Omit<StoryDraft, 'id' | 'lastSaved'>, existingId?: string): StoryDraft {
    // 기존 ID가 있으면 사용, 없으면 새로 생성
    const id = existingId || this.generateId();
    const now = new Date().toISOString();
    
    console.log('🗄️ 데이터베이스 드래프트 저장:', {
      id,
      existingId,
      title: draft.title,
      mediaImages: draft.data.media?.storyImages?.length || 0,
      isUpdate: !!existingId
    });
    
    const newDraft: StoryDraft = {
      ...draft,
      id,
      lastSaved: now,
      updatedAt: now // updatedAt도 업데이트
    };

    this.drafts.set(id, newDraft);
    
    console.log('🗄️ 메모리에 저장된 드래프트:', {
      id: newDraft.id,
      savedImageCount: newDraft.data.media?.storyImages?.length || 0
    });
    
    this.saveToLocalStorage(); // 저장
    return newDraft;
  }

  // 초안 조회
  getDraft(id: string): StoryDraft | null {
    return this.drafts.get(id) || null;
  }

  // 사용자의 모든 초안 조회
  getUserDrafts(creatorId: string): StoryDraft[] {
    return Array.from(this.drafts.values())
      .filter(draft => draft.data.creatorId === creatorId);
  }

  // 초안 삭제
  deleteDraft(id: string): boolean {
    const result = this.drafts.delete(id);
    if (result) {
      this.saveToLocalStorage(); // 저장
    }
    return result;
  }

  // 스토리 검색
  searchStories(query: string, filter?: StoryFilter): CreatedStoryData[] {
    let results = Array.from(this.stories.values());

    // 텍스트 검색
    if (query.trim()) {
      const lowerQuery = query.toLowerCase();
      results = results.filter(story =>
        story.title.toLowerCase().includes(lowerQuery) ||
        story.introduction.introduction.toLowerCase().includes(lowerQuery) ||
        story.content.characterName.toLowerCase().includes(lowerQuery) ||
        story.introduction.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
      );
    }

    // 필터 적용
    if (filter) {
      if (filter.category) {
        results = results.filter(story => story.metadata.category === filter.category);
      }
      
      if (filter.tags && filter.tags.length > 0) {
        results = results.filter(story =>
          filter.tags!.some(tag => story.introduction.tags.includes(tag))
        );
      }
      
      if (filter.contentRating && filter.contentRating.length > 0) {
        results = results.filter(story =>
          filter.contentRating!.includes(story.metadata.contentRating)
        );
      }
      
      if (filter.creatorId) {
        results = results.filter(story => story.creatorId === filter.creatorId);
      }
      
      if (filter.isPublished !== undefined) {
        results = results.filter(story => story.metadata.isPublished === filter.isPublished);
      }
      
      if (filter.minRating) {
        results = results.filter(story => story.stats.averageRating >= filter.minRating!);
      }
    }

    return results;
  }

  // 스토리 정렬
  sortStories(stories: CreatedStoryData[], sortBy: StorySortOption): CreatedStoryData[] {
    const sorted = [...stories];

    switch (sortBy) {
      case 'newest':
        return sorted.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      
      case 'oldest':
        return sorted.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
      
      case 'mostViewed':
        return sorted.sort((a, b) => b.stats.views - a.stats.views);
      
      case 'mostLiked':
        return sorted.sort((a, b) => b.stats.likes - a.stats.likes);
      
      case 'highestRated':
        return sorted.sort((a, b) => b.stats.averageRating - a.stats.averageRating);
      
      case 'mostPlayed':
        return sorted.sort((a, b) => b.stats.plays - a.stats.plays);
      
      case 'trending':
        // 최근 7일간의 활동을 기준으로 트렌딩 계산
        return sorted.sort((a, b) => {
          const scoreA = (a.stats.views * 0.3) + (a.stats.likes * 0.4) + (a.stats.plays * 0.3);
          const scoreB = (b.stats.views * 0.3) + (b.stats.likes * 0.4) + (b.stats.plays * 0.3);
          return scoreB - scoreA;
        });
      
      default:
        return sorted;
    }
  }

  // 추천 스토리
  getRecommendedStories(userId?: string, limit: number = 10): CreatedStoryData[] {
    const publishedStories = Array.from(this.stories.values())
      .filter(story => story.metadata.isPublished);

    // 간단한 추천 알고리즘: 평점과 인기도 기준
    const scored = publishedStories.map(story => ({
      story,
      score: (story.stats.averageRating * 0.4) + 
             (story.stats.likes * 0.3) + 
             (story.stats.plays * 0.2) + 
             (story.stats.views * 0.1)
    }));

    return scored
      .sort((a, b) => b.score - a.score)
      .slice(0, limit)
      .map(item => item.story);
  }

  // 리뷰 추가
  addReview(review: Omit<StoryReview, 'id' | 'createdAt'>): StoryReview {
    const newReview: StoryReview = {
      ...review,
      id: this.generateId(),
      createdAt: new Date().toISOString()
    };

    const storyReviews = this.reviews.get(review.storyId) || [];
    storyReviews.push(newReview);
    this.reviews.set(review.storyId, storyReviews);

    // 스토리 평점 업데이트
    this.updateStoryRating(review.storyId);

    return newReview;
  }

  // 스토리 리뷰 조회
  getStoryReviews(storyId: string): StoryReview[] {
    return this.reviews.get(storyId) || [];
  }

  // 플레이 세션 시작
  startPlaySession(storyId: string, userId: string): StoryPlaySession {
    const session: StoryPlaySession = {
      id: this.generateId(),
      storyId,
      userId,
      startedAt: new Date().toISOString(),
      currentTurn: 0,
      totalTurns: 0,
      choices: [],
      isCompleted: false
    };

    const storySessions = this.playSessions.get(storyId) || [];
    storySessions.push(session);
    this.playSessions.set(storyId, storySessions);

    // 플레이 수 증가
    const story = this.stories.get(storyId);
    if (story) {
      story.stats.plays++;
      this.stories.set(storyId, story);
    }

    return session;
  }

  // 통계 정보
  // localStorage 데이터 초기화 (디버깅용)
  clearLocalStorage() {
    localStorage.removeItem('echostory_stories');
    localStorage.removeItem('echostory_drafts');
    localStorage.removeItem('echostory_reviews');
    localStorage.removeItem('echostory_sessions');
    console.log('localStorage 데이터가 초기화되었습니다.');
  }
  
  getStats() {
    const stories = Array.from(this.stories.values());
    const drafts = Array.from(this.drafts.values());

    return {
      totalStories: stories.length,
      publishedStories: stories.filter(s => s.metadata.isPublished).length,
      totalDrafts: drafts.length,
      totalViews: stories.reduce((sum, s) => sum + s.stats.views, 0),
      totalPlays: stories.reduce((sum, s) => sum + s.stats.plays, 0),
      averageRating: stories.reduce((sum, s) => sum + s.stats.averageRating, 0) / stories.length || 0,
      categoryCounts: storyCategories.map(cat => ({
        category: cat.name,
        count: stories.filter(s => s.metadata.category === cat.id).length
      }))
    };
  }

  // 헬퍼 메서드들
  private generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }

  private updateStoryRating(storyId: string): void {
    const reviews = this.reviews.get(storyId) || [];
    const story = this.stories.get(storyId);
    
    if (story && reviews.length > 0) {
      const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
      story.stats.averageRating = totalRating / reviews.length;
      story.stats.totalRatings = reviews.length;
      this.stories.set(storyId, story);
    }
  }
}

// 싱글톤 인스턴스
export const storyDatabase = new StoryDatabase();

// 편의 함수들
export const createStory = (storyData: Omit<CreatedStoryData, 'id' | 'createdAt' | 'updatedAt'>, customId?: string) => 
  storyDatabase.createStory(storyData, customId);

export const getStory = (id: string) => storyDatabase.getStory(id);

export const updateStory = (id: string, updates: Partial<CreatedStoryData>) => 
  storyDatabase.updateStory(id, updates);

export const deleteStory = (id: string) => storyDatabase.deleteStory(id);

export const searchStories = (query: string, filter?: StoryFilter) => 
  storyDatabase.searchStories(query, filter);

export const sortStories = (stories: CreatedStoryData[], sortBy: StorySortOption) => 
  storyDatabase.sortStories(stories, sortBy);

export const saveDraft = (draft: Omit<StoryDraft, 'id' | 'lastSaved'>, existingId?: string) => 
  storyDatabase.saveDraft(draft, existingId);

export const getDraft = (id: string) => storyDatabase.getDraft(id);

export const getUserDrafts = (creatorId: string) => storyDatabase.getUserDrafts(creatorId);

export const deleteDraft = (id: string) => storyDatabase.deleteDraft(id);

export const getRecommendedStories = (userId?: string, limit?: number) => 
  storyDatabase.getRecommendedStories(userId, limit);

export const addReview = (review: Omit<StoryReview, 'id' | 'createdAt'>) => 
  storyDatabase.addReview(review);

export const getStoryReviews = (storyId: string) => storyDatabase.getStoryReviews(storyId);

export const startPlaySession = (storyId: string, userId: string) => 
  storyDatabase.startPlaySession(storyId, userId);

export const getAllStories = () => storyDatabase.getAllStories();

export const getStoryStats = () => storyDatabase.getStats();

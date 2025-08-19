// 스토리 생성 데이터 타입 정의

// 크리에이터 정보 타입
export interface CreatorInfo {
  id: string;
  handle: string;              // @username 형태
  displayName: string;         // 표시될 이름
  profileImage?: string;       // 프로필 이미지 URL
  bio?: string;               // 간단한 소개
  joinDate: string;           // 가입일
  stats: {
    totalStories: number;     // 총 스토리 수
    totalLikes: number;       // 총 좋아요 수
    followers: number;        // 팔로워 수
    following: number;        // 팔로잉 수
  };
  badges?: string[];          // 뱃지들 (예: "Verified", "Popular Creator" 등)
  socialLinks?: {
    twitter?: string;
    instagram?: string;
    website?: string;
  };
}

export interface CreatedStoryData {
  // 기본 정보
  id: string;
  title: string;
  titleEn?: string;  // 영어 제목 (선택사항)
  createdAt: string;
  updatedAt: string;
  creatorId: string;
  creatorHandle: string;
  
  // Content 탭 데이터
  content: {
    storySettings: string;        // 스토리 설정 (캐릭터 정보, 배경 등)
    secretSettings: string;       // 비밀 설정 (AI만 알 수 있는 정보)
    characterName: string;        // 캐릭터 이름
    characterDescription: string; // 캐릭터 상세 설명
  };
  
  // Start Situation 탭 데이터
  startSituation: {
    startingSituation: string;    // 시작 상황 설명
    startingSituationEn?: string; // 시작 상황 설명 (영어)
    firstDialogue: string;        // 첫 번째 대화
    firstDialogueEn?: string;     // 첫 번째 대화 (영어)
  };
  
  // Introduction 탭 데이터
  introduction: {
    introduction: string;         // 스토리 소개
    tags: string[];              // 태그들
    visibility: 'public' | 'private' | 'unlisted'; // 공개 설정
    safetyFilter: 'all-users' | 'mature' | 'adult'; // 안전 필터
    creatorComment: string;       // 작성자 코멘트
  };
  
  // 추가 메타데이터
  metadata: {
    isTemporary: boolean;         // 임시 저장 여부
    isPublished: boolean;         // 게시 여부
    version: number;              // 버전 번호
    language: string;             // 언어
    category: string;             // 카테고리
    estimatedPlayTime: number;    // 예상 플레이 시간 (분)
    contentRating: 'all' | 'teen' | 'mature' | 'adult'; // 콘텐츠 등급
  };
  
  // 통계 정보
  stats: {
    views: number;                // 조회수
    likes: number;                // 좋아요 수
    bookmarks: number;            // 북마크 수
    comments: number;             // 댓글 수
    plays: number;                // 플레이 수
    averageRating: number;        // 평균 평점
    totalRatings: number;         // 총 평점 수
  };
  
  // 이미지 및 미디어
  media: {
    thumbnailImage: string;       // 썸네일 이미지
    storyImages: string[];        // 스토리 이미지들
    backgroundMusic?: string;     // 배경음악 (선택사항)
  };
  
  // 게임플레이 설정
  gameplay: {
    allowUserInput: boolean;      // 사용자 입력 허용
    maxTurns?: number;           // 최대 턴 수 (선택사항)
    autoSave: boolean;           // 자동 저장
    difficulty: 'easy' | 'normal' | 'hard'; // 난이도
  };
}

// 스토리 초안 (임시 저장) 타입
export interface StoryDraft {
  id: string;
  title: string;
  lastSaved: string;
  updatedAt: string; // 마지막 수정 시간
  progress: {
    contentCompleted: boolean;
    startSituationCompleted: boolean;
    introductionCompleted: boolean;
    overallProgress: number; // 0-100%
  };
  data: Partial<CreatedStoryData>;
}

// 스토리 템플릿 타입
export interface StoryTemplate {
  id: string;
  name: string;
  description: string;
  category: string;
  tags: string[];
  template: {
    content: Partial<CreatedStoryData['content']>;
    startSituation: Partial<CreatedStoryData['startSituation']>;
    introduction: Partial<CreatedStoryData['introduction']>;
  };
  isOfficial: boolean;
  createdBy: string;
  usageCount: number;
}

// 스토리 검색 필터
export interface StoryFilter {
  category?: string;
  tags?: string[];
  contentRating?: string[];
  language?: string;
  createdAfter?: string;
  createdBefore?: string;
  minRating?: number;
  minPlays?: number;
  isPublished?: boolean;
  creatorId?: string;
}

// 스토리 정렬 옵션
export type StorySortOption = 
  | 'newest' 
  | 'oldest' 
  | 'mostViewed' 
  | 'mostLiked' 
  | 'highestRated' 
  | 'mostPlayed'
  | 'trending';

// 스토리 상태
export type StoryStatus = 
  | 'draft'        // 초안
  | 'review'       // 검토 중
  | 'published'    // 게시됨
  | 'archived'     // 보관됨
  | 'deleted';     // 삭제됨

// 스토리 카테고리
export interface StoryCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  parentCategory?: string;
}

// 스토리 태그
export interface StoryTag {
  id: string;
  name: string;
  category: string;
  color: string;
  description?: string;
  usageCount: number;
}

// 스토리 리뷰/평점
export interface StoryReview {
  id: string;
  storyId: string;
  userId: string;
  userHandle: string;
  rating: number; // 1-5
  comment?: string;
  createdAt: string;
  isVerified: boolean;
  helpfulVotes: number;
}

// 스토리 플레이 세션
export interface StoryPlaySession {
  id: string;
  storyId: string;
  userId: string;
  startedAt: string;
  endedAt?: string;
  currentTurn: number;
  totalTurns: number;
  choices: Array<{
    turn: number;
    userInput: string;
    aiResponse: string;
    timestamp: string;
  }>;
  isCompleted: boolean;
  rating?: number;
}

# 스토리 데이터베이스 시스템

이 폴더는 EchoStory 앱의 스토리 생성, 저장, 관리를 위한 데이터베이스 시스템입니다.

## 📁 파일 구조

```
data/stories/
├── README.md              # 이 파일
├── types.ts              # TypeScript 타입 정의
├── storyDatabase.ts      # 메인 데이터베이스 및 관리 함수
├── storyConverter.ts     # 폼 데이터 변환 및 검증 유틸리티
└── index.ts              # 통합 내보내기 및 편의 함수
```

## 📝 스토리 생성 프로세스

### 1. Content 탭 입력 항목
- **storySettings**: 스토리 설정 (캐릭터 정보, 배경 등) - 최대 2000자
- **secretSettings**: 비밀 설정 (AI만 알 수 있는 정보)
- **characterName**: 캐릭터 이름 - 필수
- **characterDescription**: 캐릭터 상세 설명 - 최대 1000자, 필수

### 2. Start Situation 탭 입력 항목
- **startingSituation**: 시작 상황 설명 - 최대 1000자, 필수
- **firstDialogue**: 첫 번째 대화 - 필수

### 3. Introduction 탭 입력 항목
- **title**: 스토리 제목 - 최대 100자, 필수
- **introduction**: 스토리 소개 - 최대 500자, 필수
- **tags**: 태그들 - 최소 1개, 최대 10개
- **visibility**: 공개 설정 (public/private/unlisted)
- **safetyFilter**: 안전 필터 (all-users/mature/adult)
- **creatorComment**: 작성자 코멘트
- **storyImages**: 스토리 이미지들

## 🗄️ 데이터 구조

### CreatedStoryData 인터페이스

완성된 스토리는 다음과 같은 구조로 저장됩니다:

```typescript
interface CreatedStoryData {
  // 기본 정보
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  creatorId: string;
  creatorHandle: string;
  
  // Content 탭 데이터
  content: {
    storySettings: string;
    secretSettings: string;
    characterName: string;
    characterDescription: string;
  };
  
  // Start Situation 탭 데이터
  startSituation: {
    startingSituation: string;
    firstDialogue: string;
  };
  
  // Introduction 탭 데이터
  introduction: {
    introduction: string;
    tags: string[];
    visibility: 'public' | 'private' | 'unlisted';
    safetyFilter: 'all-users' | 'mature' | 'adult';
    creatorComment: string;
  };
  
  // 메타데이터
  metadata: {
    isTemporary: boolean;
    isPublished: boolean;
    version: number;
    language: string;
    category: string;
    estimatedPlayTime: number;
    contentRating: 'all' | 'teen' | 'mature' | 'adult';
  };
  
  // 통계 정보
  stats: {
    views: number;
    likes: number;
    bookmarks: number;
    comments: number;
    plays: number;
    averageRating: number;
    totalRatings: number;
  };
  
  // 미디어
  media: {
    thumbnailImage: string;
    storyImages: string[];
    backgroundMusic?: string;
  };
  
  // 게임플레이 설정
  gameplay: {
    allowUserInput: boolean;
    maxTurns?: number;
    autoSave: boolean;
    difficulty: 'easy' | 'normal' | 'hard';
  };
}
```

## 🏷️ 카테고리 및 태그 시스템

### 스토리 카테고리
- **romance** 💕: 로맨스
- **fantasy** ✨: 판타지
- **slice-of-life** 🌅: 일상
- **mystery** 🔍: 미스터리
- **adventure** 🗺️: 모험
- **drama** 🎭: 드라마
- **comedy** 😄: 코미디
- **horror** 👻: 호러

### 태그 시스템
태그는 다음 카테고리로 분류됩니다:
- **genre**: 장르 태그
- **setting**: 배경 태그
- **character**: 캐릭터 특성 태그
- **relationship**: 관계 태그

## 🔧 주요 기능들

### 스토리 생성 및 저장
```typescript
import { saveStory, saveStoryDraft } from '../data/stories';

// 완성된 스토리 저장
const result = await saveStory(formData, creatorId, creatorHandle);

// 초안 저장
const draftResult = await saveStoryDraft(formData, creatorId, title);
```

### 데이터 검증
```typescript
import { validateStoryFormData } from '../data/stories';

const validation = validateStoryFormData(formData);
if (!validation.isValid) {
  console.log('오류:', validation.errors);
}
```

### 진행률 계산
```typescript
import { calculateProgress } from '../data/stories';

const progress = calculateProgress(formData);
console.log(`전체 진행률: ${progress.overallProgress}%`);
```

### 스토리 검색 및 필터링
```typescript
import { searchStories, sortStories, advancedSearchStories } from '../data/stories';

// 기본 검색
const results = searchStories('로맨스');

// 고급 검색
const filtered = advancedSearchStories('학교', {
  category: 'romance',
  tags: ['#School'],
  contentRating: ['all', 'teen']
}, 'newest', 10);
```

### 추천 시스템
```typescript
import { getRecommendedStories, getRelatedStories } from '../data/stories';

// 추천 스토리
const recommended = getRecommendedStories(userId, 10);

// 관련 스토리
const related = getRelatedStories(storyId, 5);
```

## 📊 통계 및 분석

### 대시보드 데이터
```typescript
import { getStoryDashboardData } from '../data/stories';

const dashboardData = getStoryDashboardData();
console.log('총 스토리 수:', dashboardData.totalStories);
console.log('카테고리별 통계:', dashboardData.categories);
```

### 개별 스토리 통계
```typescript
import { getStory, getStoryReviews } from '../data/stories';

const story = getStory(storyId);
const reviews = getStoryReviews(storyId);
console.log(`조회수: ${story.stats.views}, 평점: ${story.stats.averageRating}`);
```

## 🎮 플레이 세션 관리

### 플레이 세션 시작
```typescript
import { startPlaySession } from '../data/stories';

const session = startPlaySession(storyId, userId);
console.log('세션 시작:', session.id);
```

## 📝 템플릿 시스템

미리 정의된 스토리 템플릿을 사용할 수 있습니다:

```typescript
import { storyTemplates } from '../data/stories';

// 학교 로맨스 템플릿
const schoolRomanceTemplate = storyTemplates.find(t => t.id === 'school-romance');

// 판타지 모험 템플릿
const fantasyTemplate = storyTemplates.find(t => t.id === 'fantasy-adventure');
```

## 🔄 데이터 변환

### 폼 데이터 ↔ 데이터베이스 형식
```typescript
import { 
  convertFormDataToStoryData, 
  convertStoryDataToFormData 
} from '../data/stories';

// 폼 → 데이터베이스
const storyData = convertFormDataToStoryData(formData, creatorId, creatorHandle);

// 데이터베이스 → 폼 (편집용)
const formData = convertStoryDataToFormData(storyData);
```

## 💾 자동 저장

```typescript
import { autoSaveStoryDraft } from '../data/stories';

// 주기적으로 호출 (예: 30초마다)
setInterval(() => {
  autoSaveStoryDraft(formData, creatorId, existingDraftId);
}, 30000);
```

## 🔍 사용 예시

### StoryCreationScreen과 연동
```typescript
import { saveStory, validateStoryFormData } from '../data/stories';

const handleSave = async (formData, isTemporary = false) => {
  if (!isTemporary) {
    // 완성본 저장 전 검증
    const validation = validateStoryFormData(formData);
    if (!validation.isValid) {
      alert(validation.errors.join('\n'));
      return;
    }
  }

  const result = isTemporary 
    ? await saveStoryDraft(formData, creatorId)
    : await saveStory(formData, creatorId, creatorHandle);

  if (result.success) {
    console.log('저장 완료:', result.storyId || result.draftId);
  } else {
    console.error('저장 실패:', result.errors);
  }
};
```

## 📈 성능 최적화

- 메모리 기반 저장소 사용 (개발용)
- 실제 운영에서는 데이터베이스 연동 필요
- 대용량 데이터 처리를 위한 페이지네이션 지원
- 캐싱 시스템으로 검색 성능 향상

## 🔒 보안 고려사항

- 사용자 입력 데이터 검증
- XSS 방지를 위한 HTML 이스케이핑
- 콘텐츠 등급별 접근 제어
- 스팸 방지 및 부적절한 콘텐츠 필터링

## 🚀 확장 가능성

- 실시간 협업 편집 기능
- 버전 관리 시스템
- 다국어 지원
- AI 기반 스토리 추천
- 소셜 기능 (좋아요, 댓글, 공유)
- 수익화 시스템 (프리미엄 스토리)

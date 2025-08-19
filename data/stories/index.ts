// 스토리 데이터베이스 통합 내보내기

// 타입 정의
export * from './types';

// 데이터베이스 및 함수들
export {
  storyCategories,
  storyTags,
  storyTemplates,
  storyDatabase,
  createStory,
  getStory,
  updateStory,
  deleteStory,
  getAllStories,
  searchStories,
  sortStories,
  saveDraft,
  getDraft,
  getUserDrafts,
  deleteDraft,
  getRecommendedStories,
  addReview,
  getStoryReviews,
  startPlaySession,
  getStoryStats
} from './storyDatabase';

// 변환 및 유틸리티 함수들
export {
  convertFormDataToStoryData,
  convertStoryDataToFormData,
  validateStoryFormData,
  calculateProgress,
  saveStory,
  saveStoryDraft,
  autoSaveStoryDraft
} from './storyConverter';

export type { StoryFormData } from './storyConverter';

// 샘플 데이터
export {
  sampleStories,
  initializeSampleStories
} from './sampleStories';

// 크리에이터 데이터
export {
  getCreatorById,
  getCreatorByHandle,
  getAllCreators,
  getPopularCreators,
  searchCreators,
  updateCreatorStats,
  followCreator,
  unfollowCreator
} from './creatorData';

// 편의 함수들
import { 
  storyCategories, 
  storyTags, 
  searchStories, 
  sortStories, 
  getRecommendedStories,
  getStoryStats
} from './storyDatabase';
import { CreatedStoryData, StoryFilter, StorySortOption } from './types';

// 카테고리별 스토리 조회
export const getStoriesByCategory = (categoryId: string): CreatedStoryData[] => {
  return searchStories('', { category: categoryId });
};

// 태그별 스토리 조회
export const getStoriesByTag = (tag: string): CreatedStoryData[] => {
  return searchStories('', { tags: [tag] });
};

// 인기 스토리 조회
export const getPopularStories = (limit: number = 10): CreatedStoryData[] => {
  const allStories = searchStories('');
  const sorted = sortStories(allStories, 'mostViewed');
  return sorted.slice(0, limit);
};

// 신규 스토리 조회
export const getNewStories = (limit: number = 10): CreatedStoryData[] => {
  const allStories = searchStories('');
  const sorted = sortStories(allStories, 'newest');
  return sorted.slice(0, limit);
};

// 트렌딩 스토리 조회
export const getTrendingStories = (limit: number = 10): CreatedStoryData[] => {
  const allStories = searchStories('');
  const sorted = sortStories(allStories, 'trending');
  return sorted.slice(0, limit);
};

// 높은 평점 스토리 조회
export const getTopRatedStories = (limit: number = 10): CreatedStoryData[] => {
  const allStories = searchStories('', { minRating: 4.0 });
  const sorted = sortStories(allStories, 'highestRated');
  return sorted.slice(0, limit);
};

// 사용자별 스토리 조회
export const getUserStories = (creatorId: string): CreatedStoryData[] => {
  return searchStories('', { creatorId });
};

// 크리에이터별 스토리 조회 (getUserStories와 동일하지만 명확한 이름)
export const getStoriesByCreator = (creatorId: string): CreatedStoryData[] => {
  return searchStories('', { creatorId });
};

// 게시된 스토리만 조회
export const getPublishedStories = (): CreatedStoryData[] => {
  return searchStories('', { isPublished: true });
};

// 카테고리 정보 조회
export const getCategoryById = (categoryId: string) => {
  return storyCategories.find(cat => cat.id === categoryId);
};

// 태그 정보 조회
export const getTagById = (tagId: string) => {
  return storyTags.find(tag => tag.id === tagId);
};

// 고급 검색
export const advancedSearchStories = (
  query: string,
  filters: StoryFilter,
  sortBy: StorySortOption = 'newest',
  limit?: number
): CreatedStoryData[] => {
  let results = searchStories(query, filters);
  results = sortStories(results, sortBy);
  
  if (limit) {
    results = results.slice(0, limit);
  }
  
  return results;
};

// 관련 스토리 조회 (같은 카테고리나 태그)
export const getRelatedStories = (
  storyId: string, 
  limit: number = 5
): CreatedStoryData[] => {
  const story = searchStories('').find(s => s.id === storyId);
  if (!story) return [];

  // 같은 카테고리의 스토리들
  const sameCategory = searchStories('', { 
    category: story.metadata.category 
  }).filter(s => s.id !== storyId);

  // 같은 태그를 가진 스토리들
  const sameTags = searchStories('', { 
    tags: story.introduction.tags 
  }).filter(s => s.id !== storyId);

  // 중복 제거하고 인기도순으로 정렬
  const combined = [...sameCategory, ...sameTags];
  const unique = combined.filter((story, index, self) => 
    index === self.findIndex(s => s.id === story.id)
  );

  const sorted = sortStories(unique, 'mostLiked');
  return sorted.slice(0, limit);
};

// 스토리 통계 대시보드용 데이터
export const getStoryDashboardData = () => {
  const stats = getStoryStats();
  const categories = storyCategories.map(cat => ({
    ...cat,
    count: stats.categoryCounts.find((cc: any) => cc.category === cat.name)?.count || 0
  }));

  const popularTags = storyTags
    .sort((a, b) => b.usageCount - a.usageCount)
    .slice(0, 10);

  return {
    ...stats,
    categories,
    popularTags,
    recentStories: getNewStories(5),
    trendingStories: getTrendingStories(5),
    topRatedStories: getTopRatedStories(5)
  };
};

// 이미지 유틸리티 함수들
export const getStoryImageWithFallback = (imageUrl?: string): string => {
  return imageUrl || '/images/echostory.png';
};

export const getStoryThumbnailWithFallback = (story: CreatedStoryData): string => {
  return story.media.thumbnailImage || '/images/echostory.png';
};

export const getStoryImagesWithFallback = (story: CreatedStoryData): string[] => {
  const images = story.media.storyImages || [];
  if (images.length === 0) {
    return ['/images/echostory.png'];
  }
  return images;
};

// 크리에이터 이미지 유틸리티 함수들
export const getCreatorProfileImageWithFallback = (profileImage?: string): string => {
  return profileImage || '/images/creator.png';
};

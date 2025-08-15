import { CreatedStoryData } from './types';

// 캐릭터 정보 추출 유틸리티 함수들
export interface CharacterInfo {
  id: string;
  name: string;
  description: string;
  image: string;
  tags: string[];
  creator: string;
  storySettings: string;
  secretSettings: string;
  startingSituation: string;
  firstDialogue: string;
  introduction: string;
  stats: {
    views: number;
    likes: number;
    plays: number;
    rating: number;
  };
}

// 스토리 데이터에서 캐릭터 정보 추출
export function extractCharacterInfo(story: CreatedStoryData): CharacterInfo {
  return {
    id: story.id,
    name: story.content.characterName,
    description: story.content.characterDescription,
    image: story.media.thumbnailImage,
    tags: story.introduction.tags,
    creator: story.creatorHandle,
    storySettings: story.content.storySettings,
    secretSettings: story.content.secretSettings,
    startingSituation: story.startSituation.startingSituation,
    firstDialogue: story.startSituation.firstDialogue,
    introduction: story.introduction.introduction,
    stats: {
      views: story.stats.views,
      likes: story.stats.likes,
      plays: story.stats.plays,
      rating: story.stats.averageRating
    }
  };
}

// 캐릭터 정보 유효성 검사
export function validateCharacterData(story: CreatedStoryData): boolean {
  const required = [
    story.content?.characterName,
    story.content?.characterDescription,
    story.content?.storySettings,
    story.startSituation?.startingSituation,
    story.startSituation?.firstDialogue,
    story.introduction?.introduction,
    story.introduction?.tags?.length > 0,
    story.media?.thumbnailImage
  ];

  return required.every(field => field);
}

// 캐릭터 이미지 경로 생성
export function generateCharacterImagePath(characterName: string): string {
  // 새로운 이미지 유틸리티를 사용하여 캐릭터 이미지 경로 생성
  // 동적 로딩을 위해 기본 경로만 반환하고, 실제 로딩은 컴포넌트에서 처리
  return `/data/ch_img/${characterName.replace(/[^a-zA-Z0-9가-힣]/g, '_').replace(/\s+/g, '_').toLowerCase()}_1.png`;
}

// 캐릭터 태그 정리 (중복 제거 및 정렬)
export function normalizeCharacterTags(tags: string[]): string[] {
  return [...new Set(tags)]
    .filter(tag => tag.trim().length > 0)
    .sort();
}

// 캐릭터 검색 함수
export function searchCharacters(
  stories: CreatedStoryData[], 
  query: string
): CreatedStoryData[] {
  const lowerQuery = query.toLowerCase();
  
  return stories.filter(story => {
    const character = extractCharacterInfo(story);
    return (
      character.name.toLowerCase().includes(lowerQuery) ||
      character.description.toLowerCase().includes(lowerQuery) ||
      character.tags.some(tag => tag.toLowerCase().includes(lowerQuery)) ||
      character.creator.toLowerCase().includes(lowerQuery)
    );
  });
}

// 인기 캐릭터 정렬 (조회수 + 좋아요 기준)
export function sortCharactersByPopularity(stories: CreatedStoryData[]): CreatedStoryData[] {
  return [...stories].sort((a, b) => {
    const scoreA = a.stats.views + (a.stats.likes * 2);
    const scoreB = b.stats.views + (b.stats.likes * 2);
    return scoreB - scoreA;
  });
}

// 캐릭터 카테고리별 분류
export function categorizeCharacters(stories: CreatedStoryData[]): Record<string, CreatedStoryData[]> {
  const categories: Record<string, CreatedStoryData[]> = {};
  
  stories.forEach(story => {
    const category = story.metadata.category;
    if (!categories[category]) {
      categories[category] = [];
    }
    categories[category].push(story);
  });
  
  return categories;
}

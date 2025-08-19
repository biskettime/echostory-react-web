import { CreatedStoryData } from './types';

// Character information extraction utility functions
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

// Extract character information from story data
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

// Validate character data
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

// Generate character image path
export function generateCharacterImagePath(characterName: string): string {
  // Generate character image path using new image utility
  // Return base path only for dynamic loading, actual loading is handled in component
  return `/data/ch_img/${characterName.replace(/[^a-zA-Z0-9가-힣]/g, '_').replace(/\s+/g, '_').toLowerCase()}_1.png`;
}

// Normalize character tags (remove duplicates and sort)
export function normalizeCharacterTags(tags: string[]): string[] {
  return [...new Set(tags)]
    .filter(tag => tag.trim().length > 0)
    .sort();
}

// Search characters function
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

// Sort characters by popularity (views + likes)
export function sortCharactersByPopularity(stories: CreatedStoryData[]): CreatedStoryData[] {
  return [...stories].sort((a, b) => {
    const scoreA = a.stats.views + (a.stats.likes * 2);
    const scoreB = b.stats.views + (b.stats.likes * 2);
    return scoreB - scoreA;
  });
}

// Categorize characters by category
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

// Detect character gender function
export function detectCharacterGender(story: CreatedStoryData): 'male' | 'female' | 'unknown' {
  const characterName = story.content.characterName.toLowerCase();
  const characterDescription = story.content.characterDescription.toLowerCase();
  const storySettings = story.content.storySettings.toLowerCase();
  // Remove hash symbols from tags for better matching
  const tags = story.introduction.tags.map(tag => tag.toLowerCase().replace(/^#/, ''));
  
  // Combine all text for analysis
  const fullText = `${characterName} ${characterDescription} ${storySettings} ${tags.join(' ')}`;
  
  // Keywords indicating female
  const femaleKeywords = [
    // Korean terms
    '여자', '여성', '소녀', '걸', '언니', '누나', '여동생', '딸', '엄마', '어머니', '할머니',
    '그녀', '여학생', '여직원', '여교사', '여의사', '간호사', '여배우', '여가수',
    '아가씨', '처녀', '부인', '아내', '신부', '여친', '여자친구', '애인',
    '미소녀', '미인', '예쁜', '아름다운', '귀여운', '사랑스러운',
    '치마', '드레스', '하이힐', '립스틱', '화장', '메이크업',
    '여고생', '여대생', '선배', '후배',
    // English terms
    'girl', 'woman', 'female', 'she', 'her', 'lady', 'miss', 'mrs', 'girlfriend',
    // Popular female names (Japanese/Korean)
    'haruka', 'yuki', 'sakura', 'ayame', 'rei', 'mio', 'nana', 'rina', 
    'soo-jin', 'min-jung', 'ji-eun', 'hye-jin', 'seo-yeon', 'yu-jin'
  ];
  
  // Keywords indicating male
  const maleKeywords = [
    // Korean terms
    '남자', '남성', '소년', '보이', '형', '오빠', '남동생', '아들', '아빠', '아버지', '할아버지',
    '그', '남학생', '남직원', '남교사', '의사', '남배우', '남가수',
    '총각', '남편', '신랑', '남친', '남자친구', '애인',
    '잘생긴', '멋진', '훈훈한', '카리스마', '근육',
    '정장', '넥타이', '수트',
    '남고생', '남대생', '선배', '후배',
    // English terms
    'boy', 'man', 'male', 'he', 'him', 'his', 'guy', 'mr', 'boyfriend',
    // Popular male names (Japanese/Korean)
    'hyunwoo', 'takeshi', 'hiroshi', 'kenji', 'ryo', 'sota', 'daiki', 'yuki',
    'min-ho', 'jun-ho', 'dong-hyun', 'sung-min', 'ji-hoon', 'tae-hyung'
  ];
  
  // Calculate keyword matching score
  let femaleScore = 0;
  let maleScore = 0;
  femaleKeywords.forEach(keyword => {
    // Use word boundaries for English pronouns to avoid false matches
    const isEnglishPronoun = ['she', 'her', 'he', 'him', 'his'].includes(keyword);
    const pattern = isEnglishPronoun ? `\\b${keyword}\\b` : keyword;
    const matches = (fullText.match(new RegExp(pattern, 'gi')) || []).length;
    femaleScore += matches;
  });
  
  maleKeywords.forEach(keyword => {
    // Use word boundaries for English pronouns to avoid false matches
    const isEnglishPronoun = ['she', 'her', 'he', 'him', 'his'].includes(keyword);
    const pattern = isEnglishPronoun ? `\\b${keyword}\\b` : keyword;
    const matches = (fullText.match(new RegExp(pattern, 'gi')) || []).length;
    maleScore += matches;
  });
  
  // Determine result
  if (femaleScore > maleScore && femaleScore > 0) {
    return 'female';
  } else if (maleScore > femaleScore && maleScore > 0) {
    return 'male';
  } else {
    return 'unknown';
  }
}

// Default profile data
export const DEFAULT_PROFILES = {
  David: {
    name: 'David',
    info: 'A kind and genuine man with a warm personality who cares for others and engages in conversations with a sincere heart.',
    image: '/data/ch_img/rm001_1.png' // Male character image (realistic male 001)
  },
  Jenny: {
    name: 'Jenny',
    info: 'A kind and genuine woman with a warm personality who cares for others and engages in conversations with a sincere heart.',
    image: '/data/ch_img/rf001_1.png' // Female character image (realistic female 001)
  }
};

// Create default profile based on character gender
export function createDefaultProfileForCharacter(story: CreatedStoryData): {name: string, info: string, image: string} {
  const gender = detectCharacterGender(story);
  
  console.log(`🎭 Character gender detected: ${gender} for character: ${story.content.characterName}`);
  console.log(`🎭 Character description sample: ${story.content.characterDescription.substring(0, 100)}`);
  
  if (gender === 'female') {
    // If character is female, use male profile (David)
    console.log('🎭 Female character detected -> Using male profile (David)');
    return { ...DEFAULT_PROFILES.David };
  } else if (gender === 'male') {
    // If character is male, use female profile (Jenny)
    console.log('🎭 Male character detected -> Using female profile (Jenny)');
    return { ...DEFAULT_PROFILES.Jenny };
  } else {
    // If gender is unknown, use Jenny as default
    console.log('🎭 Unknown gender -> Using female profile (Jenny) as default');
    return { ...DEFAULT_PROFILES.Jenny };
  }
}

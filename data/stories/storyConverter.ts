import { CreatedStoryData, StoryDraft } from './types';
import { createStory, updateStory, saveDraft } from './storyDatabase';
import { t } from '../../utils/i18n';

// StoryCreationScreen의 formData 타입 (기존 컴포넌트와 호환)
export interface StoryFormData {
  title: string;
  storySettings: string;
  secretSettings: string;
  characterName: string;
  characterDescription: string;
  startingSituation: string;
  firstDialogue: string;
  introduction: string;
  tags: string[];
  visibility: 'public' | 'private' | 'unlisted';
  safetyFilter: 'all-users' | 'mature' | 'adult';
  creatorComment: string;
  storyImages: string[];
  isTemporary?: boolean;
  createdAt?: string;
}

// 폼 데이터를 데이터베이스 형식으로 변환
export function convertFormDataToStoryData(
  formData: StoryFormData,
  creatorId: string,
  creatorHandle: string,
  additionalData?: Partial<CreatedStoryData>
): Omit<CreatedStoryData, 'id' | 'createdAt' | 'updatedAt'> {
  
  // 카테고리 자동 추론 (태그 기반)
  const inferCategory = (tags: string[]): string => {
    const tagLower = tags.map(tag => tag.toLowerCase());
    
    if (tagLower.some(tag => tag.includes('romance') || tag.includes('love'))) return 'romance';
    if (tagLower.some(tag => tag.includes('fantasy') || tag.includes('magic'))) return 'fantasy';
    if (tagLower.some(tag => tag.includes('mystery') || tag.includes('detective'))) return 'mystery';
    if (tagLower.some(tag => tag.includes('horror') || tag.includes('scary'))) return 'horror';
    if (tagLower.some(tag => tag.includes('comedy') || tag.includes('funny'))) return 'comedy';
    if (tagLower.some(tag => tag.includes('adventure') || tag.includes('action'))) return 'adventure';
    if (tagLower.some(tag => tag.includes('school') || tag.includes('daily'))) return 'slice-of-life';
    
    return 'slice-of-life'; // 기본값
  };

  // 콘텐츠 등급 매핑
  const mapContentRating = (safetyFilter: string): 'all' | 'teen' | 'mature' | 'adult' => {
    switch (safetyFilter) {
      case 'all-users': return 'all';
      case 'mature': return 'mature';
      case 'adult': return 'adult';
      default: return 'teen';
    }
  };

  // 예상 플레이 시간 계산 (텍스트 길이 기반)
  const calculatePlayTime = (data: StoryFormData): number => {
    const totalLength = 
      data.storySettings.length + 
      data.characterDescription.length + 
      data.startingSituation.length + 
      data.firstDialogue.length + 
      data.introduction.length;
    
    // 대략적인 계산: 100자당 1분
    return Math.max(5, Math.ceil(totalLength / 100));
  };

  const category = inferCategory(formData.tags);
  const contentRating = mapContentRating(formData.safetyFilter);
  const estimatedPlayTime = calculatePlayTime(formData);

  return {
    title: formData.title || t('create.untitledStory'),
    creatorId,
    creatorHandle,
    
    content: {
      storySettings: formData.storySettings,
      secretSettings: formData.secretSettings,
      characterName: formData.characterName,
      characterDescription: formData.characterDescription
    },
    
    startSituation: {
      startingSituation: formData.startingSituation,
      firstDialogue: formData.firstDialogue
    },
    
    introduction: {
      introduction: formData.introduction,
      tags: formData.tags,
      visibility: formData.visibility,
      safetyFilter: formData.safetyFilter,
      creatorComment: formData.creatorComment
    },
    
    metadata: {
      isTemporary: formData.isTemporary || false,
      isPublished: !formData.isTemporary && formData.visibility !== 'private',
      version: 1,
      language: 'ko',
      category,
      estimatedPlayTime,
      contentRating
    },
    
    stats: {
      views: 0,
      likes: 0,
      bookmarks: 0,
      comments: 0,
      plays: 0,
      averageRating: 0,
      totalRatings: 0
    },
    
    media: {
      thumbnailImage: formData.storyImages[0] || '/images/default-story-thumbnail.svg',
      storyImages: formData.storyImages,
      backgroundMusic: undefined
    },
    
    gameplay: {
      allowUserInput: true,
      maxTurns: undefined,
      autoSave: true,
      difficulty: 'normal'
    },
    
    ...additionalData
  };
}

// 데이터베이스 형식을 폼 데이터로 변환 (편집용)
export function convertStoryDataToFormData(storyData: CreatedStoryData): StoryFormData {
  return {
    title: storyData.title,
    storySettings: storyData.content.storySettings,
    secretSettings: storyData.content.secretSettings,
    characterName: storyData.content.characterName,
    characterDescription: storyData.content.characterDescription,
    startingSituation: storyData.startSituation.startingSituation,
    firstDialogue: storyData.startSituation.firstDialogue,
    introduction: storyData.introduction.introduction,
    tags: storyData.introduction.tags,
    visibility: storyData.introduction.visibility,
    safetyFilter: storyData.introduction.safetyFilter,
    creatorComment: storyData.introduction.creatorComment,
    storyImages: storyData.media.storyImages,
    isTemporary: storyData.metadata.isTemporary,
    createdAt: storyData.createdAt
  };
}

// 폼 데이터 검증
export function validateStoryFormData(formData: StoryFormData): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];

  // 필수 필드 검증
  if (!formData.title.trim()) {
    errors.push('제목을 입력해주세요.');
  }

  if (!formData.characterName.trim()) {
    errors.push('캐릭터 이름을 입력해주세요.');
  }

  if (!formData.characterDescription.trim()) {
    errors.push('캐릭터 설명을 입력해주세요.');
  }

  if (!formData.startingSituation.trim()) {
    errors.push('시작 상황을 입력해주세요.');
  }

  if (!formData.introduction.trim()) {
    errors.push('스토리 소개를 입력해주세요.');
  }

  // 길이 제한 검증
  if (formData.title.length > 100) {
    errors.push('제목은 100자 이하로 입력해주세요.');
  }

  if (formData.storySettings.length > 2000) {
    errors.push('스토리 설정은 2000자 이하로 입력해주세요.');
  }

  if (formData.characterDescription.length > 1000) {
    errors.push('캐릭터 설명은 1000자 이하로 입력해주세요.');
  }

  if (formData.startingSituation.length > 1000) {
    errors.push('시작 상황은 1000자 이하로 입력해주세요.');
  }

  if (formData.introduction.length > 500) {
    errors.push('스토리 소개는 500자 이하로 입력해주세요.');
  }

  // 태그 검증
  if (formData.tags.length === 0) {
    errors.push('최소 1개의 태그를 추가해주세요.');
  }

  if (formData.tags.length > 10) {
    errors.push('태그는 최대 10개까지 추가할 수 있습니다.');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

// 진행률 계산
export function calculateProgress(formData: StoryFormData): {
  contentCompleted: boolean;
  startSituationCompleted: boolean;
  introductionCompleted: boolean;
  overallProgress: number;
} {
  // Content 탭 진행도 (40%)
  let contentScore = 0;
  if (formData.characterName.trim()) contentScore += 10;
  if (formData.characterDescription.trim()) contentScore += 15;
  if (formData.storySettings.trim()) contentScore += 15;
  
  const contentCompleted = contentScore === 40;

  // Start Situation 탭 진행도 (30%)
  let startScore = 0;
  if (formData.startingSituation.trim()) startScore += 15;
  if (formData.firstDialogue.trim()) startScore += 15;
  
  const startSituationCompleted = startScore === 30;

  // Introduction 탭 진행도 (30%)
  let introScore = 0;
  if (formData.title.trim()) introScore += 10;
  if (formData.introduction.trim()) introScore += 10;
  if (formData.tags.length > 0) introScore += 10;
  
  const introductionCompleted = introScore === 30;

  // 전체 진행도 계산
  const overallProgress = Math.min(100, contentScore + startScore + introScore);

  return {
    contentCompleted,
    startSituationCompleted,
    introductionCompleted,
    overallProgress
  };
}

// 스토리 저장 (완성본)
export async function saveStory(
  formData: StoryFormData,
  creatorId: string,
  creatorHandle: string,
  existingStoryId?: string
): Promise<{ success: boolean; storyId?: string; errors?: string[] }> {
  try {
    // 데이터 검증
    const validation = validateStoryFormData(formData);
    if (!validation.isValid) {
      return {
        success: false,
        errors: validation.errors
      };
    }

    // 데이터 변환
    const storyData = convertFormDataToStoryData(formData, creatorId, creatorHandle);
    
    let savedStory: CreatedStoryData;
    
    if (existingStoryId) {
      // 기존 스토리 업데이트
      const updatedStory = updateStory(existingStoryId, storyData);
      if (!updatedStory) {
        return {
          success: false,
          errors: ['업데이트할 스토리를 찾을 수 없습니다.']
        };
      }
      savedStory = updatedStory;
      console.log('기존 스토리 업데이트 완료:', existingStoryId);
    } else {
      // 새 스토리 생성
      savedStory = createStory(storyData);
      console.log('새 스토리 생성 완료:', savedStory.id);
    }

    return {
      success: true,
      storyId: savedStory.id
    };
  } catch (error) {
    console.error('스토리 저장 중 오류:', error);
    return {
      success: false,
      errors: ['스토리 저장 중 오류가 발생했습니다.']
    };
  }
}

// 초안 저장
export async function saveStoryDraft(
  formData: StoryFormData,
  creatorId: string,
  existingDraftId?: string
): Promise<{ success: boolean; draftId?: string; errors?: string[] }> {
  try {
    const progress = calculateProgress(formData);
    
    const draft: Omit<StoryDraft, 'id' | 'lastSaved'> = {
      title: formData.title || t('create.untitledDraft'),
      updatedAt: new Date().toISOString(),
      progress,
      data: {
        creatorId,
        title: formData.title,
        content: {
          storySettings: formData.storySettings,
          secretSettings: formData.secretSettings,
          characterName: formData.characterName,
          characterDescription: formData.characterDescription
        },
        startSituation: {
          startingSituation: formData.startingSituation,
          firstDialogue: formData.firstDialogue
        },
        introduction: {
          introduction: formData.introduction,
          tags: formData.tags,
          visibility: formData.visibility,
          safetyFilter: formData.safetyFilter,
          creatorComment: formData.creatorComment
        },
        media: {
          thumbnailImage: formData.storyImages[0] || '/images/default-story-thumbnail.svg',
          storyImages: formData.storyImages
        }
      }
    };

    const savedDraft = saveDraft(draft, existingDraftId);

    return {
      success: true,
      draftId: savedDraft.id
    };
  } catch (error) {
    console.error('초안 저장 중 오류:', error);
    return {
      success: false,
      errors: ['초안 저장 중 오류가 발생했습니다.']
    };
  }
}

// 자동 저장 (주기적으로 호출)
export function autoSaveStoryDraft(
  formData: StoryFormData,
  creatorId: string,
  existingDraftId?: string
): void {
  // 최소한의 내용이 있을 때만 자동 저장 (이미지도 포함)
  if (formData.title.trim() || 
      formData.characterName.trim() || 
      formData.introduction.trim() ||
      formData.storyImages.length > 0) {
    saveStoryDraft(formData, creatorId, existingDraftId);
    console.log('자동 저장 완료:', new Date().toLocaleString());
  }
}

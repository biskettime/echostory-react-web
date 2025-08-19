import { useState, useEffect } from 'react';
import svgPaths from "../imports/svg-3c8wh35w53";
import { saveStory, saveStoryDraft, StoryFormData, getDraft, getStory } from '../data/stories';
import { t, addLanguageChangeListener, removeLanguageChangeListener } from '../utils/i18n';

interface StoryCreationScreenProps {
  onBack: () => void;
  onSave: (storyData: any) => void;
  safetyMode: boolean;
  onSafetyToggle: (checked: boolean) => void;
  storyId?: string | null; // Story ID to edit (optional)
}

type ActiveTab = 'content' | 'start-situation' | 'introduction';

export function StoryCreationScreen({ onBack, onSave, safetyMode, onSafetyToggle, storyId }: StoryCreationScreenProps) {
  console.log('🎨 StoryCreationScreen component mounted');
  const [activeTab, setActiveTab] = useState<ActiveTab>('content');
  const [forceUpdate, setForceUpdate] = useState(0);
  const [currentDraftId, setCurrentDraftId] = useState<string | null>(null);
  const [formData, setFormData] = useState<StoryFormData>({
    title: '',
    storySettings: '',
    secretSettings: '',
    characterName: '',
    characterDescription: '',
    startingSituation: '',
    firstDialogue: '',
    introduction: '',
    tags: [],
    visibility: 'public',
    safetyFilter: 'all-users',
    creatorComment: '',
    storyImages: [],
    backgroundType: null, // 'reality', 'fantasy', 'sf', 'game'
    characterGender: null, // 'male', 'female', 'ai'
    storyCode: '' // Auto-generated story code
  });

  // Story code generation function
  const generateStoryCode = (background: string | null, gender: string | null) => {
    if (!background || !gender) return '';
    
    // Background type code (first letter)
    const bgCode = {
      'reality': 'r',
      'fantasy': 'f', 
      'sf': 's',
      'game': 'g'
    }[background] || '';
    
    // Gender code
    const genderCode = {
      'male': 'm',
      'female': 'f',
      'ai': 'a'
    }[gender] || '';
    
    // Calculate number of existing stories of the same type
    const existingStories = localStorage.getItem('echostory_stories');
    let storyCount = 0;
    
    if (existingStories) {
      try {
        const stories = JSON.parse(existingStories);
        const prefix = bgCode + genderCode;
        storyCount = stories.filter((s: any) => s.id && s.id.startsWith(prefix)).length;
      } catch (error) {
        console.error('Error counting stories:', error);
      }
    }
    
    // Story number (001, 002, 003...)
    const storyNumber = String(storyCount + 1).padStart(3, '0');
    
    return `${bgCode}${genderCode}${storyNumber}`;
  };

  // Language change listener
  useEffect(() => {
    const handleLanguageChange = () => {
      setForceUpdate(prev => prev + 1);
    };

    addLanguageChangeListener(handleLanguageChange);
    return () => removeLanguageChangeListener(handleLanguageChange);
  }, []);

  // Load existing story data if storyId is provided
  useEffect(() => {
    const loadStoryData = async () => {
      if (storyId) {
        console.log('🔍 스토리 로딩 시작:', { storyId });
        
        // localStorage에서 직접 드래프트 확인
        const storedDrafts = localStorage.getItem('echostory_drafts');
        if (storedDrafts) {
          try {
            const draftsArray = JSON.parse(storedDrafts);
            console.log('🔍 localStorage 드래프트 목록:', {
              총개수: draftsArray.length,
              드래프트들: draftsArray.map((d: any) => ({
                id: d.id,
                title: d.title,
                hasData: !!d.data,
                hasContent: !!d.data?.content,
                hasMedia: !!d.data?.media,
                imageCount: d.data?.media?.storyImages?.length || 0
              }))
            });
            
            const targetDraft = draftsArray.find((d: any) => d.id === storyId);
            if (targetDraft) {
              console.log('🔍 타겟 드래프트 발견:', {
                id: targetDraft.id,
                title: targetDraft.title,
                데이터구조: {
                  hasData: !!targetDraft.data,
                  hasContent: !!targetDraft.data?.content,
                  hasStartSituation: !!targetDraft.data?.startSituation,
                  hasIntroduction: !!targetDraft.data?.introduction,
                  hasMedia: !!targetDraft.data?.media,
                  contentKeys: targetDraft.data?.content ? Object.keys(targetDraft.data.content) : [],
                  mediaKeys: targetDraft.data?.media ? Object.keys(targetDraft.data.media) : []
                }
              });
            } else {
              console.log('❌ 타겟 드래프트 없음:', storyId);
            }
          } catch (error) {
            console.error('localStorage 드래프트 파싱 오류:', error);
          }
        } else {
          console.log('❌ localStorage에 드래프트 없음');
        }
        
        // First try to load as draft
        const draft = getDraft(storyId);
        console.log('🔍 getDraft 결과:', {
          found: !!draft,
          hasData: !!draft?.data,
          draft: draft ? {
            id: draft.id,
            title: draft.title,
            progress: draft.progress,
            dataKeys: draft.data ? Object.keys(draft.data) : []
          } : null
        });
        
        if (draft && draft.data) {
          // 드래프트 ID 설정
          setCurrentDraftId(storyId);
          console.log('📖 기존 드래프트 로드:', {
            storyId,
            title: draft.data.title,
            mediaImages: draft.data.media?.storyImages?.length || 0,
            images: draft.data.media?.storyImages?.map(img => img.substring(0, 50) + '...') || []
          });
          
          // Restore images from IndexedDB
          let restoredImages: string[] = [];
          const storedImageIds = draft.data.media?.storyImages || [];
          
          if (storedImageIds.length > 0) {
            try {
              const { imageStorage } = await import('../utils/imageStorage');
              
              for (const imageRef of storedImageIds) {
                if (imageRef.startsWith('indexeddb:')) {
                  // Load actual image data from IndexedDB ID
                  const imageId = imageRef.replace('indexeddb:', '');
                  const imageData = await imageStorage.getImage(imageId);
                  if (imageData) {
                    restoredImages.push(imageData);
                  }
                } else {
                  // 기존 Base64 데이터 (하위 호환성)
                  restoredImages.push(imageRef);
                }
              }
              
              console.log('📖 Image restoration from IndexedDB completed:', {
                storedIds: storedImageIds.length,
                restoredImages: restoredImages.length,
                imageIds: storedImageIds
              });
            } catch (error) {
              console.error('Image restoration failed:', error);
              restoredImages = [];
            }
          }

          // Convert draft data to form data
          const draftFormData: StoryFormData = {
            title: draft.data.title || '',
            storySettings: draft.data.content?.storySettings || '',
            secretSettings: draft.data.content?.secretSettings || '',
            characterName: draft.data.content?.characterName || '',
            characterDescription: draft.data.content?.characterDescription || '',
            startingSituation: draft.data.startSituation?.startingSituation || '',
            firstDialogue: draft.data.startSituation?.firstDialogue || '',
            introduction: draft.data.introduction?.introduction || '',
            tags: draft.data.introduction?.tags || [],
            visibility: draft.data.introduction?.visibility || 'public',
            safetyFilter: draft.data.introduction?.safetyFilter || 'all-users',
            creatorComment: draft.data.introduction?.creatorComment || '',
            storyImages: restoredImages // Use restored images
          };
          
          console.log('📖 폼 데이터 변환 완료:', {
            imageCount: draftFormData.storyImages.length,
            images: draftFormData.storyImages.map(img => img.substring(0, 50) + '...')
          });
          
          setFormData(draftFormData);
        } else {
          // If not found as draft, try to load as published story
          const story = getStory(storyId);
          if (story) {
            // Convert published story data to form data
          const storyFormData: StoryFormData = {
            title: story.title,
            storySettings: story.content.storySettings,
            secretSettings: story.content.secretSettings,
            characterName: story.content.characterName,
            characterDescription: story.content.characterDescription,
            startingSituation: story.startSituation.startingSituation,
            firstDialogue: story.startSituation.firstDialogue,
            introduction: story.introduction.introduction,
            tags: story.introduction.tags,
            visibility: story.introduction.visibility,
            safetyFilter: story.introduction.safetyFilter,
            creatorComment: story.introduction.creatorComment,
            storyImages: story.media?.storyImages || []
          };
          setFormData(storyFormData);
        }
        }
      }
    };
    
    loadStoryData();
  }, [storyId]);

  const handleInputChange = (field: keyof typeof formData, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // 자동 저장 기능
  useEffect(() => {
    const autoSaveInterval = setInterval(async () => {
      if (formData.title.trim() || 
          formData.characterName.trim() || 
          formData.introduction.trim() ||
          formData.storyImages.length > 0) {
        const result = await saveStoryDraft(formData, 'creator_user', currentDraftId || undefined);
        if (result.success && result.draftId && !currentDraftId) {
          setCurrentDraftId(result.draftId);
        }
      }
    }, 30000); // 30초마다 자동 저장

    return () => clearInterval(autoSaveInterval);
  }, [formData, currentDraftId]);

  const handleSave = async (isTemporary = false) => {
    try {
      // Generate story code (when backgroundType and characterGender are selected)
      const storyCode = generateStoryCode(formData.backgroundType, formData.characterGender);
      
      // Add generated story code to formData
      const updatedFormData = {
        ...formData,
        storyCode: storyCode
      };
      
      let savedResult;
      
      // Get user profile from localStorage
      const userProfile = JSON.parse(localStorage.getItem('userProfile') || '{}');
      const creatorId = userProfile.username || 'creator_user';
      const creatorHandle = `@${creatorId.toLowerCase().replace(/\s+/g, '_')}`;
      
      if (isTemporary) {
        // 임시 저장 - 드래프트 ID 사용
        savedResult = await saveStoryDraft(updatedFormData, creatorId, currentDraftId || undefined);
        if (savedResult.success && savedResult.draftId) {
          console.log('스토리 임시 저장 완료:', savedResult.draftId);
          // 드래프트 ID 업데이트
          setCurrentDraftId(savedResult.draftId);
        }
      } else {
        // Final save (publish) - Update if existing story ID, create new otherwise
        savedResult = await saveStory(updatedFormData, creatorId, creatorHandle, storyId || undefined);
        if (savedResult.success && savedResult.storyId) {
          console.log('스토리 발행 완료:', savedResult.storyId);
        }
      }
      
      if (savedResult.success) {
        // 기존 콜백 호출 (호환성 유지)
        const resultId = isTemporary 
          ? ('draftId' in savedResult ? savedResult.draftId : undefined)
          : ('storyId' in savedResult ? savedResult.storyId : undefined);
        
        onSave({
          ...formData,
          id: resultId,
          isTemporary,
          createdAt: new Date().toISOString()
        });
      } else {
        console.error('스토리 저장 실패:', savedResult.errors);
        alert(`스토리 저장에 실패했습니다: ${savedResult.errors?.join(', ')}`);
      }
      
    } catch (error) {
      console.error('스토리 저장 실패:', error);
      alert(t('create.saveError') || 'Failed to save story. Please try again.');
    }
  };

  const getCharCount = (field: keyof typeof formData, maxLength: number) => {
    const value = formData[field];
    const length = typeof value === 'string' ? value.length : 0;
    return `${length} / ${maxLength}`;
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'content':
        return <ContentTabPanel formData={formData} onInputChange={handleInputChange} getCharCount={getCharCount} />;
      case 'start-situation':
        return <StartSituationTabPanel formData={formData} onInputChange={handleInputChange} getCharCount={getCharCount} />;
      case 'introduction':
        return <IntroductionTabPanel formData={formData} onInputChange={handleInputChange} getCharCount={getCharCount} />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-[#1a1b1b] box-border content-stretch flex flex-col items-start justify-start max-w-[375px] p-0 relative shrink-0 w-full h-screen">
      {/* Fixed Header */}
      <div className="bg-[#1a1b1b] box-border content-stretch flex flex-row h-10 items-center justify-between max-w-[375px] pb-[0.625px] pl-0 pr-[15px] pt-0 w-full z-50 flex-shrink-0">
        <div aria-hidden="true" className="absolute border-[#424242] border-[0px_0px_0.625px] border-solid inset-0 pointer-events-none" />
        
        {/* Back Button */}
        <div className="box-border content-stretch flex flex-col items-start justify-start pb-[5.84px] pt-[3.88px] px-[15px] relative shrink-0">
          <button onClick={onBack} className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0">
            <div className="relative shrink-0 size-[16.99px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                <path d={svgPaths.p1b154bc0} fill="rgba(255,255,255,0.85)" />
              </svg>
            </div>
          </button>
        </div>

        {/* Action Buttons */}
        <div className="box-border content-stretch flex flex-row gap-1.5 items-start justify-start p-0 relative shrink-0">
          {/* Temporary Save Button */}
          <button 
            onClick={() => handleSave(true)}
            className="bg-[#141414] box-border content-stretch flex flex-row h-[26px] items-center justify-center px-[10.625px] py-[0.625px] relative rounded-md shrink-0 hover:bg-[#1f1f1f] transition-colors"
          >
            <div aria-hidden="true" className="absolute border border-[#424242] border-solid inset-0 pointer-events-none rounded-md shadow-[0px_2px_0px_0px_rgba(255,255,255,0.04)]" />
            <div className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0">
              <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.125px] text-[rgba(255,255,255,0.85)] text-center text-nowrap">
                <p className="block leading-[normal] whitespace-pre">{t('create.draft')}</p>
              </div>
            </div>
          </button>

          {/* Publish Button */}
          <button 
            onClick={() => handleSave(false)}
            className="bg-[#dc5903] box-border content-stretch flex flex-row h-[26px] items-center justify-center px-[10.625px] py-[0.625px] relative rounded-md shadow-[0px_2px_0px_0px_rgba(180,60,0,0.15)] shrink-0 hover:bg-[#c54f02] transition-colors"
          >
            <div className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0">
              <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[13.234px] text-center text-nowrap">
                <p className="block leading-[normal] whitespace-pre">{t('create.published')}</p>
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-scroll w-full">
        <div className="relative w-full">
          <div className="box-border content-stretch flex flex-col gap-[13.26px] items-start justify-start pb-[60px] pt-[30px] px-[15px] relative w-full">
            
            {/* Story Creation Guide Link */}
            <div className="box-border content-stretch flex flex-row items-start justify-center p-0 relative shrink-0 w-full">
              <div className="basis-0 box-border content-stretch flex flex-col grow items-end justify-end min-h-px min-w-px p-0 relative shrink-0">
                <div className="bg-[rgba(0,0,0,0.5)] box-border content-stretch flex flex-row gap-[1.6px] items-center justify-center pb-[2.5px] pt-[2.5px] px-2 relative rounded shrink-0 hover:bg-[rgba(0,0,0,0.6)] transition-colors cursor-pointer">
                  <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#ff9500] text-[10.8px] text-left text-nowrap">
                    <p className="block leading-[17.6px] whitespace-pre">{t('create.storyCreationGuide')}</p>
                  </div>
                  <div className="relative shrink-0 size-[11.2px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                      <path
                        clipRule="evenodd"
                        d={svgPaths.p1cd36a80}
                        fill="#FF9500"
                        fillRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Content */}
            <div className="box-border content-stretch flex flex-col-reverse items-start justify-start pb-[0.01px] pt-0 px-0 relative shrink-0 w-full">
              
              {/* Sticky Tab Navigation */}
              <div className="box-border content-stretch flex flex-col items-start justify-start mb-[-0.01px] order-2 pb-4 pt-0 px-0 shrink-0 sticky top-0 w-full z-40">
                <div className="bg-[#1a1b1b] box-border content-stretch flex flex-row items-start justify-center p-0 shrink-0 sticky top-0 w-full">
                  <div className="absolute bottom-0 h-[0.63px] left-0 right-0">
                    <div aria-hidden="true" className="absolute border-[#303030] border-[0px_0px_0.625px] border-solid inset-0 pointer-events-none" />
                  </div>
                  
                  <div className="basis-0 box-border content-stretch flex flex-row grow items-start justify-start min-h-px min-w-px overflow-clip p-0 relative self-stretch shrink-0">
                    <div className="box-border content-stretch flex flex-row h-full items-start justify-start p-0 relative shrink-0">
                      
                      {/* Content Tab */}
                      <button
                        onClick={() => setActiveTab('content')}
                        className="box-border content-stretch flex flex-row h-full items-center justify-center w-[80px] py-3 relative shrink-0 hover:bg-[rgba(255,255,255,0.05)] transition-colors"
                      >
                        <div className="box-border content-stretch flex flex-col items-center justify-center p-0 relative shrink-0">
                          <div className={`flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.234px] text-center text-nowrap ${
                            activeTab === 'content'
                              ? '[text-shadow:#dc5903_0px_0px_0.25px] text-[#dc5903]' 
                              : 'text-[rgba(255,255,255,0.85)]'
                          }`}>
                            <p className="block leading-[22px] whitespace-pre">{t('create.content')}</p>
                          </div>
                        </div>
                      </button>

                      {/* Start Situation Tab */}
                      <button
                        onClick={() => setActiveTab('start-situation')}
                        className="box-border content-stretch flex flex-row h-full items-center justify-center w-[110px] py-3 relative shrink-0 hover:bg-[rgba(255,255,255,0.05)] transition-colors"
                      >
                        <div className="box-border content-stretch flex flex-col items-center justify-center p-0 relative shrink-0">
                          <div className={`flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.125px] text-center text-nowrap ${
                            activeTab === 'start-situation' 
                              ? '[text-shadow:#dc5903_0px_0px_0.25px] text-[#dc5903]' 
                              : 'text-[rgba(255,255,255,0.85)]'
                          }`}>
                            <p className="block leading-[22px] whitespace-pre">{t('create.startSituation')}</p>
                          </div>
                        </div>
                      </button>

                      {/* Introduction Tab */}
                      <button
                        onClick={() => setActiveTab('introduction')}
                        className="box-border content-stretch flex flex-row h-full items-center justify-center w-[100px] py-3 relative shrink-0 hover:bg-[rgba(255,255,255,0.05)] transition-colors"
                      >
                        <div className="box-border content-stretch flex flex-col items-center justify-center p-0 relative shrink-0">
                          <div className={`flex flex-col font-['Inter:Medium','Noto_Sans_KR:Regular',sans-serif] ${
                            activeTab === 'introduction' ? 'font-medium' : 'font-normal'
                          } justify-center leading-[0] not-italic relative shrink-0 text-[13.234px] text-center text-nowrap ${
                            activeTab === 'introduction' 
                              ? '[text-shadow:#dc5903_0px_0px_0.25px] text-[#dc5903]' 
                              : 'text-[rgba(255,255,255,0.85)]'
                          }`}>
                            <p className="block leading-[22px] whitespace-pre">{t('create.introduction')}</p>
                          </div>
                        </div>
                      </button>

                      {/* Active Tab Indicator - Mobile Optimized */}
                      {activeTab === 'content' && (
                        <div className="absolute bg-[#dc5903] bottom-[0.01px] h-[1.99px] left-[20px] w-[40px]" />
                      )}
                      {activeTab === 'start-situation' && (
                        <div className="absolute bg-[#dc5903] bottom-[0.01px] h-[1.99px] left-[105px] w-[70px]" />
                      )}
                      {activeTab === 'introduction' && (
                        <div className="absolute bg-[#dc5903] bottom-[0.01px] h-[1.99px] left-[215px] w-[60px]" />
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Tab Panel Content */}
              <div className="box-border content-stretch flex flex-col items-start justify-start mb-[-0.01px] order-1 pb-[23.99px] pt-0 px-0 relative shrink-0 w-full">
                {renderTabContent()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Content Tab Panel - Complete with all form fields INCLUDING STORY IMAGES AT THE BOTTOM
interface TabPanelProps {
  formData: StoryFormData;
  onInputChange: (field: keyof StoryFormData, value: string | string[]) => void;
  getCharCount: (field: keyof StoryFormData, maxLength: number) => string;
}

function ContentTabPanel({ formData, onInputChange, getCharCount }: TabPanelProps) {
  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newImages: string[] = [];
      
      for (const file of Array.from(files)) {
        try {
          // Save as Base64 and include in draft when creating story
          const base64 = await convertFileToBase64(file);
          newImages.push(base64);
          console.log('✅ Image Base64 conversion completed:', file.name);
        } catch (error) {
          console.error('Image conversion failed:', error);
          alert(`Image upload failed: ${file.name}`);
        }
      }
      
      if (newImages.length > 0) {
        const updatedImages = [...formData.storyImages, ...newImages];
        onInputChange('storyImages', updatedImages);
        console.log(`✅ ${newImages.length} images added to story:`, {
          existingImages: formData.storyImages.length,
          newImages: newImages.length,
          totalImages: updatedImages.length,
          newImagesPreview: newImages.map(img => img.substring(0, 50) + '...')
        });
      }
    }
  };

  // 파일을 Base64로 변환하는 헬퍼 함수
  const convertFileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result && typeof reader.result === 'string') {
          resolve(reader.result);
        } else {
          reject(new Error('파일 읽기 실패'));
        }
      };
      reader.onerror = () => reject(reader.error);
      reader.readAsDataURL(file);
    });
  };

  const removeImage = (index: number) => {
    const newImages = formData.storyImages.filter((_: string, i: number) => i !== index);
    onInputChange('storyImages', newImages);
  };

  return (
    <div className="relative shrink-0 w-full">
      
      {/* Title Section */}
      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 w-full">
        {/* Title Label */}
        <div className="box-border content-stretch flex flex-col items-start justify-start max-w-[350px] min-h-px overflow-clip pb-2 pt-0 px-0 relative shrink-0 w-full">
          <div className="box-border content-stretch flex flex-row items-center justify-start max-w-[350px] pl-0 pr-[13.68px] py-0 relative shrink-0">
            <div className="box-border content-stretch flex flex-col gap-[3.99px] items-start justify-start pb-1 pt-0 px-0 relative shrink-0">
              <div className="h-[22.63px] leading-[0] not-italic relative shrink-0 text-left w-full">
                <div className="absolute flex flex-col font-['Apple_SD_Gothic_Neo:Regular',sans-serif] h-[22px] justify-center left-0 text-[#ff4d4f] text-[14px] top-[11.57px] translate-y-[-50%] w-[5.505px]">
                  <p className="block leading-[22px]">*</p>
                </div>
                <div className="absolute flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal h-[22px] justify-center left-[9.19px] text-[13.234px] text-[rgba(255,255,255,0.85)] top-[10.63px] translate-y-[-50%] w-[24.4px]">
                  <p className="block leading-[22px]">{t('create.title')}</p>
                </div>
              </div>
              <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
                <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[11.25px] text-[rgba(255,255,255,0.5)] text-left text-nowrap">
                  <p className="block leading-[14.4px] whitespace-pre">{t('create.titleDesc')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Title Input */}
        <div className="box-border content-stretch flex flex-row items-center justify-center min-h-8 pb-[0.38px] pt-[0.37px] px-0 relative shrink-0 w-full">
          <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start max-w-[350px] min-h-px min-w-px p-0 relative shrink-0">
            <div className="bg-[#141414] relative rounded-md shrink-0 w-full group">
              <div aria-hidden="true" className="absolute border border-[#424242] border-solid inset-0 pointer-events-none rounded-md group-focus-within:border-[rgba(255,149,0,0.8)] group-hover:border-[rgba(255,149,0,0.6)] transition-colors" />
              <div className="relative size-full">
                <div className="box-border content-stretch flex flex-row-reverse items-start justify-start px-[11.625px] py-[4.625px] relative w-full">
                  <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px order-2 overflow-clip pb-[3.24px] pt-[2.51px] px-0 relative self-stretch shrink-0">
                    <div className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative shrink-0 w-full">
                      <input
                        type="text"
                        value={formData.title}
                        onChange={(e) => onInputChange('title', e.target.value)}
                        placeholder={t('create.titlePlaceholder')}
                        maxLength={32}
                        className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.125px] text-[rgba(255,255,255,0.85)] bg-transparent border-0 outline-none text-left w-full placeholder:text-[rgba(255,255,255,0.25)] focus:ring-0 focus:border-0"
                      />
                    </div>
                  </div>
                  <div className="box-border content-stretch flex flex-col items-start justify-center order-1 pl-1 pr-0 py-0 relative self-stretch shrink-0">
                    <div className="basis-0 box-border content-stretch flex flex-row grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0">
                      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0">
                        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.453px] text-[rgba(255,255,255,0.45)] text-left text-nowrap">
                          <p className="block leading-[22px] whitespace-pre">{getCharCount('title', 32)}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Story Settings Section */}
      <div className="box-border content-stretch flex flex-col gap-[0.01px] items-start justify-start p-0 w-full mt-6">
        {/* Story Settings Label */}
        <div className="box-border content-stretch flex flex-col items-start justify-start max-w-[350px] min-h-px overflow-clip pb-2 pt-0 px-0 relative shrink-0 w-full">
          <div className="box-border content-stretch flex flex-row items-center justify-start max-w-[350px] pl-0 pr-[13.68px] py-0 relative shrink-0">
            <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start pb-[3.98px] pt-0 px-0 relative shrink-0">
              <div className="h-[22.63px] leading-[0] not-italic relative shrink-0 text-left w-full">
                <div className="absolute flex flex-col font-['Apple_SD_Gothic_Neo:Regular',sans-serif] h-[22px] justify-center left-0 text-[#ff4d4f] text-[14px] top-[11.57px] translate-y-[-50%] w-[5.505px]">
                  <p className="block leading-[22px]">*</p>
                </div>
                <div className="absolute flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal h-[22px] justify-center left-[9.19px] text-[13.125px] text-[rgba(255,255,255,0.85)] top-[10.63px] translate-y-[-50%] w-auto">
                  <p className="block leading-[22px] whitespace-nowrap">{t('create.storySettings')}</p>
                </div>
              </div>
              <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
                <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[14.4px] not-italic relative shrink-0 text-[11.25px] text-[rgba(255,255,255,0.5)] text-left text-nowrap whitespace-pre">
                  <p className="block mb-0">{t('create.storySettingsDesc')}</p>
                  <p className="block">{t('create.userPlaceholderDesc')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Story Settings Textarea */}
        <div className="box-border content-stretch flex flex-row items-center justify-center min-h-8 p-0 relative shrink-0 w-full">
          <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start max-w-[350px] min-h-px min-w-px p-0 relative shrink-0">
            <div className="bg-[#141414] relative rounded-md shrink-0 w-full group">
              <div aria-hidden="true" className="absolute border border-[#424242] border-solid inset-0 pointer-events-none rounded-md group-focus-within:border-[rgba(255,149,0,0.8)] group-hover:border-[rgba(255,149,0,0.6)] transition-colors" />
              <div className="flex flex-row justify-center relative size-full">
                <div className="box-border content-stretch flex flex-row items-start justify-center p-[0.625px] relative w-full">
                  <div className="basis-0 grow h-[113px] max-h-[323px] max-w-[350px] min-h-[113px] min-w-px relative shrink-0">
                    <div className="max-h-inherit max-w-inherit min-h-inherit overflow-x-auto overflow-y-clip relative size-full">
                      <div className="box-border content-stretch flex flex-col h-[113px] items-start justify-start max-h-inherit max-w-inherit min-h-inherit px-[11px] py-1 relative w-full">
                        <textarea
                          value={formData.storySettings}
                          onChange={(e) => onInputChange('storySettings', e.target.value)}
                          placeholder={t('create.storySettingsPlaceholder')}
                          maxLength={2000}
                          className="w-full h-full bg-transparent border-0 outline-none resize-none text-[rgba(255,255,255,0.85)] placeholder:text-[rgba(255,255,255,0.25)] text-[13.016px] leading-[21px] focus:ring-0"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-[-21.36px] box-border content-stretch flex flex-col items-start justify-start p-0 right-[0.21px]">
                    <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.563px] text-[rgba(255,255,255,0.45)] text-left text-nowrap">
                      <p className="block leading-[22px] whitespace-pre">{getCharCount('storySettings', 2000)}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Secret Settings Section */}
      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 w-full mt-6">
        {/* Secret Settings Label */}
        <div className="box-border content-stretch flex flex-col items-start justify-start max-w-[350px] min-h-px overflow-clip pb-2 pt-0 px-0 relative shrink-0 w-full">
          <div className="box-border content-stretch flex flex-row items-center justify-start max-w-[350px] pl-0 pr-[13.68px] py-0 relative shrink-0">
            <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start pb-[3.99px] pt-0 px-0 relative shrink-0">
              <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
                <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.125px] text-[rgba(255,255,255,0.85)] text-left text-nowrap">
                  <p className="block leading-[22px] whitespace-pre">{t('create.secretSettings')}</p>
                </div>
              </div>
              <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
                <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[11.063px] text-[rgba(255,255,255,0.5)] text-left text-nowrap">
                  <p className="block leading-[14.4px] whitespace-pre">{t('create.secretSettingsDesc')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Secret Settings Textarea */}
        <div className="box-border content-stretch flex flex-row items-center justify-center min-h-8 p-0 relative shrink-0 w-full">
          <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start max-w-[350px] min-h-px min-w-px p-0 relative shrink-0">
            <div className="bg-[#141414] relative rounded-md shrink-0 w-full group">
              <div aria-hidden="true" className="absolute border border-[#424242] border-solid inset-0 pointer-events-none rounded-md group-focus-within:border-[rgba(255,149,0,0.8)] group-hover:border-[rgba(255,149,0,0.6)] transition-colors" />
              <div className="flex flex-row justify-center relative size-full">
                <div className="box-border content-stretch flex flex-row items-start justify-center p-[0.625px] relative w-full">
                  <div className="basis-0 grow h-[71px] max-h-[134px] max-w-[350px] min-h-[71px] min-w-px relative shrink-0">
                    <div className="max-h-inherit max-w-inherit min-h-inherit overflow-x-auto overflow-y-clip relative size-full">
                      <div className="box-border content-stretch flex flex-col h-[71px] items-start justify-start max-h-inherit max-w-inherit min-h-inherit px-[11px] py-1 relative w-full">
                        <textarea
                          value={formData.secretSettings}
                          onChange={(e) => onInputChange('secretSettings', e.target.value)}
                          placeholder={t('create.secretSettingsPlaceholder')}
                          maxLength={500}
                          className="w-full h-full bg-transparent border-0 outline-none resize-none text-[rgba(255,255,255,0.85)] placeholder:text-[rgba(255,255,255,0.25)] text-[13.125px] leading-[21px] focus:ring-0"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-[-21.36px] box-border content-stretch flex flex-col items-start justify-start p-0 right-[-0.27px]">
                    <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.563px] text-[rgba(255,255,255,0.45)] text-left text-nowrap">
                      <p className="block leading-[22px] whitespace-pre">{getCharCount('secretSettings', 500)}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Character Section Separator */}
      <div className="flex items-center justify-center py-4 w-full mt-6">
        <div className="flex-1 h-[1px] bg-[rgba(253,253,253,0.01)]"></div>
        <div className="px-4">
          <div className="flex flex-col font-['Inter:Medium','Noto_Sans_KR:Regular',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-[rgba(255,255,255,0.85)] text-center text-nowrap">
            <p className="block leading-[25.14px] whitespace-pre">Character</p>
          </div>
        </div>
        <div className="flex-1 h-[1px] bg-[rgba(253,253,253,0.01)]"></div>
      </div>

      {/* Character Name Section */}
      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 w-full mt-6">
        {/* Character Name Label */}
        <div className="box-border content-stretch flex flex-col items-start justify-start max-w-[350px] min-h-px overflow-clip pb-2 pt-0 px-0 relative shrink-0 w-full">
          <div className="box-border content-stretch flex flex-row items-center justify-start max-w-[350px] pl-0 pr-[13.68px] py-0 relative shrink-0">
            <div className="box-border content-stretch flex flex-col gap-[3.99px] items-start justify-start pb-[3.98px] pt-0 px-0 relative shrink-0">
              <div className="h-[22.63px] leading-[0] not-italic relative shrink-0 text-left w-full">
                <div className="absolute flex flex-col font-['Apple_SD_Gothic_Neo:Regular',sans-serif] h-[22px] justify-center left-0 text-[#ff4d4f] text-[14px] top-[11.57px] translate-y-[-50%] w-[5.505px]">
                  <p className="block leading-[22px]">*</p>
                </div>
                <div className="absolute flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal h-[22px] justify-center left-[9.19px] text-[13.125px] text-[rgba(255,255,255,0.85)] top-[10.63px] translate-y-[-50%] w-auto">
                  <p className="block leading-[22px] whitespace-nowrap">{t('create.characterName')}</p>
                </div>
              </div>
              <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
                <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[11.25px] text-[rgba(255,255,255,0.5)] text-left text-nowrap">
                  <p className="block leading-[14.4px] whitespace-pre">Enter the character's name.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Character Name Input */}
        <div className="box-border content-stretch flex flex-row items-center justify-center min-h-8 pb-[0.38px] pt-[0.37px] px-0 relative shrink-0 w-full">
          <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start max-w-[350px] min-h-px min-w-px p-0 relative shrink-0">
            <div className="bg-[#141414] relative rounded-md shrink-0 w-full group">
              <div aria-hidden="true" className="absolute border border-[#424242] border-solid inset-0 pointer-events-none rounded-md group-focus-within:border-[rgba(255,149,0,0.8)] group-hover:border-[rgba(255,149,0,0.6)] transition-colors" />
              <div className="relative size-full">
                <div className="box-border content-stretch flex flex-row-reverse items-start justify-start px-[11.625px] py-[4.625px] relative w-full">
                  <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px order-2 overflow-clip pb-[3.24px] pt-[2.51px] px-0 relative self-stretch shrink-0">
                    <div className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative shrink-0 w-full">
                      <input
                        type="text"
                        value={formData.characterName}
                        onChange={(e) => onInputChange('characterName', e.target.value)}
                        placeholder={t('create.characterNamePlaceholder')}
                        maxLength={20}
                        className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.125px] text-[rgba(255,255,255,0.85)] bg-transparent border-0 outline-none text-left w-full placeholder:text-[rgba(255,255,255,0.25)] focus:ring-0 focus:border-0"
                      />
                    </div>
                  </div>
                  <div className="box-border content-stretch flex flex-col items-start justify-center order-1 pl-1 pr-0 py-0 relative self-stretch shrink-0">
                    <div className="basis-0 box-border content-stretch flex flex-row grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0">
                      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0">
                        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.453px] text-[rgba(255,255,255,0.45)] text-left text-nowrap">
                          <p className="block leading-[22px] whitespace-pre">{getCharCount('characterName', 20)}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Character Description Section */}
      <div className="box-border content-stretch flex flex-col gap-[0.01px] items-start justify-start p-0 w-full mt-6">
        {/* Character Description Label */}
        <div className="box-border content-stretch flex flex-col items-start justify-start max-w-[350px] min-h-px overflow-clip pb-2 pt-0 px-0 relative shrink-0 w-full">
          <div className="box-border content-stretch flex flex-row items-center justify-start max-w-[350px] pl-0 pr-[13.68px] py-0 relative shrink-0">
            <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start pb-[3.99px] pt-0 px-0 relative shrink-0">
              <div className="h-[22.63px] leading-[0] not-italic relative shrink-0 text-left w-full">
                <div className="absolute flex flex-col font-['Apple_SD_Gothic_Neo:Regular',sans-serif] h-[22px] justify-center left-0 text-[#ff4d4f] text-[14px] top-[11.57px] translate-y-[-50%] w-[5.505px]">
                  <p className="block leading-[22px]">*</p>
                </div>
                <div className="absolute flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal h-[22px] justify-center left-[9.19px] text-[13.125px] text-[rgba(255,255,255,0.85)] top-[10.63px] translate-y-[-50%] w-auto">
                  <p className="block leading-[22px] whitespace-nowrap">{t('create.characterDescription')}</p>
                </div>
              </div>
              <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
                <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[14.4px] not-italic relative shrink-0 text-[11.25px] text-[rgba(255,255,255,0.5)] text-left text-nowrap whitespace-pre">
                  <p className="block mb-0">{t('create.characterDescriptionDesc')}</p>
                  <p className="block">{t('create.userPlaceholderDesc')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Character Description Textarea */}
        <div className="box-border content-stretch flex flex-row items-center justify-center min-h-8 p-0 relative shrink-0 w-full">
          <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start max-w-[350px] min-h-px min-w-px p-0 relative shrink-0">
            <div className="bg-[#141414] relative rounded-md shrink-0 w-full group">
              <div aria-hidden="true" className="absolute border border-[#424242] border-solid inset-0 pointer-events-none rounded-md group-focus-within:border-[rgba(255,149,0,0.8)] group-hover:border-[rgba(255,149,0,0.6)] transition-colors" />
              <div className="flex flex-row justify-center relative size-full">
                <div className="box-border content-stretch flex flex-row items-start justify-center p-[0.625px] relative w-full">
                  <div className="basis-0 grow h-[216px] max-h-[430px] max-w-[350px] min-h-[216px] min-w-px relative shrink-0">
                    <div className="max-h-inherit max-w-inherit min-h-inherit overflow-x-auto overflow-y-clip relative size-full">
                      <div className="box-border content-stretch flex flex-col h-[216px] items-start justify-start max-h-inherit max-w-inherit min-h-inherit px-[11px] py-1 relative w-full">
                        <textarea
                          value={formData.characterDescription}
                          onChange={(e) => onInputChange('characterDescription', e.target.value)}
                          placeholder={t('create.characterDescriptionPlaceholder')}
                          maxLength={1500}
                          className="w-full h-full bg-transparent border-0 outline-none resize-none text-[rgba(255,255,255,0.85)] placeholder:text-[rgba(255,255,255,0.25)] text-[13.016px] leading-[21px] focus:ring-0"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-[-21.36px] box-border content-stretch flex flex-col items-start justify-start p-0 right-[0.21px]">
                    <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.563px] text-[rgba(255,255,255,0.45)] text-left text-nowrap">
                      <p className="block leading-[22px] whitespace-pre">{getCharCount('characterDescription', 1500)}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 여백 추가 */}
      <div className="h-6"></div>

      {/* Story Images Section - AT THE BOTTOM */}
      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 w-full">
        {/* Story Images Label */}
        <div className="box-border content-stretch flex flex-col items-start justify-start max-w-[350px] min-h-px overflow-clip pb-2 pt-0 px-0 relative shrink-0 w-full">
          <div className="box-border content-stretch flex flex-row items-center justify-start max-w-[350px] pl-0 pr-[13.68px] py-0 relative shrink-0">
            <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start pb-[3.98px] pt-0 px-0 relative shrink-0">
              <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
                <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.125px] text-[rgba(255,255,255,0.85)] text-left text-nowrap">
                  <p className="block leading-[22px] whitespace-pre">Story Images</p>
                </div>
              </div>
              <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
                <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[14.4px] not-italic relative shrink-0 text-[11.25px] text-[rgba(255,255,255,0.5)] text-left text-nowrap whitespace-pre">
                  <p className="block mb-0">{t('create.storyImagesDesc1')}</p>
                  <p className="block">{t('create.storyImagesDesc2')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image Upload Area */}
        <div className="w-full flex justify-start">
          {formData.storyImages.length === 0 ? (
            /* Empty State - Upload Box */
            <div className="relative w-full max-w-[150px] h-[200px] border-2 border-dashed border-[#424242] rounded-lg bg-[#1a1a1a] flex flex-col items-center justify-center">
              {/* Image Icon */}
              <div className="w-12 h-12 rounded-full bg-[#3a3a3a] flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[rgba(255,255,255,0.4)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              
              {/* Title */}
              <h3 className="text-white text-[14px] font-medium mb-4">{t('create.storyImages')}</h3>
              
              {/* Buttons */}
              <div className="flex flex-col gap-2 items-center">
                <label>
                  <button className="bg-[#ff6b00] text-white px-4 py-2 rounded-md hover:bg-[#ff8800] transition-colors text-[13px] font-medium">
                    {t('create.generateWithAI')}
                  </button>
                </label>
                <label className="cursor-pointer">
                  <div className="bg-[#3a3a3a] text-[rgba(255,255,255,0.85)] px-4 py-2 rounded-md hover:bg-[#4a4a4a] transition-colors text-[13px] font-medium text-center">
                    {t('create.uploadImage')}
                  </div>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
              </div>
            </div>
          ) : (
            /* Image Preview Grid */
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                {formData.storyImages.map((image: string, index: number) => (
                  <div key={index} className="relative">
                    <img
                      src={image}
                      alt={`Story image ${index + 1}`}
                      className="w-full h-[160px] object-cover rounded-lg border border-[rgba(255,255,255,0.1)]"
                    />
                    <button
                      onClick={() => removeImage(index)}
                      className="absolute top-2 right-2 bg-black/70 text-white rounded-full w-7 h-7 flex items-center justify-center text-lg hover:bg-black/90 transition-colors"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
              
              {/* Add More Images Button */}
              <div className="flex gap-2">
                <label className="cursor-pointer">
                  <div className="bg-[#3a3a3a] text-[rgba(255,255,255,0.85)] px-4 py-2 rounded-md hover:bg-[#4a4a4a] transition-colors text-[13px] font-medium">
                    {t('create.addImage')}
                  </div>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
                <button className="bg-[#ff6b00] text-white px-4 py-2 rounded-md hover:bg-[#ff8800] transition-colors text-[13px] font-medium">
                  {t('create.generateWithAI')}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

    </div>
  );
}

// Start Situation Tab Panel - Complete Implementation
function StartSituationTabPanel({ formData, onInputChange, getCharCount }: TabPanelProps) {
  return (
    <div className="relative shrink-0 w-full">
      
      {/* Starting Situation Section */}
      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 w-full">
        {/* Starting Situation Label */}
        <div className="box-border content-stretch flex flex-col items-start justify-start max-w-[350px] min-h-px overflow-clip pb-2 pt-0 px-0 relative shrink-0 w-full">
          <div className="box-border content-stretch flex flex-row items-center justify-start max-w-[350px] pl-0 pr-[13.68px] py-0 relative shrink-0">
            <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start pb-[3.98px] pt-0 px-0 relative shrink-0">
              <div className="flex items-center gap-2">
                <span className="text-[#ff4d4f] text-[14px]">*</span>
                <span className="text-[13.125px] text-[rgba(255,255,255,0.85)] font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif]">{t('create.startingSituation')}</span>
              </div>
              <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
                <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[14.4px] not-italic relative shrink-0 text-[11.25px] text-[rgba(255,255,255,0.5)] text-left text-nowrap whitespace-pre">
                  <p className="block mb-0">{t('create.startingSituationDesc')}</p>
                  <p className="block">{t('create.userPlaceholderDesc')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Starting Situation Textarea */}
        <div className="box-border content-stretch flex flex-row items-center justify-center min-h-8 p-0 relative shrink-0 w-full">
          <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start max-w-[350px] min-h-px min-w-px p-0 relative shrink-0">
            <div className="bg-[#141414] relative rounded-md shrink-0 w-full group">
              <div aria-hidden="true" className="absolute border border-[#424242] border-solid inset-0 pointer-events-none rounded-md group-focus-within:border-[rgba(255,149,0,0.8)] group-hover:border-[rgba(255,149,0,0.6)] transition-colors" />
              <div className="flex flex-row justify-center relative size-full">
                <div className="box-border content-stretch flex flex-row items-start justify-center p-[0.625px] relative w-full">
                  <div className="basis-0 grow h-[150px] max-h-[300px] max-w-[350px] min-h-[150px] min-w-px relative shrink-0">
                    <div className="max-h-inherit max-w-inherit min-h-inherit overflow-x-auto overflow-y-clip relative size-full">
                      <div className="box-border content-stretch flex flex-col h-[150px] items-start justify-start max-h-inherit max-w-inherit min-h-inherit px-[11px] py-1 relative w-full">
                        <textarea
                          value={formData.startingSituation}
                          onChange={(e) => onInputChange('startingSituation', e.target.value)}
                          placeholder={t('create.startingSituationPlaceholder')}
                          maxLength={1000}
                          className="w-full h-full bg-transparent border-0 outline-none resize-none text-[rgba(255,255,255,0.85)] placeholder:text-[rgba(255,255,255,0.25)] text-[13.016px] leading-[21px] focus:ring-0"
                        />
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Character Count */}
        <div className="flex justify-end mt-2">
          <span className="text-[13.563px] text-[rgba(255,255,255,0.45)]">{getCharCount('startingSituation', 1000)}</span>
        </div>
      </div>

      {/* 여백 추가 */}
      <div className="h-8"></div>

      {/* First Dialogue Section */}
      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 w-full">
        {/* First Dialogue Label */}
        <div className="box-border content-stretch flex flex-col items-start justify-start max-w-[350px] min-h-px overflow-clip pb-2 pt-0 px-0 relative shrink-0 w-full">
          <div className="box-border content-stretch flex flex-row items-center justify-start max-w-[350px] pl-0 pr-[13.68px] py-0 relative shrink-0">
            <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start pb-[3.99px] pt-0 px-0 relative shrink-0">
              <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
                <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.125px] text-[rgba(255,255,255,0.85)] text-left text-nowrap">
                  <p className="block leading-[22px] whitespace-pre">{t('create.firstDialogue')}</p>
                </div>
              </div>
              <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
                <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[11.063px] text-[rgba(255,255,255,0.5)] text-left text-nowrap">
                  <p className="block leading-[14.4px] whitespace-pre">{t('create.firstDialogueDesc')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* First Dialogue Textarea */}
        <div className="box-border content-stretch flex flex-row items-center justify-center min-h-8 p-0 relative shrink-0 w-full">
          <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start max-w-[350px] min-h-px min-w-px p-0 relative shrink-0">
            <div className="bg-[#141414] relative rounded-md shrink-0 w-full group">
              <div aria-hidden="true" className="absolute border border-[#424242] border-solid inset-0 pointer-events-none rounded-md group-focus-within:border-[rgba(255,149,0,0.8)] group-hover:border-[rgba(255,149,0,0.6)] transition-colors" />
              <div className="flex flex-row justify-center relative size-full">
                <div className="box-border content-stretch flex flex-row items-start justify-center p-[0.625px] relative w-full">
                  <div className="basis-0 grow h-[100px] max-h-[200px] max-w-[350px] min-h-[100px] min-w-px relative shrink-0">
                    <div className="max-h-inherit max-w-inherit min-h-inherit overflow-x-auto overflow-y-clip relative size-full">
                      <div className="box-border content-stretch flex flex-col h-[100px] items-start justify-start max-h-inherit max-w-inherit min-h-inherit px-[11px] py-1 relative w-full">
                        <textarea
                          value={formData.firstDialogue}
                          onChange={(e) => onInputChange('firstDialogue', e.target.value)}
                          placeholder={t('create.firstDialoguePlaceholder')}
                          maxLength={300}
                          className="w-full h-full bg-transparent border-0 outline-none resize-none text-[rgba(255,255,255,0.85)] placeholder:text-[rgba(255,255,255,0.25)] text-[13.125px] leading-[21px] focus:ring-0"
                        />
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Character Count */}
        <div className="flex justify-end mt-2">
          <span className="text-[13.563px] text-[rgba(255,255,255,0.45)]">{getCharCount('firstDialogue', 300)}</span>
        </div>
      </div>
    </div>
  );
}

// Introduction Tab Panel - Complete Implementation
function IntroductionTabPanel({ formData, onInputChange, getCharCount }: TabPanelProps) {
  // Story code generation function (IntroductionTabPanel 내부용)
  const generateStoryCode = (background: string | null, gender: string | null) => {
    if (!background || !gender) return '';
    
    // Background type code (first letter)
    const bgCode = {
      'reality': 'r',
      'fantasy': 'f', 
      'sf': 's',
      'game': 'g'
    }[background] || '';
    
    // Gender code
    const genderCode = {
      'male': 'm',
      'female': 'f',
      'ai': 'a'
    }[gender] || '';
    
    // Calculate number of existing stories of the same type
    const existingStories = localStorage.getItem('echostory_stories');
    let storyCount = 0;
    
    if (existingStories) {
      try {
        const stories = JSON.parse(existingStories);
        const prefix = bgCode + genderCode;
        storyCount = stories.filter((s: any) => s.id && s.id.startsWith(prefix)).length;
      } catch (error) {
        console.error('Error counting stories:', error);
      }
    }
    
    // Story number (001, 002, 003...)
    const storyNumber = String(storyCount + 1).padStart(3, '0');
    
    return `${bgCode}${genderCode}${storyNumber}`;
  };

  const handleTagsChange = (newTags: string[]) => {
    onInputChange('tags', newTags);
  };

  const addTag = (tag: string) => {
    if (tag.trim() && !formData.tags.includes(tag.trim())) {
      handleTagsChange([...formData.tags, tag.trim()]);
    }
  };

  const removeTag = (index: number) => {
    const newTags = formData.tags.filter((_: any, i: number) => i !== index);
    handleTagsChange(newTags);
  };

  return (
    <div className="relative shrink-0 w-full">
      
      {/* Introduction Section */}
      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 w-full">
        {/* Introduction Label */}
        <div className="box-border content-stretch flex flex-col items-start justify-start max-w-[350px] min-h-px overflow-clip pb-2 pt-0 px-0 relative shrink-0 w-full">
          <div className="box-border content-stretch flex flex-row items-center justify-start max-w-[350px] pl-0 pr-[13.68px] py-0 relative shrink-0">
            <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start pb-[3.98px] pt-0 px-0 relative shrink-0">
              <div className="flex items-center gap-2">
                <span className="text-[#ff4d4f] text-[14px]">*</span>
                <span className="text-[13.125px] text-[rgba(255,255,255,0.85)] font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif]">{t('create.introduction')}</span>
              </div>
              <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
                <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[14.4px] not-italic relative shrink-0 text-[11.25px] text-[rgba(255,255,255,0.5)] text-left text-nowrap whitespace-pre">
                  <p className="block mb-0">{t('create.introductionDesc')}</p>
                  <p className="block">{t('create.introductionPreviewDesc')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Introduction Textarea */}
        <div className="box-border content-stretch flex flex-row items-center justify-center min-h-8 p-0 relative shrink-0 w-full">
          <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start max-w-[350px] min-h-px min-w-px p-0 relative shrink-0">
            <div className="bg-[#141414] relative rounded-md shrink-0 w-full group">
              <div aria-hidden="true" className="absolute border border-[#424242] border-solid inset-0 pointer-events-none rounded-md group-focus-within:border-[rgba(255,149,0,0.8)] group-hover:border-[rgba(255,149,0,0.6)] transition-colors" />
              <div className="flex flex-row justify-center relative size-full">
                <div className="box-border content-stretch flex flex-row items-start justify-center p-[0.625px] relative w-full">
                  <div className="basis-0 grow h-[120px] max-h-[250px] max-w-[350px] min-h-[120px] min-w-px relative shrink-0">
                    <div className="max-h-inherit max-w-inherit min-h-inherit overflow-x-auto overflow-y-clip relative size-full">
                      <div className="box-border content-stretch flex flex-col h-[120px] items-start justify-start max-h-inherit max-w-inherit min-h-inherit px-[11px] py-1 relative w-full">
                        <textarea
                          value={formData.introduction}
                          onChange={(e) => onInputChange('introduction', e.target.value)}
                          placeholder={t('create.introductionPlaceholder')}
                          maxLength={500}
                          className="w-full h-full bg-transparent border-0 outline-none resize-none text-[rgba(255,255,255,0.85)] placeholder:text-[rgba(255,255,255,0.25)] text-[13.016px] leading-[21px] focus:ring-0"
                        />
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Character Count */}
        <div className="flex justify-end mt-2">
          <span className="text-[13.563px] text-[rgba(255,255,255,0.45)]">{getCharCount('introduction', 500)}</span>
        </div>
      </div>

      {/* 여백 추가 */}
      <div className="h-8"></div>

      {/* Tags Section */}
      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 w-full">
        {/* Tags Label */}
        <div className="box-border content-stretch flex flex-col items-start justify-start max-w-[350px] min-h-px overflow-clip pb-2 pt-0 px-0 relative shrink-0 w-full">
          <div className="box-border content-stretch flex flex-row items-center justify-start max-w-[350px] pl-0 pr-[13.68px] py-0 relative shrink-0">
            <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start pb-[3.99px] pt-0 px-0 relative shrink-0">
              <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
                <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.125px] text-[rgba(255,255,255,0.85)] text-left text-nowrap">
                  <p className="block leading-[22px] whitespace-pre">{t('create.tags')}</p>
                </div>
              </div>
              <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
                <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[11.063px] text-[rgba(255,255,255,0.5)] text-left text-nowrap">
                  <p className="block leading-[14.4px] whitespace-pre">{t('create.tagsDesc')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tags Display */}
        <div className="flex flex-wrap gap-2 mb-3">
          {formData.tags.map((tag: string, index: number) => (
            <div key={index} className="bg-[#dc5903] rounded-full px-3 py-1 flex items-center gap-2">
              <span className="text-white text-[12px]">{tag}</span>
              <button 
                onClick={() => removeTag(index)}
                className="text-white hover:text-gray-300 w-4 h-4 flex items-center justify-center"
              >
                ×
              </button>
            </div>
          ))}
        </div>

        {/* Tag Input */}
        <div className="box-border content-stretch flex flex-row items-center justify-center min-h-8 p-0 relative shrink-0 w-full">
          <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start max-w-[350px] min-h-px min-w-px p-0 relative shrink-0">
            <div className="bg-[#141414] relative rounded-md shrink-0 w-full group">
              <div aria-hidden="true" className="absolute border border-[#424242] border-solid inset-0 pointer-events-none rounded-md group-focus-within:border-[rgba(255,149,0,0.8)] group-hover:border-[rgba(255,149,0,0.6)] transition-colors" />
              <div className="relative size-full">
                <div className="box-border content-stretch flex flex-row items-start justify-start px-[11.625px] py-[4.625px] relative w-full">
                  <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px overflow-clip pb-[3.24px] pt-[2.51px] px-0 relative self-stretch shrink-0">
                    <div className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative shrink-0 w-full">
                      <input
                        type="text"
                        placeholder={t('create.tagInputPlaceholder')}
                        maxLength={20}
                        className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.125px] text-[rgba(255,255,255,0.85)] bg-transparent border-0 outline-none text-left w-full placeholder:text-[rgba(255,255,255,0.25)] focus:ring-0 focus:border-0"
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' && formData.tags.length < 5) {
                            const target = e.target as HTMLInputElement;
                            addTag(target.value);
                            target.value = '';
                          }
                        }}
                        disabled={formData.tags.length >= 5}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Type Selection (Required) */}
        <div className="mt-6">
          <p className="text-[rgba(255,255,255,0.85)] text-[13px] mb-2">
            {t('create.backgroundType') || 'Background Type'} <span className="text-red-500">*</span>
          </p>
          <div className="flex gap-2">
            {['reality', 'fantasy', 'sf', 'game'].map((type) => (
              <button
                key={type}
                onClick={() => {
                  onInputChange('backgroundType', type);
                  onInputChange('storyCode', generateStoryCode(type, formData.characterGender));
                }}
                className={`flex-1 text-[12px] px-3 py-2 rounded transition-colors ${
                  formData.backgroundType === type
                    ? 'bg-[#00bfff] text-white font-medium shadow-md'
                    : 'bg-[#2a2a2a] text-[rgba(255,255,255,0.7)] hover:bg-[#3a3a3a]'
                }`}
              >
                {type === 'sf' ? 'SF' : type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Character Gender Selection (Required) */}
        <div className="mt-4">
          <p className="text-[rgba(255,255,255,0.85)] text-[13px] mb-2">
            {t('create.characterGender') || 'Character Gender'} <span className="text-red-500">*</span>
          </p>
          <div className="flex gap-2">
            {['male', 'female', 'ai'].map((gender) => (
              <button
                key={gender}
                onClick={() => {
                  onInputChange('characterGender', gender);
                  onInputChange('storyCode', generateStoryCode(formData.backgroundType, gender));
                }}
                className={`flex-1 text-[12px] px-3 py-2 rounded transition-colors ${
                  formData.characterGender === gender
                    ? 'bg-[#00bfff] text-white font-medium shadow-md'
                    : 'bg-[#2a2a2a] text-[rgba(255,255,255,0.7)] hover:bg-[#3a3a3a]'
                }`}
              >
                {gender === 'ai' ? 'AI' : gender.charAt(0).toUpperCase() + gender.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Generated Story Code */}
        {formData.storyCode && (
          <div className="mt-3">
            <p className="text-[rgba(255,255,255,0.5)] text-[10px] mb-1">{t('create.storyCode')}</p>
            <div className="bg-[#1a1a1a] text-[#ff9500] text-[13px] font-mono px-3 py-2 rounded">
              {formData.storyCode}
            </div>
          </div>
        )}

        {/* Popular Tags */}
        <div className="mt-3">
          <p className="text-[rgba(255,255,255,0.5)] text-[11px] mb-2">{t('create.popularTags')}</p>
          <div className="flex flex-wrap gap-2">
            {[
              t('create.tagRomance'), 
              t('create.tagSchool'), 
              t('create.tagFriendship'), 
              t('create.tagDrama'), 
              t('create.tagComedy'), 
              t('create.tagFantasy'), 
              t('create.tagMystery'), 
              t('create.tagSliceOfLife')
            ].map((tag) => (
              <button
                key={tag}
                onClick={() => addTag(tag)}
                disabled={formData.tags.includes(tag) || formData.tags.length >= 5}
                className="bg-[#2a2a2a] text-[rgba(255,255,255,0.7)] text-[11px] px-2 py-1 rounded hover:bg-[#3a3a3a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 여백 추가 */}
      <div className="h-6"></div>

      {/* Visibility Section */}
      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 w-full">
        {/* Visibility Label */}
        <div className="box-border content-stretch flex flex-col items-start justify-start max-w-[350px] min-h-px overflow-clip pb-2 pt-0 px-0 relative shrink-0 w-full">
          <div className="box-border content-stretch flex flex-row items-center justify-start max-w-[350px] pl-0 pr-[13.68px] py-0 relative shrink-0">
            <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start pb-[3.99px] pt-0 px-0 relative shrink-0">
              <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
                <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.125px] text-[rgba(255,255,255,0.85)] text-left text-nowrap">
                  <p className="block leading-[22px] whitespace-pre">{t('create.visibilitySettings')}</p>
                </div>
              </div>
              <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
                <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[11.063px] text-[rgba(255,255,255,0.5)] text-left text-nowrap">
                  <p className="block leading-[14.4px] whitespace-pre">{t('create.visibilitySettingsDesc')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Visibility Options */}
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <input
              type="radio"
              id="public"
              name="visibility"
              value="public"
              checked={formData.visibility === 'public'}
              onChange={(e) => onInputChange('visibility', e.target.value)}
              className="w-4 h-4 text-[#dc5903] bg-[#141414] border-[#424242] focus:ring-[#dc5903] focus:ring-2"
            />
            <label htmlFor="public" className="text-[rgba(255,255,255,0.85)] text-[13px]">
{t('create.public')} - {t('create.publicDesc')}
            </label>
          </div>
          <div className="flex items-center space-x-3">
            <input
              type="radio"
              id="private"
              name="visibility"
              value="private"
              checked={formData.visibility === 'private'}
              onChange={(e) => onInputChange('visibility', e.target.value)}
              className="w-4 h-4 text-[#dc5903] bg-[#141414] border-[#424242] focus:ring-[#dc5903] focus:ring-2"
            />
            <label htmlFor="private" className="text-[rgba(255,255,255,0.85)] text-[13px]">
{t('create.private')} - {t('create.privateDesc')}
            </label>
          </div>
        </div>
      </div>

      {/* 여백 추가 */}
      <div className="h-6"></div>

      {/* Safety Filter Section */}
      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 w-full">
        {/* Safety Filter Label */}
        <div className="box-border content-stretch flex flex-col items-start justify-start max-w-[350px] min-h-px overflow-clip pb-2 pt-0 px-0 relative shrink-0 w-full">
          <div className="box-border content-stretch flex flex-row items-center justify-start max-w-[350px] pl-0 pr-[13.68px] py-0 relative shrink-0">
            <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start pb-[3.99px] pt-0 px-0 relative shrink-0">
              <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
                <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.125px] text-[rgba(255,255,255,0.85)] text-left text-nowrap">
                  <p className="block leading-[22px] whitespace-pre">{t('create.contentRating')}</p>
                </div>
              </div>
              <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
                <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[11.063px] text-[rgba(255,255,255,0.5)] text-left text-nowrap">
                  <p className="block leading-[14.4px] whitespace-pre">{t('create.contentRatingDesc')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Safety Filter Options */}
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <input
              type="radio"
              id="all-users"
              name="safetyFilter"
              value="all-users"
              checked={formData.safetyFilter === 'all-users'}
              onChange={(e) => onInputChange('safetyFilter', e.target.value)}
              className="w-4 h-4 text-[#dc5903] bg-[#141414] border-[#424242] focus:ring-[#dc5903] focus:ring-2"
            />
            <label htmlFor="all-users" className="text-[rgba(255,255,255,0.85)] text-[13px]">
{t('create.allUsers')} - {t('create.allUsersDesc')}
            </label>
          </div>
          <div className="flex items-center space-x-3">
            <input
              type="radio"
              id="mature"
              name="safetyFilter"
              value="mature"
              checked={formData.safetyFilter === 'mature'}
              onChange={(e) => onInputChange('safetyFilter', e.target.value)}
              className="w-4 h-4 text-[#dc5903] bg-[#141414] border-[#424242] focus:ring-[#dc5903] focus:ring-2"
            />
            <label htmlFor="mature" className="text-[rgba(255,255,255,0.85)] text-[13px]">
{t('create.mature')} - {t('create.matureDesc')}
            </label>
          </div>
        </div>
      </div>

      {/* 여백 추가 */}
      <div className="h-6"></div>

      {/* Creator Comment Section */}
      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 w-full">
        {/* Creator Comment Label */}
        <div className="box-border content-stretch flex flex-col items-start justify-start max-w-[350px] min-h-px overflow-clip pb-2 pt-0 px-0 relative shrink-0 w-full">
          <div className="box-border content-stretch flex flex-row items-center justify-start max-w-[350px] pl-0 pr-[13.68px] py-0 relative shrink-0">
            <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start pb-[3.99px] pt-0 px-0 relative shrink-0">
              <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
                <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.125px] text-[rgba(255,255,255,0.85)] text-left text-nowrap">
                  <p className="block leading-[22px] whitespace-pre">{t('create.creatorNote')}</p>
                </div>
              </div>
              <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
                <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[11.063px] text-[rgba(255,255,255,0.5)] text-left text-nowrap">
                  <p className="block leading-[14.4px] whitespace-pre">{t('create.creatorNoteDesc')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Creator Comment Textarea */}
        <div className="box-border content-stretch flex flex-row items-center justify-center min-h-8 p-0 relative shrink-0 w-full">
          <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start max-w-[350px] min-h-px min-w-px p-0 relative shrink-0">
            <div className="bg-[#141414] relative rounded-md shrink-0 w-full group">
              <div aria-hidden="true" className="absolute border border-[#424242] border-solid inset-0 pointer-events-none rounded-md group-focus-within:border-[rgba(255,149,0,0.8)] group-hover:border-[rgba(255,149,0,0.6)] transition-colors" />
              <div className="flex flex-row justify-center relative size-full">
                <div className="box-border content-stretch flex flex-row items-start justify-center p-[0.625px] relative w-full">
                  <div className="basis-0 grow h-[80px] max-h-[150px] max-w-[350px] min-h-[80px] min-w-px relative shrink-0">
                    <div className="max-h-inherit max-w-inherit min-h-inherit overflow-x-auto overflow-y-clip relative size-full">
                      <div className="box-border content-stretch flex flex-col h-[80px] items-start justify-start max-h-inherit max-w-inherit min-h-inherit px-[11px] py-1 relative w-full">
                        <textarea
                          value={formData.creatorComment}
                          onChange={(e) => onInputChange('creatorComment', e.target.value)}
                          placeholder={t('create.creatorNotePlaceholder')}
                          maxLength={200}
                          className="w-full h-full bg-transparent border-0 outline-none resize-none text-[rgba(255,255,255,0.85)] placeholder:text-[rgba(255,255,255,0.25)] text-[13.125px] leading-[21px] focus:ring-0"
                        />
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Character Count */}
        <div className="flex justify-end mt-2">
          <span className="text-[13.563px] text-[rgba(255,255,255,0.45)]">{getCharCount('creatorComment', 200)}</span>
        </div>
      </div>
    </div>
  );
}
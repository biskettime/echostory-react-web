import { useState, useEffect } from 'react';
import svgPaths from "../imports/svg-3c8wh35w53";
import { saveStory, saveStoryDraft, StoryFormData, getDraft, getStory, autoSaveStoryDraft } from '../data/stories';
import { saveCharacterImage, getNextAvailableImageNumber } from '../utils/imageUtils';
import { t, addLanguageChangeListener, removeLanguageChangeListener } from '../utils/i18n';

interface StoryCreationScreenProps {
  onBack: () => void;
  onSave: (storyData: any) => void;
  safetyMode: boolean;
  onSafetyToggle: (checked: boolean) => void;
  storyId?: string | null; // 편집할 스토리 ID (선택사항)
}

type ActiveTab = 'content' | 'start-situation' | 'introduction';

export function StoryCreationScreen({ onBack, onSave, safetyMode, onSafetyToggle, storyId }: StoryCreationScreenProps) {
  const [activeTab, setActiveTab] = useState<ActiveTab>('content');
  const [forceUpdate, setForceUpdate] = useState(0);
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
    storyImages: []
  });

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
    if (storyId) {
      // First try to load as draft
      const draft = getDraft(storyId);
      if (draft && draft.data) {
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
          storyImages: draft.data.media?.storyImages || []
        };
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
  }, [storyId]);

  const handleInputChange = (field: keyof typeof formData, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // 자동 저장 기능
  useEffect(() => {
    const autoSaveInterval = setInterval(() => {
      if (formData.title.trim() || 
          formData.characterName.trim() || 
          formData.introduction.trim() ||
          formData.storyImages.length > 0) {
        autoSaveStoryDraft(formData, 'creator_user', storyId || undefined);
      }
    }, 30000); // 30초마다 자동 저장

    return () => clearInterval(autoSaveInterval);
  }, [formData, storyId]);

  const handleSave = async (isTemporary = false) => {
    try {
      let savedResult;
      
      if (isTemporary) {
        // 임시 저장
        savedResult = await saveStoryDraft(formData, 'creator_user', storyId || undefined);
        if (savedResult.success && savedResult.draftId) {
          console.log('스토리 임시 저장 완료:', savedResult.draftId);
        }
      } else {
        // 최종 저장 (발행) - 기존 스토리 ID가 있으면 업데이트, 없으면 새로 생성
        savedResult = await saveStory(formData, 'creator_user', '@creator_user', storyId || undefined);
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
      alert('스토리 저장에 실패했습니다. 다시 시도해주세요.');
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
      <div className="flex-1 overflow-y-scroll w-full min-h-0">
        <div className="relative w-full">
          <div className="box-border content-stretch flex flex-col gap-[13.26px] items-start justify-start pb-[120px] pt-[46.5px] px-[15px] relative w-full">
            
            {/* Story Creation Guide Link */}
            <div className="box-border content-stretch flex flex-row items-start justify-center p-0 relative shrink-0 w-full">
              <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
                <div className="bg-[rgba(0,0,0,0.5)] box-border content-stretch flex flex-row gap-[1.99px] items-center justify-start pb-[3.115px] pt-[3.125px] px-2.5 relative rounded shrink-0 hover:bg-[rgba(0,0,0,0.6)] transition-colors cursor-pointer">
                  <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#ff9500] text-[13.453px] text-left text-nowrap">
                    <p className="block leading-[22px] whitespace-pre">{`Story Creation Guide `}</p>
                  </div>
                  <div className="relative shrink-0 size-[13.99px]">
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
                        className="box-border content-stretch flex flex-row h-full items-center justify-start px-0 py-3 relative shrink-0 hover:bg-[rgba(255,255,255,0.05)] transition-colors"
                      >
                        <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0">
                          <div className={`flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.234px] text-left text-nowrap ${
                            activeTab === 'content'
                              ? '[text-shadow:#dc5903_0px_0px_0.25px] text-[#dc5903]' 
                              : 'text-[rgba(255,255,255,0.85)]'
                          }`}>
                            <p className="block leading-[22px] whitespace-pre">Content</p>
                          </div>
                        </div>
                      </button>

                      {/* Start Situation Tab */}
                      <div className="box-border content-stretch flex flex-col h-full items-start justify-center pl-8 pr-0 py-0 relative shrink-0">
                        <button
                          onClick={() => setActiveTab('start-situation')}
                          className="basis-0 box-border content-stretch flex flex-row grow items-center justify-start min-h-px min-w-px px-0 py-3 relative shrink-0 hover:bg-[rgba(255,255,255,0.05)] transition-colors"
                        >
                          <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0">
                            <div className={`flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.125px] text-left text-nowrap ${
                              activeTab === 'start-situation' 
                                ? '[text-shadow:#dc5903_0px_0px_0.25px] text-[#dc5903]' 
                                : 'text-[rgba(255,255,255,0.85)]'
                            }`}>
                              <p className="block leading-[22px] whitespace-pre">Start Situation</p>
                            </div>
                          </div>
                        </button>
                      </div>

                      {/* Introduction Tab */}
                      <div className="box-border content-stretch flex flex-col h-full items-start justify-center pl-8 pr-0 py-0 relative shrink-0">
                        <button
                          onClick={() => setActiveTab('introduction')}
                          className="basis-0 box-border content-stretch flex flex-row grow items-center justify-start min-h-px min-w-px px-0 py-3 relative shrink-0 hover:bg-[rgba(255,255,255,0.05)] transition-colors"
                        >
                          <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0">
                            <div className={`flex flex-col font-['Inter:Medium','Noto_Sans_KR:Regular',sans-serif] ${
                              activeTab === 'introduction' ? 'font-medium' : 'font-normal'
                            } justify-center leading-[0] not-italic relative shrink-0 text-[13.234px] text-left text-nowrap ${
                              activeTab === 'introduction' 
                                ? '[text-shadow:#dc5903_0px_0px_0.25px] text-[#dc5903]' 
                                : 'text-[rgba(255,255,255,0.85)]'
                            }`}>
                              <p className="block leading-[22px] whitespace-pre">Introduction</p>
                            </div>
                          </div>
                        </button>
                      </div>

                      {/* Active Tab Indicator - Mobile Optimized */}
                      {activeTab === 'content' && (
                        <div className="absolute bg-[#dc5903] bottom-[0.01px] h-[1.99px] left-[0px] w-[50px]" />
                      )}
                      {activeTab === 'start-situation' && (
                        <div className="absolute bg-[#dc5903] bottom-[0.01px] h-[1.99px] left-[82px] w-[85px]" />
                      )}
                      {activeTab === 'introduction' && (
                        <div className="absolute bg-[#dc5903] bottom-[0.01px] h-[1.99px] left-[199px] w-[70px]" />
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
    if (files && formData.characterName) {
      const newImages: string[] = [];
      
      for (const file of Array.from(files)) {
        try {
          // 캐릭터 이미지를 data/ch_img 폴더에 저장
          const nextImageNumber = await getNextAvailableImageNumber(formData.characterName);
          
          try {
            // 서버에 이미지 저장 시도
            const savedPath = await saveCharacterImage(file, formData.characterName, nextImageNumber);
            newImages.push(savedPath);
          } catch (saveError) {
            console.warn('서버 저장 실패, Base64로 폴백:', saveError);
            // 서버 저장 실패 시 Base64로 폴백
            const base64 = await convertFileToBase64(file);
            newImages.push(base64);
          }
        } catch (error) {
          console.error('이미지 처리 실패:', error);
          // 최후의 수단으로 Base64 변환 시도
          try {
            const base64 = await convertFileToBase64(file);
            newImages.push(base64);
          } catch (base64Error) {
            console.error('Base64 변환도 실패:', base64Error);
          }
        }
      }
      
      if (newImages.length > 0) {
        onInputChange('storyImages', [...formData.storyImages, ...newImages]);
      }
    } else if (files && !formData.characterName) {
      // 캐릭터 이름이 없으면 기존 방식으로 처리
      const newImages: string[] = [];
      
      for (const file of Array.from(files)) {
        try {
          const base64 = await convertFileToBase64(file);
          newImages.push(base64);
        } catch (error) {
          console.error('이미지 변환 실패:', error);
        }
      }
      
      if (newImages.length > 0) {
        onInputChange('storyImages', [...formData.storyImages, ...newImages]);
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
    <div className="min-h-[1800px] relative shrink-0 w-full">
      
      {/* Title Section */}
      <div className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-0">
        {/* Title Label */}
        <div className="box-border content-stretch flex flex-col items-start justify-start max-w-[350px] min-h-px overflow-clip pb-2 pt-0 px-0 relative shrink-0 w-full">
          <div className="box-border content-stretch flex flex-row items-center justify-start max-w-[350px] pl-0 pr-[13.68px] py-0 relative shrink-0">
            <div className="box-border content-stretch flex flex-col gap-[3.99px] items-start justify-start pb-1 pt-0 px-0 relative shrink-0">
              <div className="h-[22.63px] leading-[0] not-italic relative shrink-0 text-left w-full">
                <div className="absolute flex flex-col font-['Apple_SD_Gothic_Neo:Regular',sans-serif] h-[22px] justify-center left-0 text-[#ff4d4f] text-[14px] top-[11.57px] translate-y-[-50%] w-[5.505px]">
                  <p className="block leading-[22px]">*</p>
                </div>
                <div className="absolute flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal h-[22px] justify-center left-[9.19px] text-[13.234px] text-[rgba(255,255,255,0.85)] top-[10.63px] translate-y-[-50%] w-[24.4px]">
                  <p className="block leading-[22px]">Title</p>
                </div>
              </div>
              <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
                <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[11.25px] text-[rgba(255,255,255,0.5)] text-left text-nowrap">
                  <p className="block leading-[14.4px] whitespace-pre">Enter the story title.</p>
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
                        placeholder="e.g. Childhood friend Yuna"
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
      <div className="absolute box-border content-stretch flex flex-col gap-[0.01px] items-start justify-start left-0 p-0 right-0 top-[120px]">
        {/* Story Settings Label */}
        <div className="box-border content-stretch flex flex-col items-start justify-start max-w-[350px] min-h-px overflow-clip pb-2 pt-0 px-0 relative shrink-0 w-full">
          <div className="box-border content-stretch flex flex-row items-center justify-start max-w-[350px] pl-0 pr-[13.68px] py-0 relative shrink-0">
            <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start pb-[3.98px] pt-0 px-0 relative shrink-0">
              <div className="h-[22.63px] leading-[0] not-italic relative shrink-0 text-left w-full">
                <div className="absolute flex flex-col font-['Apple_SD_Gothic_Neo:Regular',sans-serif] h-[22px] justify-center left-0 text-[#ff4d4f] text-[14px] top-[11.57px] translate-y-[-50%] w-[5.505px]">
                  <p className="block leading-[22px]">*</p>
                </div>
                <div className="absolute flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal h-[22px] justify-center left-[9.19px] text-[13.125px] text-[rgba(255,255,255,0.85)] top-[10.63px] translate-y-[-50%] w-[80px]">
                  <p className="block leading-[22px]">{t('storyDetail.storySettingsLabel')}</p>
                </div>
              </div>
              <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
                <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[14.4px] not-italic relative shrink-0 text-[11.25px] text-[rgba(255,255,255,0.5)] text-left text-nowrap whitespace-pre">
                  <p className="block mb-0">Describe the story's world, relationships, etc.</p>
                  <p className="block">{`Use {{user}} to replace with the chatting user's name.`}</p>
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
                          placeholder={`e.g. Yuna / 18 years old\n- Height: 165cm, Weight: 45kg\n- Since becoming a high school student, Yuna has become delinquent by hanging out with troublemaker friends.\n- She grew distant from {{user}}, her childhood friend who moved away when they were young.`}
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
      <div className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-[326px]">
        {/* Secret Settings Label */}
        <div className="box-border content-stretch flex flex-col items-start justify-start max-w-[350px] min-h-px overflow-clip pb-2 pt-0 px-0 relative shrink-0 w-full">
          <div className="box-border content-stretch flex flex-row items-center justify-start max-w-[350px] pl-0 pr-[13.68px] py-0 relative shrink-0">
            <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start pb-[3.99px] pt-0 px-0 relative shrink-0">
              <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
                <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.125px] text-[rgba(255,255,255,0.85)] text-left text-nowrap">
                  <p className="block leading-[22px] whitespace-pre">Secret Settings</p>
                </div>
              </div>
              <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
                <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[11.063px] text-[rgba(255,255,255,0.5)] text-left text-nowrap">
                  <p className="block leading-[14.4px] whitespace-pre">Settings not exposed to users, delivered to the generation AI.</p>
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
                          placeholder={`e.g. Yuna used to like {{user}}, her childhood friend.`}
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
      <div className="absolute h-[25.14px] left-0 right-0 top-[475px]">
        <div className="absolute box-border content-stretch flex flex-col items-center justify-start left-[19.82px] px-4 py-0 translate-y-[-50%]" style={{ top: "calc(50% + 0.43px)" }}>
          <div className="flex flex-col font-['Inter:Medium','Noto_Sans_KR:Regular',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-[rgba(255,255,255,0.85)] text-center text-nowrap">
            <p className="block leading-[25.14px] whitespace-pre">Character</p>
          </div>
        </div>
        <div className="absolute h-[0.63px] left-0 right-[95.78%] translate-y-[-50%]" style={{ top: "calc(50% + 0.315px)" }}>
          <div aria-hidden="true" className="absolute border-[0.625px_0px_0px] border-[rgba(253,253,253,0.01)] border-solid inset-0 pointer-events-none" />
        </div>
        <div className="absolute h-[0.63px] left-[19.85%] right-0 translate-y-[-50%]" style={{ top: "calc(50% + 0.315px)" }}>
          <div aria-hidden="true" className="absolute border-[0.625px_0px_0px] border-[rgba(253,253,253,0.01)] border-solid inset-0 pointer-events-none" />
        </div>
      </div>

      {/* Character Name Section */}
      <div className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-[551px]">
        {/* Character Name Label */}
        <div className="box-border content-stretch flex flex-col items-start justify-start max-w-[350px] min-h-px overflow-clip pb-2 pt-0 px-0 relative shrink-0 w-full">
          <div className="box-border content-stretch flex flex-row items-center justify-start max-w-[350px] pl-0 pr-[13.68px] py-0 relative shrink-0">
            <div className="box-border content-stretch flex flex-col gap-[3.99px] items-start justify-start pb-[3.98px] pt-0 px-0 relative shrink-0">
              <div className="h-[22.63px] leading-[0] not-italic relative shrink-0 text-left w-full">
                <div className="absolute flex flex-col font-['Apple_SD_Gothic_Neo:Regular',sans-serif] h-[22px] justify-center left-0 text-[#ff4d4f] text-[14px] top-[11.57px] translate-y-[-50%] w-[5.505px]">
                  <p className="block leading-[22px]">*</p>
                </div>
                <div className="absolute flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal h-[22px] justify-center left-[9.19px] text-[13.125px] text-[rgba(255,255,255,0.85)] top-[10.63px] translate-y-[-50%] w-[80px]">
                  <p className="block leading-[22px]">{t('storyDetail.characterNameLabel')}</p>
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
                        placeholder="e.g. Yuna"
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
      <div className="absolute box-border content-stretch flex flex-col gap-[0.01px] items-start justify-start left-0 p-0 right-0 top-[660px]">
        {/* Character Description Label */}
        <div className="box-border content-stretch flex flex-col items-start justify-start max-w-[350px] min-h-px overflow-clip pb-2 pt-0 px-0 relative shrink-0 w-full">
          <div className="box-border content-stretch flex flex-row items-center justify-start max-w-[350px] pl-0 pr-[13.68px] py-0 relative shrink-0">
            <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start pb-[3.99px] pt-0 px-0 relative shrink-0">
              <div className="h-[22.63px] leading-[0] not-italic relative shrink-0 text-left w-full">
                <div className="absolute flex flex-col font-['Apple_SD_Gothic_Neo:Regular',sans-serif] h-[22px] justify-center left-0 text-[#ff4d4f] text-[14px] top-[11.57px] translate-y-[-50%] w-[5.505px]">
                  <p className="block leading-[22px]">*</p>
                </div>
                <div className="absolute flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal h-[22px] justify-center left-[9.19px] text-[13.125px] text-[rgba(255,255,255,0.85)] top-[10.63px] translate-y-[-50%] w-[100px]">
                  <p className="block leading-[22px]">{t('storyDetail.characterDescriptionLabel')}</p>
                </div>
              </div>
              <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
                <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[14.4px] not-italic relative shrink-0 text-[11.25px] text-[rgba(255,255,255,0.5)] text-left text-nowrap whitespace-pre">
                  <p className="block mb-0">Describe the character's appearance, personality, etc.</p>
                  <p className="block">{`Use {{user}} to replace with the chatting user's name.`}</p>
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
                          placeholder={`e.g. 18 years old, 165cm/47kg\n- Long black hair, bright eyes\n- Wears school uniform neatly\n- Cheerful personality but has a stubborn side\n- Lost contact with {{user}} since childhood`}
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

      {/* Story Images Section - AT THE BOTTOM */}
      <div className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-[950px]">
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
        <div className="w-full">
          {formData.storyImages.length === 0 ? (
            /* Empty State - Upload Box */
            <div className="relative w-full h-[320px] border-2 border-dashed border-[#424242] rounded-lg bg-[#1a1a1a] flex flex-col items-center justify-center">
              {/* Image Icon */}
              <div className="w-16 h-16 rounded-full bg-[#3a3a3a] flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[rgba(255,255,255,0.4)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              
              {/* Title */}
              <h3 className="text-white text-[15px] font-medium mb-2">{t('create.storyImages')}</h3>
              
              {/* Description */}
              <p className="text-[rgba(255,255,255,0.5)] text-[13px] mb-1">
                {t('create.storyImagesDesc1')}
              </p>
              <p className="text-[rgba(255,255,255,0.4)] text-[12px] mb-6">
                {t('create.storyImagesDesc2')}
              </p>
              
              {/* Buttons */}
              <div className="flex flex-col gap-3 w-[200px]">
                <label className="w-full">
                  <button className="w-full bg-[#ff6b00] text-white py-3 rounded-lg hover:bg-[#ff8800] transition-colors text-[14px] font-medium">
                    {t('create.generateWithAI')}
                  </button>
                </label>
                <label className="w-full cursor-pointer">
                  <div className="w-full bg-[#3a3a3a] text-[rgba(255,255,255,0.85)] py-3 rounded-lg hover:bg-[#4a4a4a] transition-colors text-[14px] font-medium text-center">
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
              
              {/* Character Count */}
              <div className="absolute bottom-4 right-4 text-[rgba(255,255,255,0.45)] text-[13px]">
                0 / 1000
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
    <div className="h-[800px] relative shrink-0 w-full">
      
      {/* Starting Situation Section */}
      <div className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-0">
        {/* Starting Situation Label */}
        <div className="box-border content-stretch flex flex-col items-start justify-start max-w-[350px] min-h-px overflow-clip pb-2 pt-0 px-0 relative shrink-0 w-full">
          <div className="box-border content-stretch flex flex-row items-center justify-start max-w-[350px] pl-0 pr-[13.68px] py-0 relative shrink-0">
            <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start pb-[3.98px] pt-0 px-0 relative shrink-0">
              <div className="h-[22.63px] leading-[0] not-italic relative shrink-0 text-left w-full">
                <div className="absolute flex flex-col font-['Apple_SD_Gothic_Neo:Regular',sans-serif] h-[22px] justify-center left-0 text-[#ff4d4f] text-[14px] top-[11.57px] translate-y-[-50%] w-[5.505px]">
                  <p className="block leading-[22px]">*</p>
                </div>
                <div className="absolute flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal h-[22px] justify-center left-[9.19px] text-[13.125px] text-[rgba(255,255,255,0.85)] top-[10.63px] translate-y-[-50%] w-[90px]">
                  <p className="block leading-[22px]">Starting Situation</p>
                </div>
              </div>
              <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
                <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[14.4px] not-italic relative shrink-0 text-[11.25px] text-[rgba(255,255,255,0.5)] text-left text-nowrap whitespace-pre">
                  <p className="block mb-0">Describe the initial situation when the story begins.</p>
                  <p className="block">{`Use {{user}} to replace with the chatting user's name.`}</p>
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
                          placeholder={`e.g. {{user}} runs into Yuna at a crowded subway station during rush hour. It's been 5 years since they last met, and Yuna looks completely different - more mature, with a distant expression. The awkward silence stretches between them as commuters rush past.`}
                          maxLength={1000}
                          className="w-full h-full bg-transparent border-0 outline-none resize-none text-[rgba(255,255,255,0.85)] placeholder:text-[rgba(255,255,255,0.25)] text-[13.016px] leading-[21px] focus:ring-0"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-[-21.36px] box-border content-stretch flex flex-col items-start justify-start p-0 right-[0.21px]">
                    <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.563px] text-[rgba(255,255,255,0.45)] text-left text-nowrap">
                      <p className="block leading-[22px] whitespace-pre">{getCharCount('startingSituation', 1000)}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* First Dialogue Section */}
      <div className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-[250px]">
        {/* First Dialogue Label */}
        <div className="box-border content-stretch flex flex-col items-start justify-start max-w-[350px] min-h-px overflow-clip pb-2 pt-0 px-0 relative shrink-0 w-full">
          <div className="box-border content-stretch flex flex-row items-center justify-start max-w-[350px] pl-0 pr-[13.68px] py-0 relative shrink-0">
            <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start pb-[3.99px] pt-0 px-0 relative shrink-0">
              <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
                <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.125px] text-[rgba(255,255,255,0.85)] text-left text-nowrap">
                  <p className="block leading-[22px] whitespace-pre">Character's First Line</p>
                </div>
              </div>
              <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
                <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[11.063px] text-[rgba(255,255,255,0.5)] text-left text-nowrap">
                  <p className="block leading-[14.4px] whitespace-pre">The character's first words to start the conversation.</p>
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
                          placeholder={`e.g. "{{user}}? Is that really you? I can't believe we're running into each other here..."`}
                          maxLength={300}
                          className="w-full h-full bg-transparent border-0 outline-none resize-none text-[rgba(255,255,255,0.85)] placeholder:text-[rgba(255,255,255,0.25)] text-[13.125px] leading-[21px] focus:ring-0"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-[-21.36px] box-border content-stretch flex flex-col items-start justify-start p-0 right-[-0.27px]">
                    <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.563px] text-[rgba(255,255,255,0.45)] text-left text-nowrap">
                      <p className="block leading-[22px] whitespace-pre">{getCharCount('firstDialogue', 300)}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Introduction Tab Panel - Complete Implementation
function IntroductionTabPanel({ formData, onInputChange, getCharCount }: TabPanelProps) {
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
    <div className="h-[1200px] relative shrink-0 w-full">
      
      {/* Introduction Section */}
      <div className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-0">
        {/* Introduction Label */}
        <div className="box-border content-stretch flex flex-col items-start justify-start max-w-[350px] min-h-px overflow-clip pb-2 pt-0 px-0 relative shrink-0 w-full">
          <div className="box-border content-stretch flex flex-row items-center justify-start max-w-[350px] pl-0 pr-[13.68px] py-0 relative shrink-0">
            <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start pb-[3.98px] pt-0 px-0 relative shrink-0">
              <div className="h-[22.63px] leading-[0] not-italic relative shrink-0 text-left w-full">
                <div className="absolute flex flex-col font-['Apple_SD_Gothic_Neo:Regular',sans-serif] h-[22px] justify-center left-0 text-[#ff4d4f] text-[14px] top-[11.57px] translate-y-[-50%] w-[5.505px]">
                  <p className="block leading-[22px]">*</p>
                </div>
                <div className="absolute flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal h-[22px] justify-center left-[9.19px] text-[13.125px] text-[rgba(255,255,255,0.85)] top-[10.63px] translate-y-[-50%] w-[70px]">
                  <p className="block leading-[22px]">Introduction</p>
                </div>
              </div>
              <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
                <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[14.4px] not-italic relative shrink-0 text-[11.25px] text-[rgba(255,255,255,0.5)] text-left text-nowrap whitespace-pre">
                  <p className="block mb-0">Write an introduction for users browsing stories.</p>
                  <p className="block">This will be shown as a preview to attract readers.</p>
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
                          placeholder={`e.g. A chance encounter with your childhood friend Yuna after years of separation. She's changed so much - can you reconnect with the person you once knew so well?`}
                          maxLength={500}
                          className="w-full h-full bg-transparent border-0 outline-none resize-none text-[rgba(255,255,255,0.85)] placeholder:text-[rgba(255,255,255,0.25)] text-[13.016px] leading-[21px] focus:ring-0"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-[-21.36px] box-border content-stretch flex flex-col items-start justify-start p-0 right-[0.21px]">
                    <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.563px] text-[rgba(255,255,255,0.45)] text-left text-nowrap">
                      <p className="block leading-[22px] whitespace-pre">{getCharCount('introduction', 500)}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tags Section */}
      <div className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-[230px]">
        {/* Tags Label */}
        <div className="box-border content-stretch flex flex-col items-start justify-start max-w-[350px] min-h-px overflow-clip pb-2 pt-0 px-0 relative shrink-0 w-full">
          <div className="box-border content-stretch flex flex-row items-center justify-start max-w-[350px] pl-0 pr-[13.68px] py-0 relative shrink-0">
            <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start pb-[3.99px] pt-0 px-0 relative shrink-0">
              <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
                <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.125px] text-[rgba(255,255,255,0.85)] text-left text-nowrap">
                  <p className="block leading-[22px] whitespace-pre">Tags</p>
                </div>
              </div>
              <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
                <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[11.063px] text-[rgba(255,255,255,0.5)] text-left text-nowrap">
                  <p className="block leading-[14.4px] whitespace-pre">Add tags to help users find your story (up to 5 tags).</p>
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
                        placeholder="Enter tag and press Enter (e.g. Romance, School, Friendship)"
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

        {/* Popular Tags */}
        <div className="mt-3">
          <p className="text-[rgba(255,255,255,0.5)] text-[11px] mb-2">Popular tags:</p>
          <div className="flex flex-wrap gap-2">
            {['Romance', 'School', 'Friendship', 'Drama', 'Comedy', 'Fantasy', 'Mystery', 'Slice of Life'].map((tag) => (
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

      {/* Visibility Section */}
      <div className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-[450px]">
        {/* Visibility Label */}
        <div className="box-border content-stretch flex flex-col items-start justify-start max-w-[350px] min-h-px overflow-clip pb-2 pt-0 px-0 relative shrink-0 w-full">
          <div className="box-border content-stretch flex flex-row items-center justify-start max-w-[350px] pl-0 pr-[13.68px] py-0 relative shrink-0">
            <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start pb-[3.99px] pt-0 px-0 relative shrink-0">
              <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
                <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.125px] text-[rgba(255,255,255,0.85)] text-left text-nowrap">
                  <p className="block leading-[22px] whitespace-pre">Visibility Settings</p>
                </div>
              </div>
              <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
                <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[11.063px] text-[rgba(255,255,255,0.5)] text-left text-nowrap">
                  <p className="block leading-[14.4px] whitespace-pre">Choose who can see and interact with your story.</p>
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
              Public - Anyone can see and chat with this story
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
              Private - Only I can access this story
            </label>
          </div>
        </div>
      </div>

      {/* Safety Filter Section */}
      <div className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-[580px]">
        {/* Safety Filter Label */}
        <div className="box-border content-stretch flex flex-col items-start justify-start max-w-[350px] min-h-px overflow-clip pb-2 pt-0 px-0 relative shrink-0 w-full">
          <div className="box-border content-stretch flex flex-row items-center justify-start max-w-[350px] pl-0 pr-[13.68px] py-0 relative shrink-0">
            <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start pb-[3.99px] pt-0 px-0 relative shrink-0">
              <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
                <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.125px] text-[rgba(255,255,255,0.85)] text-left text-nowrap">
                  <p className="block leading-[22px] whitespace-pre">Content Rating</p>
                </div>
              </div>
              <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
                <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[11.063px] text-[rgba(255,255,255,0.5)] text-left text-nowrap">
                  <p className="block leading-[14.4px] whitespace-pre">Set the appropriate content rating for your story.</p>
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
              All Ages - Suitable for everyone
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
              Mature (18+) - Contains adult themes
            </label>
          </div>
        </div>
      </div>

      {/* Creator Comment Section */}
      <div className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-[720px]">
        {/* Creator Comment Label */}
        <div className="box-border content-stretch flex flex-col items-start justify-start max-w-[350px] min-h-px overflow-clip pb-2 pt-0 px-0 relative shrink-0 w-full">
          <div className="box-border content-stretch flex flex-row items-center justify-start max-w-[350px] pl-0 pr-[13.68px] py-0 relative shrink-0">
            <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start pb-[3.99px] pt-0 px-0 relative shrink-0">
              <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
                <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.125px] text-[rgba(255,255,255,0.85)] text-left text-nowrap">
                  <p className="block leading-[22px] whitespace-pre">Creator's Note</p>
                </div>
              </div>
              <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
                <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[11.063px] text-[rgba(255,255,255,0.5)] text-left text-nowrap">
                  <p className="block leading-[14.4px] whitespace-pre">Optional message to readers about your story.</p>
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
                          placeholder={`e.g. I hope you enjoy reconnecting with old friends through this story. Feel free to share your thoughts!`}
                          maxLength={200}
                          className="w-full h-full bg-transparent border-0 outline-none resize-none text-[rgba(255,255,255,0.85)] placeholder:text-[rgba(255,255,255,0.25)] text-[13.125px] leading-[21px] focus:ring-0"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-[-21.36px] box-border content-stretch flex flex-col items-start justify-start p-0 right-[-0.27px]">
                    <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.563px] text-[rgba(255,255,255,0.45)] text-left text-nowrap">
                      <p className="block leading-[22px] whitespace-pre">{getCharCount('creatorComment', 200)}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
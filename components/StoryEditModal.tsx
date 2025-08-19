import { useState, useEffect } from 'react';
import { t, addLanguageChangeListener, removeLanguageChangeListener, getCurrentLanguage } from '../utils/i18n';
import { translateCharacterName, translateStorySettingsContent, translateCharacterDescriptionContent } from '../utils/storyTranslation';
import svgPaths from "../imports/svg-dzkl73gmd9";

interface StoryEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: { 
    storySetting: string;
    characterName: string; 
    characterDescription: string;
  }) => void;
  storyData: {
    storySetting: string;
    characterName: string;
    characterDescription: string;
  };
  storyTitle: string;
}

export function StoryEditModal({ isOpen, onClose, onSave, storyData, storyTitle }: StoryEditModalProps) {
  const [storySetting, setStorySetting] = useState('');
  const [characterName, setCharacterName] = useState('');
  const [characterDescription, setCharacterDescription] = useState('');
  const [forceUpdate, setForceUpdate] = useState(0);

  // Initialize with translated content based on current language
  useEffect(() => {
    const currentLang = getCurrentLanguage();
    if (currentLang === 'en') {
      setStorySetting(storyData.storySetting);
      setCharacterName(storyData.characterName);
      setCharacterDescription(storyData.characterDescription);
    } else {
      setStorySetting(translateStorySettingsContent(storyTitle, storyData.storySetting));
      setCharacterName(translateCharacterName(storyData.characterName));
      setCharacterDescription(translateCharacterDescriptionContent(storyTitle, storyData.characterDescription));
    }
  }, [storyData, storyTitle, isOpen]);

  // Language change listener
  useEffect(() => {
    const handleLanguageChange = () => {
      const currentLang = getCurrentLanguage();
      if (currentLang === 'en') {
        setStorySetting(storyData.storySetting);
        setCharacterName(storyData.characterName);
        setCharacterDescription(storyData.characterDescription);
      } else {
        setStorySetting(translateStorySettingsContent(storyTitle, storyData.storySetting));
        setCharacterName(translateCharacterName(storyData.characterName));
        setCharacterDescription(translateCharacterDescriptionContent(storyTitle, storyData.characterDescription));
      }
      setForceUpdate(prev => prev + 1);
    };

    addLanguageChangeListener(handleLanguageChange);
    return () => removeLanguageChangeListener(handleLanguageChange);
  }, [storyData, storyTitle]);

  if (!isOpen) return null;

  const handleSave = () => {
    const currentLang = getCurrentLanguage();
    
    // If in Korean mode, we need to save the original English data
    // For now, we'll save the edited content as-is since reverse translation is complex
    // In a real implementation, you might want to maintain both original and translated versions
    onSave({
      storySetting: storySetting.trim(),
      characterName: characterName.trim(),
      characterDescription: characterDescription.trim()
    });
  };

  const handleCancel = () => {
    // Reset to original translated data based on current language
    const currentLang = getCurrentLanguage();
    if (currentLang === 'en') {
      setStorySetting(storyData.storySetting);
      setCharacterName(storyData.characterName);
      setCharacterDescription(storyData.characterDescription);
    } else {
      setStorySetting(translateStorySettingsContent(storyTitle, storyData.storySetting));
      setCharacterName(translateCharacterName(storyData.characterName));
      setCharacterDescription(translateCharacterDescriptionContent(storyTitle, storyData.characterDescription));
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[rgba(0,0,0,0.45)] backdrop-blur-sm"
        onClick={handleCancel}
      />
      
      {/* Modal Container - Mobile optimized */}
      <div className="relative w-full max-w-md mx-4">
        <div className="bg-[#1f1f1f] relative rounded-lg shadow-[0px_6px_16px_0px_rgba(0,0,0,0.08),0px_3px_6px_-4px_rgba(0,0,0,0.12),0px_9px_28px_8px_rgba(0,0,0,0.05)] shrink-0 w-full">
          <div className="overflow-clip relative size-full">
            <div className="box-border content-stretch flex flex-col gap-[13px] items-start justify-start px-6 py-5 relative w-full">
              
              {/* Header */}
              <div className="bg-[#1f1f1f] box-border content-stretch flex flex-col items-start justify-start p-0 relative rounded-tl-lg rounded-tr-lg shrink-0 w-full">
                <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
                  <div className="flex flex-col font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-[rgba(255,255,255,0.85)] text-left w-full">
                    <p className="block leading-[24px]">{t('storyDetail.editStory')}</p>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-0 relative shrink-0 w-full">
                
                {/* Story Setting Field */}
                <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
                  {/* Label */}
                  <div className="box-border content-stretch flex flex-col items-start justify-start max-w-[472.01px] min-h-px overflow-clip pb-2 pt-[0.635px] px-0 relative shrink-0 w-full">
                    <div className="box-border content-stretch flex flex-row items-center justify-start max-w-[472.01px] pl-0 pr-[13.69px] py-0 relative shrink-0">
                      <div className="box-border content-stretch flex flex-col items-start justify-start mr-[-0.01px] pl-0 pr-1 py-0 relative shrink-0">
                        <div className="flex flex-col font-['Apple_SD_Gothic_Neo:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#dc4446] text-[14px] text-left text-nowrap">
                          <p className="block leading-[14px] whitespace-pre">*</p>
                        </div>
                      </div>
                      <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] mr-[-0.01px] not-italic relative shrink-0 text-[13.125px] text-[rgba(255,255,255,0.85)] text-left text-nowrap">
                        <p className="block leading-[22px] whitespace-pre">{t('storyDetail.storySettingsLabel')}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Textarea */}
                  <div className="box-border content-stretch flex flex-row items-center justify-center min-h-8 p-0 relative shrink-0 w-full">
                    <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start max-w-[472.01px] min-h-px min-w-px p-0 relative shrink-0">
                      <div className="bg-[#141414] relative rounded-md shrink-0 w-full group">
                        <div aria-hidden="true" className="absolute border border-[#424242] border-solid inset-0 pointer-events-none rounded-md group-focus-within:border-[rgba(255,149,0,0.8)] group-hover:border-[rgba(255,149,0,0.6)] transition-colors" />
                        <div className="flex flex-row justify-center relative size-full">
                          <div className="box-border content-stretch flex flex-row items-start justify-center p-[0.625px] relative w-full">
                            <div className="basis-0 grow h-[140px] max-h-[140px] max-w-[472.01px] min-h-[74px] min-w-px relative shrink-0">
                              <div className="max-h-inherit max-w-inherit min-h-inherit overflow-x-auto overflow-y-auto relative size-full">
                                <textarea
                                  value={storySetting}
                                  onChange={(e) => setStorySetting(e.target.value)}
                                  className="box-border content-stretch flex flex-col h-[140px] items-start justify-start max-h-inherit max-w-inherit min-h-inherit px-[11px] py-1 relative w-full bg-transparent border-none outline-none text-[rgba(255,255,255,0.85)] text-[13.125px] leading-[22px] resize-none focus:ring-0"
                                  maxLength={2000}
                                  placeholder={t('storyDetail.storySettingsPlaceholder')}
                                />
                              </div>
                            </div>
                            {/* Character count */}
                            <div className="absolute bottom-[-21.36px] box-border content-stretch flex flex-col items-start justify-start p-0 right-[0.43px]">
                              <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.563px] text-[rgba(255,255,255,0.45)] text-left text-nowrap">
                                <p className="block leading-[22px] whitespace-pre">{storySetting.length} / 2000</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Character Name Field */}
                <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
                  {/* Label */}
                  <div className="box-border content-stretch flex flex-col items-start justify-start max-w-[472.01px] min-h-px overflow-clip pb-2 pt-[0.635px] px-0 relative shrink-0 w-full" style={{ marginBottom: "-1.06581e-14px" }}>
                    <div className="box-border content-stretch flex flex-row items-center justify-start max-w-[472.01px] pl-0 pr-[13.69px] py-0 relative shrink-0">
                      <div className="box-border content-stretch flex flex-col items-start justify-start mr-[-0.01px] pl-0 pr-1 py-0 relative shrink-0">
                        <div className="flex flex-col font-['Apple_SD_Gothic_Neo:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#dc4446] text-[14px] text-left text-nowrap">
                          <p className="block leading-[14px] whitespace-pre">*</p>
                        </div>
                      </div>
                      <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] mr-[-0.01px] not-italic relative shrink-0 text-[13.125px] text-[rgba(255,255,255,0.85)] text-left text-nowrap">
                        <p className="block leading-[22px] whitespace-pre">{t('storyDetail.characterNameLabel')}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Input */}
                  <div className="box-border content-stretch flex flex-row items-center justify-center min-h-8 pb-[0.38px] pt-[0.37px] px-0 relative shrink-0 w-full" style={{ marginBottom: "-1.06581e-14px" }}>
                    <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start max-w-[472.01px] min-h-px min-w-px p-0 relative shrink-0">
                      <div className="bg-[#141414] relative rounded-md shrink-0 w-full group">
                        <div aria-hidden="true" className="absolute border border-[#424242] border-solid inset-0 pointer-events-none rounded-md group-focus-within:border-[rgba(255,149,0,0.8)] group-hover:border-[rgba(255,149,0,0.6)] transition-colors" />
                        <div className="relative size-full">
                          <div className="box-border content-stretch flex flex-row-reverse items-start justify-start pl-[11.625px] pr-[11.635px] py-[4.625px] relative w-full">
                            <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px mr-[-0.01px] order-2 overflow-clip p-0 relative self-stretch shrink-0">
                              <div className="box-border content-stretch flex flex-col items-start justify-start overflow-auto p-0 relative shrink-0 w-full">
                                <input
                                  type="text"
                                  value={characterName}
                                  onChange={(e) => setCharacterName(e.target.value)}
                                  className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.234px] text-[rgba(255,255,255,0.85)] text-left w-full bg-transparent border-none outline-none leading-[22px] focus:ring-0"
                                  maxLength={10}
                                  placeholder={t('storyDetail.characterNamePlaceholder')}
                                />
                              </div>
                            </div>
                            {/* Character count */}
                            <div className="box-border content-stretch flex flex-col items-start justify-center mr-[-0.01px] order-1 pl-1 pr-0 py-0 relative self-stretch shrink-0">
                              <div className="basis-0 box-border content-stretch flex flex-row grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0">
                                <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0">
                                  <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.344px] text-[rgba(255,255,255,0.45)] text-left text-nowrap">
                                    <p className="block leading-[22px] whitespace-pre">{characterName.length} / 10</p>
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

                {/* Character Description Field */}
                <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
                  {/* Label */}
                  <div className="box-border content-stretch flex flex-col items-start justify-start max-w-[472.01px] min-h-px overflow-clip pb-2 pt-[0.635px] px-0 relative shrink-0 w-full" style={{ marginBottom: "-1.06581e-14px" }}>
                    <div className="box-border content-stretch flex flex-row items-center justify-start max-w-[472.01px] pl-0 pr-[13.69px] py-0 relative shrink-0">
                      <div className="box-border content-stretch flex flex-col items-start justify-start mr-[-0.01px] pl-0 pr-1 py-0 relative shrink-0">
                        <div className="flex flex-col font-['Apple_SD_Gothic_Neo:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#dc4446] text-[14px] text-left text-nowrap">
                          <p className="block leading-[14px] whitespace-pre">*</p>
                        </div>
                      </div>
                      <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] mr-[-0.01px] not-italic relative shrink-0 text-[13.125px] text-[rgba(255,255,255,0.85)] text-left text-nowrap">
                        <p className="block leading-[22px] whitespace-pre">{t('storyDetail.characterDescriptionLabel')}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Textarea */}
                  <div className="box-border content-stretch flex flex-row items-center justify-center min-h-8 p-0 relative shrink-0 w-full" style={{ marginBottom: "-1.06581e-14px" }}>
                    <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start max-w-[472.01px] min-h-px min-w-px p-0 relative shrink-0">
                      <div className="bg-[#141414] relative rounded-md shrink-0 w-full group">
                        <div aria-hidden="true" className="absolute border border-[#424242] border-solid inset-0 pointer-events-none rounded-md group-focus-within:border-[rgba(255,149,0,0.8)] group-hover:border-[rgba(255,149,0,0.6)] transition-colors" />
                        <div className="flex flex-row justify-center relative size-full">
                          <div className="box-border content-stretch flex flex-row items-start justify-center p-[0.625px] relative w-full">
                            <div className="basis-0 grow h-[74px] max-h-[118px] max-w-[472.01px] min-h-[74px] min-w-px relative shrink-0">
                              <div className="max-h-inherit max-w-inherit min-h-inherit overflow-x-auto overflow-y-auto relative size-full">
                                <textarea
                                  value={characterDescription}
                                  onChange={(e) => setCharacterDescription(e.target.value)}
                                  className="box-border content-stretch flex flex-col h-[74px] items-start justify-start max-h-inherit max-w-inherit min-h-inherit px-[11px] py-1 relative w-full bg-transparent border-none outline-none text-[rgba(255,255,255,0.85)] text-[13.016px] leading-[22px] resize-none focus:ring-0"
                                  maxLength={500}
                                  placeholder={t('storyDetail.characterDescriptionPlaceholder')}
                                />
                              </div>
                            </div>
                            {/* Character count */}
                            <div className="absolute bottom-[-21.37px] box-border content-stretch flex flex-col items-start justify-start p-0 right-[-0.38px]">
                              <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.672px] text-[rgba(255,255,255,0.45)] text-left text-nowrap">
                                <p className="block leading-[22px] whitespace-pre">{characterDescription.length} / 500</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="relative shrink-0 w-full">
                <div className="relative size-full">
                  <div className="box-border content-stretch flex flex-row gap-2 items-start justify-end pb-0 pt-[27.99px] px-0 relative w-full">
                    {/* Cancel Button */}
                    <button
                      onClick={handleCancel}
                      className="bg-[#141414] box-border flex flex-row h-[31.99px] items-center justify-center px-[15.625px] py-[0.625px] relative rounded-md shrink-0 hover:bg-[#1a1a1a] transition-colors"
                    >
                      <div aria-hidden="true" className="absolute border border-[#424242] border-solid inset-0 pointer-events-none rounded-md shadow-[0px_2px_0px_0px_rgba(255,255,255,0.04)]" />
                      <span className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal text-[13.234px] text-[rgba(255,255,255,0.85)] text-center">
                        {t('chat.cancel')}
                      </span>
                    </button>
                    
                    {/* Save Button */}
                    <button
                      onClick={handleSave}
                      disabled={!storySetting.trim() || !characterName.trim() || !characterDescription.trim()}
                      className="bg-[#dc5903] box-border flex flex-row h-[31.99px] items-center justify-center px-[15.625px] py-[0.625px] relative rounded-md shadow-[0px_2px_0px_0px_rgba(180,60,0,0.15)] shrink-0 hover:bg-[#e6850e] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      <span className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal text-[#ffffff] text-[13.125px] text-center">
                        {t('chat.save')}
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={handleCancel}
                className="absolute box-border content-stretch flex flex-col items-start justify-start pb-[7.99px] pt-2 px-0 right-[11.99px] rounded size-[31.99px] top-[11.99px] hover:bg-[#2a2a2a] transition-colors"
              >
                <div className="box-border content-stretch flex flex-row items-start justify-center p-0 relative self-stretch shrink-0">
                  <div className="box-border content-stretch flex flex-row items-center justify-start p-0 relative self-stretch shrink-0">
                    <div className="relative shrink-0 size-4">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                        <g>
                          <path
                            clipRule="evenodd"
                            d={svgPaths.pbe04e00}
                            fill="var(--fill-0, white)"
                            fillOpacity="0.45"
                            fillRule="evenodd"
                          />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
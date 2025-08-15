import { useState, useEffect } from 'react';
import { StoryCreationTab } from './StoryCreationTab';
import { ImageGenerationTab } from './ImageGenerationTab';
import { LanguageSelector } from './LanguageSelector';
import { t, addLanguageChangeListener, removeLanguageChangeListener } from '../utils/i18n';
import svgPaths from '../imports/svg-atk68p6tff';

interface CreateScreenProps {
  onBack: () => void;
  onNavigateToStoryCreation: () => void;
  onNavigateToInProgressStory: (draftId: string) => void;
}

export function CreateScreen({ onBack, onNavigateToStoryCreation, onNavigateToInProgressStory }: CreateScreenProps) {
  const [activeTab, setActiveTab] = useState<'stories' | 'images'>('stories');
  const [forceUpdate, setForceUpdate] = useState(0);

  // Language change listener
  useEffect(() => {
    const handleLanguageChange = () => {
      setForceUpdate(prev => prev + 1);
    };

    addLanguageChangeListener(handleLanguageChange);
    return () => removeLanguageChangeListener(handleLanguageChange);
  }, []);

  return (
    <div className="bg-[#1a1b1b] h-full flex flex-col relative w-full">
      {/* Header - Unified with ProfileScreen */}
      <div className="bg-[#1a1b1b] box-border content-stretch flex flex-row h-[41.99px] items-center justify-between left-0 w-full pl-[15px] pr-0 py-0 top-0 flex-shrink-0">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src="/images/echostory.png" 
            alt="EchoStory" 
            className="h-12 w-auto object-contain"
            onError={(e) => {
              // Fallback to text if image fails to load
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const fallbackDiv = document.createElement('div');
              fallbackDiv.className = 'text-white text-xl font-medium tracking-wide';
              fallbackDiv.innerHTML = 'Echo<span class="text-[#ff9500]">Story</span>';
              target.parentNode?.appendChild(fallbackDiv);
            }}
          />
        </div>

        {/* Right Side Controls */}
        <div className="box-border content-stretch flex flex-row gap-[15px] items-center justify-start pl-0 pr-[15px] py-0 relative shrink-0">
          <LanguageSelector />
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-[#1a1b1b] border-b border-[#424242] relative flex-shrink-0">
        <div className="flex">
          <button
            onClick={() => setActiveTab('stories')}
            className={`px-6 py-3 text-[14px] font-medium transition-colors relative ${
              activeTab === 'stories' 
                ? 'text-[#dc5903] [text-shadow:#dc5903_0px_0px_0.25px]' 
                : 'text-[rgba(255,255,255,0.7)] hover:text-white'
            }`}
          >
{t('create.myStories')}
            {activeTab === 'stories' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#dc5903]" />
            )}
          </button>
          <button
            onClick={() => setActiveTab('images')}
            className={`px-6 py-3 text-[14px] font-medium transition-colors relative ${
              activeTab === 'images' 
                ? 'text-[#dc5903] [text-shadow:#dc5903_0px_0px_0.25px]' 
                : 'text-[rgba(255,255,255,0.7)] hover:text-white'
            }`}
          >
{t('create.imageGeneration')}
            {activeTab === 'images' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#dc5903]" />
            )}
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden min-h-0">
        {activeTab === 'stories' ? (
          <StoryCreationTab 
            onNavigateToStoryCreation={onNavigateToStoryCreation}
            onNavigateToInProgressStory={onNavigateToInProgressStory}
          />
        ) : (
          <ImageGenerationTab />
        )}
      </div>
    </div>
  );
}
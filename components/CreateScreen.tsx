import { useState } from 'react';
import { StoryCreationTab } from './StoryCreationTab';
import { ImageGenerationTab } from './ImageGenerationTab';
import svgPaths from '../imports/svg-atk68p6tff';

interface CreateScreenProps {
  onBack: () => void;
  onNavigateToStoryCreation: () => void;
  onNavigateToInProgressStory: (draftId: string) => void;
}

export function CreateScreen({ onBack, onNavigateToStoryCreation, onNavigateToInProgressStory }: CreateScreenProps) {
  const [activeTab, setActiveTab] = useState<'stories' | 'images'>('stories');

  return (
    <div className="bg-[#1a1b1b] h-full flex flex-col relative w-full">
      {/* Header */}
      <div className="bg-[rgba(66,66,66,0.5)] h-10 w-full relative flex-shrink-0 border-b border-[#424242]">
        {/* Back Button */}
        <button 
          onClick={onBack}
          className="absolute box-border content-stretch flex flex-row items-center justify-start left-[15px] p-0 top-[12.71px] hover:opacity-80 transition-opacity"
        >
          <div className="relative shrink-0 size-[16.99px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
              <g>
                <path
                  d={svgPaths.p1b154bc0}
                  fill="white"
                  fillOpacity="0.85"
                />
              </g>
            </svg>
          </div>
        </button>

        {/* Title */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-white text-[15px] font-medium">Create</h1>
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
            My Stories
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
            Image Generation
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
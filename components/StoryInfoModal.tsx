import svgPaths from "../imports/svg-c6g2wd331h";
import { CreatedStoryData } from '../data/stories/types';

interface StoryInfoModalProps {
  story: CreatedStoryData;
  onClose: () => void;
}

export function StoryInfoModal({ story, onClose }: StoryInfoModalProps) {
  if (!story) return null;

  // Extract story data from the actual story object
  const storyData = {
    title: story.title,
    setting: story.content.storySettings ? 
      story.content.storySettings.split('\n\n').filter(paragraph => paragraph.trim()) : 
      ["스토리 설정을 불러올 수 없습니다."],
    characterName: story.content.characterName || "Character",
    characterDescription: story.content.characterDescription ? 
      story.content.characterDescription.split('\n').filter(line => line.trim()) :
      ["캐릭터 설명을 불러올 수 없습니다."]
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-[rgba(0,0,0,0.6)] backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Container - Mobile Optimized */}
      <div className="relative w-full max-w-[380px] max-h-[calc(100vh-40px)] mx-4">
        {/* Modal Content */}
        <div className="bg-[#1a1a1a] relative rounded-lg border border-[rgba(255,255,255,0.2)] shadow-[0px_6px_16px_0px_rgba(0,0,0,0.4)] backdrop-blur-md">
          <div className="overflow-clip relative size-full">
            <div className="flex flex-col gap-2 px-4 py-4 relative w-full">
              
              {/* Header */}
              <div className="bg-[#1a1a1a] flex flex-col items-start justify-start pb-[0.625px] pt-0 px-0 relative rounded-tl-[8px] rounded-tr-[8px] w-full border-b border-[rgba(255,255,255,0.2)]">
                <div className="flex flex-col items-start justify-start p-0 relative w-full">
                  <h2 className="text-[rgba(255,255,255,0.9)] text-[16px] font-medium leading-[24px] block">
                    Story Information
                  </h2>
                </div>
              </div>

              {/* Scrollable Content */}
              <div className="max-h-[60vh] relative w-full overflow-y-auto scrollbar-hide">
                
                {/* Story Title */}
                <div className="flex flex-col items-start justify-start p-0 relative w-full mb-4 mt-2">
                  <h3 className="text-white text-[15px] font-medium leading-[24px]">
                    {storyData.title}
                  </h3>
                </div>

                {/* Divider */}
                <div className="bg-[rgba(255,255,255,0.15)] h-px w-full mb-4" />

                {/* Story Setting Section */}
                <div className="flex flex-col gap-[8px] items-start justify-start p-0 relative w-full mb-6">
                  <div className="flex flex-col items-start justify-start p-0 relative w-full">
                    <h4 className="text-[rgba(255,255,255,0.9)] text-[14px] font-medium leading-[20px]">
                      Story Setting
                    </h4>
                  </div>
                  
                  <div className="flex flex-col gap-[16px] items-start justify-start p-0 relative w-full">
                    {storyData.setting.map((paragraph, index) => (
                      <div key={index} className="flex flex-col justify-center relative w-full">
                        <p className="text-[rgba(255,255,255,0.7)] text-[13px] font-light leading-[20px] whitespace-pre-wrap">
                          {paragraph}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Divider */}
                <div className="bg-[rgba(255,255,255,0.15)] h-px w-full mb-4" />

                {/* Character Description Section */}
                <div className="flex flex-col gap-[8px] items-start justify-start p-0 relative w-full">
                  <div className="flex flex-col items-start justify-start p-0 relative w-full">
                    <h4 className="text-[rgba(255,255,255,0.9)] text-[14px] font-medium leading-[20px]">
                      Character Profile
                    </h4>
                  </div>
                  
                  <div className="flex flex-col items-start justify-start p-0 relative w-full">
                    <h5 className="text-[rgba(255,255,255,0.85)] text-[14px] font-medium leading-[22px] mb-2">
                      {storyData.characterName}
                    </h5>
                  </div>
                  
                  <div className="flex flex-col items-start justify-start p-0 relative w-full">
                    <div className="text-[rgba(255,255,255,0.7)] text-[13px] font-light leading-[20px]">
                      {storyData.characterDescription.map((line, index) => (
                        <p key={index} className="block mb-1">
                          • {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-[12px] right-[12px] flex items-center justify-center rounded w-8 h-8 hover:bg-[rgba(255,255,255,0.1)] transition-colors"
              >
                <div className="relative w-4 h-4">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                    <g>
                      <path
                        d="M12.8 4.4L11.6 3.2L8 6.8L4.4 3.2L3.2 4.4L6.8 8L3.2 11.6L4.4 12.8L8 9.2L11.6 12.8L12.8 11.6L9.2 8L12.8 4.4Z"
                        fill="rgba(255,255,255,0.7)"
                      />
                    </g>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
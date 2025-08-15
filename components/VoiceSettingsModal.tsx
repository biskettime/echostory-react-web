import { useState } from 'react';
import svgPaths from '../imports/svg-fuyxpz1u4e';

interface Voice {
  id: number;
  name: string;
  tags: string[];
  gender: 'female' | 'male';
  selected?: boolean;
}

interface VoiceSettingsModalProps {
  onClose: () => void;
  currentVoice?: string;
  onVoiceSelect?: (voiceName: string) => void;
}

export function VoiceSettingsModal({ onClose, currentVoice = "Hyewon", onVoiceSelect }: VoiceSettingsModalProps) {
  const [selectedVoice, setSelectedVoice] = useState(currentVoice);

  const voices: Voice[] = [
    { id: 1, name: "Arin", tags: ["#Shy"], gender: "female" },
    { id: 2, name: "Lina", tags: ["#Confident", "#Calm"], gender: "female" },
    { id: 3, name: "Mia", tags: ["#Chic"], gender: "female" },
    { id: 4, name: "Hyewon", tags: ["#Bright"], gender: "female", selected: true },
    { id: 5, name: "Elin", tags: ["#Fantasy", "#Knight"], gender: "female" },
    { id: 6, name: "Pierce", tags: ["#Passionate"], gender: "male" },
    { id: 7, name: "Keld", tags: ["#Confident"], gender: "male" },
    { id: 8, name: "Yunho", tags: ["#Deep", "#Calm"], gender: "male" },
    { id: 9, name: "Giros", tags: ["#Fantasy"], gender: "male" },
    { id: 10, name: "Jun", tags: ["#Gentle"], gender: "male" },
    { id: 11, name: "Hinta", tags: ["#Young"], gender: "male" },
    { id: 12, name: "Saja", tags: ["#Deep", "#Reaper"], gender: "male" }
  ];

  const handleVoiceSelect = (voice: Voice) => {
    setSelectedVoice(voice.name);
  };

  const handleConfirm = () => {
    onVoiceSelect?.(selectedVoice);
    onClose();
  };

  const handlePlayVoice = (voice: Voice) => {
    // Play voice sample functionality
    console.log(`Playing voice sample for: ${voice.name}`);
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-end justify-center">
      <div className="w-full max-w-[375px] bg-[#1f1f1f] rounded-t-lg flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="bg-[#1f1f1f] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full">
          <div className="relative size-full">
            <div className="box-border content-stretch flex flex-col items-start justify-start pb-2.5 pt-[15px] px-5 relative w-full">
              <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
                <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_KR:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-[rgba(255,255,255,0.85)] text-left w-full">
                  <p className="block leading-[24px]">Voice Settings</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Voice List Container */}
        <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-0 relative shrink-0 w-full">
          {/* Scrollable Voice List */}
          <div className="h-[350px] max-h-[350px] overflow-auto relative shrink-0 w-full">
            {voices.map((voice, index) => (
              <button
                key={voice.id}
                onClick={() => handleVoiceSelect(voice)}
                className={`absolute box-border content-stretch flex flex-row items-center justify-start left-0 px-[20.625px] py-[10.625px] right-0 rounded-[3px] hover:bg-[rgba(255,255,255,0.05)] transition-colors ${
                  selectedVoice === voice.name
                    ? 'border border-[rgba(255,255,255,0.64)] border-solid'
                    : ''
                }`}
                style={{ top: `${index * 48.81}px` }}
              >
                {/* Voice Name */}
                <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[60px]">
                  <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_KR:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14.18px] text-[rgba(255,255,255,0.85)] text-left text-nowrap">
                    <p className="block leading-[23.57px] whitespace-pre">{voice.name}</p>
                  </div>
                </div>

                {/* Voice Tags */}
                <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0">
                  <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#666666] text-[12.289px] text-left text-nowrap">
                    <p className="block leading-[20.43px] whitespace-pre">{voice.tags.join(' ')}</p>
                  </div>
                </div>

                {/* Play Button */}
                <div className="absolute box-border content-stretch flex flex-row items-center justify-center p-[0.625px] right-[18.63px] rounded-md size-[31.99px] top-[7.62px]">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePlayVoice(voice);
                    }}
                    className="box-border content-stretch flex flex-col items-center justify-start pb-[3.38px] pt-[2.37px] px-0 relative shrink-0 hover:opacity-80 transition-opacity"
                  >
                    <div className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0">
                      <div className="relative shrink-0 size-7">
                        <svg
                          className="block size-full"
                          fill="none"
                          preserveAspectRatio="none"
                          viewBox="0 0 28 28"
                        >
                          <g>
                            <path
                              d={svgPaths.p4d9eb80}
                              fill={voice.gender === 'female' ? '#E3A3D1' : '#B0CAFF'}
                            />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </button>
                </div>
              </button>
            ))}
          </div>

          {/* Select Button */}
          <div className="bg-[#dc5903] h-[31.99px] relative rounded-bl-[6px] rounded-br-[6px] shadow-[0px_2px_0px_0px_rgba(180,60,0,0.15)] shrink-0 w-full">
            <div className="flex flex-row items-center justify-center relative size-full">
              <button
                onClick={handleConfirm}
                className="box-border content-stretch flex flex-row h-[31.99px] items-center justify-center px-[15.625px] py-[0.625px] relative w-full hover:opacity-90 transition-opacity"
              >
                <div className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0">
                  <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[13.234px] text-center text-nowrap">
                    <p className="block leading-[normal] whitespace-pre">Select</p>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute box-border content-stretch flex flex-col items-start justify-start pb-[7.99px] pt-2 px-0 right-[11.99px] rounded size-[31.99px] top-[11.99px] hover:opacity-80 transition-opacity"
        >
          <div className="box-border content-stretch flex flex-row items-start justify-center p-0 relative shrink-0 w-full">
            <div className="box-border content-stretch flex flex-row items-center justify-start p-0 relative self-stretch shrink-0">
              <div className="relative shrink-0 size-4">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 16 16"
                >
                  <g>
                    <path
                      clipRule="evenodd"
                      d={svgPaths.pbe04e00}
                      fill="white"
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
  );
}
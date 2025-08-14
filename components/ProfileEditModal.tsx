import { useState } from 'react';
import svgPaths from '../imports/svg-ti3q4wobx0';

interface ProfileEditModalProps {
  onClose: () => void;
  onBack: () => void;
  currentNickname?: string;
  currentInfo?: string;
  onSave?: (nickname: string, info: string) => void;
}

export function ProfileEditModal({ 
  onClose, 
  onBack, 
  currentNickname = "Alex", 
  currentInfo = "",
  onSave 
}: ProfileEditModalProps) {
  const [nickname, setNickname] = useState(currentNickname);
  const [info, setInfo] = useState(currentInfo);

  const handleSave = () => {
    onSave?.(nickname, info);
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-end justify-center">
      <div className="w-full max-w-[428px] bg-[#1f1f1f] flex flex-col h-full">
        {/* Header */}
        <div className="bg-[#1f1f1f] relative shrink-0 w-full">
          <div
            aria-hidden="true"
            className="absolute border-[0px_0px_0.625px] border-[rgba(255,255,255,0.01)] border-solid inset-0 pointer-events-none"
          />
          
          <div className="flex flex-row items-center relative size-full">
            <div className="box-border content-stretch flex flex-row items-center justify-between pb-[16.625px] pt-4 px-[23.99px] relative w-full">
              {/* Back Button and Title */}
              <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0">
                <button
                  onClick={onBack}
                  className="box-border content-stretch flex flex-row items-center justify-center p-[4px] relative shrink-0 hover:opacity-80 transition-opacity"
                >
                  <div className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0">
                    <div className="relative shrink-0 size-4">
                      <svg
                        className="block size-full"
                        fill="none"
                        preserveAspectRatio="none"
                        viewBox="0 0 16 16"
                      >
                        <g>
                          <path
                            d={svgPaths.p2b8166b0}
                            fill="#CCCCCC"
                          />
                        </g>
                      </svg>
                    </div>
                  </div>
                </button>
                
                <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0">
                  <div className="flex flex-col font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[16.734px] text-left text-nowrap">
                    <p className="block leading-[18px] whitespace-pre">Edit Profile</p>
                  </div>
                </div>
              </div>
              
              {/* Close Button */}
              <button
                onClick={onClose}
                className="box-border content-stretch flex flex-row items-center justify-center p-[4px] relative shrink-0 hover:opacity-80 transition-opacity"
              >
                <div className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0">
                  <div className="relative shrink-0 size-5">
                    <svg
                      className="block size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 20 20"
                    >
                      <g>
                        <path
                          clipRule="evenodd"
                          d={svgPaths.p22860200}
                          fill="#CCCCCC"
                          fillRule="evenodd"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-[#1f1f1f] relative w-full flex-1">
          <div className="relative size-full">
            <div className="box-border content-stretch flex flex-col items-start justify-start p-[24px] relative w-full">
              <div className="box-border content-stretch flex flex-col gap-[19.4px] items-start justify-start pb-2 pt-[7.435px] px-0 relative shrink-0 w-full">
                
                {/* Nickname Section */}
                <div className="box-border content-stretch flex flex-col gap-[3.2px] items-start justify-start p-0 relative shrink-0 w-full">
                  {/* Label */}
                  <div className="box-border content-stretch flex flex-col items-start justify-start pb-[0.565px] pt-0 px-0 relative shrink-0 w-full">
                    <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#cccccc] text-[12.391px] text-left tracking-[0.5px] uppercase w-full">
                      <p className="block leading-[13px]">NICKNAME</p>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <div className="box-border content-stretch flex flex-col items-start justify-start pb-[8.79px] pt-0 px-0 relative shrink-0 w-full">
                    <div className="flex flex-col font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[#666666] text-[11.063px] text-left w-full">
                      <p className="block leading-[15.6px]">The name the character will call you</p>
                    </div>
                  </div>
                  
                  {/* Input Field */}
                  <div className="bg-[#2a2a2a] relative rounded-md shrink-0 w-full">
                    <div
                      aria-hidden="true"
                      className="absolute border border-[rgba(255,255,255,0.01)] border-solid inset-0 pointer-events-none rounded-md"
                    />
                    <div className="relative size-full">
                      <div className="box-border content-stretch flex flex-row-reverse items-start justify-start pl-[11.625px] pr-[11.635px] py-[4.625px] relative w-full">
                        {/* Input */}
                        <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px mr-[-0.01px] order-2 overflow-clip p-0 relative self-stretch shrink-0">
                          <div className="box-border content-stretch flex flex-col items-start justify-start overflow-auto p-0 relative shrink-0 w-full">
                            <input
                              type="text"
                              value={nickname}
                              onChange={(e) => setNickname(e.target.value)}
                              maxLength={20}
                              className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[13.234px] text-left w-full bg-transparent border-none outline-none focus:ring-2 focus:ring-[rgba(255,149,0,0.8)] rounded transition-colors"
                              style={{ lineHeight: '22px' }}
                            />
                          </div>
                        </div>
                        
                        {/* Character Count */}
                        <div className="box-border content-stretch flex flex-col items-start justify-center mr-[-0.01px] order-1 pl-1 pr-0 py-0 relative self-stretch shrink-0">
                          <div className="basis-0 box-border content-stretch flex flex-row grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0">
                            <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0">
                              <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#999999] text-[11.438px] text-left text-nowrap">
                                <p className="block leading-[18.86px] whitespace-pre">{nickname.length} / 20</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* My Information Section */}
                <div className="box-border content-stretch flex flex-col gap-[3.2px] items-start justify-start p-0 relative shrink-0 w-full">
                  {/* Label */}
                  <div className="box-border content-stretch flex flex-col items-start justify-start pb-[0.565px] pt-0 px-0 relative shrink-0 w-full">
                    <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#cccccc] text-[12.391px] text-left tracking-[0.5px] uppercase w-full">
                      <p className="block leading-[13px]">MY INFORMATION</p>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
                    <div className="flex flex-col font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[#666666] text-[11.063px] text-left w-full">
                      <p className="block leading-[15.6px]">Information the character recognizes about me</p>
                    </div>
                  </div>
                  
                  {/* Textarea */}
                  <div className="bg-[#2a2a2a] relative rounded-md shrink-0 w-full">
                    <div
                      aria-hidden="true"
                      className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-md"
                    />
                    <div className="flex flex-row justify-center relative size-full">
                      <div className="box-border content-stretch flex flex-row items-start justify-center pb-[0.625px] pt-[9.415px] px-[0.625px] relative w-full">
                        {/* Textarea */}
                        <div className="basis-0 grow h-[118px] max-h-[448px] max-w-[302.01px] min-h-[118px] min-w-px relative shrink-0">
                          <div className="max-h-inherit max-w-inherit min-h-inherit overflow-x-auto overflow-y-clip relative size-full">
                            <div className="box-border content-stretch flex flex-col h-[118px] items-start justify-start max-h-inherit max-w-inherit min-h-inherit px-[11px] py-1 relative w-full">
                              <textarea
                                value={info}
                                onChange={(e) => setInfo(e.target.value)}
                                maxLength={1000}
                                placeholder="Gender, age, and other information the character can recognize about me for more natural conversation."
                                className="box-border content-stretch flex flex-col items-start justify-start overflow-auto p-0 relative shrink-0 w-full h-full resize-none bg-transparent border-none outline-none text-[13.125px] leading-[22px] font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium text-[rgba(255,255,255,0.25)] placeholder-[rgba(255,255,255,0.25)] focus:ring-2 focus:ring-[rgba(255,149,0,0.8)] rounded transition-colors"
                              />
                            </div>
                          </div>
                        </div>
                        
                        {/* Character Count */}
                        <div className="absolute bottom-[-21.51px] box-border content-stretch flex flex-col items-start justify-start p-0 right-[-0.36px]">
                          <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#999999] text-[11.438px] text-left text-nowrap">
                            <p className="block leading-[18.86px] whitespace-pre">{info.length} / 1000</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="box-border content-stretch flex flex-row gap-[11.99px] items-start justify-end pb-0 pt-[12.59px] px-0 relative shrink-0 w-full">
                  {/* Cancel Button */}
                  <button
                    onClick={handleCancel}
                    className="bg-[rgba(255,255,255,0)] box-border content-stretch flex flex-row h-[31.99px] items-center justify-center px-[15.625px] py-[0.625px] relative rounded-md shrink-0 hover:bg-[rgba(255,255,255,0.1)] transition-colors"
                  >
                    <div
                      aria-hidden="true"
                      className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-md shadow-[0px_2px_0px_0px_rgba(255,255,255,0.04)]"
                    />
                    <div className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0">
                      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#cccccc] text-[13.234px] text-center text-nowrap">
                        <p className="block leading-[normal] whitespace-pre">Cancel</p>
                      </div>
                    </div>
                  </button>
                  
                  {/* Save Button */}
                  <button
                    onClick={handleSave}
                    className="bg-[#dc5903] box-border content-stretch flex flex-row h-[31.99px] items-center justify-center px-[15.625px] py-[0.625px] relative rounded-md shadow-[0px_2px_0px_0px_rgba(180,60,0,0.15)] shrink-0 hover:bg-[#e6850e] transition-colors"
                  >
                    <div className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0">
                      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[13.234px] text-center text-nowrap">
                        <p className="block leading-[normal] whitespace-pre">Save</p>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
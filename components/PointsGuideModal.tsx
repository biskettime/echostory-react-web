import svgPaths from '../imports/svg-ti3q4wobx0';

interface PointsGuideModalProps {
  onClose: () => void;
  onBack: () => void;
}

export function PointsGuideModal({ onClose, onBack }: PointsGuideModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-end justify-center">
      <div className="w-full max-w-[375px] bg-[#1f1f1f] flex flex-col h-full">
        {/* Header */}
        <div className="bg-[#1f1f1f] relative w-full">
          <div
            aria-hidden="true"
            className="absolute border-[0px_0px_0.625px] border-[rgba(255,255,255,0.01)] border-solid inset-0 pointer-events-none"
          />
          
          <div className="flex flex-row items-center relative w-full">
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
                    <p className="block leading-[18px] whitespace-pre">Point Usage Guide</p>
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
          <div className="relative w-full h-full">
            <div className="box-border content-stretch flex flex-col gap-[8.01px] items-start justify-start pb-2 pt-1.5 px-6 relative w-full">
              
              {/* AI Answer Generation */}
              <div className="box-border content-stretch flex flex-row items-center justify-between px-0 py-1.5 relative shrink-0 w-full">
                <div className="box-border content-stretch flex flex-col items-start justify-start pb-[0.565px] pt-0 px-0 relative shrink-0">
                  <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#cccccc] text-[12.188px] text-left text-nowrap">
                    <p className="block leading-[13px] whitespace-pre">AI Answer Generation</p>
                  </div>
                </div>
                
                <div className="bg-[rgba(76,175,80,0.1)] box-border content-stretch flex flex-col items-start justify-start px-[8.625px] py-[2.625px] relative rounded-xl shrink-0">
                  <div
                    aria-hidden="true"
                    className="absolute border border-[rgba(76,175,80,0.04)] border-solid inset-0 pointer-events-none rounded-xl"
                  />
                  <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4caf50] text-[12.695px] text-left text-nowrap">
                    <p className="block leading-[13px] whitespace-pre">5P</p>
                  </div>
                </div>
              </div>

              {/* Next Message Suggestion */}
              <div className="relative shrink-0 w-full">
                <div className="flex flex-row items-center relative size-full">
                  <div className="box-border content-stretch flex flex-row items-center justify-between px-0 py-1.5 relative w-full">
                    <div className="box-border content-stretch flex flex-col items-start justify-start pb-[0.555px] pt-0 px-0 relative shrink-0">
                      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#cccccc] text-[12.188px] text-left text-nowrap">
                        <p className="block leading-[13px] whitespace-pre">Next Message Suggestion</p>
                      </div>
                    </div>
                    
                    <div className="bg-[rgba(76,175,80,0.1)] box-border content-stretch flex flex-col items-start justify-start px-[8.625px] py-[2.625px] relative rounded-xl shrink-0">
                      <div
                        aria-hidden="true"
                        className="absolute border border-[rgba(76,175,80,0.04)] border-solid inset-0 pointer-events-none rounded-xl"
                      />
                      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4caf50] text-[12.695px] text-left text-nowrap">
                        <p className="block leading-[13px] whitespace-pre">3P</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* How to Earn Points Section */}
              <div className="bg-[#2a2a2a] rounded-lg p-4 w-full mt-4">
                <div className="text-[#cccccc] text-[13px] leading-[18px] font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif]">
                  <p className="text-[#999999] text-[11px]">
                    You can earn more points by completing daily tasks or purchasing point packages in the shop.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import svgPaths from "../imports/svg-8dcqm9n8uv";
// import imgSearchIconPng from "figma:asset/ef863f04724e3ed7ded20a0b62b98cd5a1b82d91.png";
const imgSearchIconPng = "/images/search-icon.svg";

interface ImageGenerationScreenProps {
  onBack: () => void;
  safetyMode: boolean;
  onSafetyToggle: (checked: boolean) => void;
}

export function ImageGenerationScreen({ onBack, safetyMode, onSafetyToggle }: ImageGenerationScreenProps) {
  return (
    <div className="flex flex-col h-full bg-[#1a1b1b] text-white overflow-hidden">
      {/* Header - Same as HomeScreen */}
      <div className="bg-[#1a1b1b] box-border content-stretch flex flex-row h-[41.99px] items-center justify-between left-0 w-full pl-[15px] pr-0 py-0 top-0 flex-shrink-0">
        {/* Back Button + Logo */}
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="text-white p-1">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </button>
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
          {/* Search Icon */}
          <div className="p-1 text-white">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
              <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
              <path d="m21 21-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          
          {/* Safety Toggle */}
          <div className="box-border content-stretch flex flex-row gap-[8.99px] items-center justify-start p-0 relative shrink-0">
            <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[13.125px] text-left text-nowrap">
              <p className="block leading-[22px] whitespace-pre">Safety</p>
            </div>
            <button 
              onClick={() => onSafetyToggle(!safetyMode)}
              className={`h-[13.99px] relative rounded-[34px] shrink-0 w-[35px] transition-colors ${
                safetyMode ? 'bg-[#34c759]' : 'bg-[#8e8e93]'
              }`}
            >
              <div className={`absolute bg-[#ffffff] box-border content-stretch flex flex-col items-start justify-start p-0 rounded-[10px] size-5 top-[-2.5px] transition-all ${
                safetyMode ? 'left-[18px]' : 'left-[1px]'
              }`}>
                <div className="box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 relative shrink-0 size-5">
                  <div className="relative shrink-0 size-5">
                    {safetyMode ? (
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" role="presentation" viewBox="0 0 20 20">
                        <g clipPath="url(#clip0_39_3156)">
                          <path d={svgPaths.p25566600} fill="white" />
                          <path clipRule="evenodd" d={svgPaths.p3d3c7700} fill="#62E082" fillRule="evenodd" />
                          <path d={svgPaths.p2f639d00} fill="#34C759" />
                          <path d={svgPaths.p2e4b80} fill="white" />
                          <path clipRule="evenodd" d={svgPaths.p1d410f00} fill="url(#paint0_linear_39_3156)" fillRule="evenodd" />
                          <g>
                            <mask height="4" id="mask0_39_3156" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="4" x="8" y="6">
                              <g>
                                <path d={svgPaths.p1d6d8600} fill="white" />
                              </g>
                            </mask>
                            <g mask="url(#mask0_39_3156)">
                              <path d={svgPaths.p302c8800} fill="white" />
                            </g>
                          </g>
                        </g>
                        <defs>
                          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_39_3156" x1="10.0121" x2="10.0121" y1="9.54712" y2="11.4609">
                            <stop offset="0.255208" stopColor="#34C759" />
                            <stop offset="1" stopColor="#99F2AF" />
                          </linearGradient>
                          <clipPath id="clip0_39_3156">
                            <rect fill="white" height="20" width="20" />
                          </clipPath>
                        </defs>
                      </svg>
                    ) : (
                      <div className="w-full h-full bg-[#8e8e93] rounded-full"></div>
                    )}
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto scrollbar-hide">
        <div className="box-border content-stretch flex flex-col items-start justify-start pb-[15px] pt-[30px] px-[15px] w-full">
          
          {/* Page Title */}
          <div className="w-full mb-6">
            <h1 className="text-white text-lg font-medium">Image Generation</h1>
            <p className="text-[rgba(255,255,255,0.7)] text-sm mt-2">
              Generate AI images for your stories and characters
            </p>
          </div>

          {/* Generate Image Button */}
          <div className="box-border content-stretch flex flex-row items-center justify-end mb-[15px] p-0 relative shrink-0 w-full">
            <button className="basis-0 bg-[#dc5903] grow h-[37.25px] min-h-px min-w-px relative rounded-md shadow-[0px_2px_0px_0px_rgba(180,60,0,0.15)] shrink-0">
              <div className="flex flex-row items-center justify-center relative size-full">
                <div className="box-border content-stretch flex flex-row gap-2 h-[37.25px] items-center justify-center pl-[26.625px] pr-[18.625px] py-[18.625px] relative w-full">
                  <div className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0">
                    <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[13.016px] text-center text-nowrap">
                      <p className="block leading-[normal] whitespace-pre">Generate New Image</p>
                    </div>
                  </div>
                  <div className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0">
                    <div className="relative shrink-0 size-[13.99px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                        <g>
                          <path d={svgPaths.p3a253900} fill="white" />
                          <path d={svgPaths.pa41ce00} fill="white" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </button>
          </div>

          {/* Image Generation Form */}
          <div className="w-full bg-[#282828] rounded-lg p-4 mb-4">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Image Prompt
                </label>
                <textarea
                  className="w-full bg-[#141414] border border-[#424242] rounded-md px-3 py-2 text-white text-sm placeholder:text-[rgba(255,255,255,0.5)] resize-none"
                  rows={3}
                  placeholder="Describe the image you want to generate..."
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Style
                  </label>
                  <select className="w-full bg-[#141414] border border-[#424242] rounded-md px-3 py-2 text-white text-sm">
                    <option>Anime</option>
                    <option>Realistic</option>
                    <option>Cartoon</option>
                    <option>Fantasy</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Size
                  </label>
                  <select className="w-full bg-[#141414] border border-[#424242] rounded-md px-3 py-2 text-white text-sm">
                    <option>512x512</option>
                    <option>768x768</option>
                    <option>1024x1024</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Generated Images Gallery */}
          <div className="w-full">
            <h2 className="text-white font-medium mb-4">Generated Images</h2>
            
            {/* Empty State */}
            <div className="bg-[#282828] rounded-lg p-8 text-center">
              <div className="text-[rgba(255,255,255,0.5)] mb-2">
                <svg className="w-12 h-12 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-[rgba(255,255,255,0.5)] text-sm mb-1">
                No images generated yet
              </div>
              <div className="text-[rgba(255,255,255,0.3)] text-xs">
                Click "Generate New Image" to get started
              </div>
            </div>

            {/* Future: Generated images grid will go here */}
          </div>
        </div>
      </div>
    </div>
  );
}
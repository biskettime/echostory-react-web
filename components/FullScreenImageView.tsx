import svgPaths from '../imports/svg-gnr00459mn';

interface FullScreenImageViewProps {
  imageUrl: string;
  onClose: () => void;
  onBack: () => void;
  onHome: () => void;
  onPrevious?: () => void;
  onNext?: () => void;
  currentIndex?: number;
  totalImages?: number;
  allImages?: string[];
  onImageSelect?: (index: number) => void;
}

export function FullScreenImageView({ 
  imageUrl, 
  onClose, 
  onBack, 
  onHome, 
  onPrevious, 
  onNext, 
  currentIndex, 
  totalImages,
  allImages = [],
  onImageSelect
}: FullScreenImageViewProps) {
  return (
    <div className="bg-[#000000] relative w-full h-screen overflow-hidden">
      <div className="relative w-full h-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start px-0 py-0 relative w-full h-full">
          {/* Full Screen Background Image Container */}
          <div
            className="absolute inset-0 w-full h-full"
            data-name="Container"
          >
            {/* Full Screen Background Image - Optimized for all screen sizes */}
            <div
              className="w-full h-full bg-no-repeat bg-center bg-cover"
              data-name="background"
              style={{ 
                backgroundImage: `url('${imageUrl}')`,
                backgroundPosition: 'center center',
                backgroundSize: 'cover'
              }}
            />
            
            {/* Optional: Alternative with bg-contain for full image visibility */}
            {/* <div
              className="w-full h-full bg-no-repeat bg-center bg-contain"
              data-name="background"
              style={{ 
                backgroundImage: `url('${imageUrl}')`,
                backgroundPosition: 'center center',
                backgroundSize: 'contain'
              }}
            /> */}
          </div>

          {/* Header Overlay */}
          <div className="absolute bg-[rgba(66,66,66,0.5)] h-10 left-0 right-0 top-0 z-10">
            <div
              aria-hidden="true"
              className="absolute border-[#424242] border-[0px_0px_0.625px] border-solid inset-0 pointer-events-none"
            />
            
            {/* Back Button */}
            <button
              onClick={onBack}
              className="absolute box-border content-stretch flex flex-row items-center justify-start left-[15px] p-0 top-[12.71px] hover:opacity-80 transition-opacity"
              data-name="Img - left"
            >
              <div className="relative shrink-0 size-[16.99px]" data-name="Component 1">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 17 17"
                >
                  <g id="Component 1">
                    <path
                      d={svgPaths.p1b154bc0}
                      fill="white"
                      fillOpacity="0.85"
                      id="Vector"
                    />
                  </g>
                </svg>
              </div>
            </button>

            {/* Home Button */}
            <button
              onClick={onHome}
              className="absolute box-border content-stretch flex flex-row items-center justify-start left-[36.99px] px-2.5 py-0 top-[9.19px] hover:opacity-80 transition-opacity"
              data-name="Container"
            >
              <div
                className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative shrink-0 size-[26px]"
                data-name="홈"
              >
                <div
                  className="box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 relative shrink-0 size-[26px]"
                  data-name="home-icon.svg fill"
                >
                  <div className="relative shrink-0 size-[26px]" data-name="Component 1">
                    <svg
                      className="block size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      role="presentation"
                      viewBox="0 0 26 26"
                    >
                      <g id="Component 1">
                        <path
                          clipRule="evenodd"
                          d={svgPaths.pf929200}
                          fill="#F5F6F6"
                          fillRule="evenodd"
                          id="Vector"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </button>

            {/* Eye Icon - Closed Eye for Full Screen Mode */}
            <button
              onClick={onClose}
              className="absolute box-border content-stretch flex flex-row items-center justify-start px-3 py-0 right-[39.98px] top-[12.19px] hover:opacity-80 transition-opacity"
              data-name="Container"
            >
              <div className="relative shrink-0 size-5" data-name="Component 1">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 20 20"
                >
                  <g id="Component 1">
                    <path
                      d={svgPaths.p18fe7480}
                      fill="white"
                      id="Vector"
                    />
                    <path
                      d={svgPaths.p33866f00}
                      fill="white"
                      id="Vector_2"
                    />
                  </g>
                </svg>
              </div>
            </button>

            {/* Menu Button */}
            <div
              className="absolute box-border content-stretch flex flex-col items-start justify-start pb-[5.84px] pt-[3.88px] px-[15px] right-0 top-[8.83px]"
              data-name="Component 2"
            >
              <div
                className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0"
                data-name="Img - menu"
              >
                <div className="relative shrink-0 size-[16.99px]" data-name="Component 1">
                  <svg
                    className="block size-full"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 17 17"
                  >
                    <g id="Component 1">
                      <path
                        d={svgPaths.p3fb3d600}
                        fill="white"
                        id="Vector"
                      />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Thumbnail Gallery at Bottom */}
          {allImages.length > 1 && (
            <div className="absolute bottom-[20px] left-0 right-0 z-10 px-4">
              <div className="flex justify-center">
                <div className="backdrop-blur-[5px] backdrop-filter bg-[rgba(0,0,0,0.7)] rounded-[20px] px-4 py-3 border border-[rgba(255,255,255,0.2)]">
                  <div className="flex gap-2 overflow-x-auto scrollbar-hide max-w-[300px]">
                    {allImages.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => onImageSelect?.(index)}
                        className={`relative shrink-0 w-12 h-12 rounded-lg overflow-hidden border-2 transition-all duration-200 hover:scale-105 ${
                          currentIndex === index 
                            ? 'border-[#ff9500] shadow-[0_0_8px_rgba(255,149,0,0.5)]' 
                            : 'border-[rgba(255,255,255,0.3)] hover:border-[rgba(255,255,255,0.6)]'
                        }`}
                      >
                        <div
                          className="w-full h-full bg-cover bg-center"
                          style={{ backgroundImage: `url('${image}')` }}
                        />
                        {currentIndex === index && (
                          <div className="absolute inset-0 bg-[rgba(255,149,0,0.2)]" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Bottom Close Button */}
          <button
            onClick={onClose}
            className={`absolute left-1/2 transform -translate-x-1/2 z-10 hover:opacity-80 transition-opacity ${
              allImages.length > 1 ? 'bottom-[90px]' : 'bottom-[30px]'
            }`}
            data-name="Container"
          >
            <div
              className="backdrop-blur-[5px] backdrop-filter bg-[rgba(0,0,0,0.7)] box-border content-stretch flex flex-row h-[43.99px] items-center justify-center p-[1.875px] relative rounded-[22px] shrink-0 w-11"
              data-name="Component 2"
            >
              <div
                aria-hidden="true"
                className="absolute border border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[22px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.3)]"
              />
              <div
                className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0"
                data-name="Img - close"
              >
                <div className="relative shrink-0 size-[18px]" data-name="Component 1">
                  <svg
                    className="block size-full"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 18 18"
                  >
                    <g id="Component 1">
                      <path
                        clipRule="evenodd"
                        d={svgPaths.pabf1180}
                        fill="white"
                        fillRule="evenodd"
                        id="Vector"
                      />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </button>

          {/* Image Navigation Buttons */}
          {onPrevious && onNext && totalImages && totalImages > 1 && (
            <>
              {/* Previous Button */}
              <button
                onClick={onPrevious}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 hover:opacity-80 transition-opacity"
              >
                <div className="backdrop-blur-[5px] backdrop-filter bg-[rgba(0,0,0,0.7)] rounded-full p-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </div>
              </button>

              {/* Next Button */}
              <button
                onClick={onNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 hover:opacity-80 transition-opacity"
              >
                <div className="backdrop-blur-[5px] backdrop-filter bg-[rgba(0,0,0,0.7)] rounded-full p-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>

              {/* Image Counter */}
              <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-10">
                <div className="backdrop-blur-[5px] backdrop-filter bg-[rgba(0,0,0,0.7)] rounded-full px-4 py-2">
                  <span className="text-white text-sm font-medium">
                    {currentIndex !== undefined ? currentIndex + 1 : 1} / {totalImages}
                  </span>
                </div>
              </div>
            </>
          )}

          {/* Optional: Gradient overlay for better readability of UI elements */}
          <div className="absolute inset-0 z-5 pointer-events-none">
            {/* Top gradient for header readability */}
            <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/50 to-transparent" />
            {/* Bottom gradient for close button readability */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
}
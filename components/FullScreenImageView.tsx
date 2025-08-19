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
  imageData?: Array<{ url: string; isUnlocked: boolean; index: number }>;
  onImageSelect?: (index: number) => void;
  selectedAsBackground?: string | null;
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
  imageData,
  onImageSelect,
  selectedAsBackground
}: FullScreenImageViewProps) {
  // Check if current image is locked
  const currentImageIsLocked = imageData && currentIndex !== undefined ? !imageData[currentIndex]?.isUnlocked : false;
  
  // Debug logging
  console.log('🖼️ FullScreenImageView:', {
    imageUrl,
    currentIndex,
    currentImageIsLocked,
    imageData: imageData?.[currentIndex],
    allImages
  });
  
  return (
    <div className="bg-[#000000] relative w-full h-screen overflow-hidden">
      <div className="relative w-full h-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start px-0 py-0 relative w-full h-full">
          {/* Full Screen Background Image Container */}
          <div
            className="absolute inset-0 w-full h-full"
            data-name="Container"
          >
            {/* Full Screen Background Image - Using img tag for better compatibility */}
            <div className="w-full h-full flex items-center justify-center bg-black">
              {imageUrl ? (
                <img 
                  src={imageUrl}
                  alt="Full screen image"
                  style={{ transform: 'scale(1.25)' }}
                  className={`max-w-full max-h-full object-contain ${currentImageIsLocked ? 'filter blur-[8px]' : ''}`}
                  onError={(e) => {
                    console.error('❌ Image failed to load:', imageUrl);
                    e.currentTarget.src = '/images/echostory.png';
                  }}
                  onLoad={() => {
                    console.log('✅ Image loaded successfully:', imageUrl);
                  }}
                />
              ) : (
                <div className="text-white text-center">
                  <p>이미지를 불러올 수 없습니다</p>
                  <p className="text-xs opacity-50 mt-2">URL: {imageUrl}</p>
                </div>
              )}
            </div>
            
            {/* Lock Overlay for locked images */}
            {currentImageIsLocked && (
              <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                <div className="bg-[rgba(0,0,0,0.7)] rounded-[20px] p-6 flex flex-col items-center gap-4">
                  {/* Lock Icon */}
                  <svg className="w-12 h-12 text-white opacity-85" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
                  </svg>
                  {/* Unlock Message */}
                  <div className="text-white text-center">
                    <p className="text-sm font-medium mb-1">이미지가 잠겨있습니다</p>
                    <p className="text-xs opacity-75">채팅을 계속하여 잠금을 해제하세요</p>
                    <p className="text-xs opacity-75 mt-1">5개 메시지마다 새 이미지 해금</p>
                  </div>
                </div>
              </div>
            )}
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
          {(imageData?.length > 0 || allImages.length > 0) && (
            <div className="absolute bottom-[35px] left-0 right-0 z-10 px-4">
              <div className="flex justify-center">
                <div className="backdrop-blur-[5px] backdrop-filter bg-[rgba(0,0,0,0.7)] rounded-[20px] px-5 py-4 border border-[rgba(255,255,255,0.2)]">
                  <div className="flex gap-3 overflow-x-auto" style={{ maxWidth: '90vw', maxHeight: '80px' }}>
                    <style dangerouslySetInnerHTML={{ __html: `
                      .overflow-x-auto::-webkit-scrollbar {
                        display: none;
                      }
                      .overflow-x-auto {
                        -ms-overflow-style: none;
                        scrollbar-width: none;
                      }
                    ` }} />
                    {imageData ? imageData.map((imgData, index) => (
                      <button
                        key={index}
                        onClick={() => onImageSelect?.(index)}
                        className={`relative shrink-0 w-[60px] h-[60px] rounded-lg overflow-hidden border-2 transition-all duration-200 hover:scale-105 ${
                          currentIndex === index 
                            ? 'border-[#ff9500] shadow-[0_0_8px_rgba(255,149,0,0.5)]' 
                            : 'border-[rgba(255,255,255,0.3)] hover:border-[rgba(255,255,255,0.6)]'
                        }`}
                      >
                        <img
                          src={imgData.url}
                          alt={`Thumbnail ${index + 1}`}
                          className={`w-full h-full object-cover ${!imgData.isUnlocked ? 'filter blur-[2px]' : ''}`}
                          loading="lazy"
                          onError={(e) => {
                            console.error('❌ Thumbnail failed to load:', imgData.url);
                            e.currentTarget.src = '/images/echostory.png';
                          }}
                          onLoad={() => {
                            console.log('✅ Thumbnail loaded:', index, imgData.url);
                          }}
                        />
                        {/* Lock icon for locked images */}
                        {!imgData.isUnlocked && (
                          <div className="absolute inset-0 bg-[rgba(0,0,0,0.6)] flex items-center justify-center">
                            <svg className="w-4 h-4 text-white opacity-75" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
                            </svg>
                          </div>
                        )}
                        {currentIndex === index && imgData.isUnlocked && (
                          <div className="absolute inset-0 bg-[rgba(255,149,0,0.2)]" />
                        )}
                        {/* Background indicator */}
                        {selectedAsBackground === imgData.url && imgData.isUnlocked && (
                          <div className="absolute top-1 right-1 bg-[rgba(0,0,0,0.7)] rounded-full p-1">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
                            </svg>
                          </div>
                        )}
                      </button>
                    )) : allImages.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => onImageSelect?.(index)}
                        className={`relative shrink-0 w-[60px] h-[60px] rounded-lg overflow-hidden border-2 transition-all duration-200 hover:scale-105 ${
                          currentIndex === index 
                            ? 'border-[#ff9500] shadow-[0_0_8px_rgba(255,149,0,0.5)]' 
                            : 'border-[rgba(255,255,255,0.3)] hover:border-[rgba(255,255,255,0.6)]'
                        }`}
                      >
                        <img
                          src={image}
                          alt={`Thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            console.error('❌ Thumbnail failed to load:', image);
                            e.currentTarget.src = '/images/echostory.png';
                          }}
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

        </div>
      </div>
    </div>
  );
}
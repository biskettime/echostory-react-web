import { useState, useRef, useEffect } from 'react';
import { ArrowLeft, ChevronLeft, ChevronRight, Heart, Bookmark } from 'lucide-react';
import { getStory, initializeSampleStories, getCreatorById, updateStory } from '../data/stories';
import { ProfileCreationModal } from './ProfileCreationModal';
import { StoryEditModal } from './StoryEditModal';
import { CreatorProfileModal } from './CreatorProfileModal';
import { SafetyToggle } from './SafetyToggle';
import svgPaths from "../imports/svg-bsii91cs4v";
import lockSvgPaths from "../imports/svg-p3farl1j9x";

interface Profile {
  id: string;
  name: string;
  info: string;
}

interface StoryDetailScreenProps {
  storyId: string;
  onBack: () => void;
  onStartChat: (profileName?: string) => void;
  safetyMode: boolean;
  onSafetyToggle: (checked: boolean) => void;
  onFollowChange?: (creatorId: number, isFollowing: boolean) => void;
}

export function StoryDetailScreen({ storyId, onBack, onStartChat, safetyMode, onSafetyToggle, onFollowChange }: StoryDetailScreenProps) {
  // Initialize sample stories
  useEffect(() => {
    initializeSampleStories();
  }, []);

  const story = getStory(storyId);
  const creator = story ? getCreatorById(story.creatorId) : null;
  
  // Gallery state
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentThumbnailIndex, setCurrentThumbnailIndex] = useState(0);
  const thumbnailContainerRef = useRef<HTMLDivElement>(null);
  
  // Profile states
  const [profiles, setProfiles] = useState<Profile[]>([
    { id: 'default', name: 'Alex', info: '' }
  ]);
  const [selectedProfileId, setSelectedProfileId] = useState('default');
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  
  // Story edit states
  const [showStoryEditModal, setShowStoryEditModal] = useState(false);
  
  // Creator profile modal state
  const [showCreatorProfile, setShowCreatorProfile] = useState(false);
  
  // Like and favorite states
  const [isLiked, setIsLiked] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);
  
  // Character image loading
  const [characterImageSrc, setCharacterImageSrc] = useState<string>('');
  const [characterImages, setCharacterImages] = useState<string[]>([]);
  const [isCharacterImagesLoaded, setIsCharacterImagesLoaded] = useState(false);

  // Load like and favorite status from localStorage
  useEffect(() => {
    if (storyId) {
      const likedStories = JSON.parse(localStorage.getItem('likedStories') || '[]');
      const favoritedStories = JSON.parse(localStorage.getItem('favoritedStories') || '[]');
      
      setIsLiked(likedStories.includes(storyId));
      setIsFavorited(favoritedStories.includes(storyId));
    }
  }, [storyId]);
  
  const [storyEditData, setStoryEditData] = useState(() => {
    if (story) {
      return {
        storySetting: story.content.storySettings || '',
        characterName: story.content.characterName || '',
        characterDescription: story.content.characterDescription || ''
      };
    }
    return {
      storySetting: '',
      characterName: '',
      characterDescription: ''
    };
  });

  // Update story edit data when story changes
  useEffect(() => {
    if (story) {
      setStoryEditData({
        storySetting: story.content.storySettings || '',
        characterName: story.content.characterName || '',
        characterDescription: story.content.characterDescription || ''
      });
    }
  }, [story]);

  // Load all character images (1~10)
  useEffect(() => {
    const loadAllCharacterImages = async () => {
      setIsCharacterImagesLoaded(false); // Start loading
      
      if (!story?.content.characterName) {
        setCharacterImages([]);
        setCharacterImageSrc('');
        setIsCharacterImagesLoaded(true); // Loading complete (no character)
        return;
      }
      
      const characterName = story.content.characterName;
      const firstName = characterName.split(' ')[0];
      
      // Map Korean names to English equivalents
      const nameMapping: { [key: string]: string } = {
        '지훈': 'Jihoon',
        '지연': 'Jiyeon',
        '민준': 'Minjun',
        '하루카': 'Haruka',
        '지원': 'Jiwon',
        '소희': 'Sohee',
        '서연': 'Seoyeon',
        '하영': 'Hayoung',
        '미나': 'Mina',
        '수연': 'Suyeon',
        '소연': 'Soyeon',
        '유키': 'Yuki',
        // New male characters
        '태현': 'Taehyun',
        '현우': 'Hyunwoo',
        '승민': 'Seungmin',
        '정우': 'Jungwoo',
        '동현': 'Donghyun'
      };
      
      const mappedName = nameMapping[firstName] || firstName;
      const sanitizedName = mappedName
        .replace(/[^a-zA-Z0-9]/g, '_')
        .replace(/\s+/g, '_')
        .toLowerCase()
        .replace(/^./, str => str.toUpperCase());
      
      console.log(`🔍 StoryDetail - Loading images for character: "${characterName}" → "${mappedName}" → "${sanitizedName}"`);
      
      const foundImages: string[] = [];
      
      // Try to find all character images (1~10)
      for (let i = 1; i <= 10; i++) {
        const imagePath = `/data/ch_img/${sanitizedName}_${i}.png`;
        try {
          const response = await fetch(imagePath, { method: 'HEAD' });
          if (response.ok) {
            console.log(`✅ StoryDetail - Found character image ${i}:`, imagePath);
            foundImages.push(imagePath);
          }
        } catch (error) {
          // Continue to next image
        }
      }
      
      console.log(`📸 StoryDetail - Total character images found: ${foundImages.length}`, foundImages);
      setCharacterImages(foundImages);
      
      // Set first image as main character image
      if (foundImages.length > 0) {
        setCharacterImageSrc(foundImages[0]);
      } else {
        setCharacterImageSrc('');
        console.log('❌ StoryDetail - No character images found for:', characterName);
      }
      
      setIsCharacterImagesLoaded(true); // Loading complete
    };
    
    loadAllCharacterImages();
  }, [story]);

  const selectedProfile = profiles.find(p => p.id === selectedProfileId);

  if (!story) {
    return (
      <div className="flex items-center justify-center h-full bg-[#1a1b1b] text-white">
        <p>Story not found</p>
      </div>
    );
  }

  // Gallery images from story data with fallback
  const storyImages = story?.media.storyImages || [];
  const thumbnailImage = story?.media.thumbnailImage;
  
  // Use only character images if they exist, otherwise use story images
  // Wait for character image loading to complete before showing any images
  let finalAllImages: string[] = [];
  
  if (!isCharacterImagesLoaded) {
    // Still loading character images, don't show any images yet
    finalAllImages = [];
    console.log(`⏳ StoryDetail - Still loading character images, showing no images yet`);
  } else if (characterImages.length > 0) {
    // Character images loaded and found, use ONLY character images
    finalAllImages = [...characterImages];
    console.log(`📸 StoryDetail - Using only character images (${characterImages.length} found):`, characterImages);
  } else {
    // Character images loaded but none found, use story images and fallback to default if needed
    const storyAndThumbnailImages = [
      ...storyImages,
      ...(thumbnailImage && !storyImages.includes(thumbnailImage) ? [thumbnailImage] : [])
    ];
    finalAllImages = storyAndThumbnailImages.length > 0 ? storyAndThumbnailImages : ['/images/sample.png'];
    console.log(`📸 StoryDetail - No character images found, using story images:`, finalAllImages);
  }
  
  console.log('StoryDetailScreen Debug:', {
    storyId,
    characterName: story?.content.characterName,
    isCharacterImagesLoaded,
    characterImagesCount: characterImages.length,
    characterImages: characterImages.length > 0 ? characterImages : 'None',
    finalImagesCount: finalAllImages.length,
    finalAllImages,
    usingOnlyCharacterImages: isCharacterImagesLoaded && characterImages.length > 0,
    willShowSampleImage: finalAllImages.includes('/images/sample.png'),
    loadingState: !isCharacterImagesLoaded ? 'Loading character images...' : 'Loaded'
  });

  // Force fallback to sample.png if character-*.svg detected (but keep character images)
  const safeAllImages = finalAllImages.map(img => {
    if (img && img.startsWith('/data/ch_img/')) {
      return img; // Keep character images as-is
    }
    return img && img.includes('character-') ? '/images/sample.png' : img;
  });
  
  // Only create gallery images if character image loading is complete
  const galleryImages = !isCharacterImagesLoaded ? [] : safeAllImages.map((url, index) => ({
    id: index,
    url: url,
    isSelected: index === currentThumbnailIndex,
    isUnlocked: true // All images are unlocked for user's own stories
  }));

  // Check if current image is locked
  const currentImageIsLocked = !galleryImages[currentImageIndex]?.isUnlocked;

  // Auto-scroll effect when thumbnail selection changes
  useEffect(() => {
    scrollThumbnailIntoView(currentThumbnailIndex);
  }, [currentThumbnailIndex]);

  const handlePreviousImage = () => {
    if (currentImageIndex > 0) {
      const newIndex = currentImageIndex - 1;
      setCurrentImageIndex(newIndex);
      setCurrentThumbnailIndex(newIndex);
      scrollThumbnailIntoView(newIndex);
    }
  };

  const handleNextImage = () => {
    if (currentImageIndex < galleryImages.length - 1) {
      const newIndex = currentImageIndex + 1;
      setCurrentImageIndex(newIndex);
      setCurrentThumbnailIndex(newIndex);
      scrollThumbnailIntoView(newIndex);
    }
  };

  const scrollThumbnailIntoView = (index: number) => {
    if (thumbnailContainerRef.current) {
      const container = thumbnailContainerRef.current;
      const thumbnailWidth = 64.58 + 8; // thumbnail width + gap
      const containerWidth = container.offsetWidth;
      const scrollLeft = index * thumbnailWidth - containerWidth / 2 + thumbnailWidth / 2;
      
      container.scrollTo({
        left: Math.max(0, scrollLeft),
        behavior: 'smooth'
      });
    }
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentImageIndex(index);
    setCurrentThumbnailIndex(index);
    scrollThumbnailIntoView(index);
  };

  const handleUnlockImage = () => {
    // Here you would typically handle the unlock logic
    console.log('Unlock image requested');
  };

  const handleCreateProfile = (profileData: { name: string; info: string }) => {
    const newProfile: Profile = {
      id: Date.now().toString(),
      name: profileData.name,
      info: profileData.info
    };
    setProfiles(prev => [...prev, newProfile]);
    setSelectedProfileId(newProfile.id);
    setShowProfileModal(false);
  };

  const handleProfileSelect = (profileId: string) => {
    if (profileId === 'add-new') {
      console.log('Opening profile modal from dropdown');
      setShowProfileModal(true);
    } else {
      setSelectedProfileId(profileId);
    }
    setShowProfileDropdown(false);
  };

  const handleStoryEdit = () => {
    setShowStoryEditModal(true);
  };

  const handleStoryEditSave = (editedData: { storySetting: string; characterName: string; characterDescription: string }) => {
    // Update local state
    setStoryEditData(editedData);
    
    // Update the actual story in the database
    if (story) {
      const updatedStoryData = {
        ...story,
        content: {
          ...story.content,
          storySettings: editedData.storySetting,
          characterName: editedData.characterName,
          characterDescription: editedData.characterDescription
        }
      };
      
      const updatedStory = updateStory(storyId, updatedStoryData);
      if (updatedStory) {
        console.log('스토리 업데이트 성공:', updatedStory.id);
      } else {
        console.error('스토리 업데이트 실패');
      }
    }
    
    // 저장 후 모달만 닫고 스토리 상세페이지에 머물기
    setShowStoryEditModal(false);
  };

  const handleStartChatClick = () => {
    const profileName = selectedProfile?.name;
    onStartChat(profileName);
  };

  const handleLikeToggle = () => {
    const likedStories = JSON.parse(localStorage.getItem('likedStories') || '[]');
    let updatedLikedStories;
    
    if (isLiked) {
      // Remove from liked stories
      updatedLikedStories = likedStories.filter((id: string) => id !== storyId);
    } else {
      // Add to liked stories
      updatedLikedStories = [...likedStories, storyId];
    }
    
    localStorage.setItem('likedStories', JSON.stringify(updatedLikedStories));
    setIsLiked(!isLiked);
  };

  const handleFavoriteToggle = () => {
    const favoritedStories = JSON.parse(localStorage.getItem('favoritedStories') || '[]');
    let updatedFavoritedStories;
    
    if (isFavorited) {
      // Remove from favorited stories
      updatedFavoritedStories = favoritedStories.filter((id: string) => id !== storyId);
    } else {
      // Add to favorited stories
      updatedFavoritedStories = [...favoritedStories, storyId];
    }
    
    localStorage.setItem('favoritedStories', JSON.stringify(updatedFavoritedStories));
    setIsFavorited(!isFavorited);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (showProfileDropdown) {
        setShowProfileDropdown(false);
      }
    };

    if (showProfileDropdown) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [showProfileDropdown]);

  return (
    <div className="bg-[#1a1b1b] relative overflow-hidden">
      <div className="mobile-container mx-auto h-full relative">
        
        {/* Fixed Header */}
        <div className="relative bg-[#1a1b1b] h-10 w-full z-30 flex-shrink-0 border-b border-[rgba(66,66,66,1)] sticky top-0">
          {/* Back Button */}
          <button 
            onClick={onBack} 
            className="absolute left-[15px] top-1/2 transform -translate-y-1/2 flex items-center justify-center hover:opacity-80 transition-opacity"
          >
            <div className="w-[16.99px] h-[16.99px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                <g>
                  <path d={svgPaths.p1b154bc0} fill="rgba(255,255,255,0.85)" />
                </g>
              </svg>
            </div>
          </button>
          
          {/* Home Button */}
          <button 
            onClick={onBack} 
            className="absolute left-[52px] top-1/2 transform -translate-y-1/2 flex items-center justify-center hover:opacity-80 transition-opacity"
          >
            <div className="w-[26px] h-[26px] overflow-hidden">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" role="presentation" viewBox="0 0 26 26">
                <g>
                  <path
                    clipRule="evenodd"
                    d={svgPaths.pf929200}
                    fill="#F5F6F6"
                    fillRule="evenodd"
                  />
                </g>
              </svg>
            </div>
          </button>
          
          {/* Title */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <span className="text-[rgba(255,255,255,0.85)] text-[13.125px] font-medium leading-[22px] whitespace-nowrap">
              Story Details
            </span>
          </div>

          {/* Like and Favorite Buttons */}
          <div className="absolute right-[15px] top-1/2 transform -translate-y-1/2 flex items-center gap-3">
            {/* Favorite Button */}
            <button
              onClick={handleFavoriteToggle}
              className="flex items-center justify-center hover:opacity-80 transition-opacity"
            >
              <Bookmark 
                size={20} 
                color={isFavorited ? "#ff9500" : "rgba(255,255,255,0.85)"} 
                fill={isFavorited ? "#ff9500" : "none"}
              />
            </button>
            
            {/* Like Button */}
            <button
              onClick={handleLikeToggle}
              className="flex items-center justify-center hover:opacity-80 transition-opacity"
            >
              <Heart 
                size={20} 
                color={isLiked ? "#ff4757" : "rgba(255,255,255,0.85)"} 
                fill={isLiked ? "#ff4757" : "none"}
              />
            </button>
          </div>
        </div>

        {/* Scrollable Content with proper mobile height */}
        <div className="h-[calc(100vh-10rem)] overflow-y-auto scrollbar-hide">
          <div className="px-[15px] pt-4 pb-4 space-y-6">
            
            {/* Image Gallery Section */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative w-full h-[400px] rounded-md overflow-hidden">
                {!isCharacterImagesLoaded ? (
                  // Loading state - show loading indicator
                  <div className="absolute inset-0 bg-[#2a2a2a] flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-2"></div>
                      <p className="text-sm opacity-70">Loading images...</p>
                    </div>
                  </div>
                ) : (
                  // Images loaded - show gallery
                  <div
                    className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-300 ${
                      currentImageIsLocked ? 'filter blur-[6px]' : ''
                    }`}
                    style={{ 
                      backgroundImage: `url('${galleryImages[currentImageIndex]?.url || '/images/sample.png'}')`,
                      backgroundColor: '#2a2a2a' // Fallback background color
                    }}
                    onError={(e) => {
                      console.log('Image load error, using fallback');
                      const target = e.target as HTMLElement;
                      target.style.backgroundImage = "url('/images/sample.png')";
                    }}
                  >
                    {/* Additional fallback: show sample.png as img if background fails */}
                    {(!galleryImages[currentImageIndex]?.url || galleryImages[currentImageIndex]?.url === '/images/sample.png') && (
                      <img 
                        src="/images/sample.png" 
                        alt="Story image" 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          console.log('Fallback image also failed to load');
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                    )}
                  </div>
                )}
                
                {/* Lock Overlay - Only show when current image is locked */}
                {currentImageIsLocked && (
                  <>
                    {/* Dark overlay background */}
                    <div className="absolute inset-0 bg-[rgba(0,0,0,0.6)] rounded-md" />
                    
                    {/* Lock content */}
                    <div className="absolute bottom-[40.02%] box-border content-stretch flex flex-col gap-2 items-center justify-center left-1/4 p-0 right-1/4 top-[40.02%] z-10">
                      {/* Lock Icon */}
                      <div className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0">
                        <div className="relative shrink-0 size-[30px]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
                            <g>
                              <path
                                d={lockSvgPaths.p3032d100}
                                fill="white"
                              />
                            </g>
                          </svg>
                        </div>
                      </div>
                      
                      {/* Message */}
                      <div className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0">
                        <div className="[text-shadow:rgba(0,0,0,0.6)_0px_0px_10px] flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[22px] not-italic relative shrink-0 text-[13.125px] text-[rgba(255,255,255,0.85)] text-center text-nowrap whitespace-pre">
                          <p className="block mb-0">The lock will be released when you meet the</p>
                          <p className="block">conditions set by the creator.</p>
                        </div>
                      </div>
                      
                      {/* Unlock Button */}
                      <button
                        onClick={handleUnlockImage}
                        className="bg-[#dc5903] box-border content-stretch flex flex-row h-[31.99px] items-center justify-center px-[15.625px] py-[0.625px] relative rounded-md shadow-[0px_2px_0px_0px_rgba(180,60,0,0.15)] shrink-0 hover:bg-[#e6850e] transition-colors"
                      >
                        <div className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0">
                          <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[13.125px] text-center text-nowrap">
                            <p className="block leading-[normal] whitespace-pre">Unlock</p>
                          </div>
                        </div>
                      </button>
                    </div>
                  </>
                )}
                
                {/* Gallery Navigation Arrows - Only show when not locked */}
                {!currentImageIsLocked && (
                  <div className="absolute inset-0 flex items-center justify-between px-2.5">
                    {/* Left Arrow */}
                    <button 
                      onClick={handlePreviousImage}
                      disabled={currentImageIndex === 0}
                      className={`bg-[rgba(0,0,0,0.5)] w-9 h-9 rounded-[18px] flex items-center justify-center hover:bg-[rgba(0,0,0,0.7)] transition-colors ${
                        currentImageIndex === 0 ? 'opacity-30 cursor-not-allowed' : ''
                      }`}
                    >
                      <div className="w-[18px] h-[18px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                          <g>
                            <path d={svgPaths.p22c93800} fill="white" />
                          </g>
                        </svg>
                      </div>
                    </button>
                    
                    {/* Right Arrow */}
                    <button 
                      onClick={handleNextImage}
                      disabled={currentImageIndex >= galleryImages.length - 1}
                      className={`bg-[rgba(0,0,0,0.5)] w-9 h-9 rounded-[18px] flex items-center justify-center hover:bg-[rgba(0,0,0,0.7)] transition-colors ${
                        currentImageIndex >= galleryImages.length - 1 ? 'opacity-30 cursor-not-allowed' : ''
                      }`}
                    >
                      <div className="w-[18px] h-[18px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                          <g>
                            <path d={svgPaths.p2c41580} fill="white" />
                          </g>
                        </svg>
                      </div>
                    </button>
                  </div>
                )}
                
                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-[rgba(0,0,0,0.5)] px-3 py-1 rounded-xl">
                    <span className="text-white text-[11.063px] font-light leading-[18.86px] whitespace-nowrap">
                      {currentImageIndex + 1} / {galleryImages.length}
                    </span>
                  </div>
                </div>
              </div>

              {/* Thumbnail Gallery with Smooth Scrolling - Only show when images are loaded */}
              {isCharacterImagesLoaded && galleryImages.length > 0 && (
              <div className="w-full relative">
                {/* Left Arrow for Thumbnails */}
                <button 
                  onClick={() => {
                    if (currentThumbnailIndex > 0) {
                      handleThumbnailClick(currentThumbnailIndex - 1);
                    }
                  }}
                  disabled={currentThumbnailIndex === 0}
                  className={`absolute left-0 top-1/2 transform -translate-y-1/2 z-20 bg-[rgba(0,0,0,0.8)] w-9 h-9 rounded-full flex items-center justify-center hover:bg-[rgba(0,0,0,0.95)] transition-all duration-200 shadow-lg ${
                    currentThumbnailIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:scale-105'
                  }`}
                >
                  <ChevronLeft className="w-5 h-5 text-white" />
                </button>

                {/* Right Arrow for Thumbnails */}
                <button 
                  onClick={() => {
                    if (currentThumbnailIndex < galleryImages.length - 1) {
                      handleThumbnailClick(currentThumbnailIndex + 1);
                    }
                  }}
                  disabled={currentThumbnailIndex >= galleryImages.length - 1}
                  className={`absolute right-0 top-1/2 transform -translate-y-1/2 z-20 bg-[rgba(0,0,0,0.8)] w-9 h-9 rounded-full flex items-center justify-center hover:bg-[rgba(0,0,0,0.95)] transition-all duration-200 shadow-lg ${
                    currentThumbnailIndex >= galleryImages.length - 1 ? 'opacity-30 cursor-not-allowed' : 'hover:scale-105'
                  }`}
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>

                {/* Thumbnails Container with Auto-Scroll */}
                <div 
                  ref={thumbnailContainerRef}
                  className="flex space-x-2 overflow-x-auto scrollbar-hide p-1 mx-12 scroll-smooth"
                  style={{ scrollBehavior: 'smooth' }}
                >
                  {galleryImages.map((image, index) => (
                    <button
                      key={image.id}
                      onClick={() => handleThumbnailClick(index)}
                      className={`relative flex-shrink-0 w-[64.58px] h-[64.58px] rounded-lg overflow-hidden transition-all duration-300 ${
                        index === currentThumbnailIndex 
                          ? 'ring-2 ring-[#dc5903] scale-110 shadow-lg' 
                          : 'hover:scale-105 hover:ring-1 hover:ring-[rgba(255,255,255,0.3)]'
                      }`}
                    >
                      <div
                        className={`absolute inset-0 bg-cover bg-center rounded-lg ${
                          !image.isUnlocked ? 'filter blur-[2px]' : ''
                        }`}
                        style={{ backgroundImage: `url('${image.url || '/images/sample.png'}')` }}
                        onError={(e) => {
                          const target = e.target as HTMLElement;
                          target.style.backgroundImage = "url('/images/sample.png')";
                        }}
                      />
                      
                      {/* Locked Overlay */}
                      {!image.isUnlocked && (
                        <div className="absolute inset-0 bg-[rgba(0,0,0,0.6)] rounded-lg flex items-center justify-center">
                          <div className="w-[20px] h-[20px]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
                              <g>
                                <path
                                  d={lockSvgPaths.p3032d100}
                                  fill="rgba(255,255,255,0.8)"
                                />
                              </g>
                            </svg>
                          </div>
                        </div>
                      )}
                      
                      {/* Selection Overlay */}
                      {index === currentThumbnailIndex && image.isUnlocked && (
                        <div className="absolute inset-0 bg-[rgba(220,89,3,0.1)] rounded-lg" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
              )}
            </div>

            {/* Story Information Section */}
            <div className="space-y-4">
              {/* Story Title */}
              <div>
                <h1 className="text-[22.313px] font-light text-white leading-[37.71px] whitespace-nowrap">
                  {story?.title}
                </h1>
              </div>

              {/* Story Description */}
              <div>
                <p className="text-[14.875px] font-light text-[rgba(255,255,255,0.8)] leading-[25.14px]">
                  {story?.introduction.introduction}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 pt-1">
                {story?.introduction.tags.map((tag, index) => (
                  <div key={index} className="bg-[rgba(0,0,0,0.5)] px-1.5 py-[3.18px] rounded">
                    <span className="text-[#ff9500] text-[12.289px] font-light leading-[20.43px]">{tag}</span>
                  </div>
                ))}
              </div>

              {/* Creator Info */}
              <div className="pt-1 pb-2">
                {creator ? (
                  <div className="flex items-center gap-3">
                    {/* Creator Profile Image */}
                    <button
                      onClick={() => setShowCreatorProfile(true)}
                      className="w-10 h-10 rounded-full overflow-hidden bg-[#3a3a3a] flex-shrink-0 hover:ring-2 hover:ring-[#ff9500] transition-all"
                    >
                      <img 
                        src={creator.profileImage || '/images/creator.png'} 
                        alt={creator.displayName}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback to creator.png if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.src = '/images/creator.png';
                        }}
                      />
                    </button>
                    
                    {/* Creator Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setShowCreatorProfile(true)}
                          className="text-white text-[14.18px] font-medium leading-[23.57px] hover:text-[#ff9500] transition-colors truncate text-left"
                        >
                          {creator.displayName}
                        </button>
                        {creator.badges && creator.badges.includes('Verified') && (
                          <div className="w-4 h-4 bg-[#ff9500] rounded-full flex items-center justify-center flex-shrink-0">
                            <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        )}
                      </div>
                      <div className="flex items-center gap-4 mt-1">
                        <span className="text-[#808080] text-[12px] leading-[20px]">
                          {creator.handle}
                        </span>
                        <span className="text-[#808080] text-[12px] leading-[20px]">
                          {creator.stats.followers.toLocaleString()} followers
                        </span>
                        <span className="text-[#808080] text-[12px] leading-[20px]">
                          {creator.stats.totalStories} stories
                        </span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <a
                    className="text-[#808080] text-[14.18px] font-medium leading-[23.57px] hover:text-[#ff9500] transition-colors"
                    href="#"
                  >
                    {story?.creatorHandle}
                  </a>
                )}
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-[rgba(255,255,255,0.15)]" />

            {/* Profile Section */}
            <div className="bg-[#2a2a2a] rounded-xl p-5 space-y-4">
              <div>
                <h2 className="text-white text-[15px] font-medium leading-[25.14px]">
                  My Chat Profile
                </h2>
              </div>
              
              <div className="flex items-center gap-3">
                {/* Profile Dropdown */}
                <div className="flex-1 relative">
                  <div className="bg-[#3a3a3a] border border-[#4a4a4a] rounded-md h-8">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowProfileDropdown(!showProfileDropdown);
                      }}
                      className="w-full h-full flex items-center justify-between px-3 hover:bg-[#404041] transition-colors"
                    >
                      <span className="text-white text-[13.234px] font-medium leading-[30px] truncate">
                        {selectedProfile?.name || 'Select Profile'}
                      </span>
                      <div className="w-3 h-3 ml-2 flex-shrink-0">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                          <g>
                            <path d={svgPaths.p1293b00} fill="rgba(255,255,255,0.25)" />
                          </g>
                        </svg>
                      </div>
                    </button>

                    {/* Dropdown Menu */}
                    {showProfileDropdown && (
                      <div className="absolute bg-[#3b3b3c] border border-[#4a4a4a] rounded-md shadow-lg top-full left-0 right-0 mt-1 py-1 z-50 max-h-40 overflow-y-auto">
                        {profiles.map((profile) => (
                          <button
                            key={profile.id}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleProfileSelect(profile.id);
                            }}
                            className="w-full px-3 py-2 text-left text-white text-[13.234px] hover:bg-[#404041] transition-colors truncate"
                          >
                            {profile.name}
                          </button>
                        ))}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            console.log('Add new profile clicked from dropdown');
                            handleProfileSelect('add-new');
                          }}
                          className="w-full px-3 py-2 text-left text-[#ff9500] text-[13.234px] hover:bg-[#404041] transition-colors border-t border-[#4a4a4a] mt-1 pt-2"
                        >
                          + New Chat Profile
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={handleStoryEdit}
                    className="bg-[#3a3a3a] border border-[#4a4a4a] rounded-md px-4 h-8 hover:bg-[#404040] transition-colors shadow-[0px_2px_0px_0px_rgba(255,255,255,0.04)]"
                  >
                    <span className="text-white text-[13.234px] font-medium">Edit</span>
                  </button>
                  
                  <button className="bg-[#3a3a3a] border border-[#4a4a4a] rounded-md px-4 h-8 hover:bg-[#404040] transition-colors shadow-[0px_2px_0px_0px_rgba(255,255,255,0.04)]">
                    <span className="text-white text-[13.234px] font-medium">Delete</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Story Setting Section */}
            <div className="space-y-4">
              <div>
                <h3 className="text-white text-[15.805px] font-light leading-[26.71px]">
                  Story Settings
                </h3>
              </div>

              <div className="space-y-5">
                {storyEditData.storySetting.split('\n\n').map((paragraph, index) => (
                  <div key={index}>
                    <p className="text-[rgba(255,255,255,0.7)] text-[13.016px] font-light leading-[22px] whitespace-pre-wrap">
                      {paragraph}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Character Description Section */}
            <div className="space-y-4">
              <div>
                <h3 className="text-white text-[15.805px] font-light leading-[26.71px]">
                  Character Description
                </h3>
              </div>

              <div className="space-y-1">
                <div>
                  <p className="text-[rgba(255,255,255,0.8)] text-[12.906px] font-light leading-[22px]">
                    • {storyEditData.characterName}
                  </p>
                </div>
                
                <div className="space-y-1">
                  {storyEditData.characterDescription.split('\n').map((line, index) => (
                    <p key={index} className="text-[rgba(255,255,255,0.7)] text-[13.125px] font-light leading-[22px]">
                      - {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fixed Bottom Button Container - Enhanced for mobile */}
        <div className="fixed bottom-0 left-0 right-0 bg-[rgba(26,27,27,0.98)] backdrop-blur-sm z-50 border-t border-[rgba(255,255,255,0.1)] safe-area-inset">
          <div className="mobile-container mx-auto">
            <div className="flex items-center px-[15px] py-3 gap-2.5">
              {/* Edit Button */}
              <button
                onClick={handleStoryEdit}
                className="bg-[rgba(255,255,255,0.1)] border border-[#444444] rounded-lg w-10 h-10 flex items-center justify-center hover:bg-[rgba(255,255,255,0.15)] transition-colors shadow-[0px_2px_0px_0px_rgba(255,255,255,0.04)]"
              >
                <svg className="w-[13.99px] h-[13.99px]" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                  <g>
                    <path d="M9.5 2.5L11.5 4.5L4.5 11.5H2.5V9.5L9.5 2.5Z" fill="white" stroke="white" strokeWidth="1" strokeLinejoin="round"/>
                  </g>
                </svg>
              </button>

              {/* Start Chat Button */}
              <button 
                onClick={handleStartChatClick}
                className="bg-[#dc5903] h-10 rounded-md shadow-[0px_2px_0px_0px_rgba(180,60,0,0.15)] flex-1 hover:bg-[#e6850e] transition-colors"
              >
                <div className="flex items-center justify-center w-full h-full px-4">
                  <span className="text-white text-[13.125px] font-medium">Start Chat</span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Profile Creation Modal - Enhanced z-index */}
        {showProfileModal && (
          <ProfileCreationModal
            isOpen={showProfileModal}
            onClose={() => setShowProfileModal(false)}
            onCreateProfile={handleCreateProfile}
          />
        )}

        {/* Story Edit Modal */}
        {showStoryEditModal && (
          <StoryEditModal
            isOpen={showStoryEditModal}
            onClose={() => setShowStoryEditModal(false)}
            onSave={handleStoryEditSave}
            storyData={storyEditData}
          />
        )}

        {/* Creator Profile Modal */}
        {creator && (
          <CreatorProfileModal
            creator={creator}
            isOpen={showCreatorProfile}
            onClose={() => setShowCreatorProfile(false)}
            onStorySelect={(storyId) => {
              // Navigate to selected story (you might want to implement this navigation)
              console.log('Navigate to story:', storyId);
            }}
            onFollowChange={onFollowChange}
          />
        )}
      </div>
    </div>
  );
}
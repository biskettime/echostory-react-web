import { useState, useRef, useEffect } from 'react';
import { ArrowLeft, ChevronLeft, ChevronRight, Heart, Bookmark } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { getStory, initializeSampleStories, getCreatorById, updateStory } from '../data/stories';
import { ProfileCreationModal } from './ProfileCreationModal';
import { StoryEditModal } from './StoryEditModal';
import { ProfileEditModal } from './ProfileEditModal';
import { CreatorProfileModal } from './CreatorProfileModal';
import { SafetyToggle } from './SafetyToggle';
import { t, addLanguageChangeListener, removeLanguageChangeListener } from '../utils/i18n';
import { translateCharacterName, translateStoryTitle, translateTag, translateStoryDescription, translateStorySettingsContent, translateCharacterDescriptionContent } from '../utils/storyTranslation';
import { getCurrentLanguage } from '../utils/i18n';
import { createDefaultProfileForCharacter } from '../data/stories/characterUtils';
import svgPaths from "../imports/svg-bsii91cs4v";
import lockSvgPaths from "../imports/svg-p3farl1j9x";

interface Profile {
  id: string;
  name: string;
  info: string;
  image?: string;
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
  // All state definitions at the top
  const [isStoriesLoaded, setIsStoriesLoaded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentThumbnailIndex, setCurrentThumbnailIndex] = useState(0);
  const [chatMessageCount, setChatMessageCount] = useState(0);
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [selectedProfileId, setSelectedProfileId] = useState(() => {
    return localStorage.getItem('selectedProfileId') || 'default';
  });
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showProfileEditModal, setShowProfileEditModal] = useState(false);
  const [showStoryEditModal, setShowStoryEditModal] = useState(false);
  const [showCreatorProfile, setShowCreatorProfile] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);
  const [, forceUpdate] = useState({});
  const [characterImageSrc, setCharacterImageSrc] = useState<string>('');
  const [characterImages, setCharacterImages] = useState<string[]>([]);
  const [isCharacterImagesLoaded, setIsCharacterImagesLoaded] = useState(false);
  const [storyEditData, setStoryEditData] = useState({
    storySetting: '',
    characterName: '',
    characterDescription: ''
  });
  
  const thumbnailContainerRef = useRef<HTMLDivElement>(null);
  
  // Initialize sample stories
  useEffect(() => {
    console.log('StoryDetailScreen - Initializing sample stories...');
    try {
      initializeSampleStories();
      console.log('StoryDetailScreen - Sample stories initialization complete');
      setIsStoriesLoaded(true);
    } catch (error) {
      console.error('StoryDetailScreen - Failed to initialize stories:', error);
      setIsStoriesLoaded(true); // Still set to true to avoid infinite loading
    }
  }, []);

  const story = isStoriesLoaded ? getStory(storyId) : null;
  const creator = story ? getCreatorById(story.creatorId) : null;
  
  // Debug: Log story lookup
  console.log('StoryDetailScreen - Story lookup:', {
    storyId,
    storyFound: !!story,
    storyTitle: story?.title
  });
  
  // Debug: Log story data
  useEffect(() => {
    if (story) {
      console.log('StoryDetailScreen - Story data:', {
        id: story.id,
        title: story.title,
        characterName: story.content.characterName,
        storySettingsLength: story.content.storySettings?.length || 0,
        characterDescriptionLength: story.content.characterDescription?.length || 0,
        storySettings: story.content.storySettings?.substring(0, 200) + '...',
        characterDescription: story.content.characterDescription?.substring(0, 200) + '...'
      });
    }
  }, [story]);
  

  
  // Load chat message count from localStorage
  useEffect(() => {
    const savedCount = localStorage.getItem(`chatMessages_${storyId}`);
    if (savedCount) {
      setChatMessageCount(parseInt(savedCount, 10));
    }
  }, [storyId]);

  // Initialize and update profiles based on character gender
  useEffect(() => {
    if (story) {
      const defaultProfile = createDefaultProfileForCharacter(story);
      console.log('🔍 StoryDetailScreen - Creating profile for story:', story.id, story.content.characterName);
      const savedProfiles = localStorage.getItem('chatProfiles');
      
      if (!savedProfiles) {
        // No profiles exist, create new default
        console.log('🎭 No profiles found in StoryDetailScreen, creating default profile based on character gender');
        
        const newProfile = {
          id: 'default',
          name: defaultProfile.name,
          info: defaultProfile.info,
          image: defaultProfile.image
        };
        
        const profilesData = [newProfile];
        localStorage.setItem('chatProfiles', JSON.stringify(profilesData));
        localStorage.setItem('selectedProfileId', 'default');
        
        setProfiles(profilesData);
        setSelectedProfileId('default');
        
        console.log('🎭 Created default profile in StoryDetailScreen:', newProfile);
      } else {
        // Load saved profiles
        try {
          const parsedProfiles = JSON.parse(savedProfiles);
          
          // Always update default profile to match current story
          const updatedProfiles = parsedProfiles.map((p: Profile) => {
            if (p.id === 'default') {
              console.log('🎭 Updating default profile to match current story gender');
              return {
                ...p,
                name: defaultProfile.name,
                info: defaultProfile.info,
                image: defaultProfile.image
              };
            }
            return p;
          });
          
          // Check if default profile exists, if not create it
          if (!updatedProfiles.find((p: Profile) => p.id === 'default')) {
            updatedProfiles.unshift({
              id: 'default',
              name: defaultProfile.name,
              info: defaultProfile.info,
              image: defaultProfile.image
            });
          }
          
          localStorage.setItem('chatProfiles', JSON.stringify(updatedProfiles));
          setProfiles(updatedProfiles);
          
          console.log('🎭 Profiles loaded and updated for current story');
        } catch (error) {
          console.error('Failed to parse profiles:', error);
          // On error, create fresh default
          const newProfile = {
            id: 'default',
            name: defaultProfile.name,
            info: defaultProfile.info,
            image: defaultProfile.image
          };
          
          const profilesData = [newProfile];
          localStorage.setItem('chatProfiles', JSON.stringify(profilesData));
          setProfiles(profilesData);
        }
      }
    }
  }, [story?.id]); // Only depend on story ID to avoid unnecessary re-renders
  
  // Listen for chat message count updates
  useEffect(() => {
    const handleChatMessageUpdate = (event: CustomEvent) => {
      if (event.detail.storyId === storyId) {
        setChatMessageCount(event.detail.count);
        console.log(`🔓 Image unlock status updated: ${event.detail.count} messages, ${getUnlockedImageCount(event.detail.count)} images unlocked`);
      }
    };
    
    window.addEventListener('chatMessageCountUpdated', handleChatMessageUpdate as EventListener);
    return () => {
      window.removeEventListener('chatMessageCountUpdated', handleChatMessageUpdate as EventListener);
    };
  }, [storyId]);
  

  

  
  // Function to get unlocked image count based on chat messages
  const getUnlockedImageCount = (messageCount: number): number => {
    // First image is always unlocked, additional images unlock every 10 messages starting from 10
    if (messageCount < 10) {
      return 1; // Only first image unlocked
    }
    return Math.min(1 + Math.floor(messageCount / 10), 10); // Max 10 images
  };
  
  // Function to check if an image is unlocked
  const isImageUnlocked = (imageIndex: number): boolean => {
    const unlockedCount = getUnlockedImageCount(chatMessageCount);
    return imageIndex < unlockedCount;
  };
  


  // Language change listener
  useEffect(() => {
    const handleLanguageChange = () => {
      forceUpdate({});
    };

    addLanguageChangeListener(handleLanguageChange);
    return () => removeLanguageChangeListener(handleLanguageChange);
  }, []);
  
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
  
  // Auto-scroll effect when thumbnail selection changes
  useEffect(() => {
    if (thumbnailContainerRef.current) {
      const container = thumbnailContainerRef.current;
      const thumbnailWidth = 64.58 + 8; // thumbnail width + gap
      const scrollPosition = currentThumbnailIndex * thumbnailWidth;
      
      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  }, [currentThumbnailIndex]);
  


  // Load like and favorite status from localStorage
  useEffect(() => {
    if (storyId) {
      const likedStories = JSON.parse(localStorage.getItem('likedStories') || '[]');
      const favoritedStories = JSON.parse(localStorage.getItem('favoritedStories') || '[]');
      
      setIsLiked(likedStories.includes(storyId));
      setIsFavorited(favoritedStories.includes(storyId));
    }
  }, [storyId]);
  


  // Update story edit data when story changes
  useEffect(() => {
    if (story) {
      const newStoryEditData = {
        storySetting: story.content.storySettings || '',
        characterName: story.content.characterName || '',
        characterDescription: story.content.characterDescription || ''
      };
      
      console.log('StoryDetailScreen - Setting storyEditData:', {
        storySettingLength: newStoryEditData.storySetting.length,
        characterDescriptionLength: newStoryEditData.characterDescription.length,
        storySetting: newStoryEditData.storySetting.substring(0, 200) + '...',
        characterDescription: newStoryEditData.characterDescription.substring(0, 200) + '...'
      });
      
      setStoryEditData(newStoryEditData);
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
      
      const foundImages: string[] = [];
      
      // Use story ID to find images with new naming convention (e.g., rf001_1.png)
      const storyIdForImage = story?.id || storyId;
      console.log(`🔍 StoryDetail - Loading images for story: ${storyIdForImage}`);
      
      // Try to find all story images (1~10) using story ID
      for (let i = 1; i <= 10; i++) {
        const imagePath = `/data/ch_img/${storyIdForImage}_${i}.png`;
        try {
          const response = await fetch(imagePath, { method: 'HEAD' });
          if (response.ok) {
            console.log(`✅ StoryDetail - Found story image ${i}:`, imagePath);
            foundImages.push(imagePath);
          }
        } catch (error) {
          // Continue to next image
        }
      }
      
      // Fallback to old naming convention if no images found
      if (foundImages.length === 0) {
        console.log(`⚠️ StoryDetail - No images with story ID, trying character name: ${sanitizedName}`);
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
  
  // Force selectedProfile recalculation when profiles change
  const getCurrentProfile = () => {
    return profiles.find(p => p.id === selectedProfileId);
  };

  // Sync selectedProfileId with localStorage changes
  useEffect(() => {
    const handleStorageChange = () => {
      const savedProfileId = localStorage.getItem('selectedProfileId');
      if (savedProfileId && savedProfileId !== selectedProfileId) {
        setSelectedProfileId(savedProfileId);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [selectedProfileId]);

  // Ensure selectedProfile exists, fallback to first profile if not
  useEffect(() => {
    if (!selectedProfile && profiles.length > 0) {
      const firstProfile = profiles[0];
      setSelectedProfileId(firstProfile.id);
      localStorage.setItem('selectedProfileId', firstProfile.id);
    }
  }, [selectedProfile, profiles]);

  // Debug selectedProfile changes
  useEffect(() => {
    console.log('🔄 selectedProfile changed:', selectedProfile);
    console.log('🔄 Current profiles array:', profiles);
    console.log('🔄 Current selectedProfileId:', selectedProfileId);
  }, [selectedProfile, profiles, selectedProfileId]);

  // Show loading state while stories are being initialized
  if (!isStoriesLoaded) {
    return (
      <div className="flex items-center justify-center h-full bg-[#1a1b1b] text-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-4"></div>
          <p>Loading story...</p>
        </div>
      </div>
    );
  }

  if (!story) {
    console.error('StoryDetailScreen - Story not found:', {
      storyId,
      allStoriesCount: 'checking...'
    });
    
    // Try to get all stories for debugging
    import('../data/stories').then(({ getPublishedStories }) => {
      const allStories = getPublishedStories();
      console.log('StoryDetailScreen - All available stories:', allStories.map(s => ({ id: s.id, title: s.title })));
    });
    
    return (
      <div className="flex items-center justify-center h-full bg-[#1a1b1b] text-white">
        <div className="text-center">
          <p>Story not found</p>
          <p className="text-sm text-gray-400 mt-2">Story ID: {storyId}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 px-4 py-2 bg-[#ff9500] text-white rounded"
          >
            Reload Page
          </button>
        </div>
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
    finalAllImages = storyAndThumbnailImages.length > 0 ? storyAndThumbnailImages : ['/images/echostory.png'];
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
    willShowEchoStoryImage: finalAllImages.includes('/images/echostory.png'),
    loadingState: !isCharacterImagesLoaded ? 'Loading character images...' : 'Loaded'
  });

  // Force fallback to echostory.png if character-*.svg detected (but keep character images)
  const safeAllImages = finalAllImages.map(img => {
    if (img && img.startsWith('/data/ch_img/')) {
      return img; // Keep character images as-is
    }
    return img && img.includes('character-') ? '/images/echostory.png' : img;
  });
  
  // Only create gallery images if character image loading is complete
  const galleryImages = !isCharacterImagesLoaded ? [] : safeAllImages.map((url, index) => ({
    id: index,
    url: url,
    isSelected: index === currentThumbnailIndex,
    isUnlocked: isImageUnlocked(index) // Check if image is unlocked based on chat messages
  }));


  


  // Check if current image is locked
  const currentImageIsLocked = !galleryImages[currentImageIndex]?.isUnlocked;



  const handlePreviousImage = () => {
    if (currentImageIndex > 0) {
      // Find the previous unlocked image
      for (let i = currentImageIndex - 1; i >= 0; i--) {
        if (isImageUnlocked(i)) {
          setCurrentImageIndex(i);
          setCurrentThumbnailIndex(i);
          scrollThumbnailIntoView(i);
          break;
        }
      }
    }
  };

  const handleNextImage = () => {
    if (currentImageIndex < galleryImages.length - 1) {
      // Find the next unlocked image
      for (let i = currentImageIndex + 1; i < galleryImages.length; i++) {
        if (isImageUnlocked(i)) {
          setCurrentImageIndex(i);
          setCurrentThumbnailIndex(i);
          scrollThumbnailIntoView(i);
          break;
        }
      }
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
    // Allow viewing any image, even if locked (will show blurred)
    setCurrentImageIndex(index);
    setCurrentThumbnailIndex(index);
    scrollThumbnailIntoView(index);
  };

  const handleUnlockImage = () => {
    // Here you would typically handle the unlock logic
    console.log('Unlock image requested');
  };

  const handleCreateProfile = (profileData: { name: string; info: string; image?: string }) => {
    const newProfile: Profile = {
      id: Date.now().toString(),
      name: profileData.name,
      info: profileData.info,
      image: profileData.image
    };
    
    // Save profile with image to localStorage
    const updatedProfiles = [...profiles, newProfile];
    setProfiles(updatedProfiles);
    localStorage.setItem('chatProfiles', JSON.stringify(updatedProfiles));
    
    setSelectedProfileId(newProfile.id);
    setShowProfileModal(false);
  };

  const handleProfileSelect = (profileId: string) => {
    if (profileId === 'add-new') {
      console.log('Opening profile modal from dropdown');
      setShowProfileModal(true);
    } else {
      setSelectedProfileId(profileId);
      // Save the selected profile ID for other components to use
      localStorage.setItem('selectedProfileId', profileId);
      // Force re-render to ensure UI updates
      forceUpdate({});
      console.log('🔄 Profile selected in StoryDetailScreen:', profileId);
    }
    setShowProfileDropdown(false);
  };

  const handleProfileEdit = () => {
    setShowProfileEditModal(true);
  };

  const handleProfileEditSave = (nickname: string, info: string, image?: string) => {
    console.log('🔄 Profile edit save started:', { selectedProfileId, nickname, info, image: image ? 'with image' : 'no image' });
    
    // Update the selected profile
    const updatedProfiles = profiles.map(profile => 
      profile.id === selectedProfileId 
        ? { ...profile, name: nickname, info: info, image: image }
        : profile
    );
    
    console.log('🔄 Updated profiles:', updatedProfiles);
    console.log('🔄 Current selectedProfileId:', selectedProfileId);
    console.log('🔄 Profile being updated:', updatedProfiles.find(p => p.id === selectedProfileId));
    
    // Update state and localStorage
    setProfiles(updatedProfiles);
    localStorage.setItem('chatProfiles', JSON.stringify(updatedProfiles));
    localStorage.setItem('selectedProfileId', selectedProfileId);
    
    // Multiple force updates to ensure UI refresh
    forceUpdate({});
    setTimeout(() => {
      forceUpdate({});
      console.log('🔄 Second force update completed');
    }, 100);
    
    // Trigger a window storage event to sync across components
    window.dispatchEvent(new StorageEvent('storage', {
      key: 'chatProfiles',
      newValue: JSON.stringify(updatedProfiles)
    }));
    
    console.log('🔄 Profile saved in StoryDetailScreen - modal will be closed by ProfileEditModal');
  };

  const handleProfileDelete = () => {
    // Don't allow deleting the default profile if it's the only one
    if (profiles.length <= 1) {
      alert(t('profile.cannotDeleteLastProfile'));
      return;
    }

    // Show confirmation dialog
    const confirmMessage = t('profile.deleteProfileConfirm');
    if (confirm(confirmMessage)) {
      // Remove the selected profile
      const updatedProfiles = profiles.filter(profile => profile.id !== selectedProfileId);
      setProfiles(updatedProfiles);
      
      // Select the first remaining profile
      if (updatedProfiles.length > 0) {
        setSelectedProfileId(updatedProfiles[0].id);
      }
    }
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



  const language = getCurrentLanguage();
  
  return (
    <>
      <Helmet>
        <title>EchoStory — {translateCharacterName(story.content.characterName, language)}</title>
        <meta 
          name="description" 
          content={`Chat with ${translateCharacterName(story.content.characterName, language)} in ${translateStoryTitle(story.title, language)}. ${translateStoryDescription(story.content.characterDescription, language)}`} 
        />
        <meta property="og:title" content={`EchoStory — ${translateCharacterName(story.content.characterName, language)}`} />
        <meta property="og:description" content={translateStoryDescription(story.content.characterDescription, language)} />
        <meta property="og:image" content={characterImageSrc || '/icon.png'} />
        <meta name="twitter:title" content={`EchoStory — ${translateCharacterName(story.content.characterName, language)}`} />
        <meta name="twitter:description" content={translateStoryDescription(story.content.characterDescription, language)} />
        <meta name="twitter:image" content={characterImageSrc || '/icon.png'} />
      </Helmet>
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
                      <p className="text-sm opacity-70">{t('storyDetail.loadingImages')}</p>
                    </div>
                  </div>
                ) : (
                  // Images loaded - show gallery
                  <div
                    className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-300 ${
                      currentImageIsLocked ? 'filter blur-[6px]' : ''
                    }`}
                    style={{ 
                      backgroundImage: `url('${galleryImages[currentImageIndex]?.url || '/images/echostory.png'}')`,
                      backgroundColor: '#2a2a2a' // Fallback background color
                    }}
                    onError={(e) => {
                      console.log('Image load error, using fallback');
                      const target = e.target as HTMLElement;
                      target.style.backgroundImage = "url('/images/echostory.png')";
                    }}
                  >
                    {/* Additional fallback: show echostory.png as img if background fails */}
                    {(!galleryImages[currentImageIndex]?.url || galleryImages[currentImageIndex]?.url === '/images/echostory.png') && (
                      <img 
                        src="/images/echostory.png" 
                        alt="Story image" 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          console.log('Fallback image also failed to load');
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                    )}
                    
                    {/* Main Image Lock Overlay */}
                    {currentImageIsLocked && (
                      <div className="absolute inset-0 bg-[rgba(0,0,0,0.2)] flex flex-col items-center justify-center">
                        <div className="w-[40px] h-[40px] mb-4">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
                            <g>
                              <path
                                d={lockSvgPaths.p3032d100}
                                fill="rgba(255,255,255,0.9)"
                              />
                            </g>
                          </svg>
                        </div>
                        <div className="text-white text-center px-4">
                          <p className="text-lg font-semibold mb-2">이미지가 잠겨있습니다</p>
                          <p className="text-sm opacity-80">
                            해금하려면 {((currentImageIndex) * 10) - chatMessageCount}개의 메시지를 더 보내세요
                          </p>
                          <p className="text-xs opacity-60 mt-1">
                            현재: {chatMessageCount}개 / 필요: {(currentImageIndex) * 10}개
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
                
                {/* Lock Overlay - Only show when current image is locked */}
                {currentImageIsLocked && (
                  <>
                    
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
                          <p className="block mb-0">{t('storyDetail.unlockMessage1')}</p>
                          <p className="block">{t('storyDetail.unlockMessage2')}</p>
                        </div>
                      </div>
                      
                      {/* Unlock Button */}
                      <button
                        onClick={handleUnlockImage}
                        className="bg-[#dc5903] box-border content-stretch flex flex-row h-[31.99px] items-center justify-center px-[15.625px] py-[0.625px] relative rounded-md shadow-[0px_2px_0px_0px_rgba(180,60,0,0.15)] shrink-0 hover:bg-[#e6850e] transition-colors"
                      >
                        <div className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0">
                          <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[13.125px] text-center text-nowrap">
                            <p className="block leading-[normal] whitespace-pre">{t('storyDetail.unlockButton')}</p>
                          </div>
                        </div>
                      </button>
                    </div>
                  </>
                )}
                
                {/* Gallery Navigation Arrows - Always show */}
                {(
                  <div className="absolute inset-0 flex items-center justify-between px-2.5">
                    {/* Left Arrow */}
                    <button 
                      onClick={() => {
                        if (currentImageIndex > 0) {
                          const newIndex = currentImageIndex - 1;
                          setCurrentImageIndex(newIndex);
                          setCurrentThumbnailIndex(newIndex);
                        }
                      }}
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
                      onClick={() => {
                        if (currentImageIndex < galleryImages.length - 1) {
                          const newIndex = currentImageIndex + 1;
                          setCurrentImageIndex(newIndex);
                          setCurrentThumbnailIndex(newIndex);
                        }
                      }}
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
                        style={{ backgroundImage: `url('${image.url || '/images/echostory.png'}')` }}
                        onError={(e) => {
                          const target = e.target as HTMLElement;
                          target.style.backgroundImage = "url('/images/echostory.png')";
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
                  {story ? translateStoryTitle(story.title) : ''}
                </h1>
              </div>

              {/* Story Description */}
              <div>
                <p className="text-[14.875px] font-light text-[rgba(255,255,255,0.8)] leading-[25.14px]">
                  {story ? translateStoryDescription(story.title, story.introduction.introduction) : ''}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 pt-1">
                {story?.introduction.tags.map((tag, index) => (
                  <div key={index} className="bg-[rgba(0,0,0,0.5)] px-1.5 py-[3.18px] rounded">
                    <span className="text-[#ff9500] text-[12.289px] font-light leading-[20.43px]">{translateTag(tag)}</span>
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
                          {creator.stats.followers.toLocaleString()} {t('storyDetail.followers')}
                        </span>
                        <span className="text-[#808080] text-[12px] leading-[20px]">
                          {creator.stats.totalStories} {t('storyDetail.stories')}
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
            <div className="bg-[#2a2a2a] rounded-xl">
              <div
                aria-hidden="true"
                className="absolute border border-[rgba(255,255,255,0.01)] border-solid inset-0 pointer-events-none rounded-lg"
              />
              <div className="relative w-full">
                <div className="box-border content-stretch flex flex-col gap-[7.255px] pl-[16.63px] pr-[8px] py-[8px] relative w-full">
                  {/* Section Label with Edit Button */}
                  <div className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full">
                    <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#999999] text-[11.25px] text-left tracking-[0.5px] uppercase">
                      <p className="block leading-[12px]">{t('storyDetail.myChatProfile')}</p>
                    </div>
                    
                    {/* Edit and Delete Buttons */}
                    <div className="flex items-center gap-1">
                      {/* Edit Button */}
                      <button
                        onClick={handleProfileEdit}
                        className="bg-[rgba(255,255,255,0)] box-border flex flex-row gap-1 h-6 items-center justify-center px-[8px] py-[0.3125px] relative rounded shrink-0 hover:bg-[rgba(255,255,255,0.1)] transition-colors"
                      >
                        <div
                          aria-hidden="true"
                          className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded shadow-[0px_2px_0px_0px_rgba(255,255,255,0.04)]"
                        />
                        
                        <div className="flex items-center justify-center">
                          <div className="relative shrink-0 size-[11.99px]">
                            <svg
                              className="block size-full"
                              fill="none"
                              viewBox="0 0 12 12"
                            >
                              <g>
                                <path
                                  d="M8.5 1.5L10.5 3.5L3.5 10.5H1.5V8.5L8.5 1.5Z"
                                  fill="none"
                                  stroke="#CCCCCC"
                                  strokeWidth="1"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M7.5 2.5L9.5 4.5"
                                  stroke="#CCCCCC"
                                  strokeWidth="1"
                                  strokeLinecap="round"
                                />
                              </g>
                            </svg>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-center">
                          <p className="font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium text-[#cccccc] text-[11.25px] text-center leading-normal whitespace-nowrap">
                            {t('storyDetail.edit')}
                          </p>
                        </div>
                      </button>
                      
                      {/* Delete Button */}
                      <button
                        onClick={handleProfileDelete}
                        className="bg-[rgba(255,255,255,0)] box-border flex flex-row gap-1 h-6 items-center justify-center px-[8px] py-[0.3125px] relative rounded shrink-0 hover:bg-[rgba(255,0,0,0.1)] transition-colors"
                      >
                        <div
                          aria-hidden="true"
                          className="absolute border border-[rgba(255,0,0,0.3)] border-solid inset-0 pointer-events-none rounded shadow-[0px_2px_0px_0px_rgba(255,255,255,0.04)]"
                        />
                        
                        <div className="flex items-center justify-center">
                          <div className="relative shrink-0 size-[11.99px]">
                            <svg
                              className="block size-full"
                              fill="none"
                              viewBox="0 0 12 12"
                            >
                              <g>
                                <path
                                  d="M3 3L9 9M9 3L3 9"
                                  stroke="#ff4444"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                />
                              </g>
                            </svg>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-center">
                          <p className="font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium text-[#ff4444] text-[11.25px] text-center leading-normal whitespace-nowrap">
                            {t('storyDetail.delete')}
                          </p>
                        </div>
                      </button>
                    </div>

                  </div>
                  
                  {/* Profile Info - Now full width */}
                  <div className="box-border content-stretch flex flex-row gap-2 items-stretch justify-start p-0 relative shrink-0 w-full">
                    {/* Profile Image - Vertical Rectangle */}
                    <div className="relative shrink-0 flex">
                      <div className="w-[77.44px] h-full rounded-lg bg-[#333333] border border-[#424242] overflow-hidden flex items-center justify-center">
                        {getCurrentProfile()?.image ? (
                          <img 
                            src={getCurrentProfile()?.image} 
                            alt="Profile" 
                            className="w-full h-full object-cover"
                            style={{ 
                              objectPosition: 'center 20%', 
                              transform: 'scale(1.5)', 
                              transformOrigin: 'center 20%',
                              imageRendering: 'auto'
                            }}
                          />
                        ) : (
                          <svg className="w-8 h-8 text-[#666666]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7-7z" />
                          </svg>
                        )}
                      </div>
                    </div>
                    
                    {/* Profile Name and Info - Now extends to full width */}
                    <div className="flex-1 flex flex-col gap-3 min-w-0">
                      {/* Profile Dropdown */}
                      <div className="relative">
                        <div className="bg-[#3a3a3a] border border-[#4a4a4a] rounded-md h-[25.6px]">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setShowProfileDropdown(!showProfileDropdown);
                            }}
                            className="w-full h-full flex items-center justify-between px-3 hover:bg-[#404041] transition-colors"
                          >
                            <span className="text-white text-[11px] font-medium leading-[25.6px] truncate">
                              {getCurrentProfile()?.name || 'Select Profile'}
                            </span>
                            <div className="w-3 h-3 ml-2 flex-shrink-0">
                              <svg className="block size-full" fill="none" viewBox="0 0 12 12">
                                <path d="M3 5L6 8L9 5" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
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
                                  className={`w-full px-3 py-1.5 text-left text-white text-[11px] hover:bg-[#404041] transition-colors truncate ${
                                    profile.id === selectedProfileId ? 'bg-[#404041]' : ''
                                  }`}
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
                                className="w-full px-3 py-1.5 text-left text-[#ff9500] text-[11px] hover:bg-[#404041] transition-colors border-t border-[#4a4a4a] mt-1 pt-1.5"
                              >
                                + {t('profile.newChatProfile')}
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      {/* Profile Info Box - Now extends to full container width */}
                      {getCurrentProfile()?.info && getCurrentProfile()?.info.trim() ? (
                        <div className="bg-[#333333] rounded-md px-3 py-3 border border-[#444444] w-full">
                          <p className="text-[#cccccc] text-[11px] leading-[16px] line-clamp-3">
                            {getCurrentProfile()?.info && getCurrentProfile()!.info.length > 120 ? `${getCurrentProfile()!.info.substring(0, 120)}...` : getCurrentProfile()?.info}
                          </p>
                        </div>
                      ) : (
                        <div className="bg-[#333333] rounded-md px-3 py-3 border border-[#444444] w-full flex items-center">
                          <p className="text-[#666666] text-[11px] leading-[16px] italic">
                            {t('chat.noInformationEntered')}
                          </p>
                        </div>
                      )}

                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Story Setting Section */}
            <div className="space-y-4">
              <div>
                <h3 className="text-white text-[15.805px] font-light leading-[26.71px]">
{t('storyDetail.storySettings')}
                </h3>
              </div>

              <div className="space-y-5">
                {(getCurrentLanguage() === 'en' 
                  ? storyEditData.storySetting 
                  : translateStorySettingsContent(story?.title || '', storyEditData.storySetting)
                ).split('\n\n').map((paragraph, index) => (
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
{t('storyDetail.characterDescription')}
                </h3>
              </div>

              <div className="space-y-1">
                <div>
                  <p className="text-[rgba(255,255,255,0.8)] text-[12.906px] font-light leading-[22px]">
                    • {translateCharacterName(storyEditData.characterName)}
                  </p>
                </div>
                
                <div className="space-y-1">
                  {(getCurrentLanguage() === 'en' 
                    ? storyEditData.characterDescription 
                    : translateCharacterDescriptionContent(story?.title || '', storyEditData.characterDescription)
                  ).split('\n').map((line, index) => (
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
                onClick={() => setShowStoryEditModal(true)}
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
                  <span className="text-white text-[13.125px] font-medium">{t('storyDetail.startChat')}</span>
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

        {/* Profile Edit Modal */}
        {showProfileEditModal && getCurrentProfile() && (
          <ProfileEditModal
            onClose={() => setShowProfileEditModal(false)}
            onBack={() => setShowProfileEditModal(false)}
            currentNickname={getCurrentProfile()!.name}
            currentInfo={getCurrentProfile()!.info}
            currentImage={getCurrentProfile()!.image}
            onSave={handleProfileEditSave}
          />
        )}

        {/* Story Edit Modal */}
        {showStoryEditModal && (
          <StoryEditModal
            isOpen={showStoryEditModal}
            onClose={() => setShowStoryEditModal(false)}
            onSave={handleStoryEditSave}
            storyData={storyEditData}
            storyTitle={story?.title || ''}
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
    </>
  );
}
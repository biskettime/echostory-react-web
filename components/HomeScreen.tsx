import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { SafetyToggle } from './SafetyToggle';
import { LanguageSelector } from './LanguageSelector';
import { t, addLanguageChangeListener, removeLanguageChangeListener } from '../utils/i18n';
import { translateStoryTitle, translateCharacterName, translateStoryDescription } from '../utils/storyTranslation';
import { 
  getPublishedStories, 
  getPopularStories, 
  getNewStories, 
  searchStories,
  getStoryThumbnailWithFallback,
  CreatedStoryData 
} from '../data/stories';
import { initializeSampleStories, sampleStories } from '../data/stories/sampleStories';
// import imgSearchIconPng from "figma:asset/ef863f04724e3ed7ded20a0b62b98cd5a1b82d91.png";
const imgSearchIconPng = "/images/search-icon.svg";

interface HomeScreenProps {
  onStorySelect: (storyId: string) => void;
  safetyMode: boolean;
  onSafetyToggle: (checked: boolean) => void;
  onNavigateToCreate?: () => void;
  onSearchOpen?: () => void;
}

export function HomeScreen({ onStorySelect, safetyMode, onSafetyToggle, onNavigateToCreate, onSearchOpen }: HomeScreenProps) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [popularCurrentPage, setPopularCurrentPage] = useState(0);
  const [newCurrentPage, setNewCurrentPage] = useState(0);
  const [stories, setStories] = useState<CreatedStoryData[]>([]);
  const [, forceUpdate] = useState({});

  // Language change listener
  useEffect(() => {
    const handleLanguageChange = () => {
      forceUpdate({});
    };

    addLanguageChangeListener(handleLanguageChange);
    return () => removeLanguageChangeListener(handleLanguageChange);
  }, []);

  // Initialize sample stories and load data
  useEffect(() => {
    console.log('🏠 HomeScreen initialization started');
    try {
      initializeSampleStories();
      loadStories();
    } catch (error) {
      console.error('❌ Error during HomeScreen initialization:', error);
    }
  }, []);

  const loadStories = () => {
    try {
      console.log('샘플 스토리들:', sampleStories);
      
      // 데이터베이스에서 스토리 가져오기 시도
      const allStories = searchStories('');
      console.log('데이터베이스의 모든 스토리들:', allStories);
      console.log('스토리 개수:', allStories.length);
      console.log('스토리 ID들:', allStories.map(s => s.id));
      
      // 중복 제거: ID 기준으로 고유한 스토리들만 선택
      const uniqueStoriesMap = new Map<string, any>();
      allStories.forEach(story => {
        if (!uniqueStoriesMap.has(story.id)) {
          uniqueStoriesMap.set(story.id, story);
        } else {
          console.log('중복 발견된 스토리 ID:', story.id);
        }
      });
      
      const uniqueStories = Array.from(uniqueStoriesMap.values());
      console.log('중복 제거 후 스토리들:', uniqueStories);
      console.log('중복 제거 후 개수:', uniqueStories.length);
      console.log('중복 제거 후 ID들:', uniqueStories.map(s => s.id));
      
      // 드래프트 확인
      const storedDrafts = localStorage.getItem('echostory_drafts');
      if (storedDrafts) {
        try {
          const draftsArray = JSON.parse(storedDrafts);
          console.log('🔍 HomeScreen - localStorage 드래프트들:', {
            드래프트수: draftsArray.length,
            드래프트ID들: draftsArray.map((d: any) => d.id),
            드래프트제목들: draftsArray.map((d: any) => d.title)
          });
          
          // 각 스토리가 드래프트인지 확인
          uniqueStories.forEach(story => {
            const isDraft = draftsArray.some((draft: any) => draft.id === story.id);
            console.log(`📋 Story ${story.id} (${story.title}): ${isDraft ? '드래프트' : '완성된 스토리'}`);
          });
        } catch (error) {
          console.error('드래프트 파싱 오류:', error);
        }
      } else {
        console.log('❌ HomeScreen - localStorage에 드래프트 없음');
      }
      
      // 중복 제거된 스토리 사용
      if (uniqueStories.length > 0) {
        console.log('Loaded unique stories:', uniqueStories.map(s => ({ id: s.id, title: s.title, characterName: s.content.characterName })));
        setStories(uniqueStories);
      } else {
        console.log('데이터베이스가 비어있음, 샘플 스토리 직접 사용');
        // 샘플 스토리도 중복 제거
        const uniqueSampleStories = Array.from(
          new Map(sampleStories.map(story => [story.id, story])).values()
        );
        setStories(uniqueSampleStories);
      }
    } catch (error) {
      console.error('스토리 로드 중 오류:', error);
      // 오류 발생시 샘플 스토리 직접 사용 (중복 제거)
      console.log('오류 발생, 샘플 스토리 직접 사용');
      const uniqueSampleStories = Array.from(
        new Map(sampleStories.map(story => [story.id, story])).values()
      );
      setStories(uniqueSampleStories);
    }
  };

  // Main grid shows unique stories only (no duplicates within main grid)
  const filteredStories = selectedTag 
    ? stories.filter(story => story.introduction.tags.includes(selectedTag))
    : stories;
  
  console.log('All stories loaded:', stories.map(s => ({ id: s.id, title: s.title, characterName: s.content.characterName })));
  console.log('Filtered stories:', filteredStories.map(s => ({ id: s.id, title: s.title, characterName: s.content.characterName })));
  
  // Remove duplicates from main grid using Set to track unique IDs
  const uniqueStoryIds = new Set<string>();
  const mainGridStories = filteredStories.filter(story => {
    if (uniqueStoryIds.has(story.id)) {
      return false; // Skip duplicate
    }
    uniqueStoryIds.add(story.id);
    return true; // Include unique story
  });
  
  console.log('Main grid stories:', mainGridStories.map(s => ({ id: s.id, title: s.title, characterName: s.content.characterName })));

  // For popular and new sections, allow some overlap but prioritize different stories
  const allAvailableStories = stories;
  
  // Popular stories: get highest rated stories (allow some overlap with main grid)
  const popularStories = allAvailableStories
    .sort((a, b) => (b.stats.averageRating * b.stats.totalRatings) - (a.stats.averageRating * a.stats.totalRatings))
    .slice(0, 10);
  
  // New stories: get most recent stories (allow some overlap)
  const newStories = allAvailableStories
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 10);

  // Popular tags
  const popularTags = [
    t('tags.female'), t('tags.male'), t('tags.romance'), t('tags.fantasy'), t('tags.seduction'), t('tags.older'),
    t('tags.academy'), t('tags.daily'), t('tags.highSchool'), t('tags.office'), t('tags.delinquent'), t('tags.younger'),
    t('tags.school'), t('tags.tutoring'), t('tags.childhoodFriend'), t('tags.student'), t('tags.royal'), t('tags.wealthy')
  ];

  // Carousel logic for popular stories
  const itemsPerPage = 3;
  const popularTotalPages = Math.ceil(popularStories.length / itemsPerPage);
  const currentPopularStories = popularStories.slice(
    popularCurrentPage * itemsPerPage,
    (popularCurrentPage + 1) * itemsPerPage
  );

  const handlePopularPrevious = () => {
    if (popularCurrentPage > 0) {
      setPopularCurrentPage(popularCurrentPage - 1);
    }
  };

  const handlePopularNext = () => {
    if (popularCurrentPage < popularTotalPages - 1) {
      setPopularCurrentPage(popularCurrentPage + 1);
    }
  };

  // Carousel logic for new stories
  const newTotalPages = Math.ceil(newStories.length / itemsPerPage);
  const currentNewStories = newStories.slice(
    newCurrentPage * itemsPerPage,
    (newCurrentPage + 1) * itemsPerPage
  );

  const handleNewPrevious = () => {
    if (newCurrentPage > 0) {
      setNewCurrentPage(newCurrentPage - 1);
    }
  };

  const handleNewNext = () => {
    if (newCurrentPage < newTotalPages - 1) {
      setNewCurrentPage(newCurrentPage + 1);
    }
  };

  const StoryImage = ({ story, className }: { story: CreatedStoryData; className: string }) => {
    const [imageSrc, setImageSrc] = useState<string>('/images/echostory.png');
    
    useEffect(() => {
      const loadCharacterImage = async () => {
        if (!story?.content.characterName) {
          // Try story thumbnail first, fallback to echostory logo
          const storyThumbnail = getStoryThumbnailWithFallback(story);
          if (storyThumbnail && !storyThumbnail.includes('echostory.png')) {
            setImageSrc(storyThumbnail);
          } else {
            setImageSrc('/images/echostory.png');
          }
          return;
        }
        
        try {
          // 새로운 분류 코드 시스템 사용
          const { getCharacterImageWithFallbackNew } = await import('../utils/storyImageMapping');
          const imagePath = await getCharacterImageWithFallbackNew(story.content.characterName, 1);
          
          if (imagePath && !imagePath.includes('echostory.png')) {
            console.log(`✅ HomeScreen - Character image loaded: ${imagePath}`);
            setImageSrc(imagePath);
            return;
          }
        } catch (error) {
          console.error('HomeScreen - Error loading character image:', error);
        }
        
        // No character image found, try story thumbnail first, then echostory logo
        const storyThumbnail = getStoryThumbnailWithFallback(story);
        if (storyThumbnail && !storyThumbnail.includes('echostory.png')) {
          setImageSrc(storyThumbnail);
        } else {
          setImageSrc('/images/echostory.png');
        }
      };
      
      loadCharacterImage();
    }, [story]);
    
    return (
      <div className="relative">
        <img
          src={imageSrc}
          alt={story.title}
          className={className}
          loading="lazy"
          onError={(e) => {
            // Fallback to echostory.png if image fails to load
            const target = e.target as HTMLImageElement;
            target.src = '/images/echostory.png';
          }}
        />
      </div>
    );
  };

  const handleCreateClick = () => {
    if (onNavigateToCreate) {
      onNavigateToCreate();
    }
  };

  return (
    <div className="flex flex-col h-full bg-[#1e1f1f] text-white overflow-hidden">
      {/* Fixed Header - Unified with ProfileScreen */}
      <div className="bg-[#1a1b1b] box-border content-stretch flex flex-row h-[41.99px] items-center justify-between left-0 w-full pl-[15px] pr-0 py-0 top-0 flex-shrink-0">
        {/* Logo */}
        <div className="flex items-center">
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
          <button 
            onClick={onSearchOpen}
            className="p-1 hover:opacity-80 transition-opacity text-white"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
              <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
              <path d="m21 21-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          {/* Safety Toggle */}
          <SafetyToggle 
            checked={safetyMode}
            onToggle={onSafetyToggle}
            size="small"
          />
          
          {/* Language Selector - Moved to rightmost position */}
          <LanguageSelector />
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto scrollbar-hide">
        {/* Featured Stories Banner */}
        <div className="mx-4 mt-1 mb-1">
          <div 
            className="relative cursor-pointer group overflow-hidden rounded-xl h-[180px]"
            onClick={() => onStorySelect(1)}
            style={{
              backgroundImage: 'url(/data/amazing.png)',
              backgroundSize: '103% 100%',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/15 to-black/25">
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white text-lg font-bold mb-1 drop-shadow-2xl" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>
                  {t('home.featuredStories')}
                </h3>
                <p className="text-white/90 text-sm drop-shadow-xl" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.7)'}}>
                  {t('home.featuredDescription')}
                </p>
              </div>
            </div>
            {/* Hover effect */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>

        {/* Story Creation Promotion */}
        <div className="mx-4 mb-1">
          <div 
            className="relative cursor-pointer group overflow-hidden rounded-xl h-[119px] bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600"
            onClick={handleCreateClick}
          >
            {/* Background image positioned on the right, cropped from chest up */}
            <div 
              className="absolute top-0 right-0 w-[60%] h-full opacity-80"
              style={{
                backgroundImage: 'url(/data/creator.png)',
                backgroundSize: '100% 100%',
                backgroundPosition: 'center top',
                backgroundRepeat: 'no-repeat'
              }}
            ></div>
            
            {/* Subtle overlay for text readability without covering the image */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent"></div>
            
            <div className="relative flex items-center p-4">
              <div className="flex-1 max-w-[65%]">
                <div className="flex items-center mb-2">
                  <img 
                    src="/images/echostory.png" 
                    alt="EchoStory" 
                    className="h-10 w-auto object-contain"
                    onError={(e) => {
                      // Fallback to text if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallbackDiv = document.createElement('div');
                      fallbackDiv.className = 'text-white text-sm font-bold tracking-wide';
                      fallbackDiv.innerHTML = 'Echo<span class="text-[#ff9500]">Story</span>';
                      target.parentNode?.appendChild(fallbackDiv);
                    }}
                  />
                  <div className="ml-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                    {t('home.creator')}
                  </div>
                </div>
                <h3 className="text-white text-base font-medium mb-1 drop-shadow-xl">
                  {t('home.createPromotion')}
                </h3>
                <p className="text-white text-sm drop-shadow-lg font-medium">
                  {t('home.createPromotionSub')}
                </p>
              </div>
            </div>
            
            {/* Hover effect */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>

        {/* Popular Stories Section */}
        <div className="px-4 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-[#f5f6f6]">{t('home.topStories')}</h2>
            <div className="flex space-x-2">
              <Button
                variant="ghost"
                size="sm"
                className="w-10 h-10 rounded-full p-0"
                onClick={handlePopularPrevious}
                disabled={popularCurrentPage === 0}
              >
                <ChevronLeft size={20} />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="w-10 h-10 rounded-full p-0"
                onClick={handlePopularNext}
                disabled={popularCurrentPage >= popularTotalPages - 1}
              >
                <ChevronRight size={20} />
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-3">
            {currentPopularStories.map((story, index) => {
              // Calculate the ranking based on current page and index
              const ranking = popularCurrentPage * itemsPerPage + index + 1;
              
              return (
                <div 
                  key={story.id}
                  className="cursor-pointer"
                  onClick={() => onStorySelect(story.id)}
                >
                  <div className="relative mb-2">
                    <StoryImage story={story} className="w-full h-[140px] object-cover rounded-xl" />
                    <div className="absolute top-2 left-2 bg-black/80 rounded-md w-6 h-6 flex items-center justify-center">
                      <span className="text-white text-xs font-bold">{ranking}</span>
                    </div>
                  </div>
                
                <div className="space-y-2">
                  <h3 className="text-white text-sm font-medium line-clamp-2 leading-tight">
                    {translateStoryTitle(story.title)}
                  </h3>
                  <p className="text-[#acacac] text-xs line-clamp-2 leading-tight">
                    {story.introduction?.introduction ? translateStoryDescription(story.title, story.introduction.introduction) : (story.description || '')}
                  </p>
                  
                  <div className="flex flex-wrap gap-1">
                    {(story.introduction?.tags || story.tags || []).slice(0, 2).map((tag, index) => (
                      <span 
                        key={index}
                        className="bg-black/50 text-[#ff9500] text-xs px-1 py-0.5 rounded-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-[#808080] text-xs">{story.creatorHandle || story.author || ''}</p>
                </div>
              </div>
              );
            })}
          </div>
        </div>

        {/* New Stories Section */}
        <div className="px-4 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-[#f5f6f6]">{t('home.newStories')}</h2>
            <div className="flex space-x-2">
              <Button
                variant="ghost"
                size="sm"
                className="w-10 h-10 rounded-full p-0"
                onClick={handleNewPrevious}
                disabled={newCurrentPage === 0}
              >
                <ChevronLeft size={20} />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="w-10 h-10 rounded-full p-0"
                onClick={handleNewNext}
                disabled={newCurrentPage >= newTotalPages - 1}
              >
                <ChevronRight size={20} />
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-3">
            {currentNewStories.map((story) => (
              <div 
                key={story.id}
                className="cursor-pointer"
                onClick={() => onStorySelect(story.id)}
              >
                <div className="relative mb-2">
                  <StoryImage story={story} className="w-full h-[140px] object-cover rounded-xl" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-white text-sm font-medium line-clamp-2 leading-tight">
                    {translateStoryTitle(story.title)}
                  </h3>
                  <p className="text-[#acacac] text-xs line-clamp-2 leading-tight">
                    {story.introduction?.introduction ? translateStoryDescription(story.title, story.introduction.introduction) : (story.description || '')}
                  </p>
                  
                  <div className="flex flex-wrap gap-1">
                    {(story.introduction?.tags || story.tags || []).slice(0, 2).map((tag, index) => (
                      <span 
                        key={index}
                        className="bg-black/50 text-[#ff9500] text-xs px-1 py-0.5 rounded-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-[#808080] text-xs">{story.creatorHandle || story.author || ''}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Tags */}
        <div className="px-4 mb-4">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex space-x-2 pb-2" style={{ minWidth: 'max-content' }}>
              <button
                onClick={() => setSelectedTag(null)}
                className={`flex items-center space-x-1 px-3 py-1 rounded-xl text-sm font-medium whitespace-nowrap transition-colors flex-shrink-0 ${
                  selectedTag === null
                    ? 'bg-[#f5f6f6] text-black'
                    : 'bg-[#2a2b2b] text-[#f5f6f6] hover:bg-[#3a3a3a]'
                }`}
              >
                <span>All</span>
              </button>
              {popularTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                  className={`flex items-center space-x-1 px-3 py-1 rounded-xl text-sm font-medium whitespace-nowrap transition-colors flex-shrink-0 ${
                    selectedTag === tag
                      ? 'bg-[#f5f6f6] text-black'
                      : 'bg-[#2a2b2b] text-[#f5f6f6] hover:bg-[#3a3a3a]'
                  }`}
                >
                  <span>{tag}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Stories Grid */}
        <div className="px-4 pb-12">
          <div className="grid grid-cols-3 gap-3 mb-16">
            {mainGridStories.length > 0 ? (
              mainGridStories.map((story) => (
                <div 
                  key={story.id}
                  className="cursor-pointer"
                  onClick={() => {
                    console.log('🔍 HomeScreen - Story card clicked:', {
                      storyId: story.id,
                      title: story.title,
                      characterName: story.content?.characterName,
                      isTemporary: story.metadata?.isTemporary
                    });
                    onStorySelect(story.id);
                  }}
                >
                  <div className="relative mb-2">
                    <StoryImage story={story} className="w-full h-[140px] object-cover rounded-xl" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-white text-sm font-medium line-clamp-2 leading-tight">
                      {translateStoryTitle(story.title)}
                    </h3>
                    <p className="text-[#acacac] text-xs line-clamp-2 leading-tight">
                      {story.introduction?.introduction ? translateStoryDescription(story.title, story.introduction.introduction) : (story.description || '')}
                    </p>
                    
                    <div className="flex flex-wrap gap-1">
                      {(story.introduction?.tags || []).slice(0, 3).map((tag, index) => (
                        <span 
                          key={index}
                          className="bg-black/50 text-[#ff9500] text-xs px-1 py-0.5 rounded-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <p className="text-[#808080] text-xs">{story.creatorHandle || ''}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-3 flex flex-col items-center justify-center py-16 text-center">
                <div className="text-white text-lg mb-2">스토리를 로딩 중...</div>
                <div className="text-gray-400 text-sm">잠시만 기다려주세요</div>
              </div>
            )}
          </div>

          {/* Company Info Footer */}
          <div className="border-t border-[#333333] pt-8 mt-8">
            <div className="space-y-4 text-[rgba(255,255,255,0.4)]">
              <div>
                <p className="text-xs font-medium text-[rgba(255,255,255,0.6)] mb-2">Company Information</p>
              </div>
              <div>
                <p className="text-xs mb-1">The Flow</p>
                <p className="text-xs">
                  123 Innovation St, Tech District, San Francisco, CA 94107
                </p>
              </div>
              <div>
                <p className="text-xs">
                  CEO: David Choi | Business Registration: 123-45-67890
                </p>
                <p className="text-xs">
                  E-commerce License: 2025-SF-TECH-0673
                </p>
              </div>
              <div>
                <p className="text-xs">
                  Phone: +1-555-THE-FLOW | Email: contact@theflow.ai
                </p>
              </div>
              <div className="pt-2 pb-8">
                <p className="text-xs text-[rgba(255,255,255,0.3)]">
                  © 2025 The Flow. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
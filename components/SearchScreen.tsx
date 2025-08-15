import { useState, useRef, useEffect } from 'react';
import { getPublishedStories, searchStories, initializeSampleStories, CreatedStoryData } from '../data/stories';
import { StoryCard } from './StoryCard';
import { X } from 'lucide-react';
import { t, addLanguageChangeListener, removeLanguageChangeListener } from '../utils/i18n';
import { translateStoryTitle, translateCharacterName, translateStoryDescription } from '../utils/storyTranslation';
// import imgSearch from "figma:asset/ef863f04724e3ed7ded20a0b62b98cd5a1b82d91.png";
const imgSearch = "/images/search-icon.svg";

interface SearchScreenProps {
  onBack: () => void;
  onStorySelect: (storyId: string) => void;
  safetyMode: boolean;
}

export function SearchScreen({ onBack, onStorySelect, safetyMode }: SearchScreenProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<CreatedStoryData[]>([]);
  const [allStories, setAllStories] = useState<CreatedStoryData[]>([]);
  const [, forceUpdate] = useState({});
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Language change listener
  useEffect(() => {
    const handleLanguageChange = () => {
      forceUpdate({});
    };

    addLanguageChangeListener(handleLanguageChange);
    return () => removeLanguageChangeListener(handleLanguageChange);
  }, []);

  // Initialize stories
  useEffect(() => {
    initializeSampleStories();
    const stories = getPublishedStories();
    setAllStories(stories);
  }, []);

  useEffect(() => {
    // Auto-focus search input on mount
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    // Enhanced filter with Korean support
    if (searchQuery.trim() === '') {
      setSearchResults([]);
    } else {
      const query = searchQuery.trim().toLowerCase();
      
      const filtered = allStories.filter(story => {
        // Original English search
        const englishMatch = 
          story.title.toLowerCase().includes(query) ||
          story.content.characterName?.toLowerCase().includes(query) ||
          story.introduction.tags?.some(tag => tag.toLowerCase().includes(query)) ||
          story.introduction.introduction.toLowerCase().includes(query) ||
          story.metadata.category.toLowerCase().includes(query);
        
        // Korean translated search
        const translatedTitle = translateStoryTitle(story.title).toLowerCase();
        const translatedCharacterName = translateCharacterName(story.content.characterName || '').toLowerCase();
        
        // Korean category mapping
        const categoryMapping: { [key: string]: string } = {
          'romance': '로맨스',
          'fantasy': '판타지',
          'mystery': '미스터리',
          'adventure': '모험',
          'slice-of-life': '일상',
          'school': '학원',
          'drama': '드라마',
          'comedy': '코미디'
        };
        
        const koreanCategory = categoryMapping[story.metadata.category.toLowerCase()] || '';
        
        const koreanMatch = 
          translatedTitle.includes(query) ||
          translatedCharacterName.includes(query) ||
          koreanCategory.includes(query) ||
          story.introduction.tags?.some(tag => {
            const translatedTag = categoryMapping[tag.toLowerCase()] || tag;
            return translatedTag.toLowerCase().includes(query);
          });
        
        return englishMatch || koreanMatch;
      });
      
      console.log('SearchScreen - Query:', query);
      console.log('SearchScreen - Results:', filtered);
      setSearchResults(filtered);
    }
  }, [searchQuery, allStories]);

  const handleClearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  return (
    <div className="bg-[#1a1b1b] box-border content-stretch flex flex-col items-start justify-start p-0 relative size-full">
      {/* Header - Unified with ProfileScreen */}
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
          {/* Close Button */}
          <button
            onClick={onBack}
            className="p-1 hover:opacity-80 transition-opacity text-white"
            aria-label="Close search screen"
          >
            <X className="w-5 h-5 text-white stroke-2" />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-[#1a1b1b] box-border content-stretch flex flex-col gap-4 items-center justify-start min-h-[calc(100vh-42px)] pb-[606.14px] pt-10 px-0 relative shrink-0 w-full flex-1">
        
        {/* Search Input Section */}
        <div className="bg-[#1a1b1b] relative shrink-0 w-full border-b border-[#2a2b2b]">
          <div className="box-border content-stretch flex flex-col items-start justify-start pb-[16.625px] pt-4 px-4 relative w-full">
            <div className="bg-[#2a2b2b] relative rounded-md shrink-0 w-full">
              <div className="relative size-full">
                <div className="box-border content-stretch flex flex-row items-start justify-start px-[11px] py-1 relative w-full">
                  {/* Search Icon */}
                  <div className="box-border content-stretch flex flex-col items-start justify-center pl-0 pr-1 py-0 relative self-stretch shrink-0">
                    <div className="basis-0 box-border content-stretch flex flex-row grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0">
                      <div
                        className="bg-no-repeat bg-size-[100%_100%] bg-top-left shrink-0 size-[16.99px]"
                        style={{ backgroundImage: `url('${imgSearch}')` }}
                      />
                    </div>
                  </div>

                  {/* Input Field */}
                  <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px overflow-clip pb-[10.25px] pt-[9.51px] px-0 relative self-stretch shrink-0">
                    <div className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative shrink-0 w-full">
                      <input
                        ref={searchInputRef}
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder={t('search.placeholder')}
                        className="flex flex-col font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#888888] text-[13.125px] text-left w-full bg-transparent border-none outline-none text-white placeholder:text-[#888888] focus:border-[rgba(255,149,0,0.8)] focus:ring-1 focus:ring-[rgba(255,149,0,0.8)] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Clear Search Button (when there is search query) */}
                  {searchQuery && (
                    <div className="flex items-center justify-center pl-1">
                      <button
                        onClick={handleClearSearch}
                        className="flex items-center justify-center w-6 h-6 rounded-full hover:bg-[rgba(255,255,255,0.1)] transition-all duration-200"
                        aria-label="Clear search"
                      >
                        <X className="w-4 h-4 text-gray-400" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        {searchQuery.trim() === '' ? (
          /* Empty State */
          <div className="box-border content-stretch flex flex-row h-[300px] items-center justify-center p-0 relative shrink-0 w-[468.01px]">
            <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0">
              <div className="flex flex-col font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#888888] text-[15px] text-left text-nowrap">
                <p className="block leading-[25.14px] whitespace-pre">{t('search.enterSearchTerm')}</p>
              </div>
            </div>
          </div>
        ) : searchResults.length > 0 ? (
          /* Search Results */
          <div className="flex-1 w-full overflow-y-auto px-4">
            <div className="mb-4">
              <p className="text-gray-400 text-sm">
                "{searchQuery}" {t('search.searchResults')} ({searchResults.length})
              </p>
            </div>
            <div className="space-y-3">
              {searchResults.map((story) => (
                <StoryCard
                  key={story.id}
                  id={story.id}
                  title={story.title}
                  subtitle={translateStoryDescription(story.title, story.introduction.introduction)}
                  author={story.creatorHandle}
                  tags={story.introduction.tags}
                  imageUrl={story.media.thumbnailImage}
                  characterName={story.content.characterName}
                  layout="horizontal"
                  onStorySelect={onStorySelect}
                  stats={{
                    likes: story.stats.likes,
                    chats: story.stats.plays,
                    popularity: story.stats.views
                  }}
                />
              ))}
            </div>
          </div>
        ) : (
          /* No Results */
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-[#2a2b2b] flex items-center justify-center mb-4">
              <div
                className="bg-no-repeat bg-size-[100%_100%] bg-top-left w-8 h-8 opacity-60"
                style={{ backgroundImage: `url('${imgSearch}')` }}
              />
            </div>
            <h3 className="text-white text-lg font-medium mb-2">{t('search.noResults')}</h3>
            <p className="text-gray-400 text-sm mb-4">
              {t('search.tryDifferentKeywords')}<br />
              {t('search.orCreateNewStory')}
            </p>
            <button
              onClick={handleClearSearch}
              className="px-6 py-2 bg-[#dc5903] text-white rounded-full hover:bg-[#e6850e] transition-colors"
            >
              {t('search.clearSearch')}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
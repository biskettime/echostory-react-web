import { useState, useEffect } from 'react';
import svgPaths from "../imports/svg-p0qi0bj4sf";
import { t, addLanguageChangeListener, removeLanguageChangeListener } from '../utils/i18n';
import { searchStories } from '../data/stories';
import { translateStoryTitle, translateCharacterName } from '../utils/storyTranslation';
// import imgSearch from "figma:asset/ef863f04724e3ed7ded20a0b62b98cd5a1b82d91.png";
const imgSearch = "/images/search-icon.svg";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [, forceUpdate] = useState({});

  // Language change listener
  useEffect(() => {
    const handleLanguageChange = () => {
      forceUpdate({});
    };

    addLanguageChangeListener(handleLanguageChange);
    return () => removeLanguageChangeListener(handleLanguageChange);
  }, []);

  // Enhanced search functionality with Korean support
  useEffect(() => {
    if (searchQuery.trim().length > 0) {
      const query = searchQuery.trim().toLowerCase();
      
      // Get all stories first
      const allStories = searchStories(''); // Get all stories
      
      // Enhanced search that includes translated titles and character names
      const results = allStories.filter(story => {
        // Original English search
        const englishMatch = 
          story.title.toLowerCase().includes(query) ||
          story.introduction.introduction.toLowerCase().includes(query) ||
          story.content.characterName.toLowerCase().includes(query) ||
          story.introduction.tags.some(tag => tag.toLowerCase().includes(query)) ||
          story.metadata.category.toLowerCase().includes(query);
        
        // Korean translated search
        const translatedTitle = translateStoryTitle(story.title).toLowerCase();
        const translatedCharacterName = translateCharacterName(story.content.characterName).toLowerCase();
        
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
          story.introduction.tags.some(tag => {
            const translatedTag = categoryMapping[tag.toLowerCase()] || tag;
            return translatedTag.toLowerCase().includes(query);
          });
        
        return englishMatch || koreanMatch;
      });
      
      console.log('Search query:', query);
      console.log('Search results:', results);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />
      
      {/* Modal Content - Properly constrained mobile container */}
      <div className="relative w-full h-full max-w-md mx-auto bg-[#1a1b1b] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-[#1a1b1b] flex flex-row h-[42px] items-center justify-between px-4 py-0 flex-shrink-0 border-b border-[#2a2b2b]">
          {/* Logo */}
          <div className="flex items-center min-w-0 flex-1">
            <img 
              src="/images/echostory.png" 
              alt="EchoStory" 
              className="h-12 w-auto object-contain"
              onError={(e) => {
                // Fallback to text if image fails to load
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const fallbackDiv = document.createElement('div');
                fallbackDiv.className = 'text-white text-xl font-medium tracking-wide truncate';
                fallbackDiv.innerHTML = 'Echo<span class="text-[#ff9500]">Story</span>';
                target.parentNode?.appendChild(fallbackDiv);
              }}
            />
          </div>

          {/* Close Button */}
          <button 
            onClick={onClose}
            className="flex items-center justify-center w-6 h-6 text-white hover:opacity-70 transition-opacity flex-shrink-0 ml-2"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>

        {/* Search Input Section */}
        <div className="bg-[#1a1b1b] px-4 py-4 border-b border-[#2a2b2b] flex-shrink-0">
          <div className="bg-[#2a2b2b] rounded-md overflow-hidden">
            <div className="flex flex-row items-center px-3 py-2.5 gap-2">
              {/* Search Icon */}
              <div className="flex-shrink-0">
                <div
                  className="w-4 h-4 bg-no-repeat bg-center bg-contain opacity-60"
                  style={{ backgroundImage: `url('${imgSearch}')` }}
                />
              </div>

              {/* Input Field */}
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t('search.placeholder')}
                className="flex-1 bg-transparent border-none outline-none text-white text-sm placeholder:text-[#888888] min-w-0"
                autoFocus
              />
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col px-4 bg-[#1a1b1b] overflow-hidden">
          {searchQuery.length === 0 ? (
            /* Empty State */
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <div className="text-[#888888] text-sm">
                  {t('search.enterSearchTerm')}
                </div>
              </div>
            </div>
          ) : (
            /* Search Results */
            <div className="flex-1 flex flex-col py-4">
              <div className="text-[#888888] text-sm mb-4">
                "{searchQuery}" {t('search.searchResults')}
              </div>
              
              {searchResults.length > 0 ? (
                <div className="flex-1 overflow-y-auto space-y-3">
                  {searchResults.map((story) => (
                    <div key={story.id} className="bg-[#2a2b2b] rounded-lg p-4 hover:bg-[#3a3b3b] transition-colors cursor-pointer">
                      <div className="flex items-start gap-3">
                        <div className="w-12 h-12 bg-[#3a3b3b] rounded-lg flex-shrink-0 overflow-hidden">
                          <img 
                            src={story.thumbnailImage || '/images/echostory.png'} 
                            alt={story.title}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = '/images/echostory.png';
                            }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-white text-sm font-medium mb-1 truncate">
                            {story.content?.characterName ? translateCharacterName(story.content.characterName) : translateStoryTitle(story.title)}
                          </h3>
                          <p className="text-[#888888] text-xs line-clamp-2">
                            {story.introduction?.introduction || story.description || ''}
                          </p>
                          <div className="flex items-center gap-2 mt-2">
                            <span className="text-[#666666] text-xs">
                              {story.stats?.views || 0} {t('search.views')}
                            </span>
                            <span className="text-[#666666] text-xs">•</span>
                            <span className="text-[#666666] text-xs">
                              {story.stats?.likes || 0} {t('search.likes')}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex-1 flex items-center justify-center">
                  <div className="text-center text-[#666666] text-sm">
                    {t('search.noResults')}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Popular searches - only show when no search query */}
        {searchQuery.length === 0 && (
          <div className="px-4 pb-6 flex-shrink-0">
            <div className="mb-3">
              <h3 className="text-white text-sm font-medium mb-3">{t('search.popularSearches')}</h3>
              <div className="flex flex-wrap gap-2">
                {['판타지', '로맨스', '학원', '일상', '미스터리'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSearchQuery(tag)}
                    className="bg-[#2a2b2b] text-[#ff9500] text-xs px-3 py-1.5 rounded-full hover:bg-[#3a3a3a] transition-colors flex-shrink-0"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
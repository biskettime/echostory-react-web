import { useState } from 'react';
import svgPaths from "../imports/svg-p0qi0bj4sf";
// import imgSearch from "figma:asset/ef863f04724e3ed7ded20a0b62b98cd5a1b82d91.png";
const imgSearch = "/images/search-icon.svg";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [searchQuery, setSearchQuery] = useState('');

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
            <div className="text-white text-xl font-medium tracking-wide truncate">
              Echo<span className="text-[#ff9500]">Story</span>
            </div>
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
                placeholder="ex. 판타지"
                className="flex-1 bg-transparent border-none outline-none text-white text-sm placeholder:text-[#888888] min-w-0"
                autoFocus
              />
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col items-center justify-center px-4 bg-[#1a1b1b] overflow-hidden">
          {searchQuery.length === 0 ? (
            /* Empty State */
            <div className="text-center">
              <div className="text-[#888888] text-sm">
                검색어를 입력해주세요
              </div>
            </div>
          ) : (
            /* Search Results */
            <div className="w-full max-w-full">
              <div className="text-center text-[#888888] text-sm mb-4">
                "{searchQuery}"에 대한 검색 결과
              </div>
              {/* Here you can add actual search results */}
              <div className="text-center text-[#666666] text-xs">
                검색 결과가 없습니다
              </div>
            </div>
          )}
        </div>

        {/* Popular searches - only show when no search query */}
        {searchQuery.length === 0 && (
          <div className="px-4 pb-6 flex-shrink-0">
            <div className="mb-3">
              <h3 className="text-white text-sm font-medium mb-3">인기 검색어</h3>
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
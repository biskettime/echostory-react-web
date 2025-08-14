import { useState } from 'react';
import { ChevronRight, Plus, X } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import svgPaths from '../imports/svg-cn1opys1e8';
// 스타일 이미지들
const imgAnime = "/images/style-anime.svg";
const img25D = "/images/style-25d.svg";
const imgColorful = "/images/style-colorful.svg";
const imgDetailedAnime = "/images/style-detailed-anime.svg";
const imgAnimeMovie = "/images/style-anime-movie.svg";
const imgRealistic1 = "/images/style-realistic1.svg";
const imgKorean = "/images/style-korean.svg";
const imgJapanese = "/images/style-japanese.svg";
const imgRealistic2 = "/images/style-realistic2.svg";

export function ImageGenerationTab() {
  const [selectedModel, setSelectedModel] = useState('Anime');
  const [imageCount, setImageCount] = useState(1);
  const [keywords, setKeywords] = useState<string[]>(['Female']);
  const [currentKeyword, setCurrentKeyword] = useState('');

  const models = [
    { name: 'Anime', image: imgAnime },
    { name: '2.5D', image: img25D },
    { name: 'Colorful', image: imgColorful },
    { name: 'Detailed Anime', image: imgDetailedAnime },
    { name: 'Anime Movie', image: imgAnimeMovie },
    { name: 'Realistic1', image: imgRealistic1 },
    { name: 'Korean', image: imgKorean },
    { name: 'Japanese', image: imgJapanese },
    { name: 'Realistic2', image: imgRealistic2 }
  ];

  const suggestionKeywords = ['Dress', 'Long Hair', 'Blue Eyes', 'Bob Cut', 'Cute'];

  const handleAddKeyword = (keyword: string) => {
    if (keyword.trim() && !keywords.includes(keyword.trim())) {
      setKeywords([...keywords, keyword.trim()]);
    }
  };

  const handleRemoveKeyword = (index: number) => {
    setKeywords(keywords.filter((_, i) => i !== index));
  };

  const handleKeywordInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && currentKeyword.trim()) {
      handleAddKeyword(currentKeyword);
      setCurrentKeyword('');
    }
  };

  const handleGenerate = () => {
    console.log('Generating images with:', {
      model: selectedModel,
      count: imageCount,
      keywords
    });
  };

  return (
    <div className="px-4 pt-3 pb-[100px] space-y-6">
      {/* Image Generation Guide Link */}
      <div className="flex justify-end">
        <div className="bg-[rgba(0,0,0,0.5)] rounded px-2.5 py-[3px] flex items-center gap-0.5">
          <span className="text-[#ff9500] text-xs font-medium">Image Generation Guide</span>
          <div className="w-[13px] h-[13px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
              <path
                clipRule="evenodd"
                d={svgPaths.p4ab5000}
                fill="#FF9500"
                fillRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Generation Keywords Section */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <div className="w-1 h-4 bg-[#1890ff] rounded-sm"></div>
          <h3 className="text-white text-[13.125px] font-medium">Generation Keywords</h3>
        </div>

        {/* Current Keywords */}
        <div className="flex flex-wrap gap-0">
          {keywords.map((keyword, index) => (
            <div key={index} className="bg-[#1d1d1d] border border-[#424242] rounded h-[27px] px-2 flex items-center gap-2 relative">
              <span className="text-white text-xs">{keyword}</span>
              <button
                onClick={() => handleRemoveKeyword(index)}
                className="text-gray-400 hover:text-white"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>

        {/* Add Keyword Input */}
        <div className="flex gap-2">
          <Input
            value={currentKeyword}
            onChange={(e) => setCurrentKeyword(e.target.value)}
            onKeyDown={handleKeywordInput}
            placeholder="Add keyword..."
            className="flex-1 bg-[#1d1d1d] border-[#424242] text-white placeholder-gray-400"
          />
          <Button
            onClick={() => {
              if (currentKeyword.trim()) {
                handleAddKeyword(currentKeyword);
                setCurrentKeyword('');
              }
            }}
            className="bg-[#dc5903] hover:bg-[#dc5903]/90 text-white"
          >
            <Plus className="w-4 h-4" />
          </Button>
        </div>

        {/* Suggestion Keywords */}
        <div className="flex flex-wrap gap-1">
          {suggestionKeywords.map((keyword) => (
            <button
              key={keyword}
              onClick={() => handleAddKeyword(keyword)}
              className="bg-[#2d2d2d] hover:bg-[#3d3d3d] text-gray-300 text-xs px-2 py-1 rounded border border-[#424242]"
            >
              {keyword}
            </button>
          ))}
        </div>
      </div>

      {/* Model Selection */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <div className="w-1 h-4 bg-[#1890ff] rounded-sm"></div>
          <h3 className="text-white text-[13.125px] font-medium">Model</h3>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {models.map((model) => (
            <button
              key={model.name}
              onClick={() => setSelectedModel(model.name)}
              className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                selectedModel === model.name 
                  ? 'border-[#dc5903]' 
                  : 'border-[#424242] hover:border-[#666]'
              }`}
            >
              <div className="w-full h-full bg-[#2d2d2d] flex items-center justify-center">
                <span className="text-white text-xs text-center">{model.name}</span>
              </div>
              {selectedModel === model.name && (
                <div className="absolute top-1 right-1 w-4 h-4 bg-[#dc5903] rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Image Count Selection */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <div className="w-1 h-4 bg-[#1890ff] rounded-sm"></div>
          <h3 className="text-white text-[13.125px] font-medium">Number of Images</h3>
        </div>

        <div className="flex gap-2">
          {[1, 2, 3, 4].map((count) => (
            <button
              key={count}
              onClick={() => setImageCount(count)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                imageCount === count
                  ? 'bg-[#dc5903] text-white'
                  : 'bg-[#2d2d2d] text-gray-300 hover:bg-[#3d3d3d] border border-[#424242]'
              }`}
            >
              {count} image{count > 1 ? 's' : ''}
            </button>
          ))}
        </div>
      </div>

      {/* Generate Button */}
      <div className="pt-4">
        <Button
          onClick={handleGenerate}
          className="w-full bg-[#dc5903] hover:bg-[#dc5903]/90 text-white h-8 rounded-md shadow-[0px_2px_0px_0px_rgba(180,60,0,0.15)]"
        >
          Generate Images (10P)
        </Button>
      </div>
    </div>
  );
}
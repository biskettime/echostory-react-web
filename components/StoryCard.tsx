import { ImageWithFallback } from './figma/ImageWithFallback';
import { Badge } from './ui/badge';
import { Heart, MessageCircle, TrendingUp, Sparkles, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { useState, useEffect } from 'react';
import { t, addLanguageChangeListener, removeLanguageChangeListener } from '../utils/i18n';
import { translateStoryTitle, translateCharacterName, translateTag } from '../utils/storyTranslation';

interface StoryCardProps {
  id: string;
  title: string;
  subtitle: string;
  author: string;
  tags: string[];
  imageUrl: string;
  ranking?: number;
  stats?: {
    likes: number;
    chats: number;
    popularity: number;
  };
  isHot?: boolean;
  isNew?: boolean;
  description?: string;
  mood?: 'romantic' | 'professional' | 'magical' | 'healing' | 'cozy' | 'futuristic';
  layout?: 'vertical' | 'horizontal';
  characterName?: string;
  onStorySelect?: (storyId: string) => void;
}

export function StoryCard({ 
  id,
  title, 
  subtitle, 
  author, 
  tags, 
  imageUrl, 
  ranking, 
  stats,
  isHot,
  isNew,
  description,
  mood = 'romantic',
  layout = 'vertical',
  characterName,
  onStorySelect
}: StoryCardProps) {
  const [, forceUpdate] = useState({});
  const [finalImageUrl, setFinalImageUrl] = useState<string>('');

  // Language change listener
  useEffect(() => {
    const handleLanguageChange = () => {
      forceUpdate({});
    };

    addLanguageChangeListener(handleLanguageChange);
    return () => removeLanguageChangeListener(handleLanguageChange);
  }, []);

  // Enhanced image handling
  useEffect(() => {
    const loadImage = async () => {
      // First try character images if characterName is provided
      if (characterName) {


        try {
          // 새로운 분류 코드 시스템 사용
          const { getCharacterImageWithFallbackNew } = await import('../utils/storyImageMapping');
          const imagePath = await getCharacterImageWithFallbackNew(characterName, 1);
          
          if (imagePath && !imagePath.includes('echostory.png')) {
            console.log(`✅ StoryCard - Character image loaded: ${imagePath}`);
            setFinalImageUrl(imagePath);
            return;
          }
        } catch (error) {
          console.error('StoryCard - Error loading character image:', error);
        }
      }

      // Then try the provided imageUrl
      if (imageUrl && imageUrl !== '/images/echostory.png') {
        try {
          const response = await fetch(imageUrl, { method: 'HEAD' });
          if (response.ok) {
            setFinalImageUrl(imageUrl);
            return;
          }
        } catch (error) {
          // Continue to fallback
        }
      }

      // Finally fallback to echostory.png
      setFinalImageUrl('/images/echostory.png');
    };

    loadImage();
  }, [imageUrl, characterName]);
  
  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  const getMoodGradient = (mood: string) => {
    switch (mood) {
      case 'romantic':
        return 'from-pink-500/20 to-red-500/20';
      case 'professional':
        return 'from-blue-500/20 to-purple-500/20';
      case 'magical':
        return 'from-purple-500/20 to-indigo-500/20';
      case 'healing':
        return 'from-green-500/20 to-teal-500/20';
      case 'cozy':
        return 'from-orange-500/20 to-yellow-500/20';
      case 'futuristic':
        return 'from-cyan-500/20 to-blue-500/20';
      default:
        return 'from-gray-500/20 to-gray-600/20';
    }
  };

  if (layout === 'horizontal') {
    return (
      <div className="group bg-[#2a2b2b] rounded-lg overflow-hidden border border-[#3a3b3b] hover:border-[#ff9500]/30 transition-all duration-200 hover:bg-[#2f3030]">
        <div className="flex items-center p-3 gap-3">
          {/* Image Section */}
          <div className="relative flex-shrink-0 w-16 h-16 rounded-md overflow-hidden">
            <ImageWithFallback 
              src={finalImageUrl || '/images/echostory.png'} 
              alt={translateStoryTitle(title)}
              className="w-full h-full object-cover"
            />
            
            {ranking && (
              <div className="absolute -top-1 -left-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shadow-lg">
                {ranking}
              </div>
            )}
          </div>

          {/* Content Section */}
          <div className="flex-1 min-w-0 relative">
            {/* Open Story Button */}
            <button 
              onClick={() => {
                console.log('StoryCard - Open Story button clicked:', {
                  id,
                  title,
                  characterName
                });
                onStorySelect?.(id);
              }}
              className="absolute top-0 right-0 text-xs px-2 py-1 bg-[#ff9500] text-white rounded-md hover:bg-[#e6850e] transition-colors"
            >
              {t('storyCard.openStory')}
            </button>
            
            <h3 className="font-medium text-white text-sm truncate mb-1 group-hover:text-[#ff9500] transition-colors pr-16">
              {translateStoryTitle(title)}
            </h3>
            <p className="text-xs text-gray-400 truncate mb-2">{subtitle}</p>
            
            <div className="flex items-center justify-between">
              <div className="flex gap-1">
                {tags.slice(0, 2).map((tag, index) => (
                  <span key={index} className="text-xs px-2 py-0.5 bg-[#ff9500]/20 text-[#ff9500] rounded-full">
                    #{translateTag(tag)}
                  </span>
                ))}
              </div>
              
              {stats && (
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <Heart size={10} />
                    <span>{formatNumber(stats.likes)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle size={10} />
                    <span>{formatNumber(stats.chats)}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group bg-card/80 backdrop-blur-sm rounded-xl overflow-hidden border border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
      {/* Image Section */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <ImageWithFallback 
          src={finalImageUrl || '/images/echostory.png'} 
          alt={characterName ? translateCharacterName(characterName) : translateStoryTitle(title)}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${getMoodGradient(mood)} opacity-0 group-hover:opacity-100 transition-opacity`} />
        
        {ranking && (
          <div className="absolute top-2 left-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold shadow-lg">
            {ranking}
          </div>
        )}
        
        <div className="absolute top-2 right-2 flex flex-col space-y-1">
          {/* Open Story Button */}
          <button 
            onClick={() => onStorySelect?.(id)}
            className="text-xs px-2 py-1 bg-[#ff9500] text-white rounded-md hover:bg-[#e6850e] transition-colors shadow-lg"
          >
            {t('storyCard.openStory')}
          </button>
          
          {isHot && (
            <Badge className="bg-red-500 text-white text-xs px-2 py-1 shadow-lg">
              <TrendingUp size={10} className="mr-1" />
              HOT
            </Badge>
          )}
          {isNew && (
            <Badge className="bg-green-500 text-white text-xs px-2 py-1 shadow-lg">
              <Sparkles size={10} className="mr-1" />
              NEW
            </Badge>
          )}
        </div>

        {/* Hover overlay with quick stats */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
          <Button 
            size="sm" 
            className="bg-white/90 text-gray-900 hover:bg-white transform translate-y-4 group-hover:translate-y-0 transition-transform"
          >
            <MessageCircle size={14} className="mr-1" />
            {t('storyCard.startChat')}
          </Button>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 space-y-3">
        <div>
          <h3 className="font-bold text-foreground group-hover:text-primary transition-colors mb-1">
            {translateStoryTitle(title)}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{subtitle}</p>
        </div>

        {description && (
          <p className="text-xs text-muted-foreground/80 line-clamp-2 leading-relaxed">
            {description}
          </p>
        )}

        <div className="flex flex-wrap gap-1 mb-2">
          {tags.slice(0, 3).map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs px-2 py-1 bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
              #{translateTag(tag)}
            </Badge>
          ))}
        </div>

        {stats && (
          <div className="flex items-center justify-between pt-2 border-t border-border/50">
            <div className="flex items-center space-x-3 text-xs text-muted-foreground">
              <div className="flex items-center space-x-1 hover:text-red-500 transition-colors">
                <Heart size={12} />
                <span>{formatNumber(stats.likes)}</span>
              </div>
              <div className="flex items-center space-x-1 hover:text-blue-500 transition-colors">
                <MessageCircle size={12} />
                <span>{formatNumber(stats.chats)}</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-1">
              <div className={`w-2 h-2 rounded-full ${
                stats.popularity >= 95 ? 'bg-red-500' :
                stats.popularity >= 90 ? 'bg-orange-500' :
                stats.popularity >= 80 ? 'bg-yellow-500' : 'bg-green-500'
              } animate-pulse`} />
              <span className="text-xs text-muted-foreground font-medium">{stats.popularity}%</span>
            </div>
          </div>
        )}

        <div className="flex items-center justify-between pt-1">
          <p className="text-xs text-muted-foreground flex items-center">
            <Clock size={10} className="mr-1" />
            @{author}
          </p>
        </div>
      </div>
    </div>
  );
}
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Badge } from './ui/badge';
import { Heart, MessageCircle, TrendingUp, Sparkles, Clock } from 'lucide-react';
import { Button } from './ui/button';

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
}

export function StoryCard({ 
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
  layout = 'vertical'
}: StoryCardProps) {
  
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
      <div className="group bg-card/80 backdrop-blur-sm rounded-xl overflow-hidden border border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
        <div className="flex">
          {/* Image Section */}
          <div className="relative flex-shrink-0 w-20 h-20">
            <ImageWithFallback 
              src={imageUrl} 
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className={`absolute inset-0 bg-gradient-to-br ${getMoodGradient(mood)} opacity-0 group-hover:opacity-100 transition-opacity`} />
            
            {ranking && (
              <div className="absolute -top-1 -left-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shadow-lg">
                {ranking}
              </div>
            )}
            
            {isHot && (
              <div className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1">
                <TrendingUp size={10} />
              </div>
            )}
            
            {isNew && (
              <div className="absolute top-1 right-1 bg-green-500 text-white rounded-full p-1">
                <Sparkles size={10} />
              </div>
            )}
          </div>

          {/* Content Section */}
          <div className="flex-1 p-3 min-w-0">
            <div className="flex items-start justify-between mb-2">
              <div className="min-w-0 flex-1">
                <h3 className="font-bold text-foreground truncate group-hover:text-primary transition-colors">
                  {title}
                </h3>
                <p className="text-xs text-muted-foreground truncate mb-1">{subtitle}</p>
              </div>
              
              {stats && (
                <div className="flex items-center space-x-1 ml-2">
                  <div className={`w-2 h-2 rounded-full ${
                    stats.popularity >= 95 ? 'bg-red-500' :
                    stats.popularity >= 90 ? 'bg-orange-500' :
                    stats.popularity >= 80 ? 'bg-yellow-500' : 'bg-green-500'
                  } animate-pulse`} />
                  <span className="text-xs text-muted-foreground">{stats.popularity}%</span>
                </div>
              )}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-1">
                {tags.slice(0, 2).map((tag, index) => (
                  <Badge key={index} variant="secondary" className="text-xs px-2 py-0 bg-primary/10 text-primary">
                    #{tag}
                  </Badge>
                ))}
              </div>
              
              {stats && (
                <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Heart size={10} />
                    <span>{formatNumber(stats.likes)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
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
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${getMoodGradient(mood)} opacity-0 group-hover:opacity-100 transition-opacity`} />
        
        {ranking && (
          <div className="absolute top-2 left-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold shadow-lg">
            {ranking}
          </div>
        )}
        
        <div className="absolute top-2 right-2 flex flex-col space-y-1">
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
            Start Chat
          </Button>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 space-y-3">
        <div>
          <h3 className="font-bold text-foreground group-hover:text-primary transition-colors mb-1">
            {title}
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
              #{tag}
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
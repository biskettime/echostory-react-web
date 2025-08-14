import { useState, useEffect } from 'react';
import { X, Check, Users, BookOpen, UserPlus, UserCheck } from 'lucide-react';
import { CreatorInfo } from '../data/stories/types';
import { getStoriesByCreator } from '../data/stories';

interface CreatorProfileModalProps {
  creator: CreatorInfo;
  isOpen: boolean;
  onClose: () => void;
  onStorySelect?: (storyId: string) => void;
  onFollowChange?: (creatorId: number, isFollowing: boolean) => void;
}

export function CreatorProfileModal({ creator, isOpen, onClose, onStorySelect, onFollowChange }: CreatorProfileModalProps) {
  const [isFollowing, setIsFollowing] = useState(false);
  const [followerCount, setFollowerCount] = useState(creator.stats.followers);

  useEffect(() => {
    // 로컬 스토리지에서 팔로우 상태 확인
    const followedCreators = JSON.parse(localStorage.getItem('followedCreators') || '[]');
    setIsFollowing(followedCreators.includes(creator.id.toString()));
  }, [creator.id]);

  const handleFollowToggle = () => {
    const followedCreators = JSON.parse(localStorage.getItem('followedCreators') || '[]');
    
    if (isFollowing) {
      // 언팔로우
      const newFollowedCreators = followedCreators.filter((id: string) => id !== creator.id.toString());
      localStorage.setItem('followedCreators', JSON.stringify(newFollowedCreators));
      setIsFollowing(false);
      setFollowerCount(prev => Math.max(0, prev - 1));
      onFollowChange?.(parseInt(creator.id), false);
    } else {
      // 팔로우
      if (!followedCreators.includes(creator.id.toString())) {
        followedCreators.push(creator.id.toString());
      }
      localStorage.setItem('followedCreators', JSON.stringify(followedCreators));
      setIsFollowing(true);
      setFollowerCount(prev => prev + 1);
      onFollowChange?.(parseInt(creator.id), true);
    }
  };

  if (!isOpen) return null;

  const creatorStories = getStoriesByCreator(creator.id);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-[#1a1b1b] rounded-lg max-w-md w-full max-h-[80vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-[#424242]">
          <h2 className="text-white text-lg font-medium">Creator Profile</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 overflow-y-auto max-h-[calc(80vh-80px)]">
          {/* Creator Info */}
          <div className="flex items-center gap-4 mb-6">
            {/* Profile Image */}
            <div className="w-16 h-16 rounded-full overflow-hidden bg-[#3a3a3a] flex-shrink-0">
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
            </div>
            
            {/* Creator Details */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-white text-lg font-medium truncate">
                  {creator.displayName}
                </h3>
                {creator.badges && creator.badges.includes('Verified') && (
                  <div className="w-5 h-5 bg-[#ff9500] rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                )}
              </div>
              <p className="text-[#808080] text-sm mb-2">{creator.handle}</p>
              {creator.bio && (
                <p className="text-[#cccccc] text-sm">{creator.bio}</p>
              )}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-[#2a2a2a] rounded-lg">
            <div className="text-center">
              <div className="text-white text-lg font-medium">
                {creator.stats.totalStories}
              </div>
              <div className="text-[#808080] text-xs">Stories</div>
            </div>
            <div className="text-center">
              <div className="text-white text-lg font-medium">
                {followerCount.toLocaleString()}
              </div>
              <div className="text-[#808080] text-xs">Followers</div>
            </div>
            <div className="text-center">
              <div className="text-white text-lg font-medium">
                {creator.stats.totalLikes.toLocaleString()}
              </div>
              <div className="text-[#808080] text-xs">Likes</div>
            </div>
          </div>

          {/* Join Date */}
          <div className="mb-6">
            <p className="text-[#808080] text-sm">
              Joined {new Date(creator.joinDate).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long' 
              })}
            </p>
          </div>

          {/* Stories Section */}
          <div className="mb-4">
            <h4 className="text-white text-md font-medium mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Stories ({creatorStories.length})
            </h4>
            
            {creatorStories.length > 0 ? (
              <div className="space-y-3">
                {creatorStories.slice(0, 5).map((story) => (
                  <div
                    key={story.id}
                    onClick={() => {
                      if (onStorySelect) {
                        onStorySelect(story.id);
                        onClose();
                      }
                    }}
                    className="flex items-center gap-3 p-3 bg-[#2a2a2a] rounded-lg hover:bg-[#3a3a3a] cursor-pointer transition-colors"
                  >
                    {/* Story Thumbnail */}
                    <div className="w-12 h-12 rounded-lg overflow-hidden bg-[#424242] flex-shrink-0">
                      {story.media?.thumbnailImage ? (
                        <img
                          src={story.media.thumbnailImage}
                          alt={story.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-[#424242] flex items-center justify-center">
                          <BookOpen className="w-5 h-5 text-gray-500" />
                        </div>
                      )}
                    </div>
                    
                    {/* Story Info */}
                    <div className="flex-1 min-w-0">
                      <h5 className="text-white text-sm font-medium truncate mb-1">
                        {story.title}
                      </h5>
                      <div className="flex items-center gap-3 text-xs text-[#808080]">
                        <span>{story.stats.views.toLocaleString()} views</span>
                        <span>{story.stats.likes.toLocaleString()} likes</span>
                      </div>
                    </div>
                  </div>
                ))}
                
                {creatorStories.length > 5 && (
                  <div className="text-center">
                    <p className="text-[#808080] text-sm">
                      +{creatorStories.length - 5} more stories
                    </p>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-8">
                <BookOpen className="w-12 h-12 text-gray-500 mx-auto mb-3" />
                <p className="text-[#808080] text-sm">No stories yet</p>
              </div>
            )}
          </div>

          {/* Follow Button */}
          <div className="pt-4 border-t border-[#424242]">
            <button 
              onClick={handleFollowToggle}
              className={`w-full py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 ${
                isFollowing
                  ? 'bg-gray-600 text-white hover:bg-gray-700'
                  : 'bg-[#dc5903] text-white hover:bg-[#e6850e]'
              }`}
            >
              {isFollowing ? (
                <>
                  <UserCheck className="w-4 h-4" />
                  팔로잉
                </>
              ) : (
                <>
                  <UserPlus className="w-4 h-4" />
                  팔로우
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

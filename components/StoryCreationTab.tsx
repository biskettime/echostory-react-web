import { useState, useEffect } from 'react';
import { Plus, Pencil, Calendar, Heart, MessageSquare, Eye, Play, Trash2 } from 'lucide-react';
import { PlayUnavailableModal } from './PlayUnavailableModal';
import { getAllStories, getUserDrafts, deleteStory, deleteDraft, CreatedStoryData, StoryDraft } from '../data/stories';
import { t, addLanguageChangeListener, removeLanguageChangeListener, getCurrentLanguage } from '../utils/i18n';
import { translateStoryTitle } from '../utils/storyTranslation';
import { IndexedDBImage } from './IndexedDBImage';

interface StoryCreationTabProps {
  onNavigateToStoryCreation: () => void;
  onNavigateToInProgressStory: (storyId: string) => void;
}

interface Story {
  id: string;
  title: string;
  status: 'published' | 'draft' | 'in-progress';
  lastEdited: string;
  views: number;
  likes: number;
  comments: number;
  favorites?: number;
  thumbnail?: string;
  originalData?: CreatedStoryData | StoryDraft;
}

export function StoryCreationTab({ onNavigateToStoryCreation, onNavigateToInProgressStory }: StoryCreationTabProps) {
  const [showPlayModal, setShowPlayModal] = useState(false);
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);
  const [forceUpdate, setForceUpdate] = useState(0);

  // Load user's stories and drafts
  useEffect(() => {
    loadUserStories();
  }, []);

  // Language change listener
  useEffect(() => {
    const handleLanguageChange = () => {
      setForceUpdate(prev => prev + 1);
    };

    addLanguageChangeListener(handleLanguageChange);
    return () => removeLanguageChangeListener(handleLanguageChange);
  }, []);

  const loadUserStories = async () => {
    setLoading(true);
    try {
      // Get user profile from localStorage
      const userProfile = JSON.parse(localStorage.getItem('userProfile') || '{}');
      const creatorId = userProfile.username || 'creator_user';
      
      // Get all stories created by current user (excluding sample stories)
      const allStories = getAllStories();
      // Filter out sample stories (rf001, rm001) but keep user's own stories
      const userStories = allStories.filter(story => {
        if (story.id === 'rf001' || story.id === 'rm001') {
          return false; // Exclude sample stories
        }
        return story.creatorId === creatorId;
      });
      
      // Get user's drafts
      const drafts = getUserDrafts(creatorId);
      
      // Convert to Story format
      const formattedStories: Story[] = [];
      
      // Add published stories (only those that are actually published)
      userStories.forEach(story => {
        // Check if story is actually published
        if (story.metadata?.isPublished) {
          // 언어에 따라 제목 선택
          const currentLang = getCurrentLanguage();
          const displayTitle = currentLang === 'en' && story.titleEn ? story.titleEn : story.title;
          
          formattedStories.push({
            id: story.id,
            title: translateStoryTitle(displayTitle), // 번역 함수 적용
            status: 'published',
            lastEdited: getRelativeTime(new Date(story.updatedAt || story.createdAt)),
            views: story.stats.views,
            likes: story.stats.likes,
            comments: story.stats.comments || 0,
            favorites: Math.floor(Math.random() * 50) + 5, // Random favorites count
            thumbnail: story.media?.thumbnailImage,
            originalData: story
          });
        }
      });
      
      // Add draft stories
      drafts.forEach(draft => {
        // 드래프트도 스토리 제목 사용
        const draftTitle = draft.data?.title || draft.title?.trim() || t('create.untitledDraft');
        formattedStories.push({
          id: draft.id,
          title: translateStoryTitle(draftTitle), // 번역 함수 적용
          status: draft.progress.overallProgress < 50 ? 'in-progress' : 'draft',
          lastEdited: getRelativeTime(new Date(draft.lastSaved)),
          views: 0,
          likes: 0,
          comments: 0,
          favorites: 0,
          thumbnail: draft.data?.media?.thumbnailImage,
          originalData: draft
        });
      });
      
      // Sort by last edited (most recent first)
      formattedStories.sort((a, b) => {
        const dateA = a.originalData && 'lastSaved' in a.originalData 
          ? new Date(a.originalData.lastSaved).getTime()
          : a.originalData && 'updatedAt' in a.originalData
          ? new Date(a.originalData.updatedAt || a.originalData.createdAt).getTime()
          : 0;
        const dateB = b.originalData && 'lastSaved' in b.originalData
          ? new Date(b.originalData.lastSaved).getTime()
          : b.originalData && 'updatedAt' in b.originalData
          ? new Date(b.originalData.updatedAt || b.originalData.createdAt).getTime()
          : 0;
        return dateB - dateA;
      });
      
      setStories(formattedStories);
    } catch (error) {
      console.error('Failed to load stories:', error);
    } finally {
      setLoading(false);
    }
  };

  const getRelativeTime = (date: Date): string => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    
    if (days > 0) return `${days} ${days > 1 ? t('create.daysAgo') : t('create.dayAgo')}`;
    if (hours > 0) return `${hours} ${hours > 1 ? t('create.hoursAgo') : t('create.hourAgo')}`;
    if (minutes > 0) return `${minutes} ${minutes > 1 ? t('create.minutesAgo') : t('create.minuteAgo')}`;
    return t('create.justNow');
  };

  const getStatusColor = (status: Story['status']) => {
    switch (status) {
      case 'published':
        return 'text-green-400';
      case 'draft':
        return 'text-yellow-400';
      case 'in-progress':
        return 'text-orange-400';
      default:
        return 'text-gray-400';
    }
  };

  const getStatusText = (status: Story['status']) => {
    switch (status) {
      case 'published':
        return t('create.published');
      case 'draft':
        return t('create.draft');
      case 'in-progress':
        return t('create.inProgress');
      default:
        return t('create.unknown');
    }
  };

  const handleStoryClick = (story: Story) => {
    // Navigate to edit screen for drafts/in-progress, or view for published
    if (story.originalData && 'lastSaved' in story.originalData) {
      // It's a draft - open in popup modal for editing
      onNavigateToInProgressStory(story.id);
    } else {
      // It's a published story - could navigate to view/edit screen
      onNavigateToInProgressStory(story.id);
    }
  };

  const handleDeleteClick = async (e: React.MouseEvent, story: Story) => {
    e.stopPropagation();
    
    const confirmMessage = story.status === 'published' 
      ? t('create.deletePublishedConfirm')
      : t('create.deleteDraftConfirm');
    
    if (confirm(confirmMessage)) {
      try {
        if (story.originalData && 'lastSaved' in story.originalData) {
          // It's a draft
          deleteDraft(story.id);
        } else {
          // It's a published story
          deleteStory(story.id);
        }
        await loadUserStories();
      } catch (error) {
        console.error('Failed to delete story:', error);
        alert(t('create.deleteStoryFailed'));
      }
    }
  };

  const handlePlayClick = (e: React.MouseEvent, story: Story) => {
    e.stopPropagation();
    
    if (story.status === 'published') {
      // For published stories, this could navigate to the actual play screen
      console.log('Play story:', story);
      // TODO: Navigate to play screen
    } else {
      // For non-published stories, show the unavailable modal
      setShowPlayModal(true);
    }
  };

  const getProgressPercentage = (story: Story) => {
    if (story.status === 'published') {
      return 100;
    }
    
    // For drafts, use the actual progress if available
    if (story.originalData && 'progress' in story.originalData) {
      return story.originalData.progress.overallProgress || 0;
    }
    
    // Fallback based on status
    switch (story.status) {
      case 'in-progress':
        return 45;
      case 'draft':
        return 85;
      default:
        return 0;
    }
  };

  const getProgressColor = (percentage: number) => {
    if (percentage === 100) {
      return 'bg-green-500'; // 초록색 (완료)
    } else if (percentage >= 70) {
      return 'bg-blue-400'; // 연한 파란색 (70-99%)
    } else if (percentage >= 36) {
      return 'bg-yellow-400'; // 노란색 (36-69%)
    } else {
      return 'bg-orange-500'; // 주황색 (0-35%)
    }
  };

  // Get first image from story data
  const getStoryThumbnail = (story: Story) => {
    if (story.thumbnail) {
      return story.thumbnail;
    }
    
    // Try to get first image from original data
    if (story.originalData) {
      // Check if it's a CreatedStoryData with media.storyImages
      if ('media' in story.originalData) {
        const storyData = story.originalData as CreatedStoryData;
        if (storyData.media?.storyImages && Array.isArray(storyData.media.storyImages) && storyData.media.storyImages.length > 0) {
          return storyData.media.storyImages[0];
        }
      }
      
      // Check if it's a StoryDraft with nested data
      if ('data' in story.originalData) {
        const draftData = story.originalData as StoryDraft;
        if (draftData.data && 'storyImages' in draftData.data) {
          const formData = draftData.data as any;
          if (formData.storyImages && Array.isArray(formData.storyImages) && formData.storyImages.length > 0) {
            return formData.storyImages[0];
          }
        }
      }
    }
    
    return null;
  };

  // Check if story is liked
  const isStoryLiked = (storyId: string) => {
    const likedStories = JSON.parse(localStorage.getItem('likedStories') || '[]');
    return likedStories.includes(storyId);
  };



  // Toggle like status
  const toggleLike = (e: React.MouseEvent, storyId: string) => {
    e.stopPropagation();
    const likedStories = JSON.parse(localStorage.getItem('likedStories') || '[]');
    let updatedLikedStories;
    
    if (likedStories.includes(storyId)) {
      updatedLikedStories = likedStories.filter((id: string) => id !== storyId);
    } else {
      updatedLikedStories = [...likedStories, storyId];
    }
    
    localStorage.setItem('likedStories', JSON.stringify(updatedLikedStories));
    // Force re-render by updating stories state
    setStories([...stories]);
  };



  return (
    <div className="bg-[#1a1b1b] px-4">
      {/* Create New Story Button */}
        <div className="py-4">
          <button
            onClick={onNavigateToStoryCreation}
            className="w-full bg-gradient-to-r from-[#dc5903] to-[#ff7700] hover:from-[#e6850e] hover:to-[#ff8800] text-white rounded-lg p-4 flex items-center justify-center space-x-3 transition-all duration-200 shadow-lg"
          >
            <Plus className="w-5 h-5" />
            <span className="font-medium">{t('create.createNewStory')}</span>
          </button>
        </div>

      {/* Stories List */}
      {loading ? (
        <div className="flex items-center justify-center py-8">
          <div className="text-[rgba(255,255,255,0.7)]">{t('create.loading')}</div>
        </div>
      ) : (
        <div className="space-y-3">
          {stories.map((story) => (
                    <div
            key={story.id}
            onClick={() => handleStoryClick(story)}
            className="bg-[#2a2a2a] rounded-lg p-4 border border-[#424242] hover:border-[#dc5903]/30 transition-all duration-200 cursor-pointer group relative"
          >
            <div className="flex items-start justify-between">
              {/* Left side with thumbnail and content */}
              <div className="flex items-start space-x-3 flex-1 min-w-0">
                {/* Thumbnail */}
                <div className="flex-shrink-0">
                  <IndexedDBImage
                    src={getStoryThumbnail(story)}
                    alt={story.title}
                    className="w-16 h-16 rounded-lg object-cover bg-[#424242]"
                    fallback={
                      <div className="w-16 h-16 rounded-lg bg-[#424242] flex items-center justify-center">
                        <Pencil className="w-6 h-6 text-gray-500" />
                      </div>
                    }
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  {/* Title */}
                  <div className="mb-2">
                    <h3 className="text-white font-medium truncate group-hover:text-[#ff9500] transition-colors">
                      {story.title}
                    </h3>
                  </div>

                  {/* Last Edited */}
                  <div className="flex items-center space-x-2 text-xs text-gray-400 mb-3">
                    <Calendar className="w-3 h-3" />
                    <span>{t('create.lastEdited')} {story.lastEdited}</span>
                  </div>

                  {/* Stats with interactive like button */}
                  <div className="flex items-center space-x-4 text-xs text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Eye className="w-3 h-3" />
                      <span>{story.views.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <button
                        onClick={(e) => toggleLike(e, story.id)}
                        className="flex items-center space-x-1 hover:text-red-400 transition-colors"
                      >
                        <Heart className={`w-3 h-3 ${isStoryLiked(story.id) ? 'text-red-500 fill-red-500' : ''}`} />
                        <span>{story.likes}</span>
                      </button>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageSquare className="w-3 h-3" />
                      <span>{story.comments}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      {/* Bookmark Icon - Stats only, no interaction */}
                      <svg 
                        className="w-3 h-3" 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                      </svg>
                      <span>{story.favorites || 0}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Play Button and Status Badge - Top right */}
              <div className="flex flex-col items-center space-y-2">
                <button 
                  onClick={(e) => handlePlayClick(e, story)}
                  className={`p-2 rounded-full transition-colors ${
                    story.status === 'published' 
                      ? 'bg-[#dc5903] hover:bg-[#e6850e] text-white' 
                      : 'bg-[#424242] hover:bg-[#525252] text-gray-300'
                  }`}
                  title={story.status === 'published' ? t('create.playStory') : t('create.cannotPlay')}
                >
                  <Play className="w-3 h-3" />
                </button>
                
                {/* Status Badge - below play button */}
                <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(story.status)} bg-opacity-20 border ${getStatusColor(story.status).replace('text-', 'border-')} flex-shrink-0`}>
                  {getStatusText(story.status)}
                </span>
              </div>
            </div>
            
            {/* Progress indicator */}
            <div className="pt-3 border-t border-[#424242]">
              <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
                <span>{t('create.storyCompletion')}</span>
                <span>{getProgressPercentage(story)}%</span>
              </div>
              <div className="w-full bg-[#424242] rounded-full h-1.5">
                <div 
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    getProgressColor(getProgressPercentage(story))
                  }`} 
                  style={{ width: `${getProgressPercentage(story)}%` }}
                ></div>
              </div>
            </div>

            {/* Edit indicator */}
            <div className="flex items-center justify-between mt-3 pt-3 border-t border-[#424242]">
              <div className="flex items-center space-x-2 text-xs text-gray-400">
                <Pencil className="w-3 h-3" />
                <span>
                  {t('create.clickTo')} {story.status === 'published' ? t('create.clickToViewEdit') : t('create.clickToContinueEdit')}
                </span>
              </div>

            </div>
            
            {/* Delete Button - Bottom right */}
            <button 
              onClick={(e) => handleDeleteClick(e, story)}
              className="absolute bottom-2 right-2 text-gray-400 hover:text-red-400 p-1 transition-colors"
              title={t('create.deleteStory')}
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
          ))}

          {/* Empty State */}
          {stories.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-[#2a2a2a] rounded-full flex items-center justify-center mx-auto mb-4">
                <Pencil className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-white font-medium mb-2">{t('create.noStoriesYet')}</h3>
              <p className="text-gray-400 text-sm">{t('create.createFirstStory')}</p>
            </div>
          )}
        </div>
      )}

      {/* Play Unavailable Modal */}
      <PlayUnavailableModal 
        isOpen={showPlayModal}
        onClose={() => setShowPlayModal(false)}
      />
    </div>
  );
}
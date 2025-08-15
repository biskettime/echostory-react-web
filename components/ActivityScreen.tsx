import { useState, useEffect } from 'react';
import { MessageCircle, Image, Heart, Users, Clock, UserPlus, UserCheck, CheckCircle, Bookmark } from 'lucide-react';

import { getActiveChatSessions, getRelativeTime, ChatSession } from '../data/chatSessions';
import { getStory } from '../data/stories';
import { getAllCreators } from '../data/stories/creatorData';
import { CreatorProfileModal } from './CreatorProfileModal';

type ActivityTab = 'chat' | 'album' | 'favorites' | 'likes' | 'creator';

interface ChatRoom {
  id: number;
  characterName: string;
  characterImage: string;
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
  isOnline: boolean;
}

interface UnlockedPhoto {
  id: number;
  imageUrl: string;
  unlockedDate: string;
  description?: string;
}

interface CharacterAlbum {
  characterId: number;
  characterName: string;
  characterImage: string;
  unlockedPhotos: UnlockedPhoto[];
}

interface FavoriteCharacter {
  id: number;
  name: string;
  image: string;
  description: string;
  category: string;
  isFavorited: boolean;
  favoritedDate: string;
}

interface Creator {
  id: number;
  name: string;
  profileImage: string;
  bio: string;
  specialties: string[];
  followerCount: number;
  characterCount: number;
  storyCount: number;
  isFollowing: boolean;
  followedDate?: string;
  isVerified: boolean;
}

interface ActivityScreenProps {
  onNavigateToChat?: (storyId: string) => void;
}

// Simple character image component for Activity screen
function ActivityCharacterImage({ characterName, className }: { characterName: string; className: string }) {
  const [imageSrc, setImageSrc] = useState<string>('/images/sample.png');
  
  useEffect(() => {
    const loadCharacterImage = async () => {
      if (!characterName) {
        setImageSrc('/images/sample.png');
        return;
      }
      
      const firstName = characterName.split(' ')[0];
      const sanitizedName = firstName
        .replace(/[^a-zA-Z0-9가-힣]/g, '_')
        .replace(/\s+/g, '_')
        .toLowerCase()
        .replace(/^./, str => str.toUpperCase());
      
      // Try to find character image (1-10)
      for (let i = 1; i <= 10; i++) {
        const imagePath = `/data/ch_img/${sanitizedName}_${i}.png`;
        try {
          const response = await fetch(imagePath, { method: 'HEAD' });
          if (response.ok) {
            console.log(`✅ Activity - Found character image: ${imagePath}`);
            setImageSrc(imagePath);
            return;
          }
        } catch (error) {
          // Continue to next image
        }
      }
      
      console.log(`❌ Activity - No character image found for: ${characterName}`);
      setImageSrc('/images/sample.png');
    };
    
    loadCharacterImage();
  }, [characterName]);
  
  return (
    <img
      src={imageSrc}
      alt={characterName}
      className={className}
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        target.src = '/images/sample.png';
      }}
    />
  );
}

export function ActivityScreen({ onNavigateToChat }: ActivityScreenProps = {}) {
  const [activeTab, setActiveTab] = useState<ActivityTab>('chat');
  const [selectedAlbum, setSelectedAlbum] = useState<CharacterAlbum | null>(null);
  const [realChatSessions, setRealChatSessions] = useState<ChatSession[]>([]);
  const [likedStories, setLikedStories] = useState<any[]>([]);
  const [favoritedStories, setFavoritedStories] = useState<any[]>([]);
  // Creator data is now managed with useState
  const [creators, setCreators] = useState<Creator[]>([]);

  // Load real chat sessions
  useEffect(() => {
    const loadChatSessions = () => {
      const sessions = getActiveChatSessions();
      setRealChatSessions(sessions);
    };
    
    loadChatSessions();
    
    // Refresh chat sessions when tab becomes active
    if (activeTab === 'chat') {
      loadChatSessions();
    }
  }, [activeTab]);

  // Load liked and favorited stories
  useEffect(() => {
    const loadLikedAndFavoritedStories = () => {
      const likedStoryIds = JSON.parse(localStorage.getItem('likedStories') || '[]');
      const favoritedStoryIds = JSON.parse(localStorage.getItem('favoritedStories') || '[]');
      
      const likedStoriesData = likedStoryIds.map((id: string) => getStory(id)).filter(Boolean);
      const favoritedStoriesData = favoritedStoryIds.map((id: string) => getStory(id)).filter(Boolean);
      
      setLikedStories(likedStoriesData);
      setFavoritedStories(favoritedStoriesData);
    };
    
    loadLikedAndFavoritedStories();
    
    // Refresh when favorites or likes tab becomes active
    if (activeTab === 'favorites' || activeTab === 'likes') {
      loadLikedAndFavoritedStories();
    }
  }, [activeTab]);

  // Load actual creator data
  useEffect(() => {
    const loadCreators = () => {
      try {
        const allCreators = getAllCreators();
        const mappedCreators: Creator[] = allCreators.slice(0, 3).map((creator, index) => ({
          id: index + 1, // Numeric ID for ActivityScreen
          name: creator.displayName,
          profileImage: creator.profileImage || "/images/thumbnail1.svg",
          bio: creator.bio || "No creator description available.",
          specialties: creator.badges || ["General"],
          followerCount: creator.stats.followers,
          characterCount: Math.floor(Math.random() * 50) + 10, // Temporary data
          storyCount: creator.stats.totalStories,
          isFollowing: false,
          followedDate: undefined,
          isVerified: creator.badges?.includes('Verified') || false
        }));
        
        setCreators(mappedCreators);
        console.log('Loaded creators:', mappedCreators);
        
        // Save ID mapping (actual ID -> numeric ID)
        const idMapping: { [key: string]: number } = {};
        allCreators.slice(0, 3).forEach((creator, index) => {
          idMapping[creator.id] = index + 1;
        });
        localStorage.setItem('creatorIdMapping', JSON.stringify(idMapping));
        console.log('ID mapping saved:', idMapping);
      } catch (error) {
        console.error('Error loading creators:', error);
        // Use default data on error
        setCreators([
          {
            id: 1,
            name: "Miracle Studio",
            profileImage: "/images/thumbnail1.svg",
            bio: "A creative studio specializing in fantasy and romance genres.",
            specialties: ["Fantasy", "Romance"],
            followerCount: 15420,
            characterCount: 28,
            storyCount: 45,
            isFollowing: false,
            followedDate: undefined,
            isVerified: true
          }
        ]);
      }
    };
    
    loadCreators();
  }, []);

  // Load followed creators from localStorage
  useEffect(() => {
    const loadFollowedCreators = () => {
      try {
        const followedCreatorIds = JSON.parse(localStorage.getItem('followedCreators') || '[]');
        console.log('📂 Loading followed creators from localStorage:', followedCreatorIds);
        console.log('👥 Current creators:', creators.map(c => ({ id: c.id, name: c.name })));
        
        setCreators(prevCreators => {
          const updatedCreators = prevCreators.map(creator => {
            // Simple ID matching - use string comparison
            const isFollowing = followedCreatorIds.includes(creator.id.toString());
            console.log(`👤 ${creator.name} (ID: ${creator.id}) → Following: ${isFollowing}`);
            return {
              ...creator,
              isFollowing,
              followedDate: isFollowing ? new Date().toISOString().split('T')[0] : undefined
            };
          });
          console.log('✅ Creators updated with follow status:', updatedCreators.map(c => ({ id: c.id, name: c.name, isFollowing: c.isFollowing })));
          return updatedCreators;
        });
      } catch (error) {
        console.error('❌ Error loading follow status:', error);
        localStorage.setItem('followedCreators', JSON.stringify([])); // Clear on error
      }
    };
    
    if (creators.length > 0) {
      loadFollowedCreators();
    }
  }, [creators.length]); // Execute after creators are loaded

  // Detect follow status change events
  useEffect(() => {
    const handleFollowStateChanged = (event: CustomEvent) => {
      const { creatorId, isFollowing } = event.detail;
      console.log('🎯 Follow status change event detected:', creatorId, isFollowing);
      
      // Update creators state
      setCreators(prevCreators => {
        const updatedCreators = prevCreators.map(creator => {
          // Try both numeric and string ID matching
          if (creator.id === creatorId || creator.id.toString() === creatorId.toString()) {
            console.log(`🔄 Updating creator ${creator.name}: ${creator.isFollowing} → ${isFollowing}`);
            return {
              ...creator,
              isFollowing,
              followerCount: isFollowing ? creator.followerCount + 1 : Math.max(0, creator.followerCount - 1),
              followedDate: isFollowing ? new Date().toISOString().split('T')[0] : undefined
            };
          }
          return creator;
        });
        console.log('✅ Updated creators after event:', updatedCreators.map(c => ({ id: c.id, name: c.name, isFollowing: c.isFollowing })));
        return updatedCreators;
      });
      
      // Also update localStorage to ensure consistency
      const followedCreatorIds = JSON.parse(localStorage.getItem('followedCreators') || '[]');
      if (isFollowing) {
        if (!followedCreatorIds.includes(creatorId.toString())) {
          followedCreatorIds.push(creatorId.toString());
          localStorage.setItem('followedCreators', JSON.stringify(followedCreatorIds));
          console.log('💾 Added to localStorage:', creatorId);
        }
      } else {
        const index = followedCreatorIds.indexOf(creatorId.toString());
        if (index > -1) {
          followedCreatorIds.splice(index, 1);
          localStorage.setItem('followedCreators', JSON.stringify(followedCreatorIds));
          console.log('💾 Removed from localStorage:', creatorId);
        }
      }
    };

    window.addEventListener('followStateChanged', handleFollowStateChanged as EventListener);
    
    return () => {
      window.removeEventListener('followStateChanged', handleFollowStateChanged as EventListener);
    };
  }, []);

  // Creator profile modal state
  const [showCreatorProfile, setShowCreatorProfile] = useState(false);
  const [selectedCreator, setSelectedCreator] = useState<Creator | null>(null);
  const [selectedCreatorInfo, setSelectedCreatorInfo] = useState<any>(null);

  const handleCreatorClick = (creator: Creator) => {
    // Find actual creator ID
    const idMapping = JSON.parse(localStorage.getItem('creatorIdMapping') || '{}');
    const actualCreatorId = Object.keys(idMapping).find(key => idMapping[key] === creator.id);
    
    console.log('Creator clicked:', creator.name, 'Numeric ID:', creator.id, 'Actual ID:', actualCreatorId);
    
    // Convert Creator to CreatorInfo
    const creatorInfo = {
      id: actualCreatorId || creator.id.toString(), // Use actual creator ID
      handle: `@${creator.name.toLowerCase().replace(/\s+/g, '_')}`,
      displayName: creator.name,
      profileImage: creator.profileImage,
      bio: creator.bio,
      joinDate: new Date().toISOString(),
      stats: {
        totalStories: creator.storyCount,
        totalLikes: 0,
        followers: creator.followerCount,
        following: 0
      },
      badges: creator.isVerified ? ['Verified'] : []
    };
    
    setSelectedCreator(creator);
    setSelectedCreatorInfo(creatorInfo);
    setShowCreatorProfile(true);
  };

  // Sample chat room data
  const chatRooms: ChatRoom[] = [
    {
      id: 1,
      characterName: "Aria",
      characterImage: "/images/thumbnail1.svg",
      lastMessage: "Hello! What story would you like to share today?",
      lastMessageTime: "Just now",
      unreadCount: 2,
      isOnline: true
    },
    {
      id: 2,
      characterName: "Luna",
      characterImage: "/images/thumbnail2.svg",
      lastMessage: "That story was really interesting! Please continue.",
      lastMessageTime: "5 minutes ago",
      unreadCount: 0,
      isOnline: true
    },
    {
      id: 3,
      characterName: "Jayden",
      characterImage: "/images/thumbnail3.svg",
      lastMessage: "See you tomorrow! Sweet dreams~",
      lastMessageTime: "1 hour ago",
      unreadCount: 1,
      isOnline: false
    }
  ];

    // Generate album data from actual chat sessions
  const generateAlbumsFromSessions = async () => {
    const albums: CharacterAlbum[] = [];

    for (const session of realChatSessions) {
      // Get character images for this session
      const characterName = session.characterName;
      const firstName = characterName.split(' ')[0];
      const sanitizedName = firstName
        .replace(/[^a-zA-Z0-9가-힣]/g, '_')
        .replace(/\s+/g, '_')
        .toLowerCase()
        .replace(/^./, str => str.toUpperCase());
      
      // Find all character images (1-10)
      const characterImages: string[] = [];
      for (let i = 1; i <= 10; i++) {
        const imagePath = `/data/ch_img/${sanitizedName}_${i}.png`;
        try {
          const response = await fetch(imagePath, { method: 'HEAD' });
          if (response.ok) {
            characterImages.push(imagePath);
          }
        } catch (error) {
          // Continue to next image
        }
      }
      
      console.log(`📸 Album - Found ${characterImages.length} character images for ${characterName}:`, characterImages);
      
      // If no character images, use story images as fallback
      let albumImages = characterImages;
      if (albumImages.length === 0) {
        const story = getStory(session.storyId);
        const storyImages = story?.media?.storyImages || [];
        const thumbnailImage = story?.media?.thumbnailImage;
        
        albumImages = [
          ...(thumbnailImage ? [thumbnailImage] : []),
          ...storyImages
        ].filter(Boolean);
        
        // Add sample.png if no images at all
        if (albumImages.length === 0) {
          albumImages.push('/images/sample.png');
        }
      }
      
      // Find photo messages in each session and add them
      const photoMessages = session.messages.filter(message => 
        message.type === 'image' || 
        message.content.includes('photo') || 
        message.content.includes('image') ||
        message.content.includes('picture') ||
        message.content.includes('pic')
      );
      
      // Add images found in messages
      const messageImages = photoMessages.map(message => 
        message.type === 'image' ? message.content : null
      ).filter((img): img is string => Boolean(img));
      
      // Complete image list (remove duplicates, prioritize character images)
      const totalImages = [...new Set([...albumImages, ...messageImages])];
      
      // Create album if there are images or sufficient conversation
      if (totalImages.length > 0 || session.messages.length >= 5) {
        const unlockedPhotos = totalImages.map((imageUrl, index) => ({
          id: index + 1,
          imageUrl: imageUrl,
          unlockedDate: new Date(session.lastMessageAt).toISOString().split('T')[0],
          description: index === 0 ? "Character Image" : `Unlocked Photo ${index + 1}`
        }));
        
        albums.push({
          characterId: parseInt(session.storyId.split('_')[1]) || parseInt(session.id.split('_')[0]) || 1,
          characterName: session.characterName,
          characterImage: session.characterImage,
          unlockedPhotos
        });
      }
    }
    
    // Add sample albums if no albums exist
    if (albums.length === 0) {
      // Add Haruka character album with actual character images
      const harukaImages: string[] = [];
      for (let i = 1; i <= 5; i++) {
        const imagePath = `/data/ch_img/Haruka_${i}.png`;
        try {
          const response = await fetch(imagePath, { method: 'HEAD' });
          if (response.ok) {
            harukaImages.push(imagePath);
          }
        } catch (error) {
          // Continue to next image
        }
      }
      
      if (harukaImages.length > 0) {
        albums.push({
          characterId: 4,
          characterName: "Haruka",
          characterImage: harukaImages[0],
          unlockedPhotos: harukaImages.map((imageUrl, index) => ({
            id: index + 1,
            imageUrl: imageUrl,
            unlockedDate: "2024-01-18",
            description: index === 0 ? "Main Portrait" : 
                        index === 1 ? "Practice Room" :
                        index === 2 ? "On Stage" : 
                        index === 3 ? "Daily Life" : `Photo ${index + 1}`
          }))
        });
      }
      
      // Add Jiyeon character album as fallback
      const jiyeonImages: string[] = [];
      for (let i = 1; i <= 5; i++) {
        const imagePath = `/data/ch_img/Jiyeon_${i}.png`;
        try {
          const response = await fetch(imagePath, { method: 'HEAD' });
          if (response.ok) {
            jiyeonImages.push(imagePath);
          }
        } catch (error) {
          // Continue to next image
        }
      }
      
      if (jiyeonImages.length > 0) {
        albums.push({
          characterId: 1,
          characterName: "Jiyeon",
          characterImage: jiyeonImages[0],
          unlockedPhotos: jiyeonImages.map((imageUrl, index) => ({
            id: index + 1,
            imageUrl: imageUrl,
            unlockedDate: "2024-01-15",
            description: index === 0 ? "First Meeting" : 
                        index === 1 ? "Walking Together" :
                        index === 2 ? "Special Day" : 
                        index === 3 ? "Casual Moment" : `Photo ${index + 1}`
          }))
        });
      }
    }
    
    return albums;
  };

  // Album data state
  const [characterAlbums, setCharacterAlbums] = useState<CharacterAlbum[]>([]);

  // Update album data whenever chat sessions change
  useEffect(() => {
    const loadAlbums = async () => {
      const albums = await generateAlbumsFromSessions();
      setCharacterAlbums(albums);
      console.log('Generated albums:', albums);
    };
    
    loadAlbums();
  }, [realChatSessions]);

  // Sample favorite character data
  const favoriteCharacters: FavoriteCharacter[] = [
    {
      id: 1,
      name: "Aria",
      image: "/images/thumbnail1.svg",
      description: "A bright and cheerful girl. Always positive and loves adventure.",
      category: "Fantasy",
      isFavorited: true,
      favoritedDate: "2024-01-15"
    },
    {
      id: 3,
      name: "Jayden",
      image: "/images/thumbnail3.svg",
      description: "A mysterious wizard. Wise and calm, holding many secrets.",
      category: "Fantasy",
      isFavorited: true,
      favoritedDate: "2024-01-18"
    },
    {
      id: 4,
      name: "Sophia",
      image: "/images/story-thumbnail-4.svg",
      description: "An elegant princess. A character with grace and a warm heart.",
      category: "Romance",
      isFavorited: true,
      favoritedDate: "2024-01-20"
    }
  ];

  // Creator data is now managed with useState

  const tabs = [
    { id: 'chat' as const, icon: MessageCircle, label: 'Chats' },
    { id: 'album' as const, icon: Image, label: 'Album' },
    { id: 'favorites' as const, icon: Bookmark, label: 'Favorites' },
    { id: 'likes' as const, icon: Heart, label: 'Likes' },
    { id: 'creator' as const, icon: Users, label: 'Following' }
  ];

  const handleChatRoomClick = (chatRoom: ChatRoom) => {
    // Find the corresponding chat session to get the story ID
    const session = realChatSessions.find(s => s.characterName === chatRoom.characterName);
    if (session && onNavigateToChat) {
      onNavigateToChat(session.storyId);
    } else {
      console.log('Chat room clicked:', chatRoom.characterName);
    }
  };

  const handleAlbumClick = (album: CharacterAlbum) => {
    setSelectedAlbum(album);
  };

  const handleBackToAlbumList = () => {
    setSelectedAlbum(null);
  };

  const handleTabChange = (tab: ActivityTab) => {
    setActiveTab(tab);
    // Reset selected album when tab changes
    if (tab !== 'album') {
      setSelectedAlbum(null);
    }
    
    // Refresh follow status when switching to Following tab
    if (tab === 'creator') {
      console.log('🔄 Switching to Following tab, refreshing follow status...');
      const followedCreatorIds = JSON.parse(localStorage.getItem('followedCreators') || '[]');
      console.log('📂 Current followed IDs:', followedCreatorIds);
      
      setCreators(prevCreators => {
        const updatedCreators = prevCreators.map(creator => {
          const isFollowing = followedCreatorIds.includes(creator.id.toString());
          return {
            ...creator,
            isFollowing,
            followedDate: isFollowing ? new Date().toISOString().split('T')[0] : undefined
          };
        });
        console.log('✅ Refreshed creators for Following tab:', updatedCreators.map(c => ({ id: c.id, name: c.name, isFollowing: c.isFollowing })));
        return updatedCreators;
      });
    }
  };

  const handleFavoriteCharacterClick = (character: FavoriteCharacter) => {
    // TODO: Implement logic to navigate to character detail screen
    console.log('Favorite character clicked:', character.name);
  };

  const handleRemoveFavorite = (characterId: number, event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent parent click event
    // TODO: Implement actual favorite removal logic
    console.log('Remove favorite:', characterId);
  };

  const handleFollowToggle = (creatorId: number, event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent parent click event
    
    console.log('🔄 Follow toggle clicked for creator ID:', creatorId);
    
    // Find the creator in the creators array
    const creatorIndex = creators.findIndex(c => c.id === creatorId);
    console.log('📍 Creator index found:', creatorIndex);
    
    if (creatorIndex !== -1) {
      const currentCreator = creators[creatorIndex];
      const newIsFollowing = !currentCreator.isFollowing;
      
      console.log(`📊 ${currentCreator.name}: ${currentCreator.isFollowing} → ${newIsFollowing}`);
      
      // Update state immediately for better UX
      setCreators(prevCreators => {
        const updatedCreators = prevCreators.map((creator, index) => {
          if (index === creatorIndex) {
            return {
              ...creator,
              isFollowing: newIsFollowing,
              followerCount: newIsFollowing ? creator.followerCount + 1 : Math.max(0, creator.followerCount - 1),
              followedDate: newIsFollowing ? new Date().toISOString().split('T')[0] : undefined
            };
          }
          return creator;
        });
        
        console.log('✅ State updated:', updatedCreators.map(c => ({ id: c.id, name: c.name, isFollowing: c.isFollowing })));
        return updatedCreators;
      });
      
      // Save to localStorage
      try {
        const followedCreators = JSON.parse(localStorage.getItem('followedCreators') || '[]');
        if (newIsFollowing) {
          if (!followedCreators.includes(creatorId.toString())) {
            followedCreators.push(creatorId.toString());
          }
        } else {
          const index = followedCreators.indexOf(creatorId.toString());
          if (index > -1) {
            followedCreators.splice(index, 1);
          }
        }
        localStorage.setItem('followedCreators', JSON.stringify(followedCreators));
        console.log('💾 localStorage updated:', followedCreators);
      } catch (error) {
        console.error('❌ Error saving to localStorage:', error);
      }
    } else {
      console.error('❌ Creator not found with ID:', creatorId);
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'chat':
        return (
          <div className="flex-1 overflow-y-auto">
            {realChatSessions.length > 0 ? (
              <div className="divide-y divide-[#424242]">
                {realChatSessions.map((session) => {
                  const lastMessage = session.messages.length > 0 
                    ? session.messages[session.messages.length - 1]
                    : null;
                  
                  return (
                    <div
                      key={session.id}
                      onClick={() => handleChatRoomClick({
                        id: parseInt(session.id.split('_')[0]) || 1,
                        characterName: session.characterName,
                        characterImage: session.characterImage,
                        lastMessage: lastMessage?.content || 'Start a conversation',
                        lastMessageTime: getRelativeTime(session.lastMessageAt),
                        unreadCount: session.unreadCount,
                        isOnline: true
                      })}
                      className="flex items-center p-4 hover:bg-[#2a2b2b] cursor-pointer transition-colors"
                    >
                      {/* Character image */}
                      <div className="relative flex-shrink-0 mr-3">
                        <ActivityCharacterImage
                          characterName={session.characterName}
                          className="w-12 h-12 rounded-full bg-gray-600 object-cover"
                        />
                        {/* 온라인 상태 표시 */}
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-[#1a1b1b]"></div>
                      </div>

                      {/* 대화 내용 */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="text-white font-medium truncate">
                            {session.characterName}
                          </h3>
                          <div className="flex items-center space-x-2">
                            <span className="text-xs text-gray-400">
                              {getRelativeTime(session.lastMessageAt)}
                            </span>
                            {session.unreadCount > 0 && (
                              <div className="bg-blue-500 text-white text-xs rounded-full px-2 py-1 min-w-[20px] text-center">
                                {session.unreadCount}
                              </div>
                            )}
                          </div>
                        </div>
                        <p className="text-gray-400 text-sm truncate">
                          {lastMessage?.content || '대화를 시작해보세요'}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="flex-1 flex flex-col justify-center items-center px-4 pt-60">
                <MessageCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" strokeWidth={1.5} />
                <p className="text-gray-400 text-lg mb-2">진행 중인 대화가 없습니다</p>
                <p className="text-gray-500 text-sm">캐릭터와 대화를 시작해보세요!</p>
              </div>
            )}
          </div>
        );
      case 'album':
        if (selectedAlbum) {
          // Selected character's album detail view
          return (
            <div className="flex flex-col h-full">
              {/* Album header */}
              <div className="flex items-center p-4 border-b border-[#424242]">
                <button
                  onClick={handleBackToAlbumList}
                  className="mr-3 text-gray-400 hover:text-white"
                >
                  ←
                </button>
                <ActivityCharacterImage
                  characterName={selectedAlbum.characterName}
                  className="w-8 h-8 rounded-full mr-3"
                />
                <div>
                  <h2 className="text-white font-medium">{selectedAlbum.characterName}</h2>
                  <p className="text-gray-400 text-sm">{selectedAlbum.unlockedPhotos.length}장의 사진</p>
                </div>
              </div>

              {/* Photo grid */}
              <div className="flex-1 overflow-y-auto p-4">
                <div className="grid grid-cols-2 gap-3">
                  {selectedAlbum.unlockedPhotos.map((photo) => (
                    <div
                      key={photo.id}
                      className="relative aspect-square rounded-lg overflow-hidden bg-gray-700"
                    >
                      <img
                        src={photo.imageUrl}
                        alt={photo.description || '해금된 사진'}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = '/images/story-thumbnail-1.svg';
                        }}
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-200 flex items-end">
                        <div className="p-2 text-white text-xs opacity-0 hover:opacity-100 transition-opacity">
                          {photo.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        } else {
          // Character album list view
          return (
            <div className="flex-1 overflow-y-auto">
              {characterAlbums.length > 0 ? (
                <div className="p-4 space-y-3">
                  {characterAlbums.map((album) => (
                    <div
                      key={album.characterId}
                      onClick={() => handleAlbumClick(album)}
                      className="flex items-center p-4 bg-[#2a2b2b] rounded-lg hover:bg-[#3a3b3b] cursor-pointer transition-colors"
                    >
                      {/* Character image */}
                      <ActivityCharacterImage
                        characterName={album.characterName}
                        className="w-12 h-12 rounded-full mr-4"
                      />

                      {/* Album info */}
                      <div className="flex-1">
                        <h3 className="text-white font-medium mb-1">{album.characterName}</h3>
                        <p className="text-gray-400 text-sm">{album.unlockedPhotos.length}장의 해금된 사진</p>
                      </div>

                      {/* Preview images */}
                      <div className="flex space-x-1">
                        {album.unlockedPhotos.slice(0, 3).map((photo, index) => (
                          <img
                            key={photo.id}
                            src={photo.imageUrl}
                            alt=""
                            className="w-8 h-8 rounded object-cover"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = '/images/story-thumbnail-1.svg';
                            }}
                          />
                        ))}
                        {album.unlockedPhotos.length > 3 && (
                          <div className="w-8 h-8 rounded bg-gray-600 flex items-center justify-center">
                            <span className="text-xs text-gray-300">+{album.unlockedPhotos.length - 3}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex-1 flex flex-col justify-center items-center px-4 pt-60">
                  <Image className="w-16 h-16 text-gray-400 mx-auto mb-4" strokeWidth={1.5} />
                  <p className="text-gray-400 text-lg mb-2">No unlocked albums</p>
                  <p className="text-gray-500 text-sm">Chat with characters to unlock 2 or more photos!</p>
                </div>
              )}
            </div>
          );
        }
      case 'favorites':
        return (
          <div className="flex-1 overflow-y-auto">
            {favoritedStories.length > 0 ? (
              <div className="p-4 space-y-3">
                {favoritedStories.map((story) => (
                  <div
                    key={story.id}
                    className="flex items-center p-4 bg-[#2a2b2b] rounded-lg hover:bg-[#3a3b3b] cursor-pointer transition-colors"
                  >
                    <ActivityCharacterImage
                      characterName={story.content?.characterName || ''}
                      className="w-16 h-16 rounded-lg mr-4 object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white font-medium truncate mb-1">{story.title}</h3>
                      <p className="text-gray-400 text-sm line-clamp-2 mb-2">
                        {story.introduction?.introduction || ''}
                      </p>
                      <div className="flex items-center gap-2">
                        {story.introduction?.tags?.slice(0, 2).map((tag: string, index: number) => (
                          <span key={index} className="text-xs text-[#ff9500] bg-[#ff9500]/20 px-2 py-1 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
                          <div className="flex-1 flex flex-col justify-center items-center px-4 pt-60">
              <Bookmark className="w-16 h-16 text-gray-400 mx-auto mb-4" strokeWidth={1.5} />
              <p className="text-gray-400 text-lg mb-2">No favorite stories</p>
              <p className="text-gray-500 text-sm">Try tapping the bookmark icon on story detail pages</p>
            </div>
            )}
          </div>
        );
      case 'likes':
        return (
          <div className="flex-1 overflow-y-auto">
            {likedStories.length > 0 ? (
              <div className="p-4 space-y-3">
                {likedStories.map((story) => (
                  <div
                    key={story.id}
                    className="flex items-center p-4 bg-[#2a2b2b] rounded-lg hover:bg-[#3a3b3b] cursor-pointer transition-colors"
                  >
                    <ActivityCharacterImage
                      characterName={story.content?.characterName || ''}
                      className="w-16 h-16 rounded-lg mr-4 object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white font-medium truncate mb-1">{story.title}</h3>
                      <p className="text-gray-400 text-sm line-clamp-2 mb-2">
                        {story.introduction?.introduction || ''}
                      </p>
                      <div className="flex items-center gap-2">
                        {story.introduction?.tags?.slice(0, 2).map((tag: string, index: number) => (
                          <span key={index} className="text-xs text-[#ff9500] bg-[#ff9500]/20 px-2 py-1 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
                          <div className="flex-1 flex flex-col justify-center items-center px-4 pt-60">
              <Heart className="w-16 h-16 text-gray-400 mx-auto mb-4" strokeWidth={1.5} />
              <p className="text-gray-400 text-lg mb-2">No liked stories</p>
              <p className="text-gray-500 text-sm">Try tapping the heart icon on story detail pages</p>
            </div>
            )}
          </div>
        );
      case 'creator':
        return (
          <div className="flex-1 overflow-y-auto">
            {(() => {
              const followedCreators = creators.filter(creator => creator.isFollowing);
              console.log('📊 Following Tab - All creators:', creators.map(c => ({ id: c.id, name: c.name, isFollowing: c.isFollowing })));
              console.log('✅ Following Tab - Filtered followed creators:', followedCreators.map(c => ({ id: c.id, name: c.name, isFollowing: c.isFollowing })));
              console.log('📂 Following Tab - localStorage:', JSON.parse(localStorage.getItem('followedCreators') || '[]'));
              
              if (followedCreators.length > 0) {
                return (
                  <div className="p-4 space-y-4">
                    {followedCreators.map((creator) => (
                  <div
                    key={creator.id}
                    onClick={() => handleCreatorClick(creator)}
                    className="bg-[#2a2b2b] rounded-lg p-4 hover:bg-[#3a3b3b] cursor-pointer transition-colors"
                  >
                    {/* Creator header */}
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center">
                        <img
                          src={creator.profileImage || '/images/creator.png'}
                          alt={creator.name}
                          className="w-12 h-12 rounded-full mr-3 object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = '/images/creator.png';
                          }}
                        />
                        <div>
                          <div className="flex items-center">
                            <h3 className="text-white font-medium mr-2">{creator.name}</h3>
                            {creator.isVerified && (
                              <CheckCircle className="w-4 h-4 text-blue-400" title="인증된 크리에이터" />
                            )}
                          </div>
                          <p className="text-gray-400 text-sm">팔로워 {creator.followerCount.toLocaleString()}명</p>
                        </div>
                      </div>

                      {/* Follow button */}
                      <button
                        onClick={(e) => handleFollowToggle(creator.id, e)}
                        className={`flex items-center px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                          creator.isFollowing
                            ? 'bg-gray-600 text-white hover:bg-gray-700'
                            : 'bg-blue-600 text-white hover:bg-blue-700'
                        }`}
                      >
                        {creator.isFollowing ? (
                          <>
                            <UserCheck className="w-4 h-4 mr-1" />
                            Following
                          </>
                        ) : (
                          <>
                            <UserPlus className="w-4 h-4 mr-1" />
                            Follow
                          </>
                        )}
                      </button>
                    </div>

                    {/* Creator introduction */}
                    <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                      {creator.bio}
                    </p>

                    {/* Specialties */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {creator.specialties.map((specialty, index) => (
                        <span
                          key={index}
                          className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>

                    {/* Work statistics */}
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <div className="flex space-x-4">
                        <span>캐릭터 {creator.characterCount}개</span>
                        <span>스토리 {creator.storyCount}개</span>
                      </div>
                      {creator.isFollowing && creator.followedDate && (
                        <span className="text-xs">
                          {new Date(creator.followedDate).toLocaleDateString('ko-KR')} 팔로우
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            );
          } else {
                return (
                  <div className="flex-1 flex flex-col justify-center items-center px-4 pt-60">
                    <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" strokeWidth={1.5} />
                    <p className="text-gray-400 text-lg mb-2">No followed creators</p>
                    <p className="text-gray-500 text-sm">Follow creators you like</p>
                  </div>
                );
              }
            })()}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col h-full bg-[#1a1b1b] text-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-[#424242]">
        <h1 className="text-xl font-bold">활동</h1>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-[#424242]">
        <div className="flex">
          {tabs.map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => handleTabChange(id)}
              className={`flex-1 flex flex-col items-center py-3 px-2 transition-colors ${
                activeTab === id
                  ? 'text-white border-b-2 border-blue-500 bg-[#2a2b2b]'
                  : 'text-gray-400 hover:text-gray-300 hover:bg-[#2a2b2b]'
              }`}
            >
              <Icon className="w-5 h-5 mb-1" />
              <span className="text-xs font-medium">{label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      {renderTabContent()}

              {/* Creator Profile Modal */}
        {showCreatorProfile && selectedCreatorInfo && (
          <CreatorProfileModal
            isOpen={showCreatorProfile}
            onClose={() => setShowCreatorProfile(false)}
            creator={selectedCreatorInfo}
            onFollowChange={(creatorId, isFollowing) => {
              // Update ActivityScreen state when follow status changes
              console.log('🎯 Follow status changed from creator profile:', creatorId, isFollowing);
              
              // Find the numeric ID that matches this creator
              const numericCreatorId = creators.find(c => c.id.toString() === creatorId.toString())?.id || creatorId;
              console.log('🔍 Mapped creator ID:', creatorId, '→', numericCreatorId);
              
              // Dispatch event with the correct numeric ID
              window.dispatchEvent(new CustomEvent('followStateChanged', { 
                detail: { creatorId: numericCreatorId, isFollowing } 
              }));
            }}
          />
        )}
    </div>
  );
}

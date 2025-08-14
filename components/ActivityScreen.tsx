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

export function ActivityScreen({ onNavigateToChat }: ActivityScreenProps = {}) {
  const [activeTab, setActiveTab] = useState<ActivityTab>('chat');
  const [selectedAlbum, setSelectedAlbum] = useState<CharacterAlbum | null>(null);
  const [realChatSessions, setRealChatSessions] = useState<ChatSession[]>([]);
  const [likedStories, setLikedStories] = useState<any[]>([]);
  const [favoritedStories, setFavoritedStories] = useState<any[]>([]);
  // 크리에이터 데이터는 이제 useState로 관리됩니다
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

  // 실제 크리에이터 데이터 로드
  useEffect(() => {
    const loadCreators = () => {
      try {
        const allCreators = getAllCreators();
        const mappedCreators: Creator[] = allCreators.slice(0, 3).map((creator, index) => ({
          id: index + 1, // ActivityScreen용 숫자 ID
          name: creator.displayName,
          profileImage: creator.profileImage || "/images/thumbnail1.svg",
          bio: creator.bio || "크리에이터 소개가 없습니다.",
          specialties: creator.badges || ["일반"],
          followerCount: creator.stats.followers,
          characterCount: Math.floor(Math.random() * 50) + 10, // 임시 데이터
          storyCount: creator.stats.totalStories,
          isFollowing: false,
          followedDate: undefined,
          isVerified: creator.badges?.includes('Verified') || false
        }));
        
        setCreators(mappedCreators);
        console.log('로드된 크리에이터들:', mappedCreators);
        
        // ID 매핑 저장 (실제 ID -> 숫자 ID)
        const idMapping: { [key: string]: number } = {};
        allCreators.slice(0, 3).forEach((creator, index) => {
          idMapping[creator.id] = index + 1;
        });
        localStorage.setItem('creatorIdMapping', JSON.stringify(idMapping));
        console.log('ID 매핑 저장:', idMapping);
      } catch (error) {
        console.error('크리에이터 로드 중 오류:', error);
        // 오류 발생시 기본 데이터 사용
        setCreators([
          {
            id: 1,
            name: "미라클 스튜디오",
            profileImage: "/images/thumbnail1.svg",
            bio: "판타지와 로맨스 장르를 전문으로 하는 창작 스튜디오입니다.",
            specialties: ["판타지", "로맨스"],
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
        const idMapping = JSON.parse(localStorage.getItem('creatorIdMapping') || '{}');
        console.log('로컬 스토리지에서 불러온 팔로우 ID들:', followedCreatorIds);
        console.log('ID 매핑:', idMapping);
        console.log('현재 크리에이터들:', creators.map(c => ({ id: c.id, name: c.name })));
        
        // 기존 데이터가 잘못된 형식이면 초기화
        if (followedCreatorIds.length > 0 && typeof followedCreatorIds[0] === 'string' && 
            followedCreatorIds[0].startsWith('creator_') && followedCreatorIds[0] !== 'creator_user') {
          console.log('잘못된 형식의 팔로우 데이터 발견, 초기화합니다.');
          localStorage.setItem('followedCreators', JSON.stringify([]));
          setCreators(prevCreators => 
            prevCreators.map(creator => ({
              ...creator,
              isFollowing: false,
              followedDate: undefined
            }))
          );
          return;
        }
        
        setCreators(prevCreators => {
          const updatedCreators = prevCreators.map(creator => {
            // 실제 크리에이터 ID를 숫자 ID로 변환하여 확인
            const isFollowing = followedCreatorIds.some((actualId: string) => {
              const mappedId = idMapping[actualId];
              return mappedId === creator.id;
            });
            console.log(`크리에이터 ${creator.name} (ID: ${creator.id}) 팔로우 상태: ${isFollowing}`);
            return {
              ...creator,
              isFollowing,
              followedDate: isFollowing ? new Date().toISOString().split('T')[0] : undefined
            };
          });
          console.log('업데이트된 크리에이터들:', updatedCreators.map(c => ({ id: c.id, name: c.name, isFollowing: c.isFollowing })));
          return updatedCreators;
        });
      } catch (error) {
        console.error('팔로우 상태 로딩 중 오류:', error);
        localStorage.setItem('followedCreators', JSON.stringify([])); // Clear on error
      }
    };
    
    if (creators.length > 0) {
      loadFollowedCreators();
    }
  }, [creators.length]); // creators가 로드된 후에 실행

  // 팔로우 상태 변경 이벤트 감지
  useEffect(() => {
    const handleFollowStateChanged = (event: CustomEvent) => {
      const { creatorId, isFollowing } = event.detail;
      console.log('팔로우 상태 변경 이벤트 감지:', creatorId, isFollowing);
      
      setCreators(prevCreators => {
        const updatedCreators = prevCreators.map(creator => {
          if (creator.id === creatorId) {
            return {
              ...creator,
              isFollowing,
              followerCount: isFollowing ? creator.followerCount + 1 : Math.max(0, creator.followerCount - 1),
              followedDate: isFollowing ? new Date().toISOString().split('T')[0] : undefined
            };
          }
          return creator;
        });
        console.log('이벤트로 인한 크리에이터 상태 업데이트:', updatedCreators.map(c => ({ id: c.id, name: c.name, isFollowing: c.isFollowing })));
        return updatedCreators;
      });
    };

    window.addEventListener('followStateChanged', handleFollowStateChanged as EventListener);
    
    return () => {
      window.removeEventListener('followStateChanged', handleFollowStateChanged as EventListener);
    };
  }, []);

  // 크리에이터 프로필 모달 상태
  const [showCreatorProfile, setShowCreatorProfile] = useState(false);
  const [selectedCreator, setSelectedCreator] = useState<Creator | null>(null);
  const [selectedCreatorInfo, setSelectedCreatorInfo] = useState<any>(null);

  const handleCreatorClick = (creator: Creator) => {
    // 실제 크리에이터 ID 찾기
    const idMapping = JSON.parse(localStorage.getItem('creatorIdMapping') || '{}');
    const actualCreatorId = Object.keys(idMapping).find(key => idMapping[key] === creator.id);
    
    console.log('크리에이터 클릭:', creator.name, '숫자 ID:', creator.id, '실제 ID:', actualCreatorId);
    
    // Creator를 CreatorInfo로 변환
    const creatorInfo = {
      id: actualCreatorId || creator.id.toString(), // 실제 크리에이터 ID 사용
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

  // 샘플 대화방 데이터
  const chatRooms: ChatRoom[] = [
    {
      id: 1,
      characterName: "아리아",
      characterImage: "/images/thumbnail1.svg",
      lastMessage: "안녕하세요! 오늘 어떤 이야기를 나누고 싶으신가요?",
      lastMessageTime: "방금 전",
      unreadCount: 2,
      isOnline: true
    },
    {
      id: 2,
      characterName: "루나",
      characterImage: "/images/thumbnail2.svg",
      lastMessage: "그 이야기 정말 재미있었어요! 계속 들려주세요.",
      lastMessageTime: "5분 전",
      unreadCount: 0,
      isOnline: true
    },
    {
      id: 3,
      characterName: "제이든",
      characterImage: "/images/thumbnail3.svg",
      lastMessage: "내일 또 만나요! 좋은 꿈 꾸세요~",
      lastMessageTime: "1시간 전",
      unreadCount: 1,
      isOnline: false
    }
  ];

  // 실제 대화 세션에서 앨범 데이터 생성
  const generateAlbumsFromSessions = () => {
    const albums: CharacterAlbum[] = [];
    
    realChatSessions.forEach(session => {
      // 해당 세션의 스토리 정보 가져오기
      const story = getStory(session.storyId);
      
      // 스토리 이미지들 가져오기
      const storyImages = story?.media?.storyImages || [];
      const thumbnailImage = story?.media?.thumbnailImage;
      
      // 모든 사용 가능한 이미지들 수집
      const allAvailableImages = [
        ...(thumbnailImage ? [thumbnailImage] : []),
        ...storyImages
      ].filter(Boolean);
      
      // 각 세션에서 사진 메시지들을 찾아서 추가
      const photoMessages = session.messages.filter(message => 
        message.type === 'image' || 
        message.content.includes('사진') || 
        message.content.includes('image') ||
        message.content.includes('photo') ||
        message.content.includes('그림') ||
        message.content.includes('이미지')
      );
      
      // 메시지에서 찾은 이미지들도 추가
      const messageImages = photoMessages.map(message => 
        message.type === 'image' ? message.content : null
      ).filter((img): img is string => Boolean(img));
      
      // 전체 이미지 목록 (중복 제거)
      const totalImages = [...new Set([...allAvailableImages, ...messageImages])];
      
      // 이미지가 없으면 sample.png 추가
      if (totalImages.length === 0) {
        totalImages.push('/images/sample.png');
      }
      
      // 사진이 2개 이상이거나 대화가 충분히 진행된 경우 앨범 생성
      if (totalImages.length >= 2 || session.messages.length >= 5) {
        const unlockedPhotos = totalImages.map((imageUrl, index) => ({
          id: index + 1,
          imageUrl: imageUrl,
          unlockedDate: new Date(session.lastMessageAt).toISOString().split('T')[0],
          description: index === 0 ? "메인 이미지" : `해금된 사진 ${index + 1}`
        }));
        
        albums.push({
          characterId: parseInt(session.storyId.split('_')[1]) || parseInt(session.id.split('_')[0]) || 1,
          characterName: session.characterName,
          characterImage: session.characterImage,
          unlockedPhotos
        });
      }
    });
    
    // 앨범이 없는 경우 샘플 앨범 추가
    if (albums.length === 0) {
      // haruka 스토리 앨범 추가
      const harukaStory = getStory('story_004');
      if (harukaStory) {
        albums.push({
          characterId: 4,
          characterName: "하루카 (Haruka)",
          characterImage: harukaStory.media.thumbnailImage,
          unlockedPhotos: harukaStory.media.storyImages.map((imageUrl, index) => ({
            id: index + 1,
            imageUrl: imageUrl,
            unlockedDate: "2024-01-18",
            description: index === 0 ? "메인 포트레이트" : 
                        index === 1 ? "연습실에서" :
                        index === 2 ? "무대 위에서" : "일상 모습"
          }))
        });
      }
      
      // 기본 샘플 앨범
      albums.push({
        characterId: 1,
        characterName: "아리아",
        characterImage: "/images/thumbnail1.svg",
        unlockedPhotos: [
          {
            id: 1,
            imageUrl: "/images/story-thumbnail-1.svg",
            unlockedDate: "2024-01-15",
            description: "첫 만남의 순간"
          },
          {
            id: 2,
            imageUrl: "/images/story-thumbnail-2.svg",
            unlockedDate: "2024-01-16",
            description: "함께한 산책"
          },
          {
            id: 3,
            imageUrl: "/images/story-thumbnail-3.svg",
            unlockedDate: "2024-01-17",
            description: "특별한 하루"
          }
        ]
      });
    }
    
    return albums;
  };

  // 앨범 데이터 상태
  const [characterAlbums, setCharacterAlbums] = useState<CharacterAlbum[]>([]);

  // 대화 세션이 변경될 때마다 앨범 데이터 업데이트
  useEffect(() => {
    const albums = generateAlbumsFromSessions();
    setCharacterAlbums(albums);
    console.log('생성된 앨범들:', albums);
  }, [realChatSessions]);

  // 샘플 즐겨찾기 캐릭터 데이터
  const favoriteCharacters: FavoriteCharacter[] = [
    {
      id: 1,
      name: "아리아",
      image: "/images/thumbnail1.svg",
      description: "밝고 활발한 성격의 소녀. 항상 긍정적이고 모험을 좋아합니다.",
      category: "판타지",
      isFavorited: true,
      favoritedDate: "2024-01-15"
    },
    {
      id: 3,
      name: "제이든",
      image: "/images/thumbnail3.svg",
      description: "신비로운 마법사. 지혜롭고 차분한 성격으로 많은 비밀을 간직하고 있습니다.",
      category: "판타지",
      isFavorited: true,
      favoritedDate: "2024-01-18"
    },
    {
      id: 4,
      name: "소피아",
      image: "/images/story-thumbnail-4.svg",
      description: "우아한 공주님. 품위 있고 따뜻한 마음을 가진 캐릭터입니다.",
      category: "로맨스",
      isFavorited: true,
      favoritedDate: "2024-01-20"
    }
  ];

  // 크리에이터 데이터는 이제 useState로 관리됩니다

  const tabs = [
    { id: 'chat' as const, icon: MessageCircle, label: '대화중' },
    { id: 'album' as const, icon: Image, label: '앨범' },
    { id: 'favorites' as const, icon: Bookmark, label: '즐겨찾기' },
    { id: 'likes' as const, icon: Heart, label: '좋아요' },
    { id: 'creator' as const, icon: Users, label: '팔로우' }
  ];

  const handleChatRoomClick = (chatRoom: ChatRoom) => {
    // Find the corresponding chat session to get the story ID
    const session = realChatSessions.find(s => s.characterName === chatRoom.characterName);
    if (session && onNavigateToChat) {
      onNavigateToChat(session.storyId);
    } else {
      console.log('채팅방 클릭:', chatRoom.characterName);
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
    // 탭 변경 시 선택된 앨범 초기화
    if (tab !== 'album') {
      setSelectedAlbum(null);
    }
  };

  const handleFavoriteCharacterClick = (character: FavoriteCharacter) => {
    // TODO: 캐릭터 상세 화면으로 이동하는 로직 구현
    console.log('즐겨찾기 캐릭터 클릭:', character.name);
  };

  const handleRemoveFavorite = (characterId: number, event: React.MouseEvent) => {
    event.stopPropagation(); // 부모 클릭 이벤트 방지
    // TODO: 실제 즐겨찾기 제거 로직 구현
    console.log('즐겨찾기 제거:', characterId);
  };

  const handleFollowToggle = (creatorId: number, event: React.MouseEvent) => {
    event.stopPropagation(); // 부모 클릭 이벤트 방지
    
    console.log('팔로우 토글 클릭됨:', creatorId);
    
    // 크리에이터 배열에서 해당 크리에이터 찾기
    const creatorIndex = creators.findIndex(c => c.id === creatorId);
    console.log('크리에이터 인덱스:', creatorIndex);
    if (creatorIndex !== -1) {
      // 현재 크리에이터 정보
      const currentCreator = creators[creatorIndex];
      const newIsFollowing = !currentCreator.isFollowing;
      
      console.log('현재 팔로우 상태:', currentCreator.isFollowing, '-> 새로운 상태:', newIsFollowing);
      
      // 로컬 스토리지에 팔로우 상태 저장
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
      
      // 상태 업데이트
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
        
        console.log('업데이트된 크리에이터들:', updatedCreators.map(c => ({ id: c.id, name: c.name, isFollowing: c.isFollowing })));
        return updatedCreators;
      });
      
      console.log(`${newIsFollowing ? '팔로우' : '언팔로우'}:`, currentCreator.name);
      console.log('저장된 팔로우 목록:', followedCreators);
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
                        lastMessage: lastMessage?.content || '대화를 시작해보세요',
                        lastMessageTime: getRelativeTime(session.lastMessageAt),
                        unreadCount: session.unreadCount,
                        isOnline: true
                      })}
                      className="flex items-center p-4 hover:bg-[#2a2b2b] cursor-pointer transition-colors"
                    >
                      {/* 캐릭터 이미지 */}
                      <div className="relative flex-shrink-0 mr-3">
                        <img
                          src={session.characterImage}
                          alt={session.characterName}
                          className="w-12 h-12 rounded-full bg-gray-600"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = '/images/thumbnail1.svg';
                          }}
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
          // 선택된 캐릭터의 앨범 상세 보기
          return (
            <div className="flex flex-col h-full">
              {/* 앨범 헤더 */}
              <div className="flex items-center p-4 border-b border-[#424242]">
                <button
                  onClick={handleBackToAlbumList}
                  className="mr-3 text-gray-400 hover:text-white"
                >
                  ←
                </button>
                <img
                  src={selectedAlbum.characterImage}
                  alt={selectedAlbum.characterName}
                  className="w-8 h-8 rounded-full mr-3"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/images/thumbnail1.svg';
                  }}
                />
                <div>
                  <h2 className="text-white font-medium">{selectedAlbum.characterName}</h2>
                  <p className="text-gray-400 text-sm">{selectedAlbum.unlockedPhotos.length}장의 사진</p>
                </div>
              </div>

              {/* 사진 그리드 */}
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
          // 캐릭터 앨범 목록 보기
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
                      {/* 캐릭터 이미지 */}
                      <img
                        src={album.characterImage}
                        alt={album.characterName}
                        className="w-12 h-12 rounded-full mr-4"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = '/images/thumbnail1.svg';
                        }}
                      />

                      {/* 앨범 정보 */}
                      <div className="flex-1">
                        <h3 className="text-white font-medium mb-1">{album.characterName}</h3>
                        <p className="text-gray-400 text-sm">{album.unlockedPhotos.length}장의 해금된 사진</p>
                      </div>

                      {/* 미리보기 이미지들 */}
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
                  <p className="text-gray-400 text-lg mb-2">해금된 앨범이 없습니다</p>
                  <p className="text-gray-500 text-sm">캐릭터와 대화하여 사진을 2장 이상 해금해보세요!</p>
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
                    <img
                      src={story.media?.thumbnailImage || '/images/thumbnail1.svg'}
                      alt={story.title}
                      className="w-16 h-16 rounded-lg mr-4 object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/images/thumbnail1.svg';
                      }}
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
              <p className="text-gray-400 text-lg mb-2">즐겨찾기한 스토리가 없습니다</p>
              <p className="text-gray-500 text-sm">스토리 상세페이지에서 책갈피 아이콘을 눌러보세요</p>
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
                    <img
                      src={story.media?.thumbnailImage || '/images/thumbnail1.svg'}
                      alt={story.title}
                      className="w-16 h-16 rounded-lg mr-4 object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/images/thumbnail1.svg';
                      }}
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
              <p className="text-gray-400 text-lg mb-2">좋아요한 스토리가 없습니다</p>
              <p className="text-gray-500 text-sm">스토리 상세페이지에서 하트 아이콘을 눌러보세요</p>
            </div>
            )}
          </div>
        );
      case 'creator':
        return (
          <div className="flex-1 overflow-y-auto">
            {(() => {
              const followedCreators = creators.filter(creator => creator.isFollowing);
              console.log('팔로우 크리에이터 필터링 결과:', followedCreators.map(c => ({ id: c.id, name: c.name, isFollowing: c.isFollowing })));
              console.log('전체 크리에이터 상태:', creators.map(c => ({ id: c.id, name: c.name, isFollowing: c.isFollowing })));
              
              if (followedCreators.length > 0) {
                return (
                  <div className="p-4 space-y-4">
                    {followedCreators.map((creator) => (
                  <div
                    key={creator.id}
                    onClick={() => handleCreatorClick(creator)}
                    className="bg-[#2a2b2b] rounded-lg p-4 hover:bg-[#3a3b3b] cursor-pointer transition-colors"
                  >
                    {/* 크리에이터 헤더 */}
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

                      {/* 팔로우 버튼 */}
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
                            팔로잉
                          </>
                        ) : (
                          <>
                            <UserPlus className="w-4 h-4 mr-1" />
                            팔로우
                          </>
                        )}
                      </button>
                    </div>

                    {/* 크리에이터 소개 */}
                    <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                      {creator.bio}
                    </p>

                    {/* 전문 분야 */}
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

                    {/* 작품 통계 */}
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
                    <p className="text-gray-400 text-lg mb-2">팔로우한 크리에이터가 없습니다</p>
                    <p className="text-gray-500 text-sm">마음에 드는 크리에이터를 팔로우해보세요</p>
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
              // 팔로우 상태 변경 시 ActivityScreen의 상태도 업데이트
              console.log('크리에이터 프로필에서 팔로우 상태 변경:', creatorId, isFollowing);
              // 이벤트 발생
              window.dispatchEvent(new CustomEvent('followStateChanged', { 
                detail: { creatorId: parseInt(creatorId.toString()), isFollowing } 
              }));
            }}
          />
        )}
    </div>
  );
}

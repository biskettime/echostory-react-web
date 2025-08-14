import { useState, useEffect } from 'react';
import { HomeScreen } from './components/HomeScreen';
import { StoryDetailScreen } from './components/StoryDetailScreen';
import { ChatScreen } from './components/ChatScreen';
import { ProfileScreen } from './components/ProfileScreen';
import { CreateScreen } from './components/CreateScreen';
import { ActivityScreen } from './components/ActivityScreen';
import { StoryCreationScreen } from './components/StoryCreationScreen';
import { InProgressStoryScreen } from './components/InProgressStoryScreen';
import { MyProfileScreen } from './components/MyProfileScreen';
import { SupportScreen } from './components/SupportScreen';
import { TopUpScreen } from './components/TopUpScreen';
import { SearchScreen } from './components/SearchScreen';
import { BottomNavigation } from './components/BottomNavigation';
import { initializeSampleStories } from './data/stories';

type Screen = 'home' | 'story-detail' | 'chat' | 'profile' | 'create' | 'activity' | 'story-creation' | 'in-progress-story' | 'my-profile' | 'support' | 'top-up' | 'search';
type BottomTab = 'home' | 'create' | 'activity' | 'profile';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const [activeTab, setActiveTab] = useState<BottomTab>('home');
  const [selectedStoryId, setSelectedStoryId] = useState<string | null>(null);
  const [selectedEditStoryId, setSelectedEditStoryId] = useState<string | null>(null);
  const [userNickname, setUserNickname] = useState('Alex');
  const [safetyMode, setSafetyMode] = useState(true);

  // Initialize sample stories on app start
  useEffect(() => {
    initializeSampleStories();
    
    // Force enable scrolling and hide scrollbars
    const forceEnableScrolling = () => {
      // Remove any potential scroll blocking
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
      document.body.style.touchAction = 'auto';
      document.documentElement.style.touchAction = 'auto';
      
      // Hide scrollbars
      document.body.style.scrollbarWidth = 'none';
      (document.body.style as any).msOverflowStyle = 'none';
      document.documentElement.style.scrollbarWidth = 'none';
      (document.documentElement.style as any).msOverflowStyle = 'none';
      
      // Remove any event listeners that might block scrolling
      const root = document.getElementById('root');
      if (root) {
        root.style.overflow = 'auto';
        root.style.touchAction = 'auto';
        root.style.scrollbarWidth = 'none';
        (root.style as any).msOverflowStyle = 'none';
      }
      
      console.log('Scrolling force enabled and scrollbars hidden');
    };
    
    forceEnableScrolling();
    
    // Also run after a short delay to override any other scripts
    setTimeout(forceEnableScrolling, 100);
  }, []);

  const handleStorySelect = (storyId: string) => {
    setSelectedStoryId(storyId);
    setCurrentScreen('story-detail');
  };

  const handleBackToHome = () => {
    setCurrentScreen('home');
    setActiveTab('home');
    setSelectedStoryId(null);
  };

  const handleStartChat = (profileName?: string) => {
    // selectedStoryId가 이미 설정되어 있으므로 그대로 유지하고 채팅 화면으로 이동
    console.log('handleStartChat 호출됨, selectedStoryId:', selectedStoryId, 'profileName:', profileName);
    if (selectedStoryId) {
      console.log('채팅 화면으로 이동:', selectedStoryId);
      // 프로필 이름이 있으면 닉네임 업데이트
      if (profileName) {
        setUserNickname(profileName);
      }
      setCurrentScreen('chat');
    } else {
      console.error('No story selected for chat');
      // 혹시 스토리 ID가 없다면 홈으로 돌아가기
      alert('스토리를 선택해주세요.');
      setCurrentScreen('home');
      setActiveTab('home');
    }
  };

  // Modified: Chat screen goes back to story detail
  const handleBackFromChat = () => {
    // Go back to story detail screen
    setCurrentScreen('story-detail');
    // Keep selectedStoryId to maintain story context
  };

  const handleNavigateToStoryCreation = () => {
    setCurrentScreen('story-creation');
  };

  const handleNavigateToInProgressStory = (draftId: string) => {
    setSelectedEditStoryId(draftId);
    setCurrentScreen('in-progress-story');
  };

  const handleBackToCreate = () => {
    setCurrentScreen('create');
    setActiveTab('create');
    setSelectedEditStoryId(null);
  };

  const handleStoryCreated = (storyData: any) => {
    console.log('Story created:', storyData);
    // Return to Create screen after story creation is complete
    setCurrentScreen('create');
    setActiveTab('create');
  };

  const handleTabChange = (tab: BottomTab) => {
    setActiveTab(tab);
    setCurrentScreen(tab);
  };

  const handleSafetyToggle = (checked: boolean) => {
    setSafetyMode(checked);
  };

  // Search navigation handlers
  const handleSearchOpen = () => {
    setCurrentScreen('search');
  };

  const handleBackFromSearch = () => {
    // Go back to the previous screen based on activeTab
    if (activeTab === 'profile') {
      setCurrentScreen('profile');
    } else {
      setCurrentScreen('home');
      setActiveTab('home');
    }
  };

  // Profile navigation handlers
  const handleNavigateToMyProfile = () => {
    setCurrentScreen('my-profile');
  };

  const handleNavigateToSupport = () => {
    setCurrentScreen('support');
  };

  const handleNavigateToTopUp = () => {
    setCurrentScreen('top-up');
  };

  const handleBackToProfile = () => {
    setCurrentScreen('profile');
    setActiveTab('profile');
  };

  // Check if bottom navigation should be shown
  const showBottomNav = currentScreen === 'home' || currentScreen === 'profile' || currentScreen === 'create' || currentScreen === 'activity';

  const renderScreen = () => {
    try {
      switch (currentScreen) {
        case 'home':
          return (
            <HomeScreen 
              onStorySelect={handleStorySelect}
              safetyMode={safetyMode}
              onSafetyToggle={handleSafetyToggle}
              onNavigateToCreate={() => {
                setActiveTab('create');
                setCurrentScreen('create');
              }}
              onSearchOpen={handleSearchOpen}
            />
          );
        case 'search':
          return (
            <SearchScreen
              onBack={handleBackFromSearch}
              onStorySelect={handleStorySelect}
              safetyMode={safetyMode}
            />
          );
        case 'story-detail':
          return selectedStoryId ? (
            <StoryDetailScreen 
              storyId={selectedStoryId}
              onBack={handleBackToHome}
              onStartChat={handleStartChat}
              safetyMode={safetyMode}
              onSafetyToggle={handleSafetyToggle}
              onFollowChange={(creatorId, isFollowing) => {
                // ActivityScreen의 크리에이터 상태를 업데이트하기 위한 콜백
                console.log('팔로우 상태 변경:', creatorId, isFollowing);
                // ActivityScreen이 마운트되어 있을 때만 상태 업데이트
                if (currentScreen === 'activity') {
                  // ActivityScreen의 상태를 강제로 새로고침
                  window.dispatchEvent(new CustomEvent('followStateChanged', { 
                    detail: { creatorId, isFollowing } 
                  }));
                }
              }}
            />
          ) : null;
        case 'chat':
          return selectedStoryId ? (
            <ChatScreen 
              storyId={selectedStoryId}
              onBack={handleBackFromChat}
              nickname={userNickname}
            />
          ) : (
            <div className="flex items-center justify-center h-full bg-[#1a1b1b] text-white">
              <p>No story selected for chat</p>
            </div>
          );
        case 'profile':
          return (
            <ProfileScreen 
              onNavigateToSupport={handleNavigateToSupport}
              onNavigateToMyProfile={handleNavigateToMyProfile}
              onNavigateToTopUp={handleNavigateToTopUp}
              safetyMode={safetyMode}
              onSafetyToggle={handleSafetyToggle}
              onSearchOpen={handleSearchOpen}
            />
          );
        case 'my-profile':
          return (
            <MyProfileScreen 
              onBack={handleBackToProfile}
            />
          );
        case 'support':
          return (
            <SupportScreen 
              onBack={handleBackToProfile}
            />
          );
        case 'top-up':
          return (
            <TopUpScreen 
              onBack={handleBackToProfile}
            />
          );
        case 'create':
          return (
            <CreateScreen 
              onBack={() => {
                setCurrentScreen('home');
                setActiveTab('home');
              }}
              onNavigateToStoryCreation={handleNavigateToStoryCreation}
              onNavigateToInProgressStory={handleNavigateToInProgressStory}
            />
          );
        case 'activity':
          return (
            <ActivityScreen 
              onNavigateToChat={(storyId) => {
                setSelectedStoryId(storyId);
                setCurrentScreen('chat');
              }}
            />
          );
        case 'story-creation':
          return (
            <StoryCreationScreen 
              onBack={handleBackToCreate}
              onSave={handleStoryCreated}
              safetyMode={safetyMode}
              onSafetyToggle={handleSafetyToggle}
            />
          );
        case 'in-progress-story':
          return (
            <InProgressStoryScreen 
              onBack={handleBackToCreate}
              onSave={handleStoryCreated}
              draftId={selectedEditStoryId}
              safetyMode={safetyMode}
              onSafetyToggle={handleSafetyToggle}
            />
          );
        default:
          return (
            <div className="flex items-center justify-center h-full bg-[#1a1b1b] text-white">
              <p>Loading...</p>
            </div>
          );
      }
    } catch (error) {
      console.error('Screen rendering error:', error);
      return (
        <div className="flex items-center justify-center h-full bg-[#1a1b1b] text-white">
          <div className="text-center">
            <p className="text-red-400 mb-2">An error occurred while loading the screen</p>
            <p className="text-sm text-gray-400">{String(error)}</p>
            <button 
              onClick={() => {
                setCurrentScreen('home');
                setActiveTab('home');
              }}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Back to Home
            </button>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="bg-[#1a1b1b] dark scrollbar-hide" style={{ minHeight: '100vh', overflow: 'auto' }}>
      {currentScreen === 'chat' ? (
        // Full screen layout for chat with proper height and viewport management
        <div className="w-full h-screen bg-[#000000] relative">
          <div className="w-full mobile-container h-full relative mx-auto">
            {renderScreen()}
          </div>
        </div>
      ) : (
        // Unified responsive mobile frame layout for all other screens including story-creation and in-progress-story
        <div className="h-screen flex flex-col bg-[#1a1b1b] relative">
          <div className="mobile-container h-full flex flex-col relative">
            {/* Main Content */}
            <div className="flex-1 flex flex-col">
              <div className="flex-1" style={{ paddingBottom: showBottomNav ? '80px' : '0' }}>
                {renderScreen()}
              </div>
            </div>

            {/* Fixed Bottom Navigation */}
            {showBottomNav && (
              <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-[428px]">
                <BottomNavigation 
                  activeTab={activeTab} 
                  onTabChange={handleTabChange}
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
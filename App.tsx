import { useState, useEffect } from 'react';
import { HomeScreen } from './components/HomeScreen';
import { StoryDetailScreen } from './components/StoryDetailScreen';
import { ChatScreen } from './components/ChatScreen';
import { ProfileScreen } from './components/ProfileScreen';
import { CreateScreen } from './components/CreateScreen';
import { ActivityScreen } from './components/ActivityScreen';
import { StoryCreationScreen } from './components/StoryCreationScreen';
import { MyProfileScreen } from './components/MyProfileScreen';
import { SupportScreen } from './components/SupportScreen';
import { TopUpScreen } from './components/TopUpScreen';
import { SearchScreen } from './components/SearchScreen';
import { BottomNavigation } from './components/BottomNavigation';
// XML Model Tester removed - using direct Ollama integration
import { initializeSampleStories } from './data/stories';
import { initializeI18n } from './utils/i18n';
import './utils/clearProfiles'; // Auto-clear profiles on first load

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
    console.log('🚀 App - Initializing...');
    initializeSampleStories();
    initializeI18n();
    console.log('✅ App - Sample stories initialized');
    
    // Initialize Ollama AI integration
    const initOllamaAI = async () => {
      try {
        const { default: aiService } = await import('./services/integratedAIService');
        console.log('✅ App - Ollama AI service initialized');
        console.log('🦙 App - BuRP 7B model ready for use');
      } catch (error) {
        console.warn('⚠️ App - Ollama AI initialization failed:', error);
      }
    };
    
    initOllamaAI();
    
    // Initialize IndexedDB for image storage
    const initImageDB = async () => {
      try {
        const { initImageStorage } = await import('./utils/imageStorage');
        await initImageStorage();
        console.log('App - ImageStorage initialized');
      } catch (error) {
        console.error('App - ImageStorage initialization failed:', error);
      }
    };
    
    initImageDB();
    
    // Ollama 상태 확인 키보드 단축키 (Ctrl+Shift+O)
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.shiftKey && event.key === 'O') {
        event.preventDefault();
        console.log('🦙 Ollama status check requested');
        import('./services/integratedAIService').then(({ default: aiService }) => {
          console.log('🦙 Ollama enabled:', aiService.isOllamaEnabled());
        });
      }
    };
    
    document.addEventListener('keydown', handleKeyDown);
    
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
    
    // Cleanup function
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);



  const handleStorySelect = (storyId: string) => {
    console.log('🔍 App - handleStorySelect called:', {
      storyId,
      currentScreen,
      selectedStoryId
    });
    
    // 드래프트인지 확인
    const storedDrafts = localStorage.getItem('echostory_drafts');
    let isDraft = false;
    let draftDetails = null;
    
    console.log('🔍 App - Checking localStorage for drafts...');
    
    if (storedDrafts) {
      try {
        const draftsArray = JSON.parse(storedDrafts);
        const foundDraft = draftsArray.find((draft: any) => draft.id === storyId);
        isDraft = !!foundDraft;
        draftDetails = foundDraft;
        
        console.log('🔍 App - Draft check result:', { 
          storyId, 
          isDraft, 
          totalDrafts: draftsArray.length,
          foundDraft: foundDraft ? {
            id: foundDraft.id,
            title: foundDraft.title,
            hasData: !!foundDraft.data
          } : null,
          allDraftIds: draftsArray.map((d: any) => d.id)
        });
      } catch (error) {
        console.error('❌ App - Error checking drafts:', error);
      }
    } else {
      console.log('❌ App - No drafts found in localStorage');
    }
    
    setSelectedStoryId(storyId);
    
    if (isDraft) {
      // 드래프트인 경우 편집 화면으로 이동
      setSelectedEditStoryId(storyId);
      setCurrentScreen('in-progress-story');
      console.log('✅ App - Screen changed to in-progress-story (draft):', {
        selectedEditStoryId: storyId,
        newScreen: 'in-progress-story'
      });
    } else {
      // 완성된 스토리인 경우 상세 화면으로 이동
      setCurrentScreen('story-detail');
      console.log('✅ App - Screen changed to story-detail (published):', {
        selectedStoryId: storyId,
        newScreen: 'story-detail'
      });
    }
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

  // New: Chat screen goes directly to home
  const handleHomeFromChat = () => {
    setCurrentScreen('home');
    setActiveTab('home');
  };

  const handleNavigateToStoryCreation = () => {
    console.log('🚀 Navigating to story creation modal');
    setCurrentScreen('story-creation');
    console.log('Current screen set to:', 'story-creation');
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
          console.log('App - Rendering story-detail screen:', { selectedStoryId, currentScreen });
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
              onHome={handleHomeFromChat}
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
          console.log('📝 Rendering story creation modal');
          return (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999]">
              <div className="bg-[#1a1b1b] rounded-lg w-[90%] max-w-[500px] h-[90vh] max-h-[800px] overflow-hidden flex flex-col shadow-2xl mx-auto">
                <StoryCreationScreen 
                  onBack={handleBackToCreate}
                  onSave={handleStoryCreated}
                  safetyMode={safetyMode}
                  onSafetyToggle={handleSafetyToggle}
                />
              </div>
            </div>
          );
        case 'in-progress-story':
          return (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999]">
              <div className="bg-[#1a1b1b] rounded-lg w-[90%] max-w-[500px] h-[90vh] max-h-[800px] overflow-hidden flex flex-col shadow-2xl mx-auto">
                <StoryCreationScreen 
                  onBack={handleBackToCreate}
                  onSave={handleStoryCreated}
                  safetyMode={safetyMode}
                  onSafetyToggle={handleSafetyToggle}
                  storyId={selectedEditStoryId}
                />
              </div>
            </div>
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
        // Unified responsive mobile frame layout for all other screens
        <>
          <div className="h-screen flex flex-col bg-[#1a1b1b] relative">
            <div className="mobile-container h-full flex flex-col relative">
              {/* Main Content */}
              <div className="flex-1 flex flex-col">
                <div className="flex-1" style={{ paddingBottom: showBottomNav ? '80px' : '0' }}>
                  {/* Render normal screens except modals */}
                  {currentScreen !== 'story-creation' && currentScreen !== 'in-progress-story' && renderScreen()}
                </div>
              </div>

              {/* Fixed Bottom Navigation */}
              {showBottomNav && (
                <div className="fixed bottom-0 left-0 right-0 z-50">
                  <div className="mobile-container mx-auto">
                    <BottomNavigation 
                      activeTab={activeTab} 
                      onTabChange={handleTabChange}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Render modals outside the container */}
          {(currentScreen === 'story-creation' || currentScreen === 'in-progress-story') && (
            <>
              {console.log('🎯 Modal should be rendered, currentScreen:', currentScreen)}
              {renderScreen()}
            </>
          )}
        </>
      )}

    </div>
  );
}
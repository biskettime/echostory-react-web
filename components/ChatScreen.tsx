import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { getStory, getPublishedStories, initializeSampleStories } from '../data/stories';
import { getOrCreateChatSession, addChatMessage, markChatAsRead, ChatSession } from '../data/chatSessions';
import { TypingAnimation } from './TypingAnimation';
import { StoryInfoModal } from './StoryInfoModal';
import { FullScreenImageView } from './FullScreenImageView';
import { ChatSettingsModal } from './ChatSettingsModal';
import { VoiceSettingsModal } from './VoiceSettingsModal';
import { ProfileEditModal } from './ProfileEditModal';
import { PointsGuideModal } from './PointsGuideModal';
import { CharacterBackground } from './CharacterImage';
import { Redo, Edit3, Send, Star, Home, Volume2, Play } from 'lucide-react';
import { t, addLanguageChangeListener, removeLanguageChangeListener, getCurrentLanguage } from '../utils/i18n';
import { translateCharacterName, translateStoryTitle, translateStartingSituation, translateFirstDialogue } from '../utils/storyTranslation';
import { renderFormattedText, renderUserFormattedText } from '../utils/textFormatter';
import aiService, { StoryContext, UserContext } from '../services/integratedAIService';
import { kittenTTS } from '../services/kittenTTSService';
import { edgeTTS } from '../services/edgeTTSService';
import { createDefaultProfileForCharacter } from '../data/stories/characterUtils';
import svgPaths from '../imports/svg-c6g2wd331h';
// import imgThumbnail from "figma:asset/374d74b30fe73a06692e4b5c87efdada280aa447.png";
const imgThumbnail = "/images/echostory.png";

// AI service is imported as singleton

interface ChatScreenProps {
  storyId: string;
  onBack: () => void;
  onHome?: () => void;
  nickname: string;
}

interface Message {
  id: number;
  sender: 'character' | 'user';
  content: string;
  timestamp: Date;
  isNarration?: boolean;
  isTyping?: boolean;
  isWaitingForResponse?: boolean;
}

interface StoryParagraph {
  id: number;
  content: string;
  isEditable: boolean;
}

interface Suggestion {
  id: number;
  content: string;
}

export function ChatScreen({ storyId, onBack, onHome, nickname }: ChatScreenProps) {
  console.log('🚀 ChatScreen mounted with storyId:', storyId);
  const [message, setMessage] = useState('');
  const [isStoryMode, setIsStoryMode] = useState(false);
  const [currentChatSession, setCurrentChatSession] = useState<ChatSession | null>(null);
  const [showStoryInfo, setShowStoryInfo] = useState(false);
  const [isFullScreenImage, setIsFullScreenImage] = useState(false);
  const [showChatSettings, setShowChatSettings] = useState(false);
  const [showVoiceSettings, setShowVoiceSettings] = useState(false);
  const [showProfileEdit, setShowProfileEdit] = useState(false);
  const [showPointsGuide, setShowPointsGuide] = useState(false);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [storyInput, setStoryInput] = useState('');
  const [backgroundImageEnabled, setBackgroundImageEnabled] = useState(true);
  const [autoPlayEnabled, setAutoPlayEnabled] = useState(false);
  const [currentVoice, setCurrentVoice] = useState(() => {
    // 현재 언어에 따라 기본 음성 설정
    const currentLanguage = getCurrentLanguage();
    return currentLanguage === 'en' ? 'en-US-JennyNeural' : 'ko-KR-SunHiNeural';
  });
  const [showVoiceSelector, setShowVoiceSelector] = useState(false);
  const [responsiveVoiceReady, setResponsiveVoiceReady] = useState(false);
  const [userNickname, setUserNickname] = useState(nickname);
  const [userInfo, setUserInfo] = useState('');
  const [userImage, setUserImage] = useState<string | undefined>();
  const [profiles, setProfiles] = useState<any[]>([]);
  const [selectedProfileId, setSelectedProfileId] = useState('default');
  const [, forceUpdate] = useState({});
  const [isComposing, setIsComposing] = useState(false);
  const [isTTSPlaying, setIsTTSPlaying] = useState(false); // TTS 재생 상태 추적
  const [lastPlayedMessageId, setLastPlayedMessageId] = useState<number | null>(null); // 마지막 재생 메시지 ID
  const [autoPlayedMessageIds, setAutoPlayedMessageIds] = useState<Set<number>>(new Set()); // 자동으로 재생된 메시지 ID들
  const [aiStatus, setAiStatus] = useState<'connected' | 'disconnected' | 'error'>('disconnected');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const nextMessageIdRef = useRef(2);  // Changed from 3 to 2 since no narration
  const statusCheckIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Get story data based on storyId (moved up to avoid hooks order issues)
  console.log('🔍 ChatScreen - Received storyId:', storyId);
  const story = getStory(storyId);
  console.log('🔍 ChatScreen - Found story:', story);
  const characterName = story?.content?.characterName || story?.title || 'Character';
  
  // Log character name for debugging
  console.log('🎭 Character Info:', {
    characterName,
    storyTitle: story?.title,
    storyId
  });
  
  // Load user profile from localStorage
  const loadUserProfile = useCallback(() => {
    const savedProfiles = localStorage.getItem('chatProfiles');
    if (savedProfiles) {
      try {
        const profilesData = JSON.parse(savedProfiles);
        setProfiles(profilesData); // Save profile list
        
        if (profilesData.length > 0) {
          // Try to get the selected profile ID, fallback to 'default' or first profile
          const currentSelectedProfileId = localStorage.getItem('selectedProfileId') || 'default';
          setSelectedProfileId(currentSelectedProfileId);
          
          const selectedProfile = profilesData.find((p: any) => p.id === currentSelectedProfileId) || 
                                 profilesData.find((p: any) => p.id === 'default') || 
                                 profilesData[0];
          
          if (selectedProfile) {
            console.log('🔄 Loading user profile:', selectedProfile, 'from selectedProfileId:', currentSelectedProfileId);
            setUserNickname(selectedProfile.name);
            setUserInfo(selectedProfile.info || '');
            setUserImage(selectedProfile.image);
          }
        }
      } catch (error) {
        console.error('Failed to load profiles:', error);
      }
    } else if (story) {
      // Create default profile based on character gender when no profiles exist
      console.log('🎭 No profiles found, creating default profile based on character gender');
      const defaultProfile = createDefaultProfileForCharacter(story);
      
      const newProfile = {
        id: 'default',
        name: defaultProfile.name,
        info: defaultProfile.info,
        image: defaultProfile.image,
        createdAt: new Date().toISOString()
      };
      
      const profilesData = [newProfile];
      localStorage.setItem('chatProfiles', JSON.stringify(profilesData));
      localStorage.setItem('selectedProfileId', 'default');
      
      setProfiles(profilesData);
      setSelectedProfileId('default');
      setUserNickname(newProfile.name);
      setUserInfo(newProfile.info);
      setUserImage(newProfile.image);
      
      console.log('🎭 Created default profile:', newProfile);
    }
  }, [story]);

  // Update existing default profile if needed based on current story
  useEffect(() => {
    if (story && profiles.length > 0) {
      const defaultProfile = createDefaultProfileForCharacter(story);
      const currentDefaultProfile = profiles.find(p => p.id === 'default');
      
      if (currentDefaultProfile) {
        // Always ensure default profile matches current story's gender requirement
        console.log('🎭 Ensuring default profile matches current story gender in ChatScreen');
        
        const updatedProfiles = profiles.map(p => 
          p.id === 'default' 
            ? { ...p, name: defaultProfile.name, info: defaultProfile.info, image: defaultProfile.image }
            : p
        );
        
        // Only update if there's actually a change
        if (currentDefaultProfile.name !== defaultProfile.name || 
            currentDefaultProfile.info !== defaultProfile.info ||
            currentDefaultProfile.image !== defaultProfile.image) {
          localStorage.setItem('chatProfiles', JSON.stringify(updatedProfiles));
          setProfiles(updatedProfiles);
          
          if (selectedProfileId === 'default') {
            setUserNickname(defaultProfile.name);
            setUserInfo(defaultProfile.info);
            setUserImage(defaultProfile.image);
          }
          
          console.log('🎭 Updated default profile in ChatScreen:', { 
            from: currentDefaultProfile, 
            to: defaultProfile 
          });
        }
      }
    }
  }, [story?.id]); // Only depend on story ID to avoid unnecessary re-renders

  // Load profile on mount and when component becomes visible
  useEffect(() => {
    loadUserProfile();
  }, [loadUserProfile]);

  // Also reload profile when window gains focus (user comes back from other screen)
  useEffect(() => {
    const handleFocus = () => {
      console.log('🔄 Window focused, reloading user profile');
      loadUserProfile();
    };

    window.addEventListener('focus', handleFocus);
    return () => window.removeEventListener('focus', handleFocus);
  }, [loadUserProfile]);

  // Update voice when language changes
  useEffect(() => {
    const handleLanguageChange = () => {
      const currentLanguage = getCurrentLanguage();
      const newVoice = currentLanguage === 'en' ? 'en-US-JennyNeural' : 'ko-KR-SunHiNeural';
      console.log('🔄 Language changed, updating voice:', newVoice);
      setCurrentVoice(newVoice);
    };

    // Listen for language changes
    const unsubscribe = addLanguageChangeListener(handleLanguageChange);
    return unsubscribe;
  }, []);
  
  // Clear AI history when story changes
  useEffect(() => {
    console.log('🔄 Story changed, clearing AI history');
    aiService.clearHistory();
  }, [storyId]);

  // AI Connection Status Check - Run every 10 seconds
  useEffect(() => {
    const checkAIStatus = async () => {
      try {
        const status = await aiService.checkConnectionStatus();
        setAiStatus(status);
        console.log('🔌 AI Connection Status:', status);
      } catch (error) {
        console.error('Failed to check AI status:', error);
        setAiStatus('error');
      }
    };

    // Check immediately on mount
    checkAIStatus();

    // Set up interval for periodic checks
    statusCheckIntervalRef.current = setInterval(checkAIStatus, 10000); // Check every 10 seconds

    // Cleanup on unmount
    return () => {
      if (statusCheckIntervalRef.current) {
        clearInterval(statusCheckIntervalRef.current);
      }
    };
  }, []);

  // Language change listener
  useEffect(() => {
    const handleLanguageChange = () => {
      // Update initial narration message when language changes
      if (story) {
        const currentLang = getCurrentLanguage();
        const originalNarration = currentLang === 'en' && story.startSituation?.startingSituationEn
          ? story.startSituation.startingSituationEn
          : story.startSituation?.startingSituation || 
            t('startingSituation.defaultIntro').replace('{{characterName}}', characterName);
        const translatedNarration = story.startSituation?.startingSituation 
          ? translateStartingSituation(story.title, originalNarration)
          : originalNarration;
        
        setMessages(prevMessages => {
          if (prevMessages.length > 0 && prevMessages[0].isNarration) {
            return [
              {
                ...prevMessages[0],
                content: translatedNarration
              },
              ...prevMessages.slice(1)
            ];
          }
          return prevMessages;
        });
      }
      
      forceUpdate({});
    };

    addLanguageChangeListener(handleLanguageChange);
    return () => removeLanguageChangeListener(handleLanguageChange);
  }, [story, characterName]);

  // Available voice options (confirmed working in ResponsiveVoice)
  const voiceOptions = [
    { id: 'korean-female', name: 'Korean Female', label: 'Korean Female', lang: 'ko', testText: 'Hello, I am a Korean voice.' },
    { id: 'us-female', name: 'US English Female', label: 'US English Female', lang: 'en', testText: 'Hello, I am an American English female voice.' },
    { id: 'us-male', name: 'US English Male', label: 'US English Male', lang: 'en', testText: 'Hello, I am an American English male voice.' },
    { id: 'uk-female', name: 'UK English Female', label: 'UK English Female', lang: 'en', testText: 'Hello, I am a British English female voice.' },
    { id: 'uk-male', name: 'UK English Male', label: 'UK English Male', lang: 'en', testText: 'Hello, I am a British English male voice.' },
    { id: 'japanese-female', name: 'Japanese Female', label: 'Japanese Female', lang: 'ja', testText: 'Hello, I am a Japanese female voice.' },
  ];

  // TTS function with Edge TTS
  const handleTTS = async (text: string, messageId?: number, isAutoPlay: boolean = false) => {
    // For auto-play, check if already auto-played
    if (isAutoPlay && messageId && autoPlayedMessageIds.has(messageId)) {
      console.log('🔇 Message already auto-played once, skipping:', messageId);
      return;
    }
    
    // If already playing, stop the current playback
    if (isTTSPlaying) {
      console.log('🔇 Stopping current TTS playback');
      edgeTTS.stop();
      setIsTTSPlaying(false);
      setLastPlayedMessageId(null);
      return;
    }
    
    console.log('🎵 TTS requested for text:', text.substring(0, 50) + '...');
    console.log('🎵 Using voice:', currentVoice);
    console.log('🎵 Is auto-play:', isAutoPlay);
    
    // Mark as playing
    setIsTTSPlaying(true);
    if (messageId) {
      setLastPlayedMessageId(messageId);
      // Only track auto-played messages
      if (isAutoPlay) {
        setAutoPlayedMessageIds(prev => new Set([...prev, messageId]));
      }
    }
    
    // Try Edge TTS first (high quality)
    try {
      console.log('🎵 Using Edge TTS with voice:', currentVoice);
      await edgeTTS.speak(text, currentVoice, () => {
        // Callback when playback ends
        console.log('🎵 TTS playback completed');
        setIsTTSPlaying(false);
        setLastPlayedMessageId(null);
      });
      
      return;
    } catch (error) {
      console.error('❌ Edge TTS failed:', error);
      setIsTTSPlaying(false);
      setLastPlayedMessageId(null);
    }
    
    // Try Kitten TTS if available
    const isKittenAvailable = await kittenTTS.isServerAvailable();
    
    if (isKittenAvailable) {
      console.log('🐱 Using Kitten TTS');
      await kittenTTS.speak(text);
      return;
    }
    
    // Check if ResponsiveVoice is loaded
    if (typeof (window as any).responsiveVoice === 'undefined') {
      console.log('❌ No TTS service available');
      // Do nothing - Browser TTS is disabled
      return;
    }

    // Cancel any ongoing speech
    (window as any).responsiveVoice.cancel();
    
    // Use selected voice or auto-detect
    const hasKorean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(text);
    const hasEnglish = /[a-zA-Z]/.test(text);
    
    let voiceName = currentVoice;
    let rate = 0.9;
    let pitch = 1.0;
    
    // Adjust rate and pitch based on voice type
    if (voiceName.includes('Korean')) {
      rate = hasEnglish ? 0.8 : 0.85; // Slower for mixed content
      pitch = 1.0;
    } else if (voiceName.includes('Male')) {
      rate = 0.85;
      pitch = 0.9; // Lower pitch for male voices
    } else {
      rate = 0.9;
      pitch = 1.0;
    }
    
    console.log('🎵 Using ResponsiveVoice:', voiceName, 'for text:', text.substring(0, 50) + '...');
    
    // Speak with ResponsiveVoice
    (window as any).responsiveVoice.speak(text, voiceName, {
      rate: rate,
      pitch: pitch,
      volume: 0.9,
      onstart: () => console.log('🎵 ResponsiveVoice TTS started'),
      onend: () => console.log('🎵 ResponsiveVoice TTS ended'),
      onerror: (e: any) => {
        console.error('❌ ResponsiveVoice TTS error:', e);
        // No fallback - TTS is disabled
      }
    });
  };

  // Test voice function
  const handleTestVoice = (voice: { name: string; testText: string }) => {
    console.log('🔍 Testing voice:', voice.name, 'with text:', voice.testText);
    
    // Check if ResponsiveVoice is loaded and ready
    if (typeof (window as any).responsiveVoice === 'undefined' || !responsiveVoiceReady) {
      console.warn('⚠️ ResponsiveVoice not ready, TTS disabled (Browser TTS turned off)');
      // Do nothing - TTS is disabled
      return;
    }

    console.log('✅ ResponsiveVoice is ready');
    
    // Check if ResponsiveVoice voice support is available
    if (!(window as any).responsiveVoice.voiceSupport()) {
      console.error('❌ ResponsiveVoice voice support not available, TTS disabled');
      // Do nothing - TTS is disabled
      return;
    }

    console.log('✅ ResponsiveVoice voice support available');

    // Cancel any ongoing speech
    (window as any).responsiveVoice.cancel();
    
    // Play test audio with ResponsiveVoice
    console.log('🎵 Starting ResponsiveVoice test...');
    (window as any).responsiveVoice.speak(voice.testText, voice.name, {
      rate: voice.name.includes('Male') ? 0.85 : 0.9,
      pitch: voice.name.includes('Male') ? 0.9 : 1.0,
      volume: 0.9,
      onstart: () => {
        console.log('🎵 ResponsiveVoice test started:', voice.name);
      },
      onend: () => {
        console.log('🎵 ResponsiveVoice test completed:', voice.name);
      },
      onerror: (e: any) => {
        console.error('❌ ResponsiveVoice test error:', e);
        console.log('❌ Test voice failed - TTS disabled');
      }
    });
    
    console.log('🎵 ResponsiveVoice test command sent');
  };

  // Gallery state for story images
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showImageGallery, setShowImageGallery] = useState(false);
  
  // Load saved background image for this story
  const savedBackgroundKey = `backgroundImage_${storyId}`;
  const [selectedBackgroundImage, setSelectedBackgroundImage] = useState<string | null>(() => {
    const saved = localStorage.getItem(savedBackgroundKey);
    return saved;
  });
  
  // Save background image when it changes
  useEffect(() => {
    if (selectedBackgroundImage) {
      localStorage.setItem(savedBackgroundKey, selectedBackgroundImage);
    }
  }, [selectedBackgroundImage, savedBackgroundKey]);



  // Get story images with fallback
  const storyImages = story ? [
    story.media.thumbnailImage,
    ...story.media.storyImages
  ].filter(Boolean) : [];
  
  // Force fallback to echostory.png if character-*.svg detected
  const safeStoryImages = storyImages.map(img => img && img.includes('character-') ? '/images/echostory.png' : img);
  
  // If no images, use echostory.png
  const finalStoryImages = safeStoryImages.length > 0 ? safeStoryImages : ['/images/echostory.png'];
  console.log('📷 Image Processing:', {
    storyId,
    thumbnailImage: story?.media?.thumbnailImage,
    storyImagesArray: story?.media?.storyImages,
    storyImagesCount: story?.media?.storyImages?.length,
    combinedImages: storyImages,
    safeImages: safeStoryImages,
    finalImages: finalStoryImages
  });

  // TTS disabled - no browser TTS
  useEffect(() => {
    console.log('🔇 TTS disabled - Browser TTS turned off');
    setResponsiveVoiceReady(false); // TTS disabled
  }, []);

  // Close voice selector when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (showVoiceSelector) {
        setShowVoiceSelector(false);
      }
    };

    if (showVoiceSelector) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [showVoiceSelector]);

  // Define getInitialCharacterMessage before using it in useEffect
  const getInitialCharacterMessage = useCallback((): string => {
    if (!story) return 'Hello!';
    
    // Get first dialogue from story data based on language
    const currentLang = getCurrentLanguage();
    const originalDialogue = currentLang === 'en' && story.startSituation?.firstDialogueEn
      ? story.startSituation.firstDialogueEn
      : story.startSituation?.firstDialogue || 'Hello!';
    
    // Translate the dialogue based on current language
    let translatedDialogue = translateFirstDialogue(story.title, originalDialogue);
    
    // Replace {{user}} placeholder with actual nickname
    translatedDialogue = translatedDialogue.replace(/\{\{user\}\}/g, userNickname);
    
    return translatedDialogue;
  }, [story, userNickname]);

  // Initialize chat session and load messages
  useEffect(() => {
    console.log('ChatScreen useEffect - storyId:', storyId, 'story:', story);
    
    // Initialize chat session
    if (story && storyId) {
      console.log('ChatScreen - Chat session initialization started');
      const session = getOrCreateChatSession(
        storyId,
        story.content.characterName,
        story.media.thumbnailImage
      );
      setCurrentChatSession(session);
      console.log('ChatScreen - Chat session created:', session);
      
      // Load existing messages from session if any
      if (session.messages.length > 0) {
        const loadedMessages: Message[] = session.messages.map((msg, index) => ({
          id: index + 1,
          sender: msg.senderId === 'user' ? 'user' : 'character',
          content: msg.content,
          timestamp: new Date(msg.timestamp),
          isNarration: msg.type === 'system',
          isTyping: false  // No typing effect for existing messages
        }));
        
        // Just load the messages
        setMessages(loadedMessages);
        console.log('ChatScreen - Existing messages loaded:', loadedMessages.length, 'messages');
        
        // Update next message ID reference
        nextMessageIdRef.current = loadedMessages.length + 1;
        
        // Mark messages as read
        markChatAsRead(session.id);
      } else if (!isStoryMode) {
        // No existing messages - add first welcome message
        console.log('ChatScreen - No existing messages, adding first welcome message');
        
        const firstCharacterMessage = getInitialCharacterMessage();
        const firstMessage: Message = {
          id: 1,
          sender: 'character',
          content: firstCharacterMessage,
          timestamp: new Date(),
          isTyping: true
        };
        
        // Set message with typing effect
        setMessages(prev => {
          // Check if already has a message (StrictMode second run)
          if (prev.length > 0) {
            console.log('ChatScreen - Message already exists (StrictMode), keeping it');
            return prev;
          }
          console.log('ChatScreen - Adding first message with typing');
          return [firstMessage];
        });
        
        // Save to session after a delay to avoid StrictMode issues
        setTimeout(() => {
          const currentSession = getOrCreateChatSession(
            storyId,
            story.content.characterName,
            story.media.thumbnailImage
          );
          // Only save if session is still empty
          if (currentSession.messages.length === 0) {
            addChatMessage(currentSession.id, 'character', firstCharacterMessage, 'text');
          }
        }, 100);
      }
    } else {
      console.error('ChatScreen - No story data found. storyId:', storyId, 'story:', story);
    }
  }, [storyId]); // Only run when storyId changes
  
  // Show error screen if no story
  if (!story) {
    console.error('❌ ChatScreen - Story not found for storyId:', storyId);
    console.log('🔍 ChatScreen - Available stories:', getPublishedStories().map(s => ({ id: s.id, title: s.title })));
    
    return (
      <div className="flex flex-col items-center justify-center h-full bg-[#1a1b1b] text-white p-8">
        <h2 className="text-xl font-bold mb-4">
          {getCurrentLanguage() === 'ko' ? '스토리를 찾을 수 없습니다' : 'Story Not Found'}
        </h2>
        <p className="text-gray-400 mb-6 text-center">
          {getCurrentLanguage() === 'ko' 
            ? `요청하신 스토리 (ID: ${storyId})를 찾을 수 없습니다.\n스토리가 삭제되었거나 존재하지 않을 수 있습니다.`
            : `The requested story (ID: ${storyId}) could not be found.\nThe story may have been deleted or does not exist.`}
        </p>
        <div className="text-xs text-gray-500 mb-4 max-w-md text-center">
          {getCurrentLanguage() === 'ko' ? '디버그 정보' : 'Debug Info'}: storyId = "{storyId}"<br/>
          {getCurrentLanguage() === 'ko' ? '타입' : 'Type'}: {typeof storyId}
        </div>
        <button
          onClick={onBack}
          className="bg-[#dc5903] text-white px-6 py-2 rounded-md hover:bg-[#e6850e] transition-colors"
        >
          {getCurrentLanguage() === 'ko' ? '돌아가기' : 'Go Back'}
        </button>
      </div>
    );
  }
  

  
  // 캐릭터 이미지 동적 로딩 - EchoStory 로고로 시작
  const [characterImageSrc, setCharacterImageSrc] = useState<string>('/images/echostory.png');
  
  // 캐릭터 이미지 상태 변경 시 로그 출력
  useEffect(() => {
    console.log('🖼️ Character image src changed:', characterImageSrc);
  }, [characterImageSrc]);
  
  useEffect(() => {
    const loadCharacterImage = async () => {
      console.log('=== CHARACTER IMAGE LOADING DEBUG ===');
      console.log('Original characterName:', characterName);
      
      if (!characterName) {
        console.log('No character name provided');
        return;
      }
      
      try {
        // 새로운 분류 코드 시스템 사용
        const { getCharacterImageWithFallbackNew } = await import('../utils/storyImageMapping');
        const imagePath = await getCharacterImageWithFallbackNew(characterName, 1);
        
        console.log('✅ Character image loaded:', imagePath);
        setCharacterImageSrc(imagePath);
      } catch (error) {
        console.error('Error loading character image:', error);
        console.log('🔄 Using default image');
        setCharacterImageSrc('/images/echostory.png');
      }
    };
    
    loadCharacterImage();
  }, [characterName, story?.media?.thumbnailImage]);

  // Story mode paragraphs - All in English
  const [storyParagraphs, setStoryParagraphs] = useState<StoryParagraph[]>([
    {
      id: 1,
      content: "The mechanical whir of the airplane filled the air as it surged down the runway and took off. Alex's first backpacking trip. Looking at the blue sky outside the window should have been exciting, but their heart was pounding with anxiety.",
      isEditable: false
    },
    {
      id: 2,
      content: "The source of all this anxiety was sitting right next to Alex - Jordan, that troublesome friend. They'd been inseparable since age 8, and by now Alex could practically read their thoughts just by looking at their expression.",
      isEditable: false
    },
    {
      id: 3,
      content: "Originally, this was supposed to be Alex's solo journey of solitude. But as soon as Jordan heard about the Jeju Island trip, they showed up with their bags packed, saying 'I'm bored, I'll come too!' and completely derailed all of Alex's plans.",
      isEditable: false
    },
    {
      id: 4,
      content: "The problem was that Alex had only booked one room at the accommodation. The carefree Jordan didn't think much of it, saying 'What's the big deal between friends?' They even told their boyfriend they were just going with a 'friend,' clear evidence that they didn't even consider Alex as anything more.\n\n\"But we only have one room. You know I have bad sleeping habits, right? Don't blame me if you get crushed under me all night.\"",
      isEditable: false
    }
  ]);

  // Story suggestions - All in English
  const [suggestions, setSuggestions] = useState<Suggestion[]>([
    {
      id: 1,
      content: "Jordan's shameless tone made Alex frown.\n\"Isn't that something you should be worrying about? You might suffocate getting trapped between my legs.\""
    },
    {
      id: 2, 
      content: "Jordan smiled mischievously and rested their chin on their hand. \"Oh damn. Here we go again.\" Alex groaned inwardly and glared at Jordan. A leopard never changes its spots - here they go again."
    }
  ]);

  // Initialize messages with empty array (no narration)
  const [messages, setMessages] = useState<Message[]>([]);

  // Debug: Track message state changes (temporarily disabled)
  // useEffect(() => {
  //   console.log('🔍 Messages state changed:', {
  //     messagesCount: messages.length,
  //     firstMessageAdded,
  //     messages: messages.map(m => ({ 
  //       id: m.id, 
  //       sender: m.sender, 
  //       isNarration: m.isNarration, 
  //       content: (m.content || '').substring(0, 50) + '...' 
  //     }))
  //   });
  // }, [messages, firstMessageAdded]);

  // Use selected background image if available, otherwise use character image or story image
  const backgroundImage = useMemo(() => {
    if (selectedBackgroundImage) {
      return selectedBackgroundImage;
    }
    if (characterImageSrc && characterImageSrc !== '/images/echostory.png') {
      return characterImageSrc;
    }
    return story?.media?.thumbnailImage || story?.media?.storyImages?.[0] || imgThumbnail;
  }, [selectedBackgroundImage, characterImageSrc, story?.media?.thumbnailImage, story?.media?.storyImages]);

  // Scroll to bottom - Auto scroll when AI is typing or new messages appear
  useEffect(() => {
    const scrollToBottom = () => {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    
    // Check if last message is from AI and is typing or just added
    const lastMessage = messages[messages.length - 1];
    if (lastMessage && (lastMessage.sender === 'character' || lastMessage.sender === 'user')) {
      // Immediate scroll for new messages or AI typing
      const timeoutId = setTimeout(scrollToBottom, 50);
      return () => clearTimeout(timeoutId);
    }
  }, [messages, messages.length, storyParagraphs.length]);

  // Auto play character messages when enabled (including while typing)
  useEffect(() => {
    if (!autoPlayEnabled || messages.length === 0) return;
    
    // Don't start new playback if already playing
    if (isTTSPlaying) {
      console.log('🔊 TTS already playing, skipping auto-play');
      return;
    }

    // Get the last message
    const lastMessage = messages[messages.length - 1];
    
    // Check if this message was already auto-played
    if (lastMessage && autoPlayedMessageIds.has(lastMessage.id)) {
      console.log('🔊 Message already auto-played, skipping:', lastMessage.id);
      return;
    }
    
    // Auto-play character messages (even while typing) but not narration
    if (lastMessage && 
        lastMessage.sender === 'character' && 
        !lastMessage.isNarration) {
      
      // If still typing, play what we have so far
      if (lastMessage.isTyping && lastMessage.content.length > 10) {
        console.log('🔊 Auto-playing character message (while typing):', lastMessage.content.substring(0, 50) + '...');
        
        // Play immediately without delay for typing messages
        handleTTS(lastMessage.content, lastMessage.id, true); // true = isAutoPlay
      } else if (!lastMessage.isTyping) {
        // For completed messages, small delay to ensure fully rendered
        console.log('🔊 Auto-playing completed character message:', lastMessage.content.substring(0, 50) + '...');
        
        setTimeout(() => {
          handleTTS(lastMessage.content, lastMessage.id, true); // true = isAutoPlay
        }, 300);
      }
    }
  }, [messages, autoPlayEnabled, isTTSPlaying, lastPlayedMessageId, autoPlayedMessageIds]);

  // Removed - first message now handled like regular messages

  // Debug effect to monitor mode changes
  useEffect(() => {
    console.log('Mode changed to:', isStoryMode ? 'Story Mode' : 'Chat Mode');
  }, [isStoryMode]);

  // Debug effect removed - no longer needed

  // Removed - first message now handled like regular messages

  const getCharacterResponse = useCallback(async (userMessage: string, storyId: string): Promise<string> => {
    console.log('🤖 getCharacterResponse called with:', { userMessage, storyId });
    try {
      // Get story data for AI context
      const story = getStory(storyId);
      console.log('📚 Story data:', story);
      if (!story) {
        console.log('❌ Story not found');
        throw new Error('Story not found');
      }

      // Prepare story context for AI
      const storyContext: StoryContext = {
        title: story.title,
        characterName: story.content?.characterName || story.title,
        characterDescription: story.content?.characterDescription || '',
        storySettings: story.content?.storySettings || '',
        secretSettings: story.content?.secretSettings || '',
        startingSituation: getCurrentLanguage() === 'en' && story.startSituation?.startingSituationEn 
          ? story.startSituation.startingSituationEn 
          : story.startSituation?.startingSituation || '',
        firstDialogue: getCurrentLanguage() === 'en' && story.startSituation?.firstDialogueEn
          ? story.startSituation.firstDialogueEn
          : story.startSituation?.firstDialogue || '',
        safetyMode: false, // Can be configured based on user settings
        language: getCurrentLanguage() as any,
        webSelectedLanguage: getCurrentLanguage() as any
      };

      // Prepare user context
      const userContext: UserContext = {
        nickname: userNickname,
        userInfo: userInfo || ''
      };
      
      console.log('🎭 Sending to AI - User Profile:', {
        nickname: userNickname,
        info: userInfo,
        selectedProfileId
      });

      // Get conversation history from messages state
      const conversationHistory = messages
        .filter(msg => !msg.isNarration)
        .slice(-10) // Keep last 10 messages for context
        .map(msg => ({
          role: msg.sender === 'user' ? 'user' as const : 'assistant' as const,
          content: msg.content
        }));
      
      console.log('📜 Conversation history prepared:', conversationHistory);
      console.log('📜 History length:', conversationHistory.length);

      // Get AI response - using the generateResponse method with session ID
      const sessionId = `${storyId}-${userNickname}`;
      
      // Initialize session only if not already done
      console.log('🔍 Checking session initialization for:', sessionId);
      try {
        // Check if session already exists
        const hasExistingSession = aiService.hasSession(sessionId);
        if (!hasExistingSession) {
          console.log('🆕 Initializing new session...');
          aiService.initializeSession(sessionId, storyContext, userContext);
          console.log('✅ Session initialized successfully');
        } else {
          console.log('♻️ Using existing session');
        }
      } catch (initError) {
        console.error('❌ Session initialization error:', initError);
      }
      
      console.log('🚀 Calling AI service with:', { sessionId, userMessage, storyContext, userContext });
      const aiResponse = await aiService.generateResponse(
        sessionId,
        userMessage,
        storyContext,
        userContext
      );
      
      console.log('✅ AI Response received:', aiResponse);
      // aiResponse is already a string, not an object
      return aiResponse;
    } catch (error) {
      console.error('AI response error:', error);
      // Return a simple error message instead of generic responses
      throw error; // Let the calling function handle the error
    }
  }, [t, userNickname, userInfo, messages]);

  const handleSendMessage = useCallback(async () => {
    if (message.trim()) {
      const userMessageId = nextMessageIdRef.current;
      nextMessageIdRef.current += 1;
      
      const newMessage: Message = {
        id: userMessageId,
        sender: 'user',
        content: message.trim(),
        timestamp: new Date()
      };
      
      const messageContent = message.trim();
      setMessages(prev => [...prev, newMessage]);
      setMessage('');
      
      // Save user message to chat session
      if (currentChatSession) {
        addChatMessage(currentChatSession.id, 'user', messageContent);
      }
      
      // Update chat message count for image unlocking
      const currentCount = parseInt(localStorage.getItem(`chatMessages_${storyId}`) || '0', 10);
      const newCount = currentCount + 1;
      localStorage.setItem(`chatMessages_${storyId}`, newCount.toString());
      
      // Log for debugging
      const unlockedImages = newCount < 10 ? 1 : Math.min(1 + Math.floor(newCount / 10), 10);
      console.log(`📊 Chat message count updated: ${newCount} (unlocked images: ${unlockedImages})`);
      
      // Dispatch custom event to notify StoryDetailScreen of count change
      window.dispatchEvent(new CustomEvent('chatMessageCountUpdated', { 
        detail: { storyId, count: newCount } 
      }));

      // Show typing indicator
      const typingId = nextMessageIdRef.current;
      nextMessageIdRef.current += 1;
      const typingMessage: Message = {
        id: typingId,
        sender: 'character',
        content: '', // Empty content, will show dots animation
        timestamp: new Date(),
        isTyping: true,
        isWaitingForResponse: true // Flag to show waiting animation
      };
      setMessages(prev => [...prev, typingMessage]);

      // Get AI response using service layer with timeout handling
      try {
        // Set up timeout for waiting animation (60 seconds)
        const timeoutPromise = new Promise<string>((resolve) => {
          setTimeout(() => {
            console.log('⏱️ Response timeout - showing hesitation message');
            const hesitationMessages = getCurrentLanguage() === 'ko' ? [
              "*머뭇거리며 대답을 망설이는 듯한 표정을 짓는다*",
              "*잠시 생각에 잠긴 듯 조용히 있다가 천천히 고개를 든다*",
              "*무언가 말하려다가 입을 다물고 시선을 돌린다*",
              "*깊은 한숨을 내쉬며 말을 고르는 듯한 모습을 보인다*",
              "*손가락으로 테이블을 두드리며 무언가 고민하는 표정이다*",
              "*입술을 살짝 깨물며 무엇을 말할지 망설이고 있다*",
              "*눈을 감고 잠시 생각에 잠긴다*",
              "*고개를 갸웃거리며 당신을 바라본다*",
              "*말없이 당신의 눈을 들여다보며 침묵한다*",
              "*손으로 머리카락을 쓸어넘기며 시간을 끈다*"
            ] : [
              "*hesitates with an uncertain expression*",
              "*remains quiet in thought, then slowly raises their head*",
              "*starts to speak but closes their mouth and looks away*",
              "*lets out a deep sigh, seeming to choose words carefully*",
              "*drums fingers on the table with a thoughtful expression*",
              "*bites their lip slightly, hesitating on what to say*",
              "*closes eyes briefly, lost in thought*",
              "*tilts head questioningly while looking at you*",
              "*silently meets your gaze without speaking*",
              "*runs fingers through hair, taking their time*"
            ];
            const randomMessage = hesitationMessages[Math.floor(Math.random() * hesitationMessages.length)];
            resolve(randomMessage);
          }, 60000); // 60초 타임아웃
        });
        
        // Race between actual API response and timeout
        console.log('🚀 Calling getCharacterResponse with:', { messageContent, storyId });
        const responsePromise = getCharacterResponse(messageContent, storyId);
        
        const responseContent = await Promise.race([responsePromise, timeoutPromise]);
        console.log('✅ Received response (actual or timeout):', responseContent);
        
        // Replace waiting indicator with actual response
        setMessages(prev => {
          const filtered = prev.filter(msg => msg.id !== typingId);
          const characterResponseId = nextMessageIdRef.current;
          nextMessageIdRef.current += 1;
          
          const characterResponse: Message = {
            id: characterResponseId,
            sender: 'character',
            content: responseContent,
            timestamp: new Date(),
            isTyping: true,  // Start with typing animation
            isWaitingForResponse: false
          };
          
          return [...filtered, characterResponse];
        });
        
        // Save character response to chat session
        if (currentChatSession) {
          addChatMessage(currentChatSession.id, 'character', responseContent);
        }
      } catch (error) {
        console.error('Error getting AI response:', error);
        // On error, show a fallback message instead of removing
        setMessages(prev => {
          const filtered = prev.filter(msg => msg.id !== typingId);
          const errorResponseId = nextMessageIdRef.current;
          nextMessageIdRef.current += 1;
          
          const errorContent = getCurrentLanguage() === 'ko' 
            ? "*순간적으로 당황한 듯한 표정을 지으며 말을 잇지 못한다*"
            : "*looks momentarily confused and struggles to find words*";
          
          const errorResponse: Message = {
            id: errorResponseId,
            sender: 'character',
            content: errorContent,
            timestamp: new Date(),
            isTyping: true,
            isWaitingForResponse: false
          };
          
          return [...filtered, errorResponse];
        });
      }
    }
  }, [message, getCharacterResponse, storyId, currentChatSession, t]);

  const handleSendStoryInput = useCallback(() => {
    if (storyInput.trim()) {
      // Add new paragraph to story
      const newParagraph: StoryParagraph = {
        id: storyParagraphs.length + 1,
        content: storyInput.trim(),
        isEditable: true
      };
      
      setStoryParagraphs(prev => [...prev, newParagraph]);
      setStoryInput('');
    }
  }, [storyInput, storyParagraphs.length]);

  const handleGenerateNextContent = useCallback(() => {
    const newSuggestions = [
      "Their friend's shameless tone made Alex frown. \"Isn't that something you should be worrying about? You might suffocate getting trapped between my legs.\"",
      "Their friend smiled mischievously and rested their chin on their hand. \"Oh damn. Here we go again.\" Alex groaned inwardly and glared at their friend.",
      "Last night, their friend had been pestering Alex all night with cute threats. 'Come on~ let's go together. I'd be scared going alone~' they said, clinging to Alex's arm."
    ];
    
    const randomSuggestion = newSuggestions[Math.floor(Math.random() * newSuggestions.length)];
    
    const newParagraph: StoryParagraph = {
      id: storyParagraphs.length + 1,
      content: randomSuggestion,
      isEditable: true
    };
    
    setStoryParagraphs(prev => [...prev, newParagraph]);
  }, [storyParagraphs.length]);

  const handleSelectSuggestion = useCallback((suggestion: Suggestion) => {
    const newParagraph: StoryParagraph = {
      id: storyParagraphs.length + 1,
      content: suggestion.content,
      isEditable: true
    };
    
    setStoryParagraphs(prev => [...prev, newParagraph]);
  }, [storyParagraphs.length]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    // Don't handle when IME input is in progress (Korean, Japanese, Chinese, etc.)
    if (e.nativeEvent.isComposing || isComposing) {
      return;
    }
    
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (isStoryMode) {
        handleSendStoryInput();
      } else {
        handleSendMessage();
      }
    }
  }, [handleSendMessage, handleSendStoryInput, isStoryMode, isComposing]);

  const handleCompositionStart = useCallback(() => {
    setIsComposing(true);
  }, []);

  const handleCompositionEnd = useCallback(() => {
    setIsComposing(false);
  }, []);

  // Message action handlers
  const handleRegenerateMessage = useCallback((messageId: number) => {
    console.log('🔄 Regenerating message:', messageId);
    console.log('Current messages:', messages);
    
    // Find the message and regenerate character response
    const messageIndex = messages.findIndex(msg => msg.id === messageId);
    console.log('Message index:', messageIndex);
    
    if (messageIndex > 0) {
      const userMessage = messages[messageIndex - 1];
      console.log('User message:', userMessage);
      
      if (userMessage && userMessage.sender === 'user') {
        console.log('✅ Found user message, regenerating...');
        
        // Remove the current character message and generate a new one
        setMessages(prev => {
          const newMessages = prev.slice(0, messageIndex);
          console.log('Messages after slice:', newMessages);
          return newMessages;
        });
        
        // Generate new response with typing animation
        setTimeout(async () => {
          const newResponseId = nextMessageIdRef.current;
          nextMessageIdRef.current += 1;
          
          try {
            const responseContent = await getCharacterResponse(userMessage.content, storyId);
            console.log('New response content:', responseContent);
            
            // Add message with typing animation
            const newResponse: Message = {
              id: newResponseId,
              sender: 'character',
              content: responseContent,
              timestamp: new Date(),
              isTyping: true,
              isWaitingForResponse: false
            };
            
            console.log('Adding new response:', newResponse);
            setMessages(prev => [...prev, newResponse]);
            
            // Save to chat session
            if (currentChatSession) {
              addChatMessage(currentChatSession.id, 'character', responseContent);
            }
          } catch (error) {
            console.error('❌ Error generating new response:', error);
            // Don't add any fallback response - just log the error
          }
        }, 1000);
      } else {
        console.log('❌ No valid user message found');
      }
    } else {
      console.log('❌ Invalid message index:', messageIndex);
    }
  }, [messages, getCharacterResponse, storyId, currentChatSession]);

  const handleEditMessage = useCallback((messageId: number) => {
    console.log('Editing message:', messageId);
    // TODO: Implement edit functionality - could open a modal or make message editable
    alert(t('chat.editNotImplemented'));
  }, [t]);

  const handleDeleteMessage = useCallback((messageId: number) => {
    console.log('Deleting message:', messageId);
    if (confirm(t('chat.confirmDelete'))) {
      // Find the message to be deleted
      const messageToDelete = messages.find(msg => msg.id === messageId);
      
      // Remove from UI
      setMessages(prev => prev.filter(msg => msg.id !== messageId));
      
      // If it's a user message and there's a chat session, we might want to handle it differently
      // For now, just remove from UI - chat session persistence can be handled later
      if (messageToDelete && currentChatSession) {
        console.log(`Deleted ${messageToDelete.sender} message: "${messageToDelete.content}"`);
      }
    }
  }, [t, messages, currentChatSession]);

  const handleInfoClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Info button clicked!');
    setShowStoryInfo(true);
  }, []);

  const handleCloseStoryInfo = useCallback(() => {
    console.log('Closing story info modal');
    setShowStoryInfo(false);
  }, []);

  const handleEyeClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Eye button clicked!');
    setIsFullScreenImage(!isFullScreenImage);
  }, [isFullScreenImage]);

  const handleCloseImageGallery = useCallback(() => {
    setShowImageGallery(false);
  }, []);

  // Function to get unlocked image count based on chat messages
  const getUnlockedImageCount = (messageCount: number): number => {
    // First image is always unlocked, additional images unlock every 5 messages
    if (messageCount < 5) {
      return 1; // Only first image unlocked
    }
    // Unlock 1 image per 5 messages, max 15 images for Haruka (5 regular + 10 sexy)
    const maxImages = characterName === 'Haruka' ? 15 : 10;
    return Math.min(1 + Math.floor(messageCount / 5), maxImages);
  };
  
  // Function to check if an image is unlocked
  const isImageUnlocked = (imageIndex: number): boolean => {
    const unlockedCount = getUnlockedImageCount(messages.length);
    return imageIndex < unlockedCount;
  };

  // Get all story images including duplicates if needed
  const getAllStoryImages = (): string[] => {
    const images: string[] = [];
    
    // Try to load character-specific images
    if (characterName) {
      // Check for character images in /data/ch_img/ folder
      // Add timestamp to force reload and avoid cache
      const timestamp = new Date().getTime();
      
      // For Haruka, include both regular and sexy versions
      if (characterName === 'Haruka') {
        // Add regular images (1-5)
        for (let i = 1; i <= 5; i++) {
          const imagePath = `/data/ch_img/${characterName}_${i}.png?t=${timestamp}`;
          images.push(imagePath);
        }
        // Add sexy images (1-10, but skip 5 as it doesn't exist)
        for (let i = 1; i <= 10; i++) {
          if (i === 5) continue; // Skip sexy_5 as it doesn't exist
          const sexyImagePath = `/data/ch_img/${characterName}_sexy_${i}.png?t=${timestamp}`;
          images.push(sexyImagePath);
        }
      } else {
        // For other characters, load 1-5
        for (let i = 1; i <= 5; i++) {
          const imagePath = `/data/ch_img/${characterName}_${i}.png?t=${timestamp}`;
          images.push(imagePath);
        }
      }
    } else {
      // If no character name, use character image and story images
      if (characterImageSrc && !characterImageSrc.includes('echostory.png')) {
        images.push(characterImageSrc);
      }
      
      // Add all images from finalStoryImages (already filtered)
      images.push(...finalStoryImages);
      
      // If we have less than 5 images, add more echostory.png
      while (images.length < 5) {
        images.push('/images/echostory.png');
      }
    }
    
    console.log('📸 getAllStoryImages result:', {
      characterName,
      characterImageSrc,
      finalStoryImages,
      totalImages: images.length,
      resultImages: images,
      firstImage: images[0],
      timestamp: new Date().getTime()
    });
    
    return images;
  };
  
  // Calculate full screen images including all story images and locked status
  const fullScreenImages = getAllStoryImages();
  
  // Create image objects with unlock status for fullscreen view
  const fullScreenImageData = fullScreenImages.map((img, index) => ({
    url: img,
    isUnlocked: isImageUnlocked(index),
    index: index
  }));
  
  // Debug logging for character images
  console.log('🖼️ FullScreen image setup:', {
    characterImageSrc,
    finalStoryImages,
    fullScreenImages,
    unlockedCount: getUnlockedImageCount(messages.length),
    messageCount: messages.length,
    fullScreenImageData
  });

  const handlePreviousImage = useCallback(() => {
    const totalImages = isFullScreenImage ? fullScreenImages.length : finalStoryImages.length;
    const newIndex = currentImageIndex > 0 ? currentImageIndex - 1 : totalImages - 1;
    setCurrentImageIndex(newIndex);
    
    // Update background if image is unlocked
    if (isFullScreenImage && fullScreenImageData[newIndex]?.isUnlocked) {
      setSelectedBackgroundImage(fullScreenImages[newIndex]);
      console.log('🖼️ Background image changed to:', fullScreenImages[newIndex]);
    }
  }, [fullScreenImages, finalStoryImages.length, isFullScreenImage, currentImageIndex, fullScreenImageData]);

  const handleNextImage = useCallback(() => {
    const totalImages = isFullScreenImage ? fullScreenImages.length : finalStoryImages.length;
    const newIndex = currentImageIndex < totalImages - 1 ? currentImageIndex + 1 : 0;
    setCurrentImageIndex(newIndex);
    
    // Update background if image is unlocked
    if (isFullScreenImage && fullScreenImageData[newIndex]?.isUnlocked) {
      setSelectedBackgroundImage(fullScreenImages[newIndex]);
      console.log('🖼️ Background image changed to:', fullScreenImages[newIndex]);
    }
  }, [fullScreenImages, finalStoryImages.length, isFullScreenImage, currentImageIndex, fullScreenImageData]);

  const handleCloseFullScreen = useCallback(() => {
    console.log('Closing full screen image view');
    setIsFullScreenImage(false);
  }, []);

  const handleMenuClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Menu button clicked!');
    setShowChatSettings(true);
  }, []);

  const handleCloseChatSettings = useCallback(() => {
    console.log('Closing chat settings modal');
    setShowChatSettings(false);
  }, []);

  const handleBackgroundToggle = useCallback((enabled: boolean) => {
    console.log('Background toggle:', enabled);
    setBackgroundImageEnabled(enabled);
  }, []);

  const handleAutoPlayToggle = useCallback((enabled: boolean) => {
    setAutoPlayEnabled(enabled);
    console.log('Auto play toggled:', enabled);
  }, []);

  const handleEditProfile = useCallback(() => {
    console.log('Edit profile clicked');
    setShowChatSettings(false);
    setShowProfileEdit(true);
  }, []);

  const handleChangeVoice = useCallback(() => {
    console.log('Change voice clicked');
    setShowChatSettings(false);
    setShowVoiceSettings(true);
  }, []);

  const handlePointsGuide = useCallback(() => {
    console.log('Points guide clicked');
    setShowChatSettings(false);
    setShowPointsGuide(true);
  }, []);

  const handleVoiceSelect = useCallback((voiceName: string) => {
    console.log('Voice selected:', voiceName);
    setCurrentVoice(voiceName);
    // Return to chat settings after voice selection
    setShowVoiceSettings(false);
    setShowChatSettings(true);
  }, []);

  const handleProfileSave = useCallback((nickname: string, info: string, image?: string) => {
    console.log('Profile saved:', nickname, info, image ? 'with image' : 'without image');
    
    // Save to localStorage first
    const savedProfiles = localStorage.getItem('chatProfiles');
    if (savedProfiles) {
      try {
        const profiles = JSON.parse(savedProfiles);
        const selectedProfileId = localStorage.getItem('selectedProfileId') || 'default';
        
        const updatedProfiles = profiles.map((p: any) => 
          p.id === selectedProfileId || (p.id === 'default' && selectedProfileId === 'default')
            ? { ...p, name: nickname, info: info, image: image }
            : p
        );
        localStorage.setItem('chatProfiles', JSON.stringify(updatedProfiles));
        
        // Then reload the profile to ensure consistency
        loadUserProfile();
      } catch (error) {
        console.error('Failed to save profile:', error);
      }
    }
    
    // Return to chat settings after saving
    console.log('🔄 Returning to chat settings after profile save');
    setShowProfileEdit(false);
    setShowChatSettings(true);
  }, [loadUserProfile]);

  const handleBackToChatSettings = useCallback(() => {
    setShowVoiceSettings(false);
    setShowProfileEdit(false);
    setShowPointsGuide(false);
    setShowChatSettings(true);
  }, []);

  const handleProfileSelect = useCallback((profileId: string) => {
    console.log('🔄 Profile selected in ChatScreen:', profileId);
    
    // Save selected profile ID to localStorage
    localStorage.setItem('selectedProfileId', profileId);
    setSelectedProfileId(profileId);
    
    // Find and load the selected profile
    const selectedProfile = profiles.find(p => p.id === profileId);
    if (selectedProfile) {
      setUserNickname(selectedProfile.name);
      setUserInfo(selectedProfile.info || '');
      setUserImage(selectedProfile.image);
    }
  }, [profiles]);

  const handleCreateProfile = useCallback(() => {
    console.log('🔄 Create new profile clicked from ChatSettings');
    setShowChatSettings(false);
    // You might want to implement profile creation modal here
    // For now, we'll just close the settings
  }, []);

  const handleDeleteProfile = useCallback(() => {
    console.log('🔄 Delete profile clicked from ChatSettings');
    
    // Don't allow deleting if it's the only profile
    if (profiles.length <= 1) {
      alert(t('profile.cannotDeleteLastProfile'));
      return;
    }

    // Show confirmation dialog
    if (window.confirm(t('profile.confirmDelete'))) {
      const updatedProfiles = profiles.filter(p => p.id !== selectedProfileId);
      
      // Save updated profiles to localStorage
      localStorage.setItem('chatProfiles', JSON.stringify(updatedProfiles));
      
      // Select the first remaining profile
      const newSelectedProfile = updatedProfiles[0];
      localStorage.setItem('selectedProfileId', newSelectedProfile.id);
      
      // Update state
      setProfiles(updatedProfiles);
      setSelectedProfileId(newSelectedProfile.id);
      setUserNickname(newSelectedProfile.name);
      setUserInfo(newSelectedProfile.info || '');
      setUserImage(newSelectedProfile.image);
      
      console.log('🗑️ Profile deleted, switched to:', newSelectedProfile.name);
    }
  }, [profiles, selectedProfileId, t]);

  const handleCloseAllModals = useCallback(() => {
    setShowChatSettings(false);
    setShowVoiceSettings(false);
    setShowProfileEdit(false);
    setShowPointsGuide(false);
  }, []);

  // Modified handleBackToHome function for direct home navigation
  const handleBackToHome = useCallback(() => {
    console.log('Navigating to home from chat');
    if (onHome) {
      onHome(); // Go directly to home
    } else {
      onBack(); // Fallback to previous behavior
    }
  }, [onHome, onBack]);

  if (!story) {
    return (
      <div className="flex items-center justify-center h-full bg-[#1a1b1b] text-white">
        <p>Story not found</p>
      </div>
    );
  }

  // Show full screen image view if enabled
  if (isFullScreenImage) {
    return (
      <FullScreenImageView 
        imageUrl={fullScreenImages[currentImageIndex] || backgroundImage}
        onClose={handleCloseFullScreen}
        onBack={onBack}
        onHome={handleBackToHome}
        onPrevious={fullScreenImages.length > 1 ? handlePreviousImage : undefined}
        onNext={fullScreenImages.length > 1 ? handleNextImage : undefined}
        currentIndex={currentImageIndex}
        totalImages={fullScreenImages.length}
        allImages={fullScreenImages}
        imageData={fullScreenImageData}
        selectedAsBackground={selectedBackgroundImage}
        onImageSelect={(index) => {
          setCurrentImageIndex(index);
          // Set selected image as background if it's unlocked
          if (fullScreenImageData[index]?.isUnlocked) {
            setSelectedBackgroundImage(fullScreenImages[index]);
            console.log('🖼️ Background image changed to:', fullScreenImages[index]);
          }
        }}
      />
    );
  }

  const language = getCurrentLanguage();
  
  return (
    <>
      <Helmet>
        <title>EchoStory — Chat with {translateCharacterName(characterName, language)}</title>
        <meta 
          name="description" 
          content={`Chatting with ${translateCharacterName(characterName, language)} in ${translateStoryTitle(story.title, language)}. An immersive AI-powered story experience.`} 
        />
        <meta property="og:title" content={`EchoStory — Chat with ${translateCharacterName(characterName, language)}`} />
        <meta property="og:description" content={`Live conversation with ${translateCharacterName(characterName, language)}`} />
        <meta name="twitter:title" content={`EchoStory — Chat with ${translateCharacterName(characterName, language)}`} />
        <meta name="twitter:description" content={`Live conversation with ${translateCharacterName(characterName, language)}`} />
      </Helmet>
      <div className="bg-[#000000] relative w-full min-h-screen flex flex-col overflow-hidden">
      {/* Background Image Container - 65% of screen height */}
      <div className="absolute left-0 right-0 top-0 w-full h-[65vh] z-0">
        <div className="relative w-full h-full">
          <div
            className="bg-no-repeat bg-cover bg-center w-full h-full"
            style={{ 
              backgroundImage: backgroundImageEnabled ? `url('${backgroundImage}')` : 'none',
              backgroundColor: backgroundImageEnabled ? 'transparent' : '#1a1a1a'
            }}
          />
          {/* Enhanced gradient overlay for natural transition */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#000000]/80" />
          <div className="absolute bottom-0 left-0 right-0 h-[120px] bg-gradient-to-t from-[#000000] to-transparent" />
        </div>
      </div>

      {/* Solid black background for bottom area - 35% of screen height */}
      <div className="absolute left-0 right-0 bottom-0 w-full h-[35vh] bg-[#000000] z-0" />

      {/* Header - Fixed at top */}
      <div className="relative bg-[rgba(66,66,66,0.5)] h-8 w-full z-20">
        <div aria-hidden="true" className="absolute border-[#424242] border-[0px_0px_0.625px] border-solid inset-0 pointer-events-none" />
        
        {/* Back Button */}
        <button onClick={onBack} className="absolute box-border content-stretch flex flex-row items-center justify-start left-[15px] p-0 top-[2.5px] hover:opacity-80 transition-opacity">
          <div className="relative shrink-0 size-[16.99px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
              <g>
                <path
                  d={svgPaths.p1b154bc0}
                  fill="var(--fill-0, white)"
                  fillOpacity="0.85"
                />
              </g>
            </svg>
          </div>
        </button>
        
        {/* Home Button - Modified to go directly to home */}
        <button onClick={handleBackToHome} className="absolute box-border content-stretch flex flex-row items-center justify-start left-[36.99px] p-0 top-[2.5px] hover:opacity-80 transition-opacity">
          <Home size={17} color="white" opacity={0.85} />
        </button>
        
        {/* Eye Icon with AI Status Indicator */}
        <div className="absolute flex items-center gap-1 right-[55px] top-[2.5px]">
          {/* AI Status Dot */}
          <div 
            className="relative"
            title={`AI ${aiStatus === 'connected' ? 'Connected' : aiStatus === 'error' ? 'Error' : 'Disconnected'}`}
          >
            <div 
              className={`
                w-2 h-2 rounded-full transition-all duration-300
                ${aiStatus === 'connected' ? 'bg-green-500 shadow-[0_0_4px_rgba(34,197,94,0.5)]' : 
                  aiStatus === 'error' ? 'bg-yellow-500 shadow-[0_0_4px_rgba(234,179,8,0.5)]' : 
                  'bg-red-500 shadow-[0_0_4px_rgba(239,68,68,0.5)]'}
              `}
            >
              {/* Pulse animation for connected state */}
              {aiStatus === 'connected' && (
                <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75" />
              )}
            </div>
          </div>
          
          {/* Eye Icon - Toggle Full Screen */}
          <button 
            onClick={handleEyeClick}
            className="box-border content-stretch flex flex-row items-center justify-start p-0 hover:opacity-80 transition-opacity"
          >
            <div className="relative shrink-0 size-5">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <g>
                  <path
                    d={svgPaths.p2602b900}
                    fill="var(--fill-0, white)"
                  />
                </g>
              </svg>
            </div>
          </button>
        </div>
        
        {/* Menu Button - Modified with click handler */}
        <button 
          onClick={handleMenuClick}
          className="absolute box-border content-stretch flex flex-col items-start justify-start pb-[3.5px] pt-[0.78px] px-[15px] right-0 top-[2.5px] hover:opacity-80 transition-opacity cursor-pointer"
        >
          <div className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0">
            <div className="relative shrink-0 size-[16.99px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                <g>
                  <path
                    d={svgPaths.p3fb3d600}
                    fill="var(--fill-0, white)"
                  />
                </g>
              </svg>
            </div>
          </div>
        </button>
      </div>

      {/* Info Button - Higher z-index and pointer events */}
      <button 
        onClick={handleInfoClick}
        className="absolute backdrop-blur-[2.5px] backdrop-filter bg-[rgba(0,0,0,0.3)] box-border content-stretch flex flex-row gap-[3px] items-center justify-center left-[15px] px-3 py-1.5 rounded-[15px] top-[34px] z-30 hover:bg-[rgba(0,0,0,0.5)] transition-colors cursor-pointer pointer-events-auto h-[25px]"
        style={{ pointerEvents: 'auto' }}
      >
        <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[15px] shadow-[0px_2px_0px_0px_rgba(255,255,255,0.04)]" />
        
        <div className="box-border content-stretch flex flex-col items-center justify-start relative shrink-0">
          <div className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0">
            <div className="relative shrink-0 size-[8px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
                <g>
                  <path
                    d={svgPaths.p135c6400}
                    fill="var(--fill-0, white)"
                    fillOpacity="0.9"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
        
        <div className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0">
          <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(255,255,255,0.9)] text-center text-nowrap">
            <p className="block leading-[normal] whitespace-pre">{t('chat.info')}</p>
          </div>
        </div>
      </button>

      {/* Mode Toggle Switch - Ant Design Style */}
      <div className="absolute left-1/2 top-[34px] transform -translate-x-1/2 z-30 pointer-events-auto">
        <div className="flex items-center gap-2 backdrop-blur-[2.5px] backdrop-filter bg-[rgba(0,0,0,0.4)] rounded-full px-3 border border-[rgba(255,255,255,0.2)] h-[25px]">
          {/* Novel Mode Label */}
          <span className={`text-[10px] font-medium whitespace-nowrap transition-colors duration-200 ${
            isStoryMode ? 'text-white' : 'text-[rgba(255,255,255,0.7)]'
          }`}>
            {t('chat.novelMode')}
          </span>
          
          {/* Ant Design Style Switch */}
          <button
            type="button"
            role="switch"
            aria-checked={!isStoryMode}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsStoryMode(!isStoryMode);
            }}
            className={`relative inline-flex h-[12px] w-[23px] rounded-full border transition-colors duration-200 ease-in-out focus:outline-none items-center ${
              !isStoryMode 
                ? 'bg-[#ff9500] border-[#ff9500]' 
                : 'bg-[rgba(255,255,255,0.2)] border-[rgba(255,255,255,0.3)]'
            }`}
            style={{ pointerEvents: 'auto' }}
          >
            {/* Switch Handle */}
            <span
              className={`inline-block h-[10px] w-[10px] transform rounded-full bg-white shadow-lg ring-0 transition-transform duration-200 ease-in-out ${
                !isStoryMode ? 'translate-x-[12px]' : 'translate-x-[1px]'
              }`}
            />
            
            {/* Inner content (hidden but maintains structure) */}
            <span className="sr-only">
              <span className={!isStoryMode ? 'block' : 'hidden'}>{t('chat.chatModeActive')}</span>
              <span className={isStoryMode ? 'block' : 'hidden'}>{t('chat.novelMode')}</span>
            </span>
          </button>
          
          {/* Chat Mode Label */}
          <span className={`text-[10px] font-medium whitespace-nowrap transition-colors duration-200 ${
            !isStoryMode ? 'text-white' : 'text-[rgba(255,255,255,0.7)]'
          }`}>
            {t('chat.chatModeActive')}
          </span>
        </div>
      </div>

      {/* Content Container - Starting from 35% of screen height to overlap with image */}
      {isStoryMode ? (
        /* Novel Mode Content */
        <div className="absolute bottom-[90px] left-0 right-0 top-[35vh] z-10">
          <div className="flex flex-col h-full pt-[30px] px-[15px]">
            {/* Story Content - Scrollable Area */}
            <div className="flex-1 overflow-y-auto scrollbar-hide">
              <div className="flex flex-col gap-[5px] w-full">
                {/* Story Paragraphs */}
                <div className="flex flex-col gap-6 mb-5 w-full">
                  {storyParagraphs.map((paragraph) => (
                    <div key={paragraph.id} className="relative w-full">
                      <p className="text-[rgba(255,255,255,0.85)] text-[13.945px] leading-[24px] font-['Inter:Light_Italic',_'Noto_Sans_KR:Regular',_sans-serif] font-light italic opacity-70 [text-shadow:rgba(0,0,0,0.8)_0px_1px_3px] whitespace-pre-wrap bg-[rgba(0,0,0,0.3)] rounded-lg p-3">
                        {paragraph.content}
                      </p>
                      {paragraph.isEditable && (
                        <button className="absolute -right-2 -top-1 opacity-70 w-[25px] h-[25px] flex items-center justify-center rounded hover:bg-[rgba(255,255,255,0.1)] transition-colors">
                          <Edit3 className="w-[14px] h-[14px] text-white" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>

                {/* Next Content Suggestion - Complete Figma Design Match */}
                <div className="bg-[rgba(0,0,0,0.6)] border border-[#424242] rounded-lg p-[0.625px] w-full mb-4">
                  {/* Suggestion Header */}
                  <div className="bg-[#292928] rounded-tl-[6px] rounded-tr-[6px] w-full">
                    <div className="border-b border-[rgba(253,253,253,0.12)]">
                      <div className="flex items-center justify-between px-2 pb-[4.625px] pt-1">
                        <div className="flex flex-col items-start justify-start">
                          <div className="text-[rgba(255,255,255,0.85)] text-[11.063px] font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light leading-[17.4px]">
                            Next Content Suggestions
                          </div>
                        </div>
                        <button 
                          onClick={handleGenerateNextContent}
                          className="bg-[#141414] border border-[#424242] rounded p-[0.625px] w-[23.99px] h-[23.99px] flex items-center justify-center hover:bg-[#2a2b2b] transition-colors shadow-[0px_2px_0px_0px_rgba(255,255,255,0.04)]"
                        >
                          <Redo className="w-[13.99px] h-[13.99px] text-white opacity-85" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Suggestion List */}
                  <div className="flex flex-col w-full">
                    {suggestions.map((suggestion, index) => (
                      <div key={suggestion.id} className={`w-full ${index === 0 ? 'border-b border-[rgba(253,253,253,0.12)]' : ''}`}>
                        <div className="flex items-center justify-between px-[5.99px] pb-[5.63px] pt-[4.06px]">
                          <button 
                            onClick={() => handleSelectSuggestion(suggestion)}
                            className="flex-1 mr-[-0.01px] text-left hover:bg-[rgba(255,255,255,0.05)] rounded p-2 transition-colors"
                          >
                            <div className="text-[rgba(255,255,255,0.85)] text-[13.945px] leading-[21.75px] font-['Inter:Light_Italic',_'Noto_Sans_KR:Regular',_sans-serif] font-light italic opacity-70 [text-shadow:rgba(255,255,255,0.05)_0px_0px_1px] w-full whitespace-pre-wrap">
                              {suggestion.content}
                            </div>
                          </button>
                          <div className="flex flex-col items-start justify-start mr-[-0.01px] pl-2 pr-0 py-0 w-[33.23px]">
                            <div className="opacity-70 rounded w-[25.23px]">
                              <div className="flex items-center justify-center">
                                <div className="flex items-center justify-center px-[12.625px] pb-[8.625px] pt-[10.625px] w-[25.23px]">
                                  <Edit3 className="w-[13.99px] h-[13.99px] text-white opacity-85" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Chat Mode Content - Overlapping with background image */
        <div className="absolute bottom-[80px] left-0 right-0 top-[25vh] z-10">
          <div className="flex flex-col h-full pt-[30px]">
            {/* Chat Messages Container */}
            <div className="flex-1 overflow-y-auto scrollbar-hide pl-[4px] pr-[8px]">
              <div className="flex flex-col gap-2.5 w-full">
                {messages.map((msg, index) => (
                  <>
                    <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} pt-1.5`}>
                      {msg.isNarration ? (
                      <div className="bg-[rgba(0,0,0,0.6)] backdrop-blur-sm px-4 py-2 rounded-lg max-w-[80%] border border-[rgba(255,255,255,0.1)]">
                        <p className="text-[rgba(255,255,255,0.8)] text-[12px] font-light italic text-center">
                          {msg.content}
                        </p>
                      </div>
                    ) : msg.sender === 'user' ? (
                      /* User Message */
                      <div className="max-w-[300px] flex flex-row items-end gap-2">
                        <div className="flex flex-col items-end flex-1">
                          <div className="bg-[rgba(11,147,246,0.3)] backdrop-blur-sm px-3 py-2 rounded-bl-[12px] rounded-br-[3px] rounded-tl-[12px] rounded-tr-[12px] border border-[rgba(255,255,255,0.1)]">
                            <div className="text-[14.18px] font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light leading-[21.75px]">
                              {renderUserFormattedText(msg.content || '')}
                            </div>
                          </div>
                          
                          {/* Delete Button - Show only for the last user message */}
                          {msg.sender === 'user' && messages.indexOf(msg) === messages.length - 1 && (
                            <div className="flex items-center justify-end mt-2 mr-1">
                              <button
                                onClick={() => handleDeleteMessage(msg.id)}
                                className="bg-[rgba(40,40,40,0.8)] hover:bg-[rgba(50,50,50,0.8)] backdrop-blur-sm rounded-full p-2 transition-colors border border-[rgba(255,255,255,0.1)]"
                                title={t('chat.delete')}
                              >
                                <svg className="w-4 h-4 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                              </button>
                            </div>
                          )}
                        </div>
                        
                        {/* User Profile Image */}
                        <div className="flex-shrink-0 mb-1">
                          <div className="w-10 h-10 rounded-lg bg-[#333333] border border-[rgba(255,255,255,0.2)] overflow-hidden flex items-center justify-center">
                            {userImage ? (
                              <img 
                                src={userImage} 
                                alt="User Profile" 
                                className="w-full h-full object-cover"
                                style={{ 
                                  objectPosition: 'center 20%', 
                                  transform: 'scale(1.5)', 
                                  transformOrigin: 'center 20%',
                                  imageRendering: 'auto'
                                }}
                              />
                            ) : (
                              <svg className="w-5 h-5 text-[#666666]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                              </svg>
                            )}
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* Character Message - Matching Figma Design */
                      <div className="flex items-start gap-[4px] max-w-[95%]">
                        {/* Character Avatar */}
                        <div className="flex flex-col items-start justify-start pb-[6.13px] pt-0 pr-[4px] pl-0">
                          <div className="w-[35px] h-[35px] rounded-lg overflow-hidden">
                          <img 
                            src={characterImageSrc || story?.media?.storyImages?.[0] || story?.media?.thumbnailImage || imgThumbnail}
                            alt="Character avatar"
                            className="rounded-lg shrink-0 w-[35px] h-[35px] object-cover"
                            style={{ 
                              objectPosition: 'center 20%', 
                              transform: 'scale(1.5)', 
                              transformOrigin: 'center 20%',
                              imageRendering: 'auto'
                            }}
                            onLoad={(e) => {
                              console.log('✅ Character image loaded in message:', characterImageSrc);
                              const img = e.target as HTMLImageElement;
                              console.log('🎨 Applied styles:', window.getComputedStyle(img).transform, window.getComputedStyle(img).objectPosition);
                            }}
                            onError={(e) => {
                              console.log('❌ Character image failed to load in message:', characterImageSrc);
                              const target = e.target as HTMLImageElement;
                              target.src = '/images/echostory.png';
                            }}
                          />
                          </div>
                        </div>
                        
                        {/* Message Content */}
                        <div className="flex flex-col gap-1 flex-1">
                          {/* Character Name and Level */}
                          <div className="flex items-center gap-[6.99px]">
                            <div className="text-[#a8a8a8] text-[12.289px] font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light leading-[18.85px]">
                              {translateCharacterName(characterName)}
                            </div>
                            <div className="bg-[rgba(59,59,60,0.8)] flex items-center gap-[3px] px-1.5 py-1 rounded-[10px]">
                              <div className="relative">
                                <button 
                                  onClick={() => handleTTS(msg.content, msg.id, false)} // false = manual play
                                  onContextMenu={(e) => {
                                    e.preventDefault();
                                    setShowVoiceSelector(!showVoiceSelector);
                                  }}
                                  className="relative shrink-0 size-[11.99px] hover:scale-110 transition-transform cursor-pointer"
                                  title="클릭: 음성 재생 | 우클릭: 음성 선택"
                                >
                                  <Volume2 className="block size-full text-white/80" />
                                </button>
                                
                                {/* Voice Selector Dropdown */}
                                {showVoiceSelector && (
                                  <div className="absolute bottom-full left-0 mb-2 bg-[rgba(40,40,40,0.95)] backdrop-blur-sm rounded-lg border border-[rgba(255,255,255,0.1)] p-2 min-w-[200px] z-50">
                                    <div className="text-white/90 text-[10px] font-medium mb-2 px-1">{t('chat.selectVoice')}</div>
                                    {voiceOptions.map((voice) => (
                                      <div
                                        key={voice.id}
                                        className={`flex items-center justify-between px-2 py-1 rounded text-[9px] transition-colors ${
                                          currentVoice === voice.name
                                            ? 'bg-[rgba(11,147,246,0.6)] text-white'
                                            : 'text-white/70 hover:bg-[rgba(255,255,255,0.1)] hover:text-white'
                                        }`}
                                      >
                                        <button
                                          onClick={() => {
                                            setCurrentVoice(voice.name);
                                            setShowVoiceSelector(false);
                                          }}
                                          className="flex-1 text-left"
                                        >
                                          {voice.label}
                                        </button>
                                        <button
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            handleTestVoice(voice);
                                          }}
                                          className="ml-2 p-1 rounded hover:bg-[rgba(255,255,255,0.2)] transition-colors"
                                          title="테스트 재생"
                                        >
                                          <Play className="w-3 h-3" />
                                        </button>
                                      </div>
                                    ))}
                                  </div>
                                )}
                              </div>
                              <div className="text-[rgba(255,255,255,0.8)] text-[9.688px] font-medium leading-[10px]">
                                12P
                              </div>
                            </div>
                          </div>
                          
                          {/* Message Bubble - Only show when typing or complete, not during waiting */}
                          {msg.isWaitingForResponse ? (
                            // Show waiting animation without bubble
                            <div className="flex items-center space-x-1 ml-2">
                              <div className="flex space-x-1">
                                <div className="w-2 h-2 bg-[rgba(255,255,255,0.6)] rounded-full animate-continuous-bounce"></div>
                                <div className="w-2 h-2 bg-[rgba(255,255,255,0.6)] rounded-full animate-continuous-bounce-delay-1"></div>
                                <div className="w-2 h-2 bg-[rgba(255,255,255,0.6)] rounded-full animate-continuous-bounce-delay-2"></div>
                              </div>
                            </div>
                          ) : (
                            // Show message bubble with content
                            <div className="bg-[rgba(59,59,59,0.4)] backdrop-blur-sm rounded-bl-[12px] rounded-br-[12px] rounded-tl-[3px] rounded-tr-[12px] border border-[rgba(255,255,255,0.1)]">
                              <div className="px-3 py-2">
                                {msg.isTyping ? (
                                <TypingAnimation 
                                  text={msg.content} 
                                  onComplete={() => {
                                    setMessages(prev => 
                                      prev.map(m => 
                                        m.id === msg.id 
                                          ? { ...m, isTyping: false }
                                          : m
                                      )
                                    );
                                  }}
                                  onUpdate={() => {
                                    // Scroll to bottom when typing updates
                                    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
                                  }}
                                />
                                ) : (
                                  <div className="text-[rgba(255,255,255,0.85)] text-[13.945px] font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light leading-[21.75px]">
                                    {renderFormattedText(msg.content || '')}
                                  </div>
                                )}
                              </div>
                            </div>
                          )}
                          
                          {/* Action Buttons - Show only for the last character message and not while typing */}
                          {msg.sender === 'character' && messages.indexOf(msg) === messages.length - 1 && !msg.isTyping && (
                            <div className="flex items-center gap-2 mt-2 ml-1">
                              <button
                                onClick={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  console.log('🔄 Regenerate button clicked for message:', msg.id);
                                  handleRegenerateMessage(msg.id);
                                }}
                                className="bg-[rgba(40,40,40,0.8)] hover:bg-[rgba(50,50,50,0.8)] backdrop-blur-sm rounded-full p-2 transition-colors border border-[rgba(255,255,255,0.1)]"
                                title={t('chat.regenerate')}
                              >
                                <svg className="w-4 h-4 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                </svg>
                              </button>
                              <button
                                onClick={() => handleEditMessage(msg.id)}
                                className="bg-[rgba(40,40,40,0.8)] hover:bg-[rgba(50,50,50,0.8)] backdrop-blur-sm rounded-full p-2 transition-colors border border-[rgba(255,255,255,0.1)]"
                                title={t('chat.editMessage')}
                              >
                                <svg className="w-4 h-4 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                </svg>
                              </button>
                              <button
                                onClick={() => handleDeleteMessage(msg.id)}
                                className="bg-[rgba(40,40,40,0.8)] hover:bg-[rgba(50,50,50,0.8)] backdrop-blur-sm rounded-full p-2 transition-colors border border-[rgba(255,255,255,0.1)]"
                                title={t('chat.delete')}
                              >
                                <svg className="w-4 h-4 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                  </>
                ))}
                
                
                <div ref={messagesEndRef} />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Chat Input Area - Fixed at Absolute Bottom of Screen */}
      <div className="fixed bottom-0 left-0 right-0 px-[27px] pb-[env(safe-area-inset-bottom,_15px)] z-40 bg-gradient-to-t from-[#000000] via-[#000000]/95 to-transparent pt-20">
        <div className="mobile-container mx-auto">
          <div className="bg-[#2a2a2a] rounded-[25px] flex items-end px-2 py-1.5 w-full backdrop-blur-sm border border-[rgba(255,255,255,0.1)]">
            <div className="flex flex-col h-[35.99px] items-end justify-start min-w-9 w-[39.99px] pr-1">
              <div className="bg-[#141414] w-[35.99px] h-[35.99px] rounded-[18px] flex items-center justify-center min-w-8 px-2 py-0">
                <span className="text-white text-[12px] font-semibold">AI</span>
              </div>
            </div>
            
            <div className="flex-1 pb-1 min-h-px min-w-px">
              <div className="h-7 min-h-7 max-h-7 rounded-md w-full">
                <div className="flex justify-center max-h-inherit max-w-inherit min-h-inherit overflow-clip relative size-full">
                  <div className="flex h-7 items-start justify-center max-h-inherit max-w-inherit min-h-inherit px-2 py-0.5 w-full">
                    <input
                      value={isStoryMode ? storyInput : message}
                      onChange={(e) => isStoryMode ? setStoryInput(e.target.value) : setMessage(e.target.value)}
                      onKeyDown={handleKeyDown}
                      onCompositionStart={handleCompositionStart}
                      onCompositionEnd={handleCompositionEnd}
                      placeholder={isStoryMode ? t('chat.enterContent') : t('chat.typeMessage')}
                      className="flex-1 bg-transparent text-white placeholder-[rgba(255,255,255,0.25)] outline-none text-[13.945px] font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light leading-[23.57px] focus:outline-none"
                      maxLength={500}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <div className="flex flex-col h-[35.99px] items-start justify-start min-w-9 w-[39.99px] pl-1">
                <button
                  onClick={isStoryMode ? handleSendStoryInput : handleSendMessage}
                  disabled={isStoryMode ? !storyInput.trim() : !message.trim()}
                  className="bg-[#dc5903] w-[35.99px] h-[35.99px] rounded-[18px] flex items-center justify-center shadow-[0px_2px_0px_0px_rgba(180,60,0,0.15)] disabled:opacity-50 hover:bg-[#e6850e] transition-colors min-w-8 px-[8.625px] py-[0.625px]"
                >
                  <Send className="w-[15px] h-[15px] text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* All Modals */}
      {showStoryInfo && story && (
        <StoryInfoModal
          story={story}
          onClose={handleCloseStoryInfo}
        />
      )}

      {showChatSettings && (
        <ChatSettingsModal
          onClose={handleCloseChatSettings}
          userPoints={186}
          userName={userNickname}
          userImage={userImage}
          userInfo={userInfo}
          currentVoice={currentVoice}
          backgroundImageEnabled={backgroundImageEnabled}
          autoPlayEnabled={autoPlayEnabled}
          onBackgroundToggle={handleBackgroundToggle}
          onAutoPlayToggle={handleAutoPlayToggle}
          onEditProfile={handleEditProfile}
          onChangeVoice={handleChangeVoice}
          profiles={profiles}
          selectedProfileId={selectedProfileId}
          onProfileSelect={handleProfileSelect}
          onCreateProfile={handleCreateProfile}
          onDeleteProfile={handleDeleteProfile}
        />
      )}

      {showVoiceSettings && (
        <VoiceSettingsModal
          onClose={handleBackToChatSettings}
          currentVoice={currentVoice}
          onVoiceSelect={handleVoiceSelect}
        />
      )}

      {showProfileEdit && (
        <ProfileEditModal
          onClose={handleBackToChatSettings}
          onBack={handleBackToChatSettings}
          currentNickname={userNickname}
          currentInfo={userInfo}
          currentImage={userImage}
          onSave={handleProfileSave}
        />
      )}

      {showPointsGuide && (
        <PointsGuideModal
          onClose={handleCloseAllModals}
          onBack={handleBackToChatSettings}
        />
      )}

      {/* Image Gallery Modal */}
      {showImageGallery && fullScreenImages.length > 0 && (
        <FullScreenImageView 
          imageUrl={fullScreenImages[currentImageIndex]}
          onClose={handleCloseImageGallery}
          onBack={onBack}
          onHome={handleBackToHome}
          onPrevious={fullScreenImages.length > 1 ? handlePreviousImage : undefined}
          onNext={fullScreenImages.length > 1 ? handleNextImage : undefined}
          currentIndex={currentImageIndex}
          totalImages={fullScreenImages.length}
          allImages={fullScreenImages}
          imageData={fullScreenImageData}
          selectedAsBackground={selectedBackgroundImage}
          onImageSelect={(index) => {
            setCurrentImageIndex(index);
            // Set selected image as background if it's unlocked
            if (fullScreenImageData[index]?.isUnlocked) {
              setSelectedBackgroundImage(fullScreenImages[index]);
              console.log('🖼️ Background image changed to:', fullScreenImages[index]);
            }
          }}
        />
      )}
      </div>
    </>
  );
}
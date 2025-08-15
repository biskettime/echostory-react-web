import { useState, useRef, useEffect, useCallback } from 'react';
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
import { Redo, Edit3, Send, Star, Home } from 'lucide-react';
import svgPaths from '../imports/svg-c6g2wd331h';
// import imgThumbnail from "figma:asset/374d74b30fe73a06692e4b5c87efdada280aa447.png";
const imgThumbnail = "/images/chat-thumbnail.svg";

interface ChatScreenProps {
  storyId: string;
  onBack: () => void;
  nickname: string;
}

interface Message {
  id: number;
  sender: 'character' | 'user';
  content: string;
  timestamp: Date;
  isNarration?: boolean;
  isTyping?: boolean;
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

export function ChatScreen({ storyId, onBack, nickname }: ChatScreenProps) {
  console.log('🚀 ChatScreen mounted with storyId:', storyId);
  const [message, setMessage] = useState('');
  const [isStoryMode, setIsStoryMode] = useState(false);
  const [showFirstMessage, setShowFirstMessage] = useState(false);
  const [firstMessageAdded, setFirstMessageAdded] = useState(false);
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
  const [currentVoice, setCurrentVoice] = useState('Hyewon');
  const [userNickname, setUserNickname] = useState(nickname);
  const [userInfo, setUserInfo] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const nextMessageIdRef = useRef(3);

  // Gallery state for story images
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showImageGallery, setShowImageGallery] = useState(false);

  // Get story data based on storyId
  const story = getStory(storyId);

  // Get story images with fallback
  const storyImages = story ? [
    story.media.thumbnailImage,
    ...story.media.storyImages
  ].filter(Boolean) : [];
  
  // Force fallback to sample.png if character-*.svg detected
  const safeStoryImages = storyImages.map(img => img && img.includes('character-') ? '/images/sample.png' : img);
  
  // If no images, use sample.png
  const finalStoryImages = safeStoryImages.length > 0 ? safeStoryImages : ['/images/sample.png'];
  console.log('ChatScreen - storyId:', storyId, 'story:', story);

  // Initialize sample stories and get story data
  useEffect(() => {
    console.log('ChatScreen useEffect - storyId:', storyId, 'story:', story);
    initializeSampleStories();
    
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
          isNarration: msg.type === 'system'
        }));
        
        // Replace initial messages with loaded ones
        setMessages(loadedMessages);
        console.log('ChatScreen - Existing messages loaded:', loadedMessages.length, 'messages');
        
        // Mark messages as read
        markChatAsRead(session.id);
      }
    } else {
      console.error('ChatScreen - No story data found. storyId:', storyId, 'story:', story);
    }
  }, [storyId, story]);
  
  // Show error screen if no story
  if (!story) {
    return (
      <div className="flex flex-col items-center justify-center h-full bg-[#1a1b1b] text-white p-8">
        <h2 className="text-xl font-bold mb-4">스토리를 찾을 수 없습니다</h2>
        <p className="text-gray-400 mb-6 text-center">
          요청하신 스토리 (ID: {storyId})를 찾을 수 없습니다.<br/>
          스토리가 삭제되었거나 존재하지 않을 수 있습니다.
        </p>
        <button
          onClick={onBack}
          className="bg-[#dc5903] text-white px-6 py-2 rounded-md hover:bg-[#e6850e] transition-colors"
        >
          돌아가기
        </button>
      </div>
    );
  }
  
  const characterName = story.content.characterName || story.title || 'Character';
  
  // 캐릭터 이미지 동적 로딩
  const [characterImageSrc, setCharacterImageSrc] = useState<string>('');
  
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
      
      // 캐릭터 이름을 파일명에 적합하게 변환
      // 전체 이름에서 첫 번째 이름만 사용 (예: "Yuki Tanaka" → "Yuki")
      const firstName = characterName.split(' ')[0];
      console.log('First name extracted:', firstName);
      
      const sanitizedName = firstName
        .replace(/[^a-zA-Z0-9가-힣]/g, '_')
        .replace(/\s+/g, '_')
        // 첫 글자는 대문자, 나머지는 소문자로 변환 (파일명 형식에 맞춤)
        .toLowerCase()
        .replace(/^./, str => str.toUpperCase());
      
      console.log('Sanitized name for file:', sanitizedName);
      
      // 1-10번 이미지 중 존재하는 첫 번째 이미지 찾기
      for (let i = 1; i <= 10; i++) {
        const imagePath = `/data/ch_img/${sanitizedName}_${i}.png`;
        console.log(`Trying image path: ${imagePath}`);
        
        try {
          const response = await fetch(imagePath, { method: 'HEAD' });
          console.log(`Response for ${imagePath}:`, response.status, response.ok);
          
          if (response.ok) {
            console.log('✅ Found character image:', imagePath);
            setCharacterImageSrc(imagePath);
            return;
          }
        } catch (error) {
          console.log(`❌ Error fetching ${imagePath}:`, error);
        }
      }
      
      // 캐릭터 이미지가 없으면 스토리 이미지나 기본 이미지 사용
      const fallbackImage = (finalStoryImages[0] && !finalStoryImages[0].includes('character-')) 
        ? finalStoryImages[0] 
        : '/images/sample.png';
      console.log('❌ No character image found, using fallback:', fallbackImage);
      setCharacterImageSrc(fallbackImage);
    };
    
    loadCharacterImage();
  }, [characterName, finalStoryImages]);

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

  // Initialize messages with narration from story data
  const [messages, setMessages] = useState<Message[]>(() => {
    const initialNarration = story?.startSituation?.startingSituation || 
      `${characterName}과의 만남이 시작됩니다.`;
    
    return [
      {
        id: 1,
        sender: 'character',
        content: initialNarration,
        timestamp: new Date(),
        isNarration: true
      }
    ];
  });

  // Use character-specific background image, fallback to story image
  const backgroundImage = characterImageSrc || story?.media?.thumbnailImage || story?.media?.storyImages?.[0] || imgThumbnail;

  // Scroll to bottom (with debounce) - Keep messages at bottom
  useEffect(() => {
    const scrollToBottom = () => {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    
    // Immediate scroll for new messages
    const timeoutId = setTimeout(scrollToBottom, 50);
    return () => clearTimeout(timeoutId);
  }, [messages.length, storyParagraphs.length]);

  // Show first character message
  useEffect(() => {
    if (!isStoryMode) {
      const timer = setTimeout(() => {
        setShowFirstMessage(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isStoryMode]);

  // Debug effect to monitor mode changes
  useEffect(() => {
    console.log('Mode changed to:', isStoryMode ? 'Story Mode' : 'Chat Mode');
  }, [isStoryMode]);

  const getInitialCharacterMessage = useCallback((): string => {
    if (!story) return 'Hello!';
    
    // Get first dialogue from story data
    return story.startSituation?.firstDialogue || 'Hello!';
  }, [story]);

  const handleFirstMessageComplete = useCallback(() => {
    if (firstMessageAdded) return;
    
    console.log('First message typing completed');
    setFirstMessageAdded(true);
    setIsTypingComplete(true);
    
    const firstCharacterMessage = getInitialCharacterMessage();
    
    setMessages(prev => [...prev, {
      id: 2,
      sender: 'character',
      content: firstCharacterMessage,
      timestamp: new Date(),
      isTyping: false
    }]);
  }, [firstMessageAdded, getInitialCharacterMessage]);

  const getCharacterResponse = useCallback((userMessage: string, storyId: string): string => {
    // For now, return a generic response
    // TODO: Implement character-specific responses based on story data
    const genericResponses = [
      "그렇게 생각하시는군요.",
      "흥미로운 말씀이네요.",
      "더 자세히 말씀해 주시겠어요?",
      "그런 일이 있었군요.",
      "어떻게 생각하세요?",
      "정말 그런가요?",
      "이해합니다."
    ];
    return genericResponses[Math.floor(Math.random() * genericResponses.length)];
  }, []);

  const handleSendMessage = useCallback(() => {
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

      // Simulate character response
      const responseTimeout = setTimeout(() => {
        const characterResponseId = nextMessageIdRef.current;
        nextMessageIdRef.current += 1;
        
        const responseContent = getCharacterResponse(messageContent, storyId);
        const characterResponse: Message = {
          id: characterResponseId,
          sender: 'character',
          content: responseContent,
          timestamp: new Date()
        };
        
        setMessages(prev => [...prev, characterResponse]);
        
        // Save character response to chat session
        if (currentChatSession) {
          addChatMessage(currentChatSession.id, 'character', responseContent);
        }
      }, 1500 + Math.random() * 1000);

      return () => clearTimeout(responseTimeout);
    }
  }, [message, getCharacterResponse, storyId]);

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

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (isStoryMode) {
        handleSendStoryInput();
      } else {
        handleSendMessage();
      }
    }
  }, [handleSendMessage, handleSendStoryInput, isStoryMode]);

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

  const handlePreviousImage = useCallback(() => {
    setCurrentImageIndex(prev => prev > 0 ? prev - 1 : finalStoryImages.length - 1);
  }, [finalStoryImages.length]);

  const handleNextImage = useCallback(() => {
    setCurrentImageIndex(prev => prev < finalStoryImages.length - 1 ? prev + 1 : 0);
  }, [finalStoryImages.length]);

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

  const handleProfileSave = useCallback((nickname: string, info: string) => {
    console.log('Profile saved:', nickname, info);
    setUserNickname(nickname);
    setUserInfo(info);
  }, []);

  const handleBackToChatSettings = useCallback(() => {
    setShowVoiceSettings(false);
    setShowProfileEdit(false);
    setShowPointsGuide(false);
    setShowChatSettings(true);
  }, []);

  const handleCloseAllModals = useCallback(() => {
    setShowChatSettings(false);
    setShowVoiceSettings(false);
    setShowProfileEdit(false);
    setShowPointsGuide(false);
  }, []);

  // Modified handleBackToHome function for direct home navigation
  const handleBackToHome = useCallback(() => {
    console.log('Navigating to home from chat');
    onBack(); // This should now go directly to home
  }, [onBack]);

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
        imageUrl={finalStoryImages[currentImageIndex] || backgroundImage}
        onClose={handleCloseFullScreen}
        onBack={onBack}
        onHome={handleBackToHome}
        onPrevious={finalStoryImages.length > 1 ? handlePreviousImage : undefined}
        onNext={finalStoryImages.length > 1 ? handleNextImage : undefined}
        currentIndex={currentImageIndex}
        totalImages={finalStoryImages.length}
        allImages={finalStoryImages}
        onImageSelect={(index) => setCurrentImageIndex(index)}
      />
    );
  }

  return (
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
        
        {/* Eye Icon - Toggle Full Screen */}
        <button 
          onClick={handleEyeClick}
          className="absolute box-border content-stretch flex flex-row items-center justify-start p-0 right-[39.98px] top-[2.5px] hover:opacity-80 transition-opacity"
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
        className="absolute backdrop-blur-[2.5px] backdrop-filter bg-[rgba(0,0,0,0.3)] box-border content-stretch flex flex-row gap-[3.99px] h-[31px] items-center justify-center left-[15px] px-[12.625px] py-[6.625px] rounded-[20px] top-[34px] z-30 hover:bg-[rgba(0,0,0,0.5)] transition-colors cursor-pointer pointer-events-auto scale-[0.7]"
        style={{ pointerEvents: 'auto' }}
      >
        <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_2px_0px_0px_rgba(255,255,255,0.04)]" />
        
        <div className="box-border content-stretch flex flex-col items-center justify-start pb-[1.13px] pt-px px-0 relative shrink-0">
          <div className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0">
            <div className="relative shrink-0 size-[11px]">
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
          <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[10.313px] text-[rgba(255,255,255,0.9)] text-center text-nowrap">
            <p className="block leading-[normal] whitespace-pre">Info</p>
          </div>
        </div>
      </button>

      {/* Mode Toggle Switch - Ant Design Style */}
      <div className="absolute left-1/2 top-[34px] transform -translate-x-1/2 z-30 pointer-events-auto scale-[0.7]">
        <div className="flex items-center gap-3 backdrop-blur-[2.5px] backdrop-filter bg-[rgba(0,0,0,0.4)] rounded-full px-4 py-2 border border-[rgba(255,255,255,0.2)]">
          {/* Novel Mode Label */}
          <span className={`text-[12px] font-medium whitespace-nowrap transition-colors duration-200 ${
            isStoryMode ? 'text-white' : 'text-[rgba(255,255,255,0.7)]'
          }`}>
            Novel Mode
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
            className={`relative inline-flex h-[16px] w-[32px] rounded-full border transition-colors duration-200 ease-in-out focus:outline-none items-center ${
              !isStoryMode 
                ? 'bg-[#ff9500] border-[#ff9500]' 
                : 'bg-[rgba(255,255,255,0.2)] border-[rgba(255,255,255,0.3)]'
            }`}
            style={{ pointerEvents: 'auto' }}
          >
            {/* Switch Handle */}
            <span
              className={`inline-block h-[14px] w-[14px] transform rounded-full bg-white shadow-lg ring-0 transition-transform duration-200 ease-in-out ${
                !isStoryMode ? 'translate-x-[16px]' : 'translate-x-[1px]'
              }`}
            />
            
            {/* Inner content (hidden but maintains structure) */}
            <span className="sr-only">
              <span className={!isStoryMode ? 'block' : 'hidden'}>Chat Mode Active</span>
              <span className={isStoryMode ? 'block' : 'hidden'}>Novel Mode Active</span>
            </span>
          </button>
          
          {/* Chat Mode Label */}
          <span className={`text-[12px] font-medium whitespace-nowrap transition-colors duration-200 ${
            !isStoryMode ? 'text-white' : 'text-[rgba(255,255,255,0.7)]'
          }`}>
            Chat Mode
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
        <div className="absolute bottom-[90px] left-0 right-0 top-[35vh] z-10">
          <div className="flex flex-col h-full pt-[30px]">
            {/* Chat Messages Container */}
            <div className="flex-1 overflow-y-auto scrollbar-hide px-[15px] flex flex-col justify-end">
              <div className="flex flex-col gap-2.5 w-full min-h-full justify-end">
                {messages.map((msg) => (
                  <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} pt-1.5`}>
                    {msg.isNarration ? (
                      <div className="bg-[rgba(0,0,0,0.6)] backdrop-blur-sm px-4 py-2 rounded-lg max-w-[80%] border border-[rgba(255,255,255,0.1)]">
                        <p className="text-[rgba(255,255,255,0.8)] text-[12px] font-light italic text-center">
                          {msg.content}
                        </p>
                      </div>
                    ) : msg.sender === 'user' ? (
                      /* User Message */
                      <div className="max-w-[400px] flex flex-col items-end">
                        <div className="bg-[rgba(11,147,246,0.6)] backdrop-blur-sm px-3 py-2 rounded-bl-[12px] rounded-br-[3px] rounded-tl-[12px] rounded-tr-[12px] border border-[rgba(255,255,255,0.1)]">
                          <p className="text-[rgba(255,255,255,0.85)] text-[14.18px] font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light leading-[21.75px]">
                            {msg.content}
                          </p>
                        </div>
                      </div>
                    ) : (
                      /* Character Message - Matching Figma Design */
                      <div className="flex items-start gap-[7px] max-w-[400px] min-w-[400px]">
                        {/* Character Avatar */}
                        <div className="flex flex-col items-start justify-start pb-[6.13px] pt-0 pr-[7px] pl-0">
                                                  <img 
                            src={characterImageSrc || story?.media?.storyImages?.[0] || story?.media?.thumbnailImage || imgThumbnail}
                            alt="Character avatar"
                            className="rounded-[14.5px] shrink-0 size-[28.99px] object-cover"
                            onLoad={() => console.log('✅ Character image loaded in message:', characterImageSrc)}
                            onError={(e) => {
                              console.log('❌ Character image failed to load in message:', characterImageSrc);
                              const target = e.target as HTMLImageElement;
                              target.src = '/images/sample.png';
                            }}
                          />
                        </div>
                        
                        {/* Message Content */}
                        <div className="flex flex-col gap-1 flex-1">
                          {/* Character Name and Level */}
                          <div className="flex items-center gap-[6.99px]">
                            <div className="text-[#a8a8a8] text-[12.289px] font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light leading-[18.85px]">
                              {characterName}
                            </div>
                            <div className="bg-[rgba(59,59,60,0.8)] flex items-center gap-[3px] px-1.5 py-1 rounded-[10px]">
                              <div className="relative shrink-0 size-[11.99px]">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                                  <path d="M11.0814 9.01671L9.60541 8.1643C9.58116 8.15041 9.55441 8.14144 9.52669 8.13789C9.49897 8.13435 9.47083 8.1363 9.44386 8.14363C9.4169 8.15096 9.39164 8.16353 9.36953 8.18062C9.34743 8.19772 9.3289 8.219 9.31502 8.24325L9.04873 8.70492C8.98985 8.80662 9.02464 8.93776 9.12634 8.99664L10.6023 9.84905C10.6266 9.86294 10.6533 9.87191 10.6811 9.87546C10.7088 9.879 10.7369 9.87706 10.7639 9.86973C10.7909 9.86239 10.8161 9.84982 10.8382 9.83273C10.8603 9.81564 10.8788 9.79435 10.8927 9.7701L11.159 9.30843C11.2179 9.20673 11.1818 9.07559 11.0814 9.01671Z" fill="white" fillOpacity="0.8"/>
                                </svg>
                              </div>
                              <div className="text-[rgba(255,255,255,0.8)] text-[9.688px] font-medium leading-[10px]">
                                12P
                              </div>
                            </div>
                          </div>
                          
                          {/* Message Bubble */}
                          <div className="bg-[rgba(59,59,59,0.7)] backdrop-blur-sm rounded-bl-[12px] rounded-br-[12px] rounded-tl-[3px] rounded-tr-[12px] border border-[rgba(255,255,255,0.1)]">
                            <div className="px-3 py-2">
                              <p className="text-[rgba(255,255,255,0.85)] text-[13.945px] font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light leading-[21.75px]">
                                {msg.content}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
                
                {/* Show typing animation for first message */}
                {showFirstMessage && !firstMessageAdded && (
                  <div className="flex justify-start pt-1.5">
                    <div className="flex items-start gap-[7px] max-w-[400px] min-w-[400px]">
                      <div className="flex flex-col items-start justify-start pb-[6.13px] pt-0 pr-[7px] pl-0">
                        <img 
                          src={
                            characterImageSrc || 
                            (finalStoryImages[0] && !finalStoryImages[0].includes('character-')) 
                              ? finalStoryImages[0] 
                              : '/images/sample.png'
                          }
                          alt="Character avatar"
                          className="rounded-[14.5px] shrink-0 size-[28.99px] object-cover"
                          onLoad={() => console.log('✅ Character image loaded in first message:', characterImageSrc)}
                          onError={(e) => {
                            console.log('❌ Character image failed to load in first message:', characterImageSrc);
                            const target = e.target as HTMLImageElement;
                            target.src = '/images/sample.png';
                          }}
                        />
                      </div>
                      <div className="flex flex-col gap-1 flex-1">
                        <div className="flex items-center gap-[6.99px]">
                          <div className="text-[#a8a8a8] text-[12.289px] font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light leading-[18.85px]">
                            {characterName}
                          </div>
                        </div>
                        <div className="bg-[rgba(59,59,59,0.7)] backdrop-blur-sm rounded-bl-[12px] rounded-br-[12px] rounded-tl-[3px] rounded-tr-[12px] border border-[rgba(255,255,255,0.1)]">
                          <div className="px-3 py-2">
                            <TypingAnimation 
                              text={getInitialCharacterMessage()} 
                              onComplete={handleFirstMessageComplete}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Chat Input Area - Fixed at Absolute Bottom of Screen */}
      <div className="fixed bottom-0 left-0 right-0 px-[15px] pb-[env(safe-area-inset-bottom,_15px)] z-40 bg-gradient-to-t from-[#000000] via-[#000000]/95 to-transparent pt-4">
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
                      placeholder={isStoryMode ? "Enter content" : "Type a message"}
                      className="flex-1 bg-transparent text-white placeholder-[rgba(255,255,255,0.25)] outline-none text-[13.945px] font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light leading-[23.57px] focus:border-[rgba(255,149,0,0.8)] focus:ring-1 focus:ring-[rgba(255,149,0,0.8)] transition-colors"
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
          currentVoice={currentVoice}
          backgroundImageEnabled={backgroundImageEnabled}
          onBackgroundToggle={handleBackgroundToggle}
          onEditProfile={handleEditProfile}
          onChangeVoice={handleChangeVoice}
          onPointsGuide={handlePointsGuide}
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
          onClose={handleCloseAllModals}
          onBack={handleBackToChatSettings}
          currentNickname={userNickname}
          currentInfo={userInfo}
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
      {showImageGallery && finalStoryImages.length > 0 && (
        <FullScreenImageView 
          imageUrl={finalStoryImages[currentImageIndex]}
          onClose={handleCloseImageGallery}
          onBack={onBack}
          onHome={handleBackToHome}
          onPrevious={finalStoryImages.length > 1 ? handlePreviousImage : undefined}
          onNext={finalStoryImages.length > 1 ? handleNextImage : undefined}
          currentIndex={currentImageIndex}
          totalImages={finalStoryImages.length}
        />
      )}
    </div>
  );
}
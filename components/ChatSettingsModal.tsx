import { useState } from 'react';
import { t } from '../utils/i18n';
import svgPaths from '../imports/svg-dk96dgb4cb';

interface Profile {
  id: string;
  name: string;
  info: string;
  image?: string;
}

interface ChatSettingsModalProps {
  onClose: () => void;
  userPoints?: number;
  userName?: string;
  userImage?: string;
  userInfo?: string;
  currentVoice?: string;
  backgroundImageEnabled?: boolean;
  autoPlayEnabled?: boolean;
  onBackgroundToggle?: (enabled: boolean) => void;
  onAutoPlayToggle?: (enabled: boolean) => void;
  onEditProfile?: () => void;
  onChangeVoice?: () => void;
  profiles?: Profile[];
  selectedProfileId?: string;
  onProfileSelect?: (profileId: string) => void;
  onCreateProfile?: () => void;
  onDeleteProfile?: () => void;
}

export function ChatSettingsModal({ 
  onClose,
  userPoints = 186,
  userName = "Alex",
  userImage,
  userInfo = "",
  currentVoice = "Hyewon",
  backgroundImageEnabled = true,
  autoPlayEnabled = false,
  onBackgroundToggle,
  onAutoPlayToggle,
  onEditProfile,
  onChangeVoice,
  profiles = [],
  selectedProfileId = 'default',
  onProfileSelect,
  onCreateProfile,
  onDeleteProfile
}: ChatSettingsModalProps) {
  const [isPointsGuideExpanded, setIsPointsGuideExpanded] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  
  const handleBackgroundToggle = () => {
    onBackgroundToggle?.(!backgroundImageEnabled);
  };

  const handleAutoPlayToggle = () => {
    onAutoPlayToggle?.(!autoPlayEnabled);
  };

  const handleEditProfile = () => {
    onEditProfile?.();
  };

  const handleChangeVoice = () => {
    onChangeVoice?.();
  };

  const handleProfileSelect = (profileId: string) => {
    if (profileId === 'add-new') {
      onCreateProfile?.();
    } else {
      onProfileSelect?.(profileId);
    }
    setShowProfileDropdown(false);
  };

  const handleDeleteProfile = () => {
    if (onDeleteProfile) {
      onDeleteProfile();
    }
  };

  const handleTogglePointsGuide = () => {
    setIsPointsGuideExpanded(!isPointsGuideExpanded);
  };

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={(e) => {
        onClose();
        setShowProfileDropdown(false);
      }}
    >
      <div 
        className="w-full max-w-[400px] bg-[#1f1f1f] rounded-2xl flex flex-col max-h-[90vh] shadow-2xl border border-[#333333]"
        onClick={(e) => {
          e.stopPropagation();
          setShowProfileDropdown(false);
        }}
      >
        {/* Header */}
        <div className="bg-[#1f1f1f] relative w-full rounded-t-2xl">
          <div
            aria-hidden="true"
            className="absolute border-[#424242] border-[0px_0px_0.625px] border-solid inset-0 pointer-events-none rounded-t-2xl"
          />
          
          <div className="flex flex-row items-center relative w-full">
            <div className="box-border content-stretch flex flex-row items-center justify-between py-5 px-6 relative w-full">
              {/* Title */}
              <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0">
                <div className="flex flex-col font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[16.734px] text-left text-nowrap">
                  <p className="block leading-[18px] whitespace-pre">{t('chat.chatSettings')}</p>
                </div>
              </div>
              
              {/* Close Button */}
              <button 
                onClick={onClose}
                className="box-border content-stretch flex flex-row items-center justify-center p-[4px] relative shrink-0 hover:opacity-80 transition-opacity"
              >
                <div className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0">
                  <div className="relative shrink-0 size-5">
                    <svg
                      className="block size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 20 20"
                    >
                      <g>
                        <path
                          clipRule="evenodd"
                          d={svgPaths.p22860200}
                          fill="#CCCCCC"
                          fillRule="evenodd"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Points Section */}
        <div className="bg-[#2a2a2a] relative w-full">
          <div
            aria-hidden="true"
            className="absolute border-[0px_0px_0.625px] border-[rgba(255,255,255,0.01)] border-solid inset-0 pointer-events-none"
          />
          
          <div className="flex flex-row items-center relative w-full">
            <div className="box-border content-stretch flex flex-row items-center justify-start pb-[12.625px] pt-3 px-6 relative w-full">
              <div className="box-border content-stretch flex flex-row gap-[3.99px] items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left text-nowrap">
                <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center relative shrink-0 text-[#cccccc] text-[13.891px]">
                  <p className="block leading-[14px] text-nowrap whitespace-pre">{`My Points: `}</p>
                </div>
                <div className="flex flex-col font-['Inter:Light',_sans-serif] font-light justify-center relative shrink-0 text-[#ffffff] text-[13.563px]">
                  <p className="block leading-[14px] text-nowrap whitespace-pre">{userPoints}P</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-[#1f1f1f] relative w-full flex-1 overflow-y-auto rounded-b-2xl">
          <div className="relative w-full h-full">
            <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-6 relative w-full">
              
              {/* My Profile Section */}
              <div className="bg-[#2a2a2a] relative rounded-lg w-full">
                <div
                  aria-hidden="true"
                  className="absolute border border-[rgba(255,255,255,0.01)] border-solid inset-0 pointer-events-none rounded-lg"
                />
                <div className="relative w-full h-full">
                  <div className="box-border content-stretch flex flex-col gap-[12px] pl-[16.63px] pr-[8px] py-[8px] relative w-full h-full">
                    {/* Section Label with Edit Button */}
                    <div className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full">
                      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#999999] text-[13px] text-left tracking-[0.5px] uppercase">
                        <p className="block leading-[14px]">{t('chat.myProfile')}</p>
                      </div>
                      
                      {/* Edit and Delete Buttons */}
                      <div className="flex items-center gap-1">
                        {/* Edit Button */}
                        <button
                          onClick={handleEditProfile}
                          className="bg-[rgba(255,255,255,0)] box-border content-stretch flex flex-row gap-1 h-6 items-center justify-center px-[8px] py-[0.3125px] relative rounded shrink-0 hover:bg-[rgba(255,255,255,0.1)] transition-colors"
                        >
                          <div
                            aria-hidden="true"
                            className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded shadow-[0px_2px_0px_0px_rgba(255,255,255,0.04)]"
                          />
                          
                          <div className="box-border content-stretch flex flex-col items-center justify-start pb-[1.64px] pt-[0.75px] px-0 relative shrink-0">
                            <div className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0">
                              <div className="relative shrink-0 size-[11.99px]">
                                <svg
                                  className="block size-full"
                                  fill="none"
                                  preserveAspectRatio="none"
                                  viewBox="0 0 12 12"
                                >
                                  <g>
                                    <path
                                      d={svgPaths.p3214e000}
                                      fill="#CCCCCC"
                                    />
                                  </g>
                                </svg>
                              </div>
                            </div>
                          </div>
                          
                          <div className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0">
                            <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#cccccc] text-[11.25px] text-center text-nowrap">
                              <p className="block leading-[normal] whitespace-pre">{t('chat.edit')}</p>
                            </div>
                          </div>
                        </button>

                        {/* Delete Button */}
                        <button
                          onClick={() => {
                            onDeleteProfile?.();
                          }}
                          className="bg-[rgba(255,255,255,0)] box-border content-stretch flex flex-row gap-1 h-6 items-center justify-center px-[8px] py-[0.3125px] relative rounded shrink-0 hover:bg-[rgba(220,38,38,0.1)] transition-colors"
                        >
                          <div
                            aria-hidden="true"
                            className="absolute border border-[rgba(220,38,38,0.3)] border-solid inset-0 pointer-events-none rounded shadow-[0px_2px_0px_0px_rgba(220,38,38,0.04)]"
                          />
                          
                          <div className="box-border content-stretch flex flex-col items-center justify-start pb-[1.64px] pt-[0.75px] px-0 relative shrink-0">
                            <div className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0">
                              <div className="relative shrink-0 size-[11.99px]">
                                <svg
                                  className="block size-full"
                                  fill="none"
                                  preserveAspectRatio="none"
                                  viewBox="0 0 12 12"
                                >
                                  <g>
                                    <path
                                      d="M3 3L9 9M9 3L3 9"
                                      stroke="#dc2626"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                    />
                                  </g>
                                </svg>
                              </div>
                            </div>
                          </div>
                          
                          <div className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0">
                            <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#dc2626] text-[11.25px] text-center text-nowrap">
                              <p className="block leading-[normal] whitespace-pre">{t('common.delete')}</p>
                            </div>
                          </div>
                        </button>
                      </div>
                    </div>
                    
                    {/* Profile Info - Now full width */}
                    <div className="box-border content-stretch flex flex-row gap-2 items-stretch justify-start p-0 relative shrink-0 w-full">
                      {/* Profile Image - Vertical Rectangle */}
                      <div className="relative shrink-0 flex">
                        <div className="w-[77.44px] h-full rounded-lg bg-[#333333] border border-[#424242] overflow-hidden flex items-center justify-center">
                          {userImage ? (
                            <img 
                              src={userImage} 
                              alt="Profile" 
                              className="w-full h-full object-cover"
                              style={{ 
                                objectPosition: 'center 20%', 
                                transform: 'scale(1.5)', 
                                transformOrigin: 'center 20%',
                                imageRendering: 'auto'
                              }}
                            />
                          ) : (
                            <svg className="w-8 h-8 text-[#666666]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          )}
                        </div>
                      </div>
                      
                      {/* Profile Name and Info - Now extends to full width */}
                      <div className="flex-1 flex flex-col gap-3 min-w-0">
                        {/* Profile Dropdown */}
                        <div className="relative">
                          <div className="bg-[#3a3a3a] border border-[#4a4a4a] rounded-md h-[25.6px]">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setShowProfileDropdown(!showProfileDropdown);
                              }}
                              className="w-full h-full flex items-center justify-between px-3 hover:bg-[#404041] transition-colors"
                            >
                              <span className="text-white text-[11px] font-medium leading-[25.6px] truncate">
                                {userName || 'Select Profile'}
                              </span>
                              <div className="w-3 h-3 ml-2 flex-shrink-0">
                                <svg className="block size-full" fill="none" viewBox="0 0 12 12">
                                  <path d="M3 5L6 8L9 5" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                                </svg>
                              </div>
                            </button>

                            {/* Dropdown Menu */}
                            {showProfileDropdown && (
                              <div className="absolute bg-[#3b3b3c] border border-[#4a4a4a] rounded-md shadow-lg top-full left-0 right-0 mt-1 py-1 z-50 max-h-40 overflow-y-auto">
                                {profiles.map((profile) => (
                                  <button
                                    key={profile.id}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleProfileSelect(profile.id);
                                    }}
                                    className={`w-full px-3 py-1.5 text-left text-white text-[11px] hover:bg-[#404041] transition-colors truncate ${
                                      profile.id === selectedProfileId ? 'bg-[#404041]' : ''
                                    }`}
                                  >
                                    {profile.name}
                                  </button>
                                ))}
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleProfileSelect('add-new');
                                  }}
                                  className="w-full px-3 py-1.5 text-left text-[#ff9500] text-[11px] hover:bg-[#404041] transition-colors border-t border-[#4a4a4a] mt-1 pt-1.5"
                                >
                                  + {t('profile.newChatProfile')}
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                        
                        {/* Profile Info Box - Now extends to full container width */}
                        {userInfo && userInfo.trim() ? (
                          <div className="bg-[#333333] rounded-md px-3 py-3 border border-[#444444] w-full">
                            <p className="text-[#cccccc] text-[11px] leading-[16px] line-clamp-3">
                              {userInfo.length > 120 ? `${userInfo.substring(0, 120)}...` : userInfo}
                            </p>
                          </div>
                        ) : (
                          <div className="bg-[#333333] rounded-md px-3 py-3 border border-[#444444] w-full flex items-center">
                            <p className="text-[#666666] text-[11px] leading-[16px] italic">
                              {t('chat.noInformationEntered')}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Background Image Section */}
              <div className="bg-[#2a2a2a] relative rounded-lg w-full">
                <div
                  aria-hidden="true"
                  className="absolute border border-[rgba(255,255,255,0.01)] border-solid inset-0 pointer-events-none rounded-lg"
                />
                <div className="flex flex-row items-center relative w-full">
                  <div className="box-border content-stretch flex flex-row items-center justify-between pl-[16.63px] pr-[16.61px] py-[12.625px] relative w-full">
                    
                    <div className="basis-0 box-border content-stretch flex flex-col gap-[3.18px] grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
                      {/* Icon and Title */}
                      <div className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0 w-full" style={{ gap: "7.10543e-15px" }}>
                        <div className="box-border content-stretch flex flex-col items-start justify-start pl-0 pr-2 py-0 relative shrink-0">
                          <div className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0">
                            <div className="relative shrink-0 size-[13.99px]">
                              <svg
                                className="block size-full"
                                fill="none"
                                preserveAspectRatio="none"
                                viewBox="0 0 14 14"
                              >
                                <g>
                                  <path
                                    d={svgPaths.p382edc00}
                                    fill="white"
                                  />
                                </g>
                              </svg>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[13.125px] text-left text-nowrap">
                          <p className="block leading-[14px] whitespace-pre">{t('chat.backgroundImage')}</p>
                        </div>
                      </div>
                      
                      {/* Description */}
                      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
                        <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#999999] text-[11.25px] text-left w-full">
                          <p className="block leading-[15.6px]">
{t('chat.backgroundImageDesc')}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Toggle Switch */}
                    <button
                      onClick={handleBackgroundToggle}
                      className={`h-5 w-10 relative rounded-full shrink-0 self-center transition-colors duration-200 ${
                        backgroundImageEnabled ? 'bg-[#dc5903]' : 'bg-[#666666]'
                      }`}
                    >
                      <div className={`absolute w-4 h-4 top-0.5 rounded-full bg-white shadow-md transition-transform duration-200 ${
                        backgroundImageEnabled ? 'translate-x-5' : 'translate-x-0.5'
                      }`} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Current Voice Section */}
              <div className="bg-[#2a2a2a] relative rounded-lg w-full">
                <div
                  aria-hidden="true"
                  className="absolute border border-[rgba(255,255,255,0.01)] border-solid inset-0 pointer-events-none rounded-lg"
                />
                <div className="flex flex-row items-center relative w-full">
                  <div className="box-border content-stretch flex flex-row items-center justify-between pl-[16.63px] pr-[16.62px] py-[12.625px] relative w-full">
                    
                    <div className="basis-0 box-border content-stretch flex flex-col gap-[7.255px] grow items-start justify-start min-h-px min-w-px mr-[-0.01px] p-0 relative shrink-0">
                      {/* Section Label */}
                      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
                        <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#999999] text-[11.25px] text-left tracking-[0.5px] uppercase w-full">
                          <p className="block leading-[12px]">{t('chat.currentVoice')}</p>
                        </div>
                      </div>
                      
                      {/* Voice Info */}
                      <div className="box-border content-stretch flex flex-row gap-[5.99px] items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-[13.234px] text-left text-nowrap w-full">
                        <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center relative shrink-0 text-[#ffffff]">
                          <p className="block leading-[18.2px] text-nowrap whitespace-pre">
                            {currentVoice}
                          </p>
                        </div>
                        <div className="flex flex-col font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light justify-center relative shrink-0 text-[#999999]">
                          <p className="block leading-[18.2px] text-nowrap whitespace-pre">
                            #Bright
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Change Button */}
                    <div className="box-border content-stretch flex flex-col h-7 items-start justify-start mr-[-0.01px] pl-3 pr-0 py-0 relative shrink-0">
                      <button
                        onClick={handleChangeVoice}
                        className="bg-[rgba(255,255,255,0)] box-border content-stretch flex flex-row gap-2 h-7 items-center justify-center px-[12.625px] py-[0.625px] relative rounded shrink-0 hover:bg-[rgba(255,255,255,0.1)] transition-colors"
                      >
                        <div
                          aria-hidden="true"
                          className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded shadow-[0px_2px_0px_0px_rgba(255,255,255,0.04)]"
                        />
                        
                        <div className="box-border content-stretch flex flex-col items-center justify-start pb-[1.64px] pt-[0.75px] px-0 relative shrink-0">
                          <div className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0">
                            <div className="relative shrink-0 size-[11.99px]">
                              <div className="absolute bottom-0 left-0 right-0 top-[-0.02%]">
                                <svg
                                  className="block size-full"
                                  fill="none"
                                  preserveAspectRatio="none"
                                  viewBox="0 0 12 12"
                                >
                                  <g>
                                    <path
                                      d={svgPaths.p1f6c3000}
                                      fill="#CCCCCC"
                                    />
                                  </g>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0">
                          <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#cccccc] text-[11.25px] text-center text-nowrap">
                            <p className="block leading-[normal] whitespace-pre">{t('chat.change')}</p>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Auto Play Section */}
              <div className="bg-[#2a2a2a] relative rounded-lg w-full">
                <div
                  aria-hidden="true"
                  className="absolute border border-[rgba(255,255,255,0.01)] border-solid inset-0 pointer-events-none rounded-lg"
                />
                <div className="flex flex-row items-center relative w-full">
                  <div className="box-border content-stretch flex flex-row items-center justify-between pl-[16.63px] pr-[16.61px] py-[12.625px] relative w-full">
                    
                    <div className="basis-0 box-border content-stretch flex flex-col gap-[3.18px] grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
                      {/* Icon and Title */}
                      <div className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0 w-full" style={{ gap: "7.10543e-15px" }}>
                        <div className="box-border content-stretch flex flex-col items-start justify-start pl-0 pr-2 py-0 relative shrink-0">
                          <div className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0">
                            <div className="relative shrink-0 size-[13.99px]">
                              <svg
                                className="block size-full"
                                fill="none"
                                preserveAspectRatio="none"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"
                                  fill="white"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[13.125px] text-left text-nowrap">
                          <p className="block leading-[14px] whitespace-pre">{t('chat.autoPlay')}</p>
                        </div>
                      </div>
                      
                      {/* Description */}
                      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
                        <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#999999] text-[11.25px] text-left w-full">
                          <p className="block leading-[15.6px]">
                            {t('chat.autoPlayDesc')}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Toggle Switch */}
                    <button
                      onClick={handleAutoPlayToggle}
                      className="box-border content-stretch flex flex-col h-[23.99px] items-start justify-start mr-[-0.01px] p-0 relative shrink-0"
                    >
                      <div className={`relative rounded-full transition-colors duration-200 ${
                        autoPlayEnabled ? 'bg-[#007AFF]' : 'bg-[#39393D]'
                      }`} style={{ width: '42px', height: '24px' }}>
                        <div
                          className={`absolute top-[2px] w-5 h-5 bg-white rounded-full transition-transform duration-200 ${
                            autoPlayEnabled ? 'translate-x-[18px]' : 'translate-x-[2px]'
                          }`}
                        />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Points Guide Section - Updated Design */}
        <div
          className="bg-neutral-800 box-border content-stretch flex flex-col items-start justify-start pb-0 pt-[0.625px] px-0 relative w-full"
        >
          <div
            aria-hidden="true"
            className="absolute border-[0.625px_0px_0px] border-[rgba(255,255,255,0.01)] border-solid inset-0 pointer-events-none"
          />
          
          <div className="relative w-full">
            {/* Point Usage Guide Header - Now a clickable button */}
            <button 
              onClick={handleTogglePointsGuide}
              className="flex flex-row items-center relative w-full hover:bg-[rgba(255,255,255,0.05)] transition-colors"
            >
              <div className="box-border content-stretch flex flex-row items-center justify-between pl-[23.99px] pr-6 py-4 relative w-full">
                <div className="box-border content-stretch flex flex-col items-start justify-start pb-[0.565px] pt-0 px-0 relative shrink-0">
                  <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12.289px] text-gray-300 text-left text-nowrap tracking-[0.5px] uppercase">
                    <p className="adjustLetterSpacing block leading-[13px] whitespace-pre">
                      POINT USAGE GUIDE
                    </p>
                  </div>
                </div>
                
                <div className={`relative shrink-0 size-[13.99px] transition-transform duration-200 ${isPointsGuideExpanded ? 'rotate-180' : ''}`}>
                  <svg
                    className="block size-full"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 14 14"
                  >
                    <g>
                      <path
                        d={svgPaths.p23d9b700}
                        fill="#D1D5DB"
                      />
                    </g>
                  </svg>
                </div>
              </div>
            </button>
            
            {/* Point Details - Slide animation */}
            <div className={`relative w-full overflow-hidden transition-all duration-300 ease-in-out ${
              isPointsGuideExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <div className={`relative size-full transform transition-transform duration-300 ease-in-out ${
                isPointsGuideExpanded ? 'translate-y-0' : '-translate-y-4'
              }`}>
                <div className="box-border content-stretch flex flex-col gap-[8.01px] items-start justify-start pb-2 pt-1.5 px-6 relative w-full">
                  
                  {/* AI Answer Generation */}
                  <div className="box-border content-stretch flex flex-row items-center justify-between px-0 py-1.5 relative shrink-0 w-full">
                    <div className="box-border content-stretch flex flex-col items-start justify-start pb-[0.565px] pt-0 px-0 relative shrink-0">
                      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#cccccc] text-[12.188px] text-left text-nowrap">
                        <p className="block leading-[13px] whitespace-pre">AI Answer Generation</p>
                      </div>
                    </div>
                    
                    <div className="bg-[rgba(76,175,80,0.1)] box-border content-stretch flex flex-col items-start justify-start px-[8.625px] py-[2.625px] relative rounded-xl shrink-0">
                      <div
                        aria-hidden="true"
                        className="absolute border border-[rgba(76,175,80,0.04)] border-solid inset-0 pointer-events-none rounded-xl"
                      />
                      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4caf50] text-[12.695px] text-left text-nowrap">
                        <p className="block leading-[13px] whitespace-pre">5P</p>
                      </div>
                    </div>
                  </div>

                  {/* Next Message Suggestion */}
                  <div className="relative shrink-0 w-full">
                    <div className="flex flex-row items-center relative size-full">
                      <div className="box-border content-stretch flex flex-row items-center justify-between px-0 py-1.5 relative w-full">
                        <div className="box-border content-stretch flex flex-col items-start justify-start pb-[0.555px] pt-0 px-0 relative shrink-0">
                          <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#cccccc] text-[12.188px] text-left text-nowrap">
                            <p className="block leading-[13px] whitespace-pre">Next Message Suggestion</p>
                          </div>
                        </div>
                        
                        <div className="bg-[rgba(76,175,80,0.1)] box-border content-stretch flex flex-col items-start justify-start px-[8.625px] py-[2.625px] relative rounded-xl shrink-0">
                          <div
                            aria-hidden="true"
                            className="absolute border border-[rgba(76,175,80,0.04)] border-solid inset-0 pointer-events-none rounded-xl"
                          />
                          <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4caf50] text-[12.695px] text-left text-nowrap">
                            <p className="block leading-[13px] whitespace-pre">3P</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
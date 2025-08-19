import { Search } from 'lucide-react';
import { Switch } from './ui/switch';
import { Button } from './ui/button';
import { InviteCodeModal } from './InviteCodeModal';
import { LanguageSelector } from './LanguageSelector';
import { useState, useEffect } from 'react';
import { t, addLanguageChangeListener, removeLanguageChangeListener } from '../utils/i18n';
import svgPaths from "../imports/svg-xfjey1j8u7";
// import imgDiscordIconPng from "figma:asset/b686731a73383e744f82f20d1a694b0cfbc6c2e4.png";
// import imgSearchIconPng from "figma:asset/ef863f04724e3ed7ded20a0b62b98cd5a1b82d91.png";
// import imgThumbnail from "figma:asset/374d74b30fe73a06692e4b5c87efdada280aa447.png";
// import imgThumbnail1 from "figma:asset/5e4363550d7d2c0289dd5b1b20e8678edaef6fa0.png";
// import imgThumbnail2 from "figma:asset/810773b3211283d0d105e5a4b74c9236fddaf975.png";
const imgDiscordIconPng = "/images/discord-icon.svg";
const imgSearchIconPng = "/images/search-icon.svg";
const imgThumbnail = "/images/thumbnail1.svg";
const imgThumbnail1 = "/images/thumbnail2.svg";
const imgThumbnail2 = "/images/thumbnail3.svg";

interface ProfileScreenProps {
  onNavigateToSupport: () => void;
  onNavigateToMyProfile: () => void;
  onNavigateToTopUp: () => void;
  safetyMode: boolean;
  onSafetyToggle: (checked: boolean) => void;
  onSearchOpen?: () => void;
}

export function ProfileScreen({ onNavigateToSupport, onNavigateToMyProfile, onNavigateToTopUp, safetyMode, onSafetyToggle, onSearchOpen }: ProfileScreenProps) {
  const [showInviteCodeModal, setShowInviteCodeModal] = useState(false);
  const [, forceUpdate] = useState({});

  // Language change listener
  useEffect(() => {
    const handleLanguageChange = () => {
      forceUpdate({});
    };

    addLanguageChangeListener(handleLanguageChange);
    return () => removeLanguageChangeListener(handleLanguageChange);
  }, []);

  return (
    <div className="flex flex-col h-full bg-[#1e1f1f] text-white overflow-hidden">
      {/* Fixed Header - Same as HomeScreen */}
      <div className="bg-[#1a1b1b] box-border content-stretch flex flex-row h-[41.99px] items-center justify-between left-0 w-full pl-[15px] pr-0 py-0 top-0 flex-shrink-0">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src="/images/echostory.png" 
            alt="EchoStory" 
            className="h-12 w-auto object-contain"
            onError={(e) => {
              // Fallback to text if image fails to load
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const fallbackDiv = document.createElement('div');
              fallbackDiv.className = 'text-white text-xl font-medium tracking-wide';
              fallbackDiv.innerHTML = 'Echo<span class="text-[#ff9500]">Story</span>';
              target.parentNode?.appendChild(fallbackDiv);
            }}
          />
        </div>

        {/* Right Side Controls */}
        <div className="box-border content-stretch flex flex-row gap-[15px] items-center justify-start pl-0 pr-[15px] py-0 relative shrink-0">
          {/* Safety Toggle */}
          <div className="box-border content-stretch flex flex-row gap-[8.99px] items-center justify-start p-0 relative shrink-0">
            <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[13.125px] text-left text-nowrap">
              <p className="block leading-[22px] whitespace-pre">Safety</p>
            </div>
            <button 
              onClick={() => onSafetyToggle(!safetyMode)}
              className={`h-[13.99px] relative rounded-[34px] shrink-0 w-[35px] transition-colors ${
                safetyMode ? 'bg-[#34c759]' : 'bg-[#8e8e93]'
              }`}
            >
              <div className={`absolute bg-[#ffffff] box-border content-stretch flex flex-col items-start justify-start p-0 rounded-[10px] size-5 top-[-2.5px] transition-all ${
                safetyMode ? 'left-[18px]' : 'left-[1px]'
              }`}>
                <div className="box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 relative shrink-0 size-5">
                  <div className="relative shrink-0 size-5">
                    {safetyMode ? (
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" role="presentation" viewBox="0 0 20 20">
                        <g clipPath="url(#clip0_39_3156)">
                          <path d={svgPaths.p25566600} fill="white" />
                          <path clipRule="evenodd" d={svgPaths.p3d3c7700} fill="#62E082" fillRule="evenodd" />
                          <path d={svgPaths.p2f639d00} fill="#34C759" />
                          <path d={svgPaths.p2e4b80} fill="white" />
                          <path clipRule="evenodd" d={svgPaths.p1d410f00} fill="url(#paint0_linear_39_3156)" fillRule="evenodd" />
                          <g>
                            <mask height="4" id="mask0_39_3156" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="4" x="8" y="6">
                              <g>
                                <path d={svgPaths.p1d6d8600} fill="white" />
                              </g>
                            </mask>
                            <g mask="url(#mask0_39_3156)">
                              <path d={svgPaths.p302c8800} fill="white" />
                            </g>
                          </g>
                        </g>
                        <defs>
                          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_39_3156" x1="10.0121" x2="10.0121" y1="9.54712" y2="11.4609">
                            <stop offset="0.255208" stopColor="#34C759" />
                            <stop offset="1" stopColor="#99F2AF" />
                          </linearGradient>
                          <clipPath id="clip0_39_3156">
                            <rect fill="white" height="20" width="20" />
                          </clipPath>
                        </defs>
                      </svg>
                    ) : (
                      <div className="w-full h-full bg-[#8e8e93] rounded-full"></div>
                    )}
                  </div>
                </div>
              </div>
            </button>
          </div>
          
          {/* Language Selector - Moved to rightmost position */}
          <LanguageSelector />
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto scrollbar-hide">
        <div className="box-border content-stretch flex flex-col gap-[15px] items-start justify-start pb-[15px] pt-[55px] px-[15px] w-full">
          
          {/* Points Section */}
          <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0 w-full">
            <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0">
              <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.125px] text-[rgba(255,255,255,0.85)] text-left text-nowrap">
                <p className="block leading-[22px] whitespace-pre">{t('profile.myPoints')}: 1P</p>
              </div>
            </div>
            
            {/* Charge Button */}
            <button 
              onClick={onNavigateToTopUp}
              className="bg-[#dc5903] box-border content-stretch flex flex-row h-[31.99px] items-center justify-center px-[15.625px] py-[0.625px] relative rounded-md shadow-[0px_2px_0px_0px_rgba(180,60,0,0.15)] shrink-0"
            >
              <div className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0">
                <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[13.125px] text-center text-nowrap">
                  <p className="block leading-[normal] whitespace-pre">{t('profile.topUp')}</p>
                </div>
              </div>
            </button>
            
            {/* Usage History Button */}
            <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0">
              <div className="bg-[#141414] box-border content-stretch flex flex-row h-[31.99px] items-center justify-center px-[15.625px] py-[0.625px] relative rounded-md shrink-0">
                <div aria-hidden="true" className="absolute border border-[#424242] border-solid inset-0 pointer-events-none rounded-md shadow-[0px_2px_0px_0px_rgba(255,255,255,0.04)]" />
                <div className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0">
                  <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.125px] text-[rgba(255,255,255,0.85)] text-center text-nowrap">
                    <p className="block leading-[normal] whitespace-pre">History</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Daily Check-in Section - Single Line */}
          <div className="bg-[#282828] relative rounded-[5px] w-full">
            <div className="flex flex-row items-center justify-between gap-2 p-3 sm:px-4 sm:py-3">
              {/* Left Side - All Info */}
              <div className="flex flex-row items-center gap-2 flex-1 min-w-0">
                <span className="text-xs sm:text-sm font-normal text-[rgba(255,255,255,0.9)] flex-shrink-0">
{t('profile.dailyCheckIn')}
                </span>
                
                <div className="bg-[rgba(255,255,255,0.15)] px-1.5 py-0.5 rounded text-xs flex-shrink-0">
                  <span className="text-[rgba(255,255,255,0.9)]">200P</span>
                </div>
                
                <div className="bg-[rgba(255,255,255,0.15)] px-1.5 py-0.5 rounded text-xs flex-shrink-0">
                  <span className="text-[rgba(255,255,255,0.9)]">{t('profile.resetTime')}</span>
                </div>
              </div>
              
              {/* Claim Button */}
              <button className="bg-[#141414] border border-[#424242] shadow-[0px_2px_0px_0px_rgba(255,255,255,0.04)] rounded px-3 py-1 flex-shrink-0 hover:bg-[#1a1a1a] transition-colors">
                <span className="text-xs font-normal text-[rgba(255,255,255,0.85)]">
{t('profile.claim')}
                </span>
              </button>
            </div>
          </div>

          {/* Menu Items Section */}
          <div className="bg-[#282828] box-border content-stretch flex flex-col items-start justify-start overflow-clip pb-0 pt-[5.01px] px-0 relative rounded-[5px] shrink-0 w-full">
            {/* My Profile */}
            <button 
              onClick={onNavigateToMyProfile}
              className="relative shrink-0 w-full hover:bg-[rgba(255,255,255,0.05)] transition-colors"
            >
              <div aria-hidden="true" className="absolute border-[#3c3c3c] border-[0px_0px_0.625px] border-solid inset-0 pointer-events-none" />
              <div className="flex flex-row items-center relative size-full">
                <div className="box-border content-stretch flex flex-row items-center justify-start pb-[14.625px] pt-3.5 px-5 relative w-full">
                  <div className="box-border content-stretch flex flex-col items-start justify-start pl-0 pr-3 py-0 relative shrink-0 w-7">
                    <div className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0 w-4">
                      <div className="relative shrink-0 size-4">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                          <g>
                            <path d={svgPaths.pa787480} fill="rgba(255,255,255,0.7)" />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
                    <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.125px] text-[rgba(255,255,255,0.85)] text-left w-full">
                      <p className="block leading-[22px]">{t('profile.myProfile')}</p>
                    </div>
                  </div>
                  
                  <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0">
                    <div className="flex flex-col font-['Inter:Light',sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.5)] text-left text-nowrap">
                      <p className="block leading-[25.14px] whitespace-pre">›</p>
                    </div>
                  </div>
                </div>
              </div>
            </button>

            {/* My Invite Code */}
            <button 
              onClick={() => setShowInviteCodeModal(true)}
              className="relative shrink-0 w-full hover:bg-[rgba(255,255,255,0.05)] transition-colors"
            >
              <div aria-hidden="true" className="absolute border-[#3c3c3c] border-[0px_0px_0.625px] border-solid inset-0 pointer-events-none" />
              <div className="flex flex-row items-center relative size-full">
                <div className="box-border content-stretch flex flex-row items-center justify-start pb-[14.625px] pt-3.5 px-5 relative w-full">
                  <div className="box-border content-stretch flex flex-col items-start justify-start pl-0 pr-3 py-0 relative shrink-0 w-7">
                    <div className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0 w-4">
                      <div className="relative shrink-0 size-4">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                          <g>
                            <path d={svgPaths.p2482df00} fill="rgba(255,255,255,0.7)" />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
                    <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.016px] text-[rgba(255,255,255,0.85)] text-left w-full">
                      <p className="block leading-[22px]">{t('profile.myInviteCode')}</p>
                    </div>
                  </div>
                  
                  <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0">
                    <div className="flex flex-col font-['Inter:Light',sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.5)] text-left text-nowrap">
                      <p className="block leading-[25.14px] whitespace-pre">›</p>
                    </div>
                  </div>
                </div>
              </div>
            </button>

            {/* Support */}
            <button 
              onClick={onNavigateToSupport}
              className="relative shrink-0 w-full"
            >
              <div aria-hidden="true" className="absolute border-[#3c3c3c] border-[0px_0px_0.625px] border-solid inset-0 pointer-events-none" />
              <div className="flex flex-row items-center relative size-full">
                <div className="box-border content-stretch flex flex-row items-center justify-start pb-[14.625px] pt-3.5 px-5 relative w-full">
                  <div className="box-border content-stretch flex flex-col items-start justify-start pl-0 pr-3 py-0 relative shrink-0 w-7">
                    <div className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0 w-4">
                      <div className="relative shrink-0 size-4">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                          <g>
                            <path d={svgPaths.pcdd70f0} fill="rgba(255,255,255,0.7)" />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
                    <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.016px] text-[rgba(255,255,255,0.85)] text-left w-full">
                      <p className="block leading-[22px]">{t('profile.support')}</p>
                    </div>
                  </div>
                  
                  <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0">
                    <div className="flex flex-col font-['Inter:Light',sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.5)] text-left text-nowrap">
                      <p className="block leading-[25.14px] whitespace-pre">›</p>
                    </div>
                  </div>
                </div>
              </div>
            </button>

            {/* Discord */}
            <button className="relative shrink-0 w-full hover:bg-[rgba(255,255,255,0.05)] transition-colors">
              <div aria-hidden="true" className="absolute border-[#3c3c3c] border-[0px_0px_0.625px] border-solid inset-0 pointer-events-none" />
              <div className="flex flex-row items-center relative size-full">
                <div className="box-border content-stretch flex flex-row items-center justify-start pb-[14.625px] pt-3.5 px-5 relative w-full">
                  <div className="box-border content-stretch flex flex-col items-start justify-start pl-0 pr-3 py-0 relative shrink-0 w-7">
                    <div className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0 w-4">
                      <div className="relative shrink-0 size-4">
                        <img 
                          src={imgDiscordIconPng} 
                          alt="Discord" 
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            // Fallback if image fails to load
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
                    <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.125px] text-[rgba(255,255,255,0.85)] text-left w-full">
                      <p className="block leading-[22px]">{t('profile.discord')}</p>
                    </div>
                  </div>
                  
                  <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0">
                    <div className="flex flex-col font-['Inter:Light',sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.5)] text-left text-nowrap">
                      <p className="block leading-[25.14px] whitespace-pre">›</p>
                    </div>
                  </div>
                </div>
              </div>
            </button>

            {/* Logout */}
            <div className="relative shrink-0 w-full">
              <div className="flex flex-row items-center relative size-full">
                <div className="box-border content-stretch flex flex-row items-center justify-start px-5 py-3.5 relative w-full">
                  <div className="box-border content-stretch flex flex-col items-start justify-start pl-0 pr-3 py-0 relative shrink-0 w-7">
                    <div className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0 w-4">
                      <div className="relative shrink-0 size-4">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                          <g>
                            <path d={svgPaths.p3ec34df0} fill="rgba(255,255,255,0.7)" />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
                    <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.125px] text-[rgba(255,255,255,0.85)] text-left w-full">
                      <p className="block leading-[22px]">Logout</p>
                    </div>
                  </div>
                  
                  <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0">
                    <div className="flex flex-col font-['Inter:Light',sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.5)] text-left text-nowrap">
                      <p className="block leading-[25.14px] whitespace-pre">›</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>



          {/* Account Deletion Link */}
          <div className="box-border content-stretch flex flex-row items-start justify-end pb-0 pt-[35px] px-0 relative shrink-0 w-full">
            <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative">
              <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.125px] text-[rgba(255,255,255,0.3)] text-left text-nowrap">
                <p className="[text-decoration-line:underline] [text-decoration-style:solid] [text-underline-position:from-font] block leading-[22px] whitespace-pre">Delete Account</p>
              </div>
            </div>
          </div>

          {/* Company Information Footer - Updated to match HomeScreen */}
          <div className="relative w-full mt-8">
            <div aria-hidden="true" className="absolute border-[#333333] border-[0.625px_0px_0px] border-solid inset-x-0 top-0 h-px pointer-events-none" />
            
            <div className="pt-[30.63px] space-y-4">
              <div className="flex flex-col font-['Inter:Extra_Light','Noto_Sans_KR:Regular',sans-serif] font-extralight justify-center leading-[0] not-italic text-[12.188px] text-[rgba(255,255,255,0.4)] text-left">
                <p className="text-xs font-medium text-[rgba(255,255,255,0.6)] mb-2">Company Information</p>
              </div>
              
              <div className="flex flex-col font-['Inter:Extra_Light','Noto_Sans_KR:Regular',sans-serif] font-extralight justify-center leading-[0] not-italic text-[11.063px] text-[rgba(255,255,255,0.4)] text-left">
                <p className="text-xs mb-1">The Flow</p>
                <p className="text-xs">123 Innovation St, Tech District, San Francisco, CA 94107</p>
              </div>
              
              <div className="flex flex-col font-['Inter:Extra_Light','Noto_Sans_KR:Regular',sans-serif] font-extralight justify-center leading-[0] not-italic text-[11.25px] text-[rgba(255,255,255,0.4)] text-left">
                <p className="text-xs">CEO: David Choi | Business Registration: 123-45-67890</p>
                <p className="text-xs">E-commerce License: 2025-SF-TECH-0673</p>
              </div>
              
              <div className="flex flex-col font-['Inter:Extra_Light','Noto_Sans_KR:Regular',sans-serif] font-extralight justify-center leading-[0] not-italic text-[11.25px] text-[rgba(255,255,255,0.4)] text-left">
                <p className="text-xs">Phone: +1-555-THE-FLOW | Email: contact@theflow.ai</p>
              </div>
              
              <div className="pt-4">
                <div className="flex flex-wrap gap-2">
                  <button className="text-xs text-[rgba(255,255,255,0.6)] hover:text-white transition-colors">
                    Privacy Policy
                  </button>
                  <span className="text-xs text-[rgba(255,255,255,0.4)]">|</span>
                  <button className="text-xs text-[rgba(255,255,255,0.6)] hover:text-white transition-colors">
                    Terms of Service
                  </button>
                  <span className="text-xs text-[rgba(255,255,255,0.4)]">|</span>
                  <button className="text-xs text-[rgba(255,255,255,0.6)] hover:text-white transition-colors">
                    Youth Protection Policy
                  </button>
                </div>
              </div>
              
              <div className="pt-2 pb-8">
                <p className="text-xs text-[rgba(255,255,255,0.3)]">
                  © 2025 The Flow. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Invite Code Modal */}
      <InviteCodeModal
        isOpen={showInviteCodeModal}
        onClose={() => setShowInviteCodeModal(false)}
      />
    </div>
  );
}
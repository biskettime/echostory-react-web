import { ArrowLeft, User, Settings, Trash2, Mail, MessageCircle, Calendar, Star, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { t, addLanguageChangeListener, removeLanguageChangeListener } from '../utils/i18n';

interface MyProfileScreenProps {
  onBack: () => void;
}

export function MyProfileScreen({ onBack }: MyProfileScreenProps) {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [autoSaveChats, setAutoSaveChats] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [, forceUpdate] = useState({});
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [updateSuccess, setUpdateSuccess] = useState(false);
  
  // Profile data state
  const [profileData, setProfileData] = useState({
    username: '',
    email: '',
    bio: ''
  });

  // Load profile data from localStorage on mount
  useEffect(() => {
    const savedProfile = localStorage.getItem('userProfile');
    if (savedProfile) {
      const profile = JSON.parse(savedProfile);
      setProfileData({
        username: profile.username || 'Alex',
        email: profile.email || 'alex@echostory.com',
        bio: profile.bio || t('profile.defaultBio')
      });
      setProfileImage(profile.profileImage || null);
    } else {
      // Set default values if no saved profile
      setProfileData({
        username: 'Alex',
        email: 'alex@echostory.com',
        bio: t('profile.defaultBio')
      });
    }
  }, []);

  // Language change listener
  useEffect(() => {
    const handleLanguageChange = () => {
      forceUpdate({});
    };

    addLanguageChangeListener(handleLanguageChange);
    return () => removeLanguageChangeListener(handleLanguageChange);
  }, []);

  const toggleSwitch = (setter: (value: boolean) => void, currentValue: boolean) => {
    setter(!currentValue);
  };

  // Handle profile image upload
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle profile update
  const handleProfileUpdate = () => {
    const profileToSave = {
      ...profileData,
      profileImage: profileImage
    };
    
    // Save to localStorage
    localStorage.setItem('userProfile', JSON.stringify(profileToSave));
    
    // Show success message
    setUpdateSuccess(true);
    setTimeout(() => {
      setUpdateSuccess(false);
    }, 3000);
  };

  return (
    <div className="bg-[#1a1b1b] min-h-screen relative overflow-hidden">
      <div className="mobile-container mx-auto h-full relative">
        
        {/* Header */}
        <div className="bg-[#1a1b1b] sticky top-0 z-20 border-b border-[#424242]/20">
          <div className="flex items-center justify-between h-14 px-4">
            <div className="flex items-center gap-3">
              <button
                onClick={onBack}
                className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-[#2a2a2a] transition-colors"
                aria-label="Go back"
              >
                <ChevronRight className="w-5 h-5 text-white rotate-180" />
              </button>
              <h1 className="text-lg font-semibold text-white">{t('profile.myProfile')}</h1>
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="h-[calc(100vh-3.5rem)] overflow-y-auto scrollbar-hide">
          <div className="px-4 pb-8">
            
            {/* Profile Header */}
            <div className="text-center py-8">
              <div className="relative w-24 h-24 mx-auto mb-4">
                <input
                  type="file"
                  id="profileImageInput"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
                <label htmlFor="profileImageInput" className="cursor-pointer">
                  {profileImage ? (
                    <img 
                      src={profileImage} 
                      alt="Profile" 
                      className="w-24 h-24 rounded-full object-cover shadow-xl hover:opacity-80 transition-opacity"
                    />
                  ) : (
                    <div className="w-24 h-24 bg-gradient-to-br from-[#dc5903] to-[#ff7b3d] rounded-full flex items-center justify-center shadow-xl hover:opacity-80 transition-opacity">
                      <User size={32} className="text-white" />
                    </div>
                  )}
                  <div className="absolute bottom-0 right-0 w-8 h-8 bg-[#dc5903] rounded-full border-2 border-[#1a1b1b] flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M12 4v16m8-8H4"></path>
                    </svg>
                  </div>
                </label>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#4caf50] rounded-full border-2 border-[#1a1b1b] flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-[#dc5903] to-[#ff7b3d] bg-clip-text text-transparent">
                <h2 className="text-xl font-bold mb-1">{profileData.username || 'Alex'}</h2>
              </div>
              <p className="text-[#cccccc] text-sm">{t('profile.storytellingEnthusiast')} • {t('profile.level')} 3</p>
            </div>

            {/* Quick Stats Cards */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <Card className="bg-gradient-to-br from-[#2a2a2a] to-[#1e1f1f] border-[#424242]/30 p-4 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#dc5903]/20 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-[#dc5903]" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white">12</div>
                    <div className="text-xs text-[#999999]">{t('profile.storiesCreated')}</div>
                  </div>
                </div>
              </Card>
              
              <Card className="bg-gradient-to-br from-[#2a2a2a] to-[#1e1f1f] border-[#424242]/30 p-4 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#4caf50]/20 rounded-lg flex items-center justify-center">
                    <Star className="w-5 h-5 text-[#4caf50]" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white">186</div>
                    <div className="text-xs text-[#999999]">{t('profile.pointsEarned')}</div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Profile Information */}
            <Card className="bg-gradient-to-br from-[#2a2a2a] to-[#1e1f1f] border-[#424242]/30 p-6 mb-6 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-[#dc5903]/20 rounded-lg flex items-center justify-center">
                  <User className="w-4 h-4 text-[#dc5903]" />
                </div>
                <h3 className="text-lg font-semibold text-white">{t('profile.profileInformation')}</h3>
              </div>
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="username" className="text-[#cccccc] text-sm font-medium">{t('profile.username')}</Label>
                  <Input 
                    id="username"
                    placeholder={t('profile.enterUsername')}
                    className="bg-[#1a1b1b] border-[#424242]/50 text-white placeholder:text-[#666666] focus:border-[#dc5903] focus:ring-1 focus:ring-[#dc5903]/30 transition-all duration-200 rounded-lg h-12"
                    value={profileData.username}
                    onChange={(e) => setProfileData({ ...profileData, username: e.target.value })}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[#cccccc] text-sm font-medium">{t('profile.emailAddress')}</Label>
                  <Input 
                    id="email"
                    type="email"
                    placeholder={t('profile.enterEmail')}
                    className="bg-[#1a1b1b] border-[#424242]/50 text-white placeholder:text-[#666666] focus:border-[#dc5903] focus:ring-1 focus:ring-[#dc5903]/30 transition-all duration-200 rounded-lg h-12"
                    value={profileData.email}
                    onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio" className="text-[#cccccc] text-sm font-medium">{t('profile.aboutMe')}</Label>
                  <textarea
                    id="bio"
                    placeholder={t('profile.tellAboutYourself')}
                    className="w-full bg-[#1a1b1b] border border-[#424242]/50 rounded-lg px-4 py-3 text-white placeholder:text-[#666666] resize-none focus:border-[#dc5903] focus:ring-1 focus:ring-[#dc5903]/30 transition-all duration-200"
                    rows={3}
                    value={profileData.bio}
                    onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
                  />
                </div>

                {updateSuccess && (
                  <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-3 text-green-400 text-sm text-center">
                    {t('profile.updateSuccess') || 'Profile updated successfully!'}
                  </div>
                )}

                <Button 
                  onClick={handleProfileUpdate}
                  className="w-full bg-gradient-to-r from-[#dc5903] to-[#ff7b3d] hover:from-[#e6850e] hover:to-[#ff8c52] text-white font-medium h-12 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Settings size={18} className="mr-2" />
                  {t('profile.updateProfile')}
                </Button>
              </div>
            </Card>

            {/* Account Preferences */}
            <Card className="bg-gradient-to-br from-[#2a2a2a] to-[#1e1f1f] border-[#424242]/30 p-6 mb-6 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-[#4caf50]/20 rounded-lg flex items-center justify-center">
                  <Settings className="w-4 h-4 text-[#4caf50]" />
                </div>
                <h3 className="text-lg font-semibold text-white">{t('profile.preferences')}</h3>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between py-2">
                  <div>
                    <h4 className="text-white font-medium">{t('profile.emailNotifications')}</h4>
                    <p className="text-[#999999] text-sm">{t('profile.receiveUpdates')}</p>
                  </div>
                  <button
                    onClick={() => toggleSwitch(setEmailNotifications, emailNotifications)}
                    className={`w-12 h-6 rounded-full relative transition-colors duration-300 ${
                      emailNotifications ? 'bg-[#dc5903]' : 'bg-[#424242]'
                    }`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform duration-300 shadow-md ${
                      emailNotifications ? 'translate-x-6' : 'translate-x-0.5'
                    }`}></div>
                  </button>
                </div>
                
                <div className="flex items-center justify-between py-2">
                  <div>
                    <h4 className="text-white font-medium">{t('profile.autoSaveConversations')}</h4>
                    <p className="text-[#999999] text-sm">{t('profile.autoSaveChatHistory')}</p>
                  </div>
                  <button
                    onClick={() => toggleSwitch(setAutoSaveChats, autoSaveChats)}
                    className={`w-12 h-6 rounded-full relative transition-colors duration-300 ${
                      autoSaveChats ? 'bg-[#dc5903]' : 'bg-[#424242]'
                    }`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform duration-300 shadow-md ${
                      autoSaveChats ? 'translate-x-6' : 'translate-x-0.5'
                    }`}></div>
                  </button>
                </div>

                <div className="flex items-center justify-between py-2">
                  <div>
                    <h4 className="text-white font-medium">{t('profile.darkTheme')}</h4>
                    <p className="text-[#999999] text-sm">{t('profile.useDarkAppearance')}</p>
                  </div>
                  <button
                    onClick={() => toggleSwitch(setDarkMode, darkMode)}
                    className={`w-12 h-6 rounded-full relative transition-colors duration-300 ${
                      darkMode ? 'bg-[#dc5903]' : 'bg-[#424242]'
                    }`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform duration-300 shadow-md ${
                      darkMode ? 'translate-x-6' : 'translate-x-0.5'
                    }`}></div>
                  </button>
                </div>
              </div>
            </Card>

            {/* Activity Summary */}
            <Card className="bg-gradient-to-br from-[#2a2a2a] to-[#1e1f1f] border-[#424242]/30 p-6 mb-6 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-[#9c27b0]/20 rounded-lg flex items-center justify-center">
                  <Calendar className="w-4 h-4 text-[#9c27b0]" />
                </div>
                <h3 className="text-lg font-semibold text-white">{t('profile.activitySummary')}</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#dc5903] mb-2">45</div>
                  <div className="text-sm text-[#999999]">{t('profile.conversationsStarted')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#4caf50] mb-2">7</div>
                  <div className="text-sm text-[#999999]">{t('profile.daysActive')}</div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-[#1a1b1b]/50 rounded-lg border border-[#424242]/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[#cccccc] text-sm">{t('profile.levelProgress')}</span>
                  <span className="text-[#dc5903] text-sm font-medium">{t('profile.level')} 3</span>
                </div>
                <div className="w-full bg-[#424242] rounded-full h-2">
                  <div className="bg-gradient-to-r from-[#dc5903] to-[#ff7b3d] h-2 rounded-full w-3/4 transition-all duration-500"></div>
                </div>
                <div className="text-xs text-[#666666] mt-2">186 / 250 {t('profile.pointsToNextLevel')}</div>
              </div>
            </Card>

            {/* Danger Zone */}
            <Card className="bg-gradient-to-br from-[#2a2a2a] to-[#1e1f1f] border-red-800/30 p-6 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center">
                  <Trash2 className="w-4 h-4 text-red-400" />
                </div>
                <h3 className="text-lg font-semibold text-red-400">{t('profile.dangerZone')}</h3>
              </div>
              
              <div className="border border-red-800/50 rounded-lg p-4 bg-red-900/10">
                <h4 className="text-red-400 font-medium mb-2">{t('profile.deleteAccount')}</h4>
                <p className="text-[#cccccc] text-sm mb-4 leading-relaxed">
                  {t('profile.deleteAccountWarning')}
                </p>
                <Button 
                  variant="destructive" 
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-medium h-12 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Trash2 size={18} className="mr-2" />
                  {t('profile.deleteMyAccount')}
                </Button>
              </div>
            </Card>

          </div>
        </div>
      </div>
    </div>
  );
}
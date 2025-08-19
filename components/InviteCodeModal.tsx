import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { X, Link, Copy } from 'lucide-react';
import { toast } from 'sonner';
import { t, addLanguageChangeListener, removeLanguageChangeListener } from '../utils/i18n';

interface InviteCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function InviteCodeModal({ isOpen, onClose }: InviteCodeModalProps) {
  const [activeTab, setActiveTab] = useState<'invite' | 'referral'>('invite');
  const [, forceUpdate] = useState({});

  // Language change listener
  useEffect(() => {
    const handleLanguageChange = () => {
      forceUpdate({});
    };

    addLanguageChangeListener(handleLanguageChange);
    return () => removeLanguageChangeListener(handleLanguageChange);
  }, []);
  
  // Mock user data
  const userInviteData = {
    inviteCode: 'ECH02X',
    invitedFriends: 0,
    earnedPoints: 0,
    totalPossiblePoints: 1000
  };

  if (!isOpen) return null;

  const handleCopyInviteCode = async () => {
    try {
      await navigator.clipboard.writeText(userInviteData.inviteCode);
      toast.success(t('invite.inviteCodeCopied'));
    } catch (err) {
      toast.error(t('invite.copyFailed'));
    }
  };

  const handleCopyInviteLink = async () => {
    const inviteLink = `https://echostory.ai/invite/${userInviteData.inviteCode}`;
    try {
      await navigator.clipboard.writeText(inviteLink);
      toast.success(t('invite.inviteLinkCopied'));
    } catch (err) {
      toast.error(t('invite.copyFailed'));
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      
      {/* Modal - Mobile Optimized */}
      <div className="relative bg-[#1f1f1f] rounded-lg shadow-2xl w-full max-w-[380px] mx-auto max-h-[90vh] overflow-hidden">
        {/* Header with tabs */}
        <div className="bg-[#1f1f1f] rounded-t-lg p-4 pb-0">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white text-lg font-bold">{t('invite.friendReferral')}</h2>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <X size={16} className="text-white/45" />
            </button>
          </div>
          
          {/* Tab Navigation */}
          <div className="flex border-b border-[#303030]">
            <button
              onClick={() => setActiveTab('invite')}
              className={`px-2 py-3 text-sm font-medium transition-colors relative ${
                activeTab === 'invite' 
                  ? 'text-white' 
                  : 'text-white/60 hover:text-white/80'
              }`}
            >
              {t('invite.myInviteCode')}
              {activeTab === 'invite' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#ff9500]" />
              )}
            </button>
            <button
              onClick={() => setActiveTab('referral')}
              className={`px-2 py-3 text-sm font-medium transition-colors ml-6 ${
                activeTab === 'referral' 
                  ? 'text-white' 
                  : 'text-white/60 hover:text-white/80'
              }`}
            >
              {t('invite.enterReferralCode')}
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 space-y-4">
          {activeTab === 'invite' ? (
            <>
              {/* Main Title */}
              <div>
                <h3 className="text-white text-lg font-bold mb-3">
                  {t('invite.inviteFriendsTitle')}
                </h3>
                <div className="text-white/80 text-sm leading-relaxed">
                  <p>{t('invite.inviteFriendsDesc1')}</p>
                  <p>{t('invite.inviteFriendsDesc2')}</p>
                </div>
              </div>

              {/* Invite Code Display */}
              <div className="space-y-2">
                <p className="text-white/60 text-xs">{t('invite.myInviteCodeLabel')}</p>
                <div className="bg-white/10 border border-white/10 rounded-lg p-3 text-center">
                  <span className="text-white text-lg font-bold tracking-[2px]">
                    {userInviteData.inviteCode}
                  </span>
                </div>
                <div className="pt-2">
                  <p className="text-white/60 text-xs">
                    {t('invite.invitedFriends')}: {userInviteData.invitedFriends} ({userInviteData.earnedPoints}P {t('invite.pointsEarned')})
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-2">
                <Button
                  onClick={handleCopyInviteLink}
                  variant="outline"
                  className="flex-1 bg-orange-500/20 border-orange-500/40 text-white hover:bg-orange-500/30 h-[38px] text-xs"
                >
                  <Link size={12} className="mr-1" />
                  {t('invite.copyUrlLink')}
                </Button>
                <Button
                  onClick={handleCopyInviteCode}
                  className="flex-1 bg-[#dc5903] hover:bg-[#dc5903]/90 text-white h-[38px] shadow-[0px_2px_0px_0px_rgba(180,60,0,0.15)] text-xs"
                >
                  <Copy size={12} className="mr-1" />
                  {t('invite.copyInviteCode')}
                </Button>
              </div>
            </>
          ) : (
            /* Referral Code Entry Tab */
            <div className="space-y-4">
              <div>
                <h3 className="text-white text-lg font-bold mb-3">
                  {t('invite.enterReferralTitle')}
                </h3>
                <p className="text-white/80 text-sm">
                  {t('invite.enterReferralDesc')}
                </p>
              </div>
              
              <div className="space-y-3">
                <div>
                  <label className="block text-white/60 text-xs mb-2">{t('invite.referralCodeLabel')}</label>
                  <input
                    type="text"
                    placeholder={t('invite.enterCodePlaceholder')}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder:text-white/40 focus:border-orange-500 focus:outline-none text-sm"
                    maxLength={6}
                  />
                </div>
                
                <Button
                  className="w-full bg-[#dc5903] hover:bg-[#dc5903]/90 text-white h-[38px] text-sm"
                >
                  {t('invite.submitCode')}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
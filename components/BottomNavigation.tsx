import { Star, Plus, MessageCircle, User } from 'lucide-react';
import { useState, useEffect } from 'react';
import { t, addLanguageChangeListener, removeLanguageChangeListener, getCurrentLanguage } from '../utils/i18n';

interface BottomNavigationProps {
  activeTab: 'home' | 'create' | 'activity' | 'profile';
  onTabChange: (tab: 'home' | 'create' | 'activity' | 'profile') => void;
}

export function BottomNavigation({ activeTab, onTabChange }: BottomNavigationProps) {
  const [, forceUpdate] = useState({});

  useEffect(() => {
    const handleLanguageChange = () => {
      forceUpdate({});
    };

    addLanguageChangeListener(handleLanguageChange);
    return () => removeLanguageChangeListener(handleLanguageChange);
  }, []);

  const tabs = [
    { id: 'home' as const, icon: Star, label: t('nav.stories') },
    { id: 'create' as const, icon: Plus, label: t('nav.create') },
    { id: 'activity' as const, icon: MessageCircle, label: t('nav.activity') },
    { id: 'profile' as const, icon: User, label: t('nav.profile') }
  ];

  return (
    <div className="bg-[#1a1b1b] border-t border-[#424242] px-4 py-1">
      <div className="flex justify-around items-center">
        {tabs.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => onTabChange(id)}
            className={`flex flex-col items-center space-y-1 px-3 py-[5px] rounded-lg transition-colors ${
              activeTab === id 
                ? 'text-white' 
                : 'text-white/55 hover:text-white/80'
            }`}
          >
            <Icon size={20} />
            <span className={`${
              id === 'create' ? 'text-[9.375px]' : 'text-[10px]'
            } font-light leading-[15.71px]`}>
              {label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
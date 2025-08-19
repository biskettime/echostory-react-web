import { useState } from 'react';
import { ChevronDown, Plus } from 'lucide-react';
import svgPaths from '../imports/svg-vov9aepcmw';

interface Profile {
  id: string;
  name: string;
  description: string;
}

interface ProfileDropdownProps {
  profiles: Profile[];
  selectedProfileId: string;
  onProfileSelect: (profileId: string) => void;
  onAddProfile: () => void;
}

export function ProfileDropdown({
  profiles,
  selectedProfileId,
  onProfileSelect,
  onAddProfile
}: ProfileDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  const selectedProfile = profiles.find(p => p.id === selectedProfileId);

  const handleProfileClick = (profileId: string) => {
    onProfileSelect(profileId);
    setIsOpen(false);
  };

  const handleAddProfileClick = () => {
    onAddProfile();
    setIsOpen(false);
  };

  return (
    <div className="flex-1 relative">
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#3a3a3a] w-full h-[31.99px] rounded-md flex items-center justify-between px-[11.625px] text-left"
      >
        <span className="text-white text-[13.234px] font-normal leading-[30px]">
          {selectedProfile?.name || '지우'}
        </span>
        <div className="size-[11.99px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
            <path
              d={svgPaths.p1293b00}
              fill="rgba(255,255,255,0.25)"
            />
          </svg>
        </div>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown Content */}
          <div className="absolute top-full left-0 right-0 mt-1 bg-[#3a3a3a] rounded-md shadow-lg z-20 overflow-hidden">
            {/* Profile Options */}
            {profiles.map((profile) => (
              <button
                key={profile.id}
                onClick={() => handleProfileClick(profile.id)}
                className={`w-full px-[11.625px] py-2 text-left hover:bg-[#4a4a4a] transition-colors ${
                  profile.id === selectedProfileId ? 'bg-[#4a4a4a]' : ''
                }`}
              >
                <span className="text-white text-[13.234px] font-normal">
                  {profile.name}
                </span>
              </button>
            ))}
            
            {/* Add New Profile Option */}
            <button
              onClick={handleAddProfileClick}
              className="w-full px-[11.625px] py-2 text-left hover:bg-[#4a4a4a] transition-colors flex items-center gap-2"
            >
              <Plus size={14} className="text-[#ff9500]" />
              <span className="text-[#ff9500] text-[13.234px] font-normal">
                새 대화 프로필
              </span>
            </button>
          </div>
        </>
      )}
    </div>
  );
}
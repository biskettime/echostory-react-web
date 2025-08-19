/**
 * React Hook for Managing Chat Profiles
 * Provides easy access to user chat profiles in components
 */

import { useState, useEffect, useCallback } from 'react';
import { UserProfileManager, ChatProfile } from '../services/ai/userProfileManager';

export interface UseChatProfileReturn {
  profiles: ChatProfile[];
  activeProfile: ChatProfile | null;
  isLoading: boolean;
  error: string | null;
  
  // Actions
  createProfile: (nickname: string, info: string, avatar?: string) => ChatProfile;
  updateProfile: (profileId: string, updates: Partial<ChatProfile>) => boolean;
  deleteProfile: (profileId: string) => boolean;
  setActiveProfile: (profileId: string) => boolean;
  refreshProfiles: () => void;
  
  // Helpers
  getProfileById: (profileId: string) => ChatProfile | undefined;
  hasProfiles: () => boolean;
}

export function useChatProfile(): UseChatProfileReturn {
  const [profiles, setProfiles] = useState<ChatProfile[]>([]);
  const [activeProfile, setActiveProfileState] = useState<ChatProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load profiles on mount
  const loadProfiles = useCallback(() => {
    try {
      setIsLoading(true);
      const loadedProfiles = UserProfileManager.getAllProfiles();
      const active = UserProfileManager.getActiveProfile();
      
      setProfiles(loadedProfiles);
      setActiveProfileState(active);
      setError(null);
    } catch (err) {
      setError('Failed to load chat profiles');
      console.error('Error loading profiles:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadProfiles();
  }, [loadProfiles]);

  // Create new profile
  const createProfile = useCallback((nickname: string, info: string, avatar?: string): ChatProfile => {
    try {
      const newProfile = UserProfileManager.createProfile(nickname, info, avatar);
      loadProfiles(); // Reload to update state
      return newProfile;
    } catch (err) {
      setError('Failed to create profile');
      throw err;
    }
  }, [loadProfiles]);

  // Update existing profile
  const updateProfile = useCallback((profileId: string, updates: Partial<ChatProfile>): boolean => {
    try {
      const updated = UserProfileManager.updateProfile(profileId, updates);
      if (updated) {
        loadProfiles(); // Reload to update state
        return true;
      }
      return false;
    } catch (err) {
      setError('Failed to update profile');
      return false;
    }
  }, [loadProfiles]);

  // Delete profile
  const deleteProfile = useCallback((profileId: string): boolean => {
    try {
      const deleted = UserProfileManager.deleteProfile(profileId);
      if (deleted) {
        loadProfiles(); // Reload to update state
        return true;
      }
      return false;
    } catch (err) {
      setError('Failed to delete profile');
      return false;
    }
  }, [loadProfiles]);

  // Set active profile
  const setActiveProfile = useCallback((profileId: string): boolean => {
    try {
      const success = UserProfileManager.setActiveProfile(profileId);
      if (success) {
        loadProfiles(); // Reload to update state
        return true;
      }
      return false;
    } catch (err) {
      setError('Failed to set active profile');
      return false;
    }
  }, [loadProfiles]);

  // Get profile by ID
  const getProfileById = useCallback((profileId: string): ChatProfile | undefined => {
    return profiles.find(p => p.id === profileId);
  }, [profiles]);

  // Check if user has profiles
  const hasProfiles = useCallback((): boolean => {
    return profiles.length > 0 && profiles.some(p => p.id !== 'default');
  }, [profiles]);

  // Refresh profiles
  const refreshProfiles = useCallback(() => {
    loadProfiles();
  }, [loadProfiles]);

  return {
    profiles,
    activeProfile,
    isLoading,
    error,
    createProfile,
    updateProfile,
    deleteProfile,
    setActiveProfile,
    refreshProfiles,
    getProfileById,
    hasProfiles,
  };
}

/**
 * Hook to get formatted user context for AI
 */
export function useAIUserContext() {
  const { activeProfile } = useChatProfile();
  
  return useCallback(() => {
    if (!activeProfile) {
      return {
        nickname: 'User',
        userInfo: '',
        profileId: undefined,
      };
    }
    
    return {
      nickname: activeProfile.nickname,
      userInfo: activeProfile.info,
      profileId: activeProfile.id,
    };
  }, [activeProfile]);
}
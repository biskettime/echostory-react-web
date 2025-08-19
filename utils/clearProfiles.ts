// Utility to clear profiles and force recreation
export function clearProfiles() {
  console.log('🧹 Clearing all profiles to force recreation with correct gender');
  localStorage.removeItem('chatProfiles');
  localStorage.removeItem('selectedProfileId');
  console.log('✅ Profiles cleared. They will be recreated with correct gender on next load.');
}

// Force clear profiles to apply gender fixes
// This ensures the profiles are recreated with correct gender assignment
if (typeof window !== 'undefined') {
  // Always clear on load to ensure correct profiles
  clearProfiles();
  console.log('🔄 Profiles cleared on app load to ensure correct gender assignment');
}
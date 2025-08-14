import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Badge } from './ui/badge';
import { Sparkles, User, Heart } from 'lucide-react';

interface NicknameModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (nickname: string) => void;
}

export function NicknameModal({ isOpen, onClose, onConfirm }: NicknameModalProps) {
  const [nickname, setNickname] = useState('');
  const [selectedSuggestion, setSelectedSuggestion] = useState('');

  const suggestions = [
    'Sweetie', 'Darling', 'Sunshine', 'Angel',
    'Cutie', 'Honey', 'Star', 'Love'
  ];

  if (!isOpen) return null;

  const handleConfirm = () => {
    const finalNickname = nickname.trim() || selectedSuggestion;
    if (finalNickname) {
      onConfirm(finalNickname);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSelectedSuggestion(suggestion);
    setNickname(suggestion);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleConfirm();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      
      {/* Modal */}
      <div className="relative bg-card/95 backdrop-blur-md rounded-2xl p-6 mx-4 w-full max-w-sm border border-border/50 shadow-2xl">
        <div className="space-y-6">
          {/* Header */}
          <div className="text-center space-y-3">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto">
              <User className="text-white" size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold mb-1">Set Nickname</h2>
              <p className="text-sm text-muted-foreground">
                What would you like the character to call you?
              </p>
            </div>
          </div>

          {/* Nickname Input */}
          <div className="space-y-3">
            <Label htmlFor="nickname" className="text-sm font-medium">
              Enter Nickname
            </Label>
            <div className="relative">
              <Input
                id="nickname"
                type="text"
                value={nickname}
                onChange={(e) => {
                  setNickname(e.target.value.slice(0, 20));
                  setSelectedSuggestion('');
                }}
                onKeyDown={handleKeyDown}
                placeholder="Enter your preferred nickname"
                className="text-center py-3 rounded-xl border-border/50 bg-background/50"
                maxLength={20}
                autoFocus
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                <Badge variant="secondary" className="text-xs">
                  {nickname.length}/20
                </Badge>
              </div>
            </div>
          </div>

          {/* Suggestions */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Sparkles size={14} className="text-yellow-500" />
              <Label className="text-sm font-medium">Suggested Nicknames</Label>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className={`p-3 rounded-xl text-sm transition-all border ${
                    selectedSuggestion === suggestion
                      ? 'bg-primary text-primary-foreground border-primary shadow-md'
                      : 'bg-background/50 hover:bg-accent border-border/50'
                  }`}
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>

          {/* Preview */}
          {(nickname || selectedSuggestion) && (
            <div className="bg-muted/50 rounded-xl p-4 space-y-2">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Heart size={14} className="text-red-500" />
                <span>Preview</span>
              </div>
              <p className="text-sm">
                "Hello <span className="font-medium text-primary">{nickname || selectedSuggestion}</span>! Nice to meet you~ 💕"
              </p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex space-x-3">
            <Button 
              variant="outline" 
              onClick={onClose}
              className="flex-1 py-3 rounded-xl"
            >
              Cancel
            </Button>
            <Button 
              onClick={handleConfirm}
              disabled={!nickname.trim() && !selectedSuggestion}
              className="flex-1 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg"
            >
              Start Chat
            </Button>
          </div>

          {/* Footer */}
          <div className="text-center">
            <p className="text-xs text-muted-foreground">
              You can change your nickname anytime in settings
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export interface Message {
  id: string;
  text?: string;
  imageUrl?: string;
  sender: 'me' | 'partner' | 'system';
  timestamp: number;
  type: 'text' | 'image';
}

export interface UserState {
  isAuthenticated: boolean;
  username: string;
}

export interface ImageGenerationConfig {
  prompt: string;
  isGenerating: boolean;
}
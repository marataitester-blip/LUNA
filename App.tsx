import React, { useState, useEffect, useRef } from 'react';
import { Send, Image as ImageIcon, Sparkles, LogOut } from 'lucide-react';
import LoginScreen from './components/LoginScreen';
import ChatMessage from './components/ChatMessage';
import ImageGenModal from './components/ImageGenModal';
import { Message } from './types';
import { generateImageUrl } from './services/imageService';

// Mock initial data to simulate history
const INITIAL_MESSAGES: Message[] = [
  {
    id: '1',
    sender: 'system',
    text: 'Encrypted Channel initialized.',
    timestamp: Date.now() - 100000,
    type: 'text'
  },
  {
    id: '2',
    sender: 'partner',
    text: 'The stars look different tonight.',
    timestamp: Date.now() - 50000,
    type: 'text'
  }
];

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Load auth state from local storage for persistence
  useEffect(() => {
    const storedAuth = localStorage.getItem('luna_auth');
    if (storedAuth === 'true') {
      setIsAuthenticated(true);
    }
    
    // Load messages or set initial
    const storedMessages = localStorage.getItem('luna_messages');
    if (storedMessages) {
      setMessages(JSON.parse(storedMessages));
    } else {
      setMessages(INITIAL_MESSAGES);
    }
  }, []);

  // Save messages on update
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem('luna_messages', JSON.stringify(messages));
      scrollToBottom();
    }
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem('luna_auth', 'true');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('luna_auth');
  };

  const sendMessage = (text: string, type: 'text' | 'image' = 'text', imageUrl?: string) => {
    if (!text.trim() && !imageUrl) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      imageUrl,
      sender: 'me',
      timestamp: Date.now(),
      type
    };

    setMessages(prev => [...prev, newMessage]);
    setInputValue('');
  };

  const handleImageGeneration = (prompt: string) => {
    // 1. Send the prompt as a text message first (optional, adds context)
    // sendMessage(`Generating vision: "${prompt}"`, 'text');

    // 2. Generate Image URL
    const url = generateImageUrl(prompt);
    
    // 3. Add Image Message
    const imageMessage: Message = {
      id: (Date.now() + 1).toString(),
      sender: 'me', // Or 'system' / 'ai'
      text: prompt, // Use prompt as caption
      imageUrl: url,
      timestamp: Date.now(),
      type: 'image'
    };

    setMessages(prev => [...prev, imageMessage]);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(inputValue);
    }
  };

  if (!isAuthenticated) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  return (
    <div className="flex flex-col h-screen bg-luna-black text-luna-gold overflow-hidden">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-luna-gold/20 bg-luna-black/90 backdrop-blur-md z-10 sticky top-0">
        <div className="flex items-center space-x-3">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
          <h1 className="font-serif text-xl tracking-widest text-luna-gold">LUNA</h1>
        </div>
        <button onClick={handleLogout} className="opacity-50 hover:opacity-100 transition-opacity">
          <LogOut size={18} />
        </button>
      </header>

      {/* Messages Area */}
      <main className="flex-1 overflow-y-auto p-4 space-y-4 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]">
        {messages.map((msg) => (
          <ChatMessage key={msg.id} message={msg} />
        ))}
        <div ref={messagesEndRef} />
      </main>

      {/* Input Area */}
      <footer className="p-4 border-t border-luna-gold/20 bg-luna-black/90 backdrop-blur-md">
        <div className="relative flex items-end space-x-2 max-w-4xl mx-auto">
          <button 
            onClick={() => setIsImageModalOpen(true)}
            className="p-3 mb-1 text-luna-gold/60 hover:text-luna-gold hover:bg-luna-gold/10 rounded-full transition-all duration-300"
          >
            <Sparkles size={20} />
          </button>
          
          <div className="flex-1 relative group">
             <textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Whisper something..."
              className="w-full bg-luna-slate/50 text-luna-pale placeholder-luna-gold/20 border border-luna-gold/20 rounded-2xl py-3 px-4 focus:outline-none focus:border-luna-gold/50 focus:bg-luna-slate/80 transition-all resize-none min-h-[48px] max-h-[120px] font-sans text-sm"
              rows={1}
            />
            <div className="absolute inset-0 rounded-2xl shadow-[0_0_15px_rgba(212,175,55,0.05)] pointer-events-none group-focus-within:shadow-[0_0_20px_rgba(212,175,55,0.1)] transition-shadow duration-300"></div>
          </div>

          <button 
            onClick={() => sendMessage(inputValue)}
            disabled={!inputValue.trim()}
            className="p-3 mb-1 bg-luna-gold/10 text-luna-gold border border-luna-gold/30 rounded-full hover:bg-luna-gold hover:text-black transition-all duration-300 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-luna-gold"
          >
            <Send size={18} />
          </button>
        </div>
      </footer>

      <ImageGenModal 
        isOpen={isImageModalOpen} 
        onClose={() => setIsImageModalOpen(false)}
        onGenerate={handleImageGeneration}
      />
    </div>
  );
};

export default App;
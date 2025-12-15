import React, { useState } from 'react';
import { X, Sparkles } from 'lucide-react';

interface ImageGenModalProps {
  isOpen: boolean;
  onClose: () => void;
  onGenerate: (prompt: string) => void;
}

const ImageGenModal: React.FC<ImageGenModalProps> = ({ isOpen, onClose, onGenerate }) => {
  const [prompt, setPrompt] = useState('');

  if (!isOpen) return null;

  const handleGenerate = () => {
    if (prompt.trim()) {
      onGenerate(prompt);
      setPrompt('');
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-fade-in">
      <div className="w-full max-w-sm bg-luna-slate border border-luna-gold/30 p-6 rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.8)] relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-luna-gold/50 hover:text-luna-gold transition-colors"
        >
          <X size={20} />
        </button>

        <div className="text-center mb-6">
          <Sparkles className="w-8 h-8 text-luna-gold mx-auto mb-2 opacity-80" />
          <h2 className="font-serif text-xl text-luna-gold tracking-wide">Manifest Vision</h2>
          <p className="text-xs text-gray-500 mt-1 font-sans">Describe the scene you wish to see.</p>
        </div>

        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="A golden temple in the void..."
          className="w-full h-24 bg-black/50 border border-luna-gold/20 rounded-lg p-3 text-luna-pale text-sm focus:outline-none focus:border-luna-gold/60 transition-colors resize-none mb-6 font-sans"
        />

        <button
          onClick={handleGenerate}
          disabled={!prompt.trim()}
          className="w-full py-3 bg-luna-gold/10 border border-luna-gold/40 text-luna-gold hover:bg-luna-gold hover:text-black transition-all duration-300 rounded-lg text-xs uppercase tracking-widest font-bold disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Generate
        </button>
      </div>
    </div>
  );
};

export default ImageGenModal;
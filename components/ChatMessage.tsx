import React from 'react';
import { Message } from '../types';

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isMe = message.sender === 'me';
  const isSystem = message.sender === 'system';

  if (isSystem) {
    return (
      <div className="flex justify-center my-4 animate-fade-in">
        <span className="text-[10px] uppercase tracking-widest text-luna-gold/40 border-b border-luna-gold/10 pb-1">
          {message.text}
        </span>
      </div>
    );
  }

  return (
    <div className={`flex w-full mb-6 ${isMe ? 'justify-end' : 'justify-start'} animate-fade-in`}>
      <div 
        className={`max-w-[80%] relative p-4 rounded-2xl border backdrop-blur-sm
          ${isMe 
            ? 'border-luna-gold/40 bg-luna-gold/5 text-luna-pale rounded-br-sm' 
            : 'border-gray-800 bg-gray-900/40 text-gray-300 rounded-bl-sm'
          }
        `}
      >
        {message.type === 'image' && message.imageUrl ? (
          <div className="mb-2 overflow-hidden rounded-lg border border-luna-gold/20">
            <img 
              src={message.imageUrl} 
              alt="Generated content" 
              className="w-full h-auto object-cover max-h-64"
              loading="lazy"
            />
          </div>
        ) : (
          <p className="font-sans text-sm leading-relaxed whitespace-pre-wrap">{message.text}</p>
        )}
        
        <span className="text-[9px] opacity-40 mt-2 block text-right font-serif tracking-wide">
          {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>

        {/* Decorative Elements */}
        <div className={`absolute w-1 h-1 rounded-full top-3 ${isMe ? 'bg-luna-gold right-[-6px]' : 'bg-gray-600 left-[-6px]'}`}></div>
      </div>
    </div>
  );
};

export default ChatMessage;
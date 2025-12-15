import React, { useState } from 'react';

interface LoginScreenProps {
  onLogin: () => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [isFading, setIsFading] = useState(false);

  const HARDCODED_PASSWORD = 'LUNA'; // Simplified for demo as requested

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === HARDCODED_PASSWORD) {
      setIsFading(true);
      setTimeout(onLogin, 1000); // Allow fade out animation
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div className={`fixed inset-0 flex flex-col items-center justify-center bg-luna-black transition-opacity duration-1000 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
      <div className="w-full max-w-md p-8 animate-fade-in text-center">
        {/* Logo / Symbol */}
        <div className="mb-12 relative inline-block">
          <div className="w-24 h-24 rounded-full border border-luna-gold shadow-[0_0_15px_rgba(212,175,55,0.3)] flex items-center justify-center bg-black">
             <span className="font-serif text-4xl italic text-luna-gold">L</span>
          </div>
          {/* Orbital Ring */}
          <div className="absolute top-0 left-0 w-24 h-24 rounded-full border-t border-luna-gold animate-spin" style={{ animationDuration: '4s' }}></div>
        </div>

        <h1 className="font-serif text-3xl mb-2 text-luna-gold tracking-widest">L U N A</h1>
        <p className="text-luna-pale text-opacity-60 text-xs tracking-[0.2em] mb-10 font-sans uppercase">
          Heritage of Aura
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-6">
          <div className="relative group w-full max-w-[240px]">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-transparent border-b border-luna-gold/30 py-2 text-center text-luna-gold placeholder-luna-gold/20 focus:outline-none focus:border-luna-gold transition-colors font-serif tracking-widest"
              placeholder="ENTER KEY"
              autoFocus
            />
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-luna-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          </div>

          <button
            type="submit"
            className="mt-4 px-8 py-2 border border-luna-gold/40 text-luna-gold/80 hover:bg-luna-gold hover:text-luna-black transition-all duration-300 rounded-full text-xs uppercase tracking-widest"
          >
            Enter Sanctuary
          </button>
        </form>

        {error && (
          <p className="mt-8 text-red-400 text-xs tracking-widest animate-pulse">
            ACCESS DENIED
          </p>
        )}
      </div>
      
      <div className="absolute bottom-8 text-[10px] text-luna-gold/20 tracking-widest">
        SECURE CONNECTION ESTABLISHED
      </div>
    </div>
  );
};

export default LoginScreen;
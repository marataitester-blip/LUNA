export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-luna-black relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
      
      {/* Glow Effect */}
      <div className="absolute w-64 h-64 bg-luna-gold/10 rounded-full blur-[100px] animate-pulse"></div>

      <div className="z-10 text-center space-y-6 animate-fade-in">
        <div className="relative inline-block">
          <div className="w-20 h-20 border border-luna-gold rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.2)]">
            <span className="font-serif text-3xl text-luna-gold italic">L</span>
          </div>
        </div>
        
        <h1 className="font-serif text-2xl tracking-[0.3em] text-luna-gold uppercase">
          Luna
        </h1>
        
        <p className="font-sans text-xs tracking-widest text-luna-pale/50 uppercase">
          System Initialized
        </p>

        <div className="mt-8 flex justify-center">
          <div className="h-[1px] w-16 bg-luna-gold/50"></div>
        </div>
      </div>
    </main>
  );
}
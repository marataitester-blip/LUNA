export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-stardust z-0 pointer-events-none"></div>
      
      {/* Glow Effect Center */}
      <div className="absolute w-96 h-96 bg-aura-gold/5 rounded-full blur-[100px] animate-pulse-slow"></div>

      <div className="z-10 text-center space-y-8 animate-fade-in px-4">
        {/* Logo Symbol */}
        <div className="relative inline-block group cursor-default">
          <div className="w-24 h-24 border border-aura-gold/30 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.1)] group-hover:shadow-[0_0_45px_rgba(212,175,55,0.2)] transition-shadow duration-700 bg-aura-black/50 backdrop-blur-sm">
            <span className="font-serif text-4xl text-aura-gold italic ml-1">L</span>
          </div>
          {/* Thin Orbit Ring */}
          <div className="absolute -inset-2 border border-aura-gold/10 rounded-full scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-1000"></div>
        </div>
        
        <div className="space-y-2">
          <h1 className="font-serif text-3xl tracking-[0.4em] text-aura-gold uppercase text-glow">
            Luna
          </h1>
          <p className="font-sans text-[10px] tracking-[0.3em] text-aura-gold-dim/60 uppercase">
            Heritage of Aura
          </p>
        </div>

        <div className="pt-8">
           <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-aura-gold/40 to-transparent mx-auto"></div>
           <p className="mt-4 font-sans text-xs text-aura-gray/60 tracking-widest">AWAITING AUTHORIZATION</p>
        </div>
      </div>
    </main>
  );
}
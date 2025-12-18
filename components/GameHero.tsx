
import React from 'react';

const GameHero: React.FC = () => {
  return (
    <section id="game" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-green-600/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 z-10">
          <div className="inline-block px-4 py-1 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 font-bold text-xs tracking-widest uppercase">
            FLAGSHIP TITLE • IN DEVELOPMENT
          </div>
          <h1 className="text-6xl lg:text-8xl font-orbitron font-black leading-tight">
            THE <span className="text-green-500 neon-text">IMPOSSIBLE</span> SOCCER GAME
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-lg leading-relaxed">
            Physics are a suggestion. The goal moves. The ball weighs 500 tons—or nothing. Welcome to the world's most frustrating and addictive sports simulation.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-slate-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-500 hover:text-white transition-all transform hover:-translate-y-1">
              Add to Wishlist
            </button>
            <button className="glass px-8 py-4 rounded-xl font-bold text-lg hover:border-green-500 transition-all">
              Watch Devlog
            </button>
          </div>
        </div>

        <div className="relative z-10">
          <div className="relative w-full aspect-square float-animation">
            {/* Mock Game UI / Visual */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=1200" 
                alt="Impossible Soccer Scene" 
                className="w-full h-full object-cover grayscale-[0.2] brightness-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 glass rounded-2xl p-4 flex flex-col items-center justify-center border-green-500/50 border animate-pulse">
              <span className="text-green-400 font-bold text-2xl font-orbitron">99%</span>
              <span className="text-[10px] uppercase text-slate-400 text-center">Difficulty Rating</span>
            </div>
            <div className="absolute -bottom-10 -left-6 glass px-6 py-4 rounded-2xl border border-white/10 flex items-center space-x-4">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
              <span className="font-bold text-sm">DEVELOPMENT PHASE: ALPHA 0.4.2</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameHero;


import React from 'react';
import Navbar from './components/Navbar.tsx';
import GameHero from './components/GameHero.tsx';
import DevInsights from './components/DevInsights.tsx';
import Roadmap from './components/Roadmap.tsx';
import Footer from './components/Footer.tsx';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 selection:bg-green-500 selection:text-slate-900">
      <Navbar />
      
      <main>
        {/* Home Section */}
        <section id="home" className="relative">
          <GameHero />
        </section>

        {/* Feature Grid / Game Stats */}
        <section className="py-24 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4">
              <div className="text-5xl font-orbitron font-black text-green-500">5M+</div>
              <div className="text-slate-400 uppercase tracking-widest text-xs font-bold">Physics calculations per sec</div>
            </div>
            <div className="space-y-4 border-x border-white/5">
              <div className="text-5xl font-orbitron font-black text-green-500">0%</div>
              <div className="text-slate-400 uppercase tracking-widest text-xs font-bold">Win rate in test alpha</div>
            </div>
            <div className="space-y-4">
              <div className="text-5xl font-orbitron font-black text-green-500">99.9</div>
              <div className="text-slate-400 uppercase tracking-widest text-xs font-bold">Rage quit probability</div>
            </div>
          </div>
        </section>

        <DevInsights />
        
        <Roadmap />

        {/* Call to Action */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-green-500 opacity-[0.03]"></div>
          <div className="max-w-4xl mx-auto px-6 text-center z-10 relative">
            <h2 className="text-4xl md:text-6xl font-orbitron font-black mb-8">READY TO FACE THE <span className="text-green-500">IMPOSSIBLE?</span></h2>
            <p className="text-slate-400 text-lg mb-12">Join our closed alpha today and be the first to fail miserably on the pitch.</p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <input type="email" placeholder="Enter your email" className="glass px-6 py-4 rounded-xl border border-white/10 flex-1 max-w-sm focus:outline-none focus:border-green-500" />
              <button className="bg-green-500 hover:bg-green-400 text-slate-900 px-10 py-4 rounded-xl font-black text-lg transition-all transform hover:scale-105 shadow-xl shadow-green-500/30">
                GET EARLY ACCESS
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;

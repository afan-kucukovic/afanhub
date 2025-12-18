
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center font-orbitron font-black text-xl text-slate-900 shadow-lg shadow-green-500/50">
            A
          </div>
          <span className="font-orbitron text-xl font-bold tracking-tighter">AFANS <span className="text-green-500">HUB</span></span>
        </div>
        
        <div className="hidden md:flex space-x-8 text-sm font-semibold uppercase tracking-widest text-slate-400">
          <a href="#home" className="hover:text-green-400 transition-colors">Home</a>
          <a href="#game" className="hover:text-green-400 transition-colors">Impossible Soccer</a>
          <a href="#lab" className="hover:text-green-400 transition-colors">AI Lab</a>
          <a href="#roadmap" className="hover:text-green-400 transition-colors">Roadmap</a>
        </div>

        <button className="bg-green-500 hover:bg-green-400 text-slate-900 px-6 py-2 rounded-full font-bold text-sm transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-green-500/30">
          JOIN COMMUNITY
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

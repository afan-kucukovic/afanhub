
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/10 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center font-orbitron font-bold text-slate-900">A</div>
          <span className="font-orbitron font-bold tracking-tighter">AFANS <span className="text-green-500">HUB</span></span>
        </div>
        
        <p className="text-slate-500 text-sm">
          &copy; 2024 Afans Gaming Studios. All Rights Reserved. Impossible is just a start.
        </p>

        <div className="flex space-x-6">
          {['Twitter', 'Discord', 'Steam', 'YouTube'].map((social) => (
            <a key={social} href="#" className="text-slate-400 hover:text-white transition-colors text-sm uppercase font-bold tracking-widest">
              {social}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import React from 'react';

const Roadmap: React.FC = () => {
  const steps = [
    { phase: "Phase 1", title: "Chaotic Physics", status: "Completed", desc: "Base engine development with multi-gravity support." },
    { phase: "Phase 2", title: "The Impossible AI", status: "In Progress", desc: "Goal-keeping AI that calculates trajectories with 99% accuracy." },
    { phase: "Phase 3", title: "Afans Multiplayer", status: "Upcoming", desc: "Global ranked ladder for the bravest soccer stars." },
    { phase: "Phase 4", title: "Full Afans Launch", status: "Q4 2025", desc: "Expansion into VR and mobile platforms." },
  ];

  return (
    <section id="roadmap" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-orbitron font-bold text-center mb-16">DEVELOPMENT <span className="text-green-500">ROADMAP</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="glass p-8 rounded-3xl border border-white/10 hover:border-green-500/50 transition-all group">
              <div className="text-green-500 font-bold text-xs uppercase tracking-widest mb-4">{step.phase}</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-green-400 transition-colors">{step.title}</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">{step.desc}</p>
              <div className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                step.status === 'Completed' ? 'bg-green-500/20 text-green-400' : 
                step.status === 'In Progress' ? 'bg-blue-500/20 text-blue-400' : 'bg-slate-700 text-slate-400'
              }`}>
                {step.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;

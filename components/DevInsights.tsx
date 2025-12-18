
import React, { useState, useRef, useEffect } from 'react';
import { getGameDesignAdvice } from '../services/geminiService.ts';
import { ChatMessage } from '../types.ts';

const DevInsights: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: "Welcome to the Afans Dev Lab. I'm your AI strategist. Ask me anything about 'The Impossible Soccer Game' mechanics or suggest a wild feature!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    const response = await getGameDesignAdvice(userMsg);
    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    setIsLoading(false);
  };

  return (
    <section id="lab" className="py-24 bg-slate-950">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-orbitron font-bold mb-4">AI <span className="text-green-500">DEV LAB</span></h2>
          <p className="text-slate-400">Co-design the game with our internal Afans AI model.</p>
        </div>

        <div className="glass rounded-3xl overflow-hidden flex flex-col h-[500px] border border-white/10">
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 custom-scrollbar">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-2xl p-4 ${
                  msg.role === 'user' 
                  ? 'bg-green-600 text-white rounded-tr-none' 
                  : 'bg-slate-800 text-slate-100 rounded-tl-none border border-white/5'
                }`}>
                  <p className="text-sm leading-relaxed">{msg.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-800 rounded-2xl p-4 rounded-tl-none border border-white/5 flex space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce delay-75"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="p-4 bg-slate-900/50 border-t border-white/10 flex space-x-4">
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Suggest a mechanic (e.g., 'What if the goal shrinks?')" 
              className="flex-1 bg-slate-800 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-green-500 transition-colors"
            />
            <button 
              disabled={isLoading}
              type="submit" 
              className="bg-green-500 hover:bg-green-400 disabled:opacity-50 text-slate-900 px-6 py-3 rounded-xl font-bold transition-all shadow-lg shadow-green-500/20"
            >
              SEND
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default DevInsights;

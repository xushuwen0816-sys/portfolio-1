
import React, { useState } from 'react';
import { SectionProps } from '../types';
import { Terminal, Heart, MoveRight, X, Copy, ExternalLink, Lock } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export const PromptMuseum: React.FC<SectionProps> = ({ t, lang }) => {
  const [activeTab, setActiveTab] = useState<'A' | 'B'>('A');
  // Store the full item object instead of just a boolean
  const [activeItem, setActiveItem] = useState<typeof t.promptMuseum.itemsA[0] | null>(null);

  const items = activeTab === 'A' ? t.promptMuseum.itemsA : t.promptMuseum.itemsB;

  const handleItemClick = (item: typeof items[0]) => {
    if (item.fullContent) {
      setActiveItem(item);
    }
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      // Optional: Add toast notification logic here if needed
      // For now, we rely on the user noticing the action or we could change the icon temporarily,
      // but keeping it simple as requested.
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <section id="prompt-museum" className="pt-16 pb-6 px-4 border-t border-slate-100 dark:border-white/5 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <ScrollReveal 
            as="h2"
            containerClassName="text-3xl md:text-4xl font-bold tracking-tight text-slate-800 dark:text-slate-100 uppercase mb-6"
          >
            {`// ${t.promptMuseum.title}`}
          </ScrollReveal>
        </div>

        {/* Carousel Container */}
        <div className="relative">
            {/* Subtle accent blob based on tab */}
            <div className={`absolute top-0 right-0 w-96 h-96 blur-[100px] rounded-full opacity-10 pointer-events-none transition-colors duration-500 ${activeTab === 'A' ? 'bg-indigo-400' : 'bg-orange-500'}`}></div>

            <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory px-4 md:px-0 scrollbar-hide pt-4">
                {items.map((item, index) => {
                    const hasContent = !!item.fullContent;
                    
                    if (!hasContent) {
                        // "Coming Soon" / Locked Card Style
                        return (
                            <div 
                                key={index}
                                className="
                                    glass-panel min-w-[260px] md:min-w-[360px] max-w-[360px] rounded-xl p-6 flex-shrink-0 snap-center
                                    transition-all duration-300 transform
                                    hover:scale-[1.02] hover:shadow-xl
                                    border border-white/50 dark:border-white/10 relative overflow-hidden group
                                    grayscale opacity-80 hover:grayscale-0 hover:opacity-100 cursor-not-allowed
                                    flex flex-col justify-center items-center
                                "
                            >
                                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-slate-500/10 to-transparent rounded-bl-full pointer-events-none"></div>
                                
                                <div className="p-3 rounded-full bg-slate-50 dark:bg-slate-800 text-slate-400 border border-slate-100 dark:border-slate-700 mb-6">
                                    <Lock size={24} />
                                </div>

                                <div className="flex flex-col justify-center items-center">
                                    <span className="text-slate-400 dark:text-slate-600 font-medium tracking-widest text-xs uppercase mb-3">
                                        {t.aiLab.comingSoon || "Coming Soon"}
                                    </span>
                                    <div className="w-12 h-1 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                                        <div className="h-full bg-slate-300 dark:bg-slate-600 w-1/2 animate-[shimmer_1.5s_infinite]"></div>
                                    </div>
                                </div>
                            </div>
                        );
                    }

                    // Standard Card Style
                    return (
                        <div 
                            key={index} 
                            onClick={() => handleItemClick(item)}
                            className={`
                                glass-panel min-w-[260px] md:min-w-[360px] max-w-[360px] rounded-xl p-6 flex-shrink-0 snap-center
                                transition-all duration-300 hover:translate-y-[-4px] hover:shadow-lg cursor-pointer
                                border border-white/50 dark:border-white/10 relative overflow-hidden group
                                flex flex-col justify-between gap+3
                            `}
                        >
                            <h3 className="text-lg font-semibold mb-4 text-slate-800 dark:text-slate-100">
                                {item.title}
                            </h3>

                            {activeTab === 'A' ? (
                                <div className="bg-[#0f172a] text-slate-300 p-4 rounded-lg font-mono text-xs overflow-x-auto shadow-inner border border-slate-700/50 h-32 overflow-hidden relative flex-1 flex flex-col justify-center mb-[-1rem]">
                                    <p className="whitespace-pre-wrap leading-relaxed opacity-90">{item.summary}</p>
                                    <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-[#0f172a] to-transparent"></div>
                                </div>
                            ) : (
                                <div className="bg-orange-50 dark:bg-orange-900/10 p-6 rounded-lg border border-orange-100 dark:border-orange-500/10 h-32 relative overflow-hidden flex items-center justify-center text-center italic text-slate-600 dark:text-slate-300 flex-1 mb-[-1rem]">
                                    <p className="font-serif text-sm leading-relaxed px-4 opacity-90">{item.summary}</p>
                                </div>
                            )}
                            
                            <div className="mt-4 flex justify-end items-center opacity-0 group-hover:opacity-100 transition-opacity h-6 mb-[-0.5rem]">
                                <MoveRight className="text-slate-400 w-4 h-4" />
                            </div>
                        </div>
                    );
                })}
                
                {/* Empty spacer for end of scroll */}
                <div className="min-w-[20px] md:hidden"></div>
            </div>
            
            {/* Scroll hint on mobile */}
            <div className="md:hidden text-center text-xs text-slate-400 animate-pulse mt-2">
                Scroll for more →
            </div>
        </div>
      </div>

      {/* Modal for Prompt Content */}
      {activeItem && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setActiveItem(null)}></div>
          <div className="bg-white dark:bg-slate-900 rounded-2xl w-full max-w-3xl max-h-[85vh] overflow-hidden relative z-10 shadow-2xl border border-white/20 animate-fade-in-up flex flex-col">
            <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur z-20 p-6 border-b border-slate-100 dark:border-white/10 flex justify-between items-center flex-shrink-0">
               <div className="flex items-center gap-3">
                 <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-500">
                    <Terminal size={18} />
                 </div>
                 <div>
                    <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                        {activeItem.title}
                    </h3>
                    <p className="text-xs text-slate-400">
                      {activeItem.type}
                    </p>
                 </div>
               </div>
               <div className="flex items-center gap-2">
                 {/* Live Demo Button */}
                 {activeItem.liveDemoUrl && (
                   <a 
                     href={activeItem.liveDemoUrl} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-medium transition-colors"
                   >
                     <ExternalLink size={14} />
                     <span>Live Demo</span>
                   </a>
                 )}

                 {/* Copy Button */}
                 <button 
                   onClick={() => activeItem.fullContent && copyToClipboard(activeItem.fullContent)}
                   className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-600 dark:text-slate-300 text-xs font-medium transition-colors"
                   title="Copy Prompt"
                 >
                   <Copy size={14} />
                   <span className="hidden sm:inline">Copy</span>
                 </button>

                 <button 
                    onClick={() => setActiveItem(null)}
                    className="p-2 text-slate-400 hover:text-slate-800 dark:hover:text-white transition-colors rounded-full hover:bg-slate-100 dark:hover:bg-white/5 ml-2"
                  >
                    <X size={24} />
                  </button>
               </div>
            </div>
            
            <div className="p-0 overflow-y-auto custom-scrollbar bg-slate-50 dark:bg-[#0B0F19]">
               <div className="p-8 font-mono text-sm leading-relaxed text-slate-600 dark:text-slate-400 space-y-6">
                  {/* Render the full content properly */}
                  <div className="whitespace-pre-wrap">
                      {activeItem.fullContent}
                  </div>
               </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

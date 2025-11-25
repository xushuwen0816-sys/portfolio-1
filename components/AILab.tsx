
import React from 'react';
import { SectionProps } from '../types';
import { ArrowRight, Sparkles, Box, Lock } from 'lucide-react';
import { DREAMY_DRIFT_URL } from '../constants';

export const AILab: React.FC<SectionProps> = ({ t }) => {
  // Define items with a discriminated union structure
  const items = [
    { 
      type: 'active' as const, 
      id: 1,
      title: t.aiLab.cardActive.title,
      tag: t.aiLab.cardActive.tag,
      desc: t.aiLab.cardActive.desc,
      action: t.aiLab.cardActive.action
    },
    { type: 'placeholder' as const, id: 2 },
    { type: 'placeholder' as const, id: 3 },
    { type: 'placeholder' as const, id: 4 },
    { type: 'placeholder' as const, id: 5 },
    { type: 'placeholder' as const, id: 6 },
  ];

  const handleCardClick = (item: typeof items[0]) => {
    if (item.type === 'active' && item.id === 1) {
      window.open(DREAMY_DRIFT_URL, '_blank');
    }
  };

  return (
    <section id="ai-lab" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Centered Header to match Prompt Museum */}
      <div className="text-center mb-10">
        <h2 className="text-xl font-bold tracking-tight text-slate-800 dark:text-slate-100 uppercase">
          // {t.aiLab.title}
        </h2>
      </div>

      {/* Uniform Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((item) => (
          <div 
            key={item.id} 
            onClick={() => handleCardClick(item)}
            className={`
              glass-panel relative overflow-hidden rounded-xl p-6 h-60 flex flex-col justify-between
              transition-all duration-300 ease-out transform
              hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/10 hover:border-orange-500/30
              group cursor-pointer
              ${item.type === 'placeholder' ? 'grayscale opacity-80 hover:grayscale-0 hover:opacity-100' : ''}
            `}
          >
            {/* Background Decor for tech feel */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-500/5 to-transparent rounded-bl-full pointer-events-none" />

            {item.type === 'active' ? (
              <>
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-2 rounded-lg bg-orange-50 dark:bg-orange-500/10 text-orange-500 border border-orange-100 dark:border-orange-500/20">
                       <Sparkles size={18} />
                    </div>
                    <span className="px-2 py-0.5 bg-orange-100 dark:bg-orange-500/20 text-orange-600 dark:text-orange-300 text-[10px] font-bold uppercase tracking-wider rounded border border-orange-200 dark:border-orange-500/30">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-slate-800 dark:text-slate-100 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3">
                    {item.desc}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-orange-600 dark:text-orange-400 mt-4 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                  {item.action}
                  <ArrowRight size={14} />
                </div>
              </>
            ) : (
              // Placeholder State - Uniform Size
              <>
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-400 border border-slate-100 dark:border-slate-700">
                      <Lock size={18} />
                  </div>
                </div>
                
                <div className="flex-1 flex flex-col justify-center items-center">
                  <span className="text-slate-400 dark:text-slate-600 font-medium tracking-widest text-xs uppercase mb-2">
                    {t.aiLab.comingSoon}
                  </span>
                  <div className="w-8 h-1 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                      <div className="h-full bg-slate-300 dark:bg-slate-600 w-1/2 animate-[shimmer_1.5s_infinite]"></div>
                  </div>
                </div>
                
                <div className="h-4"></div> {/* Spacer to match active card layout */}
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

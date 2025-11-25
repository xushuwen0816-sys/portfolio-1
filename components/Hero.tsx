import React from 'react';
import { SectionProps } from '../types';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC<SectionProps> = ({ t }) => {
  const scrollToLab = () => {
    const element = document.getElementById('ai-lab');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[60vh] flex flex-col justify-center items-center text-center px-4 overflow-hidden pt-28 pb-12">
      {/* Background ambient glow - Updated to Orange */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-orange-500/10 to-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl animate-fade-in-up">
        <h2 className="text-xs md:text-sm font-semibold tracking-[0.25em] uppercase mb-4 text-zen-primaryStart">
          {t.hero.role}
        </h2>
        
        {/* Font size reduced significantly for elegance */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight tracking-tight text-slate-800 dark:text-slate-100">
          {t.hero.headline.split(' x ')[0]}
          <span className="text-slate-300 dark:text-slate-600 font-light mx-2">×</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-zen-primaryStart to-zen-primaryEnd">
            {t.hero.headline.split(' x ')[1] || 'Healing Soul'}
          </span>
        </h1>
        
        <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 font-normal max-w-xl mx-auto leading-relaxed">
          {t.hero.subtext}
        </p>

        <div 
          onClick={scrollToLab}
          className="mt-12 animate-bounce opacity-40 hover:opacity-100 transition-opacity cursor-pointer p-2"
          role="button"
          aria-label="Scroll to content"
        >
          <ChevronDown className="w-5 h-5 mx-auto text-slate-400" />
        </div>
      </div>
    </section>
  );
};
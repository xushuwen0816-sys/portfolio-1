import React from 'react';
import { Translation, LangType } from '../types';
import { SunIcon, MoonIcon, GlobeIcon } from 'lucide-react';

interface HeaderProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  lang: LangType;
  toggleLang: () => void;
  t: Translation;
}

export const Header: React.FC<HeaderProps> = ({ theme, toggleTheme, lang, toggleLang, t }) => {
  return (
    <header className="sticky top-0 z-50 w-full glass-panel border-b border-white/20 dark:border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex-shrink-0 flex items-center gap-2">
          {/* Logo updated to Orange Gradient */}
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-zen-primaryStart to-zen-primaryEnd flex items-center justify-center text-white font-bold shadow-md shadow-orange-500/20">
            S
          </div>
          <span className="font-bold text-lg tracking-tight dark:text-white">Serena.</span>
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={toggleLang}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-xs font-semibold tracking-wide border border-transparent hover:border-black/5 dark:hover:border-white/10"
          >
            <GlobeIcon size={14} />
            <span>{lang === 'en' ? 'CN' : 'EN'}</span>
          </button>

          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? (
              <MoonIcon size={18} className="text-slate-600" />
            ) : (
              <SunIcon size={18} className="text-amber-300" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
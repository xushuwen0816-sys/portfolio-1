import React from 'react';
import { Translation } from '../types';
import { SunIcon, MoonIcon } from 'lucide-react';
import BubbleMenu from './BubbleMenu';

interface HeaderProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  t: Translation;
}

export const Header: React.FC<HeaderProps> = ({ theme, toggleTheme, t }) => {
  const menuItems = [
    {
      label: 'About',
      href: '#about-me',
      ariaLabel: 'About',
      rotation: -8,
      hoverStyles: { bgColor: '#3b82f6', textColor: '#ffffff' }
    },
    {
      label: 'AI Lab',
      href: '#ai-lab',
      ariaLabel: 'AI Lab',
      rotation: 8,
      hoverStyles: { bgColor: '#10b981', textColor: '#ffffff' }
    },
    {
      label: 'Studio',
      href: '#ataraxia-studio',
      ariaLabel: 'Studio',
      rotation: 8,
      hoverStyles: { bgColor: '#f59e0b', textColor: '#ffffff' }
    },
    {
      label: 'Prompt',
      href: '#prompt-museum',
      ariaLabel: 'Prompt',
      rotation: 8,
      hoverStyles: { bgColor: '#ef4444', textColor: '#ffffff' }
    },
    {
      label: 'Contact',
      href: '#contact',
      ariaLabel: 'Contact',
      rotation: -8,
      hoverStyles: { bgColor: '#8b5cf6', textColor: '#ffffff' }
    }
  ];

  const menuLogo = (
    <div className="flex flex-col gap-1 items-center justify-center">
      <div className="w-4 h-0.5 bg-current rounded-full" />
      <div className="w-4 h-0.5 bg-current rounded-full" />
    </div>
  );

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

          <BubbleMenu 
            items={menuItems} 
            logo={menuLogo}
            menuAriaLabel="Toggle navigation" 
            menuBg={theme === 'light' ? "#ffffff" : "#0f172a"}
            menuContentColor={theme === 'light' ? "#111111" : "#ffffff"}
            useFixedPosition={false} 
            animationEase="back.out(1.5)" 
            animationDuration={0.5} 
            staggerDelay={0.12} 
          />
        </div>
      </div>
    </header>
  );
};
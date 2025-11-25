
import React, { useState, useEffect } from 'react';
import { Translations } from './constants';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AILab } from './components/AILab';
import { PromptMuseum } from './components/PromptMuseum';
import { AtaraxiaStudio } from './components/AtaraxiaStudio';
import { About } from './components/About';
import { Footer } from './components/Footer';

export default function App() {
  // --- State Management ---
  const [lang, setLang] = useState<'en' | 'zh'>('en');
  // Default to 'dark' as requested
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  // --- Effects ---
  useEffect(() => {
    // Only check system preference if we want to support auto-switching, 
    // but user requested default night mode. 
    // We can keep this logic to respect system changes if the user manually toggles later,
    // or just initialize based on preference. 
    // Since 'dark' is default in state, we ensure the class is added.
    const html = document.documentElement;
    if (theme === 'dark') {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, [theme]);

  // --- Handlers ---
  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');
  const toggleLang = () => setLang(prev => prev === 'en' ? 'zh' : 'en');
  
  const t = Translations[lang];

  return (
    <div className="min-h-screen transition-colors duration-500 font-sans antialiased">
      <Header 
        theme={theme} 
        toggleTheme={toggleTheme} 
        lang={lang} 
        toggleLang={toggleLang}
        t={t} 
      />
      
      <main className="flex flex-col w-full overflow-x-hidden">
        <Hero t={t} />
        <AILab t={t} />
        <PromptMuseum t={t} lang={lang} />
        <AtaraxiaStudio t={t} lang={lang} />
        <About t={t} lang={lang} />
      </main>

      <Footer t={t} />
    </div>
  );
}
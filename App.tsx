
import React, { useState, useEffect } from 'react';
import { Translations } from './constants';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Profile } from './components/Profile';
import { AILab } from './components/AILab';
import { PromptMuseum } from './components/PromptMuseum';
import { AtaraxiaStudio } from './components/AtaraxiaStudio';
import { About } from './components/About';
import { Footer } from './components/Footer';

export default function App() {
  // --- State Management ---
  const [lang, setLang] = useState<'en' | 'zh'>('en');
  // Default theme based on time: 7:00-18:00 is light, others are dark
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const hour = new Date().getHours();
    return (hour >= 7 && hour < 18) ? 'light' : 'dark';
  });

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
  
  const t = Translations[lang];

  return (
    <div className="min-h-screen transition-colors duration-500 font-sans antialiased">
      <Header 
        theme={theme} 
        toggleTheme={toggleTheme} 
        t={t} 
      />
      
      <main className="flex flex-col w-full">
        <Hero t={t} />
        <Profile t={t} />
        <AILab t={t} />
        <AtaraxiaStudio t={t} lang={lang} />
        <PromptMuseum t={t} lang={lang} />
        <About t={t} lang={lang} />
      </main>

      <Footer t={t} />
    </div>
  );
}
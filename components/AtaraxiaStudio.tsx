
import React, { useState } from 'react';
import { SectionProps } from '../types';
import { Mic, Moon, Play, X, QrCode, ExternalLink, Copy, Check } from 'lucide-react';
import { PODCAST_MAIN_URL } from '../constants';
import ScrollReveal from './ScrollReveal';

export const AtaraxiaStudio: React.FC<SectionProps> = ({ t, lang }) => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyWeChat = () => {
    navigator.clipboard.writeText("O_oyuh");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="ataraxia-studio" className="py-24 px-4 overflow-hidden relative">
      {/* Organic Background Blobs - Updated to Orange/Amber */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-amber-500/20 rounded-full blur-[100px] pointer-events-none mix-blend-multiply dark:mix-blend-screen"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none mix-blend-multiply dark:mix-blend-screen"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <ScrollReveal
            as="span"
            containerClassName="text-orange-600 dark:text-orange-400 font-bold tracking-[0.2em] uppercase text-sm mb-3 block"
          >
            {t.studio.title}
          </ScrollReveal>
          <ScrollReveal
            as="h2"
            containerClassName="text-3xl md:text-4xl font-serif font-bold text-slate-800 dark:text-slate-100 mb-4"
          >
            {t.studio.podcastTitle}
          </ScrollReveal>
          <ScrollReveal 
            as="p"
            baseOpacity={0.1} 
            enableBlur 
            baseRotation={3} 
            blurStrength={4} 
            containerClassName="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-light leading-relaxed"
          >
            {t.studio.podcastDesc}
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Podcast Section */}
          <div className="glass-panel p-8 rounded-2xl hover:bg-white/80 dark:hover:bg-white/10 transition-colors border-l-4 border-l-orange-500 flex flex-col">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-orange-50 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 rounded-full">
                <Mic size={20} />
              </div>
              <h3 className="text-xl font-bold">{t.studio.sectionEpisodes}</h3>
            </div>
            <ul className="space-y-5 mb-8 flex-1">
              {t.studio.episodes.map((ep, idx) => (
                <li key={idx} className="flex items-center gap-4 group/item">
                  <span className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-slate-100 dark:bg-white/5 text-slate-400 group-hover/item:bg-orange-500 group-hover/item:text-white transition-all shadow-sm">
                    <Play size={12} fill="currentColor" />
                  </span>
                  <div className="flex-1">
                    {ep.link ? (
                      <a 
                        href={ep.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-slate-700 dark:text-slate-300 font-medium group-hover/item:text-orange-600 dark:group-hover/item:text-orange-400 transition-colors block text-sm md:text-base hover:underline"
                      >
                        {ep.title}
                      </a>
                    ) : (
                      <span className="text-slate-700 dark:text-slate-300 font-medium group-hover/item:text-orange-600 dark:group-hover/item:text-orange-400 transition-colors block text-sm md:text-base">
                        {ep.title}
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
            
            <a 
              href={PODCAST_MAIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-orange-50 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 hover:bg-orange-100 dark:hover:bg-orange-500/20 transition-colors font-semibold text-sm"
            >
              {t.studio.visitPodcast}
              <ExternalLink size={16} />
            </a>
          </div>

          {/* Consultation Section - Clickable */}
          <div 
            onClick={() => setIsContactOpen(true)}
            className="glass-panel p-8 rounded-2xl flex flex-col justify-center relative overflow-hidden group border-r-4 border-r-indigo-400 cursor-pointer hover:shadow-xl transition-all"
          >
             <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-transparent dark:from-indigo-900/10 pointer-events-none transition-opacity group-hover:opacity-75"></div>
             
             <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-500 rounded-full">
                    <Moon size={20} />
                  </div>
                  <h3 className="text-xl font-bold">{t.studio.sectionConsultation}</h3>
                </div>
                
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-10 text-sm md:text-base">
                  {t.studio.consultationDesc}
                </p>

                <div className="flex gap-4 justify-center md:justify-start">
                   {/* Abstract Tarot Card Visuals */}
                   <div className="w-16 h-24 bg-white dark:bg-slate-700 rounded-md shadow-md rotate-[-6deg] group-hover:rotate-[-12deg] transition-transform border border-slate-200 dark:border-slate-600"></div>
                   <div className="w-16 h-24 bg-slate-50 dark:bg-slate-600 rounded-md shadow-md rotate-[3deg] group-hover:rotate-[6deg] transition-transform z-10 border border-slate-200 dark:border-slate-600"></div>
                   <div className="w-16 h-24 bg-gradient-to-br from-orange-400 to-amber-400 rounded-md shadow-lg rotate-[12deg] group-hover:rotate-[24deg] transition-transform border border-transparent opacity-90 flex items-center justify-center">
                     <span className="text-[8px] text-white font-bold opacity-0 group-hover:opacity-100">CLICK</span>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* Modal Overlay */}
      {isContactOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsContactOpen(false)}></div>
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 max-w-sm w-full relative z-10 shadow-2xl border border-white/20 animate-fade-in-up">
            <button 
              onClick={() => setIsContactOpen(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-800 dark:hover:text-white transition-colors"
            >
              <X size={20} />
            </button>

            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mx-auto mb-4 text-indigo-600 dark:text-indigo-400">
                <QrCode size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6">{t.studio.contactTitle}</h3>
              
              <button 
                onClick={handleCopyWeChat}
                className="w-full group relative flex items-center justify-center gap-3 text-lg font-mono font-semibold text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/50 py-4 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all active:scale-95"
              >
                <span>WeChat: O_oyuh</span>
                <div className="p-1.5 rounded-md bg-white dark:bg-slate-700 text-slate-400 shadow-sm border border-slate-100 dark:border-slate-600 group-hover:text-orange-500 transition-colors">
                    {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
                </div>
                
                {copied && (
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-xs font-bold bg-slate-800 text-white px-2 py-1.5 rounded shadow-lg animate-fade-in-up">
                        Copied!
                    </span>
                )}
              </button>
              
              <p className="mt-4 text-xs text-slate-400">
                {lang === 'zh' ? '点击复制微信号' : 'Click to copy WeChat ID'}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

import React from 'react';
import { SectionProps } from '../types';
import ScrollFloat from './ScrollFloat';
import Folder from './Folder';

export const Profile: React.FC<SectionProps> = ({ t }) => {
  const folderSkills = ["Tarot Reading", "Tableau/PowerBI", "Python", "Product Design", "SQL"];

  return (
    <section id="about-me" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
        <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-center">
            
            {/* Left Content */}
            <div className="w-full md:w-7/12 space-y-8">
                {/* Headline */}
                <ScrollFloat
                    animationDuration={1}
                    ease='back.inOut(2)'
                    scrollStart='top bottom-=20%'
                    scrollEnd='bottom center'
                    stagger={0.03}
                    containerClassName="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-slate-100 leading-tight inline-block"
                >
                    {t.profile.headline}
                </ScrollFloat>
                
                {/* Sub-headline */}
                <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal dark:font-light mb-8">
                    {t.profile.subHeadline}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-3">
                    {t.profile.tags.map((tag, index) => (
                        <span 
                            key={index} 
                            className="px-4 py-1.5 bg-orange-50 dark:bg-orange-900/10 text-orange-600 dark:text-orange-300 
                                       border border-orange-100 dark:border-orange-500/20 rounded-full text-sm font-semibold 
                                       shadow-sm hover:shadow-md hover:scale-105 transition-all cursor-default"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                
                {/* Intro Quote */}
                <div className="relative pl-6 border-l-4 border-orange-400 dark:border-orange-500/50 py-2">
                    <p className="text-base italic text-slate-500 dark:text-slate-400 font-medium">
                        {t.profile.intro}
                    </p>
                </div>
            </div>
            
            {/* Right Visuals - Folder */}
            <div className="w-full md:w-5/12 flex justify-center items-center pb-0 md:pb-0 pt-10 md:pt-0">
                 <div style={{ height: '400px', width: '100%', position: 'relative' }} className="flex items-end justify-center pb-8">
                   <Folder 
                      size={1.4} 
                      color="#f97316" 
                      className="custom-folder" 
                      items={folderSkills}
                   />
                 </div>
            </div>
        </div>
    </section>
  );
};

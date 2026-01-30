import React from 'react';
import { SectionProps } from '../types';
import { ChevronDown } from 'lucide-react';
import Antigravity from './Antigravity';
import TextType from './TextType';

export const Hero: React.FC<SectionProps> = ({ t }) => {
  const scrollToLab = () => {
    const element = document.getElementById('ai-lab');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-4 overflow-hidden pt-28 pb-12">
      {/* Antigravity Background */}
      <div className="absolute inset-0 z-0">
        <Antigravity 
          count={300} 
          magnetRadius={15} 
          ringRadius={10} 
          waveSpeed={0.005} 
          waveAmplitude={0.6} 
          particleSize={1.0} 
          lerpSpeed={0.03} 
          color="#F97316" 
          autoAnimate={false}
          particleVariance={2.5} 
          rotationSpeed={0} 
          depthFactor={0.5} 
          pulseSpeed={2} 
          particleShape="capsule" 
          fieldStrength={5} 
          breathingSpeed={0.5}
          breathingAmplitude={5}
        />
      </div>

      <div className="relative z-10 max-w-4xl animate-fade-in-up pointer-events-none">
        <h2 className="text-xs md:text-sm font-semibold tracking-[0.25em] uppercase mb-4 text-zen-primaryStart pointer-events-auto">
          Business Analyst | Tech Enthusiast | Insight Seeker
        </h2>
        
        {/* Font size reduced significantly for elegance */}
        <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight tracking-tight text-slate-900 dark:text-white pointer-events-auto min-h-[3em] flex items-center justify-center">
          <TextType
            as="h1"
            key="hero-text-type"
            text={[
              "Welcome to Serena's Space.",
              "Good to see you!",
              "Let's explore my ideas and projects."
            ]}
            className=""
            typingSpeed={75}
            deletingSpeed={50}
            pauseDuration={1500}
            loop={true}
            showCursor={true}
          />
        </div>
        
        <div 
          onClick={scrollToLab}
          className="mt-12 animate-bounce opacity-40 hover:opacity-100 transition-opacity cursor-pointer p-2 pointer-events-auto inline-block"
          role="button"
          aria-label="Scroll to content"
        >
          <ChevronDown className="w-5 h-5 mx-auto text-slate-400" />
        </div>
      </div>
    </section>
  );
};
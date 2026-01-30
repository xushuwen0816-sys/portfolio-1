export interface Translation {
  nav: {
    home: string;
    lab: string;
    museum: string;
    studio: string;
    about: string;
  };
  hero: {
    headline: string;
    subtext: string;
    role: string;
  };
  profile: {
    headline: string;
    subHeadline: string;
    tags: string[];
    intro: string;
  };
  aiLab: {
    title: string;
    cardDreamy: {
      title: string;
      tag: string;
      desc: string;
      action: string;
    };
    cardLucid: {
      title: string;
      tag: string;
      desc: string;
      action: string;
    };
    cardLucidTarot: {
      title: string;
      tag: string;
      desc: string;
      action: string;
    };
    cardMoeFlashcards: {
      title: string;
      tag: string;
      desc: string;
      action: string;
    };
    comingSoon: string;
  };
  promptMuseum: {
    title: string;
    catA: string;
    catB: string;
    itemsA: Array<{ 
      id: string;
      title: string; 
      summary: string; 
      type: string;
      fullContent?: string;
      tags?: string[];
      liveDemoUrl?: string;
    }>;
    itemsB: Array<{ 
      id: string;
      title: string; 
      summary: string; 
      type: string;
      fullContent?: string;
      tags?: string[];
      liveDemoUrl?: string;
    }>;
  };
  studio: {
    title: string;
    podcastTitle: string;
    podcastDesc: string;
    sectionEpisodes: string;
    sectionConsultation: string;
    consultationDesc: string;
    episodes: Array<{ title: string; link?: string }>;
    contactTitle: string;
    scanQr: string;
    visitPodcast: string;
  };
  about: {
    title: string;
    skillsTitle: string;
    downloadResume: string;
    summary: string;
    social: {
      email: string;
      linkedin: string;
      github: string;
    };
    skillList: string[];
  };
  footer: {
    copyright: string;
  }
}

export type LangType = 'en' | 'zh';

export interface SectionProps {
  t: Translation;
  lang?: LangType;
}
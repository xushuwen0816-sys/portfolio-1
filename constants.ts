
import { Translation } from './types';

export const SOCIAL_URLS = {
  email: "mailto:shuwen.xu@u.nus.edu",
  linkedin: "https://www.linkedin.com/in/shuwen-xu-45b2b4325",
  github: "https://github.com/xushuwen0816-sys"
};

export const PODCAST_MAIN_URL = "https://podcasts.apple.com/cn/podcast/%E8%A7%82%E5%BF%83%E8%87%AA%E5%9C%A8/id1852420070";
export const DREAMY_DRIFT_URL = "https://dreamydrift.vercel.app";
export const LUCID_JOURNALS_URL = "https://lucid-journals.vercel.app/";

export const Translations: Record<'en' | 'zh', Translation> = {
  en: {
    nav: {
      home: "Home",
      lab: "AI Lab",
      museum: "Prompt Museum",
      studio: "Ataraxia Studio",
      about: "About"
    },
    hero: {
      headline: "Data Logic x Healing Soul",
      subtext: "Exploring the boundaries of AI, understanding the depths of emotions.",
      role: "Data Analyst | Podcaster | AI Explorer"
    },
    aiLab: {
      title: "AI Lab",
      cardDreamy: {
        title: "DreamyDrift",
        tag: "Sleep & Mood AI",
        desc: "A sleep tracking web app that helps cultivate healthy habits, featuring an AI Analyst to deconstruct reasons for staying up late.",
        action: "Launch App"
      },
      cardLucid: {
        title: "Lucid Journals",
        tag: "Mindfulness & Tarot AI",
        desc: "Journaling for manifestation & energy checks (Tarot). AI reviews emotions, limiting beliefs, and higher-self traits.",
        action: "Open Journal"
      },
      comingSoon: "Coming Soon"
    },
    promptMuseum: {
      title: "Prompt Museum",
      catA: "AI Applications",
      catB: "Emotional Healing",
      itemsA: [
        {
          title: "DreamyDrift: System Prompt",
          content: "Role: You are an expert Senior Frontend Developer. I need you to build a Web App called 'DreamyDrift' from scratch...\n[Click to view full System Prompt]",
          type: "System Prompt"
        },
        {
          title: "SQL Optimization",
          content: "User: Optimize this recursive query for large datasets.\nAI: Replace the CTE with an indexed temporary table approach...",
          type: "Data"
        },
        {
          title: "React Component Gen",
          content: "User: Create a glassmorphism card component.\nAI: Here is the Tailwind CSS configuration...",
          type: "Frontend"
        }
      ],
      itemsB: [
        {
          title: "Deconstructing Anxiety",
          content: "\"Identify the emotion you are feeling right now. Give it a shape, a color, and a texture...\"",
          type: "Mindfulness"
        },
        {
          title: "Inner Child Dialogue",
          content: "\"Imagine your 5-year-old self standing in front of you. What do they need to hear?\"",
          type: "Healing"
        },
        {
          title: "Shadow Work",
          content: "\"What traits in others irritate you the most? Let's explore what this says about your shadow.\"",
          type: "Psychology"
        }
      ]
    },
    studio: {
      title: "Ataraxia Studio",
      podcastTitle: "观心自在",
      podcastDesc: "Deconstructing emotions, understanding self, practicing inward focus.",
      sectionEpisodes: "Featured Episodes",
      sectionConsultation: "Deep Consultation",
      consultationDesc: "Using Tarot as a tool for deep self-dialogue and subconscious exploration.",
      episodes: [
        { 
          title: "Vol 1. Mindset | When 'Job Brain' is Online: Finding Inner Order in Job Hunting Anxiety", 
          link: "https://podcasts.apple.com/cn/podcast/%E8%A7%82%E5%BF%83%E8%87%AA%E5%9C%A8/id1852420070?i=1000736383389" 
        },
        { title: "Vol 2. Why We Fear the Unknown" },
        { title: "Vol 3. Digital Minimalism & Inner Peace" }
      ],
      contactTitle: "Connect with me",
      scanQr: "Scan to add WeChat",
      visitPodcast: "Listen on Apple Podcasts"
    },
    about: {
      title: "About Me",
      skillsTitle: "Skill Tree",
      downloadResume: "Download Resume",
      summary: "Data/Business Analyst and Podcast Producer. Whether peeling back the layers of complex data or reaching the heart through deep conversation, my goal remains the same: to seek clear insights and achieve soul healing.",
      social: {
        email: "Email",
        linkedin: "LinkedIn",
        github: "GitHub"
      },
      skillList: [
        "SQL", 
        "Python", 
        "Tableau/PowerBI", 
        "Product Design", 
        "Prompt Engineering", 
        "Tarot", 
        "Podcast Production", 
        "Guided Meditation"
      ]
    },
    footer: {
      copyright: "© 2025 Serena. Designed with 💗."
    }
  },
  zh: {
    nav: {
      home: "首页",
      lab: "AI 实验室",
      museum: "提示词博物馆",
      studio: "观心自在工作室",
      about: "关于"
    },
    hero: {
      headline: "数据理性 x 灵魂疗愈",
      subtext: "探索 AI 的边界，理解情绪的深度。",
      role: "数据分析师 | 播客制作人 | AI 探索者"
    },
    aiLab: {
      title: "AI 实验室",
      cardDreamy: {
        title: "云眠 (DreamyDrift)",
        tag: "睡眠 & 情绪 AI",
        desc: "一款帮助培养健康习惯的睡眠追踪应用，特设 AI 分析师解构熬夜成因。",
        action: "启动应用"
      },
      cardLucid: {
        title: "澄 (Lucid Journals)",
        tag: "觉察 & 塔罗 AI",
        desc: "助力心愿显化与每日能量检视的觉察日记。AI 定期复盘情绪、限制性信念与高我特质。",
        action: "开启旅程"
      },
      comingSoon: "敬请期待"
    },
    promptMuseum: {
      title: "提示词博物馆",
      catA: "AI 应用类",
      catB: "情绪疗愈类",
      itemsA: [
        {
          title: "云眠：系统提示词",
          content: "我是如何让 Gemini 3 帮我搭建云眠的：我需要你从零开始构建一个名为“DreamyDrift (云眠)”的Web应用程序...\n[点击查看完整提示词]",
          type: "系统提示词"
        },
        {
          title: "SQL 性能优化",
          content: "User: 优化这个针对千万级数据的递归查询。\nAI: 建议用物化路径代替递归CTE，并建立联合索引...",
          type: "数据逻辑"
        },
        {
          title: "组件生成",
          content: "User: 生成一个具有玻璃拟态效果的卡片组件。\nAI: 以下是基于 Tailwind 的配置代码...",
          type: "前端开发"
        }
      ],
      itemsB: [
        {
          title: "解构焦虑",
          content: "“识别你此刻感受到的情绪。给它一个形状、一种颜色和一个质感。现在，想象把它放在架子上的罐子里……”",
          type: "正念"
        },
        {
          title: "内在小孩对话",
          content: "“想象5岁的你站在面前。他现在最想听到什么话？试着大声告诉他。”",
          type: "疗愈"
        },
        {
          title: "阴影工作",
          content: "“别人身上最让你生气的特质是什么？让我们探索这投射出的自我阴影。”",
          type: "心理学"
        }
      ]
    },
    studio: {
      title: "观心自在工作室",
      podcastTitle: "观心自在",
      podcastDesc: "解构情绪，理解自我，练习向内走。",
      sectionEpisodes: "精选单集",
      sectionConsultation: "深度咨询",
      consultationDesc: "以塔罗为工具，进行深度的自我对话与潜意识探索。",
      episodes: [
        { 
          title: "Vol 1. 心法｜当「Job缘脑」上线：在求职焦虑中，找回你的内心秩序", 
          link: "https://podcasts.apple.com/cn/podcast/%E8%A7%82%E5%BF%83%E8%87%AA%E5%9C%A8/id1852420070?i=1000736383389" 
        },
        { title: "Vol 2. 我们为何恐惧未知" },
        { title: "Vol 3. 数字极简与内心平静" }
      ],
      contactTitle: "预约咨询",
      scanQr: "扫码添加微信",
      visitPodcast: "访问 Apple Podcasts"
    },
    about: {
      title: "关于我",
      skillsTitle: "技能树",
      downloadResume: "下载简历",
      summary: "数据分析/商业分析师，同时是播客制作人。无论是抽丝剥茧地分析复杂数据，还是通过深度对话触达内心，我的目标始终如一：寻求清晰的洞见，达成灵魂的疗愈。",
      social: {
        email: "邮件",
        linkedin: "领英",
        github: "GitHub"
      },
      skillList: [
        "SQL", 
        "Python", 
        "Tableau/PowerBI", 
        "产品设计", 
        "Prompt Engineering", 
        "塔罗", 
        "播客制作", 
        "引导式冥想"
      ]
    },
    footer: {
      copyright: "© 2025 Serena. Designed with 💗."
    }
  }
};
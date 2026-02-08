
import { Translation } from './types';

export const SOCIAL_URLS = {
  email: "mailto:shuwen.xu@u.nus.edu",
  linkedin: "https://www.linkedin.com/in/shuwen-xu-45b2b4325",
  github: "https://github.com/xushuwen0816-sys"
};

export const PODCAST_MAIN_URL = "https://podcasts.apple.com/cn/podcast/%E8%A7%82%E5%BF%83%E8%87%AA%E5%9C%A8/id1852420070";
export const DREAMY_DRIFT_URL = "https://dreamydrift.vercel.app";
export const LUCID_JOURNALS_URL = "https://lucid-journals.vercel.app/";
export const LUCID_TAROT_URL = "https://lucidtarot.vercel.app";
export const MOE_FLASHCARDS_URL = "https://moeflashcards.vercel.app";

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
    profile: {
      headline: "Turning Data into Decisions.",
      subHeadline: "Ex-ByteDance & DiDi Global. A Business Analytics professional (MTech EBAC @ NUS) dedicated to optimizing user experiences and scaling business growth through rigorous experimentation and statistical modeling.",
      tags: ["Causal Inference", "AB Testing", "Predictive Analytics", "Dashboard Designing", "User Empathy", "Creative Thinking"],
      intro: "\"Passionate about transforming messy datasets into clear, strategic narratives that empower cross-functional teams.\""
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
        title: "Lucid Journal",
        tag: "Mindfulness AI",
        desc: "Journaling, Tarot insights, and AI-powered reflection. Understand your emotions, limiting beliefs, and higher-self traits.",
        action: "Open Journal"
      },
      cardLucidTarot: {
        title: "Lucid Tarot",
        tag: "AI Tarot",
        desc: "A completely free online divination platform featuring AI spread recommendations, realistic shuffling/drawing experience, and standard interpretations/advice.",
        action: "Start Divination"
      },
      cardMoeFlashcards: {
        title: "Moe Flashcards",
        tag: "AI Flashcards",
        desc: "Supports handwriting, import, AI batch card creation. Built-in Basic Thai 1 & 2 vocabulary books, with Ebbinghaus review curve.",
        action: "Start Learning"
      },
      comingSoon: "Coming Soon"
    },
    promptMuseum: {
      title: "Prompt Museum",
      catA: "AI Applications",
      catB: "Emotional Healing",
      itemsA: [
        {
          id: "dreamydrift",
          title: "DreamyDrift: System Prompt",
          summary: "Role: You are an expert Senior Frontend Developer. I need you to build a Web App called 'DreamyDrift' from scratch...\n[Click to view full System Prompt]",
          type: "System Prompt",
          fullContent: `Role: You are an expert Senior Frontend Developer and UI/UX Designer specializing in building modern, responsive, and aesthetic web applications.\n\nI need you to build a Web App called "DreamyDrift" from scratch.\n\n### 1. App Positioning\nThis is a healing sleep assistant designed to help modern people sleep early and maintain regular habits. The overall style must be cute, warm, and healing (using beige and warm orange tones), and perfectly adapted for mobile (mobile browsers).\n\n### 2. Tech Stack Requirements\n- Framework: React (Functional Components and Hooks)\n- Styling: Tailwind CSS (Support Dark Mode)\n- Icons: Lucide-react\n- Charts: Recharts\n- AI: @google/genai (Gemini API)\n- Storage: Browser LocalStorage (No backend DB)\n- Build: SPA, include manifest.json for PWA support.\n\n### 3. Core Functional Modules\nImplement the following four main Tab pages with bottom navigation:\n\n#### Module A: Sleep Diary (Record)\n- User inputs "Sleep Time" and "Wake Up Time".\n- Automatically calculate sleep duration.\n- If sleep time is later than 00:00, classify as "Staying Up Late" and prompt for reasons (e.g., Revenge Bedtime Procrastination, EMO, Work, Scrolling, etc.).\n- Categories: Psychological, Behavioral, Physiological, External.\n\n#### Module B: Bedtime Rituals (Checklist)\n- A simple checklist for healthy sleep habits (e.g., Sun exposure, No coffee, Meditation, Phone away).\n- Show a progress bar for daily completion.\n- **Note:** Use @google/genai for any AI features.\n\n#### Module C: Data Review (Stats)\n- Monthly Heatmap: Similar to GitHub contributions, showing sleep quality (Perfect, Okay, Late, Bad).\n- Charts: Stats for late nights and sleep deprivation over 7/30 days.\n- Pie Chart: Distribution of reasons for staying up late.\n- AI Sleep Coach: Button to call Gemini API for gentle, insightful sleep analysis and advice based on stats.\n\n#### Module D: Emotional Dump (Dump)\n- A chat-like "trash can" interface.\n- Users can type their bedtime worries or negative emotions.\n- On send, call Gemini API to act as a "Gentle Tree Hole Spirit" giving short, warm, empathetic replies to soothe the user to sleep.\n- Support user configuration of Gemini API Key.\n\n### 4. Visual and Interaction Requirements\n- UI Design: Large rounded corners (Rounded-3xl), soft shadows, card-style design.\n- Animation: Fade-in/out for page transitions, scale feedback for buttons.\n- Copy Style: No cold machine language; use healing copy like "Goodnight", "Forgive yourself no matter when you sleep".\n\nBased on the above requirements, please generate the complete project code structure, including index.html, index.tsx, App.tsx, and all component files.`,
          liveDemoUrl: "https://dreamydrift.vercel.app/"
        },
        {
          id: "sql-opt",
          title: "SQL Optimization",
          summary: "User: Optimize this recursive query for large datasets.\nAI: Replace the CTE with an indexed temporary table approach...",
          type: "Data"
        },
        {
          id: "react-gen",
          title: "React Component Gen",
          summary: "User: Create a glassmorphism card component.\nAI: Here is the Tailwind CSS configuration...",
          type: "Frontend"
        }
      ],
      itemsB: [
        {
          id: "anxiety",
          title: "Deconstructing Anxiety",
          summary: "\"Identify the emotion you are feeling right now. Give it a shape, a color, and a texture...\"",
          type: "Mindfulness"
        },
        {
          id: "inner-child",
          title: "Inner Child Dialogue",
          summary: "\"Imagine your 5-year-old self standing in front of you. What do they need to hear?\"",
          type: "Healing"
        },
        {
          id: "shadow-work",
          title: "Shadow Work",
          summary: "\"What traits in others irritate you the most? Let's explore what this says about your shadow.\"",
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
      consultationDesc: "With 2+ years of experience and over 200 positive reviews, I use Tarot as a medium for deep self-dialogue and subconscious exploration.",
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
      copyright: "© 2026. Designed with Serena."
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
    profile: {
      headline: "以数据驱动决策",
      subHeadline: "前字节跳动 & 滴滴全球。商业分析专业人士 (NUS MTech EBAC)，致力于通过严谨的实验设计与统计建模，优化用户体验并推动业务规模化增长。",
      tags: ["因果推断", "A/B测试", "预测性分析", "可视化看板设计", "用户共情", "创造性思维"],
      intro: "“热衷于将纷繁复杂的数据转化为清晰的战略洞察，赋能跨职能团队做出明智决策。”"
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
        tag: "觉察 AI",
        desc: "助力心愿显化与每日能量检视的觉察日记。AI 定期复盘情绪、限制性信念与高我特质。",
        action: "开启旅程"
      },
      cardLucidTarot: {
        title: "Lucid Tarot",
        tag: "AI 塔罗",
        desc: "这是一个完全免费的线上占卜平台，拥有AI牌阵推荐、仿真的洗牌抽牌体验和标准的解读及建议。",
        action: "开始占卜"
      },
      cardMoeFlashcards: {
        title: "Moe Flashcards",
        tag: "AI 闪卡",
        desc: "支持手写、导入、AI批量制卡，内置了基础泰语1、2的词汇书，复习基于艾宾浩斯遗忘曲线。",
        action: "开始学习"
      },
      comingSoon: "敬请期待"
    },
    promptMuseum: {
      title: "提示词博物馆",
      catA: "AI 应用类",
      catB: "情绪疗愈类",
      itemsA: [
        {
          id: "dreamydrift",
          title: "云眠：系统提示词",
          summary: "我是如何让 Gemini 3 帮我搭建云眠的：我需要你从零开始构建一个名为“DreamyDrift (云眠)”的Web应用程序...\n[点击查看完整提示词]",
          type: "系统提示词",
          fullContent: `角色设定： 你是一位专家级的高级前端开发者和 UI/UX 设计师，擅长构建现代、响应式且美观的 Web 应用程序。\n\n我需要你从零开始构建一个名为“DreamyDrift (云眠)”的Web应用程序。\n\n### 1. 应用定位\n这是一个帮助现代人早睡早起、规律作息的治愈系睡眠助手。整体风格必须非常可爱、温暖、治愈（使用米色、暖橙色为主色调），并且完美适配移动端（手机浏览器）。\n\n### 2. 技术栈要求\n- 框架: React (使用 Functional Components 和 Hooks)\n- 样式: Tailwind CSS (用于所有样式，支持 Dark Mode 深色模式)\n- 图标: Lucide-react\n- 图表: Recharts\n- AI 能力: @google/genai (Gemini API)\n- 数据存储: 浏览器的 LocalStorage (无需后端数据库)\n- 构建形式: 单页应用 (SPA)，包含 manifest.json 以支持 PWA 安装。\n\n### 3. 核心功能模块\n请实现以下四个主要 Tab 页面，并在底部通过导航栏切换：\n\n#### 模块 A：睡眠日记 (Record)\n- 用户输入“入睡时间”和“起床时间”。\n- 自动计算睡眠时长。\n- 如果入睡时间晚于 00:00，自动判定为“熬夜”，并弹出一组标签让用户选择“熬夜原因”（如：报复性熬夜、情绪EMO、加班、刷手机等）。\n- 原因分为：心理、行为、生理、外部 四大类。\n\n#### 模块 B：睡前仪式 (Checklist)\n- 一个简单的打卡列表，包含帮助睡眠的好习惯（如：晒了太阳、不喝咖啡、冥想、远离手机等）。\n- 显示今日完成度的进度条。\n\n#### 模块 C：数据复盘 (Stats)\n- 月度热力图：类似 GitHub 的提交热力图，用不同颜色表示当天的睡眠质量（完美、还行、熬夜、糟糕）。\n- 图表统计：统计近7天/30天的熬夜天数、缺觉天数。\n- 饼图：展示熬夜原因的分布（如：主要因为“玩手机”还是“压力大”）。\n- AI 睡眠教练：增加一个按钮，调用 Gemini API，根据用户的统计数据，生成一段温柔、有洞察力的睡眠分析和建议。\n\n#### 模块 D：情绪树洞 (Dump)\n- 一个类似聊天界面的“垃圾桶”。\n- 用户可以输入睡前的烦恼或负面情绪。\n- 点击发送后，调用 Gemini API，让 AI 扮演一个“温柔的树洞精灵”，给出简短、暖心、极具共情的回复，哄用户睡觉。\n- 支持用户配置自己的 Gemini API Key。\n\n### 4. 视觉与交互要求\n- UI 设计: 大圆角 (Rounded-3xl)、柔和的阴影、卡片式设计。\n- 动画: 页面切换要有淡入淡出效果，按钮点击要有缩放反馈。\n- 文案风格: 拒绝冷冰冰的机器语言，使用“晚安”、“不论几点睡，都原谅自己”等治愈系文案。\n\n请根据以上需求，一次性生成完整的项目代码结构，包括 index.html, index.tsx, App.tsx 以及各组件文件。`,
          liveDemoUrl: "https://dreamydrift.vercel.app/"
        },
        {
          id: "sql-opt",
          title: "SQL 性能优化",
          summary: "User: 优化这个针对千万级数据的递归查询。\nAI: 建议用物化路径代替递归CTE，并建立联合索引...",
          type: "数据逻辑"
        },
        {
          id: "react-gen",
          title: "组件生成",
          summary: "User: 生成一个具有玻璃拟态效果的卡片组件。\nAI: 以下是基于 Tailwind 的配置代码...",
          type: "前端开发"
        }
      ],
      itemsB: [
        {
          id: "anxiety",
          title: "解构焦虑",
          summary: "“识别你此刻感受到的情绪。给它一个形状、一种颜色和一个质感。现在，想象把它放在架子上的罐子里……”",
          type: "正念"
        },
        {
          id: "inner-child",
          title: "内在小孩对话",
          summary: "“想象5岁的你站在面前。他现在最想听到什么话？试着大声告诉他。”",
          type: "疗愈"
        },
        {
          id: "shadow-work",
          title: "阴影工作",
          summary: "“别人身上最让你生气的特质是什么？让我们探索这投射出的自我阴影。”",
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
      consultationDesc: "拥有 2 年+咨询经验，收获 200+ 用户好评。以塔罗为工具，协助你进行深度的自我对话与潜意识探索。",
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
      copyright: "© 2026. Designed with Serena."
    }
  }
};
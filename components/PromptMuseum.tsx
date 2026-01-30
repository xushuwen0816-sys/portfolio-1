
import React, { useState } from 'react';
import { SectionProps } from '../types';
import { Terminal, Heart, MoveRight, X } from 'lucide-react';
import ScrollFloat from './ScrollFloat';

export const PromptMuseum: React.FC<SectionProps> = ({ t, lang }) => {
  const [activeTab, setActiveTab] = useState<'A' | 'B'>('A');
  const [showModal, setShowModal] = useState(false);

  const items = activeTab === 'A' ? t.promptMuseum.itemsA : t.promptMuseum.itemsB;

  const handleItemClick = (index: number) => {
    // Check if it's the first item in Category A ("Building DreamyDrift")
    if (activeTab === 'A' && index === 0) {
      setShowModal(true);
    }
  };

  return (
    <section id="prompt-museum" className="pt-16 pb-6 px-4 border-t border-slate-100 dark:border-white/5 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <ScrollFloat 
            animationDuration={1} 
            ease='back.inOut(2)' 
            scrollStart='top bottom-=20%' 
            scrollEnd='bottom center' 
            stagger={0.03}
            containerClassName="text-3xl md:text-4xl font-bold tracking-tight text-slate-800 dark:text-slate-100 uppercase mb-6"
          >
            {`// ${t.promptMuseum.title}`}
          </ScrollFloat>
        </div>

        {/* Carousel Container */}
        <div className="relative">
            {/* Subtle accent blob based on tab */}
            <div className={`absolute top-0 right-0 w-96 h-96 blur-[100px] rounded-full opacity-10 pointer-events-none transition-colors duration-500 ${activeTab === 'A' ? 'bg-indigo-400' : 'bg-orange-500'}`}></div>

            <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory px-4 md:px-0 scrollbar-hide">
                {items.map((item, index) => (
                    <div 
                        key={index} 
                        onClick={() => handleItemClick(index)}
                        className={`
                            glass-panel min-w-[300px] md:min-w-[400px] max-w-[400px] rounded-xl p-8 flex-shrink-0 snap-center
                            transition-all duration-300 hover:translate-y-[-4px] hover:shadow-lg cursor-pointer
                            border border-white/50 dark:border-white/10 relative overflow-hidden group
                        `}
                    >
                        <div className="font-mono text-[10px] text-slate-400 mb-4 flex items-center gap-2 uppercase tracking-widest">
                            <span className={`w-1.5 h-1.5 rounded-full ${activeTab === 'A' ? 'bg-indigo-400' : 'bg-orange-500'} animate-pulse`}></span>
                            {item.type}
                        </div>

                        <h3 className="text-lg font-semibold mb-4 text-slate-800 dark:text-slate-100">
                            {item.title}
                        </h3>

                        {activeTab === 'A' ? (
                            <div className="bg-[#0f172a] text-slate-300 p-4 rounded-lg font-mono text-xs overflow-x-auto shadow-inner border border-slate-700/50 h-32 overflow-hidden relative">
                                <p className="whitespace-pre-wrap leading-relaxed opacity-90">{item.content}</p>
                                <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-[#0f172a] to-transparent"></div>
                            </div>
                        ) : (
                            <div className="bg-orange-50 dark:bg-orange-900/10 p-6 rounded-lg border border-orange-100 dark:border-orange-500/10 h-32 relative overflow-hidden flex items-center justify-center text-center italic text-slate-600 dark:text-slate-300">
                                <p className="font-serif text-sm leading-relaxed px-4 opacity-90">{item.content}</p>
                            </div>
                        )}
                        
                        <div className="mt-4 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                            <MoveRight className="text-slate-400 w-4 h-4" />
                        </div>
                    </div>
                ))}
                
                {/* Empty spacer for end of scroll */}
                <div className="min-w-[20px] md:hidden"></div>
            </div>
            
            {/* Scroll hint on mobile */}
            <div className="md:hidden text-center text-xs text-slate-400 animate-pulse mt-2">
                Scroll for more →
            </div>
        </div>
      </div>

      {/* Modal for "Building DreamyDrift" Content */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowModal(false)}></div>
          <div className="bg-white dark:bg-slate-900 rounded-2xl w-full max-w-3xl max-h-[85vh] overflow-hidden relative z-10 shadow-2xl border border-white/20 animate-fade-in-up flex flex-col">
            <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur z-20 p-6 border-b border-slate-100 dark:border-white/10 flex justify-between items-center flex-shrink-0">
               <div className="flex items-center gap-3">
                 <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-500">
                    <Terminal size={18} />
                 </div>
                 <div>
                    <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                        {items[0].title}
                    </h3>
                    <p className="text-xs text-slate-400">
                      {lang === 'zh' ? '系统提示词 / 架构' : 'System Prompt / Architecture'}
                    </p>
                 </div>
               </div>
               <button 
                  onClick={() => setShowModal(false)}
                  className="p-2 text-slate-400 hover:text-slate-800 dark:hover:text-white transition-colors rounded-full hover:bg-slate-100 dark:hover:bg-white/5"
                >
                  <X size={24} />
                </button>
            </div>
            
            <div className="p-0 overflow-y-auto custom-scrollbar bg-slate-50 dark:bg-[#0B0F19]">
               <div className="p-8 font-mono text-sm leading-relaxed text-slate-600 dark:text-slate-400 space-y-6">
                  
                  {/* Prompt Content Start */}
                  <div className="p-4 rounded-lg bg-orange-100/50 dark:bg-orange-500/10 border border-orange-200 dark:border-orange-500/20 text-orange-800 dark:text-orange-200 mb-6 text-xs font-sans font-medium">
                    {lang === 'zh' 
                      ? '这是用于构建“云眠”应用程序的原始提示词，定义了其角色、技术栈和情感核心。' 
                      : 'This is the original prompt used to architect the "DreamyDrift" application, defining its role, tech stack, and emotional core.'}
                  </div>

                  {lang === 'zh' ? (
                    <>
                      <p><span className="text-indigo-600 dark:text-indigo-400 font-bold">角色设定：</span> 你是一位专家级的高级前端开发者和 UI/UX 设计师，擅长构建现代、响应式且美观的 Web 应用程序。</p>
                      
                      <p>我需要你从零开始构建一个名为<span className="font-bold text-slate-800 dark:text-slate-200">“DreamyDrift (云眠)”</span>的Web应用程序。</p>

                      <div className="space-y-2">
                        <h4 className="font-bold text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-white/10 pb-1 mb-3">1. 应用定位</h4>
                        <p>这是一个帮助现代人早睡早起、规律作息的<span className="font-bold">治愈系睡眠助手</span>。整体风格必须非常可爱、温暖、治愈（使用米色、暖橙色为主色调），并且完美适配移动端（手机浏览器）。</p>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-bold text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-white/10 pb-1 mb-3">2. 技术栈要求</h4>
                        <ul className="list-disc pl-5 space-y-1">
                            <li><strong className="text-slate-700 dark:text-slate-300">框架:</strong> React (使用 Functional Components 和 Hooks)</li>
                            <li><strong className="text-slate-700 dark:text-slate-300">样式:</strong> Tailwind CSS (用于所有样式，支持 Dark Mode 深色模式)</li>
                            <li><strong className="text-slate-700 dark:text-slate-300">图标:</strong> Lucide-react</li>
                            <li><strong className="text-slate-700 dark:text-slate-300">图表:</strong> Recharts</li>
                            <li><strong className="text-slate-700 dark:text-slate-300">AI 能力:</strong> @google/genai (Gemini API)</li>
                            <li><strong className="text-slate-700 dark:text-slate-300">数据存储:</strong> 浏览器的 LocalStorage (无需后端数据库)</li>
                            <li><strong className="text-slate-700 dark:text-slate-300">构建形式:</strong> 单页应用 (SPA)，包含 manifest.json 以支持 PWA 安装。</li>
                        </ul>
                      </div>

                      <div className="space-y-4">
                        <h4 className="font-bold text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-white/10 pb-1 mb-3">3. 核心功能模块</h4>
                        <p>请实现以下四个主要 Tab 页面，并在底部通过导航栏切换：</p>

                        <div className="pl-4 border-l-2 border-slate-200 dark:border-slate-700 space-y-4">
                            <div>
                                <strong className="block text-slate-800 dark:text-slate-200 mb-1">模块 A：睡眠日记 (Record)</strong>
                                <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
                                    <li>用户输入“入睡时间”和“起床时间”。</li>
                                    <li>自动计算睡眠时长。</li>
                                    <li>如果入睡时间晚于 00:00，自动判定为“熬夜”，并弹出一组标签让用户选择“熬夜原因”（如：报复性熬夜、情绪EMO、加班、刷手机等）。</li>
                                    <li>原因分为：心理、行为、生理、外部 四大类。</li>
                                </ul>
                            </div>

                            <div>
                                <strong className="block text-slate-800 dark:text-slate-200 mb-1">模块 B：睡前仪式 (Checklist)</strong>
                                <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
                                    <li>一个简单的打卡列表，包含帮助睡眠的好习惯（如：晒了太阳、不喝咖啡、冥想、远离手机等）。</li>
                                    <li>显示今日完成度的进度条。</li>
                                </ul>
                            </div>

                            <div>
                                <strong className="block text-slate-800 dark:text-slate-200 mb-1">模块 C：数据复盘 (Stats)</strong>
                                <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
                                    <li><strong>月度热力图</strong>：类似 GitHub 的提交热力图，用不同颜色表示当天的睡眠质量（完美、还行、熬夜、糟糕）。</li>
                                    <li><strong>图表统计</strong>：统计近7天/30天的熬夜天数、缺觉天数。</li>
                                    <li><strong>饼图</strong>：展示熬夜原因的分布（如：主要因为“玩手机”还是“压力大”）。</li>
                                    <li><strong>AI 睡眠教练</strong>：增加一个按钮，调用 Gemini API，根据用户的统计数据，生成一段温柔、有洞察力的睡眠分析和建议。</li>
                                </ul>
                            </div>

                            <div>
                                <strong className="block text-slate-800 dark:text-slate-200 mb-1">模块 D：情绪树洞 (Dump)</strong>
                                <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
                                    <li>一个类似聊天界面的“垃圾桶”。</li>
                                    <li>用户可以输入睡前的烦恼或负面情绪。</li>
                                    <li>点击发送后，调用 Gemini API，让 AI 扮演一个“温柔的树洞精灵”，给出简短、暖心、极具共情的回复，哄用户睡觉。</li>
                                    <li>支持用户配置自己的 Gemini API Key。</li>
                                </ul>
                            </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-bold text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-white/10 pb-1 mb-3">4. 视觉与交互要求</h4>
                        <ul className="list-disc pl-5 space-y-1">
                            <li><strong className="text-slate-700 dark:text-slate-300">UI 设计:</strong> 大圆角 (Rounded-3xl)、柔和的阴影、卡片式设计。</li>
                            <li><strong className="text-slate-700 dark:text-slate-300">动画:</strong> 页面切换要有淡入淡出效果，按钮点击要有缩放反馈。</li>
                            <li><strong className="text-slate-700 dark:text-slate-300">文案风格:</strong> 拒绝冷冰冰的机器语言，使用“晚安”、“不论几点睡，都原谅自己”等治愈系文案。</li>
                        </ul>
                      </div>

                      <p className="mt-8">请根据以上需求，一次性生成完整的项目代码结构，包括 index.html, index.tsx, App.tsx 以及各组件文件。</p>
                    </>
                  ) : (
                    // English Content
                    <>
                      <p><span className="text-indigo-600 dark:text-indigo-400 font-bold">Role:</span> You are an expert Senior Frontend Developer and UI/UX Designer specializing in building modern, responsive, and aesthetic web applications.</p>
                      
                      <p>I need you to build a Web App called <span className="font-bold text-slate-800 dark:text-slate-200">"DreamyDrift"</span> from scratch.</p>

                      <div className="space-y-2">
                        <h4 className="font-bold text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-white/10 pb-1 mb-3">1. App Positioning</h4>
                        <p>This is a <span className="font-bold">healing sleep assistant</span> designed to help modern people sleep early and maintain regular habits. The overall style must be cute, warm, and healing (using beige and warm orange tones), and perfectly adapted for mobile (mobile browsers).</p>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-bold text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-white/10 pb-1 mb-3">2. Tech Stack Requirements</h4>
                        <ul className="list-disc pl-5 space-y-1">
                            <li><strong className="text-slate-700 dark:text-slate-300">Framework:</strong> React (Functional Components and Hooks)</li>
                            <li><strong className="text-slate-700 dark:text-slate-300">Styling:</strong> Tailwind CSS (Support Dark Mode)</li>
                            <li><strong className="text-slate-700 dark:text-slate-300">Icons:</strong> Lucide-react</li>
                            <li><strong className="text-slate-700 dark:text-slate-300">Charts:</strong> Recharts</li>
                            <li><strong className="text-slate-700 dark:text-slate-300">AI:</strong> @google/genai (Gemini API)</li>
                            <li><strong className="text-slate-700 dark:text-slate-300">Storage:</strong> Browser LocalStorage (No backend DB)</li>
                            <li><strong className="text-slate-700 dark:text-slate-300">Build:</strong> SPA, include manifest.json for PWA support.</li>
                        </ul>
                      </div>

                      <div className="space-y-4">
                        <h4 className="font-bold text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-white/10 pb-1 mb-3">3. Core Functional Modules</h4>
                        <p>Implement the following four main Tab pages with bottom navigation:</p>

                        <div className="pl-4 border-l-2 border-slate-200 dark:border-slate-700 space-y-4">
                            <div>
                                <strong className="block text-slate-800 dark:text-slate-200 mb-1">Module A: Sleep Diary (Record)</strong>
                                <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
                                    <li>User inputs "Sleep Time" and "Wake Up Time".</li>
                                    <li>Automatically calculate sleep duration.</li>
                                    <li>If sleep time is later than 00:00, classify as "Staying Up Late" and prompt for reasons (e.g., Revenge Bedtime Procrastination, EMO, Work, Scrolling, etc.).</li>
                                    <li>Categories: Psychological, Behavioral, Physiological, External.</li>
                                </ul>
                            </div>

                            <div>
                                <strong className="block text-slate-800 dark:text-slate-200 mb-1">Module B: Bedtime Rituals (Checklist)</strong>
                                <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
                                    <li>A simple checklist for healthy sleep habits (e.g., Sun exposure, No coffee, Meditation, Phone away).</li>
                                    <li>Show a progress bar for daily completion.</li>
                                    <li>**Note:** Use <code>@google/genai</code> for any AI features.</li>
                                </ul>
                            </div>

                            <div>
                                <strong className="block text-slate-800 dark:text-slate-200 mb-1">Module C: Data Review (Stats)</strong>
                                <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
                                    <li><strong>Monthly Heatmap:</strong> Similar to GitHub contributions, showing sleep quality (Perfect, Okay, Late, Bad).</li>
                                    <li><strong>Charts:</strong> Stats for late nights and sleep deprivation over 7/30 days.</li>
                                    <li><strong>Pie Chart:</strong> Distribution of reasons for staying up late.</li>
                                    <li><strong>AI Sleep Coach:</strong> Button to call Gemini API for gentle, insightful sleep analysis and advice based on stats.</li>
                                </ul>
                            </div>

                            <div>
                                <strong className="block text-slate-800 dark:text-slate-200 mb-1">Module D: Emotional Dump (Dump)</strong>
                                <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
                                    <li>A chat-like "trash can" interface.</li>
                                    <li>Users can type their bedtime worries or negative emotions.</li>
                                    <li>On send, call Gemini API to act as a "Gentle Tree Hole Spirit" giving short, warm, empathetic replies to soothe the user to sleep.</li>
                                    <li>Support user configuration of Gemini API Key.</li>
                                </ul>
                            </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-bold text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-white/10 pb-1 mb-3">4. Visual and Interaction Requirements</h4>
                        <ul className="list-disc pl-5 space-y-1">
                            <li><strong className="text-slate-700 dark:text-slate-300">UI Design:</strong> Large rounded corners (Rounded-3xl), soft shadows, card-style design.</li>
                            <li><strong className="text-slate-700 dark:text-slate-300">Animation:</strong> Fade-in/out for page transitions, scale feedback for buttons.</li>
                            <li><strong className="text-slate-700 dark:text-slate-300">Copy Style:</strong> No cold machine language; use healing copy like "Goodnight", "Forgive yourself no matter when you sleep".</li>
                        </ul>
                      </div>

                      <p className="mt-8">Based on the above requirements, please generate the complete project code structure, including index.html, index.tsx, App.tsx, and all component files.</p>
                    </>
                  )}
                  
                  {/* Prompt Content End */}

               </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

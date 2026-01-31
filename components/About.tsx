
import React, { useState } from 'react';
import { SectionProps } from '../types';
import { SOCIAL_URLS } from '../constants';
import { Download, Mail, Linkedin, Github, X, Copy, Check } from 'lucide-react';

export const About: React.FC<SectionProps> = ({ t, lang }) => {
  const [showEmailCard, setShowEmailCard] = useState(false);
  const [showDownloadMenu, setShowDownloadMenu] = useState(false);
  const [copied, setCopied] = useState(false);

  // Generate random high values for skills to ensure they look "high"
  const getSkillValue = (index: number) => {
    // Base 85, plus some random but consistent logic based on index
    return 88 + (index % 4) * 3;
  };

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText("shuwen.xu@u.nus.edu");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadResume = (resumeLang: 'en' | 'zh') => {
    const isEn = resumeLang === 'en';
    
    // Resume content for Chinese
    const resumeContentZh = `
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Serena Xu - 简历</title>
    <style>
        body { font-family: "Microsoft YaHei", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; line-height: 1.6; color: #333; max-width: 800px; margin: 0 auto; padding: 40px; }
        h1 { font-size: 24px; margin-bottom: 5px; color: #000; }
        .header { text-align: center; margin-bottom: 30px; border-bottom: 2px solid #333; padding-bottom: 20px; }
        .contact-info { font-size: 14px; color: #555; }
        .contact-info a { color: #000; text-decoration: none; }
        
        h2 { font-size: 16px; background-color: #f3f4f6; padding: 6px 10px; margin-top: 25px; margin-bottom: 15px; border-left: 4px solid #F97316; font-weight: bold; }
        
        .section-item { margin-bottom: 20px; }
        .item-header { display: flex; justify-content: space-between; font-weight: bold; font-size: 15px; margin-bottom: 4px; }
        .item-sub { font-size: 14px; color: #444; margin-bottom: 8px; font-weight: 500; }
        
        ul { margin: 0; padding-left: 18px; font-size: 14px; color: #444; }
        li { margin-bottom: 6px; }
        .nested-list { list-style-type: circle; margin-top: 4px; }
        
        .skills-section p { font-size: 14px; margin: 5px 0; }
        .bold { font-weight: bold; }
        
        @media print {
            body { padding: 0; }
            h2 { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        }
    </style>
</head>
<body>

    <div class="header">
        <h1>Serena Xu</h1>
        <div class="contact-info">
            邮箱: <a href="mailto:shuwen.xu@u.nus.edu">shuwen.xu@u.nus.edu</a> &nbsp;|&nbsp; 电话: +86 182 5209 8702
        </div>
    </div>



    <h2>实习经历</h2>
    
    <div class="section-item">
        <div class="item-header">
            <span>字节跳动 | 抖音 UGC | 增长策略 - 数据分析实习生</span>
            <span>2025/07 至今</span>
        </div>
        <ul>
            <li><span class="bold">从 0 到 1 构建增长导向的数据监控体系，支撑高频策略迭代与转化效率优化</span>
                <ul class="nested-list">
                    <li>「大循环」看板：搭建覆盖新用户消费、内容供给、分发效率与转化漏斗的核心指标体系，使用 SQL 定义口径，实现对抖音站内引流至图文独立端（可颂）转化路径的端到端监控，支撑日级归因分析</li>
                    <li>「兴趣圈层」看板：以抖音“趣玩活动报名人数”为北极星指标，拆解活动数、单个活动投稿量、稿均 vv、锚点曝光→点击→报名的多级转化率，识别关键瓶颈环节，提升活动转化效果</li>
                </ul>
            </li>
            <li><span class="bold">AB 实验设计、复盘与决策闭环，验证收益链路合理性，驱动核心指标增长</span>
                <ul class="nested-list">
                    <li>负责“分时间留存规律验证”等实验的评估，定位逻辑链路断裂问题，推动实验关闭，保证资源分配合理性</li>
                    <li>主导“关注关系强化分发”实验，通过 p<0.05 显著性检验全量上线，关注关系曝光 PV 占比 +3.3%、UV 渗透+2.2%，曝光拉新率提升 4.17%（0.0072% → 0.0075%）</li>
                </ul>
            </li>
        </ul>
    </div>

    <div class="section-item">
        <div class="item-header">
            <span>滴滴出行 | 豪华车事业部 | 产品与用户体验运营 - 数据分析实习生</span>
            <span>2025/02 – 2025/07</span>
        </div>
        <ul>
            <li><span class="bold">构建体验导向的异常监测与归因体系，提升服务问题响应与归因效率</span>
                <ul class="nested-list">
                    <li>诊断模型构建：设计司乘体验指标体系并基于 Tableau 搭建多维看板（分城市/用户心智/服务触点），结合箱线图实时识别异常波动（如北京服务水准低于阈值）并定位根因（如驾驶平稳度点选率+22%），破解原有指标颗粒度粗、归因效率低问题，使问题定位时效缩短 72 小时</li>
                    <li>沉淀 10+可复用自动化 SQL 模板，承接部门 80%+日常取数需求，响应效率提升 100%</li>
                </ul>
            </li>
            <li><span class="bold">通过体验建模与因果推断识别用户核心痛点和需求，驱动资源倾斜</span>
                <ul class="nested-list">
                    <li>差评订单洞察：利用 Python 建立面板回归和随机森林模型（AUC=0.989），系统拆解 2 万+订单差评成因，推翻“司机 NPS 线性影响满意度”假设，定位非显性杠杆如司机收入、司机疲劳度，推动等级权益改版+派单倾斜试点</li>
                    <li>体验影响量化：识别用户订单旅程（发单→应答→上车→行中→行后 5 大环节）中的 61 个关键负向体验场景，运用双重差分 DID 模型设计 AB 实验，量化其对核心指标的影响，发现 14 个 A/B 类高损场景（占全部场景 23%）贡献了 80.14%平台损失，指导资源优先级分配</li>
                </ul>
            </li>
        </ul>
    </div>

    <div class="section-item">
        <div class="item-header">
            <span>CUPSHE | 用户运营与体验增长部 | 数据运营实习生</span>
            <span>2024/04 – 2024/07</span>
        </div>
        <ul>
            <li>通过 SQL 完成 CRM 数据 ETL，设计 Tableau 动态看板下钻分析，追踪投诉率、重复投诉率、解决时效等核心指标</li>
            <li>制作周报支持业务决策，关注投诉类别占比、地区分布及专题分析；推动跨部门专项治理，复杂问题解决率达到 85%</li>
            <li>优化标准应答知识库，新增 18 个问题标签和话术，单 case 处理时效从 5 分钟压缩至 4 分钟，推动客服效率提升 35%</li>
        </ul>
    </div>

    <div class="section-item">
        <div class="item-header">
            <span>中信证券 | 商业拓展部 | 用户增长实习生</span>
            <span>2023/06 - 2023/08</span>
        </div>
        <ul>
            <li>进行市场分析，使用 Python 计算 HHI 指数及 CR5 集中度等，完成 10 家竞对市场份额对标并输出 SWOT 分析报告</li>
            <li>管理用户数据，基于 RFM 模型和层次聚类完成 2000+用户细分（高净值保守、潜力激进、价敏流动、沉睡高潜）</li>
            <li>设计差异化触达策略，针对高净值用户推出“专属顾问+免手续费”权益包，优化后高价值客户响应率提升 18%</li>
        </ul>
    </div>

    <h2>学术成果</h2>
    <div class="section-item">
        <ul>
            <li>Xu, S.《黄河流域虚拟水流动模式及其驱动因素分析》Sustainability 2023,15, 4393. <br>
            <a href="https://doi.org/10.3390/su15054393" target="_blank">https://doi.org/10.3390/su15054393</a></li>
        </ul>
    </div>

    <h2>技能</h2>
    <div class="section-item skills-section">
        <p><span class="bold">计算机技能：</span>Excel，PowerBI，Tableau，SQL，Python，Photoshop，Lightroom，Aegisub，剪映</p>
        <p><span class="bold">语言技能：</span>普通话 (母语)，英语 (雅思 7.5，六级 644，GRE 329)</p>
    </div>

</body>
</html>
    `;

    // Resume content for English
    const resumeContentEn = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SERENA XU - Resume</title>
    <style>
        body { font-family: "Calibri", "Arial", sans-serif; line-height: 1.5; color: #000; max-width: 800px; margin: 0 auto; padding: 40px; }
        h1 { font-size: 24px; font-weight: bold; margin-bottom: 5px; text-transform: uppercase; }
        .header { margin-bottom: 20px; border-bottom: 1px solid #000; padding-bottom: 10px; display: flex; justify-content: space-between; align-items: flex-end;}
        .header-info { text-align: right; font-size: 14px; }
        .header-info a { color: #000; text-decoration: none; }
        
        h2 { font-size: 14px; background-color: #e0e0e0; padding: 4px 8px; margin-top: 20px; margin-bottom: 10px; font-weight: bold; text-transform: uppercase; }
        
        .section-item { margin-bottom: 15px; }
        .item-header { display: flex; justify-content: space-between; font-weight: bold; font-size: 15px; }
        .item-sub { font-style: italic; font-size: 14px; margin-bottom: 2px; }
        .item-details { font-size: 14px; margin-bottom: 4px; }
        
        ul { margin: 4px 0 10px 0; padding-left: 20px; font-size: 14px; }
        li { margin-bottom: 4px; }
        .nested-list { list-style-type: circle; margin-top: 2px; margin-bottom: 2px; }
        
        .skills-section { font-size: 14px; }
        
        @media print {
            body { padding: 0; }
            h2 { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        }
    </style>
</head>
<body>

    <div class="header">
        <h1>SERENA XU</h1>
        <div class="header-info">
            Email: <a href="mailto:shuwen.xu@u.nus.edu">shuwen.xu@u.nus.edu</a><br>
            Mobile: +86 182 5209 8702
        </div>
    </div>



    <h2>INTERNSHIP EXPERIENCE</h2>
    
    <div class="section-item">
        <div class="item-header">
            <span>Data Analytics Intern</span>
            <span>Jul 2025 - Present</span>
        </div>
        <div class="item-sub">ByteDance - Douyin Image & Text - User Growth</div>
        <ul>
            <li>Built a growth-oriented data monitoring system from scratch to support high-frequency strategy iterations and conversion-rate optimization
                <ul class="nested-list">
                    <li>“Big Loop” Dashboard: Designed a core metric framework covering new-user consumption, content supply, distribution efficiency and funnel conversion, defined SQL data logic to enable end-to-end monitoring of Douyin’s in-app traffic flow to the standalone app (Croissant) and facilitated daily attribution analysis</li>
                    <li>“Interest Circles” Dashboard: Set “Fun Event Sign-ups” as the North-Star metric and decomposed key drivers including event count, submissions per event, views per submission and multi-stage conversion (exposure → click → sign-up) to pinpoint bottlenecks and improve event conversion</li>
                </ul>
            </li>
            <li>Led A/B test design, review and decision loops to validate revenue impact and drive core metric growth
                <ul class="nested-list">
                    <li>Evaluated experiments such as “Time-Segment Retention Validation,” identified logical chain breaks and recommended termination to ensure optimal resource allocation</li>
                    <li>Directed the “Enhanced Follower-Relation Distribution” experiment, achieved statistical significance (p < 0.05) and full rollout, increasing follower-relation exposure PV share by +3.3%, UV penetration by +2.2% and new-user acquisition rate from 0.0072% to 0.0075%</li>
                </ul>
            </li>
        </ul>
    </div>

    <div class="section-item">
        <div class="item-header">
            <span>Data Analytics Intern</span>
            <span>Feb 2025 - Jul 2025</span>
        </div>
        <div class="item-sub">Didi Chuxing - Didi Luxe - Experience Operations</div>
        <ul>
            <li>Developed an experience-driven anomaly monitoring and attribution system to improve service issue detection and root-cause efficiency
                <ul class="nested-list">
                    <li>Diagnostic Modeling: created a driver-passenger experience metric framework and created a multi-dimensional Tableau dashboard segmented by city, user mindset and service touchpoint, using box-plot to identify real-time anomalies and trace root causes, reducing issue-resolution time by 72 hours</li>
                    <li>Delivered more than ten reusable automated SQL templates, covering over 80 percent of routine data-pull needs, doubling query response efficiency</li>
                </ul>
            </li>
            <li>Applied experience modeling and causal inference to uncover core user pain points and guide resource allocation
                <ul class="nested-list">
                    <li>Negative Review Insights: Built panel-regression and random-forest models (AUC 0.989) in Python to analyze over 20K low-rating orders, disproving the hypothesis that driver NPS linearly affects satisfaction, and surfacing hidden drivers such as driver income and fatigue, informed loyalty-tier redesign and order-dispatch pilots</li>
                    <li>Experience Impact Quantification: Mapped the user order journey across 5 stages, identifying 61 key negative experience scenarios then used a difference-in-differences model to design Quasi-A/B tests and measure impact on daily order volume retention decline and per-capita GMV decline, finding 14 high-loss scenarios representing 23% of all cases but 80.14% of platform loss and directing resource prioritization</li>
                </ul>
            </li>
        </ul>
    </div>

    <div class="section-item">
        <div class="item-header">
            <span>Data Operations Intern</span>
            <span>Apr 2024 - Jul 2024</span>
        </div>
        <div class="item-sub">CUPSHE - User Operations & Experience Growth</div>
        <ul>
            <li>Completed CRM data ETL via SQL, designed dynamic Tableau dashboards for drill-down analysis, and tracked key metrics such as complaint rate, repeat complaint rate, and resolution time</li>
            <li>Produced weekly reports to support business decisions, focusing on the proportion of complaint categories, regional distribution, and special analysis; drove cross-department special projects, achieving an 85% resolution rate for complex issues</li>
            <li>Optimized the standard response knowledge base by adding 18 new problem tags and scripts, reducing single case handling time from 5 minutes to 4 minutes and enhancing customer service efficiency by 35%</li>
        </ul>
    </div>

    <div class="section-item">
        <div class="item-header">
            <span>User Growth Intern</span>
            <span>Jun 2023 - Aug 2023</span>
        </div>
        <div class="item-sub">CITIC Securities - Business Development</div>
        <ul>
            <li>Conducted market analysis using Python to calculate HHI index and CR5 concentration; completed a market share benchmark of 10 competitors and produced a SWOT analysis report</li>
            <li>Managed user data and leveraged RFM model and hierarchical clustering to segment over 2,000 users into groups such as "high-net-worth conservative," "potential aggressive," "price-sensitive mobile," and "dormant high-potential"</li>
            <li>Designed differentiated outreach strategies, such as offering a "dedicated consultant + fee-free" benefits package for high-net-worth users, boosted the response rate of high-value clients by 18%</li>
        </ul>
    </div>

    <h2>PROJECT EXPERIENCE</h2>
    <div class="section-item">
        <div class="item-header">
            <span>Team Leader and Project Analyst</span>
            <span>Oct 2024 - Nov 2024</span>
        </div>
        <div class="item-sub">Optimization Strategies for Spotify’s Recommendation System</div>
        <ul>
            <li>Multimodal Fusion Closed-Loop Validation: Led a 5-person team to deeply analyze recommendation mechanisms based on content, popularity, and social feedback, deploying data dashboards and over 20 machine learning models</li>
            <li>Model Comparison and Selection: Among 5 popularity prediction methods, Neural Networks (R2=0.746) and XGBoost (R2=0.725) were the most effective; from 4 sentiment analysis and 7 topic modelling models, BiLSTM (Accuracy≈65%) and LDA/NMF (Confusion matrix metrics > 76%, topic coherence > 0.6) were the optimal</li>
            <li>Recommendation Prototype: Used an autoencoder to implement TOP 20 similar recommendations and leveraged Reddit comments (LDA perplexity ≈ -7.454) to provide cold-start recommendations for new albums</li>
        </ul>
    </div>

    <h2>PUBLICATION</h2>
    <div class="section-item">
        <ul>
            <li>Xu, Y.; Tian, G.; Xu, S.; Xia, Q. Analysis of Virtual Water Flow Patterns and Their Drivers in the Yellow River Basin Sustainability 2023,15, 4393. (https://doi.org/10.3390/su15054393)</li>
        </ul>
    </div>

    <h2>TECHNICAL SKILLS</h2>
    <div class="section-item skills-section">
        <ul>
            <li>Data Analysis Tools: SQL, Python, Power BI, Tableau, Excel</li>
            <li>Language Skills: Mandarin (Native Speaker), English (IELTS 7.5, CET-6 644, GRE 329)</li>
        </ul>
    </div>

</body>
</html>
    `;

    const blob = new Blob([isEn ? resumeContentEn : resumeContentZh], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = isEn ? 'Serena_Xu_Resume_EN.html' : 'Serena_Xu_Resume_CN.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setShowDownloadMenu(false);
  };

  return (
    <section className="pt-8 pb-10 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center justify-center gap-12 text-center">
          
          {/* Action Buttons Container */}
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
            
            {/* Download Resume Button Wrapper */}
            <div className="relative">
              <button 
                onClick={() => setShowDownloadMenu(!showDownloadMenu)}
                className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-orange-500 to-amber-500 hover:opacity-90 text-white rounded-md font-semibold shadow-lg shadow-orange-500/20 transition-all hover:translate-y-[-2px] text-sm tracking-wide cursor-pointer"
              >
                <Download size={16} />
                {t.about.downloadResume}
              </button>

              {/* Dropdown Menu */}
              {showDownloadMenu && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setShowDownloadMenu(false)}></div>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50">
                    <div className="w-48 bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-slate-200 dark:border-white/10 overflow-hidden animate-fade-in-up">
                      <button
                        onClick={() => handleDownloadResume('en')}
                        className="w-full px-4 py-3 text-left text-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors flex items-center justify-between group text-slate-700 dark:text-slate-200"
                      >
                        <span className="font-medium">English Version</span>
                      </button>
                      <div className="h-[1px] bg-slate-100 dark:bg-white/5"></div>
                      <button
                        onClick={() => handleDownloadResume('zh')}
                        className="w-full px-4 py-3 text-left text-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors flex items-center justify-between group text-slate-700 dark:text-slate-200"
                      >
                        <span className="font-medium">Chinese Version</span>
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Social Links */}
            <div className="flex gap-8 text-slate-500 items-center">
              
              {/* Email with Popover */}
              <div className="relative flex flex-col items-center gap-2 group cursor-pointer">
                <button 
                  onClick={() => setShowEmailCard(!showEmailCard)}
                  className="p-3 bg-white dark:bg-white/5 rounded-full shadow-sm group-hover:scale-110 transition-transform border border-slate-100 dark:border-white/10 hover:text-orange-500"
                >
                  <Mail size={18} />
                </button>
                <span className="text-[10px] uppercase font-bold tracking-wider opacity-0 group-hover:opacity-100 transition-opacity absolute top-full mt-2 whitespace-nowrap">{t.about.social.email}</span>
                
                {/* Popover Card */}
                {showEmailCard && (
                  <>
                    <div className="fixed inset-0 z-10" onClick={() => setShowEmailCard(false)}></div>
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 z-20">
                      <div className="w-64 bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-slate-200 dark:border-white/10 p-4 animate-fade-in-up text-left relative">
                        <div className="flex justify-between items-start mb-2">
                          <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Email Address</span>
                          <button onClick={() => setShowEmailCard(false)} className="text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-200">
                            <X size={14} />
                          </button>
                        </div>
                        <a href={SOCIAL_URLS.email} className="block text-sm font-semibold text-orange-600 hover:underline mb-3 truncate">
                          shuwen.xu@u.nus.edu
                        </a>
                        <button 
                          onClick={handleCopyEmail}
                          className="flex items-center justify-center gap-2 w-full py-1.5 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded text-xs font-medium transition-colors text-slate-600 dark:text-slate-300"
                        >
                          {copied ? <Check size={12} /> : <Copy size={12} />}
                          {copied ? 'Copied' : 'Copy'}
                        </button>
                        {/* Triangle Pointer */}
                        <div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-white dark:bg-slate-800 border-b border-r border-slate-200 dark:border-white/10 rotate-45"></div>
                      </div>
                    </div>
                  </>
                )}
              </div>

              <a href={SOCIAL_URLS.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors flex flex-col items-center gap-2 group cursor-pointer relative">
                <div className="p-3 bg-white dark:bg-white/5 rounded-full shadow-sm group-hover:scale-110 transition-transform border border-slate-100 dark:border-white/10">
                  <Linkedin size={18} />
                </div>
                <span className="text-[10px] uppercase font-bold tracking-wider opacity-0 group-hover:opacity-100 transition-opacity absolute top-full mt-2 whitespace-nowrap">{t.about.social.linkedin}</span>
              </a>
              <a href={SOCIAL_URLS.github} target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors flex flex-col items-center gap-2 group cursor-pointer relative">
                <div className="p-3 bg-white dark:bg-white/5 rounded-full shadow-sm group-hover:scale-110 transition-transform border border-slate-100 dark:border-white/10">
                  <Github size={18} />
                </div>
                <span className="text-[10px] uppercase font-bold tracking-wider opacity-0 group-hover:opacity-100 transition-opacity absolute top-full mt-2 whitespace-nowrap">{t.about.social.github}</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
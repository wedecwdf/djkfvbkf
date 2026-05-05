import { useState, useEffect, useRef } from "react";

const Hero = () => {
  const [stats] = useState({ total: 128, monthly: 12 });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const strategies = [
    { name: "双均线突破", language: "Python", return: "+32.5%", metric1: "最大回撤 12.3%", metric2: "夏普 1.86", avatars: ["张", "李", "王"], viewers: 12, comment: "描述清楚后3天交付，代码注释详细，直接跑通回测！", author: "张先生 · 私募研究员", rating: 4.5 },
    { name: "MACD金叉", language: "MQL5", return: "+28.7%", metric1: "胜率 62%", metric2: "盈亏比 2.1", avatars: ["陈", "赵", "周"], viewers: 8, comment: "工程师很专业，帮我修正了逻辑漏洞，MT5直接加载就能用。", author: "陈女士 · 独立交易员", rating: 5 },
    { name: "RSI背离", language: "JavaScript", return: "+41.2%", metric1: "最大回撤 15.7%", metric2: "卡玛 2.6", avatars: ["刘", "孙", "吴"], viewers: 15, comment: "沟通顺畅，JS实现复杂逻辑，还附带了详细使用说明，超值！", author: "刘先生 · 币圈量化", rating: 5 }
  ];

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => setCurrentSlide(prev => (prev + 1) % strategies.length), 3000);
    return () => clearInterval(interval);
  }, [isPaused, strategies.length]);

  const nextSlide = () => setCurrentSlide(prev => (prev + 1) % strategies.length);
  const prevSlide = () => setCurrentSlide(prev => (prev - 1 + strategies.length) % strategies.length);
  const avatarColors = ["bg-red-200 text-red-700", "bg-blue-200 text-blue-700", "bg-green-200 text-green-700", "bg-purple-200 text-purple-700", "bg-yellow-200 text-yellow-700", "bg-indigo-200 text-indigo-700"];

  const renderStars = (rating: number) => {
    const full = Math.floor(rating);
    const half = rating % 1 !== 0;
    return (
      <>
        {Array.from({length: full}, (_, i) => <i key={`f${i}`} className="fas fa-star"></i>)}
        {half && <i className="fas fa-star-half-alt"></i>}
        {Array.from({length: 5 - Math.ceil(rating)}, (_, i) => <i key={`e${i}`} className="far fa-star"></i>)}
      </>
    );
  };

  return (
    <section id="hero" className="pt-8 pb-6 px-6 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-red-50 to-amber-50 rounded-full mb-4 border border-red-200">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            <span className="text-sm font-medium text-red-700">📊 实时数据：已交付{stats.total}个策略 · 本月{stats.monthly}个</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            将交易<span className="text-red-600">想法</span>变为<span className="text-red-600">可执行代码</span>
          </h1>
          <p className="text-gray-600 mb-4 max-w-lg">
            ✨ 策略代码编写 <span className="text-red-600 font-bold">完全免费</span> · 仅部署与后续维护收费<br />
            <span className="font-medium text-gray-800">支持 Python/JavaScript/MQL · 兼容主流回测框架</span>
          </p>
          <div className="flex flex-wrap gap-3 mb-5">
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-bold shadow-xl shadow-red-200 transition flex items-center gap-2 text-sm">
              <i className="fas fa-file-code"></i>提交策略需求
            </button>
            <button className="border-2 border-red-200 hover:bg-red-50 text-red-700 px-6 py-3 rounded-xl font-bold transition flex items-center gap-2 text-sm">
              <i className="fas fa-calculator"></i>免费获取估价
            </button>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <span className="trust-badge border border-green-200 bg-green-50/40 text-green-700 px-3 py-1 rounded-full text-xs"><i className="fas fa-shield-alt text-green-600 mr-1"></i>保密协议</span>
            <span className="trust-badge border border-blue-200 bg-blue-50/40 text-blue-700 px-3 py-1 rounded-full text-xs"><i className="fas fa-sync-alt text-blue-600 mr-1"></i>7天免费修改</span>
            <span className="trust-badge border border-orange-200 bg-orange-50/40 text-orange-700 px-3 py-1 rounded-full text-xs"><i className="fas fa-clock text-orange-500 mr-1"></i>24h交付</span>
          </div>
        </div>
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-red-100/50 shadow-lg p-5" ref={containerRef} onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2"><i className="fas fa-fire text-red-500 text-lg"></i><span className="font-bold text-gray-800">🔥 本周热门策略</span></div>
            <span className="text-xs text-red-600 bg-red-50 px-3 py-1 rounded-full"><i className="far fa-calendar-alt mr-1"></i>更新于今日</span>
          </div>
          <div className="bg-white rounded-xl border border-red-100/50 p-4 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2"><span className="font-bold text-base">{strategies[currentSlide].name}</span><span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{strategies[currentSlide].language}</span></div>
              <span className="text-red-600 font-bold text-base">{strategies[currentSlide].return} <span className="text-xs font-normal text-gray-400">年化</span></span>
            </div>
            <div className="flex items-center gap-4 mt-3 text-xs text-gray-600 border-t border-gray-100 pt-3">
              <div className="flex items-center gap-1"><i className="fas fa-chart-line text-red-400"></i><span>{strategies[currentSlide].metric1}</span></div>
              <div className="flex items-center gap-1"><i className="fas fa-tachometer-alt text-red-400"></i><span>{strategies[currentSlide].metric2}</span></div>
            </div>
            <div className="mt-3 bg-red-50/80 rounded-2xl rounded-bl-md p-3">
              <p className="text-xs text-gray-700 italic">“{strategies[currentSlide].comment}”</p>
              <div className="flex items-center justify-between mt-2">
                <span className="text-[10px] text-gray-500"><i className="fas fa-user-circle"></i>{strategies[currentSlide].author}</span>
                <span className="flex items-center text-yellow-400 text-[10px]">{renderStars(strategies[currentSlide].rating)}</span>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between">
              <div className="flex -space-x-1.5">
                {strategies[currentSlide].avatars.map((letter, idx) => (
                  <div key={idx} className={`w-7 h-7 rounded-full ${avatarColors[idx % avatarColors.length]} border-2 border-white flex items-center justify-center text-[10px] font-bold`}>{letter}</div>
                ))}
              </div>
              <span className="text-xs text-gray-500"><span className="font-bold text-gray-800">{strategies[currentSlide].viewers}位</span> 浏览</span>
            </div>
          </div>
          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center gap-1.5">
              {strategies.map((_, idx) => (
                <button key={idx} onClick={() => setCurrentSlide(idx)} className={`carousel-dot ${idx === currentSlide ? 'active w-7' : 'w-2'} h-2 rounded-full transition-all duration-300`}></button>
              ))}
            </div>
            <div className="flex items-center gap-2 text-gray-400 text-xs">
              <button onClick={prevSlide} className="hover:text-red-600"><i className="fas fa-chevron-left"></i></button>
              <button onClick={nextSlide} className="hover:text-red-600"><i className="fas fa-chevron-right"></i></button>
            </div>
          </div>
          <div className="text-center text-xs text-gray-400 mt-2">每3秒自动切换 · 悬停暂停</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


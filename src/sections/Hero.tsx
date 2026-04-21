import { useState } from "react";

const Hero = () => {
  const [stats] = useState({ total: 128, monthly: 12 });

  return (
    <section id="hero" className="pt-36 pb-16 px-6 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div className="animate__animated animate__fadeInLeft">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-red-50 to-amber-50 rounded-full mb-6 border border-red-200">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            <span className="text-sm font-medium text-red-700">
              📊 实时数据：已交付{stats.total}个策略 · 本月{stats.monthly}个
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            将交易<span className="text-red-600">想法</span>
            <br />
            变为<span className="bg-gradient-to-r from-red-600 to-amber-600 bg-clip-text text-transparent">可执行代码</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg">
            专业量化策略实现 · 支持 Python/JavaScript/MQL · 兼容 Backtrader/Zipline/MT5
            <br />
            <span className="font-semibold text-gray-800">注释清晰，交付即用，免费修改</span>
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-red-200 transition flex items-center gap-2 text-base">
              <i className="fas fa-file-code"></i> 提交策略需求
            </button>
            <button className="border-2 border-red-200 hover:bg-red-50 text-red-700 px-8 py-4 rounded-xl font-bold transition flex items-center gap-2">
              <i className="fas fa-calculator"></i> 免费获取估价
            </button>
          </div>
          <div className="flex items-center gap-6 mt-8 text-sm text-gray-500">
            <div className="flex items-center gap-1"><i className="fas fa-shield-alt text-green-600"></i> 保密协议</div>
            <div className="flex items-center gap-1"><i className="fas fa-sync-alt text-blue-600"></i> 7天免费修改</div>
            <div className="flex items-center gap-1"><i className="fas fa-clock text-orange-500"></i> 24h交付(加急)</div>
          </div>
        </div>
        <div className="animate__animated animate__fadeInRight">
          <div className="gradient-border p-6 bg-white/90 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
              <span className="font-bold text-gray-800 text-lg">🔥 本周热门策略</span>
              <span className="text-xs text-red-600 bg-red-50 px-3 py-1 rounded-full">更新于今日</span>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                <div><span className="font-medium">双均线突破</span><span className="text-xs text-gray-500 ml-2">Python</span></div>
                <span className="text-green-600 font-semibold text-sm">+32.5% <span className="text-gray-400 text-xs font-normal">年化</span></span>
              </div>
              <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                <div><span className="font-medium">MACD金叉</span><span className="text-xs text-gray-500 ml-2">MQL5</span></div>
                <span className="text-green-600 font-semibold text-sm">+28.7% <span className="text-gray-400 text-xs font-normal">年化</span></span>
              </div>
              <div className="flex items-center justify-between">
                <div><span className="font-medium">RSI背离</span><span className="text-xs text-gray-500 ml-2">JavaScript</span></div>
                <span className="text-green-600 font-semibold text-sm">+41.2% <span className="text-gray-400 text-xs font-normal">年化</span></span>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-red-200 border-2 border-white flex items-center justify-center text-xs font-bold text-red-700">张</div>
                <div className="w-8 h-8 rounded-full bg-blue-200 border-2 border-white flex items-center justify-center text-xs font-bold text-blue-700">李</div>
                <div className="w-8 h-8 rounded-full bg-green-200 border-2 border-white flex items-center justify-center text-xs font-bold text-green-700">王</div>
              </div>
              <span className="text-gray-600"><span className="font-bold text-gray-800">12位</span> 客户今日浏览</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* 数据看板 (强化版) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 hover-lift">
          <div className="flex items-center justify-between"><span className="text-gray-500 text-sm">累计交付</span><i className="fas fa-check-circle text-green-500"></i></div>
          <div className="text-4xl font-bold text-gray-800 mt-1">128<span className="text-base font-normal text-gray-400 ml-1">个</span></div>
          <div className="text-xs text-green-600 mt-2"><i className="fas fa-arrow-up"></i> +12 本月</div>
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 hover-lift">
          <div className="flex items-center justify-between"><span className="text-gray-500 text-sm">客户评分</span><i className="fas fa-star text-yellow-400"></i></div>
          <div className="text-4xl font-bold text-gray-800 mt-1">4.95<span className="text-base font-normal text-gray-400 ml-1">/5.0</span></div>
          <div className="text-xs text-gray-500 mt-2">基于 86 条评价</div>
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 hover-lift">
          <div className="flex items-center justify-between"><span className="text-gray-500 text-sm">平均交付</span><i className="fas fa-hourglass-half text-blue-500"></i></div>
          <div className="text-4xl font-bold text-gray-800 mt-1">2.4<span className="text-base font-normal text-gray-400 ml-1">天</span></div>
          <div className="text-xs text-blue-600 mt-2"><i className="fas fa-bolt"></i> 加急可24h</div>
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 hover-lift">
          <div className="flex items-center justify-between"><span className="text-gray-500 text-sm">复购率</span><i className="fas fa-redo-alt text-purple-500"></i></div>
          <div className="text-4xl font-bold text-gray-800 mt-1">72<span className="text-base font-normal text-gray-400 ml-1">%</span></div>
          <div className="text-xs text-purple-600 mt-2">客户再次委托</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;



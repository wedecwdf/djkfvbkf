const ContactCTA = () => {
  return (
    <section id="contact" className="py-10 px-6 max-w-6xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        {/* 左侧：核心价值 + 信任徽章 */}
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-red-50 px-4 py-2 rounded-full border border-red-200 shadow-sm mb-6">
            <span className="w-2 h-2 bg-red-600 rounded-full"></span>
            <span className="text-sm font-semibold text-red-700 uppercase tracking-wider">代码免费 · 部署收费</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            准备好将策略变成<span className="text-red-600">代码</span>了吗？
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-6 max-w-xl lg:mx-0 mx-auto">
            专注策略代码实现，不提供投资建议。<br />
            <span className="font-semibold text-gray-800">
              ✨ 策略代码编写 <span className="text-red-600 font-bold">完全免费</span> · 仅部署与后续维护收费
            </span>
          </p>

          <div className="flex flex-wrap items-center gap-4 justify-center lg:justify-start">
            <div className="flex items-center gap-1.5 bg-gray-50 px-4 py-2 rounded-full border border-gray-200">
              <i className="fas fa-shield-alt text-green-600"></i>
              <span className="text-sm font-medium text-gray-700">保密协议</span>
            </div>
            <div className="flex items-center gap-1.5 bg-gray-50 px-4 py-2 rounded-full border border-gray-200">
              <i className="fas fa-sync-alt text-blue-600"></i>
              <span className="text-sm font-medium text-gray-700">7天免费修改</span>
            </div>
            <div className="flex items-center gap-1.5 bg-gray-50 px-4 py-2 rounded-full border border-gray-200">
              <i className="fas fa-clock text-orange-500"></i>
              <span className="text-sm font-medium text-gray-700">24h快速响应</span>
            </div>
          </div>
        </div>

        {/* 右侧：联系信息 + 行动按钮 (无背景卡片) */}
        <div className="flex-1 w-full max-w-md">
          <div className="space-y-5">
            {/* 微信联系 — 确保图标存在 */}
            <div className="flex items-center gap-4 p-4 bg-gray-50/50 rounded-xl border border-gray-200/60 hover:bg-gray-50 transition cursor-pointer group">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-105 transition">
                <i className="fab fa-weixin text-white text-2xl"></i>
              </div>
              <div className="flex-1">
                <p className="font-bold text-gray-800 text-lg">微信联系</p>
                <p className="text-sm text-gray-600">专属顾问 · 即时沟通</p>
              </div>
              <i className="fas fa-chevron-right text-gray-400 group-hover:translate-x-1 transition"></i>
            </div>

            {/* 邮箱联系 — 确保图标存在 */}
            <div className="flex items-center gap-4 p-4 bg-gray-50/50 rounded-xl border border-gray-200/60 hover:bg-gray-50 transition cursor-pointer group">
              <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-105 transition">
                <i className="far fa-envelope text-white text-2xl"></i>
              </div>
              <div className="flex-1">
                <p className="font-bold text-gray-800 text-lg">code@strategy.works</p>
                <p className="text-sm text-gray-600">2小时内回复 · 支持对公转账</p>
              </div>
              <i className="fas fa-copy text-gray-400 hover:text-red-500 transition" title="复制邮箱"></i>
            </div>
          </div>

          <div className="mt-8">
            <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-xl shadow-md shadow-red-200 transition flex items-center justify-center gap-3 text-base">
              <i className="fas fa-paper-plane"></i> 立即提交需求 · 免费获取评估
            </button>
            <p className="text-xs text-gray-400 mt-4 text-center flex items-center justify-center gap-2">
              <i className="fas fa-lock"></i> 您的信息仅用于策略沟通，严格保密
            </p>
          </div>
        </div>
      </div>

      {/* 底部微型装饰 */}
      <div className="flex justify-center mt-10">
        <div className="flex items-center gap-6 text-xs text-gray-400">
          <span className="flex items-center gap-1"><i className="fas fa-check-circle text-green-500"></i> 100%可运行</span>
          <span className="flex items-center gap-1"><i className="fas fa-file-invoice"></i> 支持对公转账</span>
          <span className="flex items-center gap-1"><i className="fas fa-headset"></i> 售后无忧</span>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;

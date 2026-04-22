const ContactCTA = () => {
  return (
    <section id="contact" className="py-16 px-6 max-w-6xl mx-auto">
      <div className="relative rounded-3xl overflow-hidden border border-red-100 shadow-2xl">
        {/* 背景装饰层 */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-amber-50/30 pointer-events-none"></div>
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-red-200/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-amber-200/20 rounded-full blur-3xl"></div>

        {/* 内容区域 */}
        <div className="relative px-6 py-12 md:py-16 md:px-12 flex flex-col lg:flex-row items-center gap-10">
          {/* 左侧：核心价值 + 信任徽章 */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-red-200 shadow-sm mb-6">
              <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></span>
              <span className="text-sm font-semibold text-red-700 uppercase tracking-wider">限时免费 · 仅部署收费</span>
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

            {/* 信任标识组 */}
            <div className="flex flex-wrap items-center gap-4 justify-center lg:justify-start">
              <div className="flex items-center gap-1.5 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 shadow-sm">
                <i className="fas fa-shield-alt text-green-600"></i>
                <span className="text-sm font-medium text-gray-700">保密协议</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 shadow-sm">
                <i className="fas fa-sync-alt text-blue-600"></i>
                <span className="text-sm font-medium text-gray-700">7天免费修改</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 shadow-sm">
                <i className="fas fa-clock text-orange-500"></i>
                <span className="text-sm font-medium text-gray-700">24h快速响应</span>
              </div>
            </div>
          </div>

          {/* 右侧：联系卡片 + 行动按钮 */}
          <div className="flex-1 w-full max-w-md">
            <div className="bg-white/85 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl border border-red-100 hover:border-red-200 transition-all duration-300">
              {/* 联系选项 */}
              <div className="space-y-5">
                {/* 微信联系 (主推) */}
                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200 hover:shadow-md transition cursor-pointer group">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center shadow-md shadow-green-200 group-hover:scale-105 transition">
                    <i className="fab fa-weixin text-white text-2xl"></i>
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-gray-800 text-lg">微信联系</p>
                    <p className="text-sm text-gray-600">专属顾问 · 即时沟通</p>
                  </div>
                  <i className="fas fa-chevron-right text-green-500 group-hover:translate-x-1 transition"></i>
                </div>

                {/* 邮箱联系 (辅助) */}
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-200 hover:shadow-md transition cursor-pointer group">
                  <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center shadow-md group-hover:scale-105 transition">
                    <i className="far fa-envelope text-white text-2xl"></i>
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-gray-800 text-lg">code@strategy.works</p>
                    <p className="text-sm text-gray-600">2小时内回复 · 支持对公转账</p>
                  </div>
                  <i className="fas fa-copy text-gray-400 hover:text-red-500 transition" title="复制邮箱"></i>
                </div>
              </div>

              {/* 行动按钮 */}
              <div className="mt-8">
                <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-red-200 transition flex items-center justify-center gap-3 text-base">
                  <i className="fas fa-paper-plane"></i> 立即提交需求 · 免费获取评估
                </button>
                <p className="text-xs text-gray-400 mt-4 text-center flex items-center justify-center gap-2">
                  <i className="fas fa-lock"></i> 您的信息仅用于策略沟通，严格保密
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 底部微型装饰 */}
      <div className="flex justify-center mt-6">
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

const Workflow = () => {
  return (
    <section id="workflow" className="py-12 px-6 max-w-7xl mx-auto relative">
      {/* 区块标题 */}
      <div className="text-center mb-14">
        <span className="text-red-600 font-semibold text-sm uppercase tracking-wider bg-red-50 px-3 py-1 rounded-full">
          合作流程
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-4 text-gray-900">
          简单三步，策略变代码
        </h2>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto">
          清晰透明的合作流程，让您省心省力
        </p>
      </div>

      {/* 三步卡片 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
        {/* 步骤 1 */}
        <div className="step-card rounded-2xl p-6 pt-0 text-center flex flex-col items-center relative z-10 bg-white border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
          <div className="step-number w-12 h-12 bg-white border-2 border-red-200 text-red-600 font-bold text-2xl rounded-full flex items-center justify-center -mt-6 mb-4 shadow-sm group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 transition-all">
            1
          </div>
          <div className="feature-icon w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center text-red-600 mx-auto mb-3">
            <i className="fas fa-pencil-alt text-lg"></i>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">提交策略描述</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            通过文字、图表或语音描述你的交易逻辑，越详细越好。我们提供
            <span className="font-medium text-red-600">需求模板</span>辅助填写。
          </p>
          <div className="mt-5 pt-4 border-t border-gray-100 w-full">
            <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
              <span className="flex items-center gap-1"><i className="fas fa-file-alt text-red-400"></i> 支持图文</span>
              <span className="flex items-center gap-1"><i className="fas fa-microphone text-red-400"></i> 语音说明</span>
              <span className="flex items-center gap-1"><i className="fas fa-clock text-red-400"></i> 24h响应</span>
            </div>
          </div>
          {/* 桌面端连接线 */}
          <div className="hidden md:block absolute top-20 left-full w-[calc(100%-30px)] h-0.5 bg-gradient-to-r from-red-200 to-gray-200 -z-10"></div>
        </div>

        {/* 步骤 2 */}
        <div className="step-card rounded-2xl p-6 pt-0 text-center flex flex-col items-center relative z-10 bg-white border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
          <div className="step-number w-12 h-12 bg-white border-2 border-red-200 text-red-600 font-bold text-2xl rounded-full flex items-center justify-center -mt-6 mb-4 shadow-sm group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 transition-all">
            2
          </div>
          <div className="feature-icon w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center text-red-600 mx-auto mb-3">
            <i className="fas fa-file-signature text-lg"></i>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">确认框架与报价</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            我们评估复杂度，给出<span className="font-medium text-red-600">透明报价</span>和预计交付时间，双方确认后开始编码。
          </p>
          <div className="mt-5 pt-4 border-t border-gray-100 w-full">
            <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
              <span className="flex items-center gap-1"><i className="fas fa-calculator text-red-400"></i> 即时估价</span>
              <span className="flex items-center gap-1"><i className="fas fa-calendar-check text-red-400"></i> 明确周期</span>
              <span className="flex items-center gap-1"><i className="fas fa-file-contract text-red-400"></i> 无隐藏费</span>
            </div>
          </div>
          <div className="hidden md:block absolute top-20 left-full w-[calc(100%-30px)] h-0.5 bg-gradient-to-r from-red-200 to-gray-200 -z-10"></div>
        </div>

        {/* 步骤 3 */}
        <div className="step-card rounded-2xl p-6 pt-0 text-center flex flex-col items-center relative z-10 bg-white border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
          <div className="step-number w-12 h-12 bg-white border-2 border-red-200 text-red-600 font-bold text-2xl rounded-full flex items-center justify-center -mt-6 mb-4 shadow-sm group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 transition-all">
            3
          </div>
          <div className="feature-icon w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center text-red-600 mx-auto mb-3">
            <i className="fas fa-code-branch text-lg"></i>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">交付源码与说明</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            收到代码后，可要求<span className="font-medium text-red-600">一次免费修改</span>（逻辑范围内），并提供详细使用指导。
          </p>
          <div className="mt-5 pt-4 border-t border-gray-100 w-full">
            <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
              <span className="flex items-center gap-1"><i className="fas fa-check-double text-red-400"></i> 免费修改</span>
              <span className="flex items-center gap-1"><i className="fas fa-book-open text-red-400"></i> 使用文档</span>
              <span className="flex items-center gap-1"><i className="fas fa-headset text-red-400"></i> 售后指导</span>
            </div>
          </div>
        </div>
      </div>

      {/* 底部行动按钮 */}
      <div className="text-center mt-12">
        <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3.5 rounded-xl font-semibold shadow-lg shadow-red-200 transition flex items-center gap-2 mx-auto">
          <i className="fas fa-paper-plane"></i> 立即提交需求
        </button>
        <p className="text-xs text-gray-400 mt-4 flex items-center justify-center gap-2">
          <i className="fas fa-shield-alt"></i> 全程保密，代码可运行保证
        </p>
      </div>
    </section>
  );
};

export default Workflow;


const Services = () => {
  return (
    <section id="services" className="py-12 px-6 max-w-7xl mx-auto">
      {/* 区块标题 */}
      <div className="mb-12 text-center md:text-left">
        <span className="text-red-600 font-semibold text-sm uppercase tracking-wider bg-red-50 px-3 py-1 rounded-full">
          为什么选择我们
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-4 text-gray-900">
          编写策略代码
        </h2>
        <p className="text-gray-600 mt-2 max-w-2xl md:mx-0 mx-auto">
          我们只做代码实现，不提供投资建议。专业、高效、可验证。
        </p>
      </div>

      {/* 三列卡片网格 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {/* 卡片 1: 精准还原逻辑 */}
        <div className="service-card rounded-2xl p-6 shadow-sm flex flex-col h-full bg-white border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
          <div className="flex items-start justify-between mb-4">
            <div className="icon-wrapper w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-md shadow-red-200">
              <i className="fas fa-file-code text-white text-xl"></i>
            </div>
            <span className="text-xs font-medium text-red-500 bg-red-50 px-2.5 py-1 rounded-full">
              核心优势
            </span>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">精准还原逻辑</h3>
          <p className="text-gray-600 text-sm mb-5 leading-relaxed">
            根据文字描述、流程图或伪代码，精确实现策略逻辑，确保无偏差。
          </p>

          <ul className="feature-list flex-1 space-y-2">
            <li className="flex items-start gap-2 text-sm text-gray-700">
              <i className="fas fa-check-circle text-red-500 text-xs mt-1"></i>
              <span>
                <span className="font-medium text-gray-800">支持复杂条件判断</span> — 嵌套逻辑/多因子
              </span>
            </li>
            <li className="flex items-start gap-2 text-sm text-gray-700">
              <i className="fas fa-check-circle text-red-500 text-xs mt-1"></i>
              <span>
                <span className="font-medium text-gray-800">多时间框架处理</span> — 跨周期引用
              </span>
            </li>
            <li className="flex items-start gap-2 text-sm text-gray-700">
              <i className="fas fa-check-circle text-red-500 text-xs mt-1"></i>
              <span>
                <span className="font-medium text-gray-800">自定义指标计算</span> — 原生或第三方库
              </span>
            </li>
          </ul>

          <div className="mt-6 pt-4 border-t border-gray-100">
            <a
              href="#"
              className="learn-more-link inline-flex items-center text-red-600 font-medium text-sm hover:text-red-700 group"
            >
              了解更多{" "}
              <i className="fas fa-arrow-right ml-2 text-xs group-hover:translate-x-1 transition-transform"></i>
            </a>
          </div>
        </div>

        {/* 卡片 2: 回测框架就绪 */}
        <div className="service-card rounded-2xl p-6 shadow-sm flex flex-col h-full bg-white border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
          <div className="flex items-start justify-between mb-4">
            <div className="icon-wrapper w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-md shadow-blue-200">
              <i className="fas fa-chart-line text-white text-xl"></i>
            </div>
            <span className="text-xs font-medium text-blue-500 bg-blue-50 px-2.5 py-1 rounded-full">
              即插即用
            </span>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">回测框架就绪</h3>
          <p className="text-gray-600 text-sm mb-5 leading-relaxed">
            代码兼容 Backtrader、Zipline、VectorBT 等主流回测框架，开箱即用。
          </p>

          <ul className="feature-list flex-1 space-y-2">
            <li className="flex items-start gap-2 text-sm text-gray-700">
              <i className="fas fa-check-circle text-red-500 text-xs mt-1"></i>
              <span>
                <span className="font-medium text-gray-800">标准 OHLCV 数据结构</span> — 与框架无缝对接
              </span>
            </li>
            <li className="flex items-start gap-2 text-sm text-gray-700">
              <i className="fas fa-check-circle text-red-500 text-xs mt-1"></i>
              <span>
                <span className="font-medium text-gray-800">信号输出格式规范</span> — 买入/卖出/持仓
              </span>
            </li>
            <li className="flex items-start gap-2 text-sm text-gray-700">
              <i className="fas fa-check-circle text-red-500 text-xs mt-1"></i>
              <span>
                <span className="font-medium text-gray-800">示例回测脚本</span> — 附带完整运行示例
              </span>
            </li>
          </ul>

          <div className="mt-6 pt-4 border-t border-gray-100">
            <a
              href="#"
              className="learn-more-link inline-flex items-center text-red-600 font-medium text-sm hover:text-red-700 group"
            >
              了解更多{" "}
              <i className="fas fa-arrow-right ml-2 text-xs group-hover:translate-x-1 transition-transform"></i>
            </a>
          </div>
        </div>

        {/* 卡片 3: 详尽注释文档 */}
        <div className="service-card rounded-2xl p-6 shadow-sm flex flex-col h-full bg-white border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
          <div className="flex items-start justify-between mb-4">
            <div className="icon-wrapper w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-md shadow-purple-200">
              <i className="fas fa-file-alt text-white text-xl"></i>
            </div>
            <span className="text-xs font-medium text-purple-500 bg-purple-50 px-2.5 py-1 rounded-full">
              持续维护
            </span>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">详尽注释文档</h3>
          <p className="text-gray-600 text-sm mb-5 leading-relaxed">
            每段代码附带清晰的注释和使用说明，方便后续自行调整和维护。
          </p>

          <ul className="feature-list flex-1 space-y-2">
            <li className="flex items-start gap-2 text-sm text-gray-700">
              <i className="fas fa-check-circle text-red-500 text-xs mt-1"></i>
              <span>
                <span className="font-medium text-gray-800">函数用途说明</span> — 每个函数清晰标注
              </span>
            </li>
            <li className="flex items-start gap-2 text-sm text-gray-700">
              <i className="fas fa-check-circle text-red-500 text-xs mt-1"></i>
              <span>
                <span className="font-medium text-gray-800">参数含义注释</span> — 类型、默认值、作用
              </span>
            </li>
            <li className="flex items-start gap-2 text-sm text-gray-700">
              <i className="fas fa-check-circle text-red-500 text-xs mt-1"></i>
              <span>
                <span className="font-medium text-gray-800">修改注意事项</span> — 关键部分修改指引
              </span>
            </li>
          </ul>

          <div className="mt-6 pt-4 border-t border-gray-100">
            <a
              href="#"
              className="learn-more-link inline-flex items-center text-red-600 font-medium text-sm hover:text-red-700 group"
            >
              了解更多{" "}
              <i className="fas fa-arrow-right ml-2 text-xs group-hover:translate-x-1 transition-transform"></i>
            </a>
          </div>
        </div>
      </div>

      {/* 底部补充说明 */}
      <p className="text-center text-xs text-gray-400 mt-10 flex items-center justify-center gap-2">
        <i className="fas fa-shield-alt"></i> 所有策略代码均经过严格测试，确保可运行
      </p>
    </section>
  );
};

export default Services;


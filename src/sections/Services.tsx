const Services = () => {
  return (
    <section id="services" className="py-8 border-t border-gray-200/60 px-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <span className="text-red-600 font-semibold text-sm uppercase tracking-wider bg-red-50 px-3 py-1 rounded-full">为什么选择我们</span>
        <h2 className="text-3xl font-bold mt-3 text-gray-900">编写策略代码</h2>
        <p className="text-gray-600 mt-2">我们只做代码实现，不提供投资建议。专业、高效、可验证。</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
          <div className="icon-wrapper w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-md shadow-red-200 mb-3"><i className="fas fa-file-code text-white text-lg"></i></div>
          <span className="text-[10px] font-medium text-red-500 bg-red-50 px-2 py-0.5 rounded-full">核心优势</span>
          <h3 className="text-lg font-bold text-gray-800 mt-2 mb-1">精准还原逻辑</h3>
          <p className="text-gray-600 text-xs mb-3">根据文字描述、流程图或伪代码，精确实现策略逻辑，确保无偏差。</p>
          <ul className="space-y-1.5 text-xs text-gray-700">
            <li className="flex items-start gap-1.5"><i className="fas fa-check-circle text-red-500 mt-0.5"></i><span><span className="font-medium">支持复杂条件判断</span> — 嵌套逻辑/多因子</span></li>
            <li className="flex items-start gap-1.5"><i className="fas fa-check-circle text-red-500 mt-0.5"></i><span><span className="font-medium">多时间框架处理</span> — 跨周期引用</span></li>
            <li className="flex items-start gap-1.5"><i className="fas fa-check-circle text-red-500 mt-0.5"></i><span><span className="font-medium">自定义指标计算</span> — 原生或第三方库</span></li>
          </ul>
        </div>
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
          <div className="icon-wrapper w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-md shadow-blue-200 mb-3"><i className="fas fa-chart-line text-white text-lg"></i></div>
          <span className="text-[10px] font-medium text-blue-500 bg-blue-50 px-2 py-0.5 rounded-full">即插即用</span>
          <h3 className="text-lg font-bold text-gray-800 mt-2 mb-1">回测框架就绪</h3>
          <p className="text-gray-600 text-xs mb-3">代码兼容 Backtrader、Zipline、VectorBT 等主流回测框架，开箱即用。</p>
          <ul className="space-y-1.5 text-xs text-gray-700">
            <li className="flex items-start gap-1.5"><i className="fas fa-check-circle text-red-500 mt-0.5"></i><span><span className="font-medium">标准 OHLCV 数据结构</span> — 与框架无缝对接</span></li>
            <li className="flex items-start gap-1.5"><i className="fas fa-check-circle text-red-500 mt-0.5"></i><span><span className="font-medium">信号输出格式规范</span> — 买入/卖出/持仓</span></li>
            <li className="flex items-start gap-1.5"><i className="fas fa-check-circle text-red-500 mt-0.5"></i><span><span className="font-medium">示例回测脚本</span> — 附带完整运行示例</span></li>
          </ul>
        </div>
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
          <div className="icon-wrapper w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-md shadow-purple-200 mb-3"><i className="fas fa-file-alt text-white text-lg"></i></div>
          <span className="text-[10px] font-medium text-purple-500 bg-purple-50 px-2 py-0.5 rounded-full">持续维护</span>
          <h3 className="text-lg font-bold text-gray-800 mt-2 mb-1">详尽注释文档</h3>
          <p className="text-gray-600 text-xs mb-3">每段代码附带清晰的注释和使用说明，方便后续自行调整和维护。</p>
          <ul className="space-y-1.5 text-xs text-gray-700">
            <li className="flex items-start gap-1.5"><i className="fas fa-check-circle text-red-500 mt-0.5"></i><span><span className="font-medium">函数用途说明</span> — 每个函数清晰标注</span></li>
            <li className="flex items-start gap-1.5"><i className="fas fa-check-circle text-red-500 mt-0.5"></i><span><span className="font-medium">参数含义注释</span> — 类型、默认值、作用</span></li>
            <li className="flex items-start gap-1.5"><i className="fas fa-check-circle text-red-500 mt-0.5"></i><span><span className="font-medium">修改注意事项</span> — 关键部分修改指引</span></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;

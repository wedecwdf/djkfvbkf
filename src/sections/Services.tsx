const Services = () => {
  return (
    <section id="services" className="py-16 px-6 max-w-7xl mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          为什么选择我们
          <br />
          编写策略代码
        </h2>
        <p className="text-gray-600 max-w-xl">
          我们只做代码实现，不提供投资建议。专业、高效、可验证。
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* 卡片 1 */}
        <div className="bg-white p-6 rounded-2xl border border-red-100 shadow-sm hover:shadow-md transition flex flex-col h-full">
          <div>
            <i className="fas fa-file-code text-red-600 text-2xl mb-4"></i>
            <h3 className="text-xl font-bold mb-2">精准还原逻辑</h3>
            <p className="text-gray-600 text-sm mb-4">
              根据文字描述、流程图或伪代码，精确实现策略逻辑，确保无偏差。
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <i className="fas fa-check text-red-500 text-xs mt-1"></i>
                <span>支持复杂条件判断</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="fas fa-check text-red-500 text-xs mt-1"></i>
                <span>多时间框架处理</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="fas fa-check text-red-500 text-xs mt-1"></i>
                <span>自定义指标计算</span>
              </li>
            </ul>
          </div>
          <div className="flex-grow"></div>
          <a
            href="#"
            className="inline-flex items-center text-red-600 text-sm font-medium mt-6 hover:text-red-700 transition"
          >
            了解更多 <i className="fas fa-arrow-right ml-1 text-xs"></i>
          </a>
        </div>

        {/* 卡片 2 */}
        <div className="bg-white p-6 rounded-2xl border border-red-100 shadow-sm hover:shadow-md transition flex flex-col h-full">
          <div>
            <i className="fas fa-chart-line text-red-600 text-2xl mb-4"></i>
            <h3 className="text-xl font-bold mb-2">回测框架就绪</h3>
            <p className="text-gray-600 text-sm mb-4">
              代码兼容 Backtrader、Zipline、VectorBT 等主流回测框架。
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <i className="fas fa-check text-red-500 text-xs mt-1"></i>
                <span>标准 OHLCV 数据结构</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="fas fa-check text-red-500 text-xs mt-1"></i>
                <span>信号输出格式规范</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="fas fa-check text-red-500 text-xs mt-1"></i>
                <span>示例回测脚本</span>
              </li>
            </ul>
          </div>
          <div className="flex-grow"></div>
          <a
            href="#"
            className="inline-flex items-center text-red-600 text-sm font-medium mt-6 hover:text-red-700 transition"
          >
            了解更多 <i className="fas fa-arrow-right ml-1 text-xs"></i>
          </a>
        </div>

        {/* 卡片 3 */}
        <div className="bg-gradient-to-br from-red-50 to-white p-6 rounded-2xl border border-red-200 shadow-md flex flex-col h-full">
          <div>
            <i className="fas fa-check-circle text-red-600 text-2xl mb-4"></i>
            <h3 className="text-xl font-bold mb-2">详尽注释文档</h3>
            <p className="text-gray-600 text-sm mb-4">
              每段代码附带清晰的注释和使用说明，方便后续自行调整和维护。
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <i className="fas fa-check text-red-500 text-xs mt-1"></i>
                <span>函数用途说明</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="fas fa-check text-red-500 text-xs mt-1"></i>
                <span>参数含义注释</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="fas fa-check text-red-500 text-xs mt-1"></i>
                <span>修改注意事项</span>
              </li>
            </ul>
          </div>
          <div className="flex-grow"></div>
          <a
            href="#"
            className="inline-flex items-center text-red-600 text-sm font-medium mt-6 hover:text-red-700 transition"
          >
            了解更多 <i className="fas fa-arrow-right ml-1 text-xs"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;

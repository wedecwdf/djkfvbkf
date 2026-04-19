const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 pt-12 pb-6 px-6">
      <div className="max-w-7xl mx-auto">
        {/* 上部分：多列信息 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-gray-700">
          {/* 品牌区 */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                <i className="fas fa-code text-white text-sm"></i>
              </div>
              <span className="text-xl font-bold text-white">
                策略<span className="text-red-500">代码工坊</span>
              </span>
            </div>
            <p className="text-sm text-gray-400 max-w-md">
              专注将交易策略转化为精准代码。支持 Python、JavaScript 等语言，兼容主流回测框架，注释清晰，交付即用。
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white transition"><i className="fab fa-github text-lg"></i></a>
              <a href="#" className="text-gray-400 hover:text-white transition"><i className="fab fa-twitter text-lg"></i></a>
              <a href="#" className="text-gray-400 hover:text-white transition"><i className="fab fa-weixin text-lg"></i></a>
            </div>
          </div>

          {/* 快速链接 */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">快速导航</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-white transition">服务项目</a></li>
              <li><a href="#workflow" className="hover:text-white transition">合作流程</a></li>
              <li><a href="#examples" className="hover:text-white transition">代码示例</a></li>
              <li><a href="#contact" className="hover:text-white transition">联系我们</a></li>
            </ul>
          </div>

          {/* 联系方式 */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">联系方式</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <i className="fas fa-envelope w-4 text-red-500"></i>
                <span>code@strategy.works</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="fab fa-weixin w-4 text-red-500"></i>
                <span>quant_code</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-clock w-4 text-red-500"></i>
                <span>工作日 9:00 - 18:00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 下部分：版权与声明 */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 text-xs text-gray-500">
          <div className="flex flex-wrap gap-x-4 gap-y-1 justify-center md:justify-start">
            <span>© 2024 策略代码工坊</span>
            <span className="hidden md:inline">|</span>
            <a href="#" className="hover:text-gray-300 transition">隐私条款</a>
            <span className="hidden md:inline">|</span>
            <a href="#" className="hover:text-gray-300 transition">使用协议</a>
            <span className="hidden md:inline">|</span>
            <span>不提供投资建议</span>
          </div>
          <div className="mt-3 md:mt-0">
            <span>Made with <i className="fas fa-heart text-red-500 text-[10px]"></i> by 策略代码工坊</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

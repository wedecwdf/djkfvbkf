const Footer = () => {
  return (
    <footer className="w-full bg-white/70 backdrop-blur-sm border-t border-gray-200/60 pt-12 pb-6 px-6 text-gray-600">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-gray-200/70">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-4"><div className="w-8 h-8 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center shadow-sm"><i className="fas fa-code text-white text-sm"></i></div><span className="text-xl font-bold text-gray-800">策略<span className="text-red-600">代码工坊</span></span></div>
            <p className="text-sm text-gray-500 max-w-md leading-relaxed mb-5">专注将交易策略转化为精准代码。支持 Python、JavaScript 等语言，兼容主流回测框架，注释清晰，交付即用。</p>
            <div className="flex items-center gap-4"><a href="#" className="social-icon text-gray-400 hover:text-red-500 transition"><i className="fab fa-github text-lg"></i></a><a href="#" className="social-icon text-gray-400 hover:text-red-500 transition"><i className="fab fa-twitter text-lg"></i></a><a href="#" className="social-icon text-gray-400 hover:text-green-500 transition"><i className="fab fa-weixin text-lg"></i></a></div>
          </div>
          <div className="md:col-span-3">
            <h3 className="text-gray-800 font-semibold text-sm uppercase tracking-wider mb-4 flex items-center gap-2"><span className="w-5 h-0.5 bg-red-400/60 rounded-full"></span>快速导航</h3>
            <ul className="space-y-2.5">
              <li><a href="#services" className="inline-flex items-center gap-1 text-gray-500 hover:text-red-600 text-sm"><i className="fas fa-angle-right text-red-400 text-xs"></i>服务项目</a></li>
              <li><a href="#workflow" className="inline-flex items-center gap-1 text-gray-500 hover:text-red-600 text-sm"><i className="fas fa-angle-right text-red-400 text-xs"></i>合作流程</a></li>
              <li><a href="#examples" className="inline-flex items-center gap-1 text-gray-500 hover:text-red-600 text-sm"><i className="fas fa-angle-right text-red-400 text-xs"></i>代码示例</a></li>
              <li><a href="#contact" className="inline-flex items-center gap-1 text-gray-500 hover:text-red-600 text-sm"><i className="fas fa-angle-right text-red-400 text-xs"></i>联系我们</a></li>
            </ul>
          </div>
          <div className="md:col-span-4">
            <h3 className="text-gray-800 font-semibold text-sm uppercase tracking-wider mb-4 flex items-center gap-2"><span className="w-5 h-0.5 bg-red-400/60 rounded-full"></span>联系方式</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3"><div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center text-red-500 text-sm shrink-0"><i className="far fa-envelope"></i></div><div><p className="text-gray-700 text-sm font-medium">code@strategy.works</p><p className="text-gray-400 text-xs mt-0.5">技术支持 · 商务合作</p></div></li>
              <li className="flex items-start gap-3"><div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center text-green-600 text-sm shrink-0"><i className="fab fa-weixin"></i></div><div><p className="text-gray-700 text-sm font-medium">quant_code</p><p className="text-gray-400 text-xs mt-0.5">专属策略顾问</p></div></li>
              <li className="flex items-start gap-3"><div className="w-8 h-8 bg-amber-50 rounded-lg flex items-center justify-center text-amber-600 text-sm shrink-0"><i className="far fa-clock"></i></div><div><p className="text-gray-700 text-sm font-medium">工作日 9:00 - 18:00</p><p className="text-gray-400 text-xs mt-0.5">节假日留言，次日回复</p></div></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 text-xs text-gray-400">
          <div className="flex flex-wrap gap-x-5 gap-y-2 justify-center md:justify-start"><span className="text-gray-500">© 2024 策略代码工坊</span><a href="#" className="hover:text-red-500 transition">隐私条款</a><a href="#" className="hover:text-red-500 transition">使用协议</a><span className="text-red-400">不提供投资建议</span></div>
          <div className="flex items-center gap-5 mt-3 md:mt-0"><a href="/admin" className="text-gray-400 hover:text-red-500 transition text-[10px] tracking-wider uppercase">管理员</a><span className="text-gray-400">Made with <i className="fas fa-heart text-red-400 text-[10px] mx-0.5"></i> by 策略代码工坊</span></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

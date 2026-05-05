const ContactCTA = () => {
  return (
    <section id="contact" className="py-8 border-t border-gray-200/60 px-6 max-w-6xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center gap-8">
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-red-50 px-3 py-1.5 rounded-full border border-red-200 shadow-sm mb-3"><span className="text-xs font-semibold text-red-700 uppercase tracking-wider">代码免费 · 部署收费</span></div>
          <h2 className="text-3xl font-extrabold text-gray-900 leading-tight mb-3">准备好将策略变成<span className="text-red-600">代码</span>了吗？</h2>
          <p className="text-gray-600 text-sm mb-4 max-w-xl">专注策略代码实现，不提供投资建议。<br />✨ 策略代码编写 <span className="text-red-600 font-bold">完全免费</span> · 仅部署与后续维护收费</p>
          <div className="flex flex-wrap items-center gap-3 justify-center lg:justify-start">
            <div className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-200 text-xs"><i className="fas fa-shield-alt text-green-600"></i>保密协议</div>
            <div className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-200 text-xs"><i className="fas fa-sync-alt text-blue-600"></i>7天免费修改</div>
            <div className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-200 text-xs"><i className="fas fa-clock text-orange-500"></i>24h快速响应</div>
          </div>
        </div>
        <div className="flex-1 w-full max-w-sm">
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-gray-50/50 rounded-xl border border-gray-200/60 hover:bg-gray-50 transition cursor-pointer group">
              <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-105 transition"><i className="fab fa-weixin text-white text-lg"></i></div>
              <div className="flex-1"><p className="font-bold text-gray-800 text-sm">微信联系</p><p className="text-xs text-gray-600">专属顾问 · 即时沟通</p></div>
              <i className="fas fa-chevron-right text-gray-400 text-xs group-hover:translate-x-1 transition"></i>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50/50 rounded-xl border border-gray-200/60 hover:bg-gray-50 transition cursor-pointer group">
              <div className="w-10 h-10 bg-gray-700 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-105 transition"><i className="far fa-envelope text-white text-lg"></i></div>
              <div className="flex-1"><p className="font-bold text-gray-800 text-sm">code@strategy.works</p><p className="text-xs text-gray-600">2小时内回复 · 支持对公转账</p></div>
              <i className="fas fa-copy text-gray-400 text-xs hover:text-red-500 transition" title="复制邮箱"></i>
            </div>
          </div>
          <button className="mt-5 w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-5 rounded-xl shadow-md shadow-red-200 transition flex items-center justify-center gap-2 text-sm"><i className="fas fa-paper-plane"></i>立即提交需求 · 免费获取评估</button>
          <p className="text-xs text-gray-400 mt-3 text-center flex items-center justify-center gap-2"><i className="fas fa-lock"></i> 您的信息仅用于策略沟通，严格保密</p>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;

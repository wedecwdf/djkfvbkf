const Workflow = () => {
  return (
    <section id="workflow" className="py-8 border-t border-gray-200/60 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <span className="text-red-600 font-semibold text-sm uppercase tracking-wider bg-red-50 px-3 py-1 rounded-full">合作流程</span>
        <h2 className="text-3xl font-bold mt-3 text-gray-900">简单三步，策略变代码</h2>
        <p className="text-gray-600 mt-2">清晰透明的合作流程，让您省心省力</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
        <div className="rounded-2xl p-5 pt-0 text-center flex flex-col items-center relative z-10 bg-white border border-gray-100 hover:shadow-lg transition-all duration-300">
          <div className="w-10 h-10 bg-white border-2 border-red-200 text-red-600 font-bold text-xl rounded-full flex items-center justify-center -mt-5 mb-3 shadow-sm">1</div>
          <div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center text-red-600 mx-auto mb-2"><i className="fas fa-pencil-alt"></i></div>
          <h3 className="text-base font-bold text-gray-800 mb-1">提交策略描述</h3>
          <p className="text-gray-600 text-xs">通过文字、图表或语音描述你的交易逻辑，我们提供需求模板辅助填写。</p>
          <div className="step-connector hidden md:block"></div>
        </div>
        <div className="rounded-2xl p-5 pt-0 text-center flex flex-col items-center relative z-10 bg-white border border-gray-100 hover:shadow-lg transition-all duration-300">
          <div className="w-10 h-10 bg-white border-2 border-red-200 text-red-600 font-bold text-xl rounded-full flex items-center justify-center -mt-5 mb-3 shadow-sm">2</div>
          <div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center text-red-600 mx-auto mb-2"><i className="fas fa-file-signature"></i></div>
          <h3 className="text-base font-bold text-gray-800 mb-1">确认框架与报价</h3>
          <p className="text-gray-600 text-xs">我们评估复杂度，给出透明报价和预计交付时间，双方确认后开始编码。</p>
          <div className="step-connector hidden md:block"></div>
        </div>
        <div className="rounded-2xl p-5 pt-0 text-center flex flex-col items-center relative z-10 bg-white border border-gray-100 hover:shadow-lg transition-all duration-300">
          <div className="w-10 h-10 bg-white border-2 border-red-200 text-red-600 font-bold text-xl rounded-full flex items-center justify-center -mt-5 mb-3 shadow-sm">3</div>
          <div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center text-red-600 mx-auto mb-2"><i className="fas fa-code-branch"></i></div>
          <h3 className="text-base font-bold text-gray-800 mb-1">交付源码与说明</h3>
          <p className="text-gray-600 text-xs">收到代码后，可要求一次免费修改（逻辑范围内），并提供详细使用指导。</p>
        </div>
      </div>
    </section>
  );
};

export default Workflow;


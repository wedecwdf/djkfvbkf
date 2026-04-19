export default function Workflow() {
  return (
    <section id="workflow" className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">简单三步，策略变代码</h2>
          <p className="text-gray-600">清晰透明的合作流程，让您省心省力</p>
        </div>
        <div className="relative">
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-red-200"></div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center md:text-left">
              <div className="absolute -top-3 left-1/2 md:left-6 transform -translate-x-1/2 md:translate-x-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold shadow-md">1</div>
              <div className="mt-4">
                <h3 className="text-lg font-bold mb-2">提交策略描述</h3>
                <p className="text-sm text-gray-600">通过文字、图表或语音描述你的交易逻辑，越详细越好。</p>
              </div>
            </div>
            <div className="relative bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center md:text-left">
              <div className="absolute -top-3 left-1/2 md:left-6 transform -translate-x-1/2 md:translate-x-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold shadow-md">2</div>
              <div className="mt-4">
                <h3 className="text-lg font-bold mb-2">确认框架与报价</h3>
                <p className="text-sm text-gray-600">我们评估复杂度，给出报价和预计交付时间，双方确认后开始编码。</p>
              </div>
            </div>
            <div className="relative bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center md:text-left">
              <div className="absolute -top-3 left-1/2 md:left-6 transform -translate-x-1/2 md:translate-x-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold shadow-md">3</div>
              <div className="mt-4">
                <h3 className="text-lg font-bold mb-2">交付源码与说明</h3>
                <p className="text-sm text-gray-600">收到代码后，可要求一次免费修改（逻辑范围内），并提供使用指导。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
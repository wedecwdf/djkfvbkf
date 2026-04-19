import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" className="pt-28 pb-16 px-6 max-w-7xl mx-auto text-center">
      <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 rounded-full mb-6">
        <span className="w-2 h-2 bg-red-600 rounded-full"></span>
        <span className="text-sm font-medium text-red-700">只做一件事 · 策略代码编写</span>
      </div>
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 max-w-4xl mx-auto">
        将你的<span className="text-red-600">交易策略</span>转化为精准代码
      </h1>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
        专注A股、港股、美股量化策略代码实现。提供 Python、JavaScript、MQL 等语言编写，支持回测框架对接，注释清晰，交付即用。
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg shadow-red-200 flex items-center gap-2">
          提交策略需求 <ArrowRight className="w-5 h-5" />
        </Button>
        <Button size="lg" variant="outline" className="border-2 border-red-200 hover:bg-red-50 text-red-700 px-8 py-3 rounded-xl font-semibold">
          查看代码示例
        </Button>
      </div>
      <div className="flex gap-8 justify-center mt-10 text-sm">
        <div><span className="text-2xl font-bold text-red-600">50+</span><br />策略已交付</div>
        <div><span className="text-2xl font-bold text-red-600">100%</span><br />可运行交付</div>
        <div><span className="text-2xl font-bold text-red-600">3天</span><br />平均交付周期</div>
      </div>
    </section>
  )
}
import { Card, CardTitle } from '@/components/ui/card'
import { FileCode, ChartBar, CheckCircle } from 'lucide-react'

export default function Services() {
  return (
    <section id="services" className="py-16 px-6 max-w-7xl mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">为什么选择我们<br />编写策略代码</h2>
        <p className="text-gray-600 max-w-xl">我们只做代码实现，不提供投资建议。专业、高效、可验证。</p>
      </div>
      <div className="grid md:grid-cols-3 gap-5">
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Card className="bg-white p-6 rounded-2xl border border-red-100 shadow-sm hover:shadow-md transition">
            <FileCode className="text-red-600 text-2xl mb-4" />
            <CardTitle className="text-xl font-bold mb-2">精准还原逻辑</CardTitle>
            <p className="text-gray-600 text-sm mb-4">根据文字描述、流程图或伪代码，精确实现策略逻辑，确保无偏差。</p>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• 支持复杂条件判断</li>
              <li>• 多时间框架处理</li>
              <li>• 自定义指标计算</li>
            </ul>
          </Card>
          <Card className="bg-white p-6 rounded-2xl border border-red-100 shadow-sm hover:shadow-md transition">
            <ChartBar className="text-red-600 text-2xl mb-4" />
            <CardTitle className="text-xl font-bold mb-2">回测框架就绪</CardTitle>
            <p className="text-gray-600 text-sm mb-4">代码兼容 Backtrader、Zipline、VectorBT 等主流回测框架。</p>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• 标准 OHLCV 数据结构</li>
              <li>• 信号输出格式规范</li>
              <li>• 示例回测脚本</li>
            </ul>
          </Card>
        </div>
        <div className="bg-gradient-to-br from-red-50 to-white p-6 rounded-2xl border border-red-200 shadow-md flex flex-col justify-between">
          <div>
            <CheckCircle className="text-red-600 text-2xl mb-4" />
            <CardTitle className="text-xl font-bold mb-2">详尽注释文档</CardTitle>
            <p className="text-gray-600 text-sm mb-4">每段代码附带清晰的注释和使用说明，方便后续自行调整和维护。</p>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• 函数用途说明</li>
              <li>• 参数含义注释</li>
              <li>• 修改注意事项</li>
            </ul>
          </div>
          <div className="mt-6 text-right text-red-600 text-sm font-medium">
            了解更多 →
          </div>
        </div>
      </div>
    </section>
  )
}
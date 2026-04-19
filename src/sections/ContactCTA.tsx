import { Button } from '@/components/ui/button'
import { MessageCircle, Mail } from 'lucide-react'

export default function ContactCTA() {
  return (
    <section id="contact" className="py-20 px-6 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">准备好将策略变成代码了吗?</h2>
        <p className="text-gray-600 text-lg mb-8">专注策略代码实现，不提供报资建议。立创联系，获取免费评估。</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-red-200 transition flex items-center gap-2">
            <MessageCircle className="w-5 h-5" /> 微信联系
          </Button>
          <Button size="lg" variant="outline" className="border-2 border-red-200 hover:bg-red-50 text-red-700 px-8 py-4 rounded-xl font-bold transition flex items-center gap-2">
            <Mail className="w-5 h-5" /> code@strategy.works
          </Button>
        </div>
        <p className="mt-6 text-gray-500 text-sm">通常 2 小时内回复 · 支持对八转账</p>
      </div>
    </section>
  )
}


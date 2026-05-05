import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { User, Mail, BookOpen, Award, ArrowRight } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-16 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">关于策略代笔人</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            前券商研究员，8年A股投研经验。熟悉机构研报框架与自媒体传播规律。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-1">专业背景</h3>
              <p className="text-sm text-muted-foreground">
                金融硕士，CFA持证人，曾任职于国内头部券商研究所。
              </p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-1">服务经验</h3>
              <p className="text-sm text-muted-foreground">
                累计为30+财经博主、私募研究员、独立交易员提供策略内容支持。
              </p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-1">原创承诺</h3>
              <p className="text-sm text-muted-foreground">
                100%原创，支持查重。不满意可免费修改至满意为止。
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">开启你的策略代写服务</h3>
          <p className="text-muted-foreground mb-6">
            无论你需要一篇深度研报，还是每日复盘笔记，我都将为你量身定制。
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="gap-2">
              <Mail className="w-5 h-5" />
              联系合作
            </Button>
            <Button size="lg" variant="outline">
              查看更多案例
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
          <div className="mt-6 flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <span>📧 contact@strategywriter.com</span>
            <span>💬 微信: strategy_writer</span>
          </div>
        </div>
      </div>
    </section>
  )
}


import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Shield, 
  AlertCircle,
  CheckCircle2,
  BookOpen,
  Video,
  FileText,
  ArrowRight
} from 'lucide-react'

interface Strategy {
  id: string
  title: string
  description: string
  riskLevel: 'low' | 'medium' | 'high'
  expectedReturn: string
  timeHorizon: string
  tags: string[]
  steps: string[]
}

const strategies: Strategy[] = [
  {
    id: '1',
    title: '价值投资策略',
    description: '寻找被低估的优质企业，长期持有，分享企业成长红利。适合有耐心、追求稳健收益的投资者。',
    riskLevel: 'low',
    expectedReturn: '8%-15%/年',
    timeHorizon: '3年以上',
    tags: ['巴菲特', '长期持有', '蓝筹股'],
    steps: [
      '筛选ROE>15%的优质企业',
      '分析PE、PB估值水平',
      '研究行业竞争格局',
      '分散投资5-10只股票',
      '定期复盘，长期持有'
    ]
  },
  {
    id: '2',
    title: '趋势跟踪策略',
    description: '顺应市场趋势，买涨卖跌，利用技术分析把握买卖时机。适合有一定经验的投资者。',
    riskLevel: 'medium',
    expectedReturn: '15%-30%/年',
    timeHorizon: '1-6个月',
    tags: ['技术分析', '均线', 'MACD'],
    steps: [
      '识别股票主要趋势',
      '使用均线判断买卖点',
      '设置止损止盈位',
      '控制单笔仓位',
      '严格执行交易纪律'
    ]
  },
  {
    id: '3',
    title: '成长股投资策略',
    description: '投资高成长性的新兴行业，追求超额收益。适合风险承受能力较强的投资者。',
    riskLevel: 'high',
    expectedReturn: '20%-50%/年',
    timeHorizon: '1-3年',
    tags: ['新能源', '科技', '创新药'],
    steps: [
      '研究新兴行业趋势',
      '筛选营收增速>30%的公司',
      '分析核心竞争优势',
      '关注研发投入占比',
      '动态调整持仓比例'
    ]
  }
]

const riskColors = {
  low: 'bg-green-500',
  medium: 'bg-yellow-500',
  high: 'bg-red-500'
}

const riskLabels = {
  low: '低风险',
  medium: '中风险',
  high: '高风险'
}

interface LearningResource {
  title: string
  type: 'article' | 'video' | 'course'
  description: string
  duration: string
}

const resources: LearningResource[] = [
  {
    title: '股票投资入门指南',
    type: 'course',
    description: '从零开始学习股票投资基础知识',
    duration: '10节课'
  },
  {
    title: '财务报表分析实战',
    type: 'video',
    description: '手把手教你读懂上市公司财报',
    duration: '2小时'
  },
  {
    title: '技术指标完全手册',
    type: 'article',
    description: 'MACD、KDJ、RSI等指标详解',
    duration: '30分钟阅读'
  }
]

function StrategyCard({ strategy }: { strategy: Strategy }) {
  return (
    <Card className="hover:shadow-xl transition-all h-full flex flex-col">
      <CardHeader>
        <div className="flex items-start justify-between mb-2">
          <Badge className={`${riskColors[strategy.riskLevel]} text-white`}>
            {riskLabels[strategy.riskLevel]}
          </Badge>
          <div className="flex gap-1">
            {strategy.tags.map(tag => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
        <CardTitle className="text-xl">{strategy.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <p className="text-muted-foreground mb-4">{strategy.description}</p>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-muted rounded-lg p-3">
            <div className="text-xs text-muted-foreground mb-1">预期收益</div>
            <div className="font-semibold text-primary">{strategy.expectedReturn}</div>
          </div>
          <div className="bg-muted rounded-lg p-3">
            <div className="text-xs text-muted-foreground mb-1">投资周期</div>
            <div className="font-semibold">{strategy.timeHorizon}</div>
          </div>
        </div>

        <div className="space-y-2 flex-1">
          <div className="text-sm font-medium mb-2">操作步骤:</div>
          {strategy.steps.map((step, index) => (
            <div key={index} className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-sm text-muted-foreground">{step}</span>
            </div>
          ))}
        </div>

        <Button className="w-full mt-6" variant="outline">
          了解详情
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </CardContent>
    </Card>
  )
}

export default function InvestmentStrategy() {
  return (
    <section id="strategy" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">投资策略</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            根据您的风险偏好和投资目标，选择适合的投资策略。记住：投资有风险，入市需谨慎。
          </p>
        </div>

        {/* Risk Assessment */}
        <Card className="mb-12 bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                  <Shield className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">风险评估测试</h3>
                  <p className="text-muted-foreground">3分钟了解您的风险承受能力</p>
                </div>
              </div>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                开始测试
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Strategy Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {strategies.map(strategy => (
            <StrategyCard key={strategy.id} strategy={strategy} />
          ))}
        </div>

        {/* Learning Resources */}
        <div className="bg-muted/50 rounded-xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-bold">学习资源</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {resources.map((resource, index) => (
              <Card key={index} className="hover:shadow-lg transition-all cursor-pointer">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      {resource.type === 'video' && <Video className="w-5 h-5 text-primary" />}
                      {resource.type === 'article' && <FileText className="w-5 h-5 text-primary" />}
                      {resource.type === 'course' && <BookOpen className="w-5 h-5 text-primary" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold mb-1 truncate">{resource.title}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{resource.description}</p>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="text-xs">
                          {resource.type === 'video' && '视频'}
                          {resource.type === 'article' && '文章'}
                          {resource.type === 'course' && '课程'}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{resource.duration}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 flex items-start gap-3 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-yellow-800">
            <strong>风险提示：</strong>
            股票投资存在风险，过往业绩不代表未来表现。本文内容仅供参考，不构成投资建议。
            投资者应根据自身情况独立判断，自行承担投资风险。
          </div>
        </div>
      </div>
    </section>
  )
}

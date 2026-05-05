import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { TrendingUp, FileText, Users } from 'lucide-react'

interface CaseItem {
  title: string
  description: string
  tags: string[]
  metrics?: { label: string; value: string }[]
}

const researchCases: CaseItem[] = [
  {
    title: '《新能源车渗透率破50%，产业链谁将受益？》',
    description: '某财经博主约稿，发布后阅读量10w+，获平台首页推荐。',
    tags: ['行业研究', '数据可视化'],
    metrics: [
      { label: '阅读量', value: '10.2w' },
      { label: '互动率', value: '8.5%' },
    ],
  },
  {
    title: '《高股息策略失效了吗？——以煤炭股为例》',
    description: '为私募研究员提供选题框架与数据底稿，辅助内部投研。',
    tags: ['量化分析', '策略回测'],
    metrics: [
      { label: '交付周期', value: '3天' },
      { label: '客户评分', value: '5.0' },
    ],
  },
]

const noteCases: CaseItem[] = [
  {
    title: '每日复盘笔记（2024年Q1合集）',
    description: '为某交易员定制每日复盘模板，包含指数分析、板块轮动、明日计划。',
    tags: ['复盘', '技术分析'],
    metrics: [
      { label: '持续服务', value: '6个月' },
      { label: '续约率', value: '100%' },
    ],
  },
  {
    title: '《如何用MACD捕捉波段行情》实战笔记',
    description: '图文并茂的技术分析教程，被多家理财号转载。',
    tags: ['MACD', '技术教学'],
    metrics: [
      { label: '转载量', value: '23次' },
      { label: '收藏量', value: '1.2k' },
    ],
  },
]

const mediaCases: CaseItem[] = [
  {
    title: '某财经大V公众号月度代运营',
    description: '负责8篇原创文章撰写，平均阅读量较上月提升35%。',
    tags: ['公众号', '内容策划'],
    metrics: [
      { label: '产出文章', value: '8篇/月' },
      { label: '阅读提升', value: '+35%' },
    ],
  },
  {
    title: '雪球组合策略季度报告',
    description: '为雪球大V撰写季度投资总结与展望，强化个人品牌形象。',
    tags: ['雪球', '投资总结'],
    metrics: [
      { label: '涨粉', value: '2.3k' },
      { label: '互动', value: '850+' },
    ],
  },
]

function CaseCard({ item }: { item: CaseItem }) {
  return (
    <Card className="hover:shadow-lg transition-all h-full flex flex-col">
      <CardContent className="p-6 flex-1 flex flex-col">
        <div className="flex items-start gap-3 mb-3">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
            <FileText className="w-5 h-5 text-primary" />
          </div>
          <h3 className="font-semibold text-lg leading-tight">{item.title}</h3>
        </div>
        <p className="text-sm text-muted-foreground mb-4 flex-1">{item.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {item.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        {item.metrics && (
          <div className="grid grid-cols-2 gap-2 pt-3 border-t">
            {item.metrics.map((metric, idx) => (
              <div key={idx} className="text-center">
                <div className="text-lg font-bold text-primary">{metric.value}</div>
                <div className="text-xs text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">精选案例</h2>
          <p className="text-muted-foreground">已交付的部分策略展示（数据已脱敏）</p>
        </div>

        <Tabs defaultValue="research" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-3 mx-auto mb-8">
            <TabsTrigger value="research" className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              深度研报
            </TabsTrigger>
            <TabsTrigger value="notes" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              复盘笔记
            </TabsTrigger>
            <TabsTrigger value="media" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              自媒体
            </TabsTrigger>
          </TabsList>

          <TabsContent value="research">
            <div className="grid md:grid-cols-2 gap-6">
              {researchCases.map((item, idx) => (
                <CaseCard key={idx} item={item} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="notes">
            <div className="grid md:grid-cols-2 gap-6">
              {noteCases.map((item, idx) => (
                <CaseCard key={idx} item={item} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="media">
            <div className="grid md:grid-cols-2 gap-6">
              {mediaCases.map((item, idx) => (
                <CaseCard key={idx} item={item} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}


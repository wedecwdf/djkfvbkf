import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Calendar,
  Clock,
  Eye,
  ThumbsUp,
  MessageSquare,
  Bookmark,
  Search,
  TrendingUp,
  Newspaper,
  Lightbulb,
  AlertTriangle
} from 'lucide-react'

interface Article {
  id: string
  title: string
  summary: string
  category: string
  author: string
  date: string
  readTime: string
  views: number
  likes: number
  comments: number
  tags: string[]
  isHot?: boolean
}

const articles: Article[] = [
  {
    id: '1',
    title: '如何写出一篇高转发的炒股复盘笔记？',
    summary: '复盘笔记不仅是记录，更是自我对话。本文分享复盘笔记的黄金结构：盘面回顾、交易总结、明日计划，让你的笔记条理清晰，转发量倍增。',
    category: '写作技巧',
    author: '策略代笔人',
    date: '2024-01-15',
    readTime: '8分钟',
    views: 12580,
    likes: 856,
    comments: 234,
    tags: ['复盘', '写作技巧', '自媒体'],
    isHot: true,
  },
  {
    id: '2',
    title: '机构研报的"潜台词"，散户如何解读？',
    summary: '研报中常见的"增持"、"推荐"背后有何含义？本文揭秘机构研报的常用话术与评级体系，帮助散户读懂专业分析。',
    category: '策略干货',
    author: '研究员小李',
    date: '2024-01-14',
    readTime: '10分钟',
    views: 8920,
    likes: 623,
    comments: 156,
    tags: ['研报解读', '投资入门'],
  },
  {
    id: '3',
    title: '委托代写策略，应该提供哪些信息？',
    summary: '第一次找代写不知如何沟通？本文梳理需求提交清单：标的、观点、数据来源、风格偏好，让你高效获得满意策略。',
    category: '客户故事',
    author: '服务小助手',
    date: '2024-01-13',
    readTime: '6分钟',
    views: 15230,
    likes: 1123,
    comments: 345,
    tags: ['代写指南', '合作流程'],
    isHot: true,
  },
  {
    id: '4',
    title: '2024年A股投资主线梳理：新质生产力与出海',
    summary: '结合政策导向与产业趋势，分析2024年可能贯穿全年的投资主线，为策略撰写提供选题思路。',
    category: '行业观察',
    author: '宏观研究猿',
    date: '2024-01-12',
    readTime: '12分钟',
    views: 6780,
    likes: 445,
    comments: 189,
    tags: ['宏观', '行业趋势'],
  },
  {
    id: '5',
    title: '技术分析文章怎么写才不枯燥？',
    summary: '技术指标类文章容易写成说明书。本文分享如何用故事化表达、案例穿插让技术分析文章生动有趣。',
    category: '写作技巧',
    author: '技术派老王',
    date: '2024-01-11',
    readTime: '9分钟',
    views: 23450,
    likes: 1567,
    comments: 456,
    tags: ['技术分析', '写作'],
    isHot: true,
  },
  {
    id: '6',
    title: '从0到1搭建个人投资博客的5个建议',
    summary: '想建立个人投资IP却不知从何下手？本文从定位、平台选择、内容规划等方面给出实操建议。',
    category: '策略干货',
    author: '运营小张',
    date: '2024-01-10',
    readTime: '7分钟',
    views: 7890,
    likes: 534,
    comments: 123,
    tags: ['个人IP', '博客搭建'],
  },
]

const categoryIcons: Record<string, React.ReactNode> = {
  '写作技巧': <Lightbulb className="w-4 h-4" />,
  '策略干货': <TrendingUp className="w-4 h-4" />,
  '客户故事': <Newspaper className="w-4 h-4" />,
  '行业观察': <AlertTriangle className="w-4 h-4" />,
}

function ArticleCard({ article }: { article: Article }) {
  return (
    <Card className="hover:shadow-lg transition-all cursor-pointer group h-full flex flex-col">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="flex items-center gap-1">
              {categoryIcons[article.category]}
              {article.category}
            </Badge>
            {article.isHot && (
              <Badge className="bg-primary text-primary-foreground">热门</Badge>
            )}
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Bookmark className="w-4 h-4" />
          </Button>
        </div>
        <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors line-clamp-2">
          {article.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <p className="text-sm text-muted-foreground line-clamp-3 mb-4 flex-1">
          {article.summary}
        </p>

        <div className="flex flex-wrap gap-1 mb-4">
          {article.tags.map(tag => (
            <Badge key={tag} variant="secondary" className="text-xs">
              #{tag}
            </Badge>
          ))}
        </div>

        <div className="flex items-center justify-between text-xs text-muted-foreground pt-3 border-t">
          <div className="flex items-center gap-3">
            <span className="font-medium text-foreground">{article.author}</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {article.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {article.readTime}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4 mt-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Eye className="w-3 h-3" />
            {article.views.toLocaleString()}
          </span>
          <span className="flex items-center gap-1">
            <ThumbsUp className="w-3 h-3" />
            {article.likes}
          </span>
          <span className="flex items-center gap-1">
            <MessageSquare className="w-3 h-3" />
            {article.comments}
          </span>
        </div>
      </CardContent>
    </Card>
  )
}

export default function Articles() {
  const [searchQuery, setSearchQuery] = useState('')
  const categories = ['全部', '写作技巧', '策略干货', '客户故事', '行业观察']

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  return (
    <section id="articles" className="py-16 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">策略博客</h2>
            <p className="text-muted-foreground">写作技巧、策略干货、客户故事</p>
          </div>
          <div className="relative max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="搜索文章..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <Tabs defaultValue="全部" className="w-full">
          <TabsList className="flex flex-wrap gap-2 mb-8 h-auto">
            {categories.map(category => (
              <TabsTrigger key={category} value={category} className="px-4">
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map(category => (
            <TabsContent key={category} value={category}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {(category === '全部'
                  ? filteredArticles
                  : filteredArticles.filter(a => a.category === category)
                ).map(article => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg">
            查看更多文章
          </Button>
        </div>
      </div>
    </section>
  )
}


// HotStocks组件 - 热门股票展示
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { TrendingUp, TrendingDown, Flame, Star, Eye } from 'lucide-react'

interface Stock {
  code: string
  name: string
  price: number
  change: number
  changePercent: number
  volume: string
  turnover: string
  tags: string[]
}

const hotStocks: Stock[] = [
  { code: '600519', name: '贵州茅台', price: 1685.00, change: 25.50, changePercent: 1.54, volume: '2.5万', turnover: '42.1亿', tags: ['白酒', '蓝筹'] },
  { code: '000858', name: '五粮液', price: 145.80, change: 3.20, changePercent: 2.24, volume: '15.6万', turnover: '22.7亿', tags: ['白酒', '消费'] },
  { code: '002594', name: '比亚迪', price: 268.50, change: 8.30, changePercent: 3.19, volume: '28.3万', turnover: '75.9亿', tags: ['新能源', '汽车'] },
  { code: '300750', name: '宁德时代', price: 198.60, change: 5.40, changePercent: 2.80, volume: '18.9万', turnover: '37.5亿', tags: ['锂电池', '新能源'] },
  { code: '600036', name: '招商银行', price: 32.85, change: 0.45, changePercent: 1.39, volume: '45.2万', turnover: '14.8亿', tags: ['银行', '金融'] },
  { code: '000001', name: '平安银行', price: 10.28, change: 0.18, changePercent: 1.78, volume: '125.6万', turnover: '12.9亿', tags: ['银行', '金融'] },
]

const limitUpStocks: Stock[] = [
  { code: '600888', name: '新疆众和', price: 8.56, change: 0.78, changePercent: 10.03, volume: '45.2万', turnover: '3.9亿', tags: ['有色', '涨停'] },
  { code: '002456', name: '欧菲光', price: 12.38, change: 1.13, changePercent: 10.04, volume: '156.8万', turnover: '19.4亿', tags: ['消费电子', '涨停'] },
  { code: '600118', name: '中国卫星', price: 28.65, change: 2.61, changePercent: 10.02, volume: '28.5万', turnover: '8.2亿', tags: ['航天', '涨停'] },
  { code: '000938', name: '中芯国际', price: 56.80, change: 5.17, changePercent: 10.01, volume: '68.9万', turnover: '39.1亿', tags: ['芯片', '涨停'] },
]

const volumeLeaders: Stock[] = [
  { code: '601318', name: '中国平安', price: 42.35, change: 0.85, changePercent: 2.05, volume: '289.5万', turnover: '122.6亿', tags: ['保险', '金融'] },
  { code: '600519', name: '贵州茅台', price: 1685.00, change: 25.50, changePercent: 1.54, volume: '2.5万', turnover: '42.1亿', tags: ['白酒', '蓝筹'] },
  { code: '000858', name: '五粮液', price: 145.80, change: 3.20, changePercent: 2.24, volume: '15.6万', turnover: '22.7亿', tags: ['白酒', '消费'] },
  { code: '002594', name: '比亚迪', price: 268.50, change: 8.30, changePercent: 3.19, volume: '28.3万', turnover: '75.9亿', tags: ['新能源', '汽车'] },
]

interface StockCardProps {
  stock: Stock
  showTags?: boolean
}

function StockCard({ stock, showTags = true }: StockCardProps) {
  const isUp = stock.changePercent >= 0

  return (
    <Card className="hover:shadow-lg transition-all cursor-pointer group">
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div>
            <div className="flex items-center gap-2">
              <h4 className="font-semibold text-lg group-hover:text-primary transition-colors">
                {stock.name}
              </h4>
              {showTags && stock.tags.map(tag => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">{stock.code}</p>
          </div>
          <div className={`p-2 rounded-lg ${isUp ? 'bg-stock-up/10' : 'bg-stock-down/10'}`}>
            {isUp ? (
              <TrendingUp className="w-5 h-5 stock-up" />
            ) : (
              <TrendingDown className="w-5 h-5 stock-down" />
            )}
          </div>
        </div>

        <div className="flex items-end justify-between">
          <div>
            <div className={`text-2xl font-bold ${isUp ? 'stock-up' : 'stock-down'}`}>
              {stock.price.toFixed(2)}
            </div>
            <div className={`text-sm font-medium ${isUp ? 'stock-up' : 'stock-down'}`}>
              {isUp ? '+' : ''}{stock.change.toFixed(2)} ({isUp ? '+' : ''}{stock.changePercent.toFixed(2)}%)
            </div>
          </div>
          <div className="text-right text-xs text-muted-foreground">
            <div>成交量: {stock.volume}</div>
            <div>成交额: {stock.turnover}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default function HotStocks() {
  return (
    <section id="stocks" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">热门股票</h2>
            <p className="text-muted-foreground">追踪市场热点，把握投资机会</p>
          </div>
          <div className="flex items-center gap-2">
            <Flame className="w-5 h-5 text-primary" />
            <span className="text-sm text-muted-foreground">实时更新</span>
          </div>
        </div>

        <Tabs defaultValue="hot" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-3 mb-8">
            <TabsTrigger value="hot">热门关注</TabsTrigger>
            <TabsTrigger value="limitup">涨停榜</TabsTrigger>
            <TabsTrigger value="volume">成交额榜</TabsTrigger>
          </TabsList>

          <TabsContent value="hot">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {hotStocks.map((stock) => (
                <StockCard key={stock.code} stock={stock} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="limitup">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {limitUpStocks.map((stock) => (
                <StockCard key={stock.code} stock={stock} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="volume">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {volumeLeaders.map((stock) => (
                <StockCard key={stock.code} stock={stock} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Quick Actions */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <div className="flex items-center gap-2 px-4 py-2 bg-muted rounded-lg">
            <Eye className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">点击股票查看详情</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-muted rounded-lg">
            <Star className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">收藏关注股票</span>
          </div>
        </div>
      </div>
    </section>
  )
}

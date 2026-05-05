// HotStocks缁勪欢 - 鐑棬鑲＄エ灞曠ず
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
  { code: '600519', name: '璐靛窞鑼呭彴', price: 1685.00, change: 25.50, changePercent: 1.54, volume: '2.5涓?, turnover: '42.1浜?, tags: ['鐧介厭', '钃濈'] },
  { code: '000858', name: '浜旂伯娑?, price: 145.80, change: 3.20, changePercent: 2.24, volume: '15.6涓?, turnover: '22.7浜?, tags: ['鐧介厭', '娑堣垂'] },
  { code: '002594', name: '姣斾簹杩?, price: 268.50, change: 8.30, changePercent: 3.19, volume: '28.3涓?, turnover: '75.9浜?, tags: ['鏂拌兘婧?, '姹借溅'] },
  { code: '300750', name: '瀹佸痉鏃朵唬', price: 198.60, change: 5.40, changePercent: 2.80, volume: '18.9涓?, turnover: '37.5浜?, tags: ['閿傜數姹?, '鏂拌兘婧?] },
  { code: '600036', name: '鎷涘晢閾惰', price: 32.85, change: 0.45, changePercent: 1.39, volume: '45.2涓?, turnover: '14.8浜?, tags: ['閾惰', '閲戣瀺'] },
  { code: '000001', name: '骞冲畨閾惰', price: 10.28, change: 0.18, changePercent: 1.78, volume: '125.6涓?, turnover: '12.9浜?, tags: ['閾惰', '閲戣瀺'] },
]

const limitUpStocks: Stock[] = [
  { code: '600888', name: '鏂扮枂浼楀拰', price: 8.56, change: 0.78, changePercent: 10.03, volume: '45.2涓?, turnover: '3.9浜?, tags: ['鏈夎壊', '娑ㄥ仠'] },
  { code: '002456', name: '娆ц彶鍏?, price: 12.38, change: 1.13, changePercent: 10.04, volume: '156.8涓?, turnover: '19.4浜?, tags: ['娑堣垂鐢靛瓙', '娑ㄥ仠'] },
  { code: '600118', name: '涓浗鍗槦', price: 28.65, change: 2.61, changePercent: 10.02, volume: '28.5涓?, turnover: '8.2浜?, tags: ['鑸ぉ', '娑ㄥ仠'] },
  { code: '000938', name: '涓姱鍥介檯', price: 56.80, change: 5.17, changePercent: 10.01, volume: '68.9涓?, turnover: '39.1浜?, tags: ['鑺墖', '娑ㄥ仠'] },
]

const volumeLeaders: Stock[] = [
  { code: '601318', name: '涓浗骞冲畨', price: 42.35, change: 0.85, changePercent: 2.05, volume: '289.5涓?, turnover: '122.6浜?, tags: ['淇濋櫓', '閲戣瀺'] },
  { code: '600519', name: '璐靛窞鑼呭彴', price: 1685.00, change: 25.50, changePercent: 1.54, volume: '2.5涓?, turnover: '42.1浜?, tags: ['鐧介厭', '钃濈'] },
  { code: '000858', name: '浜旂伯娑?, price: 145.80, change: 3.20, changePercent: 2.24, volume: '15.6涓?, turnover: '22.7浜?, tags: ['鐧介厭', '娑堣垂'] },
  { code: '002594', name: '姣斾簹杩?, price: 268.50, change: 8.30, changePercent: 3.19, volume: '28.3涓?, turnover: '75.9浜?, tags: ['鏂拌兘婧?, '姹借溅'] },
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
            <div>鎴愪氦閲? {stock.volume}</div>
            <div>鎴愪氦棰? {stock.turnover}</div>
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
            <h2 className="text-3xl font-bold mb-2">鐑棬鑲＄エ</h2>
            <p className="text-muted-foreground">杩借釜甯傚満鐑偣锛屾妸鎻℃姇璧勬満浼?/p>
          </div>
          <div className="flex items-center gap-2">
            <Flame className="w-5 h-5 text-primary" />
            <span className="text-sm text-muted-foreground">瀹炴椂鏇存柊</span>
          </div>
        </div>

        <Tabs defaultValue="hot" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-3 mb-8">
            <TabsTrigger value="hot">鐑棬鍏虫敞</TabsTrigger>
            <TabsTrigger value="limitup">娑ㄥ仠姒?/TabsTrigger>
            <TabsTrigger value="volume">鎴愪氦棰濇</TabsTrigger>
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
            <span className="text-sm text-muted-foreground">鐐瑰嚮鑲＄エ鏌ョ湅璇︽儏</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-muted rounded-lg">
            <Star className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">鏀惰棌鍏虫敞鑲＄エ</span>
          </div>
        </div>
      </div>
    </section>
  )
}


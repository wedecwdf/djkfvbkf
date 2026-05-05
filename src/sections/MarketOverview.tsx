import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { TrendingUp, TrendingDown, Activity, BarChart3 } from 'lucide-react'

interface IndexData {
  name: string
  code: string
  price: number
  change: number
  changePercent: number
  volume: string
}

const initialIndices: IndexData[] = [
  { name: '上证指数', code: '000001', price: 3052.35, change: 68.92, changePercent: 2.31, volume: '3852亿' },
  { name: '深证成指', code: '399001', price: 9856.78, change: 156.34, changePercent: 1.61, volume: '4521亿' },
  { name: '创业板指', code: '399006', price: 1956.23, change: 28.56, changePercent: 1.48, volume: '1856亿' },
  { name: '科创50', code: '000688', price: 892.45, change: 15.78, changePercent: 1.80, volume: '623亿' },
]

export default function MarketOverview() {
  const [indices, setIndices] = useState<IndexData[]>(initialIndices)
  const [lastUpdate, setLastUpdate] = useState<string>('')

  useEffect(() => {
    setLastUpdate(new Date().toLocaleString('zh-CN'))
    
    // 模拟实时数据更新
    const interval = setInterval(() => {
      setIndices(prev => prev.map(index => {
        const randomChange = (Math.random() - 0.5) * 2
        const newPrice = Math.max(0, index.price + randomChange)
        const newChangePercent = (index.changePercent + (Math.random() - 0.5) * 0.1)
        return {
          ...index,
          price: parseFloat(newPrice.toFixed(2)),
          changePercent: parseFloat(newChangePercent.toFixed(2)),
        }
      }))
      setLastUpdate(new Date().toLocaleString('zh-CN'))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="market" className="py-16 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">A股行情概览</h2>
            <p className="text-muted-foreground">实时追踪主要指数动态</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Activity className="w-4 h-4 animate-pulse" />
            <span>最后更新: {lastUpdate}</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {indices.map((index) => (
            <Card key={index.code} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-lg">{index.name}</CardTitle>
                    <p className="text-xs text-muted-foreground">{index.code}</p>
                  </div>
                  <div className={`p-2 rounded-lg ${
                    index.changePercent >= 0 ? 'bg-stock-up/10' : 'bg-stock-down/10'
                  }`}>
                    {index.changePercent >= 0 ? (
                      <TrendingUp className="w-5 h-5 stock-up" />
                    ) : (
                      <TrendingDown className="w-5 h-5 stock-down" />
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className={`text-3xl font-bold ${
                    index.changePercent >= 0 ? 'stock-up' : 'stock-down'
                  }`}>
                    {index.price.toFixed(2)}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`text-sm font-medium ${
                      index.changePercent >= 0 ? 'stock-up' : 'stock-down'
                    }`}>
                      {index.changePercent >= 0 ? '+' : ''}{index.changePercent.toFixed(2)}%
                    </span>
                    <span className="text-xs text-muted-foreground">
                      成交额: {index.volume}
                    </span>
                  </div>
                  {/* Mini Chart */}
                  <div className="h-8 flex items-end gap-0.5 mt-3">
                    {Array.from({ length: 20 }).map((_, i) => {
                      const height = Math.random() * 100
                      const isUp = Math.random() > 0.4
                      return (
                        <div
                          key={i}
                          className={`flex-1 rounded-sm ${
                            isUp ? 'bg-stock-up/60' : 'bg-stock-down/60'
                          }`}
                          style={{ height: `${height}%` }}
                        />
                      )
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Market Summary */}
        <div className="mt-8 grid md:grid-cols-3 gap-4">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm opacity-80">上涨家数</p>
                  <p className="text-3xl font-bold">3,256</p>
                </div>
                <TrendingUp className="w-10 h-10 opacity-50" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-stock-down text-white">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm opacity-80">下跌家数</p>
                  <p className="text-3xl font-bold">1,523</p>
                </div>
                <TrendingDown className="w-10 h-10 opacity-50" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">今日成交额</p>
                  <p className="text-3xl font-bold text-foreground">8,456亿</p>
                </div>
                <BarChart3 className="w-10 h-10 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

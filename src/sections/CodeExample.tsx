import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Code } from 'lucide-react'

export default function CodeExample() {
  return (
    <section id="examples" className="py-16 px-6 max-w-7xl mx-auto">
      {/* 使用 flex 布局强制桌面端左右排列，移动端 flex-wrap */}
      <div className="flex flex-col lg:flex-row gap-10 items-start">
        
        {/* 左侧固定宽度文字区 */}
        <div className="flex-1">
          <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">
            代码示例
          </span>
          <h2 className="text-3xl font-bold mt-2 mb-4">
            我们交付的代码风格专业
            <br />
            注释清晰，开箱即用
          </h2>
          <p className="text-gray-600">
            所有策略代码均经过严格测试，附带详细注释文档，兼容主流回测框架。
          </p>
        </div>

        {/* 右侧代码区（包含 Tabs 和代码卡片） */}
        <div className="flex-1 w-full">
          <Tabs defaultValue="python" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger
                value="python"
                className="data-[state=active]:bg-red-50 data-[state=active]:text-red-700"
              >
                <Code className="w-4 h-4 mr-2" /> Python
              </TabsTrigger>
              <TabsTrigger
                value="javascript"
                className="data-[state=active]:bg-red-50 data-[state=active]:text-red-700"
              >
                <Code className="w-4 h-4 mr-2" /> JavaScript
              </TabsTrigger>
            </TabsList>

            <TabsContent value="python">
              <Card className="bg-gray-900 rounded-2xl p-6 shadow-2xl border-0">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-xs text-gray-400 ml-2">macd_strategy.py</span>
                </div>
                <pre className="text-sm text-gray-300 font-mono leading-relaxed overflow-x-auto">
{`import pandas as pd
import numpy as np

class MACDStrategy:
    def __init__(self, fast=12, slow=26, signal=9):
        self.fast = fast
        self.slow = slow
        self.signal = signal
    
    def generate_signals(self, df):
        exp1 = df['close'].ewm(span=self.fast).mean()
        exp2 = df['close'].ewm(span=self.slow).mean()
        df['macd'] = exp1 - exp2
        df['signal_line'] = df['macd'].ewm(span=self.signal).mean()
        df['position'] = np.where(df['macd'] > df['signal_line'], 1, -1)
        return df`}
                </pre>
              </Card>
            </TabsContent>

            <TabsContent value="javascript">
              <Card className="bg-gray-900 rounded-2xl p-6 shadow-2xl border-0">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-xs text-gray-400 ml-2">sma_cross.js</span>
                </div>
                <pre className="text-sm text-gray-300 font-mono leading-relaxed overflow-x-auto">
{`function calculateSMA(data, period) {
  return data.map((_, i, arr) => {
    if (i < period - 1) return null;
    const slice = arr.slice(i - period + 1, i + 1);
    return slice.reduce((a, b) => a + b, 0) / period;
  });
}

function generateSignals(closes) {
  const sma5 = calculateSMA(closes, 5);
  const sma20 = calculateSMA(closes, 20);
  const signals = [];
  
  for (let i = 1; i < closes.length; i++) {
    if (sma5[i] > sma20[i] && sma5[i-1] <= sma20[i-1]) {
      signals.push({ index: i, action: 'BUY', price: closes[i] });
    } else if (sma5[i] < sma20[i] && sma5[i-1] >= sma20[i-1]) {
      signals.push({ index: i, action: 'SELL', price: closes[i] });
    }
  }
  return signals;
}`}
                </pre>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
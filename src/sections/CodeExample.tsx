export default function CodeExample() {
  return (
    <section id="examples" className="py-16 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">
            代码示例
          </span>
          <h2 className="text-3xl font-bold mt-2 mb-4">
            我们交付的代码风格专业
            <br />
            注释清晰，开箱即用
          </h2>
          <p className="text-gray-600 mb-6">
            所有策略代码均经过严格测试，附带详细注释文档，兼容主流回测框架。
          </p>
          <div className="flex gap-3">
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-lg font-medium shadow-md transition">
              Python 示例
            </button>
            <button className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-6 py-2.5 rounded-lg font-medium transition">
              JavaScript 示例
            </button>
          </div>
        </div>

        <div className="bg-gray-900 rounded-2xl p-6 shadow-2xl">
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
        </div>
      </div>
    </section>
  )
}

import { useState } from "react";

const CodeExample = () => {
  const [activeLang, setActiveLang] = useState<"python" | "javascript">("python");

  const pythonCode = `import pandas as pd
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
        return df`;

  const javascriptCode = `class MACDStrategy {
  constructor(fast = 12, slow = 26, signal = 9) {
    this.fast = fast;
    this.slow = slow;
    this.signal = signal;
  }

  generateSignals(df) {
    const exp1 = df.map(d => d.close).ewm(this.fast).mean();
    const exp2 = df.map(d => d.close).ewm(this.slow).mean();
    const macd = exp1.map((v, i) => v - exp2[i]);
    const signalLine = macd.ewm(this.signal).mean();
    
    return df.map((d, i) => ({
      ...d,
      macd: macd[i],
      signal_line: signalLine[i],
      position: macd[i] > signalLine[i] ? 1 : -1
    }));
  }
}`;

  return (
    <section id="examples" className="py-8 border-t border-gray-200/60 px-6 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <span className="inline-flex items-center gap-2 text-red-600 font-semibold text-sm uppercase tracking-wider mb-3"><span className="w-6 h-0.5 bg-red-400 rounded-full"></span>代码示例</span>
          <h2 className="text-3xl font-bold text-gray-900 leading-tight mb-3">我们交付的代码风格专业<br />注释清晰，开箱即用</h2>
          <p className="text-gray-600 text-sm mb-4 max-w-md">所有策略代码均经过严格测试，附带详细注释文档，兼容主流回测框架。</p>
          <div className="flex flex-wrap gap-2 mb-4">
            <button onClick={() => setActiveLang("python")} className={`px-4 py-1.5 rounded-lg font-medium text-xs ${activeLang === "python" ? "bg-red-600 text-white shadow-sm" : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 shadow-sm"}`}>Python 示例</button>
            <button onClick={() => setActiveLang("javascript")} className={`px-4 py-1.5 rounded-lg font-medium text-xs ${activeLang === "javascript" ? "bg-red-600 text-white shadow-sm" : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 shadow-sm"}`}>JavaScript 示例</button>
          </div>
          <div className="flex items-center gap-4 text-xs text-gray-500 border-t border-gray-200 pt-4">
            <span className="flex items-center gap-1"><i className="fas fa-check-circle text-green-500"></i>100%可运行</span>
            <span className="flex items-center gap-1"><i className="fas fa-sync-alt text-blue-500"></i>7天免费修改</span>
            <span className="flex items-center gap-1"><i className="fas fa-lock text-purple-500"></i>保密交付</span>
          </div>
        </div>
        <div className="bg-gray-900/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-700/50 overflow-hidden max-w-[580px] lg:mx-auto">
          <div className="flex items-center justify-between px-4 py-2 bg-gray-800/80 border-b border-gray-700">
            <div className="flex gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></span><span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></span><span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></span></div>
            <span className="text-xs text-gray-400 font-mono">macd_strategy.{activeLang === "python" ? "py" : "js"}</span>
            <div className="w-6"></div>
          </div>
          <div className="bg-[#1e1e2e] px-4 py-3 max-h-[300px] overflow-auto font-mono text-[0.75rem] leading-relaxed">
            <pre className="text-[#e5e9f0] m-0" dangerouslySetInnerHTML={{ __html: activeLang === "python" ? pythonCode.replace(/import|as|class|def|return|self/g, '<span class="text-[#c678dd]">$&</span>').replace(/#.*/g, '<span class="text-[#5c6370] italic">$&</span>').replace(/'[^']*'/g, '<span class="text-[#98c379]">$&</span>').replace(/\b\d+\b/g, '<span class="text-[#d19a66]">$&</span>') : javascriptCode.replace(/class|constructor|this|const|return/g, '<span class="text-[#c678dd]">$&</span>').replace(/\/\/.*/g, '<span class="text-[#5c6370] italic">$&</span>').replace(/`[^`]*`/g, '<span class="text-[#98c379]">$&</span>').replace(/\b\d+\b/g, '<span class="text-[#d19a66]">$&</span>') }}></pre>
          </div>
          <div className="flex items-center justify-between px-4 py-1.5 bg-gray-800/50 text-[10px] text-gray-500 border-t border-gray-700"><span>UTF-8</span><span><i className="fas fa-check-circle text-green-500 mr-1"></i>已测试</span></div>
        </div>
      </div>
    </section>
  );
};

export default CodeExample;

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
        # 计算指数移动平均
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
    // 模拟 ewm 计算 (示意)
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

  const highlightedPython = pythonCode
    .replace(/import|as|class|def|return|if|else|self/g, match => `<span class="text-[#c678dd]">${match}</span>`)
    .replace(/#.*/g, match => `<span class="text-[#5c6370] italic">${match}</span>`)
    .replace(/'[^']*'/g, match => `<span class="text-[#98c379]">${match}</span>`)
    .replace(/\b\d+\b/g, match => `<span class="text-[#d19a66]">${match}</span>`)
    .replace(/\b(pd|np|ewm|mean|where)\b/g, match => `<span class="text-[#61afef]">${match}</span>`);

  const highlightedJavaScript = javascriptCode
    .replace(/class|constructor|this|const|return|if|else/g, match => `<span class="text-[#c678dd]">${match}</span>`)
    .replace(/\/\/.*/g, match => `<span class="text-[#5c6370] italic">${match}</span>`)
    .replace(/`[^`]*`/g, match => `<span class="text-[#98c379]">${match}</span>`)
    .replace(/\b\d+\b/g, match => `<span class="text-[#d19a66]">${match}</span>`)
    .replace(/\b(map|ewm|mean|filter)\b/g, match => `<span class="text-[#61afef]">${match}</span>`);

  return (
    <section id="examples" className="py-10 px-6 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-2 text-red-600 font-semibold text-sm uppercase tracking-wider mb-3">
            <span className="w-6 h-0.5 bg-red-400 rounded-full"></span> 代码示例
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            我们交付的代码风格<span className="text-red-600">专业</span><br />
            注释清晰，开箱即用
          </h2>
          <p className="text-gray-600 text-base mb-5 max-w-md">
            所有策略代码均经过严格测试，附带详细注释文档，兼容主流回测框架。
          </p>

          <div className="flex flex-wrap gap-3 mb-6">
            <button
              onClick={() => setActiveLang("python")}
              className={`tab-btn px-5 py-2 rounded-xl font-medium text-sm border shadow-sm transition ${
                activeLang === "python"
                  ? "active bg-red-600 text-white border-transparent"
                  : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
              }`}
            >
              <i className="fab fa-python mr-2"></i>Python 示例
            </button>
            <button
              onClick={() => setActiveLang("javascript")}
              className={`tab-btn px-5 py-2 rounded-xl font-medium text-sm border shadow-sm transition ${
                activeLang === "javascript"
                  ? "active bg-red-600 text-white border-transparent"
                  : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
              }`}
            >
              <i className="fab fa-js mr-2"></i>JavaScript 示例
            </button>
          </div>

          <div className="flex items-center gap-5 text-sm text-gray-500 border-t border-gray-200 pt-5">
            <div className="flex items-center gap-1"><i className="fas fa-check-circle text-green-500"></i> 100%可运行</div>
            <div className="flex items-center gap-1"><i className="fas fa-sync-alt text-blue-500"></i> 7天免费修改</div>
            <div className="flex items-center gap-1"><i className="fas fa-lock text-purple-500"></i> 保密交付</div>
          </div>
        </div>

        <div className="w-full max-w-[580px] lg:mx-auto">
          <div className="bg-gray-900/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-700/50 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2.5 bg-gray-800/80 border-b border-gray-700">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></span>
              </div>
              <div className="flex items-center gap-1.5">
                <i className={`fab fa-${activeLang === "python" ? "python" : "js"} text-gray-400 text-xs`}></i>
                <span className="text-xs text-gray-400 font-mono tracking-wider">
                  macd_strategy.{activeLang === "python" ? "py" : "js"}
                </span>
              </div>
              <div className="w-8"></div>
            </div>

            <div className="bg-[#1e1e2e] px-5 py-4 max-h-[360px] overflow-auto font-mono text-[0.8rem] leading-relaxed">
              <pre
                className="text-[#e5e9f0] m-0"
                dangerouslySetInnerHTML={{
                  __html: activeLang === "python" ? highlightedPython : highlightedJavaScript,
                }}
              />
            </div>

            <div className="flex items-center justify-between px-4 py-1.5 bg-gray-800/50 text-xs text-gray-500 border-t border-gray-700">
              <div className="flex items-center gap-3">
                <span><i className="far fa-file-code mr-1"></i>UTF-8</span>
                <span><i className="fas fa-indent mr-1"></i>空格: 4</span>
              </div>
              <div><i className="fas fa-check-circle text-green-500 mr-1"></i>已测试</div>
            </div>
          </div>

          <div className="flex justify-end gap-3 mt-3">
            <button className="text-gray-500 hover:text-gray-700 text-sm flex items-center gap-1 transition">
              <i className="far fa-copy"></i> 复制代码
            </button>
            <button className="text-red-600 hover:text-red-700 text-sm flex items-center gap-1 transition">
              <i className="fas fa-download"></i> 下载示例
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeExample;



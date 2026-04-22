import { useState } from "react";

const CodeExample = () => {
  const [activeLang, setActiveLang] = useState<"python" | "javascript">("python");

  return (
    <section id="examples" className="py-16 px-6 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* 左侧文字区 */}
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

        {/* 右侧代码卡片 */}
        <div className="w-full max-w-[580px] lg:mx-auto">
          <div className="bg-gray-900/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-700/50 overflow-hidden">
            {/* IDE 标题栏 */}
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

            {/* 代码内容区 */}
            <div className="bg-[#1e1e2e] px-5 py-4 max-h-[360px] overflow-auto font-mono text-[0.8rem] leading-relaxed">
              {activeLang === "python" ? (
                <pre className="text-[#e5e9f0] m-0">
                  <span className="text-[#c678dd]">import</span> pandas <span className="text-[#c678dd]">as</span> pd{"\n"}
                  <span className="text-[#c678dd]">import</span> numpy <span className="text-[#c678dd]">as</span> np{"\n\n"}
                  <span className="text-[#c678dd]">class</span> <span className="text-[#61afef]">MACDStrategy</span>:{"\n"}
                  {"    "}<span className="text-[#c678dd]">def</span> <span className="text-[#61afef]">__init__</span>(<span className="text-[#c678dd]">self</span>, fast=<span className="text-[#d19a66]">12</span>, slow=<span className="text-[#d19a66]">26</span>, signal=<span className="text-[#d19a66]">9</span>):{"\n"}
                  {"        "}<span className="text-[#c678dd]">self</span>.fast = fast{"\n"}
                  {"        "}<span className="text-[#c678dd]">self</span>.slow = slow{"\n"}
                  {"        "}<span className="text-[#c678dd]">self</span>.signal = signal{"\n\n"}
                  {"    "}<span className="text-[#c678dd]">def</span> <span className="text-[#61afef]">generate_signals</span>(<span className="text-[#c678dd]">self</span>, df):{"\n"}
                  {"        "}<span className="text-[#5c6370] italic"># 计算指数移动平均</span>{"\n"}
                  {"        "}exp1 = df[<span className="text-[#98c379]">'close'</span>].ewm(span=<span className="text-[#c678dd]">self</span>.fast).mean(){"\n"}
                  {"        "}exp2 = df[<span className="text-[#98c379]">'close'</span>].ewm(span=<span className="text-[#c678dd]">self</span>.slow).mean(){"\n"}
                  {"        "}df[<span className="text-[#98c379]">'macd'</span>] = exp1 - exp2{"\n"}
                  {"        "}df[<span className="text-[#98c379]">'signal_line'</span>] = df[<span className="text-[#98c379]">'macd'</span>].ewm(span=<span className="text-[#c678dd]">self</span>.signal).mean(){"\n"}
                  {"        "}df[<span className="text-[#98c379]">'position'</span>] = np.where(df[<span className="text-[#98c379]">'macd'</span>] &gt; df[<span className="text-[#98c379]">'signal_line'</span>], <span className="text-[#d19a66]">1</span>, -<span className="text-[#d19a66]">1</span>){"\n"}
                  {"        "}<span className="text-[#c678dd]">return</span> df{"\n"}
                </pre>
              ) : (
                <pre className="text-[#e5e9f0] m-0">
                  <span className="text-[#c678dd]">class</span> <span className="text-[#61afef]">MACDStrategy</span> {"{"}{"\n"}
                  {"  "}<span className="text-[#61afef]">constructor</span>(fast = <span className="text-[#d19a66]">12</span>, slow = <span className="text-[#d19a66]">26</span>, signal = <span className="text-[#d19a66]">9</span>) {"{"}{"\n"}
                  {"    "}<span className="text-[#c678dd]">this</span>.fast = fast;{"\n"}
                  {"    "}<span className="text-[#c678dd]">this</span>.slow = slow;{"\n"}
                  {"    "}<span className="text-[#c678dd]">this</span>.signal = signal;{"\n"}
                  {"  }"}{"\n\n"}
                  {"  "}<span className="text-[#61afef]">generateSignals</span>(df) {"{"}{"\n"}
                  {"    "}<span className="text-[#5c6370] italic">// 模拟 ewm 计算 (示意)</span>{"\n"}
                  {"    "}<span className="text-[#c678dd]">const</span> exp1 = df.map(d =&gt; d.close).ewm(<span className="text-[#c678dd]">this</span>.fast).mean();{"\n"}
                  {"    "}<span className="text-[#c678dd]">const</span> exp2 = df.map(d =&gt; d.close).ewm(<span className="text-[#c678dd]">this</span>.slow).mean();{"\n"}
                  {"    "}<span className="text-[#c678dd]">const</span> macd = exp1.map((v, i) =&gt; v - exp2[i]);{"\n"}
                  {"    "}<span className="text-[#c678dd]">const</span> signalLine = macd.ewm(<span className="text-[#c678dd]">this</span>.signal).mean();{"\n\n"}
                  {"    "}<span className="text-[#c678dd]">return</span> df.map((d, i) =&gt; ({"{"}{"\n"}
                  {"      "}...d,{"\n"}
                  {"      "}macd: macd[i],{"\n"}
                  {"      "}signal_line: signalLine[i],{"\n"}
                  {"      "}position: macd[i] &gt; signalLine[i] ? <span className="text-[#d19a66]">1</span> : -<span className="text-[#d19a66]">1</span>{"\n"}
                  {"    }"));{"\n"}
                  {"  }"}{"\n"}
                  {"}"}{"\n"}
                </pre>
              )}
            </div>

            {/* 底部状态栏 */}
            <div className="flex items-center justify-between px-4 py-1.5 bg-gray-800/50 text-xs text-gray-500 border-t border-gray-700">
              <div className="flex items-center gap-3">
                <span><i className="far fa-file-code mr-1"></i>UTF-8</span>
                <span><i className="fas fa-indent mr-1"></i>空格: 4</span>
              </div>
              <div><i className="fas fa-check-circle text-green-500 mr-1"></i>已测试</div>
            </div>
          </div>

          {/* 快捷操作 */}
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

import { useAuth } from "@/contexts/AuthContext";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

interface StrategyOrder {
  id: string;
  title: string;
  description: string;
  status: string;
  language: string;
  created_at: string;
  delivered_at?: string;
  progress?: number;
}

export default function Profile() {
  const { user, signOut, loading: authLoading } = useAuth();
  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [orders, setOrders] = useState<StrategyOrder[]>([]);
  const [stats, setStats] = useState({ total: 0, completed: 0 });
  const [showWechatModal, setShowWechatModal] = useState(false);

  useEffect(() => {
    if (user) {
      fetchProfile();
      fetchOrders();
    }
  }, [user]);

  const fetchProfile = async () => {
    const { data, error } = await supabase
      .from("profiles")
      .select("username, full_name")
      .eq("id", user!.id)
      .single();
    if (!error && data) {
      setUsername(data.username || "");
      setFullName(data.full_name || "");
    }
  };

  const fetchOrders = async () => {
    const { data, error } = await supabase
      .from("strategy_orders")
      .select("*")
      .eq("user_id", user!.id)
      .order("created_at", { ascending: false });
    
    if (!error && data) {
      setOrders(data);
      setStats({
        total: data.length,
        completed: data.filter((o: StrategyOrder) => o.status === "completed").length,
      });
    } else {
      setOrders([]);
      setStats({ total: 0, completed: 0 });
    }
  };

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    const { error } = await supabase
      .from("profiles")
      .upsert({ id: user!.id, username, full_name: fullName });
    setLoading(false);
    if (error) {
      setMessage("更新失败：" + error.message);
    } else {
      setMessage("个人资料已更新！");
    }
  };

  const handleSubmitStrategy = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const language = formData.get("language") as string;

    if (!description) {
      alert("请填写策略描述");
      return;
    }

    const { error } = await supabase.from("strategy_orders").insert({
      user_id: user!.id,
      title: title || "未命名策略",
      description,
      language,
      status: "pending",
      created_at: new Date().toISOString(),
    });

    if (error) {
      alert("提交失败：" + error.message);
    } else {
      alert("策略需求已提交！我们将在24小时内评估并联系您。");
      form.reset();
      fetchOrders();
    }
  };

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-500">加载中...</div>
      </div>
    );
  }

  if (!user) {
    window.location.href = "/";
    return null;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 md:py-12 pt-28 md:pt-32">
      {/* 欢迎头部 */}
      <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
            我的工作台
            <span className="bg-red-100 text-red-700 text-sm font-medium px-3 py-1 rounded-full">专业版</span>
          </h1>
          <p className="text-gray-500 mt-1">
            欢迎回来，<span className="font-medium text-gray-700">{fullName || username || user.email}</span> · 
            您已提交 {stats.total} 个策略，{stats.completed} 个已完成
          </p>
        </div>
        <div className="flex gap-3">
          <button className="border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 px-5 py-2.5 rounded-xl text-sm font-medium shadow-sm transition">
            <i className="far fa-user-circle mr-2"></i>账号设置
          </button>
          <button
            onClick={async () => { await signOut(); window.location.href = "/"; }}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-xl text-sm font-medium shadow-md shadow-red-200 transition"
          >
            <i className="fas fa-sign-out-alt mr-2"></i>退出登录
          </button>
        </div>
      </div>

      {/* 快速提示卡片 */}
      <div className="bg-gradient-to-r from-red-50 to-amber-50 border border-red-200 rounded-2xl p-5 mb-8 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center shadow-md">
            <i className="fas fa-lightbulb text-white text-lg"></i>
          </div>
          <div>
            <h3 className="font-bold text-gray-800">不懂代码？没关系！</h3>
            <p className="text-gray-600 text-sm">用自然语言描述您的交易想法，我们的工程师将为您转化为精准代码。</p>
          </div>
        </div>
        <a href="#" className="text-red-600 font-medium text-sm hover:underline flex items-center gap-1">
          查看示例 <i className="fas fa-arrow-right text-xs"></i>
        </a>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center gap-2 mb-4">
              <i className="fas fa-pen-fancy text-red-600"></i>
              <h2 className="text-lg font-bold text-gray-800">快速提交策略需求</h2>
            </div>
            <p className="text-gray-500 text-sm mb-5">只需填写以下信息，我们将在24小时内评估并报价。</p>
            
            <form onSubmit={handleSubmitStrategy} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">策略名称（可选）</label>
                <input
                  type="text"
                  name="title"
                  placeholder="例如：双均线突破策略"
                  className="w-full border border-gray-300 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  策略描述 <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="description"
                  rows={3}
                  required
                  placeholder="请用简单的话描述您的交易想法……&#10;例如：当5日均线上穿20日均线时买入，下穿时卖出。只交易沪深300成分股。"
                  className="w-full border border-gray-300 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition"
                ></textarea>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">期望编程语言</label>
                  <select
                    name="language"
                    defaultValue="Python"
                    className="w-full border border-gray-300 rounded-xl px-4 py-2.5 bg-white focus:ring-2 focus:ring-red-500 outline-none"
                  >
                    <option>Python (推荐)</option>
                    <option>JavaScript</option>
                    <option>MQL4/MQL5</option>
                    <option>其他</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">回测框架（可选）</label>
                  <select
                    name="framework"
                    className="w-full border border-gray-300 rounded-xl px-4 py-2.5 bg-white focus:ring-2 focus:ring-red-500 outline-none"
                  >
                    <option>不限</option>
                    <option>Backtrader</option>
                    <option>Zipline</option>
                    <option>VectorBT</option>
                    <option>其他</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl font-medium shadow-md shadow-red-200 transition flex items-center gap-2"
                >
                  提交需求 <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </form>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <i className="fas fa-list-check text-red-600"></i>
                <h2 className="text-lg font-bold text-gray-800">我的策略订单</h2>
              </div>
              <a href="#" className="text-sm text-red-600 hover:underline">查看全部</a>
            </div>
            
            <div className="space-y-4">
              {orders.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <i className="fas fa-inbox text-3xl mb-3 opacity-50"></i>
                  <p>暂无策略订单，点击上方提交您的第一个需求吧！</p>
                </div>
              ) : (
                orders.slice(0, 3).map((order) => (
                  <div key={order.id} className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div className="flex items-center gap-3">
                        <span
                          className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                            order.status === "pending"
                              ? "bg-gray-100 text-gray-700"
                              : order.status === "in_progress"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-green-100 text-green-700"
                          }`}
                        >
                          {order.status === "pending" ? "待处理" : order.status === "in_progress" ? "进行中" : "已完成"}
                        </span>
                        <h3 className="font-semibold text-gray-800">
                          {order.title} ({order.language})
                        </h3>
                      </div>
                      <span className="text-xs text-gray-400">
                        {order.status === "completed" ? `交付于 ${order.delivered_at?.slice(0, 10)}` : `提交于 ${order.created_at.slice(0, 10)}`}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{order.description}</p>
                    {order.status === "in_progress" && order.progress !== undefined && (
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm">
                          <span className="text-gray-500">进度：</span>
                          <div className="w-32 bg-gray-200 rounded-full h-2">
                            <div className="bg-red-500 h-2 rounded-full" style={{ width: `${order.progress}%` }}></div>
                          </div>
                          <span className="text-gray-700 font-medium">{order.progress}%</span>
                        </div>
                        <button className="text-red-600 text-sm font-medium hover:underline flex items-center gap-1">
                          查看详情 <i className="fas fa-chevron-right text-xs"></i>
                        </button>
                      </div>
                    )}
                    {order.status === "completed" && (
                      <div className="flex flex-wrap gap-3">
                        <button className="bg-red-50 hover:bg-red-100 text-red-700 px-4 py-1.5 rounded-lg text-sm font-medium transition flex items-center gap-1">
                          <i className="fas fa-download text-xs"></i> 下载代码
                        </button>
                        <button className="text-gray-600 hover:text-gray-800 text-sm font-medium flex items-center gap-1">
                          <i className="far fa-comment-dots"></i> 反馈
                        </button>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full mx-auto flex items-center justify-center shadow-md mb-3">
              <span className="text-white text-2xl font-bold">
                {fullName?.[0] || username?.[0] || user.email?.[0]?.toUpperCase() || "U"}
              </span>
            </div>
            <h3 className="font-bold text-gray-800 text-lg">{fullName || username || "用户"}</h3>
            <p className="text-gray-500 text-sm mb-4">{user.email}</p>
            <div className="border-t border-gray-100 pt-4 text-left space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">已提交策略</span>
                <span className="font-semibold text-gray-800">{stats.total} 个</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">已完成</span>
                <span className="font-semibold text-green-600">{stats.completed} 个</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">会员等级</span>
                <span className="font-semibold text-red-600">专业版</span>
              </div>
            </div>
            <button
              onClick={() => document.getElementById("profile-edit-form")?.classList.toggle("hidden")}
              className="mt-5 w-full border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 py-2 rounded-xl text-sm font-medium transition"
            >
              编辑个人资料
            </button>
            <div id="profile-edit-form" className="hidden mt-4 text-left border-t pt-4">
              <form onSubmit={handleUpdateProfile} className="space-y-3">
                <div>
                  <label className="block text-sm font-medium mb-1">用户名</label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">全名</label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2"
                  />
                </div>
                {message && <p className="text-green-600 text-sm">{message}</p>}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg text-sm"
                >
                  {loading ? "保存中..." : "保存修改"}
                </button>
              </form>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
            <div className="flex items-center gap-2 mb-4">
              <i className="fas fa-box-open text-red-600"></i>
              <h3 className="font-bold text-gray-800">最新交付</h3>
            </div>
            <div className="space-y-3">
              {orders.filter(o => o.status === "completed").slice(0, 2).map((order) => (
                <div key={order.id} className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700">
                    <i className={`fab fa-${order.language === "Python" ? "python" : "js"}`}></i>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-800">{order.title}.{order.language === "Python" ? "py" : "js"}</p>
                    <p className="text-xs text-gray-400">交付于 {order.delivered_at?.slice(0, 10)}</p>
                  </div>
                  <button className="text-gray-400 hover:text-red-600">
                    <i className="fas fa-download"></i>
                  </button>
                </div>
              ))}
              {orders.filter(o => o.status === "completed").length === 0 && (
                <p className="text-gray-500 text-sm text-center py-4">暂无交付文件</p>
              )}
            </div>
            <a href="#" className="mt-4 text-sm text-red-600 font-medium hover:underline flex items-center gap-1">
              查看所有文件 <i className="fas fa-arrow-right text-xs"></i>
            </a>
          </div>

          {/* 帮助卡片 - 微信二维码弹窗 */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-5 text-white">
            <i className="fas fa-headset text-2xl mb-3"></i>
            <h4 className="font-bold mb-1">需要帮助？</h4>
            <p className="text-gray-300 text-sm mb-4">扫码添加微信，专属顾问在线解答</p>
            <button 
              onClick={() => setShowWechatModal(true)}
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-4 py-2 rounded-lg text-sm font-medium transition w-full"
            >
              <i className="fab fa-weixin mr-2"></i>联系专属顾问
            </button>
          </div>
        </div>
      </div>

      {/* 微信二维码模态框 */}
      {showWechatModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4" onClick={() => setShowWechatModal(false)}>
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="text-center">
              <i className="fab fa-weixin text-4xl text-green-500 mb-3"></i>
              <h3 className="text-xl font-bold text-gray-800 mb-2">添加微信顾问</h3>
              <p className="text-gray-500 text-sm mb-4">扫描下方二维码，我们将为您提供一对一服务</p>
              <div className="bg-gray-100 p-4 rounded-xl inline-block">
                <img 
                  src="/wechat-qr.png" 
                  alt="微信二维码" 
                  className="w-48 h-48 object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'200\' height=\'200\'%3E%3Crect width=\'200\' height=\'200\' fill=\'%23f3f4f6\'/%3E%3Ctext x=\'50%%\' y=\'50%%\' dominant-baseline=\'middle\' text-anchor=\'middle\' font-family=\'sans-serif\' font-size=\'14\' fill=\'%236b7280\'%3E请上传二维码%3C/text%3E%3C/svg%3E';
                  }}
                />
              </div>
              <p className="text-xs text-gray-400 mt-4">或手动搜索微信号：<span className="font-mono text-gray-700">quant_code</span></p>
              <button 
                onClick={() => setShowWechatModal(false)}
                className="mt-5 w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 rounded-lg text-sm font-medium transition"
              >
                关闭
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

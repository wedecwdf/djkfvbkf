import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabaseClient";
import { useAuth } from "@/contexts/AuthContext";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface Profile {
  id: string;
  username: string | null;
  full_name: string | null;
  created_at: string;
}

interface StrategyOrder {
  id: string;
  user_id: string;
  title: string;
  description: string;
  language: string;
  status: string;
  created_at: string;
  progress?: number;
}

export default function AdminDashboard() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [orders, setOrders] = useState<StrategyOrder[]>([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({ totalUsers: 0, totalOrders: 0, pendingOrders: 0 });
  const [activeTab, setActiveTab] = useState<"dashboard" | "users" | "orders">("dashboard");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data: profilesData } = await supabase
      .from("profiles")
      .select("id, username, full_name, created_at")
      .order("created_at", { ascending: false });
    if (profilesData) setProfiles(profilesData);

    const { data: ordersData } = await supabase
      .from("strategy_orders")
      .select("*")
      .order("created_at", { ascending: false });
    if (ordersData) {
      setOrders(ordersData);
      setStats({
        totalUsers: profilesData?.length || 0,
        totalOrders: ordersData.length,
        pendingOrders: ordersData.filter((o: StrategyOrder) => o.status === "pending").length,
      });
    }
    setLoading(false);
  };

  const updateOrderStatus = async (orderId: string, newStatus: string) => {
    const { error } = await supabase
      .from("strategy_orders")
      .update({ status: newStatus })
      .eq("id", orderId);
    if (error) {
      alert("状态更新失败：" + error.message);
    } else {
      fetchData();
    }
  };

  const deleteOrder = async (orderId: string) => {
    if (!window.confirm("确定要永久删除这个订单吗？此操作不可恢复。")) return;
    const { error } = await supabase
      .from("strategy_orders")
      .delete()
      .eq("id", orderId);
    if (error) {
      alert("删除失败：" + error.message);
    } else {
      alert("订单已删除");
      fetchData();
    }
  };

  const handleLogout = async () => {
    await signOut();
    navigate("/admin");
  };

  const getStatusBadge = (status: string) => {
    const styles = {
      pending: "bg-gray-100 text-gray-700",
      in_progress: "bg-yellow-100 text-yellow-700",
      completed: "bg-green-100 text-green-700",
    };
    const labels = { pending: "待处理", in_progress: "进行中", completed: "已完成" };
    return (
      <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${styles[status as keyof typeof styles]}`}>
        {labels[status as keyof typeof labels]}
      </span>
    );
  };

  // 图表数据（模拟，后续可替换为真实按日期统计）
  const chartData = {
    labels: ["04-15", "04-16", "04-17", "04-18", "04-19", "04-20", "04-21"],
    datasets: [
      {
        label: "提交订单",
        data: [0, 0, 1, 0, 0, 0, 0],
        borderColor: "#ef4444",
        backgroundColor: "rgba(239, 68, 68, 0.05)",
        borderWidth: 2,
        pointBackgroundColor: "#ef4444",
        tension: 0.2,
        fill: true,
      },
      {
        label: "完成订单",
        data: [0, 0, 0, 1, 0, 0, 0],
        borderColor: "#10b981",
        backgroundColor: "rgba(16, 185, 129, 0.02)",
        borderWidth: 2,
        pointBackgroundColor: "#10b981",
        tension: 0.2,
        borderDash: [5, 3],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: true, position: "top" as const, labels: { boxWidth: 12, font: { size: 11 } } },
    },
    scales: {
      y: { beginAtZero: true, grid: { color: "#f1f5f9" } },
      x: { grid: { display: false } },
    },
  };

  // 近期活动模拟数据（可后续接入真实动态）
  const recentActivities = [
    { icon: "fa-user-plus", color: "green", text: "新用户注册", detail: "158****@163.com · 2小时前" },
    { icon: "fa-file-upload", color: "blue", text: "新订单提交 · 待处理", detail: "双均线策略 (Python) · 昨天" },
    { icon: "fa-check-circle", color: "purple", text: "订单已完成交付", detail: "MACD金叉策略 · 3天前" },
  ];

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* 侧边栏导航 */}
      <aside className="w-64 bg-gray-900 text-gray-300 flex flex-col fixed inset-y-0 z-50">
        <div className="p-5 border-b border-gray-800 flex items-center gap-3">
          <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
            <i className="fas fa-code text-white text-sm"></i>
          </div>
          <span className="text-white font-bold text-lg">策略工坊·后台</span>
        </div>
        <nav className="flex-1 px-3 py-5 space-y-1">
          <button
            onClick={() => setActiveTab("dashboard")}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition ${
              activeTab === "dashboard" ? "bg-red-600 text-white" : "hover:bg-gray-800"
            }`}
          >
            <i className="fas fa-tachometer-alt w-5"></i>
            <span className="font-medium">运营仪表盘</span>
          </button>
          <button
            onClick={() => setActiveTab("users")}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition ${
              activeTab === "users" ? "bg-red-600 text-white" : "hover:bg-gray-800"
            }`}
          >
            <i className="fas fa-users w-5"></i>
            <span className="font-medium">用户管理</span>
          </button>
          <button
            onClick={() => setActiveTab("orders")}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition ${
              activeTab === "orders" ? "bg-red-600 text-white" : "hover:bg-gray-800"
            }`}
          >
            <i className="fas fa-file-code w-5"></i>
            <span className="font-medium">订单管理</span>
          </button>
        </nav>
        <div className="p-4 border-t border-gray-800">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold">
              {user?.email?.charAt(0).toUpperCase() || "A"}
            </div>
            <div>
              <p className="text-sm font-medium text-white">{user?.email?.split("@")[0]}</p>
              <p className="text-xs text-gray-500">管理员</p>
            </div>
          </div>
          <button onClick={handleLogout} className="mt-3 text-xs text-red-400 hover:text-red-300 w-full text-left">
            <i className="fas fa-sign-out-alt mr-1"></i>退出登录
          </button>
        </div>
      </aside>

      {/* 主内容 */}
      <main className="flex-1 ml-64 p-6 lg:p-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              {activeTab === "dashboard" && "运营仪表盘"}
              {activeTab === "users" && "用户管理"}
              {activeTab === "orders" && "订单管理"}
            </h1>
            <p className="text-gray-500 text-sm mt-0.5">欢迎回来，{user?.email}</p>
          </div>
          <a href="/" target="_blank" className="flex items-center gap-2 text-sm text-gray-600 hover:text-red-600 border border-gray-300 rounded-lg px-4 py-2">
            <i className="fas fa-external-link-alt"></i> 访问前台
          </a>
        </div>

        {/* 仪表盘视图 */}
        {activeTab === "dashboard" && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
              <div className="bg-white rounded-xl shadow-sm p-5 border-l-4 border-blue-500">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 text-sm font-medium">注册用户总数</p>
                    <p className="text-3xl font-bold text-gray-800 mt-1">{stats.totalUsers}</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                    <i className="fas fa-users text-xl"></i>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-5 border-l-4 border-purple-500">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 text-sm font-medium">策略订单总数</p>
                    <p className="text-3xl font-bold text-gray-800 mt-1">{stats.totalOrders}</p>
                  </div>
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600">
                    <i className="fas fa-file-alt text-xl"></i>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-5 border-l-4 border-orange-500">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 text-sm font-medium">待处理订单</p>
                    <p className="text-3xl font-bold text-orange-600 mt-1">{stats.pendingOrders}</p>
                  </div>
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600">
                    <i className="fas fa-clock text-xl"></i>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-5 border-l-4 border-green-500">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 text-sm font-medium">本月营收 (预估)</p>
                    <p className="text-3xl font-bold text-gray-800 mt-1">¥0</p>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600">
                    <i className="fas fa-dollar-sign text-xl"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-8">
              <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-5">
                <h3 className="font-bold text-gray-800 mb-4">近7天订单趋势</h3>
                <div className="h-64">
                  <Line data={chartData} options={chartOptions} />
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-5">
                <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <i className="fas fa-stream text-red-500"></i> 最新动态
                </h3>
                <div className="space-y-4">
                  {recentActivities.map((act, idx) => (
                    <div key={idx} className="flex gap-3">
                      <div className={`w-8 h-8 bg-${act.color}-100 rounded-full flex items-center justify-center text-${act.color}-600 text-xs`}>
                        <i className={`fas ${act.icon}`}></i>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-800">{act.text}</p>
                        <p className="text-xs text-gray-500">{act.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}

        {/* 用户管理表格 (独立视图) */}
        {activeTab === "users" && (
          <div className="bg-white rounded-xl shadow-sm p-5">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 text-gray-600">
                  <tr>
                    <th className="px-6 py-3 text-left">邮箱</th>
                    <th className="px-6 py-3 text-left">用户名</th>
                    <th className="px-6 py-3 text-left">全名</th>
                    <th className="px-6 py-3 text-left">注册时间</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {loading ? (
                    <tr><td colSpan={4} className="px-6 py-4 text-center">加载中...</td></tr>
                  ) : (
                    profiles.map(p => (
                      <tr key={p.id}>
                        <td className="px-6 py-4">—</td>
                        <td className="px-6 py-4">{p.username || "—"}</td>
                        <td className="px-6 py-4">{p.full_name || "—"}</td>
                        <td className="px-6 py-4">{new Date(p.created_at).toLocaleString()}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* 订单管理表格 (独立视图) */}
        {activeTab === "orders" && (
          <div className="bg-white rounded-xl shadow-sm p-5">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 text-gray-600">
                  <tr>
                    <th className="px-6 py-3 text-left">提交时间</th>
                    <th className="px-6 py-3 text-left">策略名称</th>
                    <th className="px-6 py-3 text-left">语言</th>
                    <th className="px-6 py-3 text-left">状态</th>
                    <th className="px-6 py-3 text-left">描述</th>
                    <th className="px-6 py-3 text-left">操作</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {loading ? (
                    <tr><td colSpan={6} className="px-6 py-4 text-center">加载中...</td></tr>
                  ) : orders.length === 0 ? (
                    <tr><td colSpan={6} className="px-6 py-4 text-center text-gray-500">暂无订单</td></tr>
                  ) : (
                    orders.map(o => (
                      <tr key={o.id}>
                        <td className="px-6 py-4">{new Date(o.created_at).toLocaleString()}</td>
                        <td className="px-6 py-4 font-medium">{o.title || "未命名"}</td>
                        <td className="px-6 py-4">{o.language}</td>
                        <td className="px-6 py-4">{getStatusBadge(o.status)}</td>
                        <td className="px-6 py-4 max-w-xs truncate">{o.description}</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <select
                              value={o.status}
                              onChange={(e) => updateOrderStatus(o.id, e.target.value)}
                              className="border border-gray-300 rounded text-xs px-2 py-1"
                            >
                              <option value="pending">待处理</option>
                              <option value="in_progress">进行中</option>
                              <option value="completed">已完成</option>
                            </select>
                            <button
                              onClick={() => deleteOrder(o.id)}
                              className="text-red-600 hover:text-red-800 text-xs font-medium"
                            >
                              删除
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* 快捷操作卡片 (仪表盘专属) */}
        {activeTab === "dashboard" && (
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
            <div className="bg-white rounded-xl p-4 shadow-sm hover:bg-gray-50 cursor-pointer transition">
              <i className="fas fa-plus-circle text-red-600 text-xl mb-1"></i>
              <p className="text-sm font-medium">新建手动订单</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm hover:bg-gray-50 cursor-pointer transition">
              <i className="fas fa-download text-blue-600 text-xl mb-1"></i>
              <p className="text-sm font-medium">导出报表</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm hover:bg-gray-50 cursor-pointer transition">
              <i className="fas fa-envelope text-green-600 text-xl mb-1"></i>
              <p className="text-sm font-medium">批量通知</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm hover:bg-gray-50 cursor-pointer transition">
              <i className="fas fa-cog text-gray-600 text-xl mb-1"></i>
              <p className="text-sm font-medium">系统设置</p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

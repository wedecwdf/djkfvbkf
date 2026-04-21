import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabaseClient";
import { useAuth } from "@/contexts/AuthContext";

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
  const [activeTab, setActiveTab] = useState<"users" | "orders">("users");

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
    
    console.log("正在删除订单:", orderId);
    const { error } = await supabase
      .from("strategy_orders")
      .delete()
      .eq("id", orderId);
    
    if (error) {
      alert("删除失败：" + error.message);
      console.error("删除错误详情:", error);
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

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-800">管理后台 · 策略代码工坊</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">{user?.email}</span>
            <button onClick={handleLogout} className="text-sm text-red-600 hover:text-red-700 font-medium">
              退出登录
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex items-center justify-between">
              <div><p className="text-gray-500 text-sm">注册用户总数</p><p className="text-3xl font-bold">{stats.totalUsers}</p></div>
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center"><i className="fas fa-users text-red-600 text-xl"></i></div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex items-center justify-between">
              <div><p className="text-gray-500 text-sm">策略订单总数</p><p className="text-3xl font-bold">{stats.totalOrders}</p></div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center"><i className="fas fa-file-alt text-blue-600 text-xl"></i></div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex items-center justify-between">
              <div><p className="text-gray-500 text-sm">待处理订单</p><p className="text-3xl font-bold text-orange-600">{stats.pendingOrders}</p></div>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center"><i className="fas fa-clock text-orange-600 text-xl"></i></div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow overflow-hidden">
          <div className="border-b flex">
            <button
              onClick={() => setActiveTab("users")}
              className={`px-6 py-3 font-medium text-sm ${activeTab === "users" ? "text-red-600 border-b-2 border-red-600" : "text-gray-500"}`}
            >
              用户列表
            </button>
            <button
              onClick={() => setActiveTab("orders")}
              className={`px-6 py-3 font-medium text-sm ${activeTab === "orders" ? "text-red-600 border-b-2 border-red-600" : "text-gray-500"}`}
            >
              策略订单
            </button>
          </div>

          {activeTab === "users" ? (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 text-gray-600">
                  <tr><th className="px-6 py-3 text-left">用户名</th><th className="px-6 py-3 text-left">全名</th><th className="px-6 py-3 text-left">注册时间</th></tr>
                </thead>
                <tbody className="divide-y">
                  {loading ? <tr><td colSpan={3} className="px-6 py-4 text-center">加载中...</td></tr> : profiles.map(p => (
                    <tr key={p.id}><td className="px-6 py-4">{p.username || "—"}</td><td className="px-6 py-4">{p.full_name || "—"}</td><td className="px-6 py-4">{new Date(p.created_at).toLocaleString()}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
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
                  {loading ? <tr><td colSpan={6} className="px-6 py-4 text-center">加载中...</td></tr> : orders.map(o => (
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
                            title="删除订单"
                          >
                            删除
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

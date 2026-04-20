import { useAuth } from "@/contexts/AuthContext";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function Profile() {
  const { user, signOut } = useAuth();
  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (user) {
      fetchProfile();
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

  const handleUpdate = async (e: React.FormEvent) => {
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
      setMessage("更新成功！");
    }
  };

  if (!user) {
    return (
      <div className="pt-28 text-center">请先登录</div>
    );
  }

  return (
    <div className="pt-28 px-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">个人中心</h1>
      <div className="bg-white rounded-xl shadow p-6">
        <div className="mb-6">
          <p className="text-gray-600">邮箱：{user.email}</p>
        </div>
        <form onSubmit={handleUpdate} className="space-y-4">
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
          {message && <p className="text-sm text-green-600">{message}</p>}
          <button
            type="submit"
            disabled={loading}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg"
          >
            {loading ? "保存中..." : "更新资料"}
          </button>
        </form>
        <div className="mt-6 pt-6 border-t">
          <button
            onClick={signOut}
            className="text-red-600 hover:text-red-700"
          >
            退出登录
          </button>
        </div>
      </div>
    </div>
  );
}

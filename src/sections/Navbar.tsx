import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const Navbar = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { signUp, signIn } = useAuth();

  const handleNavClick = (sectionId: string) => {
    if (location.pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/?scrollTo=${sectionId}`);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const result = isLogin ? await signIn(email, password) : await signUp(email, password);
    setLoading(false);
    if (result.error) {
      setError(result.error.message);
    } else {
      setShowAuthModal(false);
      if (!isLogin) alert("注册成功！请登录。");
    }
  };

  const handleLogout = async () => {
    await signOut();
    navigate("/");
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-red-100">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
              <i className="fas fa-code text-white text-sm"></i>
            </div>
            <span className="text-xl font-bold">
              策略<span className="text-red-600">代码工坊</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <button onClick={() => handleNavClick("hero")} className="text-gray-700 hover:text-red-600 transition">首页</button>
            <button onClick={() => handleNavClick("services")} className="text-gray-700 hover:text-red-600 transition">服务</button>
            <button onClick={() => handleNavClick("workflow")} className="text-gray-700 hover:text-red-600 transition">流程</button>
            <button onClick={() => handleNavClick("examples")} className="text-gray-700 hover:text-red-600 transition">示例</button>
            <button onClick={() => handleNavClick("contact")} className="text-gray-700 hover:text-red-600 transition">联系</button>
          </div>
          <div className="flex gap-2 items-center">
            {user ? (
              <>
                <button onClick={() => navigate("/profile")} className="text-sm font-medium text-gray-600 hover:text-red-600 px-3 py-1.5">个人中心</button>
                <button onClick={handleLogout} className="bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-4 py-1.5 rounded-lg">退出</button>
              </>
            ) : (
              <>
                <button onClick={() => { setIsLogin(true); setShowAuthModal(true); }} className="text-sm font-medium text-gray-600 hover:text-red-600 px-3 py-1.5">登录</button>
                <button onClick={() => { setIsLogin(false); setShowAuthModal(true); }} className="bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-4 py-1.5 rounded-lg">注册</button>
              </>
            )}
          </div>
        </div>
      </nav>

      {showAuthModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl">
            <h2 className="text-2xl font-bold mb-4">{isLogin ? "登录" : "注册"}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">邮箱</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">密码</label>
                <input
                  type="password"
                  required
                  minLength={6}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              {error && <p className="text-red-600 text-sm">{error}</p>}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2.5 rounded-lg transition disabled:opacity-50"
              >
                {loading ? "处理中..." : isLogin ? "登录" : "注册"}
              </button>
            </form>
            <button
              onClick={() => setShowAuthModal(false)}
              className="mt-4 text-sm text-gray-500 hover:text-gray-700 w-full text-center"
            >
              取消
            </button>
            <p className="mt-2 text-center text-sm">
              {isLogin ? "没有账号？" : "已有账号？"}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-red-600 font-medium ml-1"
              >
                {isLogin ? "去注册" : "去登录"}
              </button>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

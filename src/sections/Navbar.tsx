import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/lib/supabaseClient";

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

  // 预热 Supabase 客户端（提前建立连接）
  useEffect(() => {
    const warmup = async () => {
      try {
        await supabase.auth.getSession();
      } catch (e) {}
    };
    warmup();
  }, []);

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
    setLoading(true); // 立即显示加载状态

    const startTime = performance.now();
    let result;
    
    try {
      result = isLogin ? await signIn(email, password) : await signUp(email, password);
    } catch (err: any) {
      result = { error: err };
    }
    
    const endTime = performance.now();
    console.log(`[Auth] ${isLogin ? '登录' : '注册'} 请求耗时: ${(endTime - startTime).toFixed(0)}ms`);

    setLoading(false);
    if (result.error) {
      setError(result.error.message);
      console.error('[Auth] 错误详情:', result.error);
    } else {
      setShowAuthModal(false);
      if (!isLogin) alert("注册成功！请登录。");
    }
  };

  const handleLogout = async () => {
    const startTime = performance.now();
    await signOut();
    console.log(`[Auth] 退出请求耗时: ${(performance.now() - startTime).toFixed(0)}ms`);
    navigate("/");
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-red-100">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center shadow-md">
              <i className="fas fa-code text-white text-sm"></i>
            </div>
            <span className="text-xl font-bold">
              量化<span className="text-red-600">实验室</span>
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
                <button onClick={() => navigate("/profile")} className="text-sm font-medium text-gray-600 hover:text-red-600 px-3 py-1.5 transition">个人中心</button>
                <button onClick={handleLogout} className="bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-4 py-1.5 rounded-lg shadow-sm transition">退出</button>
              </>
            ) : (
              <>
                <button onClick={() => { setIsLogin(true); setShowAuthModal(true); }} className="text-sm font-medium text-gray-600 hover:text-red-600 px-3 py-1.5 transition">登录</button>
                <button onClick={() => { setIsLogin(false); setShowAuthModal(true); }} className="bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-4 py-1.5 rounded-lg shadow-sm transition">注册</button>
              </>
            )}
          </div>
        </div>
      </nav>

      {showAuthModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
          <div className="auth-card w-full max-w-md p-6 md:p-8 bg-white/85 backdrop-blur-xl rounded-3xl border border-red-100/50 shadow-2xl shadow-red-200/30">
            <div className="flex gap-6 mb-6 border-b border-gray-200/60 pb-2">
              <button
                onClick={() => setIsLogin(true)}
                className={`tab-btn text-xl font-medium transition pb-1 relative ${isLogin ? 'text-red-600 after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-[3px] after:bg-red-600 after:rounded-t' : 'text-gray-400 hover:text-gray-600'}`}
              >
                登录
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`tab-btn text-xl font-medium transition pb-1 relative ${!isLogin ? 'text-red-600 after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-[3px] after:bg-red-600 after:rounded-t' : 'text-gray-400 hover:text-gray-600'}`}
              >
                注册
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <i className="far fa-envelope mr-2 text-red-400"></i>邮箱
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="input-field w-full px-4 py-3 rounded-xl bg-white/70 backdrop-blur-sm border border-gray-200 text-gray-800 placeholder-gray-400 focus:border-red-500 focus:ring-4 focus:ring-red-100 transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <i className="fas fa-lock mr-2 text-red-400"></i>密码
                </label>
                <input
                  type="password"
                  required
                  minLength={6}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="input-field w-full px-4 py-3 rounded-xl bg-white/70 backdrop-blur-sm border border-gray-200 text-gray-800 placeholder-gray-400 focus:border-red-500 focus:ring-4 focus:ring-red-100 transition"
                />
              </div>
              {!isLogin && (
                <p className="text-xs text-gray-500 -mt-2">密码至少6位</p>
              )}
              {error && <p className="text-red-600 text-sm bg-red-50 p-2 rounded-lg">{error}</p>}
              <button
                type="submit"
                disabled={loading}
                className="submit-btn w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-3.5 px-4 rounded-xl shadow-lg shadow-red-200 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i> 处理中...
                  </>
                ) : (
                  <>
                    <i className={`fas ${isLogin ? 'fa-sign-in-alt' : 'fa-user-plus'}`}></i>
                    {isLogin ? "登录" : "注册"}
                  </>
                )}
              </button>
            </form>

            <button
              onClick={() => setShowAuthModal(false)}
              className="mt-4 text-sm text-gray-500 hover:text-gray-700 w-full text-center transition"
            >
              取消
            </button>
            <p className="mt-3 text-center text-sm text-gray-600">
              {isLogin ? "还没有账号？" : "已有账号？"}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-red-600 font-medium hover:underline ml-1"
              >
                {isLogin ? "立即注册" : "去登录"}
              </button>
            </p>
            <div className="relative my-5">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-white/80 px-4 text-gray-400 backdrop-blur-sm rounded-full">或</span>
              </div>
            </div>
            <div className="flex justify-center gap-5">
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/80 border border-gray-200 text-gray-600 hover:bg-red-50 hover:border-red-200 hover:text-red-600 transition shadow-sm" disabled>
                <i className="fab fa-google"></i>
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/80 border border-gray-200 text-gray-600 hover:bg-red-50 hover:border-red-200 hover:text-red-600 transition shadow-sm" disabled>
                <i className="fab fa-github"></i>
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/80 border border-gray-200 text-gray-600 hover:bg-red-50 hover:border-red-200 hover:text-red-600 transition shadow-sm" disabled>
                <i className="fab fa-weixin"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;




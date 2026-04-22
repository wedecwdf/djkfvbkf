import { useState, useRef } from "react";
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
  
  // 注册流程状态
  const [step, setStep] = useState<"email" | "code" | "password">("email");
  const [code, setCode] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const { signIn } = useAuth();

  const handleNavClick = (sectionId: string) => {
    if (location.pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(`/?scrollTo=${sectionId}`);
    }
  };

  const startCountdown = () => {
    setCountdown(60);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(timerRef.current!);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleSendCode = async () => {
    if (!email) {
      setError("请输入邮箱地址");
      return;
    }
    setError("");
    setLoading(true);
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { shouldCreateUser: true }
    });
    setLoading(false);
    if (error) {
      setError(error.message);
    } else {
      setOtpSent(true);
      setStep("code");
      startCountdown();
    }
  };

  const handleVerifyCode = async () => {
    if (!code) {
      setError("请输入验证码");
      return;
    }
    setError("");
    setLoading(true);
    const { data, error } = await supabase.auth.verifyOtp({
      email,
      token: code,
      type: "email",
    });
    setLoading(false);
    if (error) {
      setError(error.message);
    } else {
      // 验证成功，进入设置密码步骤
      setStep("password");
    }
  };

  const handleSetPassword = async () => {
    if (!password || password.length < 6) {
      setError("密码至少6位");
      return;
    }
    setError("");
    setLoading(true);
    // 更新当前用户的密码（此时用户已通过验证码登录）
    const { error } = await supabase.auth.updateUser({ password });
    setLoading(false);
    if (error) {
      setError(error.message);
    } else {
      alert("注册成功！");
      setShowAuthModal(false);
      resetForm();
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const result = await signIn(email, password);
    setLoading(false);
    if (result.error) {
      setError(result.error.message);
    } else {
      setShowAuthModal(false);
    }
  };

  const resetForm = () => {
    setStep("email");
    setEmail("");
    setPassword("");
    setCode("");
    setOtpSent(false);
    setError("");
    setCountdown(0);
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const handleLogout = async () => {
    await signOut();
    navigate("/");
  };

  const closeModal = () => {
    setShowAuthModal(false);
    resetForm();
  };

  const switchToLogin = () => {
    setIsLogin(true);
    resetForm();
  };

  const switchToRegister = () => {
    setIsLogin(false);
    resetForm();
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
                <button
                  onClick={() => navigate("/profile")}
                  className="text-sm font-medium text-gray-600 hover:text-red-600 px-3 py-1.5"
                >
                  个人中心
                </button>
                <button
                  onClick={handleLogout}
                  className="bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-4 py-1.5 rounded-lg"
                >
                  退出
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => { setIsLogin(true); setShowAuthModal(true); }}
                  className="text-sm font-medium text-gray-600 hover:text-red-600 px-3 py-1.5"
                >
                  登录
                </button>
                <button
                  onClick={() => { setIsLogin(false); setShowAuthModal(true); }}
                  className="bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-4 py-1.5 rounded-lg"
                >
                  注册
                </button>
              </>
            )}
          </div>
        </div>
      </nav>

      {showAuthModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl">
            <h2 className="text-2xl font-bold mb-4">
              {isLogin ? "登录" : (step === "email" ? "注册" : step === "code" ? "输入验证码" : "设置密码")}
            </h2>
            
            {isLogin ? (
              <form onSubmit={handleLogin} className="space-y-4">
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
                  {loading ? "处理中..." : "登录"}
                </button>
              </form>
            ) : (
              <div className="space-y-4">
                {step === "email" && (
                  <>
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
                    {error && <p className="text-red-600 text-sm">{error}</p>}
                    <button
                      onClick={handleSendCode}
                      disabled={loading || !email}
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2.5 rounded-lg transition disabled:opacity-50"
                    >
                      {loading ? "发送中..." : "获取验证码"}
                    </button>
                  </>
                )}

                {step === "code" && (
                  <>
                    <div>
                      <label className="block text-sm font-medium mb-1">验证码</label>
                      <input
                        type="text"
                        required
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        placeholder="请输入邮箱收到的6位验证码"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                    </div>
                    {error && <p className="text-red-600 text-sm">{error}</p>}
                    <div className="flex gap-2">
                      <button
                        onClick={handleVerifyCode}
                        disabled={loading || !code}
                        className="flex-1 bg-red-600 hover:bg-red-700 text-white font-medium py-2.5 rounded-lg transition disabled:opacity-50"
                      >
                        {loading ? "验证中..." : "下一步"}
                      </button>
                      <button
                        onClick={handleSendCode}
                        disabled={countdown > 0}
                        className="px-4 py-2.5 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium disabled:opacity-50"
                      >
                        {countdown > 0 ? `${countdown}秒后重发` : "重新发送"}
                      </button>
                    </div>
                  </>
                )}

                {step === "password" && (
                  <>
                    <div>
                      <label className="block text-sm font-medium mb-1">设置密码</label>
                      <input
                        type="password"
                        required
                        minLength={6}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="至少6位"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                    </div>
                    {error && <p className="text-red-600 text-sm">{error}</p>}
                    <button
                      onClick={handleSetPassword}
                      disabled={loading || !password}
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2.5 rounded-lg transition disabled:opacity-50"
                    >
                      {loading ? "处理中..." : "完成注册"}
                    </button>
                  </>
                )}
              </div>
            )}

            <button
              onClick={closeModal}
              className="mt-4 text-sm text-gray-500 hover:text-gray-700 w-full text-center"
            >
              取消
            </button>
            <p className="mt-2 text-center text-sm">
              {isLogin ? "没有账号？" : "已有账号？"}
              <button
                onClick={isLogin ? switchToRegister : switchToLogin}
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

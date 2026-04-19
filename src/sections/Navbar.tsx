import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogin = () => {
    alert("登录功能开发中，敬请期待！");
  };

  const handleRegister = () => {
    alert("注册功能开发中，敬请期待！");
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md border-b border-red-100" : "bg-transparent"
      }`}
    >
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
          <a href="#hero" className="text-gray-700 hover:text-red-600">
            首页
          </a>
          <a href="#services" className="text-gray-700 hover:text-red-600">
            服务
          </a>
          <a href="#workflow" className="text-gray-700 hover:text-red-600">
            流程
          </a>
          <a href="#examples" className="text-gray-700 hover:text-red-600">
            示例
          </a>
          <a href="#contact" className="text-gray-700 hover:text-red-600">
            联系
          </a>
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleLogin}
            className="text-sm font-medium text-gray-600 hover:text-red-600 px-3 py-1.5 transition"
          >
            登录
          </button>
          <button
            onClick={handleRegister}
            className="bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-4 py-1.5 rounded-lg transition"
          >
            注册
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

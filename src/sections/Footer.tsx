const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
        <div className="flex items-center gap-2">
          <span className="text-red-500 text-xl font-bold">〈/〉</span>
          <span className="font-medium text-white">策略代码工坊</span>
        </div>
        <div className="mt-3 md:mt-0">
          © 2024 策略代码工坊 · 
          <span className="text-red-500 font-medium"> 不提供投资建议</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

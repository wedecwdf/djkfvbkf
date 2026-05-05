import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Workflow from "./sections/Workflow";
import CodeExample from "./sections/CodeExample";
import ContactCTA from "./sections/ContactCTA";
import Footer from "./sections/Footer";
import Profile from "./sections/Profile";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedAdminRoute from "./components/ProtectedAdminRoute";
import RightSidebar from "./components/RightSidebar";

function HomePage() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4">
        {/* 移动端：单栏 + 底部文章区 */}
        <div className="block md:hidden">
          <Hero />
          <Services />
          <Workflow />
          <CodeExample />
          <ContactCTA />
          <div className="mt-8">
            <RightSidebar />
          </div>
        </div>

        {/* 平板及以上：三栏布局 */}
        <div className="hidden md:flex gap-6">
          <aside className="hidden lg:block w-[8%] flex-shrink-0"></aside>
          <main className="flex-1 lg:w-[64%]">
            <Hero />
            <Services />
            <Workflow />
            <CodeExample />
            <ContactCTA />
          </main>
          <aside className="w-[28%] lg:w-[22%] flex-shrink-0">
            <RightSidebar />
          </aside>
        </div>
      </div>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<><Navbar /><Profile /><Footer /></>} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedAdminRoute>
              <AdminDashboard />
            </ProtectedAdminRoute>
          }
        />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

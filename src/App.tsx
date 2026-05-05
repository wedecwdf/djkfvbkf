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
      <div className="max-w-[1400px] mx-auto flex gap-0 px-4">
        {/* 左侧留白 */}
        <aside className="hidden xl:block w-[12%] flex-shrink-0"></aside>
        {/* 中间核心内容 */}
        <main className="flex-1 min-w-0 xl:w-[60%] px-2">
          <Hero />
          <Services />
          <Workflow />
          <CodeExample />
          <ContactCTA />
        </main>
        {/* 右侧边栏 */}
        <aside className="hidden xl:block w-[22%] flex-shrink-0 pl-4">
          <RightSidebar />
        </aside>
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

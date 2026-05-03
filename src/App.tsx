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
import LatestArticles from "./components/LatestArticles";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <LatestArticles />
      <Workflow />
      <CodeExample />
      <ContactCTA />
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

import { Navigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function ProtectedAdminRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    if (!user) {
      setIsAdmin(false);
      setChecking(false);
      return;
    }
    supabase
      .from("profiles")
      .select("is_admin")
      .eq("id", user.id)
      .single()
      .then(({ data, error }) => {
        setIsAdmin(data?.is_admin || false);
        setChecking(false);
      });
  }, [user]);

  if (loading || checking) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-500">验证权限中...</div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/admin" replace />;
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">权限不足</h2>
          <p className="text-gray-600 mb-4">您没有管理员权限</p>
          <a href="/" className="text-red-600 hover:underline">返回首页</a>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}

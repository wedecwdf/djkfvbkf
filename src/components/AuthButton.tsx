import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { LogIn, UserPlus, LogOut, User } from 'lucide-react';

export function AuthButton() {
  const { user, login, signup, logout } = useAuth();

  if (user) {
    return (
      <div className="flex items-center gap-3">
        <span className="text-sm text-muted-foreground flex items-center gap-1">
          <User className="h-4 w-4" />
          {user.user_metadata?.full_name || user.email}
        </span>
        <Button variant="outline" size="sm" onClick={logout}>
          <LogOut className="mr-2 h-4 w-4" />
          退出
        </Button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <Button variant="ghost" size="sm" onClick={login}>
        <LogIn className="mr-2 h-4 w-4" />
        登录
      </Button>
      <Button size="sm" onClick={signup}>
        <UserPlus className="mr-2 h-4 w-4" />
        注册
      </Button>
    </div>
  );
}

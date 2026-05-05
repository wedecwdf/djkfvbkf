import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { AuthProvider } from './contexts/AuthContext'

// 延迟加载，不阻塞首屏渲染
const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
)

// 预加载 Supabase 客户端（不阻塞渲染）
import('./lib/supabaseClient').then(() => {
  console.debug('Supabase client ready')
})


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

// 移动端错误捕获（类型安全版本）
const setupErrorHandler = () => {
  const originalOnError = window.onerror
  window.onerror = function(
    event: string | Event,
    source?: string,
    lineno?: number,
    colno?: number,
    error?: Error
  ) {
    const msg = typeof event === 'string' ? event : '未知错误'
    if (msg.includes('ResizeObserver')) {
      return true
    }
    if (originalOnError) {
      return originalOnError(event, source, lineno, colno, error)
    }
    return false
  }

  window.addEventListener('unhandledrejection', (e) => {
    const reason = e.reason?.message || e.reason
    console.error('Unhandled Rejection:', reason)
    e.preventDefault()
  })
}

setupErrorHandler()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

// 移动端 ResizeObserver 循环错误抑制
const resizeObserverErr = () => {
  const e = window.onerror
  window.onerror = function(msg) {
    if (msg.includes('ResizeObserver')) return
    return e && e.apply(this, arguments)
  }
}
resizeObserverErr()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


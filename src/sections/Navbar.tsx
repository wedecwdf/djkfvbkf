import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X, Code, Search, Bell } from 'lucide-react'
import { AuthButton } from '@/components/AuthButton'

const navItems = [
  { name: '首页', href: '#hero' },
  { name: '服务', href: '#services' },
  { name: '流程', href: '#workflow' },
  { name: '示例', href: '#examples' },
  { name: '联系', href: '#contact' },
]

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-red-100">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
            <Code className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-gray-900">
            策略<span className="text-red-600">代码工坊</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="text-gray-700 hover:text-red-600 px-2 py-1 rounded-lg transition"
            >
              {item.name}
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-gray-500 hover:text-red-600">
            <Search className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-500 hover:text-red-600">
            <Bell className="w-5 h-5" />
          </Button>
          <AuthButton />
        </div>

        <button
          className="md:hidden p-2 text-gray-500 hover:text-red-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-4 py-3 text-sm font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-lg transition"
              >
                {item.name}
              </button>
            ))}
            <div className="pt-3 border-t mt-3 flex justify-center">
              <AuthButton />
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
import { useEffect, useState } from 'react'
import { Moon, Sun, Globe } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function Header({ onToggleTheme, theme }) {
  const { i18n } = useTranslation()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const dir = i18n.language === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.setAttribute('dir', dir)
  }, [i18n.language])

  const changeLang = (lng) => {
    i18n.changeLanguage(lng)
    localStorage.setItem('lang', lng)
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-900/60 border-b border-slate-200/60 dark:border-slate-800">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-semibold text-slate-900 dark:text-slate-100">Agency.dev</a>

        <div className="flex items-center gap-2">
          <div className="relative">
            <button aria-label="Change language" className="inline-flex items-center gap-2 px-3 py-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800" onClick={() => setOpen(!open)}>
              <Globe className="w-4 h-4" />
              <span className="text-sm">{i18n.language.toUpperCase()}</span>
            </button>
            {open && (
              <div className="absolute right-0 mt-2 w-36 rounded-md border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-md">
                {['en','fr','ar'].map(l => (
                  <button key={l} onClick={() => { changeLang(l); setOpen(false) }} className="w-full text-left px-3 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800">
                    {l.toUpperCase()}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button aria-label="Toggle theme" className="inline-flex items-center justify-center w-10 h-10 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800" onClick={onToggleTheme}>
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </header>
  )
}

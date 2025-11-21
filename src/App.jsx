import { useEffect, useMemo, useState } from 'react'
import { initI18n } from './i18n'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Work from './components/Work'
import CTA from './components/CTA'

function App() {
  const [ready, setReady] = useState(false)
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'))

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    let mounted = true
    initI18n().then(() => mounted && setReady(true))
    return () => { mounted = false }
  }, [])

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark')

  if (!ready) {
    return (
      <div className="min-h-screen grid place-items-center bg-white dark:bg-slate-950 text-slate-700 dark:text-slate-200">
        <div className="animate-pulse">Loading…</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Header onToggleTheme={toggleTheme} theme={theme} />
      <main>
        <Hero />
        <Features />
        <Work />
        <CTA />
      </main>
      <footer className="py-10 text-center text-sm text-slate-500 dark:text-slate-400">
        © {new Date().getFullYear()} Agency.dev
      </footer>
    </div>
  )
}

export default App

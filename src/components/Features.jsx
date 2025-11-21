import { Section, Card, CardContent } from './ui.jsx'
import { useTranslation } from 'react-i18next'
import * as Icons from 'lucide-react'

export default function Features() {
  const { t } = useTranslation()
  const items = [0,1,2].map(i => ({
    icon: t(`services.items.${i}.icon`),
    title: t(`services.items.${i}.title`),
    desc: t(`services.items.${i}.desc`)
  }))

  return (
    <Section id="services">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 text-center mb-10">{t('services.title')}</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((it, idx) => {
          const Icon = Icons[it.icon] || Icons.Sparkles
          return (
            <Card key={idx} className="transition-transform hover:-translate-y-1">
              <CardContent>
                <div className="w-12 h-12 rounded-lg bg-sky-50 dark:bg-sky-900/30 text-sky-600 dark:text-sky-300 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-slate-100">{it.title}</h3>
                <p className="text-slate-600 dark:text-slate-300">{it.desc}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </Section>
  )
}

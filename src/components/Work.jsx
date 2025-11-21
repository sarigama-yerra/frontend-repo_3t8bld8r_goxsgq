import { Section, Card, CardContent } from './ui'
import { useTranslation } from 'react-i18next'

export default function Work() {
  const { t } = useTranslation()
  const items = [0,1,2].map(i => ({
    title: t(`work.items.${i}.title`),
    badge: t(`work.items.${i}.badge`),
    desc: t(`work.items.${i}.desc`)
  }))

  return (
    <Section id="work">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 text-center mb-10">{t('work.title')}</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((it, idx) => (
          <Card key={idx} className="transition-transform hover:-translate-y-1">
            <CardContent>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{it.title}</h3>
                <span className="inline-flex items-center rounded-full bg-slate-100 dark:bg-slate-800 px-2.5 py-1 text-xs text-slate-700 dark:text-slate-300">{it.badge}</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300">{it.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  )
}

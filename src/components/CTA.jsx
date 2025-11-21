import { Section, Button } from './ui.jsx'
import { useTranslation } from 'react-i18next'

export default function CTA() {
  const { t } = useTranslation()
  return (
    <Section id="contact" className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-3">{t('contact.title')}</h2>
      <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">{t('contact.subtitle')}</p>
      <Button as="a" href={t('contact.primaryCta.href')}>{t('contact.primaryCta.label')}</Button>
    </Section>
  )
}

import Spline from '@splinetool/react-spline'
import { motion, useReducedMotion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Button, Section } from './ui.jsx'

export default function Hero() {
  const { t } = useTranslation()
  const prefersReducedMotion = useReducedMotion()

  return (
    <Section id="hero" className="pt-28">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-sm uppercase tracking-wide text-sky-600 dark:text-sky-400 font-semibold mb-3">{t('hero.eyebrow')}</p>
          <motion.h1
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-slate-100 leading-tight"
          >
            {t('hero.title')}
          </motion.h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">{t('hero.subtitle')}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button as="a" href={t('hero.primaryCta.href')}>
              {t('hero.primaryCta.label')}
            </Button>
            <Button as="a" variant="secondary" href={t('hero.secondaryCta.href')}>
              {t('hero.secondaryCta.label')}
            </Button>
          </div>
        </div>
        <div className="relative aspect-[4/3] md:aspect-[16/9] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50">
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-sky-100/30 dark:to-sky-300/10" />
        </div>
      </div>
    </Section>
  )
}

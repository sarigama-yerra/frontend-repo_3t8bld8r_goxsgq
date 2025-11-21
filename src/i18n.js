import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// Load content.json and map into namespaces/keys
async function loadTranslations() {
  const res = await fetch('/content.json')
  const content = await res.json()

  const locales = content.locales || ['en']

  const resources = {}
  for (const lng of locales) {
    resources[lng] = { translation: {} }
  }

  // Flatten sections into keys like hero.title, services.items.0.title
  const setDeep = (obj, path, value) => {
    const parts = path.split('.')
    let cur = obj
    for (let i = 0; i < parts.length - 1; i++) {
      if (!cur[parts[i]]) cur[parts[i]] = {}
      cur = cur[parts[i]]
    }
    cur[parts[parts.length - 1]] = value
  }

  content.sections.forEach((section) => {
    const base = section.id
    Object.keys(section).forEach((k) => {
      const v = section[k]
      if (typeof v === 'object' && !Array.isArray(v)) {
        // Maybe localized object
        if (v.en || v.fr || v.ar) {
          for (const lng of locales) {
            if (v[lng] !== undefined) {
              setDeep(resources[lng].translation, `${base}.${k}`, v[lng])
            }
          }
        }
      }
    })

    // arrays like items with localized fields
    if (Array.isArray(section.items)) {
      section.items.forEach((item, idx) => {
        Object.keys(item).forEach((ik) => {
          const iv = item[ik]
          if (typeof iv === 'object' && (iv.en || iv.fr || iv.ar)) {
            for (const lng of locales) {
              if (iv[lng] !== undefined) {
                setDeep(resources[lng].translation, `${base}.items.${idx}.${ik}`, iv[lng])
              }
            }
          } else if (typeof iv === 'string') {
            // Non-localized like icon/badge
            for (const lng of locales) {
              setDeep(resources[lng].translation, `${base}.items.${idx}.${ik}`, iv)
            }
          }
        })
      })
    }

    // CTAs possibly nested with localized label
    if (section.primaryCta) {
      const { label, href } = section.primaryCta
      for (const lng of locales) {
        if (label && label[lng]) setDeep(resources[lng].translation, `${base}.primaryCta.label`, label[lng])
        if (href) setDeep(resources[lng].translation, `${base}.primaryCta.href`, href)
      }
    }
    if (section.secondaryCta) {
      const { label, href } = section.secondaryCta
      for (const lng of locales) {
        if (label && label[lng]) setDeep(resources[lng].translation, `${base}.secondaryCta.label`, label[lng])
        if (href) setDeep(resources[lng].translation, `${base}.secondaryCta.href`, href)
      }
    }
  })

  return resources
}

export async function initI18n() {
  const resources = await loadTranslations()
  const lng = localStorage.getItem('lang') || navigator.language?.split('-')[0] || 'en'
  const fallbackLng = 'en'

  await i18n
    .use(initReactI18next)
    .init({
      resources,
      lng: resources[lng] ? lng : fallbackLng,
      fallbackLng,
      interpolation: { escapeValue: false },
    })

  return i18n
}

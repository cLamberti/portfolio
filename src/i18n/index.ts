import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import esNav from './locales/es/nav.json'
import esHero from './locales/es/hero.json'
import esAbout from './locales/es/about.json'
import esProjects from './locales/es/projects.json'
import esSkills from './locales/es/skills.json'
import esContact from './locales/es/contact.json'
import esFooter from './locales/es/footer.json'

import enNav from './locales/en/nav.json'
import enHero from './locales/en/hero.json'
import enAbout from './locales/en/about.json'
import enProjects from './locales/en/projects.json'
import enSkills from './locales/en/skills.json'
import enContact from './locales/en/contact.json'
import enFooter from './locales/en/footer.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      es: {
        nav: esNav,
        hero: esHero,
        about: esAbout,
        projects: esProjects,
        skills: esSkills,
        contact: esContact,
        footer: esFooter,
      },
      en: {
        nav: enNav,
        hero: enHero,
        about: enAbout,
        projects: enProjects,
        skills: enSkills,
        contact: enContact,
        footer: enFooter,
      },
    },
    fallbackLng: 'es',
    defaultNS: 'nav',
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'portfolio-lang',
    },
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n

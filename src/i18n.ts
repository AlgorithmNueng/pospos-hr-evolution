import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { DEFAULT_LANGUAGE, USER_LANGUAGE_KEY } from './utils/constant'

i18n
  // load translation using http -> see /public/locales
  .use(Backend)
  // detect user language
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  .init({
    fallbackLng: 'th',
    debug: true,
    detection: {
      // config localstorage key for store language value
      lookupLocalStorage: USER_LANGUAGE_KEY
    },
    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    }
  })

// NOTE: config default lang
const currentLang = localStorage.getItem(USER_LANGUAGE_KEY)
if (!currentLang) {
  i18n.changeLanguage(DEFAULT_LANGUAGE)
}

export default i18n

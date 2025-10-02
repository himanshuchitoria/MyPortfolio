import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation JSON files
import en from './locales/en.json';
import ja from './locales/ja.json';

i18n
  .use(initReactI18next) // Passes i18n instance to react-i18next
  .init({
    resources: {
      en: { translation: en },
      ja: { translation: ja },
    },
    lng: 'en', // Set default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React handles this
    },
  });

export default i18n;

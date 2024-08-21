import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { default as nextI18NextConfig } from './next-i18next.config';

i18n
  .use(initReactI18next)
  .init({
    ...nextI18NextConfig.i18n,
    interpolation: {
      escapeValue: false, // React already protects against XSS
    },
  });

export default i18n;

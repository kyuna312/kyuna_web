// next-i18next.config.js
module.exports = {
  i18n: {
    locales: ['en', 'ja'], // Add your supported locales here
    defaultLocale: 'en',
  },
    localePath: './public/locales', // Path where your locale files are stored
    localeStructure: '{{lng}}/{{ns}}',
    localeExtension: 'json',
    load: 'currentOnly',
    react: {
      useSuspense: false,
    },
};

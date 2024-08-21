import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

// components/LanguageSwitcher.js

const LanguageSwitcher = React.memo(() => {
  const { i18n } = useTranslation();
  const { locale, asPath } = useRouter();

  const switchLanguage = useCallback((lng) => {
    i18n.changeLanguage(lng);
  }, [i18n]);

  return (
    <div>
      <button onClick={() => switchLanguage('en')}>English</button>
      <button onClick={() => switchLanguage('ja')}>日本語</button>
    </div>
  );
});

export default LanguageSwitcher;

import { useRouter } from 'next/router';

const LanguageSwitcher = () => {
  const { locale, push, pathname, asPath } = useRouter();

  const changeLanguage = (lang) => {
    push(pathname, asPath, { locale: lang });
  };

  return (
    <div>
      <button onClick={() => changeLanguage('en')} disabled={locale === 'en'}>
        {`English`}
      </button>
      <button onClick={() => changeLanguage('ja')} disabled={locale === 'ja'}>
        {`日本語`}
      </button>
    </div>
  );
};

export default LanguageSwitcher;

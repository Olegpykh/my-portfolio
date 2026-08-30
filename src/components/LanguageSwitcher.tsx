import { useTranslation } from 'react-i18next';

const LANGUAGES = [
  { code: 'en', label: 'EN' },
  { code: 'de', label: 'DE' },
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <div className="inline-flex p-0.5 rounded-full bg-rose-100 dark:bg-stone-800">
      {LANGUAGES.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => i18n.changeLanguage(code)}
          aria-label={`Switch to ${label}`}
          className={`px-2.5 py-1 text-[11px] font-medium rounded-full transition-colors ${
            i18n.language === code
              ? 'bg-white dark:bg-stone-700 text-rose-600 dark:text-rose-400 shadow-sm'
              : 'text-stone-500 dark:text-stone-400 hover:text-stone-700 dark:hover:text-stone-200'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;

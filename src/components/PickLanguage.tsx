import useLocalStorage from '../hooks/useLocalStorage';
import { useLanguage } from '../stores/useLanguage';
import { useTheme } from '../stores/useTheme';
import '../styles/pick-language.css';

const PickLanguage = () => {
  const { language, setLanguage } = useLanguage();
  const { theme } = useTheme();

  useLocalStorage({
    setter: setLanguage,
    localStorageItemName: 'language',
    valueToSave: language,
  });

  const containerClassNameTheme =
    theme === 'light'
      ? 'pick-language-container container-light'
      : 'pick-language-container container-dark';

  const buttonClassNameTheme =
    theme === 'light' ? 'button-active-light' : 'button-active-dark';

  return (
    <div className={containerClassNameTheme}>
      <button
        className={language === 'fr-FR' ? buttonClassNameTheme : ''}
        onClick={() => setLanguage('fr-FR')}
      >
        français
      </button>
      <button
        className={language === 'en-US' ? buttonClassNameTheme : ''}
        onClick={() => setLanguage('en-US')}
      >
        english
      </button>
    </div>
  );
};

export default PickLanguage;

import useLocalStorage from '../hooks/useLocalStorage';
import { useTheme } from '../stores/useTheme';
import '../styles/pick-theme.css';

const PickLanguage = () => {
  const { theme, setTheme } = useTheme();

  useLocalStorage({
    setter: setTheme,
    localStorageItemName: 'theme',
    valueToSave: theme,
  });

  const containerClassNameTheme =
    theme === 'light'
      ? 'pick-theme-container container-light'
      : 'pick-theme-container container-dark';

  const buttonClassNameThemeLight =
    theme === 'light' ? 'button-active-light ' : '';

  const buttonClassNameThemeDark =
    theme === 'dark' ? 'button-active-dark ' : '';

  return (
    <div className={containerClassNameTheme}>
      <button
        className={buttonClassNameThemeLight}
        onClick={() => setTheme('light')}
      >
        light
      </button>
      <button
        className={buttonClassNameThemeDark}
        onClick={() => setTheme('dark')}
      >
        dark
      </button>
    </div>
  );
};

export default PickLanguage;

import useLocalStorage, { State } from '../hooks/useLocalStorage';
import { useTheme } from '../stores/useTheme';
import { useLanguage } from '../stores/useLanguage';
import '../styles/components/pick-theme.css';

const PickLanguage = () => {
  const { theme, setTheme } = useTheme();
  const { language } = useLanguage();

  useLocalStorage({
    setter: setTheme as (state: State) => void,
    localStorageItemName: 'theme',
    state: theme,
  });

  const buttonLightThemeClassName =
    theme === 'light'
      ? 'button button-basic-light selected-item-light'
      : 'button button-basic-dark';

  const buttonDarkThemeClassName =
    theme === 'dark'
      ? 'button button-basic-dark selected-item-dark'
      : 'button button-basic-light';

  const pickThemeTitleContent = language === 'fr-FR' ? 'Thèmes' : 'Themes';

  const buttonLightContent = language === 'fr-FR' ? 'Clair' : 'Light';

  const buttonDarkContent = language === 'fr-FR' ? 'Sombre' : 'Dark';

  return (
    <div className="pick-theme-container">
      <div className="pick-theme-container-title">{pickThemeTitleContent}</div>
      <div className="all-themes-buttons">
        <button
          className={buttonLightThemeClassName}
          onClick={() => setTheme('light')}
        >
          {buttonLightContent}
        </button>
        <button
          className={buttonDarkThemeClassName}
          onClick={() => setTheme('dark')}
        >
          {buttonDarkContent}
        </button>
      </div>
    </div>
  );
};

export default PickLanguage;

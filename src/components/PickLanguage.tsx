import useLocalStorage, { State } from '../hooks/useLocalStorage';
import { useLanguage } from '../stores/useLanguage';
import { useTheme } from '../stores/useTheme';
import Button from './ui/Button';
import '../styles/components/pick-language.css';

const PickLanguage = () => {
  const { language, setLanguage } = useLanguage();
  const { theme } = useTheme();

  useLocalStorage({
    setter: setLanguage as (state: State) => void,
    localStorageItemName: 'language',
    state: language,
  });

  const buttonThemeClassName = (pickedLanguage: string) => {
    if (theme === 'light' && pickedLanguage === language) {
      return 'button button-basic-light selected-item-light';
    } else if (theme === 'dark' && pickedLanguage === language) {
      return 'button button-basic-dark selected-item-dark';
    } else if (theme === 'light' && pickedLanguage !== language) {
      return 'button button-basic-light';
    } else if (theme === 'dark' && pickedLanguage !== language) {
      return 'button button-basic-dark';
    } else {
      return '';
    }
  };

  const pickLanguageTitleContent =
    language === 'fr-FR' ? 'Langages' : 'Languages';

  return (
    <div className="pick-language-container">
      <div className="pick-language-container-title">
        {pickLanguageTitleContent}
      </div>
      <div className="all-languages-buttons">
        <Button
          className={buttonThemeClassName('fr-FR')}
          onClick={() => setLanguage('fr-FR')}
        >
          Français
        </Button>
        <Button
          className={buttonThemeClassName('en-US')}
          onClick={() => setLanguage('en-US')}
        >
          English
        </Button>
      </div>
    </div>
  );
};

export default PickLanguage;

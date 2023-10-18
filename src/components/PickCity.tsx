import useLocalStorage, { State } from '../hooks/useLocalStorage';
import { useTheme } from '../stores/useTheme';
import { useCity } from '../stores/useCity';
import { useLanguage } from '../stores/useLanguage';
import Button from './ui/Button';
import '../styles/components/pick-city.css';

const PickCity = () => {
  const { city, setCity } = useCity();
  const { theme } = useTheme();
  const { language } = useLanguage();

  useLocalStorage({
    setter: setCity as (state: State) => void,
    localStorageItemName: 'city',
    state: city,
  });

  const buttonThemeClassName = (pickedCity: string) => {
    if (theme === 'light' && pickedCity === city) {
      return 'button button-basic-light selected-item-light';
    } else if (theme === 'dark' && pickedCity === city) {
      return 'button button-basic-dark selected-item-dark';
    } else if (theme === 'light' && pickedCity !== city) {
      return 'button button-basic-light';
    } else if (theme === 'dark' && pickedCity !== city) {
      return 'button button-basic-dark';
    } else {
      return '';
    }
  };

  const pickCityTitleContent = language === 'fr-FR' ? 'Villes' : 'Cities';

  return (
    <div className="pick-city-container">
      <h1 className="pick-city-container-title">{pickCityTitleContent}</h1>
      <div className="all-cities-buttons">
        <Button
          className={buttonThemeClassName('America/New_York')}
          onClick={() => setCity('America/New_York')}
        >
          New York
        </Button>
        <Button
          className={buttonThemeClassName('America/Los_Angeles')}
          onClick={() => setCity('America/Los_Angeles')}
        >
          Los Angeles
        </Button>
        <Button
          className={buttonThemeClassName('Europe/Paris')}
          onClick={() => setCity('Europe/Paris')}
        >
          Paris
        </Button>
        <Button
          className={buttonThemeClassName('Asia/Dubai')}
          onClick={() => setCity('Asia/Dubai')}
        >
          Dubaï
        </Button>
        <Button
          className={buttonThemeClassName('Asia/Hong_Kong')}
          onClick={() => setCity('Asia/Hong_Kong')}
        >
          Hong Kong
        </Button>
        <Button
          className={buttonThemeClassName('Asia/Seoul')}
          onClick={() => setCity('Asia/Seoul')}
        >
          Seoul
        </Button>
      </div>
    </div>
  );
};

export default PickCity;

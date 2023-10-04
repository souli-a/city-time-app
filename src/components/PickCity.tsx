import useLocalStorage from '../hooks/useLocalStorage';
import { useTheme } from '../stores/useTheme';
import { useCity } from '../stores/useCity';
import '../styles/pick-city.css';

const PickCity = () => {
  const { city, setCity } = useCity();
  const { theme } = useTheme();

  useLocalStorage({
    setter: setCity,
    localStorageItemName: 'city',
    valueToSave: city,
  });

  const containerClassNameTheme =
    theme === 'light'
      ? 'pick-city-container container-light'
      : 'pick-city-container container-dark';

  const buttonClassNameTheme =
    theme === 'light' ? 'button-active-light' : 'button-active-dark';

  return (
    <div className={containerClassNameTheme}>
      <button
        className={city === 'America/New_York' ? buttonClassNameTheme : ''}
        onClick={() => setCity('America/New_York')}
      >
        new-york
      </button>
      <button
        className={city === 'America/Los_Angeles' ? buttonClassNameTheme : ''}
        onClick={() => setCity('America/Los_Angeles')}
      >
        los angeles
      </button>
      <button
        className={city === 'Europe/Paris' ? buttonClassNameTheme : ''}
        onClick={() => setCity('Europe/Paris')}
      >
        paris
      </button>
      <button
        className={city === 'Asia/Dubai' ? buttonClassNameTheme : ''}
        onClick={() => setCity('Asia/Dubai')}
      >
        dubaï
      </button>
      <button
        className={city === 'Asia/Hong_Kong' ? buttonClassNameTheme : ''}
        onClick={() => setCity('Asia/Hong_Kong')}
      >
        hong-kong
      </button>
      <button
        className={city === 'Asia/Seoul' ? buttonClassNameTheme : ''}
        onClick={() => setCity('Asia/Seoul')}
      >
        seoul
      </button>
    </div>
  );
};

export default PickCity;

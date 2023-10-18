import ShowTimeAndDate from '../components/ShowTimeAndDate';
import PickCity from '../components/PickCity';
import PickLanguage from '../components/PickLanguage';
import PickTheme from '../components/PickTheme';
import useDocumentTitle from '../hooks/useDocumentTitle';
import useTimeAndDate from '../stores/useTimeAndDate';
import { useTheme } from '../stores/useTheme';
import '../styles/pages/app.css';

const App = () => {
  const { time } = useTimeAndDate();
  const { theme } = useTheme();

  useDocumentTitle({
    title: time,
    dependencies: [time],
  });

  const containerClassNameTheme =
    theme === 'light'
      ? 'app-container app-container-light'
      : 'app-container app-container-dark';

  return (
    <div className={containerClassNameTheme}>
      <div className="app-container-content">
        <PickCity />
        <PickLanguage />
        <PickTheme />
        <ShowTimeAndDate />
      </div>
    </div>
  );
};

export default App;

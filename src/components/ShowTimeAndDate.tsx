import { useEffect } from 'react';
import { useCity } from '../stores/useCity';
import { useLanguage } from '../stores/useLanguage';
import { useTheme } from '../stores/useTheme';
import useTimeAndDate from '../stores/useTimeAndDate';
import getTimeAndDate from '../utils/getTimeAndDate';
import '../styles/components/show-time-and-date.css';

const ShowTimeAndDate = () => {
  const { date, time, day, setDate, setTime, setDay } = useTimeAndDate();
  const { city } = useCity();
  const { language } = useLanguage();
  const { theme } = useTheme();

  useEffect(() => {
    if (city && language) {
      const updateTimeAndDate = () => {
        setDate(getTimeAndDate(city, language).date);
        setTime(getTimeAndDate(city, language).time);
        setDay(getTimeAndDate(city, language).day);
      };

      updateTimeAndDate();

      const intervalId = setInterval(updateTimeAndDate, 1000);

      return () => clearInterval(intervalId);
    }
  }, [city, language]);

  const timeAndDateContentClassName =
    theme === 'light'
      ? 'time-and-date-content time-and-date-content-light'
      : 'time-and-date-content time-and-date-content-dark';

  const contentBeforeUserPick =
    !city && language === 'en-US'
      ? 'Pick a city.'
      : !city && language === 'fr-FR'
      ? 'Choisis une ville.'
      : '';

  const showTimeAndDateTitleContent =
    language === 'fr-FR' ? 'Horaire & Date' : 'Time & Date';

  return (
    <div className="time-and-date-container">
      <div className="time-and-date-title">{showTimeAndDateTitleContent}</div>
      <div className={timeAndDateContentClassName}>
        <h1 className="current-date-and-time">{contentBeforeUserPick}</h1>
        <h1 className="current-date-and-time">{date}</h1>
        <h1 className="current-date-and-time">
          {day && time ? `${day} ─ ${time}` : ''}
        </h1>
      </div>
    </div>
  );
};

export default ShowTimeAndDate;

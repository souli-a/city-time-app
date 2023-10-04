import { useEffect } from 'react';
import { useCity } from '../stores/useCity';
import { useLanguage } from '../stores/useLanguage';
import useTimeAndDate from '../stores/useTimeAndDate';
import getTimeAndDate from '../utils/getTimeAndDate';
import '../styles/show-time-and-date.css';

const ShowTimeAndDate = () => {
  const { date, time, day, setDate, setTime, setDay } = useTimeAndDate();
  const { city } = useCity();
  const { language } = useLanguage();

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

  return (
    <div className="time-and-date-container">
      <h1 className="current-date-and-time">
        {!language || (!city && language === 'en-US')
          ? 'pick a city, a language and a theme.'
          : !language || (!city && language === 'fr-FR')
          ? 'choisis une ville, un langage et un thème.'
          : ''}
      </h1>
      <h1 className="current-date-and-time">{day ? day : ''}</h1>
      <h1 className="current-date-and-time">{date ? date : ''}</h1>
      <h1 className="current-date-and-time">{time ? time : ''}</h1>
    </div>
  );
};

export default ShowTimeAndDate;

function getTimeAndDate(city: string, language: string) {
  const dateOptions: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
    timeZone: city,
  };

  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    minute: 'numeric',
    timeZone: city,
  };

  const dayOptions: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    timeZone: city,
  };

  const currentDate = new Date();

  const date = currentDate.toLocaleDateString(language, dateOptions);
  const time = currentDate.toLocaleTimeString(language, timeOptions);
  const day = currentDate.toLocaleDateString(language, dayOptions);

  const timeAndDate = {
    date,
    time,
    day,
  };

  return timeAndDate;
}

export default getTimeAndDate;

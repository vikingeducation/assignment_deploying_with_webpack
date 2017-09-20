import React from 'react';
import WeatherCard from './WeatherCard';

const WeatherCardList = ({weather}) => {
  const cards = weather.consolidated_weather.map((day, i) => {
    return (
      <WeatherCard
        key={i}
        abbr={day.weather_state_abbr}
        date={day.applicable_date}
        temp={day.the_temp}
      />
    );
  });

  return (
    <div>
      <h1>{weather.title}</h1>
      {cards}
    </div>
  );
};

export default WeatherCardList;

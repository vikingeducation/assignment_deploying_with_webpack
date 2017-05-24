import React from "react";
import Spinner from "./Spinner";
import Weather from "./Weather";

const weatherList = (weatherDays) => {
	return weatherDays.map((day) => {
		return <Weather weather={day} /> 
	})
}


const Example = ({ weatherDays, isFetching, city }) => {
  if (isFetching) {
    return <Spinner />;
  }

  return (
    <div>
    	<h1>Weather for {city}</h1>
    	{weatherList(weatherDays)}
    </div>
  );
};

export default Example;
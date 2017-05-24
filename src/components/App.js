import React, { Component } from "react";
import fetch from "isomorphic-fetch";
import WeatherCard from "./WeatherCard";

class App extends Component {
  constructor() {
    super();
    this.state = { weatherData: {} };
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      fetch(
        `https://www.metaweather.com/api/location/search/?lattlong=${position.coords.latitude},${position.coords.longitude}`
      )
        .then(response => {
          if (response.status >= 400) {
            throw new Error(`Bad Response: ${response.status}`);
          }
          return response.json();
        })
        .then(json => {
          return fetch(
            `https://www.metaweather.com/api/location/${json[0].woeid}`
          );
        })
        .then(response => {
          if (response.status >= 400) {
            throw new Error(`Bad Response: ${response.status}`);
          }
          return response.json();
        })
        .then(json => {
          this.setState(
            {
              weatherData: json
            },
            () => {
              console.log(this.state.weatherData);
            }
          );
        });
    });
  }

  render() {
    return;
    {
      this.state.weatherData.title
        ? <WeatherCard
            title={this.state.weatherData.title}
            abbr={
              this.state.weatherData.consolidated_weather[0].weather_state_abbr
            }
            date={
              this.state.weatherData.consolidated_weather[0].applicable_date
            }
            temp={this.state.weatherData.consolidated_weather[0].the_temp}
          />
        : null;
    }
  }
}

export default App;

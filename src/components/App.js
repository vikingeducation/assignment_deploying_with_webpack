import React, {Component} from 'react';
import fetch from 'isomorphic-fetch';
import WeatherCard from './WeatherCard';
import InputGroup from './InputGroup';
class App extends Component {
  constructor() {
    super();
    this.state = {weatherData: {}, location: ''};
  }
  componentDidMount() {
    if (!this.state.location) {
      this.fetchByGeo();
    } else {
      this.fetchByLocation(this.state.location);
    }
  }

  onKeyUpHandler(e) {
    e.preventDefault();
    if (e.key === 'Enter') {
      this.setState({
        location: e.target.value,
        weatherData: {},
      });
    }
  }

  fetchByGeo() {
    navigator.geolocation.getCurrentPosition(position => {
      fetch(
        `https://www.metaweather.com/api/location/search/?lattlong=${position.coords.latitude},${position.coords.longitude}`,
      )
        .then(response => {
          if (response.status >= 400) {
            throw new Error(`Bad Response: ${response.status}`);
          }
          return response.json();
        })
        .then(json => {
          return fetch(
            `https://www.metaweather.com/api/location/${json[0].woeid}`,
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
              weatherData: json,
            },
            () => {
              console.log(this.state.weatherData);
            },
          );
        });
    });
  }

  fetchByLocation(location) {
    fetch(
      `https://www.metaweather.com/api/location/search/?query=${e.target.value}`,
    )
      .then(response => {
        if (response.status >= 400) {
          throw new Error(`Bad Response: ${response.status}`);
        }
        return response.json();
      })
      .then(json => {
        return fetch(
          `https://www.metaweather.com/api/location/${json[0].woeid}`,
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
            weatherData: json,
          },
          () => {
            console.log(this.state.weatherData);
          },
        );
      });
  }
  render() {
    if (this.state.weatherData.title) {
      return (
        <div>
          <InputGroup onKeyUpHandler={this.onKeyUpHandler} />
          <WeatherCard
            title={this.state.weatherData.title}
            abbr={
              this.state.weatherData.consolidated_weather[0].weather_state_abbr
            }
            date={
              this.state.weatherData.consolidated_weather[0].applicable_date
            }
            temp={this.state.weatherData.consolidated_weather[0].the_temp}
          />
        </div>
      );
    } else {
      return null;
    }
  }
}

export default App;

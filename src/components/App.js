import React, {Component} from 'react';
import fetch from 'isomorphic-fetch';
import WeatherCardList from './WeatherCardList';
import SearchInput from './SearchInput';
class App extends Component {
  constructor() {
    super();
    this.state = {weatherData: {}};
    this.onKeyUpHandler = this.onKeyUpHandler.bind(this);
  }

  componentDidMount() {
    console.log(this.state);

    this.fetchByGeo();
  }
  // componentWillReceiveProps(newProps) {
  //   console.log(newProps);
  //   if (newProps.location !== this.props.location) {
  //     this.fetchByLocation(newProps.location);
  //   }
  // }

  onKeyUpHandler(e) {
    if (e.key === 'Enter') {
      this.fetchByLocation(e.currentTarget.value);
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
    fetch(`https://www.metaweather.com/api/location/search/?query=${location}`)
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
          <SearchInput onKeyHandler={this.onKeyUpHandler} />
          <WeatherCardList weather={this.state.weatherData} />
        </div>
      );
    } else {
      return null;
    }
  }
}

export default App;

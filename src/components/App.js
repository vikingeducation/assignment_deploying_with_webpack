import React, {Component} from 'react';
import fetch from 'isomorphic-fetch';

class App extends Component {
  constructor() {
    super();
    this.state = {weatherData: {}};
  }
  componentDidMount() {
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

  render() {
    return <h1>Hello</h1>;
  }
}

export default App;

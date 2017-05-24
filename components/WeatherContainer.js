import React, { Component } from "react";
import Weather from './Weather';


function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

class WeatherContainer extends Component {
  constructor() {
    super();
    this.state = {
      isFetching: false,
      weather: []
    }

    this.success = this.success.bind(this);
  }

  success(pos) {
    var crd = pos.coords;

    let latt = crd.latitude;
    let long = crd.longitude;
    this.setState({
      isFetching: true
    })
    fetch(
      `https://www.metaweather.com/api/location/search/?lattlong=${latt},${long}`
    )
      .then(response => response.json())
      .then(json => {
        let woeid = json[0].woeid;
        return fetch(
          `https://www.metaweather.com/api/location/${woeid}/`
        )
      })
      .then(response => response.json())
      .then(json => {
        console.log("second api call response: ", json)
        this.setState({
          isFetching: false,
          weather: json.consolidated_weather[0]
        })
      });

  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.success, error);
  }

  render() {
    return <Weather weather={this.state.weather} />;
  }
}

export default WeatherContainer;

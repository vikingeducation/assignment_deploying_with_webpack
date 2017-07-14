import React, { Component } from 'react';
import App from '../components/App';
const BASE_URL = "https://www.metaweather.com/api/location/";

class AppContainer extends Component{
  constructor() {
    super()
    this.state = {
      city: "San Francisco",
      forecast: "",
      isFetching: false,
      error: null
    };
  }

  componentDidMount() {
    this.setState({
      isFetching: true
    });
    const searchURL = `${BASE_URL}/search/?query=${this.state.city}`;
    let cityId;
    fetch(searchURL)
    .then(response => response.json())
    .then(data => {
      cityId = data[0].woeid;
      if (!cityId) {
        throw new Error("City not found");
      }
      let weatherUrl = `${BASE_URL}/${cityId}`;
      return fetch(weatherUrl);
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      this.setState({
        isFetching: false,
        error
      })
    });

  }

  render() {
    return (
      <App />
    );
  }
}

export default AppContainer;
import React, { Component } from 'react';
import App from '../components/App';
const BASE_URL = "http://localhost:3001";

class AppContainer extends Component{
  constructor() {
    super()
    this.state = {
      city: "San Francisco",
      forecast: {},
      isFetching: false,
      error: null
    };
  }

  componentDidMount() {
    let geo = new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition((success, error) => {
        resolve(success);
        reject(error);
      });
    });

    this.setState({
      isFetching: true
    });
    let cityId;

    geo
      .then(data => {
        return fetch(`${BASE_URL}/api/search?coords=${data.coords.latitude},${data.coords.longitude}`)
        })
      .then(response => response.json())
      .then(data => {
        this.setState({
          isFetching: false,
          forecast: data
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({
          isFetching: false,
          error
        });
      });
  }

  render() {
    return (
      <App 
        forecast={this.state.forecast}
        isFetching={this.state.isFetching}
      />
    );
  }
}

export default AppContainer;
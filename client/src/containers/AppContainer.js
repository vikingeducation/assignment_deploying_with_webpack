import React, { Component } from 'react';
import App from '../components/App';
import serialize from "form-serialize";
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
    this.onSubmit = this.onSubmit.bind(this);
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
        if (data.error) {
          throw new Error("City could not be found");
        }
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

  onSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const location = serialize(form, { hash: true }).location;

    this.setState({
      isFetching: true,
      error: null
    });

    fetch(`${BASE_URL}/api/search?query=${location}`)
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          throw new Error("City could not be found");
        }
        this.setState({
          isFetching: false,
          forecast: data
        });
      })
      .catch(error => {
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
        onSubmit={this.onSubmit}
        error={this.state.error}
      />
    );
  }
}

export default AppContainer;
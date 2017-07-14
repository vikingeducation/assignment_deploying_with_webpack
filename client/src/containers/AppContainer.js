import React, { Component } from 'react';
import App from '../components/App';
const BASE_URL = "http://localhost:3001";

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
    let cityId;
    fetch(`api/search?query=${this.state.city}`)
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
      />
    );
  }
}

export default AppContainer;
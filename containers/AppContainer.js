import React, { Component } from "react";
import App from "../components/App";

import geo from "../lib/geoloation";

// const BASE = "https://www.metaweather.com/api";
// const SEARCH = "location/search";
// const LOCATION_URL = "location";
//
// const OPTS = { mode: "no-cors" };
//
// const buildQuery = query => `query=${query}`;
// const buildLocation = (lat, long) => `lattlong=${lat},${long}`;

class AppContainer extends Component {
  constructor() {
    super();
    this.state = {
      coordinates: {
        lat: 44.2705835,
        long: -71.3207819
      },
      locations: {}
    };
  }

  async fetchCoords() {
    try {
      const { lat, long } = this.state.coordinates;
      const response = await fetch(
        `http://localhost:3001/coordinates?lat=${lat}&long=${long}`
      );
      if (response.status !== 200) {
        throw new Error(response.status);
      } else {
        const json = await response.json();
        this.setState({ locations: json });
        console.log(json);
      }
    } catch (error) {
      console.log(error.stack);
    }
  }

  async componentDidMount() {
    try {
      let [lat, long] = await geo();
      await this.setState({ coordinates: { lat, long } });
    } catch (error) {
      console.log(error.message);
    }
    this.fetchCoords();
  }
  render() {
    return <App {...this.state} />;
  }
}

export default AppContainer;

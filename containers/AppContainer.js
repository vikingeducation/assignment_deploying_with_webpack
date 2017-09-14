import React, { Component } from "react";
import App from "../components/App";

import geo from "../lib/geoloation";

class AppContainer extends Component {
  constructor() {
    super();
    this.state = {
      coordinates: {
        lat: 44.2705835,
        long: -71.3207819
      }
    };
  }
  componentDidMount() {
    geo()
      .then(([lat, long]) => this.setState({ coordinates: { lat, long } }))
      .catch(e => console.log(e));
  }
  render() {
    return <App {...this.state.coordinates} />;
  }
}

export default AppContainer;

import React, { Component } from "react";

function success(pos) {
  var crd = pos.coords;

  let latt = crd.latitude;
  let long = crd.longitude;
  fetch(
    `https://www.metaweather.com/api/location/search/?lattlong=${latt},${long}`
  )
    .then(response => response.json())
    .then(json => {
      console.log("this is the json response", json);
      return json;
    });
  console.log("Your current position is:");
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

class Weather extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(success, error);
  }

  render() {
    return <div className="weather" />;
  }
}

export default Weather;

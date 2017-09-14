import React, { Component } from "react";
import axios from "axios";

export default class App extends Component {
  constructor() {
    super();
    getLocation();
    navigator.geolocation.getCurrentPosition(position => {
      console.log(
        "lat and long = ",
        position.coords.latitude,
        position.coords.longitude
      );
    });
  }

  render() {
    getLocation;
    return <div>hello react</div>;
  }
}
//
// const getLocation = async () => {
//   let done = navigator.geolocation.getCurrentPosition(position);
//   console.log(
//     "lat and long = ",
//     position.coords.latitude,
//     position.coords.longitude
//   );
//   return [position.coords.latitude, position.coords.longitude];
//   // navigator.geolocation.getCurrentPosition(position => {
//   //   console.log(
//   //     "lat and long = ",
//   //     position.coords.latitude,
//   //     position.coords.longitude
//   //   );
//   // });
// };

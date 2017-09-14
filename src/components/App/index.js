import React, { Component } from "react";
import axios from "axios";

export default class App extends Component {
  constructor() {
    super();
    // getLocation();
    
  }

  componentDidMount() {
    const success = function(position) {
       console.log('hello');
      console.log(position, 'wtf is this???');
      console.log(
        "lat and long = ",
        position.coords.latitude,
        position.coords.longitude
      )
    }

    const failure = function(error) {
      console.error(error);
    }

    navigator.geolocation.getCurrentPosition(success, failure);
 

  }

  render() {

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

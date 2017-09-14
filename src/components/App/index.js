import React, { Component } from "react";
import axios from "axios";

var triggerGeolocationRequest = function() {
  var options = {
    enableHighAccuracy: true,
    maximumAge: 1000
  };

  var result;

  const failure = function(error) {
    console.error(error);
  };

  window.navigator.geolocation.getCurrentPosition(
    function(position) {
      var result = {
        type: "success",
        data: { lat: position.coords.latitude, lng: position.coords.longitude }
      };

      console.log("result ", result);
    },
    failure,
    options
  );
};

export default class App extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    triggerGeolocationRequest();
    const success = function(position) {
      console.log("hello");
      console.log(position, "wtf is this???");
      console.log(
        "lat and long = ",
        position.coords.latitude,
        position.coords.longitude
      );
    };

    const failure = function(error) {
      console.error(error);
    };

    // navigator.geolocation.getCurrentPosition(success, failure);
  }

  render() {
    return <div>hello react</div>;
  }
}

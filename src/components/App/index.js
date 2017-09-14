import React, { Component } from "react";
import axios from "axios";
import fetch from "isomorphic-fetch";
import bluebird from "bluebird";
bluebird.promisifyAll(navigator.geolocation.getCurrentPosition);

var triggerGeolocationRequest = async () => {
  var options = {
    enableHighAccuracy: true,
    maximumAge: 1000
  };

  var result;

  const failure = function(error) {
    console.error(error);
    return error;
  };
  let location = await window.navigator.geolocation.getCurrentPosition(
    function(position) {
      var result = {
        type: "success",
        data: { lat: position.coords.latitude, lng: position.coords.longitude }
      };

      console.log("result ", result);
      return result;
    },
    failure,
    options
  );
};

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      location: {
        long: null,
        lat: null
      }
    };
  }

  componentDidMount() {
    // let result = triggerGeolocationRequest();
    // console.log("result ", result);
    const self = this;
    var options = {
      enableHighAccuracy: true,
      maximumAge: 1000
    };

    var result;

    const failure = function(error) {
      console.error(error);
      return error;
    };
    fetch("/")
      .then(response => {
        // console.log("response = ", response);
        // let parsed = JSON.parse(response);
        // console.log("parsed = ", parsed);
        return response.json();
      })
      .then(data => {
        console.log("returned data = ", data);
        // return res.json(data);
        return data;
      })
      .catch(e => console.error(e));
    // window.navigator.geolocation.getCurrentPosition(
    //   function(position) {
    //     var result = {
    //       type: "success",
    //       data: {
    //         lat: position.coords.latitude,
    //         lng: position.coords.longitude
    //       }
    //     };
    //     fetch(
    //       "https://www.metaweather.com/api/location/search/?lattlong=39.7191336,-91.41089799999999",
    //       { mode: "no-cors" }
    //     )
    //       .then(response => {
    //         console.log("response = ", response);
    //         response.json();
    //       })
    //       .then(data => {
    //         console.log("returned data = ", data);
    //         // return res.json(data);
    //       })
    //       .catch(e => console.error(e));
    //     console.log("result ", result);
    //     return result;
    //   },
    //   failure,
    //   options
    // );

    // navigator.geolocation.getCurrentPosition(success, failure);
  }

  render() {
    return <div>hello react</div>;
  }
}

require("es6-promise").polyfill;
require("isomorphic-fetch");
const express = require('express');
const path = require('path');
const compression = require('compression');

const port = process.env.PORT || 3001;
const app = express();

app.use(compression());

app.set("port", process.env.PORT || 3001);

// For later when we deploy to production, use the static
// assets built in the client/build folder instead of
// hosted at localhost:3000
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Extract checking the status of the response for reuse
const checkStatus = response => {
  // If response not okay, throw an error
  if (!response.ok) {
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  }

  // Otherwise just return the response
  return response;
};

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const BASE_URL = "https://www.metaweather.com/api/location";

app.get("/api/search", (req, res, next) => {
  console.log("Requesting search data from MetaWeather...");
  const query = req.query.query || "";
  const coords = req.query.coords || "";
  const searchURL = `${BASE_URL}/search/?query=${query}&lattlong=${coords}`;
  let cityId;
  fetch(searchURL)
    .then(response => response.json())
    .then(data => {
      cityId = data[0].woeid;
      if (!cityId) {
        throw new Error("City not found");
      }
      let weatherUrl = `${BASE_URL}/${cityId}`;
      return fetch(weatherUrl);
    })
    .then(response => response.json())
    .then(data => {
      res.json(data.consolidated_weather[0]);
    })
    .catch(error => {
      next(error);
    });
});


// Defines next action for errors
const errorHandler = (err, req, res, next) => {
  console.error(`Error: ${err.stack}`);
  res.status(err.response ? err.response.status : 500);
  res.json({ error: err.message });
};

// Tell the app to use the errorHandler middleware
app.use(errorHandler);

app.listen(app.get("port"), () => {
  console.log(`Find the server at http://localhost:${app.get("port")}/`);
});

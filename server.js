const fetch = require("isomorphic-fetch");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  fetch(
    "https://www.metaweather.com/api/location/search/?lattlong=39.7191336,-91.41089799999999",
    { mode: "no-cors" }
  )
    .then(response => response.json())
    .then(data => {
      console.log(data);
      return res.json(data);
    });
});

app.listen(3001);

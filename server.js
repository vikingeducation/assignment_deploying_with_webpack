const fetch = require("isomorphic-fetch");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  fetch(
    "https://www.metaweather.com/api/location/search/?lattlong=41.4532007,-85.7564007",
    { mode: "no-cors" }
  )
    .then(response => response.json())
    .then(data => {
      console.log(data);
      return res.json(data);
    });
});

app.listen(3001);

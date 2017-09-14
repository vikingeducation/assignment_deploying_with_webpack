const fetch = require("isomorphic-fetch");
const express = require("express");
const app = express();
const cors = require("cors");

const BASE = "https://www.metaweather.com/api";
const SEARCH = "location/search";
const LOCATION_URL = "location";
const OPTS = { mode: "no-cors" };
const buildQuery = query => `query=${query}`;
const buildLocation = (lat, long) => `lattlong=${lat},${long}`;

// Log Request Info
const morgan = require("morgan");
const morganToolkit = require("morgan-toolkit")(morgan);
app.use(morganToolkit());

app.use(cors());

app.get("/coordinates", async (req, res) => {
  const { lat, long } = req.query;
  const url = `${BASE}/${SEARCH}?${buildLocation(lat, long)}`;
  try {
    const response = await fetch(url, OPTS);
    const json = await response.json();
    console.log(json);
    res.json(json);
  } catch (err) {
    console.log(err);
    res.json({ error: err.message });
  }
});

app.listen(3001);

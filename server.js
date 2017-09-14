const express = require("express");
const app = express();
require('es6-promise').polyfill()
require('isomorphic-fetch')
const cors = require('cors')

const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

const BASE_URL = 'https://www.metaweather.com/api/';
const SEARCH_URL = 'location/search/';
const LOCATION_URL = 'location/';
// const LATTLONG_QUERY = `?lattlong=${this.state.latitude},${this.state.longitude}`
const SEARCH_QUERY = '?query=bucharest';

function checkStatus(response) {
  if (!response.ok) {
    const error = new Error(response.statusText)
    error.response = response
    throw error
  }
  return response
}

// routes
app.get('/:query', (req, res ,next) => {
  fetch(BASE_URL + SEARCH_URL + `?query=` + req.params.query, {
    mode: 'no-cors'
  })
  .then(checkStatus)
  .then(resp=>resp.json())
  .then(json=>{
    res.json(json)
  })
  .catch(e=>{next(e)})
})

function errorHandler (err, req, res, next) {
  console.error('Error: ', err.stack)
  res.status(err.response ? err.response.status : 500)
  res.json({ error: err.message })
}

app.use(errorHandler)

app.set('port', (process.env.PORT || 3001));

// When in production, only serve static assets
// from the client/build folder
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// Server 
app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`)
})
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "elemental";

const Location = ({ distance, latt_long, title, woeid }) => <p>{title}</p>;

const App = ({ coordinates, locations }) => (
  <Router>
    <Container>
      <h1 className="greet">Hello, there!</h1>
      <h2>Selected Coordinates</h2>
      <p>Latitude: {coordinates.lat}</p>
      <p>Longitude: {coordinates.long}</p>

      {locations.length &&
        locations.map(location => (
          <Location key={location.woeid} {...location} />
        ))}
    </Container>
  </Router>
);

export default App;

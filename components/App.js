import React from "react";
import { Container } from "elemental";

const App = ({ coordinates, locations }) => (
  <Container>
    <h1 className="greet">Hello, there!</h1>
    <p>lat: {coordinates.lat}</p>
    <p>long: {coordinates.long}</p>
  </Container>
);

export default App;

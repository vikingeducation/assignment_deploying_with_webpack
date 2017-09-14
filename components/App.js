import React from "react";
import { Container } from "elemental";

const App = ({ lat, long }) => (
  <Container>
    <h1 className="greet">Hello, there!</h1>
    <p>lat: {lat}</p>
    <p>long: {long}</p>
  </Container>
);

export default App;

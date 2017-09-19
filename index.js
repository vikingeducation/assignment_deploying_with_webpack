import React from "react";
import ReactDOM from "react-dom";

const Greeting = ({ name }) =>
  <p className="greet">
    Hello, {name}!
  </p>;

ReactDOM.render(<Greeting name="Reign" />, document.getElementById("root"));

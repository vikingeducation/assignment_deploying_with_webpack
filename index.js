import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Greeting = ({ name }) => <p className="greet">Hello, {name}!</p>;

ReactDOM.render(<Greeting name="Greg" />, document.getElementById("root"));

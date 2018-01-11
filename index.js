import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
const imgSrc = require("./image.jpg");

const Greeting = ({name}) => <p className="greet">Hello, {name}!</p>;

ReactDOM.render(<Greeting name="Reign" />, document.getElementById("root"));

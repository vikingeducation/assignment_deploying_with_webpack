import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBlock,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import Spinner from "./Spinner";

const Example = ({ weather, city }) => {
  let { weather_state_abbr } = weather;
  let iconPath = `https://www.metaweather.com/static/img/weather/${weather_state_abbr}.svg`;


  return (
    <div>
      <h3>{weather.applicable_date}</h3>
      <Card style={{ maxWidth: "300px" }}>
        <CardImg top width="100%" src={iconPath} alt="Weather icon" />
        <CardBlock>
          <CardTitle>{weather.weather_state_name}</CardTitle>
          <CardSubtitle>High: {weather.max_temp}</CardSubtitle>
          <br />
          <CardSubtitle>Low: {weather.min_temp}</CardSubtitle>
        </CardBlock>
      </Card>
    </div>
  );
};

export default Example;

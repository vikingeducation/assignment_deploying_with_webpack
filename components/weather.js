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

const Example = ({ weather, isFetching, city }) => {
  let { weather_state_abbr } = weather;
  let iconPath = `https://www.metaweather.com/static/img/weather/${weather_state_abbr}.svg`;

  if (isFetching) {
    return <Spinner />;
  }

  return (
    <div>
      <h1>{city}</h1>
      <Card style={{ maxWidth: "300px" }}>
        <CardImg top width="100%" src={iconPath} alt="Weather icon" />
        <CardBlock>
          <CardTitle>{weather.weather_state_name}</CardTitle>
          <CardSubtitle>High: {weather.max_temp}</CardSubtitle>
          <br />
          <CardSubtitle>Low: {weather.min_temp}</CardSubtitle>
          <CardText />
          <Button>Button</Button>
        </CardBlock>
      </Card>
    </div>
  );
};

export default Example;

import React from "react";
import {
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBlock,
  CardTitle,
  CardText,
  CardImg
} from "reactstrap";

const WeatherCard = props => {
  const { title, abbr, date, temp } = props;
  return (
    <div>
      <Card>
        <CardHeader>{title}</CardHeader>
        <CardImg
          top
          width="100%"
          src={`https://www.metaweather.com/static/img/weather/${abbr}.svg`}
          alt="Weather Icon"
        />
        <CardBlock>
          <CardTitle>{date}</CardTitle>
          <CardText>
            {temp}
          </CardText>
        </CardBlock>
      </Card>

    </div>
  );
};

export default WeatherCard;

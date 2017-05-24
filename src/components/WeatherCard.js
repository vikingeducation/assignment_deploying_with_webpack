import React from 'react';
import {
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBlock,
  CardTitle,
  CardText,
  CardImg,
} from 'reactstrap';

const WeatherCard = props => {
  const {title, abbr, date, temp} = props;
  return (
    <div>
      <Card block className="text-center" style={{width: '200px'}}>
        <CardHeader>{title}</CardHeader>
        <CardImg
          width="50%"
          style={{display: 'block', margin: 'auto', paddingTop: '10px'}}
          src={`https://www.metaweather.com/static/img/weather/${abbr}.svg`}
          alt="Weather Icon"
        />
        <CardBlock>
          <CardText>{date}</CardText>
          <CardTitle>
            {Math.round(temp * 100) / 100 + ' C'}
          </CardTitle>
        </CardBlock>
      </Card>

    </div>
  );
};

export default WeatherCard;

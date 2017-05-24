import React from 'react';
import { Card, CardImg, CardText, CardBlock,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const Example = ({weather}) => {
	let { weather_state_abbr } = weather;
	let iconPath = `https://www.metaweather.com/static/img/weather/${weather_state_abbr}.svg`;

  return (
    <div>
      <Card style={{maxWidth: "300px"}}>
        <CardImg top width="100%" src={iconPath} alt="Weather icon" />
        <CardBlock>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBlock>
      </Card>
    </div>
  );
};

export default Example;
import React from 'react';
import {Grid, Row, Col, Panel, FormControl, Button} from 'react-bootstrap';

const createForecast = forecast => {
  return (
    <Panel>
      <h3>{forecast.weather_state_name}</h3>
      <h5>Wind Direction:{forecast.wind_direction_compass}</h5>
      <h5>Date: {forecast.applicable_date}</h5>
      <h5>Hi: {forecast.max_temp}</h5>
      <h5>Lo: {forecast.min_temp}</h5>
      <h5>Currently: {forecast.the_temp}</h5>
      <h5>Wind Speed: {forecast.wind_speed}</h5>
      <h5>Wind Direction {forecast.wind_direction}</h5>
      <h5>Air Pressure: {forecast.air_pressure}</h5>
      <h5>Humidity: {forecast.humidity}</h5>
      <h5>Visibility: {forecast.visibility}</h5>
    </Panel>
  )
};

const App = ({forecast, isFetching}) => {
  let forecastView = <div />;
  if (!isFetching) {
    forecastView = createForecast(forecast);
  }

  return (
    <Grid>
      <Row>
        <h1>Weather Forecast</h1>
        <Col md={6} mdOffset={3}>
        {isFetching ?
          <span>Loading...</span> :
          forecastView
        }
        </Col>
        <Col md={3}>
          <form>
            <FormControl placeholder="Search" name="location"/>
            <Button type="submit" bsStyle="success">Look Up Weather</Button>
          </form>
        </Col>
      </Row>
    </Grid>
  );
};

export default App;
/*
*/
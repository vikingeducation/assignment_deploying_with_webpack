import React from 'react'
import Day from './Day'
import { Row, Col } from 'reactstrap'

const Forecast = ({ isFetching, forecast, today }) => {

  if (isFetching) {
    return <p>Loading...</p>
  }

  let cards = forecast.map((weather) => {
    const { id, ...rest } = weather
    return (<Col xs="12" sm="6" md="4" key={id}>
<Day key={ id } {...rest } today={today}/></Col>)
  })

  return (
    <Row>
   {cards}
   </Row>
  )
}

export default Forecast

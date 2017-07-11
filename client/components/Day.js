import React from 'react'
import { Card, CardTitle, CardBlock } from 'reactstrap'
import { formatDate, formatDay } from '../helpers'

const Day = (props) => {
  const { today } = props

  const day = formatDate(props.applicable_date) === today ? 'Today' : formatDay(props.applicable_date)

  const url = 'http://metaweather.com/static/img/weather/'

  return (
    <div className="weather">
     <h2 className="weather-title">{day}</h2>
      <div className="weather-meta float-right text-muted">
      {formatDate(props.applicable_date)}
      </div>

        <div className="weather-icon">
          <img src={`${url}${props.weather_state_abbr}.svg`} className="weather-icon"/>
        </div>
      <h4 className="weather-description text-muted">{props.weather_state_name}</h4>
        <p className="weather-temp">{props.the_temp.toFixed(0)}ºC</p>
        <p className="text-center mb-4 mt-2">
        H {props.max_temp.toFixed(0)}ºC<br/> L {props.min_temp.toFixed(0)}ºC
        </p>
      <div className="row">
        <div className="col">Wind Speed</div>
        <div className="col text-right">{props.wind_speed.toFixed(1)} mph</div>
      </div>
       <div className="row">
        <div className="col">Wind Direction</div>
        <div className="col text-right">{props.wind_direction_compass}</div>
      </div>
       <div className="row">
        <div className="col">Humidity</div>
        <div className="col text-right">{props.humidity.toFixed(1)}%</div>
      </div>
       <div className="row">
        <div className="col">Predictability</div>
        <div className="col text-right">{props.predictability.toFixed(0)}%</div>
      </div>
    </div>
  )
}

export default Day

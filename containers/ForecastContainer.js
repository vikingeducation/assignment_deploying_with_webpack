import { connect } from 'react-redux'
import React, { Component } from 'react'
import Forecast from '../components/Forecast'
import { setLocation, setIsFetching, fetchWeather } from '../actions'

const mapStateToProps = (state) => {
  return {
    isFetching: state.weather.isFetching,
    forecast: state.weather.forecast,
    today: state.weather.today
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchWeather: () => {
      dispatch(fetchWeather())
    },
    setLocation: (location) => {
      dispatch(setLocation(location))
    }
  }
}



export default connect(mapStateToProps,
  mapDispatchToProps)(Forecast)

import * as Actions from './actions'
import { combineReducers } from 'redux'

function weather(state = {}, action) {
  switch (action.type) {
    case Actions.GET_WEATHER_REQUEST:
      return {
        ...state,
        isFetching: true,
      }
    case Actions.SEARCH_REQUEST:
      return {
        ...state,
        forecast: null,
        isFetching: true
      }
    case Actions.GET_WEATHER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        forecast: action.data
      }
    case Actions.SET_FORECAST_LOADING:
      return {
        ...state,
        forecast: action.data
      }
    default:
      return state
  }
}

function search(state = {}, action) {
  switch (action.type) {
    case Actions.SEARCH_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case Actions.SEARCH_SUCCESS:
      return {
        ...state,
        results: action.data,
        isFetching: false
      }
    default:
      return state
  }
}

function location(state = {}, action) {
  switch (action.type) {
    case Actions.SET_LOCATION:
      return {
        ...state,
        location: action.data,
      }
    case Actions.WOEID_REQUEST:
      return {
        ...state,
        isFetching: true,
      }
    case Actions.WOEID_SUCCESS:
      return {
        ...state,
        isFetching: false,
        ...action.data
      }
    case Actions.NO_GEOLOCATION:
      return {
        ...state,
        geolocation: false
      }
    default:
      return state
  }
}


const weatherForecast = combineReducers({
  weather,
  search,
  location,
})

export default weatherForecast

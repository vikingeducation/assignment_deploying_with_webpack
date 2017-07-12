export const GET_WEATHER_REQUEST = 'GET_WEATHER_REQUEST'
export const GET_WEATHER_SUCCESS = 'GET_WEATHER_SUCCESS'
export const GET_WEATHER_FAILURE = 'GET_WEATHER_FAILURE'
export const SET_LOCATION = 'SET_LOCATION'
export const SEARCH_REQUEST = 'SEARCH_REQUEST'
export const SEARCH_FAILURE = 'SEARCH_FAILURE'
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS'
export const WOEID_REQUEST = 'WOEID_REQUEST'
export const WOEID_SUCCESS = 'WOEID_SUCCESS'
export const SET_FORECAST_LOADING = 'SET_FORECAST_LOADING'
export const NO_GEOLOCATION = 'NO_GEOLOCATION'

export function getWeatherRequest(data) {
  return {
    type: GET_WEATHER_REQUEST,
    data
  }
}

export function getWeatherSuccess(data) {
  return {
    type: GET_WEATHER_SUCCESS,
    data
  }
}

export function getWeatherFailure(data) {
  return {
    type: GET_WEATHER_FAILURE,
    data
  }
}

export function setLocation(data) {
  return {
    type: SET_LOCATION,
    data
  }
}

export function setForecastLoading(data) {
  return {
    type: SET_FORECAST_LOADING,
    data
  }
}

export function searchRequest(data) {
  return {
    type: SEARCH_REQUEST,
    data
  }
}
export function searchFailure(data) {
  return {
    type: SEARCH_FAILURE,
    data
  }
}

export function searchSuccess(data) {
  return {
    type: SEARCH_SUCCESS,
    data
  }
}

export function woeidRequest() {
  return {
    type: WOEID_REQUEST,
  }
}

export function woeidSuccess(data) {
  return {
    type: WOEID_SUCCESS,
    data
  }
}

export function noGeolocation() {
  return {
    type: NO_GEOLOCATION
  }
}

const baseURL = 'https://secret-spire-88426.herokuapp.com/api'

export function fetchWOEID(location) {
  return (dispatch) => {
    dispatch(woeidRequest())
    fetch(`${baseURL}/lattlong/${location.x},${location.y}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Something went wrong', response)
        }
        return response.json()
      })
      .then(json => {
        if (json.length > 0) {
          dispatch(woeidSuccess({
            woeid: json[0].woeid,
            name: json[0].title
          }))
          return dispatch(fetchWeather(json[0].woeid))
        }
        dispatch(woeidSuccess({
          woeid: woeid,
          name: name
        }))
      })
      .catch(error => {
        console.log('WOEID error', error)
      })
  }
}

export function searchForLocation(location) {
  return (dispatch) => {
    dispatch(searchRequest())

    fetch(`${baseURL}/search/${location}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('No results')
        }
        return response.json()
      })
      .then(json => {
        dispatch(searchSuccess(json))
      })
      .catch(error => {
        console.log('Search Failure')
      })
  }
}


export function fetchWeather(location) {
  return (dispatch) => {
    dispatch(getWeatherRequest())

    fetch(`${baseURL}/location/${location}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Location not found')
        }
        return response.json()
      })
      .then(json => {
        dispatch(getWeatherSuccess(json.consolidated_weather))
      })
      .catch(error => {
        console.log('Get Weather Error', error)
      })
  }
}

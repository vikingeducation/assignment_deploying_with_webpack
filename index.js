import React from 'react'
import ReactDom from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import weatherForecast from './reducers'
import AppContainer from './containers/AppContainer'
import { forecast } from './forecast'
import { formatDate } from './helpers'
import './stylesheets/index.scss'


let preloadedState = {
  weather: {
    isFetching: false,
    today: formatDate(new Date()),
    forecast: []
  },
  location: {
    isFetching: true,
  }
}

let store = createStore(weatherForecast, preloadedState, applyMiddleware(thunk))

ReactDom.render(
  <Provider store={store}>
  <AppContainer />
  </Provider>, document.getElementById('root'))

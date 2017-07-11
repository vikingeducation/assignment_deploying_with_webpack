import { connect } from 'react-redux'
import React, { Component } from 'react'
import App from '../components/App'
import { fetchWOEID, noGeoLocation } from '../actions'

const mapStateToProps = (state) => {
  return {
    forecast: state.weather.forecast,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchWOEID: (coords) => {
      dispatch(fetchWOEID(coords))
    },
    noGeoLocation: () => {
      dispatch(noGeoLocation())
    }
  }
}

class AppContainer extends Component {
  componentWillMount() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(pos => {
        this.props.fetchWOEID({ x: pos.coords.latitude, y: pos.coords.longitude })
      })
    } else {
      this.props.noGeolocation()
    }
  }

  render() {
    return (<App {...this.props} />)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer)

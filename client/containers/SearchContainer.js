import React, { Component } from 'react'
import { connect } from 'react-redux'
import Search from '../components/Search'
import serialize from 'form-serialize'
import { searchForLocation } from '../actions'

const mapStateToProps = (state) => {
  return {
    name: state.location.name,
    isFetching: state.location.isFetching,
    geolocation: state.location.geolocation
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (e) => {
      e.preventDefault()
      const data = serialize(e.target, { hash: true })
      dispatch(searchForLocation(data.location))
    }

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Search)

import Results from '../components/Results'
import { connect } from 'react-redux'
import { setLocation, fetchWeather, setForecastLoading } from '../actions'
const mapStateToProps = (state) => {
  return {
    results: state.search.results,
    isSearching: state.search.isFetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (e) => {
      const woeid = e.target.getAttribute('data-woeid')
      dispatch(setLocation({ woeid }))
      dispatch(fetchWeather(woeid))
      dispatch(setForecastLoading(true))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)(Results)

import React from 'react'
import ForecastContainer from '../containers/ForecastContainer'
import SearchContainer from '../containers/SearchContainer'
import { Container } from 'reactstrap'
import ResultsContainer from '../containers/ResultsContainer'

const App = ({ location, forecast }) => {


  return (
    <Container>
    <h1 className="sr-only">Weather Or Not</h1>
    <SearchContainer/>
     <main>
    { forecast ?
      <ForecastContainer />
      :
      <ResultsContainer />}
     </main>
  </Container>
  )
}

export default App

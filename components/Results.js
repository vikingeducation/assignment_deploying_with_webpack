import React from 'react'

const Results = ({ results, isSearching, onClick }) => {
  if (isSearching) {
    return <p>Searching...</p>
  }


  let searchResults = results.map((result) => {
    return <div  key={result.woeid}><a href="#">
    <span className="h5" onClick={onClick} data-woeid={result.woeid}>{result.title}</span></a> ({result.location_type})</div>
  })

  if (searchResults.length < 1) {
    searchResults = <p>No results found</p>
  }

  return (
    <section id="results">
    <h2>Search Results:</h2>
    {searchResults}
    </section>
  )
}

export default Results

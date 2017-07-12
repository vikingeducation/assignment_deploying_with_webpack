import React from 'react'
import { FormGroup, Form, Label, Input, Button } from 'reactstrap'

const Search = ({ name, onSubmit, isFetching, geolocation }) => {

  let searchTerm

  if (!isFetching && name) {
    searchTerm = name
  } else if (isFetching && !name) {
    searchTerm = 'Retrieving your current location...'
  } else if (!geoLocation || (!isFetching && !name)) {
    searchTerm = 'Please enter a location'
  }


  return (
    <div className="introduction">
<p className="display-3">Hello.</p>
<p className="display-4">Here's the 5-day forecast for</p>
<Form onSubmit={onSubmit}>
 <FormGroup>
          <Label for="location" className="sr-only">Email</Label>
          <Input type="text" name="location" placeholder={searchTerm} />
        </FormGroup>
        <Button type="submit">Search</Button>
</Form>
</div>
  )
}

export default Search

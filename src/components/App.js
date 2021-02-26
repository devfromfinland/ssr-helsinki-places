import React from 'react'
import PlacesList from './PlaceList'
import Pagination from './Pagination'

function App({ places, ...props }) {
  // TODO: to add context if needed

  // TODO: to add react-router if needed

  return (
    <div>
      <h1>Places of Helsinki</h1>
      <PlacesList places={places} />
      <Pagination {...props} />
    </div>
  )
}

export default App

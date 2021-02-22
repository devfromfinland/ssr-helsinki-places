import React from 'react'
import PlacesList from './PlaceList'
import Pagination from './Pagination'

function App({ places, ...props }) {
  // TODO: to add context if needed

  // TODO: to add react-router if needed

  return (
    <div>
      <Pagination {...props} />
      <PlacesList places={places} />
    </div>
  )
}

export default App

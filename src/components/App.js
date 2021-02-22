import React from 'react'
import PlacesList from './PlaceList'
import Pagination from './Pagination'

function App({ places, ...props }) {
  // TODO: to add context

  // TODO: to add react-router & pagination

  return (
    <div>
      {/* <button onClick={() => setCount(count + 1)}>{count}</button>
      <button>Next page</button>
      <div>page size: {size}</div> */}
      <Pagination {...props} />
      <PlacesList places={places} />
    </div>
  )
}

export default App

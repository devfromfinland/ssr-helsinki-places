import React, { useState } from 'react'
import PlacesList from './PlaceList'

function App({ places, page, size }) {
  const [count, setCount] = useState(parseInt(page))

  // TODO: to add context

  // TODO: to add react-router & pagination

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <button>Next page</button>
      <div>page size: {size}</div>
      <PlacesList places={places} />
    </div>
  )
}

export default App

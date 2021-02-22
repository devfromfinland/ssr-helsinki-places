import React, { useState } from 'react'
import PlacesList from './PlaceList'

// TODO: add state

// TODO: add Pagination

function App({ places }) {
  const [count, setCount] = useState(0)

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      {/* <PlacesList places={places} /> */}
    </div>
  )
}

export default App

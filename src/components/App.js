import React, { useState } from 'react'
import PlacesList from './PlaceList'

// TODO: add state

function App({ places }) {
  const [context, setContext] = useState({
    itemsPerPage: 10,
    page: 1,
  })

  return (
    // <AppContext.Provider value={{ context, setContext }}>
      <div>
        <PlacesList places={places} />
      </div>
    // </AppContext.Provider>
  )
}

export default App

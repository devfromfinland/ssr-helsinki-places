import React from 'react'
import styled from 'styled-components'
import PlacesList from './PlaceList'
import Pagination from './Pagination'
import Map from './Map'

function App({ places, ...props }) {
  const [highlightLocation, setHighlightLocation] = React.useState('') // locationId
  // TODO: to add context if needed

  // TODO: to add react-router if needed

  return (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
      <Left>
        <h1>Places of Helsinki</h1>
        <PlacesList places={places} highlight={highlightLocation}/>
        <Pagination {...props} />
      </Left>
      <Map places={places} highlightMarker={setHighlightLocation}/>
    </div>
  )
}

const Left = styled.div`
  flex: 1;
  height: 100vh;
  flex-direction: column;
  display: flex;
  margin-left: 10px;
`

export default App

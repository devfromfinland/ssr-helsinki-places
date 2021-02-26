import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import PlacesList from './PlaceList'
import Pagination from './Pagination'
import Map from './Map'

function App({ places, isFailed, ...props }) {
  const [highlightLocation, setHighlightLocation] = React.useState('') // locationId
  // TODO: to add context if needed

  // TODO: to add react-router if needed

  return (
    <Container>
      <Left>
        <h1>Places of Helsinki</h1>

        { isFailed ? <div>Could not load data, please refresh the page or try again later.</div> : <>
          <PlacesList places={places} highlight={highlightLocation}/>
        </>}

        <Pagination {...props} />
        
      </Left>

      { !isFailed ? <Map places={places} highlightMarker={setHighlightLocation}/> : null}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Left = styled.div`
  flex: 1;
  height: 100vh;
  flex-direction: column;
  display: flex;
  margin-left: 10px;
`

App.propTypes = {
  places: PropTypes.array,
  isFailed: PropTypes.bool,
}

export default App

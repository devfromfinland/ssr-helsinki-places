import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import PlaceItem from './PlaceItem'

const PlaceList = ({ places, highlight }) => {
  if (!places || places.length === 0) return <div>No data</div>

  return (
    <Wrapper data-cy='place-list'>
      {places.map((item, index) => (
        <PlaceItem
          place={item}
          key={item.id}
          index={index}
          highlighted={item.id === highlight ? true : false }
        />
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  border: 1px solid grey;
  overflow-y: auto;

  & .even {
    background-color: #f1f1f1;
    border-bottom: 1px solid grey;
    padding: 8px;
  }

  & .odd {
    background-color: white;
    border-bottom: 1px solid grey;
    padding: 8px;
  }

  & :last-child {
    border-bottom: 0;
  }
`

PlaceList.propTypes = {
  places: PropTypes.array,
  highlight: PropTypes.string,
}

export default PlaceList

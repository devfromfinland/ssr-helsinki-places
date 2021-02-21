import React from 'react'
import PropTypes from 'prop-types'
import PlaceItem from './PlaceItem'

const PlaceList = ({ places }) => {
  if (!places || places.length === 0) return <div>No data</div>

  return (
    <div>
      {/* TODO: Add headers */}

      {places.map((item) => (
        <PlaceItem place={item} key={item.id} />
      ))}
    </div>
  )
}

PlaceList.propTypes = {
  places: PropTypes.array,
}

export default PlaceList

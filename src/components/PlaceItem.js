import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const checkStatus = (openingHours) => {
  // TODO: Check opening status

  return 'Open'
}

const PlaceItem = ({ place }) => {
  // TODO: Get status based on current time and place's open time
  const lang = 'en'
  const { street_address, postal_code, locality } = place.location?.address

  return (
    <Wrapper>
      <Name>{place.name[lang]}</Name>
      <Address>{`${street_address}, ${postal_code} ${locality}`}</Address>
      <div>{checkStatus(place.openingHours)}</div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`

const Name = styled.div`
  flex: 1;
`

const Address = styled.div`
  flex: 1;
`

PlaceItem.propTypes = {
  place: PropTypes.object,
}

export default PlaceItem

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { checkOpeningStatus } from '../utils/helpers'

const PlaceItem = ({ place }) => {
  if (!place) return <div>Empty item</div>

  // TODO: set default lang = en, change language in query and add to context if needed
  const lang = 'en'

  // TODO: show link and Modal for exception opening hours
  const status = checkOpeningStatus(place.opening_hours)

  const { street_address, postal_code, locality } = place.location?.address

  return (
    <Wrapper>
      <Name>{place.name[lang]}</Name>
      <Address>{`${street_address}, ${postal_code} ${locality}`}</Address>
      <div>{status}</div>
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

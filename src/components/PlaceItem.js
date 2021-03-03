import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Status from './Status'

const PlaceItem = ({ place, index, highlighted }) => {
  if (!place) return <div>Empty item</div>

  // console.log('place', place)

  // TODO: set default lang = en, change language in query and add to context if needed
  const lang = 'en'

  let streetAddress = ''
  let postalCode = ''
  let locality = ''

  if (place.location?.address) {
    streetAddress = place.location.address.street_address
    postalCode = place.location.address.postal_code
    locality = place.location.address.locality
  }

  return (
    <Wrapper
      data-testid="place-item-element"
      data-cy="place-item"
      className={index % 2 === 0 ? 'even' : 'odd'}
      style={highlighted ? ({ backgroundColor: '#a9f2fc' }) : {}}
    >
      <Left>
        <Name>{place.name[lang]}</Name>
        <Address>{`${streetAddress}, ${postalCode} ${locality}`}</Address>
      </Left>
      <Status openingHours={place.opening_hours} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Left = styled.div`
  flex: 1;
`

const Name = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 4px;
`

const Address = styled.div`
  color: grey;
`

PlaceItem.propTypes = {
  place: PropTypes.object,
  index: PropTypes.number,
}

export default PlaceItem

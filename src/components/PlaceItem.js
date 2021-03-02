import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { checkOpeningStatus } from '../utils/helpers'

const PlaceItem = ({ place, index, highlighted }) => {
  if (!place) return <div>Empty item</div>

  // TODO: set default lang = en, change language in query and add to context if needed
  const lang = 'en'

  // TODO: show link and Modal for exception opening hours
  const status = checkOpeningStatus(place.opening_hours)

  const renderStatus = () => {
    switch (status) {
      case 'Open':
        return <Status style={{ color: 'green' }}>Open</Status>
      case 'Closed':
        return <Status style={{ color: 'red' }}>Closed</Status>
      case 'Open with exception':
        return (
          <div>
            <Status style={{ color: 'green' }}>Open</Status>
            <div>with exception</div>
          </div>
        )
      case 'No data':
        return <Status>No data</Status>
      case 'Invalid data':
        return <Status>Invalid</Status>
      default:
        return <Status>Error</Status>
    }
  }

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
      {renderStatus()}
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

const Status = styled.div`
  color: black;
  text-transform: uppercase;
  font-weight: bold;
  text-align: end;
`

PlaceItem.propTypes = {
  place: PropTypes.object,
  index: PropTypes.number,
}

export default PlaceItem

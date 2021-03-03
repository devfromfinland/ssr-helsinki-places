import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { checkOpeningStatus } from '../utils/helpers'

const Status = ({ openingHours }) => {
  if (!openingHours || !openingHours.hours) return <Wrapper>No data</Wrapper>

  const result = checkOpeningStatus(openingHours)

  switch (result) {
    case 'Open':
      return <Wrapper style={{ color: 'green' }}>Open</Wrapper>
    case 'Closed':
      return <Wrapper style={{ color: 'red' }}>Closed</Wrapper>
    case 'Open with exception':
      // TODO: show link and Modal for exception opening hours
      return (
        <div>
          <Wrapper style={{ color: 'green' }}>Open</Wrapper>
          <div>with exception</div>
        </div>
      )
    case 'Invalid data':
      return <Wrapper>Invalid</Wrapper>
    default:
      return <Wrapper>Error</Wrapper>
  }
}

const Wrapper = styled.div`
  color: black;
  text-transform: uppercase;
  font-weight: bold;
  text-align: end;
`

Status.propTypes = {
  openingHours: PropTypes.object
}

export default Status

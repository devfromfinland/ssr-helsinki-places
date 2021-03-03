import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { checkOpeningStatus } from '../utils/helpers'

const OpeningStatus = ({ openingHours }) => {
  if (!openingHours || !openingHours.hours) return <Status>No data</Status>

  const result = checkOpeningStatus(openingHours)

  switch (result) {
    case 'Open':
      return <Status style={{ color: 'green' }}>Open</Status>
    case 'Closed':
      return <Status style={{ color: 'red' }}>Closed</Status>
    case 'Open with exception':
      // TODO: show link and Modal for exception opening hours
      return (
        <div>
          <Status style={{ color: 'green' }}>Open</Status>
          <div>with exception</div>
        </div>
      )
    case 'Invalid data':
      return <Status>Invalid</Status>
    default:
      return <Status>Error</Status>
  }
}

const Status = styled.div`
  color: black;
  text-transform: uppercase;
  font-weight: bold;
  text-align: end;
`

OpeningStatus.propTypes = {
  openingHours: PropTypes.object
}

export default OpeningStatus

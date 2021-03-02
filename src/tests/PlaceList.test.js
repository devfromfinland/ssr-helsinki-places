import React from 'react'
import ReactDomServer from 'react-dom/server'
import PlaceList from '../components/PlaceList'
import { places1, places12 } from '../mocks/mock-data'
import { checkOpeningStatus } from '../utils/helpers'

it('Show 1 item with name, address, and status', () => {
  const content = ReactDomServer.renderToString(<PlaceList places={places1} />)
  // console.log('content', content)

  expect(content).toMatch(/<div[^>]*data-cy="place-list"/g)

  expect(content).toContain('Aalto University School of Business')
  expect(content).toContain('Ekonominaukio 1')
  expect(content).toContain('02150')
  expect(content).toContain('Espoo')

  // render correct status
  const status = checkOpeningStatus(places1[0].opening_hours)
  if (status === 'Open with exception') {
    expect(content).toContain('Open')
    expect(content).toContain('with exception')
  } else {
    expect(content).toContain(status)
  }

  // render correct amount of places
  const items = content.match(/<div[^>]*data-testid="place-item-element"/g)
  expect(items).toHaveLength(1)
})

it('Show 12 items with name, address, and status', () => {
  const content = ReactDomServer.renderToString(<PlaceList places={places12} />)
  expect(content).toMatch(/<div[^>]*data-cy="place-list"/g)

  const statusCount = {}
  places12.forEach((place) => {
    const status = checkOpeningStatus(place.opening_hours)

    if (!statusCount[status]) {
      statusCount[status] = 1
    } else {
      statusCount[status] += 1
    }
  })

  // Show correct amount of status
  const openStatus = content.match(/Open/g)
  const closedStatus = content.match(/Closed/g)
  const exceptionStatus = content.match(/with exception/g)

  if (exceptionStatus) { expect(exceptionStatus).toHaveLength(statusCount['Open with exception']) }
  if (closedStatus) { expect(closedStatus).toHaveLength(statusCount.Closed) }
  if (openStatus && exceptionStatus) {
    expect(openStatus).toHaveLength(statusCount.Open + statusCount['Open with exception'])
  } else if (openStatus) {
    expect(openStatus).toHaveLength(statusCount.Open)
  }

  // render correct amount of places
  const items = content.match(/<div[^>]*data-testid="place-item-element"/g)
  expect(items).toHaveLength(12)
})

it('Without props', () => {
  const content = ReactDomServer.renderToString(<PlaceList />)
  expect(content).toContain('No data')
})

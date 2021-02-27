import React from 'react'
import ReactDomServer from 'react-dom/server'
import PlaceList from '../components/PlaceList'
import { places1, places12 } from '../mocks/mock-data'
import { checkOpeningStatus } from '../utils/helpers'

it('Show 1 item with name, address, and status', () => {
  const content = ReactDomServer.renderToString(<PlaceList places={places1}/>)
  // console.log('content', content)

  expect(content).toMatch(/<div[^>]*data-cy="place-list"/g)

  expect(content).toContain('A. Tillander')
  expect(content).toContain('Aleksanterinkatu 17')
  expect(content).toContain('00100')
  expect(content).toContain('Helsinki')

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
  const content = ReactDomServer.renderToString(<PlaceList places={places12}/>)
  expect(content).toMatch(/<div[^>]*data-cy="place-list"/g)

  let statusCount = {}
  places12.forEach(place => {
    const status = checkOpeningStatus(place.opening_hours)

    if (!statusCount[status]) {
      statusCount[status] = 1
    } else {
      statusCount[status] = statusCount[status] + 1
    }
  })

  // Show correct amount of status
  const openStatus = content.match(/Open/g)
  const closedStatus = content.match(/Closed/g)
  const exceptionStatus = content.match(/with exception/g)
  expect(openStatus).toHaveLength(statusCount['Open'] + statusCount['Open with exception'])
  expect(closedStatus).toHaveLength(statusCount['Closed'])
  expect(exceptionStatus).toHaveLength(statusCount['Open with exception'])

  // render correct amount of places
  const items = content.match(/<div[^>]*data-testid="place-item-element"/g)
  expect(items).toHaveLength(12)
})

it('Without props', () => {
  const content = ReactDomServer.renderToString(<PlaceList />)
  expect(content).toContain('No data')
})

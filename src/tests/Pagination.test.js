import React from 'react'
import ReactDomServer from 'react-dom/server'
import Pagination from '../components/Pagination'

console.error = jest.fn()

afterEach(() => {
  console.error.mockClear()
})

it('Without props', () => {
  ReactDomServer.renderToString(<Pagination />)
  // warning by propTypes (test still passes)
  expect(console.error).toHaveBeenCalledTimes(2)
})

it('Render all elements properly', () => {
  const content = ReactDomServer.renderToString(<Pagination page={2} size={10} totalCount={25} />)
  expect(content).toMatch(/<div[^>]*data-cy="pagination"/g)
  expect(content).toMatch(/<button[^>]*data-cy="btn-prev"/g)
  expect(content).toMatch(/<button[^>]*data-cy="btn-next"/g)
  expect(content).toMatch(/<input[^>]*data-cy="input-page"/g)
  expect(content).toMatch(/<input[^>]*data-cy="input-size"/g)
  expect(content).toMatch(/<button[^>]*data-cy="btn-update"/g)
  expect(content).toMatch(/<button[^>]*data-cy="btn-go"/g)

  // current page: 2
  expect(content).toMatch(/<!-- -->2<!-- -->/g)
})

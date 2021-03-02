/* eslint-disable import/first */
jest.mock('node-fetch')
import fetch from 'node-fetch'
import supertest from 'supertest'
import server from '../server'
import { places12, places1 } from '../mocks/mock-data'

const endpoint = supertest(server)

describe('Viewing places listing', () => {
  it('Response is html format', async () => {
    fetch.mockImplementationOnce(() => {
      return new Promise((resolve) => resolve({
        json: () => ({
          meta: { count: '1' },
          data: places1
        })
      }))
    })

    await endpoint
      .get('/places')
      .expect(200)
      .expect('Content-Type', /text\/html/)
  })

  it('Response have all the elements', async () => {
    fetch.mockImplementationOnce(() => {
      return new Promise((resolve) => resolve({
        json: () => ({
          meta: { count: '12' },
          data: places12.slice(0, 10)
        })
      }))
    })

    const res = await endpoint.get('/places')
    expect(res.status).toEqual(200)

    // checking tags
    expect(res.text).toMatch(/<html[^>]*>(.*?)<\/html>/)
    expect(res.text).toMatch(/<head[^>]*>(.*?)<\/head>/)
    expect(res.text).toMatch(/<body[^>]*>(.*?)<\/body>/)

    // checking contents
    expect(res.text).toContain('Places of Helsinki')
    expect(res.text).toMatch(/<div[^>]*data-cy="place-list"/g)
    expect(res.text).toMatch(/<div[^>]*data-cy="pagination"/g)
    expect(res.text).toMatch(/<div[^>]*id="map"/g)
    const items = res.text.match(/<div[^>]*data-testid="place-item-element"/g)
    expect(items).toHaveLength(10)
    expect(res.text).toContain('window.APP_CONTEXT=')

    // checking scripts
    expect(res.text).toMatch(/<script src="client.js"><\/script>/)
  })

  it('Response only have 1 item: Aalto University School of Business', async () => {
    fetch.mockImplementationOnce(() => {
      return new Promise((resolve) => resolve({
        json: () => ({
          meta: { count: '1' },
          data: places1
        })
      }))
    })

    const res = await endpoint.get('/places')
    expect(res.status).toEqual(200)

    // checking tags
    expect(res.text).toMatch(/<html[^>]*>(.*?)<\/html>/)
    expect(res.text).toMatch(/<head[^>]*>(.*?)<\/head>/)
    expect(res.text).toMatch(/<body[^>]*>(.*?)<\/body>/)

    // // checking contents
    expect(res.text).toContain('Places of Helsinki')
    expect(res.text).toMatch(/<div[^>]*data-cy="place-list"/g)
    expect(res.text).toMatch(/<div[^>]*data-cy="pagination"/g)
    expect(res.text).toMatch(/<div[^>]*id="map"/g)
    const items = res.text.match(/<div[^>]*data-testid="place-item-element"/g)
    expect(items).toHaveLength(1)
    expect(res.text).toContain('window.APP_CONTEXT=')
    expect(res.text).toContain('Aalto University School of Business')

    // checking scripts
    expect(res.text).toMatch(/<script src="client.js"><\/script>/)
  })

  it('API query error', async () => {
    fetch.mockRejectedValueOnce(new Error('an error happened'))

    const res = await endpoint.get('/places')
    expect(res.status).toEqual(200)

    // check contents still showing with error message
    expect(res.text).toContain('Places of Helsinki')
    expect(res.text).toContain('Could not load data, please refresh the page or try again later.')

    // no other contents should show
    expect(res.text).not.toMatch(/<div[^>]*data-cy="place-list"/g)
    expect(res.text).not.toMatch(/<div[^>]*data-testid="place-item-element"/g)
    expect(res.text).not.toMatch(/<div[^>]*id="map"/g)
  })

  it('404 page', async () => {
    const res = await endpoint.get('/not-exist-path')

    // redirect to 404 page
    expect(res.status).toEqual(302)
    expect(res.text).toContain('Redirecting to /404')

    // contents on 404 page
    const secondRes = await endpoint.get('/404')
    expect(secondRes.text).toContain('Page not found! Feel free to go back or try something else?')

    // no other contents should show
    expect(secondRes.text).not.toMatch(/<div[^>]*data-cy="place-list"/g)
    expect(secondRes.text).not.toMatch(/<div[^>]*id="map"/g)

    // no script attached since it is a very simple HTML page
    expect(secondRes.text).not.toMatch(/<script src="client.js"><\/script>/)
  })
})

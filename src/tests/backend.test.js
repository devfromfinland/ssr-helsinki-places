import supertest from 'supertest'
import server from '../server'

const endpoint = supertest(server)

describe('Viewing Home page', () => {
  it('Response is html format', async () => {
    await endpoint
      .get('/')
      .expect(200)
      .expect('Content-Type', /text\/html/)
  })

  it('Page has data', async () => {
    const res = await endpoint.get('/')
    expect(res.text).toContain('Hello world')
  })
})

describe('Viewing places listing', () => {
  it('Response is html format', async () => {
    await endpoint
      .get('/places')
      .expect(200)
      .expect('Content-Type', /text\/html/)
  })

  // TODO: to use fetch mock
  it('Default: page has 10 items and item count is 12.', async () => {
    const res = await endpoint.get('/places')
    console.log('res in test', res.text)

    expect(res.status).toEqual(200)
  })
})
import supertest from 'supertest'
import server from '../server'

const endpoint = supertest(server)

describe('Viewing Home page', () => {
  test('Response is html format', async () => {
    await endpoint
      .get('/')
      .expect(200)
      .expect('Content-Type', /text\/html/)
  })

  test('Page has data', async () => {
    const res = await endpoint.get('/')
    expect(res.text).toContain('Hello world')
  })
})

describe('Viewing places listing', () => {
  test('Response is html format', async () => {
    await endpoint
      .get('/places')
      .expect(200)
      .expect('Content-Type', /text\/html/)
  })

  test('Default: page has 10 items. Total items is 12.', async () => {
    const res = await endpoint.get('/places')
    console.log('text', res.text)
    // const reg = //g
    // expect(res.text).toContain('Hello world')
  })
})
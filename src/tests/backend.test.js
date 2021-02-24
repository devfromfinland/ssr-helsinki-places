import supertest from 'supertest'
import server from '../server'

const endpoint = supertest(server)

describe('Viewing correct data', () => {
  test('Response is html format', async () => {
    await endpoint
      .get('/')
      .expect(200)
      .expect('Content-Type', /text\/html/)
  })

  // test('Viewing home page', async () => {
  //   const res = await request.get('/')
  //   expect(res.body).toContain('Hello world')
  // })
})
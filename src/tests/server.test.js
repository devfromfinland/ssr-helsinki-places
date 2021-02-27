import supertest from 'supertest'
import server from '../server'

const endpoint = supertest(server)

// describe('Viewing Home page', () => {
//   it('Response is html format', async () => {
//     await endpoint
//       .get('/')
//       .expect(200)
//       .expect('Content-Type', /text\/html/)
//   })

//   it('Page has data', async () => {
//     const res = await endpoint.get('/')
//     expect(res.text).toContain('Hello world')
//   })
// })

describe('Viewing places listing', () => {
  it('Response is html format', async () => {
    await endpoint
      .get('/places')
      .expect(200)
      .expect('Content-Type', /text\/html/)
  })

  // TODO: to use fetch mock
  it('Response have all the elements', async () => {
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
})
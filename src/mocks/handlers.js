// mock APIs for testing
// docs: https://mswjs.io/docs/api/rest
import { rest } from 'msw'
import { places12 } from './mock-data'

const API_URL = 'http://open-api.myhelsinki.fi/v1/places'

const handlers = [
  rest.get(`${API_URL}/?limit=10&start=0`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.set('Access-Control-Allow-Origin', '*'),
      ctx.json({
        meta: { count: '12' },
        data: places12.slice(0, 10)
      })
    )
  }),

  rest.get(`${API_URL}/?limit=10&start=10`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.set('Access-Control-Allow-Origin', '*'),
      ctx.json({
        meta: { count: '12' },
        data: places12.slice(10)
      })
    )
  }),

  rest.get(`${API_URL}/?limit=5&start=0`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.set('Access-Control-Allow-Origin', '*'),
      ctx.json({
        meta: { count: '12' },
        data: places12.slice(0, 5)
      })
    )
  }),
]

export default handlers

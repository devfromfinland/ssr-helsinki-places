import React from 'react'
import ReactDOMServer from 'react-dom/server'
import express from 'express'
import { DEFAULT_PAGE_SIZE, DEFAULT_LANGUAGE, APP_VERSION } from '../utils/config'
import App from '../components/App'
import Html from '../components/Html'
import { redisClient } from '../lib/redisLib'
import { fetchPlaces } from '../lib/apiLib'

const router = express.Router()

const prepAndSendContent = (context, res) => {
  const scripts = ['client.js']

  const mainContent = ReactDOMServer.renderToString(<App {...context} />)
  const html = ReactDOMServer.renderToStaticMarkup(
    <Html scripts={scripts} context={context}>{mainContent}</Html>,
  )

  res.send(`<!DOCTYPE html>${html}`)
}

router.get('/', async (req, res) => {
  const page = req.query.page ? parseInt(req.query.page, 10) : 1
  const size = req.query.size ? parseInt(req.query.size, 10) : DEFAULT_PAGE_SIZE
  const lang = req.query.lang ? req.query.lang : DEFAULT_LANGUAGE
  const redisKey = APP_VERSION + req.originalUrl

  let places
  let isFailed = false
  let totalCount = 0

  if (redisClient.connected) {
    // check data from cache first
    redisClient.get(redisKey, async (err, data) => {
      if (err) throw err

      if (data) {
        // cache expire after 1 day, so no need cache validate strategy
        const parsedData = JSON.parse(data)
        places = parsedData.places
        totalCount = parsedData.totalCount
      } else {
        try {
          const result = await fetchPlaces(page, size, lang)
          places = result.data
          totalCount = parseInt(result.meta.count, 10)

          // save to cache with expiration = 1 day
          redisClient.setex(redisKey, 24 * 60 * 60, JSON.stringify({ places, totalCount }))
        } catch (error) {
          isFailed = true
          console.log('API request failed', error)
        }
      }

      prepAndSendContent({
        places,
        page,
        size,
        totalCount,
        isFailed,
      }, res)
    })
  } else {
    // no connection to redis server, query as normal
    try {
      const result = await fetchPlaces(page, size, lang)
      places = result.data
      totalCount = parseInt(result.meta.count, 10)
    } catch (err) {
      isFailed = true
      console.log('API request failed')
    }

    prepAndSendContent({
      places,
      page,
      size,
      totalCount,
      isFailed,
    }, res)
  }
})

export default router

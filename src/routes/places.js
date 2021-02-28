import React from 'react'
import ReactDOMServer from 'react-dom/server'
import express from 'express'
import fetch from 'node-fetch'
import { DEFAULT_PAGE_SIZE, DEFAULT_LANGUAGE } from '../utils/helpers'
import App from '../components/App'
import Html from '../components/Html'
import { redisClient } from '../lib/redisLib'

const router = express.Router()

const prepAndSendContent = (context, res) => {
  const scripts = ['client.js']

  const mainContent = ReactDOMServer.renderToString(<App {...context}/>)
  const html = ReactDOMServer.renderToStaticMarkup(
    <Html
      children={mainContent}
      scripts={scripts}
      context={context}
    />
  )

  res.send(`<!DOCTYPE html>${html}`)
}

router.get('/', async (req, res) => {
  // TODO: additional check validity of page & size input

  const page = req.query.page ? parseInt(req.query.page, 10) : 1
  const size = req.query.size ? parseInt(req.query.size, 10) : DEFAULT_PAGE_SIZE
  const lang = req.query.lang ? req.query.lang : DEFAULT_LANGUAGE
  const redisKey = req.originalUrl

  let places
  let isFailed = false
  let totalCount = 0

  if (redisClient.connected) {
    // check data from cache first
    redisClient.get('count', (err, count) => {
      if (err) throw err
      if (count) totalCount = parseInt(count, 10)
    })

    redisClient.get(redisKey, async (err, data) => {
      if (err) throw err

      if (data) {
        // cache expire after 1 day, so no need validate strategy
        places = JSON.parse(data)
      } else {
        try {
          const response = await fetch(`http://open-api.myhelsinki.fi/v1/places/?limit=${size}&start=${(page-1)*size}&language_filter=${lang}`)
          const result = await response.json()
          places = result.data
  
          // check totalCount and update if different from cache
          if (!totalCount || totalCount !== parseInt(result.meta.count)) {
            totalCount = parseInt(result.meta.count, 10)
            redisClient.set('count', totalCount)
          }
  
          // save to cache with expiration = 1 day
          redisClient.setex(redisKey, 24 * 60 * 60, JSON.stringify(result.data))
        } catch (err) {
          isFailed = true
          console.log('API request failed')
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
      const response = await fetch(`http://open-api.myhelsinki.fi/v1/places/?limit=${size}&start=${(page-1)*size}&language_filter=${lang}`)
      const result = await response.json()
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
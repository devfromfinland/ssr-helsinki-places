import path from 'path'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import express from 'express'
import fetch from 'node-fetch'
import { DEFAULT_PAGE_SIZE } from '../utils/helpers'
import App from '../components/App'
import Html from '../components/Html'
import redisClient from '../lib/redisLib'
import { RedisClient } from 'redis'

const router = express.Router()

// fix static path for dynamic route
// https://stackoverflow.com/a/57915021
router.use('*', (req, res, next) => {
  const regex = /(.*?)\.js/g

  // only serve .js files from static folder
  if (req.originalUrl.match(regex)) {
    req.url = path.basename(req.originalUrl)

    const staticPath = process.env.NODE_ENV === 'development'
      ? path.join(path.dirname(require.main.filename) + '/build')
      : path.join(__dirname)
    
    express.static(staticPath)(req, res, next)
  } else {
    next()
  }
})

router.get('/:page/', async (req, res) => {
  // TODO: check validity of page & size input

  const page = req.params.page ? parseInt(req.params.page, 10) : 1
  const size = req.query.size ? parseInt(req.query.size, 10) : DEFAULT_PAGE_SIZE
  const redisKey = req.originalUrl

  const scripts = ['client.js']

  // check from cache first
  try {
    let totalCount = null

    redisClient.get('count', (err, count) => {
      if (err) throw err
      if (count) totalCount = count
    })

    redisClient.get(redisKey, async (err, data) => {
      if (err) throw err

      let places = null

      if (data) {
        places = JSON.parse(data)
      } else {
        const response = await fetch(`http://open-api.myhelsinki.fi/v1/places/?limit=${size}&start=${(page-1)*size}`)
        const result = await response.json()
        places = result.data

        // check totalCount and update if different from cache
        if (!totalCount || totalCount !== parseInt(result.meta.count)) {
          totalCount = parseInt(result.meta.count)
          redisClient.set('count', totalCount)
        }

        // save to cache with expiration = 1 day
        redisClient.setex(redisKey, 24 * 60 * 60, JSON.stringify(result.data))
      }

      const context = {
        places,
        page,
        size,
        totalCount,
      }

      const mainContent = ReactDOMServer.renderToString(<App {...context}/>)
      const html = ReactDOMServer.renderToStaticMarkup(
        <Html
          children={mainContent}
          scripts={scripts}
          context={context}
        />
      )

      res.send(`<!doctype html>${html}`)
    })
  } catch (err) {
    // TODO: send error flag to client, then client will retry automatically for a few times

    console.log(`error while fetching data: ${err}`)
    res.send(`<!doctype html><div id="root">Couldn't load data!</div>`)
  }
})

export default router
import path from 'path'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import express from 'express'
import fetch from 'node-fetch'
import { DEFAULT_PAGE_SIZE, filterData } from '../utils/helpers'
import App from '../components/App'
import Html from '../components/Html'

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
  console.log('params', req.params)

  const page = req.params.page ? parseInt(req.params.page, 10) : 1
  const size = req.query.size ? parseInt(req.query.size, 10) : DEFAULT_PAGE_SIZE
  const scripts = ['client.js']

  console.log(`page: ${page}, size: ${size}`)
  console.log(typeof page, typeof size)

  try {
    const response = await fetch('http://open-api.myhelsinki.fi/v1/places/')
    const { data } = await response.json()
    const places = filterData(data, size, page)
    const context = {
      places,
      page,
      size,
      totalCount: data.length
    }

    console.log('num of pages', Math.ceil(data.length / size))

    const mainContent = ReactDOMServer.renderToString(<App {...context}/>)
    const html = ReactDOMServer.renderToStaticMarkup(
      <Html
        children={mainContent}
        scripts={scripts}
        context={context}
      />
    )
    res.send(`<!doctype html>${html}`)

  } catch (err) {
    console.log(`error while fetching data: ${err}`)
    res.send(`<!doctype html><div id="root">Something went wrong!</div>`)
  }
})

export default router
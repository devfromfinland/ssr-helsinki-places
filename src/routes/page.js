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
  req.url = path.basename(req.originalUrl)
  express.static(__dirname)(req, res, next)
})

router.get('/:page', (req, res) => {
  // with default page size (10)
  const { page } = req.params
  res.send(`
    <!doctype html>
    <div id="root">To render page ${page} with default page size = 10</div>
  `)
})

router.get('/:page/:size', async (req, res) => {
  const { page, size } = req.params
  const scripts = ['client.js']

  // TODO: check validity of page & size

  try {
    const response = await fetch('http://open-api.myhelsinki.fi/v1/places/')
    const data = await response.json()
    const places = filterData(data.data, size, page)

    const mainContent = ReactDOMServer.renderToString(<App />)
    const html = ReactDOMServer.renderToStaticMarkup(
      <Html
        children={mainContent}
        scripts={scripts}
      />
    )
    res.send(`<!doctype html>${html}`)

  } catch (err) {
    console.log(`error while fetching data: ${err}`)
    res.send(`<!doctype html><div id="root">Something went wrong!</div>`)
  }
})

export default router
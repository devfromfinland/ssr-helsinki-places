import React from 'react'
import ReactDOMServer from 'react-dom/server'
import express from 'express'
import fetch from 'node-fetch'
import { DEFAULT_PAGE_SIZE, filterData } from '../utils/helpers'
import App from '../components/App'
import Html from '../components/Html'

// const React = require('react')
// const ReactDOMServer = require('react-dom/server')
// const express = require('express')
// const fetch = require('node-fetch')
// const { DEFAULT_PAGE_SIZE, filterData } = require('../utils/helpers')
// const App = require('../components/App')
// const Html = require('../components/Html')

const router = express.Router()

router.get('/:page', (req, res) => {
  // with default page size (10)
  const { page } = req.params
  const scripts = ['client.js']

  // TODO: check validity of page & size

  fetch('http://open-api.myhelsinki.fi/v1/places/')
    .then(res => res.json())
    .then(json => filterData(json.data, DEFAULT_PAGE_SIZE, page))
    .then(result => {
      console.log('result', result)
      // TODO: Render properly here
      const mainContent = ReactDOMServer.renderToString(<App places={result} />)
      const html = ReactDOMServer.renderToStaticMarkup(
        <Html
          children={mainContent}
          scripts={scripts}
        />
      )
      res.send(`<!doctype html><div id="app">${html}</div>`)
      // res.send(JSON.stringify(result))
    })
    .catch(err => {
      console.log(`error while fetching data: ${err}`)
      res.send(`<!doctype html><div id="app">Something went wrong!</div>`)
    })
})

router.get('/:page/:size', async (req, res) => {
  const { page, size } = req.params

  // TODO: check validity of page & size

  try {
    const response = await fetch('http://open-api.myhelsinki.fi/v1/places/')
    const data = await response.json()
    const places = filterData(data.data, size, page)

    const html = ReactDOMServer.renderToString(<App places={places} />)
    res.send(`<!doctype html><div id="app">${html}</div>`)

  } catch (err) {
    console.log(`error while fetching data: ${err}`)
    res.send(`<!doctype html><div id="app">Something went wrong!</div>`)
  }
})

// module.exports = router
export default router
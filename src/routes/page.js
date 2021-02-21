import React from 'react'
import ReactDOMServer from 'react-dom/server'
import express from 'express'
import fetch from 'node-fetch'
import { DEFAULT_PAGE_SIZE, filterData } from '../utils/helpers'
import App from '../components/App'
import PlaceList from '../components/PlaceList'

const router = express.Router()
// with default page size (10)
router.get('/:page', (req, res) => {
  const { page } = req.params

  // TODO: check validity of page & size

  fetch('http://open-api.myhelsinki.fi/v1/places/')
    .then(res => res.json())
    .then(json => filterData(json.data, DEFAULT_PAGE_SIZE, page))
    .then(result => {
      console.log('result', result)
      // TODO: Render properly here
      const html = ReactDOMServer.renderToString(<PlaceList places={result} />)
      res.send(`<!doctype html><div id="app">${html}</div>`)
      // res.send(JSON.stringify(result))
    })
    .catch(err => {
      console.log(`error while fetching data: ${err}`)
      res.send(`<!doctype html><div id="app">Something went wrong!</div>`)
    })
})

router.get('/:page/:size', (req, res) => {
  const { page, size } = req.params

  // TODO: check validity of page & size
  //

  fetch('http://open-api.myhelsinki.fi/v1/places/')
    .then(res => res.json())
    .then(json => filterData(json.data, size, page))
    .then(result => {
      console.log('result', result)
      // TODO: Render properly here
      const html = ReactDOMServer.renderToString(<PlaceList places={result} />)
      res.send(`<!doctype html><div id="app">${html}</div>`)
      // res.send(JSON.stringify(result))
    })
    .catch(err => {
      console.log(`error while fetching data: ${err}`)
      res.send(`<!doctype html><div id="app">Something went wrong!</div>`)
    })
})

module.exports = router
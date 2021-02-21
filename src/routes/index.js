const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  // TODO: check session exist and redirect to proper path

  // res.send('Hello world!')
  res.send(`
    <!doctype html>
    <div id="app">Hello world</div>
  `)
})

module.exports = router
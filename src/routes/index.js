import express from 'express'
const router = express.Router()

router.get('/', (req, res) => {
  // TODO: check session exist and redirect to proper path

  res.send(`
    <!doctype html>
    <div id="root">Hello world</div>
  `)
})

export default router
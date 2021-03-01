import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  // a simple 404 page
  res.send(`
    <!DOCTYPE html>
    <div id="root">
      Page not found! Feel free to go back or try something else?
    </div>
  `)
})

export default router
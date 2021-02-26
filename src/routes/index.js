import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  // TODO: check session exist and redirect to proper path

  // res.send(`
  //   <!DOCTYPE html>
  //   <div id="root">
  //     Hello world! <a href='/places'>Start</a>
  //   </div>
  // `)

  res.redirect('/places')
})

export default router
import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  // TODO: check session exist and redirect to proper path

  res.send(`
    <!DOCTYPE html>
    <div id="root">
      Wrong path... Maybe you wanna try something else?
    </div>
  `)

  res.redirect('/places')
})

export default router
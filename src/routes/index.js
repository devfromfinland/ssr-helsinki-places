import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  // No use of homepage -> set default to /places
  res.redirect('/places')
})

export default router
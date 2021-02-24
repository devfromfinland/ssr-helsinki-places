import express from 'express'
import path from 'path'
import indexRouter from './routes/index'
import placesRouter from './routes/places'

const app = express()

const PORT = 3001

// fix static path for dynamic route
// https://stackoverflow.com/a/57915021
app.use('*', (req, res, next) => {
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

app.use('/', indexRouter)
app.use('/places', placesRouter)

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
  })
}

export default app
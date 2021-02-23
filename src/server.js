import express from 'express'
import indexRouter from './routes/index'
import pageRouter from './routes/page'

const PORT = 3001

const app = express()

app.use('/', indexRouter)
app.use('/page', pageRouter)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
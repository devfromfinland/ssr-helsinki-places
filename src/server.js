import express from 'express'
import indexRouter from './routes/index'
import pageRouter from './routes/page'

const app = express()

const PORT = 3001

app.use('/', indexRouter)
app.use('/page', pageRouter)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
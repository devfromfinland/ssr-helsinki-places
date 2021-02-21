require('@babel/register')

const express = require('express')
const indexRouter = require('./routes/index')
const pageRouter = require('./routes/page')
const app = express()

const PORT = 3001

app.use('/', indexRouter)
app.use('/page', pageRouter)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
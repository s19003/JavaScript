'use strict'

const express = require('express')
const app = express()

app.use(express.static('dist'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + './dist/index.html')
})

const port = 3000
app.listen(port, () => {
  console.log(`http://localhost:${3000}`)
})

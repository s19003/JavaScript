'use strict'

const express = require('express')
const app = express()

app.use(express.static('dist'))
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + './dist/index.html')
})

app.get('/develope', (req, res) => {
  res.sendFile(__dirname + '/public/develope.html')
})

const port = 3000
app.listen(port, () => {
  console.log(`http://localhost:${3000}`)
  console.log(`http://localhost:${3000}/develope`)
})

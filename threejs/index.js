'use strict'

const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/01', (req, res) => {
  res.sendFile(__dirname + 'public/01/index.html')
})

const port = 3000
app.listen(port, () => {
  console.log(`http://localhost:${3000}/01`)
})

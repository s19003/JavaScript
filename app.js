const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.render('index.html')
})

app.get('/test', (req, res) => {
  res.send('Hello World')
})

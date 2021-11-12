'use strict'

import express from 'express'
const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})

const port = 3000
app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})

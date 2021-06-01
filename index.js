const express = require('express')
const app = express()

function onButtonClick () {
  alert('(*´∀｀*)<Hello World!!')
}

app.get('/index', (req, res) => {
  res.write('Hello World!!')
})

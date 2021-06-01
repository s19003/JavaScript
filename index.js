import express from 'express'
const app = express()

function onButtonClick () {
  alert('(*´∀｀*)<Hello World!!')
}

app.get('/index', (req, res) => {
  console.log('Get')
})

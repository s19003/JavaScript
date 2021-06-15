'use strict'

import express from 'express'

const app = express()
const port = 3000

app.use(express.static('public')) // -- 使用する静的ファイルのリポジトリを指定

/***** 
ルーティング
*****/
app.get('/', (req, res) => {
  res.render('top.ejs')
})

app.get('/index', (req, res) => {
  res.render('index.ejs')
})

app.listen(port) // -- サーバーを起動

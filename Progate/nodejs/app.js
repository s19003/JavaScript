'use strict'

import express from 'express'
import mysql from 'mysql'

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
  connection.query('SELECT * FROM items', (error, results) => {
    console.log(results)
    res.render('index.ejs')
  })
})

/*****
Mysqlと接続する
*****/
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'list_app'
})

app.listen(port) // -- サーバーを起動

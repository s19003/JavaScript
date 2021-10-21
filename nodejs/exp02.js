/*
Node - Express
基本的なルーティング
*/
const express = require('express')
const app = express()
const port = 3000

/*
app.METHOD(PATH, HANDLER)
app = expressのインスタンス
METHOD = HTTP要求メソッド
PATH = サーバー上のパス
HANDLER = ルートが一致した時に実行される関数
*/

app.get('/', (req, res) => {
  res.send('GETリクエストに返信')
})

app.post('/', (req, res) => {
  res.send('POSTリクエストに返信')
})

app.post('/user', (req, res) => {
  res.send('PUTリクエストがありました')
})

app.delete('/user', (req, res) => {
  res.send('DELETEリクエストがありました')
})

app.listen(port, () => {
  console.log(`http://localhost:${port}/`)
})

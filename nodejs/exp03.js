/*
Node - Express
静的ファイルの提供
*/
const express = require('express')
const app = express()
const port = 3000

/*
HTML・CSS・JS・画像など、静的なファイルを提供するには、
Expressに標準実装されている
express.staticミドルウェア関数を使用します。
*/
app.use(express.static('public'))
/*
http://localhost:3000/index.html
http://localhost:3000/css/style.css
http://localhost:3000/js/index.js
http://localhost:3000/img/youtube.png
など、publicディレクトリーに入っているファイルを読み込めます。
*/

app.listen(port, () => {
  console.log(`http://localhost:${port}/`)
})

/*****
一定時間ごとに処理を行いたい
*****/

console.log('START')

const date = () => {
  console.log(new Date().toLocaleTimeString())
}
const timer = setInterval(date, 1000) // -- 1秒ごとに実行

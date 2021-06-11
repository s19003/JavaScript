/*****
一定時間ごとに処理を行いたい
*****/

console.log('スタート')

setInterval(() => {
  console.log(new Date().toLocaleTimeString())
}, 1000)

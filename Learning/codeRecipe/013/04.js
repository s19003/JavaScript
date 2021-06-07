/*****
一定時間ごとの処理を解除したい
*****/

console.log('START')
let count = 0

const date = () => {
  console.log(new Date().toLocaleTimeString())
  count++

  if (count == 5) clearTimeout(timer) // 5秒後に解除
}
const timer = setInterval(date, 1000) // -- 1秒ごとに実行

/*****
一定時間ごとの処理を解除したい
*****/

console.log('スタート')
let count = 0

const timer = () => {
  console.log(new Date().toLocaleTimeString())
  count++

  if (count == 5) {
    clearTimeout(clear)
    console.log('タイマーを解除しました')
  }
}
const clear = setInterval(timer, 1000)

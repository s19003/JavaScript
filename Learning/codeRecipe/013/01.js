/*****
一定時間後に処理を行いたい
*****/

console.log(new Date().toLocaleTimeString())

const greet = () => {
  console.log('Hello')
}
setTimeout(greet, 3000) // -- 3秒後に実行

setTimeout(() => {
  console.log('World!!')
}, 5000) // -- 5秒後に実行

setTimeout(() => {
  const date = new Date().toLocaleTimeString()
  console.log(date)
}, 7000) // -- 7秒後に実行

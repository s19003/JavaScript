/*****
一定時間後の処理を解除したい
*****/

console.log(new Date().toLocaleTimeString())

const greet = () => {
  console.log('Hello')
}
const timer = setTimeout(greet, 3000) // -- 3秒後に実行

clearTimeout(timer) // -- 処理の解除

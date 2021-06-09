/*****
一定時間後に処理を行いたい
*****/

console.log('すぐに実行')

const sample01 = () => {
  console.log('1秒後')
}
setTimeout(sample01, 1000)

setTimeout(() => {
  console.log('3秒後')
}, 3000)

const sample02 = setTimeout(() => {
  console.log('5秒後')
}, 5000)

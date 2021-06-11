/*****
一定時間後の処理を解除したい
*****/

console.log('4秒後に実行します')

setTimeout(() => console.log('1秒経過'), 1000)
setTimeout(() => console.log('2秒経過'), 2000)

setTimeout(() => {
  console.log('実行は解除されました')
  clearTimeout(empty, 0)
}, 3000)

const empty = setTimeout(() => {
  console.log('実行されました')
}, 4000)

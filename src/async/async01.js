'use strict'

// -- ①非同期処理でPromiseを使用しない場合
console.log('Start')

setTimeout(() => {
  console.log('Now Loading')
}, 2000)

console.log('Finish')

/* 出力
Start
Finish
Now Loading -- 2秒後に出力
*/

/* ↓ 下の様に出力したい
Start
Now Loading -- 2秒後に出力
Finish
*/

// -- ②Promiseを使用する
const promise = () => {
  console.log('Start')
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Now Loading')
      resolve('Finish')
    }, 2000)
  }).then(msg => {
    console.log(msg)
  })
}

setTimeout(promise, 4000)

'use strict'

/* 期待する出力
Start
Now Loading
Finish
*/

// -- (1)非同期処理でPromiseを使用しない場合
console.log('----- 非同期処理でPromiseを使用しない場合')
console.log('Start')

setTimeout(() => {
  console.log('Now Loading')
}, 2000)

console.log('Finish')

/* 出力
Start
Finish
Now Loading <-- 遅れて出力される
*/

// -- (2)Promiseを使用した場合
const promise = () => {
  console.log('----- Promiseを使用した場合')
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

setTimeout(promise, 5000)

/* 出力
Start
Now Loading
Finish
*/

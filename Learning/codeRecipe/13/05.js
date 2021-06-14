/*****
非同期処理を行えるPromiseを使いたい
*****/

const promise = new Promise(resolve => {
  setTimeout(() => {
    resolve('Promiseを使用した非同期処理です')
  }, 1000)
}).then(value => {
  console.log(value)
})

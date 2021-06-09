/*****
非同期処理を行えるPromiseを使いたい
*****/

const promise = new Promise(resolve => {
  setTimeout(() => {
    resolve('Apple')
  }, 1000)
}).then(value => {
  console.log(value)
})

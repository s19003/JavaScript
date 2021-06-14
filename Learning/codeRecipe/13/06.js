/*****
Promiseで処理の成功時・失敗時の処理を行いたい
*****/

let flag = false

const promise = new Promise((resolve, reject) => {
  if (flag === true) {
    setTimeout(() => {
      resolve('Promise成功!!')
    }, 1000)
  } else {
    setTimeout(() => {
      reject('Promise失敗??')
    }, 1000)
  }
})
  .then(value => {
    console.log(value)
  })
  .catch(value => {
    console.log(value)
  })

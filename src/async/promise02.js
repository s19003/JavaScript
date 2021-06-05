'use strict'

/*****
Promiseとawait-asyncを比較する
同じ動きを比較した場合
*****/

// Promiseで定義した場合
const sample1 = () => {
  console.log('--- Start Sample1 ---')
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('Now Loading')
      resolve()
    }, 2000)
  }).then(() => {
    console.log('Finish')
  })
}

//
const sample2 = async () => {
  console.log('--- Start Sample2 ---')
  await new Promise(resolve => {
    setTimeout(() => {
      console.log('Now Loading')
      resolve()
    }, 2000)
  }).then(() => {
    console.log('Finish')
  })
}

const asyncStart = async () => {
  await sample1()
  await sample2()
}

asyncStart()

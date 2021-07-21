'use strict'

/*
  2つの整数の値の間のランダムな整数を得る
  Math.ceil()   - 切り上げ
  Math.floor()  - 切り捨て

  0 = 0.00 ~ 0.99
  1 = 1.00 ~ 1.99
  ...
*/
const getRandom = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)

  return Math.floor(Math.random() * (max - min + 1) + min)
}

let container = new Array()
const min = 0
const max = 99

for (let i = 0; i < 1000; i++) {
  container.push(getRandom(min, max))
}

/*
  Array.prototype.filter()
    - filter()メソッドは、与えられた関数によって合致する値を含む
      新しい配列を生成する
*/
const numCount = num => {
  let count = 0

  container.filter(value => {
    if (value == num) count++
  })
  return count
}

for (let i = 0; i <= max; i++) {
  let count = numCount(i)

  console.log(`${String(i).padStart(2, '0')} : ${count}`)
}

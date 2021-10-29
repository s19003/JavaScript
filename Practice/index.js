/**
 * 関数の概要
 * readLines()                --- 外部入力を配列にして返す
 * identity(value)            --- 入力値をそのまま返す
 * join(sep)(list)            --- 配列をsepで結合する
 * split(sep, [fun])(iter)    --- sepで分割しfunを適用して返す
 * slice(begin, [end])(iter)  --- イテレータをスライスして返す
 */

/**
 * 外部入力を配列にして返す
 */
const readLines = (file = '/dev/stdin') =>
  require('fs')
    .readFileSync(file)
    .toString()
    .trim()
    .split('\r\n')
    .map((v) => v.trim())
const readRow = (file = '/dev/stdin') =>
  require('fs')
    .readFileSync(file)
    .toString()
    .trim()
    .split('\r\n')
    .map((v) => v.split(' '))
    .map((v) => Array.from(v))
const identity = (value) => value
const join = (sep) => (list) => list.join(sep)
const split =
  (sep, fun = identity) =>
  (iter) =>
    Array.from(iter.split(sep), fun)
const slice = (begin, end) => (iter) => end === undefined ? iter.slice(begin) : iter.slice(begin, end)
const zip = (...arrays) => {
  const length = Math.min(...arrays.map((arr) => arr.length))
  return new Array(length).fill().map((_, i) => arrays.map((arr) => arr[i]))
}
const print = (fun) => (value) => console.log(fun(value))

const fun = (...args) => {
  const [N, ...arg] = args
  const zipArr = zip(...arg)

  let result = []
  result.push(zipArr[0][0])
  result.push(zipArr[1][N - 1])
  result.push(Math.max(...zipArr[2]))
  result.push(Math.min(...zipArr[3]))
  return result
}

const lines = readRow('data')
print(join(' '))(fun(...lines))

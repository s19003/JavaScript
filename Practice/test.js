const readLines = (file = '/dev/stdin') =>
  require('fs').readFileSync(file).toString().trim().split('\n')
const identity = (value) => value
const join = (sep) => (list) => list.join(sep)
const split =
  (sep, fun = identity) =>
  (iter) =>
    Array.from(iter.split(sep), fun)
const slice = (begin, end) => (iter) =>
  end === undefined ? iter.slice(begin) : iter.slice(begin, end)
const toInt = (s) => parseInt(s, 10)
const toStr = (s) => s.toString()
const toList = (fun) => (iter) => Array.from(iter, fun)
const print = (fun) => (value) => console.log(fun(value))

const readRow = (file = '/dev/stdin') =>
  require('fs')
    .readFileSync(file)
    .toString()
    .trim()
    .split('\n')
    .map((v) => v.trim())
    .map((v) => Array.of(v))
const readRows = (file = '/dev/stdin') =>
  require('fs')
    .readFileSync(file)
    .toString()
    .trim()
    .split('\n')
    .map((v) => v.trim())
    .map((v) => v.split(' '))
const zip = (...arrays) => {
  const min = Math.min(...arrays.map((arr) => arr.length))
  return Array(min)
    .fill()
    .map((_, i) => arrays.map((arr) => arr[i]))
}

const fun = (...args) => {
  return args
}

const lines = readLines()
print(identity)(fun(...lines))

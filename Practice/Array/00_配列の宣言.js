/**
 * 配列は値の集合を操作するためのオブジェクトです。
 * Arrayオブジェクトとも言います。
 */

// 配列リテラル[]で生成する
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array

let emptyArr = []
console.log(`配列リテラル:[${emptyArr}]`)

let stringArr = ['aaa', 'bbb', 'ccc']
console.log(`配列リテラル:${stringArr}`)

let numArr = [1, 2, 3]
console.log(`配列リテラル:${numArr}`)

const matrixArr = [
  ['a', 'b', 'c'],
  ['x', 'y', 'z']
]
console.log(`配列リテラル:${matrixArr}`)

// Array()コンストラクターで生成する
// The array literal notation [] is preferable. (no-array-constructor)
// 配列リテラル表記[]が推奨されます。(Arrayコンストラクタは非推奨)
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/Array
emptyArr = Array(3)
console.log(`Array():[${emptyArr}]`)

stringArr = Array('aaa', 'bbb', 'ccc')
console.log(`Array():${stringArr}`)

numArr = Array(1, 2, 3)
console.log(`Array():${numArr}`)

// Array.from()メソッドを使用する
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/from
emptyArr = Array.from([])
console.log(`Array.from():[${emptyArr}]`)

stringArr = Array.from('aaa')
console.log(`Array.from():${stringArr}`)

numArr = Array.from([1, 2, 3])
console.log(`Array.from():${numArr}`)

// Map関数を使用する
numArr = Array.from([1, 2, 3], (x) => x * x)
console.log(`Array.from():${numArr}`)

// Array.of()メソッドを使用する
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/of
emptyArr = Array.of()
console.log(`Array.of():[${emptyArr}]`)

stringArr = Array.of('aaa', 'bbb', 'ccc')
console.log(`Array.of():${stringArr}`)

numArr = Array.of(1, 2, 3)
console.log(`Array.of():${numArr}`)

// String.prototype.split()を使用して、
// 文字列の配列を生成する
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/split
emptyArr = ''.split()
console.log(`split():[${emptyArr}]`)

const str = 'Learning JavaScript is difficult'

const arrStr = str.split()
console.log(`split():[${arrStr}]`)

const arrWords = str.split(' ')
console.log(`split():${arrWords}`)

const arrChars = str.split('')
console.log(`split():${arrChars}`)

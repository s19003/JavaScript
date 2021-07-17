'use strict'

/**
 * 配列(Array)を作成する
 * 配列リテラル記法
 */
let arrays = ['Red', 'Blue', 'Green', 'Yellow', 'White']
console.log('\nArray\t: ' + arrays)

/**
 * 配列(Array)を作成する
 * Arrayコンストラクター
 */
let sample = new Array(5)

// ============================== プロパティ(property) ==============================
console.log('=============== プロパティ(property) ===============')

/**
 * 配列の要素数を取得する
 */
console.log('length\t: ' + arrays.length)

// ============================== メソッド(method) ==============================
console.log('=============== メソッド(method) ===============')

/**
 * 配列をコピーする
 */
let sliceArrays = arrays.slice()
console.log('slice\t: ' + sliceArrays)

/**
 * 配列の末尾に要素を追加する
 */
let pushArrays = arrays.slice()
pushArrays.push('Purple')
console.log('push\t: ' + pushArrays)

/**
 * 配列の先頭に要素を追加する
 */
let unshiftArrays = arrays.slice()
unshiftArrays.unshift('Purple')
console.log('unshift\t: ' + unshiftArrays)

/**
 * 配列の末尾の要素を削除する
 */
let popArrays = arrays.slice()
popArrays.pop()
console.log('pop\t: ' + popArrays)

/**
 * 配列の先頭の要素を削除する
 */
let shiftArrays = arrays.slice()
shiftArrays.shift()
console.log('shift\t: ' + shiftArrays)

/**
 * 要素のみを削除する
 */
let deleteArrays = arrays.slice()
delete deleteArrays[2]
console.log('delete\t: ' + deleteArrays)

/**
 * 他の配列と連結する
 */
let preArrays = arrays.slice()
let nextArrays = Array.from('ABCD')
let concatArrays = preArrays.concat(nextArrays)
console.log('concat\t: ' + concatArrays)

/**
 * 配列かどうか確認する
 */
console.log(Array.isArray(arrays))

'use strict'

// 配列を作成する array = [e1, e2, ...]
let arrays = [1, 2, 'A', 'B', 3]
console.log('\nArray\t: ' + arrays)

// 配列を作成する new Array() | new Array(n) | new Array(e1, e2, ...)
let newA = new Array()
let newB = new Array(5)
let newC = new Array('N', 'E', 'W')
console.log('new Array()\t: ' + newC)

// 配列を作成する Array.form(arrayLike [,mapFunc, [thisArg]])
let fromA = Array.from('FROM')
console.log('Array.from\t: ' + fromA)

let fromB = Array.from([1, 2, 3], x => x * 2)
console.log('Array.from+map\t: ' + fromB)

// 配列を作成する Array.of(e1, e2)
let ofA = Array.of(1, 2, 3)
console.log('Array.of\t: ' + ofA)

// ============================== プロパティ(property) ==============================
console.log('=============== プロパティ(property) ===============')

// 配列の長さを取得する
console.log('length\t: ' + arrays.length)

// ============================== メソッド(method) ==============================
console.log('=============== メソッド(method) ===============')

// 配列をコピーする
let sliceArrays = arrays.slice()
console.log('slice\t: ' + sliceArrays)

// start番目からend番目までの要素を抜き出す
sliceArrays = arrays.slice(2, arrays.length)
console.log('slice[2, length-1]\t: ' + sliceArrays)

// 配列の末尾に要素を追加する
let pushArrays = arrays.slice()
pushArrays.push('10')
console.log('push\t: ' + pushArrays)

// 配列の先頭に要素を追加する
let unshiftArrays = arrays.slice()
unshiftArrays.unshift('0')
console.log('unshift\t: ' + unshiftArrays)

// 配列の末尾の要素を削除する
let popArrays = arrays.slice()
popArrays.pop()
console.log('pop\t: ' + popArrays)

// 配列の先頭の要素を削除する
let shiftArrays = arrays.slice()
shiftArrays.shift()
console.log('shift\t: ' + shiftArrays)

// 要素のみを削除する
let deleteArrays = arrays.slice()
delete deleteArrays[2]
console.log('delete\t: ' + deleteArrays)

// 他の配列と連結する
let concatArrays = arrays.concat(Array.from('UEHR'))
console.log('concat\t: ' + concatArrays)

// 指定した値で連結した文字列を返す
let joinArrays = arrays.join('/')
console.log('join\t: ' + joinArrays)

// start番目からn個の要素を削除し、代わりの要素を埋め込む
let spliceArrays = arrays.slice()
spliceArrays.splice(1, 3, 'X', 'Y', 'Z')
console.log('splice\t: ' + spliceArrays)

// 逆順に並び替え
let reverseArrays = arrays.slice()
reverseArrays.reverse()
console.log('reverse\t: ' + reverseArrays)

// 昇順にソート
let ascArrays = arrays.slice()
ascArrays.sort()
console.log('ASC\t: ' + ascArrays)

// 降順にソート
let descArrays = arrays.slice()
descArrays.sort()
descArrays.reverse()
console.log('DESC\t: ' + descArrays)

// map()
let mapArrays = Array.of(1, 2, 3, 4, 5).map(value => {
  return value * 2
})
console.log('map\t: ' + mapArrays)

// 配列のループ for
let forArrays = arrays.slice()
for (let i = 0; i < forArrays.length; i++) {
  console.log('for-loop : ' + forArrays[i])
}

// 配列のループ forEach
let eachArrays = arrays.slice()
eachArrays.forEach(value => {
  console.log('forEach\t: ' + value)
})

// keyとvalueからなるイテレーターの取得 array.entries()
let entriesArrays = arrays.slice()
for (let elem of entriesArrays.entries()) {
  console.log('entries\t: ' + elem[0] + ':' + elem[1])
}

// keyのみからなるイテレーターの取得 array.keys()
let keysArrays = arrays.slice()
for (let key of keysArrays.keys()) {
  console.log('keys\t: ' + key)
}

// valueのみからなるイテレーターの取得 array.values()
let valuesArrays = arrays.slice()
for (let value of valuesArrays.values()) {
  console.log('values\t: ' + value)
}

/**
 * 配列かどうか確認する
 */
console.log(Array.isArray(arrays))

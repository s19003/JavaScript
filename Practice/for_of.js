/*
  for...of文
  【MDN】
  for...of文は、反復可能オブジェクト、例えば
  組み込みのString・Array・
  配列状オブジェクト(例えばargumentsやNodeList)・
  TypedArray・Map・Set・及びユーザー定義の反復可能オブジェクト
  などに対して、反復的な処理をするループを作成します。
  これはオブジェクトのそれぞれの識別可能なプロパティの値に対して、
  実行される文を表す独自の反復フックを呼び出します。
*/

/*
  Arrayでの反復処理
*/
let iterable = ['a', 'b', 'c']

for (const value of iterable) {
  console.log(value)
}

// expected output: 'a'
// expected output: 'b'
// expected output: 'c'

iterable = [10, 20, 30]

for (let value of iterable) {
  value++
  console.log(value)
}

// expected output: 11
// expected output: 21
// expected output: 31

/*
  Stringでの反復処理
*/
iterable = 'abc'

for (const value of iterable) {
  console.log(value)
}

// expected output: a
// expected output: b
// expected output: c

/*
  Mapでの反復処理
*/
iterable = new Map([['a', 1], ['b', 2], ['c', 3]])

for (const entry of iterable) {
  console.log(entry)
}

// expected output: ['a', 1]
// expected output: ['b', 2]
// expected output: ['c', 3]

for (const [key, value] of iterable) {
  console.log(`key=${key}, value=${value}`)
}

// expected output: key=a, value=1
// expected output: key=b, value=2
// expected output: key=c, value=3

/*
  Setでの反復処理
*/
iterable = new Set([1, 1, 2, 2, 3, 3])

for (const value of iterable) {
  console.log(value)
}

// expected output: 1
// expected output: 2
// expected output: 3

/*
  argumentsオブジェクトでの反復処理
*/
; (function () {
  for (const argument of arguments) {
    console.log(argument)
  }
})(1, 2, 3)

// expected output: 1
// expected output: 2
// expected output: 3

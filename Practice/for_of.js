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

/* 例 */
const array01 = ['a', 'b', 'c']

for (const element of array01) {
  console.log(element)
}

// expected output: 'a'
// expected output: 'b'
// expected output: 'c'

/* 例 : ブロック内で、変数が割り当てられる */
const array02 = [10, 20, 30]

for (let element of array02) {
  element++
  console.log(element)
}

// expected output: 11
// expected output: 21
// expected output: 31

/* 例 : argumentsオブジェクトでの反復処理 */
;(function () {
  for (const argument of arguments) {
    console.log(argument)
  }
})(1, 2, 3)

// expected output: 1
// expected output: 2
// expected output: 3

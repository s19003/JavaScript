'use strict'

// コード
const Main = input => {
  const [a, b] = input.split(' ')
  const ans = (a * b) % 2 ? 'Odd' : 'Even'
  console.log(ans)
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))

/*
入力
3 4
*/

/*
出力
>> Even
*/

/*
解説
a, bの積が偶数の場合'Even'、奇数の場合'Odd'を出力する
*/

'use strict'

// コード
const Main = input => {
  input = input.split('\n')

  const a = parseInt(input[0], 10)
  const [b, c, d] = input[1].split(' ').map(Number)
  const s = input[2]

  console.log('%d %s', a + b + c, s)
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))

/* 入力 */
/*
1
2 3
test
*/

/* 出力 */
/*
>> 6 test
*/

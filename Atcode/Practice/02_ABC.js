'use strict'

// コード
const Main = input => {
  // 例 101\n => [ '1', '0', '1' ]
  const s = input
    .split('')
    .filter(x => !(x === '\n'))
    .filter(e => e == '1')

  console.log(s.length)
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))

/*
入力
101
*/

/*
出力
>> 2
*/

/*
解説
1が書かれた場所を求める
*/

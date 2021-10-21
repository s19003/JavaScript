const strArr = ['aaa', 'bbb', 'ccc']

// 配列の要素数を取得する
console.log(`length:${strArr.length}`)

// 位置を使用してアクセスする
console.log(`配列[0]:${strArr[0]}`)
console.log(`配列[1]:${strArr[1]}`)
console.log(`配列[2]:${strArr[2]}`)

// ループで表示する
// for_of
for (const s of strArr) console.log(`for_of:${s}`)

// forEach
strArr.forEach((value, index, array) => {
  console.log(`forEach:${value} ${index}`)
})

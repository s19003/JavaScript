/*****
Promiseで並列処理をしたい
*****/

const arrayFunc = []

for (let i = 0; i < 5; i++) {
  const func = resolve => {
    console.log(`処理${i}を開始`, new Date().toLocaleTimeString())
    // 0~2秒の遅延を付ける
    const delay = 5000 * Math.random()

    setTimeout(() => {
      console.log(`処理${i}が完了`, new Date().toLocaleTimeString())
      resolve()
    }, delay)
  }

  arrayFunc.push(func)
}
console.log(arrayFunc)

// 全てのFunctionをPromiseFunctoinに変換する
const arrayPromise = arrayFunc.map(func => new Promise(func))
console.log(arrayPromise)

Promise.all(arrayPromise).then(() => {
  console.log('全ての処理が完了しました')
})

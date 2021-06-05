/*****
'async'とは
[ES 2017]Async Function
非同期関数を定義する関数宣言のことを指します。
Async Functionは通常の関数とは異なり、必ず'Promise'インスタンスを返す関数を定義します。

<重要>
・Async Functionは必ず'Promise'インスタンスを返す
・Async Funcionは'await'式が利用できる
*****/

// Sample01
const checkPromise = async () => {
  return 'OK'
}

checkPromise().then(value => {
  console.log(value) // 'OK'
})

/*****
Async FunctionはPromiseを返します。具体的には3つのケースが考えられます。

1.値をreturnした場合、その返り値を持つ'Fulfilled'なPromiseを返す。
2.Promiseをreturnした場合、その返り値のPromiseをそのまま返す。
3.例外が発生した場合、エラーを持つ'Rejected'なPromiseを返す。
*****/

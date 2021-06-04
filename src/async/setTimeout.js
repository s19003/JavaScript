console.log('1番目に表示')

setTimeout(() => {
  console.log('3番目に表示')
}, 100)

const greet = () => {
  console.log('2番目に表示')
}
greet()

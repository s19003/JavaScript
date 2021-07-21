const tester = async () => {
  new Promise(resolve => {
    let answer = 0

    const readline = await  require('readline').createInterface({
      input: process.stdin
    })

    readline.question('', answer => {
      resolve()
    })
  })
}

const main = async () => {
  console.log('Hello')

  const test = await tester()

  console.log('OK')
}

main()

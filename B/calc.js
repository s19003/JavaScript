'use strict'

const opeRandom = () => {
  const operations = ['+', '-', '*']
  return operations[Math.floor(Math.random() * operations.length)]
}

const numRandom = () => {
  const min = 0
  const max = 99
  let container = new Array()

  for (let i = 0; i < 5; i++) {
    container.push(Math.floor(Math.random() * (max - min + 1) + min))
  }

  return container
}

const calcAnswer = (num, ope) => {
  return new Function(`return ${num[0]} ${ope} ${num[1]}`)()
}

const readInput = () => {
  return new Promise(resolve => {
    let answer = 0

    process.stdin.resume()
    process.stdin.setEncoding('utf8')

    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    })

    readline.question('', answer => {
      if (!isNaN(answer)) {
        readline.close()
      }
    })

    resolve(answer)
  })
}

const main = async () => {
  let num = numRandom()
  let ope = opeRandom()
  let correct = calcAnswer(num, ope)
  let strExpression = `${num[0]} ${ope} ${num[1]}`
  let answer = 0

  const test = await readInput()

  console.log('NG')
}

main()

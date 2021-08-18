'use strict'

const readline = require('readline')
process.stdin.resume()
process.stdin.setEncoding('utf-8')

let lines = []
let reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

reader.on('line', line => {
  const split = line.split(' ')

  for (let i = 0; i < split.length; i++) {
    lines.push(split[i])
  }
})

reader.on('close', () => {
  // for (let i = 0; i < lines.length; i++) {
  //   console.log(lines[i])
  // }

  console.log(lines)
})

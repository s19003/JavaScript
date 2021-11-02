const http = require('http')
const server = http.createServer()

server.on('request', (req, res) => {
  require('fs').readFile('dist/index.html', 'utf-8', (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' })
      res.write('page not found')
      return res.end()
    }

    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write(data)
    return res.end()
  })
})

server.listen(3000)

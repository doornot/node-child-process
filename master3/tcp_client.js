const net = require('net')
const maxConnection = 10

for(let i = 0; i < maxConnection; i++) {
  net.createConnection({
    port: 8989,
    host: '127.0.0.1'
  }).on('data', data => {
    console.log(data.toString())
  })
}
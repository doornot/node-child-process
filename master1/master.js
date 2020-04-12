// master实现对worker的请求进行分发

const child = require('child_process')
const net = require('net')

const cpuNum = require('os').cpus().length

let workers = []
let current = 0

for(let i = 0; i < cpuNum; i++) {
  workers.push(child.fork('./worker.js'))
  console.log('worker process ', workers[i].pid)
}

const tcpServer = net.createServer()

tcpServer.listen('8989', () => {
  console.log('Tcp server: 127.0.0.1:8989')
})

tcpServer.on('connection', (socket) => {
  workers[current].send('socket', socket)
  current = Number.parseInt((current + 1) % cpuNum)
})
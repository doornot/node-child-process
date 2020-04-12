// 实现进程重启

const child = require('child_process')
const net = require('net')

const cpuNum = require('os').cpus().length

let workers = []

for(let i = 0; i < cpuNum; i++) {
  workers.push(child.fork('./worker.js'))
  console.log('worker process ', workers[i].pid)
}

const tcpServer = net.createServer()

tcpServer.listen('8989', () => {
  console.log('Tcp server: 127.0.0.1:8989')
  for(let i = 0; i < cpuNum; i++) {
    workers[i].send('tcpServer', tcpServer)
    workers[i].on('exit', ((i) => {
      return () => {
        console.log('worker-', + workers[i].pid + ' exited')
        workers[i] = child.fork('./worker.js')
        console.log('create worker-', + workers[i].pid)
        workers[i].send('tcpServer', tcpServer)
      }
    })(i))
  }
})

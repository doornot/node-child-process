// 使用cluster模块实现多进程服务充分利用我们的cpu资源

const cluster = require('cluster')
if (cluster.isMaster) {
  const cpuNum = require('os').cpus().length
  for (let i = 0; i < cpuNum; i++) {
    cluster.fork()
  }

  cluster.on('online', worker => {
    console.log('create worker ' + worker.process.pid)
  })

  cluster.on('exit', (worker, code, signal) => {
    console.log('[master] worker ' + worker.process.pid + ' died with code ' + code + ' and signal ' + signal)
    cluster.fork()
  })
} else {
  const net = require('net')
  net.createServer().on('connection', socket => {
    // setTimeout模拟异步
    setTimeout(() => {
      socket.end('request handled by worker ' + process.pid)
    }, 300)
  }).listen(8989)
}
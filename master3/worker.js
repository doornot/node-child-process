process.on('message', (msg, tcpServer) => {
  if (msg === 'tcpServer' && tcpServer) {
    tcpServer.on('connection', (socket) => {
      if (socket) {
        // setTimeout模拟异步
        setTimeout(() => {
          socket.end('request handled by worker ' + process.pid)
        }, 300)
      }
    })
  }
})

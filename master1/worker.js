process.on('message', (msg, socket) => {
  if (msg === 'socket' && socket) {
    // setTimeout模拟异步
    setTimeout(() => {
      socket.end('request handled by worker ' + process.pid)
    }, 300)
  }
})

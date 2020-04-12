// console.log(`Worker-${process.pid}: hello world`)

process.on('message', (msg) => {
  console.log('received msg from master: ' + msg)
  process.send('Hi master')
})
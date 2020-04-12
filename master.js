// const child = require('child_process')
// const cpuNum = require('os').cpus().length

// for(let i = 0; i < cpuNum; i++) {
//   child.fork('./worker.js')
// }

// console.log('Master: xxx')

const child = require('child_process')
const worker = child.fork('./worker.js')

worker.send('hello~')

worker.on('message', (msg) => {
  console.log('receive msg from worker ' + msg)
})
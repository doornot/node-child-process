const { spawn } = require('child_process')
// const child = spawn('pwd')
const child = spawn('find', ['.', '-type', 'f'])

child.on('exit', (code ,signal) => {
  console.log(`code: ${code}, signal: ${signal}`)
})

child.stdout.on('data', (data) => {
  console.log(`child stdout: \n${data}`)
})

child.stderr.on('data', (data) => {
  console.log(`child stderr: \n${data}`)
})

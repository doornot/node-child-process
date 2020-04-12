const { spawn } = require('child_process')
const child = spawn('wc')

process.stdin.pipe(child.stdin)

child.on('exit', (code ,signal) => {
  console.log(`code: ${code}, signal: ${signal}`)
})

child.stdout.on('data', (data) => {
  console.log(`child stdout: \n${data}`)
})

child.stderr.on('data', (data) => {
  console.log(`child stderr: \n${data}`)
})

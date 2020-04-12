// const { spawn } = require('child_process')

// const wc = spawn('wc', ['-l'])
// const find = spawn('find', ['.', '-type', 'f'])

// find.stdout.pipe(wc.stdin)

// wc.stdout.on('data', (data) => {
//   console.log(`wc stdout: \n${data}`)
// })

// find.stdout.on('data', (data) => {
//   console.log(`find stdout: \n ${data}`)
// })

const { spawn } = require('child_process');

const find = spawn('find', ['.', '-type', 'f']);
const wc = spawn('wc', ['-l']);

find.stdout.pipe(wc.stdin);

wc.stdout.on('data', (data) => {
  console.log(`Number of files ${data}`);
});
wc.stderr.on('data', (data) => {
  console.log(`111 Number of files ${data}`);
});
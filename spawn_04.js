const { spawn } = require('child_process');

const child = spawn('find . -type f', {
  stdio: 'inherit',
  shell: true,
  cwd: '/Users/wangbiao/Desktop/node-child-process-example',
});


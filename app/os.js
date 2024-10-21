const os = require('os');

console.log('Operating System:', os.platform());
console.log('Hostname:', os.hostname());
console.log('Number of CPUs:', os.cpus().length);
console.log('Free Memory:', os.freemem() / (1024 * 1024) + ' MB');
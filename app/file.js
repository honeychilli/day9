const path = require('path');

const filePath = 'C:\Users\pandey\Downloads\day9\text.txt';

console.log('Joined Path:', path.join('directory', 'text.txt'));
console.log('Directory Name:', path.dirname(filePath));
console.log('Base Name:', path.basename(filePath));
console.log('Extension:', path.extname(filePath));
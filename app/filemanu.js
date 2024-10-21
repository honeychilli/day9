const fs = require('fs');

fs.readFile('text.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

fs.writeFile('new_file.txt', 'Hello, World!', (err) => {
  if (err) throw err;
  console.log('File written successfully');
});

fs.mkdir('new_directory', (err) => {
  if (err) throw err;
  console.log('Directory created');
});

fs.readdir('directory', (err, files) => {
  if (err) throw err;
  console.log(files);
});
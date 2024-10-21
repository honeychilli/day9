// const http = require('http');
// const server = http.createServer(); 
// const port = 8000;

// server.listen(port);
// server.on('connection', (socket) => {
//   console.log('new connection');
// });
// console.log(`server is running on port ${port}`);


const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  if (pathname === '/') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Welcome to the homepage\n');
  } else if (pathname === '/about') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('This is the about page\n');
  } else if (pathname === '/contact') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Get in touch with us\n');
  }else if (req.url === '/api/user') {
    const userData = {
      name: 'Arpit',
      id: 1,
      phoneNumber: '999999999'
    };
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(userData));
      
  }
   else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('404: Page not found\n');
  }
});

const port = 8000;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
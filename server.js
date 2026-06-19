const http = require('http');
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('Hello World');
});

// add about route
server.on('request', (req, res) => {
  if (req.url === 'about') {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('About Page');
  }
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
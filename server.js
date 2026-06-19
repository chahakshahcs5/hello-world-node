const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/about') {
    res.writeHead(200, {
      'Content-Type': 'text/plain; charset=utf-8',
    });

    return res.end('About Page');
  }

  res.writeHead(200, {
    'Content-Type': 'text/plain; charset=utf-8',
  });

  res.end('Hello World');
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
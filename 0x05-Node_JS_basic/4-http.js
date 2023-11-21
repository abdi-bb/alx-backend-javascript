const http = require('http');

const app = http.createServer((req, res) => {
  res.end('Hello Holberton School!');
});

const PORT = 1245;

app.listen((PORT), () => {
  console.log(`Server running on port ${PORT}...`);
});

module.exports = app;

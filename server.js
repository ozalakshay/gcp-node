// server.js
const http = require('http');
const port = 8080;

const requestHandler = (req, res) => {
  res.end('Hello from Node.js App on Compute Engine!');
};

const server = http.createServer(requestHandler);
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

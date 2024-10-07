const http = require('http');
const routes = require('./routes');

console.log(routes.someText);

const server = http.createServer(routes.handler);

server.listen(8000, () => {
  console.log('Server is running on port 8000');
});

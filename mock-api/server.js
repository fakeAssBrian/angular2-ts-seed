const jsonServer = require('json-server');
const generateDb = require('./db');

const server = jsonServer.create();
const router = jsonServer.router(generateDb());
const middlewares = jsonServer.defaults();

const port = process.argv[2] || 3001;

server.use(middlewares);
server.use(router);
server.listen(port, () => {
  console.log(`JSON Server is running on ${port}`)
});

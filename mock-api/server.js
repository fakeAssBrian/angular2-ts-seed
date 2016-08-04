import jsonServer from 'json-server';
import generateDb  from './db';
import { timestampMiddleware, authMiddleware } from './middlewares';

const server = jsonServer.create();
const router = jsonServer.router(generateDb());
const middlewares = jsonServer.defaults();
const port = process.argv[2] || 3001;

server.use(middlewares);
server.use(timestampMiddleware);
server.use('/todos',authMiddleware);

server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running on ${port}`)
});

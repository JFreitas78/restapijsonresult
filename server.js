// server.js
const jsonServer = require('json-server');
const server = jsonServer.create();
//const path = require('path');
//const router = jsonServer.router(path.join(__dirname,'Db301220.json'));
const router = jsonServer.router('Db301220.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080;

server.use(middlewares);
server.use(router);
server.listen(port, () => {
    console.log(`Json server is running in ${port}`);
});
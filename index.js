
const jsonServer = require('json-server');

const dr_Server = jsonServer.create();

const router = jsonServer.router('db.json');

const middleware = jsonServer.defaults();

const port = 3001;

dr_Server.use(middleware);
dr_Server.use(router);

dr_Server.listen(port,()=>{
    console.log('hospital server is listening to port' + port);
})

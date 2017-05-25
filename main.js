"use strict";
<<<<<<< HEAD
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const App_1 = require("./App");
const port = 3000;
App_1.default.set('port', port);
//create a server and pass our Express app to it.
const server = http.createServer(App_1.default);
server.listen(port);
server.on('listening', onListening);
//function to note that Express is listening
function onListening() {
    console.log(`Listening on port ` + port);
=======
const http = require("http");
const App_1 = require("./App");
const port = normalizePort(process.env.PORT || 3000);
App_1.default.set('port', port);
const server = http.createServer(App_1.default);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
function normalizePort(val) {
    let port = (typeof val === 'string') ? parseInt(val, 10) : val;
    if (isNaN(port))
        return val;
    else if (port >= 0)
        return port;
    else
        return false;
}
function onError(error) {
    if (error.syscall !== 'listen')
        throw error;
    let bind = (typeof port === 'string') ? 'Pipe ' + port : 'Port ' + port;
    switch (error.code) {
        case 'EACCES':
            console.error(`${bind} requires elevated privileges`);
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(`${bind} is already in use`);
            process.exit(1);
            break;
        default:
            throw error;
    }
}
function onListening() {
    let addr = server.address();
    let bind = (typeof addr === 'string') ? `pipe ${addr}` : `port ${addr.port}`;
    console.log(`Listening on ${bind}`);
>>>>>>> e0f594ba23c5ea2bf922aaf6a61939ab39981adc
}

import http from 'http';
import config from '../core/config';

import Socket from './socket_io';
import Express from './express';

class Server {

    constructor() {
        this.port = config.serverPort;
    }

    configureSocket(server) {
        let socket = new Socket;
        socket.configure(server);
    }

    listen() {

        const app = new Express;
        const express =  app.init();
        const server = http.createServer(express);
        this.configureSocket(server);

        server.listen (this.port, () => {
            console.log (`Server is running on port ${this.port}`)
        })
    }
}

const server = new Server;
server.listen();

export default server;


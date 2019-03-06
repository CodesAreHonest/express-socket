import http from 'http';
import config from '../core/config';

import Socket from './socket';
import Express from './express';

import SecureServer from './secure_server';

class Server {

    constructor() {
        this.port = config.serverPort;
    }

    configureSocket(server) {
        let socket = new Socket;
        let io = socket.configure(server);

        return io;
    }

    listen() {

        const app = new Express;
        const express =  app.init();
        const server = http.createServer(express);
        const io = this.configureSocket(server);
        
        app.setSocket(io);
        
        server.listen (this.port, () => {
            console.log (`Server is running on port ${this.port}`)
        })
    }
}

// const server = new Server;
// server.listen();

const secureServer = new SecureServer;
secureServer.listen();

export default secureServer;


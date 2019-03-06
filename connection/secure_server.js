import https from 'https';
import config from '../core/config';

import fs from 'fs';
import path from 'path';

import Socket from './socket';
import Express from './express';

class SecureServer {

    constructor() {
        this.port = config.secureServerPort;
    }

    configureSocket(server) {
        let socket = new Socket;
        let io = socket.configure(server);

        return io;
    }

    readCert() {
        let options = {
            key: fs.readFileSync(path.resolve('./cert/server.key')),
            cert: fs.readFileSync(path.resolve('./cert/server.crt')),
        }

        return options;
    }

    listen() {

        const app = new Express;
        const express =  app.init();
        const options = this.readCert();
        const server = https.createServer(options, express);
        const io = this.configureSocket(server);
        
        app.setSocket(io);
        
        server.listen (this.port, () => {
            console.log (`Secure Server is running on port ${this.port}`)
        })
    }
}

export default SecureServer;
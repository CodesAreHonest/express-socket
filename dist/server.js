import http from 'http';
import app from './app.js';
import config from '../core/config';

const {serverPort: port} = config;
const server = http.createServer(app);

server.listen(port, () => {
    console.log (`Server is running on port ${port}`)
})
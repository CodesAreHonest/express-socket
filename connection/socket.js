import socket from 'socket.io';

class Socket {

    constructor() {}

    configure(server) {
        const io = socket(server);

        // io.on ('connection', (socket) => {
        //     console.log ('A User is connected');
        // })

        return io;
    }
}

export default Socket;
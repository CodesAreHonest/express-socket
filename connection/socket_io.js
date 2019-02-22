import socket from 'socket.io';

class Socket {

    constructor() {}

    configure(server) {
        const io = socket(server);

        io.on ('connection', (socket) => {
            socket.on ('testing', () => {
                socket.emit('testing', {data: 'this is something'})
            })
        })

        return io;
    }
}

export default Socket;
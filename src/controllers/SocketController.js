import socket from 'socket.io';
import server from '../../connection/server';

const io = socket(server);
const controller = {};

controller.socketPush = (req, res) => {

    io.on('connection', (socket) => {
        socket.on('testing', () => {
            console.log (req.body);
            socket.emit ('testing', req.body);
        })
    })

    res.json ({status: 'success'});
}

export default controller;
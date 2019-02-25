import socket from 'socket.io';
import server from '../../connection/server';

const io = socket(server);
const controller = {};

controller.socketPush = (req, res) => {

    let io = req.app.get('socketio');
    io.emit('testing', {data: 'This is Something'});

    res.json ({status: 'success'});
}

export default controller;
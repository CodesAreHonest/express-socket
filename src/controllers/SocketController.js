import socket from 'socket.io';
import server from '../../connection/server';
import {getValidationResult} from 'express-validator/check';
import {validationHandler} from '../validation/ValidationHelper';

const controller = {};

controller.socketPush = (req, res) => {

    req.getValidationResult()
    .then (validationHandler(res))
    .then (result => {

        let io = req.app.get('socketio');

        const {sentence} = req.body;
        
        io.emit('testing', {data: sentence});
        
        res.json ({status: sentence});
    })
}

export default controller;
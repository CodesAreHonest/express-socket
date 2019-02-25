import socket from 'socket.io';
import server from '../../connection/server';
import {getValidationResult} from 'express-validator/check';
import {validationHandler} from '../validation/ValidationHelper';

const controller = {};

controller.socketPush = async (req, res) => {

    let testing = await req.getValidationResult()
    .then(validationHandler(req, res))
    .then (result  => {
        console.log(result.header().statusCode);
    })

    console.log (testing);

    // let io = req.app.get('socketio');
        
    // io.emit('testing', {data: req.body});
        
    // res.json ({status: req.body});
}

export default controller;
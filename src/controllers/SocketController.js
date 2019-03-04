import {validationHandler} from '../validation/ValidationHelper';

const controller = {};

controller.socketPush = async (req, res) => {

    // Body and Header Validation 
    let validation_response = await validationHandler(req, res);

    if (validation_response.response_code === 422) {
        return res.status(422).send(validation_response);
    }

    let io = req.app.get('socketio');
        
    await io.emit('testing', {data: req.body});
            
    res.status(200).send ({
        response_code: 200,
        response_msg: 'success',
        response_data: req.body
    });  
}

export default controller;
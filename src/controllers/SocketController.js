import {validationHandler} from '../validation/ValidationHelper';

const controller = {};

controller.socketPush = async (req, res) => {

    // Body and Header Validation 
    let validation_response = await validationHandler(req, res);

    if (validation_response.response_code === 422) {
        return res.status(422).send(validation_response);
    }

    const io = req.app.get('socketio');
    const {market, params} = req.body;
    const event_code = req.app.get('event_code');
    const string = `${event_code}@${market}-channel`; 
        
    await io.emit(string, params);
            
    res.status(200).send ({
        response_code: 200,
        response_msg: 'success',
        received_body: req.body
    });  
}

export default controller;
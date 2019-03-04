import Action from '../models/Action';

class Authentication {

    constructor() {}

    init() {
        const authentication = (req, res, next) => {

            const apiKey = req.get('x-authorization');

            this.verification(apiKey).then(result => {
                req.app.set('event_code', result['event_code']) 
                next();

            }).catch(err => {
                return res.status(422).send(err);
            })
        };

        return authentication;
    }

    verification(apikey) {

        return new Promise ((resolve, reject) => {
            Action.findOne({apikey}, (err, result) => {

                if (err) { return reject(err); }
                
                if (result === null) {
                    return reject({
                        'response_code' : 422,
                        'response_msg'  : 'Invalid API Key.',
                    })
                }
    
                const {event_code} = result;
    
                return resolve({
                    'response_code' : 200,
                    'response_msg'  : 'success',
                    'event_code'    : event_code
                })
            })
        });
    }
}

export default Authentication;
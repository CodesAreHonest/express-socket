import Action from '../models/Action';

class Authentication {

    constructor() {}

    init() {
        const authentication = async (req, res, next) => {

            const apiKey = req.get('x-authorization');

            const verification =  await this.verification(apiKey);
            console.log (verification);

            if (verification['response_code'] !== 422) {
                res.status(422).send (verification['response_data']);
            }

            req.app.set('event_code', verification['event_code'])

            next();
        };

        return authentication;
    }

    verification(apikey) {

        Action.findOne({apikey}, (err, result) => {
            if (err)  {
                return {
                    'response_code' : 422,
                    'response_msg'  : 'Invalid API Key.',
                    'response_data' : err
                }
            }

            const {event_code} = result;

            return {
                'response_code' : 200,
                'response_msg'  : 'success',
                'event_code'    : event_code
            }
        });
    }
}

export default Authentication;
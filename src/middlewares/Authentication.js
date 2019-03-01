import Action from '../models/Action';

class Authentication {

    constructor() {}

    init() {
        const authentication = (req, res, next) => {

            const apiKey = req.get('x-authorization');

            this.verification(apiKey);

            next();
        };

        return authentication;
    }

    verification(apikey) {

        Action.find({apikey}, (err, result) => {
            if (err) {
                console.log (`error ${err}`);
            } else {
                console.log (`success ${result}`);
            }
        });
    }
}

export default Authentication;
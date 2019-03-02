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

        Action.find({apikey: "781d72e1aa8deaecf0f4a9d0433480b1"})
        .exec((err, result) => {
            console.log (err);
            console.log (result);

        });
    }
}

export default Authentication;
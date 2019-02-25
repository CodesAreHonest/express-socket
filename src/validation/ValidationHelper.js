
import {validationResult} from 'express-validator/check';

export const validationHandler = (req, res, next) => (resolve, reject) => {

    const errorFormatter = ({
        location, msg, param
    }) => {
        return `[${location}]: ${param} ${msg}`;
    }

    const result = validationResult(req).formatWith(errorFormatter);

    if (result.isEmpty()) { return }

    if (!next) {
        
        res.status(422).send({
            response_code: 422,
            response_msg: 'Unprocessable Entity',
            response_detail: result.array()
        });
    }
}
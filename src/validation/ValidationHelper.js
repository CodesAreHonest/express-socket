
import {validationResult} from 'express-validator/check';

export const validationHandler = (req, res, next) => {

    const errorFormatter = ({
        location, msg, param
    }) => {
        return `[${location}]: ${param} ${msg}`;
    }

    const result = validationResult(req).formatWith(errorFormatter);

    if (result.isEmpty()) {
        return {
            response_code: 200,
            response_msg: "Validation Success"
        }
    }

    if (!next) {
        return {
            response_code: 422,
            response_msg: 'Unprocessable Entity',
            response_detail: result.array()
        };
    }
}
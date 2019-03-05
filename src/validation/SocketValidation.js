import {body, header} from 'express-validator/check';

export const pushValidation = [

    header('X-Authorization')
    .exists().withMessage('is required')
    .isString().withMessage('must be a string'),

    body('params')
    .exists().withMessage('is required')
    .isJSON().withMessage('must be in JSON format. '),

    body('market')
    .exists().withMessage('is required')
    .isString().withMessage('must be a string ')
];
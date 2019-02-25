import {body} from 'express-validator/check';

export const pushValidation = [
    body('params')
    .exists().withMessage('is required')
    .isJSON().withMessage('must be in JSON format. '),
    
    body('project_code')
    .exists().withMessage('is required')
    .isString().withMessage('must be a string ')
    .isUppercase().withMessage('must be uppercase '),

    body('market')
    .exists().withMessage('is required')
    .isString().withMessage('must be a string '),

    body('event_code')
    .exists().withMessage('is required')
    .isString().withMessage('must be a string ')
    .isLowercase().withMessage('must be lowercase'),
];
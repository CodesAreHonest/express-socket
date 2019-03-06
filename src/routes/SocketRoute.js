import express from 'express';
import controller from '../../src/controllers/SocketController';

import {pushValidation} from '../validation/SocketValidation';

const router = express.Router();
const {socketPush, getStatus} = controller;

router.post('/push', pushValidation, socketPush);
router.get('/', getStatus);

export default router;
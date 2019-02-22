import express from 'express';
import controller from '../../src/controllers/SocketController';

const router = express.Router();
const {socketPush} = controller;

router.post('/push', socketPush);

export default router;
"use strict";

import 'babel-polyfill';

import express from 'express';
import bodyParser from 'body-parser';
import route from '../src/routes/SocketRoute';
import cors from 'cors';

class Express {

    constructor() {
        this.app = express();
    }

    init(io) {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: true}));
        this.app.use(cors());
        this.app.use('/', route);

        return this.app;
    }

    listen(port) {
        this.app.listen(port);
    }
}

export default Express;
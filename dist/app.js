"use strict";

import 'babel-polyfill';

import express from 'express';
import bodyParser from 'body-parser';
import route from '../src/routes/SocketRoute';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.use('/', route);

export default app;
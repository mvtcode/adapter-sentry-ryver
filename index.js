'use strict';

/**
 * Adapter notification sentry - ryver
 * Author: tanmv
 * Date: 2019-10-29
 */

const axios = require('axios');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
// const moment = require('moment');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan('dev'));

const router = express.Router();

router.post('/webhook', async (req, res) => {
	console.log(req.body);
	res.status(200).send('ok');
});

app.use('/', router);

const server = app.listen(6000, '127.0.0.1', () => {
	const {address, port} = server.address();
	console.log(`Server listening at: http://${address}:${port}`);
});
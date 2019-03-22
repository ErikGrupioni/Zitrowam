const express = require('express');

const routes = express.Router();

const WmsgController = require('./controllers/WmsgController');

routes.get('/wmsgs',WmsgController.index);
routes.post('/wmsgs',WmsgController.store);

module.exports = routes;
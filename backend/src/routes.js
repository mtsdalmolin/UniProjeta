const express = require('express');
const WrapperController = require('./controllers/WrapperController');
const OrgController = require('./controllers/OrgController');

const routes = express.Router();

// routes.post('/orgs', OrgController.store);

routes.get('/wrapper', WrapperController.index);

routes.post('/saveWrapper', WrapperController.store);

module.exports = routes;
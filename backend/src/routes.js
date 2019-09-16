const express = require('express');
const WrapperController = require('./controllers/WrapperController');
const OrgController = require('./controllers/OrgController');

const routes = express.Router();

routes.get('/wrapper', WrapperController.index);
routes.post('/saveWrapper', WrapperController.store);

routes.get('/orgs', OrgController.index);

module.exports = routes;
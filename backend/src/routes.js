const express = require('express');
const WrapperController = require('./controllers/WrapperController');
const OrgController = require('./controllers/OrgController');
const UniversityController = require('./controllers/UniversityController');

const routes = express.Router();

routes.get('/wrapper', WrapperController.index);
routes.get('/saveWrapper', WrapperController.store);

routes.get('/orgs', OrgController.index);
routes.get('/orgs/:universityId/dashboard', UniversityController.index);

module.exports = routes;
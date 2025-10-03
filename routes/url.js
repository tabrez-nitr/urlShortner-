const routes = require('express').Router();
const { handelCreateShorturl , handelRedirectShorturl } = require('../controller/url');


routes.get('/:shortUrl' , handelRedirectShorturl);

routes.post('/' , handelCreateShorturl);


module.exports = routes;


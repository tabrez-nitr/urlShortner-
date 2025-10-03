const routes = require('express').Router();
const { handelCreateShorturl , handelRedirectShorturl , handelGiveAllUrls } = require('../controller/url');


// to get all urls 
routes.get('/' , handelGiveAllUrls);


// to redirect short url to original url
routes.get('/url:shortUrl' , handelRedirectShorturl);


// to create short url
routes.post('/url' , handelCreateShorturl);


module.exports = routes;


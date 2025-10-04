import express from 'express';
import { handelCreateShorturl, handelRedirectShorturl, handelGiveAllUrls } from '../controller/url.js';

const routes = express.Router();


// to get all urls 
routes.get('/' , handelGiveAllUrls);


// to redirect short url to original url
routes.get('/url:shortUrl' , handelRedirectShorturl);


// to create short url
routes.post('/url' , handelCreateShorturl);

export default routes;


const Url = require('../models/url');
const ids = require('short-id');
const path = require('path');
const express = require('express');



ids.configure({
    length: 6,          // The length of the id strings to generate
    algorithm: 'sha1',  // The hashing algoritm to use in generating keys
    salt: Math.random   // A salt value or function
});





//render all urls 
async function handelGiveAllUrls(req , res) {
    const urls = await Url.find()
    return res.render('home' , { urls : urls } )
}

// create a short url 
async function handelCreateShorturl (req , res){
     const originalUrl = req.body.originalUrl;
    const newUrl = ids.generate();
    await Url.create({
        originalUrl : originalUrl,
        shortUrl : newUrl,
        visitTrack : []
    })
    return res.render ('home' , { id : newUrl})
    // return res.json({ newUrl : newUrl})
} 



// redirect to original url
async function handelRedirectShorturl (req , res){
 const shortUrl = req.params.shortUrl;
    const url = await Url.findOneAndUpdate({ shortUrl : shortUrl},{ $push : { visitTrack : new Date().toISOString() }});

    if(!url){
        return res.status(404).json({ error : "No url found"});
    }
    return res.redirect(url.originalUrl);
    
} 

module.exports = { handelCreateShorturl , handelRedirectShorturl  , handelGiveAllUrls};

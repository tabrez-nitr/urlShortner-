const express = require('express');
const { connectDB} = require('./views/db');
const routes = require('./routes/url');
const path = require('path');


const app = express();
const port = 8000;

//set view engine 
app.set('view engine' , 'ejs');
app.set('views' , path.resolve('./views'))


//middleware to handle form data 
app.use(express.urlencoded({extended: true}));
app.use(express.json());  // for JSON data



//set up server 
app.listen(port , ()=> console.log(`server is live ${port}`))

// connection to db 
connectDB("mongodb://127.0.0.1:27017/url_shortner");
 

//routes
app.use('/' , routes);


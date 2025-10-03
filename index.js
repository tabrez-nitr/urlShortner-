const express = require('express');
const { connectDB} = require('./views/db');
const routes = require('./routes/url');


const app = express();
const port = 8000;

//middleware to handle form data 
app.use(express.urlencoded({extended: false}));



//set up server 
app.listen(port , ()=> console.log(`server is live ${port}`))

// connection to db 
connectDB("mongodb://127.0.0.1:27017/url_shortner");
 

//routes
app.use('/' , routes);


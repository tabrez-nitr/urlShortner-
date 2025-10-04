import express from 'express';
import { connectDB } from './views/db.js';
import routes from './routes/url.js';
import path from 'path';
import userRouter from './routes/user.js';
import cookieParser from 'cookie-parser' ;
import restrictToLoggedinUserOnly from './midlewares/auth.js';

const app = express();
const port = 8000;

//set view engine 
app.set('view engine' , 'ejs');
app.set('views' , path.resolve('./views'))


app.use(cookieParser());
//middleware to handle form data 
app.use(express.urlencoded({extended: true}));
app.use(express.json());  // for JSON data



//set up server 
app.listen(port , ()=> console.log(`server is live ${port}`))

// connection to db 
connectDB("mongodb://127.0.0.1:27017/url_shortner");
 

//routes

app.use('/user' , userRouter);
app.use('/' , restrictToLoggedinUserOnly ,routes);


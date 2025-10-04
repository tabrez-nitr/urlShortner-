import express from 'express';
import User from '../models/user.js';
import { v4 as uuidv4 } from 'uuid';
import { setUser } from '../service/auth.js';


async function handelNewUser(req, res){

    return res.render('singUp')
}


async function handelCreateNewUser(req , res ){
    const { name , email , password } = req.body
    await User.create({
        name , 
        email, 
        password
    })
    return res.status(200).json({ message : "user created Successfully"})
}



async function handelUserLogin(req , res ){
    const { email , password } = req.body;
    const user =  await User.findOne({ email , password })
    if(!user){
        return res.render('login' , {
            error : "Invalid email or password"
        })
    }
    // genrate id for session 
    const sessionId = uuidv4();
    setUser(sessionId , user);
    // set cookie 
    res.cookie('sessionId' , sessionId);

    return res.render('home')

}


export  { handelNewUser,
    handelCreateNewUser,
    handelUserLogin
}
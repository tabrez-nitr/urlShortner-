import { getUser } from "../service/auth.js"


async function restrictToLoggedinUserOnly (req , res , next){
    const { sessionId } = req.cookies;
    if(!sessionId) {
        return res.redirect('/user/loginPage')
    }


    const user = getUser(sessionId);
    if(!user){
        return res.redirect('/user/loginPage')
    }
    req.user = user; 
    next();
}

export default restrictToLoggedinUserOnly;
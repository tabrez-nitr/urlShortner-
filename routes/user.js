import express from 'express';
import { handelNewUser, handelCreateNewUser, handelUserLogin } from '../controller/user.js';

const router = express.Router();


router.get('/', handelNewUser);
router.post('/create' , handelCreateNewUser);
router.get('/loginPage' , (req , res) =>{
    return res.render('logIn')
})
router.post('/login', handelUserLogin)

export default router;
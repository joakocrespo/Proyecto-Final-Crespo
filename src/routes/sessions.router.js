import { Router } from "express";
import UsersDaoMongo from "../manager/mongo/usersDaoMongo.js";
import {isValidPassword, createHash} from '../utils/validatePass.js'
import generateToken from "../utils/createToken.js";
import { passportCall } from "../config/passport-jwt/passportCall.middleware.js";
import { authorization } from "../config/passport-jwt/authorization.middleware.js";

const SessionRouter = Router()
const userService = new UsersDaoMongo()


SessionRouter.get('/setcookies', (req, res) =>{
    res.cookie('signedCookie' ,'Cookie ok', {maxAge: 50000000, signed:true}).send('cookies')
})
SessionRouter.get('/getcookies', (req, res) =>{
    console.log(req.signedCookies)
    res.send(req.signedCookies)
})
SessionRouter.get('/deletecookies', (req, res) =>{
    
    res.clearCookie('ecommCookie').send('delete cookies')
})

SessionRouter.post('/login', async (req, res) => {
    const { email, pass } = req.body;
    const user = await userService.getUser({ email })

    console.log(email, pass);
    console.log(user);

    if (!user) {
        return res.status(400).send({ status: 'error', message: 'No se encuentra el Usuario' });
    }

    if (!isValidPassword(pass, user.pass)) {
        return res.status(401).send({ status: 'error', message: 'Datos incorrectos' })
    }
    
    const token = generateToken({
        id: user._id,
        email: user.email,
        role: user.role
    })

    res.cookie('token', token, {
        maxAge: 60*60*1000,
        httpOnly: true
    }).send({
        status: 'succes',
        message: 'logged'
    })
})

SessionRouter.post('/register', async (req, res)=>{

    const { first_name, last_name, email, pass } = req.body
    const user = await userService.getUser({email})

    if(user) return res.status(400).send({status: 'error', message: 'El usuario ya existe'})

    const newUser = {
        first_name,
        last_name,
        email,
        pass: createHash(pass)
    }
    const result = await userService.createUser(newUser)

    const token = generateToken({
        id: result._id
    })
    
    
    res.cookie('token', token, {
        maxAge: 60*60*1000,
        httpOnly: true
    }).send({
        status: 'succes',
        message: 'Usuario creado!'
    })
})

SessionRouter.post('/logout', (req, res)=>{
    res.send('post logout')
})

SessionRouter.get('/current', [passportCall('jwt'), authorization(['USER'])], (req, res) => {
    res.send('datos sensibles')
})



export default SessionRouter
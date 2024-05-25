import express from 'express';
import { engine } from "express-handlebars";
import router from './routes/index.js';
import connectDb, { configApp } from './config/config.js';
import __dirname from "./utils.js";
import * as path from 'path';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser'
import initializePassport, { passportInit } from './config/passport-jwt/passport.config.js';


const app = express()
const PORT = configApp.port
const appRouter = router

connectDb()

app.use(cookieParser('keylev3l'))
app.use(bodyParser.json())

app.use(appRouter)

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname + '/public'));


app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.resolve(__dirname + '/views'));

initializePassport()
app.use(passportInit.initialize())

app.listen(PORT, error =>{
    if (error) {
        console.log(error)
    }
    console.log(`Servidor escuchando en puerto: ${PORT}`);
}) 
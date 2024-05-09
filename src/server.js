import express from 'express';
import { engine } from "express-handlebars";
import router from './routes/index.js';
import connectDb from './config/config.js';
import __dirname from "./utils.js";
import * as path from 'path';



const app = express()
const PORT = 8080
const appRouter = router

connectDb()

app.use(appRouter)

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname + '/public'));


app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.resolve(__dirname + '/views'));

app.get('/', (req, res) => {
    try {
        res.send('Server ON')
    } catch (error) {
        console.log(error)
    }
})

app.listen(PORT, error =>{
    if (error) {
        console.log(error)
    }
    console.log(`Servidor escuchando en puerto: ${PORT}`);
}) 
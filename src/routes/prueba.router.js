import { Router } from "express"
import { sendMail } from "../utils/sendEmail.js"

const MailRouter = Router()

MailRouter.get('/email', (req, res)=>{
    sendMail('caprichitt@gmail.com', 'email de prueba', '<h1>Bienvenido!<h1/>')
    res.send('Email Enviado')
})

export default MailRouter
import nodeMailer from 'nodemailer'
import { configApp } from '../config/config.js'

const transport = nodeMailer.createTransport({
    service: 'gmail',
    port: '587',
    auth: {
        user: configApp.gmail_user,
        pass: configApp.gmail_pass
    }
})

const from = 'Service de mensajeria de server ecommerce <crespojoaquinok@gmail.com>'

export const sendMail = async (toEmail, subject, body)=>{
    return await transport.sendMail({
        from,
        to: toEmail,
        subject,
        html: body
    })
}
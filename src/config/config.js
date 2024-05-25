import { connect } from 'mongoose'
import dotEnv from 'dotenv'
import commander from '../utils/commander.js'

const {mode} = commander.opts()

dotEnv.config({
    path: mode === "development" ? './.env.development' : './.env.production'
})

export const configApp = {
    port: process.env.PORT,
    gmail_user: process.env.GMAIL_USER,
    gmail_pass: process.env.GMAIL_PASS
}

const connectDb = async () => {
    try {
        await connect('mongodb://127.0.0.1:27017/iShop')
        // await connect('000.1://127.0.0.1:27017/iShop')
        console.log('BD conectada');
    } catch (error) {
        console.log(error);
    }
}


export default connectDb
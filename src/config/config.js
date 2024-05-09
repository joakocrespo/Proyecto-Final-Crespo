import { connect } from 'mongoose'

const connectDb = async () => {
    try {
        // await connect('mongodb://127.0.0.1:27017/iShop')
        await connect('000.1://127.0.0.1:27017/iShop')
        console.log('BD conectada');
    } catch (error) {
        console.log(error);
    }
}


export default connectDb
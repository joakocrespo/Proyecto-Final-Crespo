import multer from 'multer'
import __dirname from '../utils.js';

const storage = multer.diskStorage({
    destination: (req, file, callback)=>{
        callback(null, `${__dirname}/public/uploads`)
    },
    filename: (req, file, callback)=>{
        callback(null, `${Date.now()}-${file.originalname}`)
    }
})

const upLoader = multer({
    storage, 
    onError: function(error, next){
        console.log(error);
        next();
    }
})

export default upLoader
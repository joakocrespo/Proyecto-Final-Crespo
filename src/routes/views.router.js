import { Router } from "express";
import UsersModel from "../manager/mongo/model/users.model.js";
import upLoader from "../utils/uploader.js";

const ViewsRoutes = Router();

ViewsRoutes.get('/users', async (req, res) => {
    const { numPage= 1, limit=3 } = req.query;
    const {
        docs,
        hasPrevPage,
        hasNextPage,
        prevPage,
        nextPage,
        page
    } = await UsersModel.paginate({}, {limit, page: numPage, lean: true})
    res.render('layouts/users', {
        users: docs,
        hasPrevPage,
        hasNextPage,
        prevPage,
        nextPage,
        page
    })
})

ViewsRoutes.get('/', (req, res) => {
    res.render('index', {
        tittle: 'Backend | Handlebars & Multer',
        userName: 'Joaquin',
        admin: false
    })
})

ViewsRoutes.post('/uploader', upLoader.single('myFile'), (req, res)=>{
    res.send('Imagen uplodeada')
})

export default ViewsRoutes;
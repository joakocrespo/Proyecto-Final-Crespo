import { Router } from "express";
import UsersModel from "../manager/mongo/model/users.model.js";

const ViewsRoutes = Router();

ViewsRoutes.get('/users', async (req, res) => {
    const { numPage, limit=3 } = req.query;
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
        tittle: 'Backend | Handlebars',
        userName: 'Joaquin',
        admin: false
    })
})

export default ViewsRoutes;
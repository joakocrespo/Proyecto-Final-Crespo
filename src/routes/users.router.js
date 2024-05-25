import { Router } from "express";
import UsersDaoMongo from "../manager/mongo/usersDaoMongo.js";

const UserRoutes = Router();
const UsersService = new UsersDaoMongo();

UserRoutes.get('/', async (req, res) => {
    try {
        const result = await UsersService.getUsers()
        res.status(200).send({
            status: 'succes',
            payload: result
        })
    } catch (error) {
        console.log(error);
    }
})

UserRoutes.get('/:uid', async (req, res) => {
    try {
        let { uid } = req.params;
        const result = await UsersService.getUser({_id: uid})
        if (!result) {
            return res.status(400).send({
                status: "error",
                error: 'No se encontro el usuario'
            });
        }
        res.status(200).send({
            status: 'succes',
            payload: result
        })
    } catch (error) {
        console.log(error);
    }
})


UserRoutes.post('/', async (req, res) => {
    try {
        const newUser = req.body;
        const result = await UsersService.createUser(newUser)
        res.status(200).send({
            status: 'succes',
            payload: result
        })
    } catch (error) {
        console.log(error);
    }
});

UserRoutes.put('/:uid', async (req, res) => {
    const {uid} = req.params;
    const updatUser = req.body;
    const result = await UsersService.updateUser({ _id: uid} , updatUser)
    res.status(200).send({
        status: 'succes',
        payload: result
    })
});

UserRoutes.delete('/:uid', async (req, res) => {
    
});

export default UserRoutes;
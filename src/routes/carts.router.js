import { Router } from "express";
import CartsDaoMongo from "../manager/mongo/cartsDaoMongo.js"

const CartsRoutes = Router();
const CartService = new CartsDaoMongo();

CartsRoutes
    .get('/', async (req, res) => {
        try {
            const result = await CartService.getCarts()
            res.status(200).send({
                status: "succes",
                payload: result
            })
        } catch (error) {
            console.log(error);
        }
    })
    .get('/:cid', async (req, res) => {
        try {
            const { cid } = req.params;
            const result = await CartService.getCart({ _id: cid })
            res.status(200).send({
                status: "succes",
                payload: result
            })
        } catch (error) {
            console.log(error);
        }
    })
    .post('/', async (req, res) => {
        try {
            const newCart = req.body;
            const result = await CartService.createCart(newCart)
            res.status(200).send({
                status: "succes",
                payload: result
            })
        } catch (error) {
            console.log(error);
        }
    })
    .put('/:cid', async (req, res) => {
        const { cid } = req.params;
        const updateCart = req.body;
        const result = await CartService.updateCart({ _id: cid }, updateCart)
        res.status(200).send({
            status: 'succes',
            payload: result
        })
    })
    .delete('/:cid', async (req, res) => {

    })

export default CartsRoutes;
import { Router } from "express";
import OrdersModel from "../manager/mongo/model/orders.model.js";
// import OrdersDaoMongo from "../manager/mongo/ordersDaoMongo.js";


const OrdersRoutes = Router();
// const OrderService = new OrdersDaoMongo()

OrdersRoutes
         .get('/', async (req, res)=>{
            const {size} = req.query;
            const result = await OrdersModel.aggregate([
                {$match: {size}},
                {$group: {_id: "$name", totalQuantity: {$sum: "$quantity"}}},
                {$sort: {totalQuantity: -1}},
                {$group: {_id: 1, orders: {$push: "$$ROOT"}}},
                {$project: {"_id": 0, orders: "$orders"}},
                {$merge: {into: 'reports'}}
            ])
            res.status(200).send({
                status: 'succes',
                payload: result
            })
         })

export default OrdersRoutes
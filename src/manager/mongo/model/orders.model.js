import {Schema, model} from 'mongoose'

const OrdersSchema = new Schema({
    name: String,
    size: {
        type: String,
        enum: ["small", "medium", "large"],
        default: "medium"
    },
    price: Number,
    quantity: Number,
    date: Date
})

const OrdersModel = model('Orders', OrdersSchema)

export default OrdersModel
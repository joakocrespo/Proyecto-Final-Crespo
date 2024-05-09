import { Schema, model } from "mongoose";

const ProductSchema = new Schema({
    tittle: {
        type: String,
        required: true,
        index: true
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
    storage: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    description:{
        type: String
    },
    isActive: {
        type: Boolean,
        required: true
    }
});

const ProductsModel = model('Productos', ProductSchema);

export default ProductsModel
import { Schema, model } from "mongoose";

const CartSchema = new Schema({
    products: {
        type: [{
            product: {
                type: Schema.Types.ObjectId,
                ref: 'Productos'
            }
        }]
    }
});

CartSchema.pre('find', function(){
    this.populate('products.product')
})

const CartsModel = model('Carts', CartSchema);

export default CartsModel
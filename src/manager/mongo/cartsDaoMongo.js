import CartsModel from "./model/carts.model.js"

class CartsDaoMongo {
    constructor(){
        this.model = CartsModel
    }

    async getCarts(){
        return await this.model.find()
    }
    async getCart(cid){
        return await this.model.find(cid)
    }
    async createCart(newCart){
        return await this.model.create(newCart)
    }
    async updateCart(cid, updateCart){
        return await this.model.updateOne({_id: cid}, updateCart)
    }
    async deleteCart(cid){

    }
};

export default CartsDaoMongo
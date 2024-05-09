import OrdersModel from "./model/orders.model.js";

class OrdersDaoMongo {
    constructor(){
        this.model = OrdersModel
    }

    async getOrders(){
        return await this.model.find()
    }
    async getOrder(oid){
        return await this.model.findOne(oid)
    }
    async createOrder(newOrder){
        return await this.model.create(newOrder)
    }
    async updateOrder(oid, updateOrder){
        return await this.model.updateOne({_id: oid}, updateOrder)
    }
    async deleteProd(oid){

    }
};

export default OrdersDaoMongo
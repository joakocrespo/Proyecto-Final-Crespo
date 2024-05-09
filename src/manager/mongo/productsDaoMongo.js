import ProductsModel from './model/products.model.js'

class ProductDaoMongo {
    constructor(){
        this.model = ProductsModel
    }

    async getProducts(){
        return await this.model.find()
    }
    async getProduct(pid){
        return await this.model.findOne(pid)
    }
    async createProduct(newProd){
        return await this.model.create(newProd)
    }
    async updateProduct(pid, updateProd){
        return await this.model.updateOne({_id: pid}, updateProd)
    }
    async deleteProd(pid){

    }
};

export default ProductDaoMongo
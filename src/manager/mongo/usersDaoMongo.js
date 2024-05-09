import UsersModel from "./model/users.model.js"

class UsersDaoMongo {
    constructor(){
        this.model = UsersModel
    }

    async getUsers(){
        return await this.model.find()
        // return await this.model.paginate({last_name: 'Rodriguez'}, {limit: 3, page: 2})
    }
    async getUser(uid){
        return await this.model.findOne(uid)
    }
    async createUser(newProd){
        return await this.model.create(newProd)
    }
    async updateUser(uid, updateProd){
        return await this.model.updateOne({_id: uid}, updateProd)
    }
    async deleteUser(uid){

    }
};

export default UsersDaoMongo
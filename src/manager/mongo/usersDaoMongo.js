import UsersModel from "./model/users.model.js"

class UsersDaoMongo {
    constructor(){
        this.model = UsersModel
    }

    async getUsers(){
        return await this.model.find()
        // return await this.model.paginate({last_name: 'Rodriguez'}, {limit: 3, page: 2})
    }
    async getUser(filter){
        return await this.model.findOne(filter)
    }
    async createUser(newUser){
        return await this.model.create(newUser)
    }
    async updateUser(uid, updatUser){
        return await this.model.updateOne({ _id: uid} , updatUser)
    }
    async deleteUser(uid){

    }
};

export default UsersDaoMongo
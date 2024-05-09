import { Schema, model } from "mongoose";
import paginate from "mongoose-paginate-v2";

const UserSchema = new Schema({
    first_name: {
        type: String,
        required: true,
        index: true
    },
    last_name: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    rol: {
        type: String,
        required: true
    },
    atCreate: {
        type: Date,
        default: Date()
    }
});

const mongoosePaginate = paginate

UserSchema.plugin(mongoosePaginate)

const UsersModel = model('Usuarios', UserSchema);

export default UsersModel
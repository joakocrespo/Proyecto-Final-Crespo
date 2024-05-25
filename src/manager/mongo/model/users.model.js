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
    pass: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['USER', 'USER_PREMIUM', 'ADMIN'],
        default: 'USER'
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
import bcrypt from 'bcrypt';

export function createHash(pass) {
    return bcrypt.hashSync(pass, bcrypt.genSaltSync(10))
}

export function isValidPassword(pass, hashedPass) {
    return bcrypt.compareSync(pass, hashedPass)
}



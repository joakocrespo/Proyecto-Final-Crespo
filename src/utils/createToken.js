import jwt from 'jsonwebtoken'

export const JWT_PRIVATE_KEY = 's3cr3tw0rD'

const generateToken = (user) => {
    return jwt.sign({
        id: user._id,
        email: user.email,
        role: user.role
    }, JWT_PRIVATE_KEY, { expiresIn: '24h' })
}

export default generateToken
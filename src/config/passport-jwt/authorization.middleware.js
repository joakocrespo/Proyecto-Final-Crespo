
export const authorization = roleArray => {
    return async (req, res, next) => {
        try {
            if (!req.user) return res.status(401).send({ status: 'error', message: 'unauthorized' })
        
            const userRole = req.user.role
            if (!userRole) return res.status(403).send({ status: 'error', message: 'user role not found' })
            
            const normalizedUserRole = userRole.toUpperCase()
            const allowedRoles = roleArray.map(role => role.toUpperCase())

            if (!allowedRoles.includes(normalizedUserRole)) return res.status(403).send({ status: 'error', message: 'not permissions' })

            next()
        } catch (error) {
            next(error)
        }
    }
}

import passport from "passport";
import passport_jwt from 'passport-jwt'

export const passportInit = passport
export const JWTStrategy = passport_jwt.Strategy
export const ExtractJWT = passport_jwt.ExtractJwt

const initializePassport = () => {
    const coockieExtractor = req => {
        let token = null
        if (req && req.cookies) {
            token = req.cookies['token']
        }
        return token
    }

    passport.use('jwt', new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromExtractors([coockieExtractor]),
        secretOrKey: 's3cr3tw0rD'
    }, async (jwt_payload, done) => {
        try {
            console.log('jwt_payload passport config: ', jwt_payload)
            return done(null, jwt_payload)
        } catch (error) {
            return done(error)
        }
    }))
}

export default initializePassport

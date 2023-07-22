const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()

exports.verifyJwtToken = async (req, res, next) => {
    let tokenHeader = req.headers['x-access-token'] || req.headers['authorization']

    if (!tokenHeader) {
        return res.status(401).json({
            status_code: 401,
            message: 'No token provided!'
        })
    }

    let tokenBearer = tokenHeader.split(' ')[0]
    let token = tokenHeader.split(' ')[1]

    if (tokenBearer !== 'Bearer') {
        return res.status(401).json({
            status_code: 401,
            message: 'Invalid format token!'
        })
    }

    if (!token) {
        return res.status(401).json({
            status_code: 401,
            message: 'No token provided!'
        })
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                status_code: 401,
                message: 'Unauthorized access to this resource!'
            })
        }

        req.user_id = decoded.id
        next()
    })
}
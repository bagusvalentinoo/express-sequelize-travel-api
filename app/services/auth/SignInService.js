const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const models = require('../../models')
const User = models.User
const Op = models.Op
const dotenv = require('dotenv')
dotenv.config()

const checkSignInCredentials = async (req) => {
    const user = await User.findOne({
        where: {
            [Op.or]: [
                {
                    username: req.body.username
                },
                {
                    email: req.body.username
                }
            ]
        }
    })

    if (!user) throw new Error('Username or Email and Password is not match!')
    if (!bcrypt.compareSync(req.body.password, user.password)) throw new Error('Username or Email and Password is not match!')

    return user
}

const signIn = async (user) => {
    const token = 'Bearer ' + jwt.sign(
        {
            id: user.id
        },
        process.env.JWT_SECRET || 'bezkoder-secret-key',
        {
            expiresIn: 86400 // 24 hours
        }
    )

    return token
}

module.exports = {
    checkSignInCredentials,
    signIn
}
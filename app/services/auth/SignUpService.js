const { v1: uuidv1 } = require('uuid')
const bcrypt = require('bcryptjs')
const models = require('../../models')
const User = models.User
const Op = models.Op

exports.signUp = async (req) => {
    const isConfirmPassword = req.body.password === req.body.password_confirmation

    if (!isConfirmPassword) {
        throw new Error('Password confirmation does not match!')
    }

    const user = await User.create({
        id: uuidv1(),
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10)
    })
    user.assignRole(['Customer'])
    user.createCustomer({
        id: uuidv1(),
        name: req.body.name,
        phone_number: req.body.phone_number,
        address: req.body.address
    })

    return user
}
const User = require('../models').User

const isAdmin = async (req, res, next) => {
    if (req.user_id === undefined) {
        return res.status(403).json({
            status_code: 403,
            message: 'Require Admin Role!'
        })
    }

    const user = await User.findByPk(req.user_id)

    if (user === null) {
        return res.status(403).json({
            status_code: 403,
            message: 'Require Admin Role!'
        })
    }

    const roles = await user.getRoles()

    for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === 'Admin') {
            next()
            return
        }
    }

    return res.status(403).json({
        status_code: 403,
        message: 'Require Admin Role!'
    })
}

const isCustomer = async (req, res, next) => {
    if (req.user_id === undefined) {
        return res.status(403).json({
            status_code: 403,
            message: 'Require Customer Role!'
        })
    }

    const user = await User.findByPk(req.user_id)

    if (user === null) {
        return res.status(403).json({
            status_code: 403,
            message: 'Require Customer Role!'
        })
    }

    const roles = await user.getRoles()

    for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === 'Customer') {
            next()
            return
        }
    }

    return res.status(403).json({
        status_code: 403,
        message: 'Require Customer Role!'
    })
}

module.exports = {
    isAdmin,
    isCustomer
}
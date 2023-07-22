const { ValidationError } = require('sequelize')
const SignUpService = require('../../../services/auth/SignUpService')

exports.signUp = async (req, res) => {
  try {
    await SignUpService.signUp(req)

    return res.status(201).json({
      status_code: 201,
      message: 'User successfully registered!'
    })
  } catch (err) {
    if (err instanceof ValidationError) {
      return res.status(422).json({
        status_code: 422,
        message: err.errors.map(error => error.message)
      })
    }

    return res.status(400).json({
      status_code: 400,
      message: err.message
    })
  }
}
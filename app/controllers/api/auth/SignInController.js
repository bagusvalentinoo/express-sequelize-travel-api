const { ValidationError } = require('sequelize')
const SignInService = require('../../../services/auth/SignInService')

exports.signIn = async (req, res) => {
  try {
    const user = await SignInService.checkSignInCredentials(req)
    const token = await SignInService.signIn(user)

    return res.status(200).json({
      status_code: 200,
      message: 'User successfully logged in!',
      data: {
        accessToken: token
      }
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
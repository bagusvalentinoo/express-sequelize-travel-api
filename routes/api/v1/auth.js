const express = require('express')
const router = express.Router()
const ApiController = '../../../app/controllers/api'
const SignUpController = require(`${ApiController}/auth/SignUpController`)
const SignInController = require(`${ApiController}/auth/SignInController`)

router.post('/sign-up', async (req, res) => {
    SignUpController.signUp(req, res)
})

router.post('/sign-in', async (req, res) => {
    SignInController.signIn(req, res)
})

module.exports = router
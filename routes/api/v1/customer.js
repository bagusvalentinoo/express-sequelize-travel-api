const express = require('express')
const router = express.Router()
const ApiController = '../../../app/controllers/api'
const middlewares = '../../../app/middlewares'
const { verifyJwtToken } = require(`${middlewares}/VerifyTokenMiddleware`)
const { isCustomer } = require(`${middlewares}/RoleMiddleware`)
const BookingController = require(`${ApiController}/customer/transaction/BookingController`)
const PaymentController = require(`${ApiController}/customer/transaction/PaymentController`)

router.post('/booking', [verifyJwtToken, isCustomer], async (req, res) => {
    await BookingController.store(req, res)
})

router.put('/payment/:id', [verifyJwtToken, isCustomer], async (req, res) => {
    await PaymentController.update(req, res)
})

module.exports = router
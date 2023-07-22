const { ValidationError } = require('sequelize')
const BookingService = require('../../../../services/transaction/BookingService')
const PaymentService = require('../../../../services/transaction/PaymentService')

exports.store = async (req, res) => {
  try {
    const booking = await BookingService.createBooking(req)
    const payment = await PaymentService.createPayment(booking)

    res.status(201).json({
      status_code: 201,
      message: 'Booking successfully created, please to complete the payment',
      data: {
        payment_id: payment.id,
        total: payment.total
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
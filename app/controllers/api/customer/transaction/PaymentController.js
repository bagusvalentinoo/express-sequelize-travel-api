const { ValidationError } = require('sequelize')
const TransactionService = '../../../../services/transaction'
const PaymentService = require(`${TransactionService}/PaymentService`)
const BookingService = require(`${TransactionService}/BookingService`)

exports.update = async (req, res) => {
  try {
    const payment = await PaymentService.findPayment(req.params.id)
    const paymentPayload = await PaymentService.updatePayment(payment, req)
    const booking = await BookingService.findBooking(paymentPayload.booking_id)
    await BookingService.updateBooking(booking)

    return res.status(200).json({
      status_code: 200,
      message: 'Successfully payment!'
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
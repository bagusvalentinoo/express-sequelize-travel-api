const { v1: uuidv1 } = require('uuid')
const { getTotalPriceFromPacketByBookingId } = require('../../helpers/services/ModelManipulation')
const { getCurrentDate } = require('../../helpers/services/StringManipulation')
const Payment = require('../../models').Payment

const createPayment = async (booking) => {
    const totalPrice = await getTotalPriceFromPacketByBookingId(booking.id) * booking.total_person

    return await booking.createPayment({
        id: uuidv1(),
        booking_id: booking.id,
        status: 'On Processed',
        total: totalPrice
    })
}

const findPayment = async (param) => {
    const payment = await Payment.findByPk(param)

    if (!payment) throw new Error('Payment not found')

    return payment
}

const updatePayment = async (payment, req) => {
    const paymentMethod = req.body.payment_method

    switch (paymentMethod) {
        case 'Cash':
            const isPaymentAmountLessThanTotalPrice = req.body.amount_payment < payment.total
            const paymentLess = payment.total - req.body.amount_payment

            if (isPaymentAmountLessThanTotalPrice) throw new Error(`Payment amount is less than total price, please to pay ${paymentLess} more`)

            payment.update({
                payment_date: getCurrentDate(),
                payment_method: paymentMethod,
                change: req.body.amount_payment - payment.total,
                status: 'Finished'
            })
            break

        case 'Transfer':
            payment.update({
                payment_date: getCurrentDate(),
                payment_method: paymentMethod,
                status: 'Finished'
            })
            break
    }

    return payment
}

module.exports = {
    createPayment,
    findPayment,
    updatePayment
}
const { ValidationError } = require('sequelize')
const { countPackets, getPackets } = require('../../../../services/product/PacketService')

exports.index = async (req, res) => {
  try {
    const packets = await getPackets(req)
    const numberOfPackets = await countPackets()

    return res.status(200).json({
      status_code: 200,
      message: 'Successfully get packets data',
      countPackets: numberOfPackets,
      data: packets
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
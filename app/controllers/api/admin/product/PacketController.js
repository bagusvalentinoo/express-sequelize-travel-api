const { ValidationError } = require('sequelize')
const PacketService = require('../../../../services/product/PacketService')

const index = async (req, res) => {
  try {
    const packets = await PacketService.getPackets(req)
    const numberOfPackets = await PacketService.countPackets()

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

const store = async (req, res) => {
  try {
    await PacketService.createPacket(req)

    return res.status(201).json({
      status_code: 201,
      message: 'Successfully create packet data'
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

const show = async (req, res) => {
  try {
    const packet = await PacketService.findPacket(req.params.id)

    return res.status(200).json({
      status_code: 200,
      message: 'Successfully get single packet data',
      data: packet
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

const update = async (req, res) => {
  try {
    const packet = await PacketService.findPacket(req.params.id)
    await PacketService.updatePacket(packet, req)

    return res.status(200).json({
      status_code: 200,
      message: 'Successfully update packet data'
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

const destroy = async (req, res) => {
  try {
    const packet = await PacketService.findPacket(req.params.id)
    await PacketService.deletePacket(packet)

    return res.status(200).json({
      status_code: 200,
      message: 'Successfully delete packet data'
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

module.exports = {
  index,
  store,
  show,
  update,
  destroy
}
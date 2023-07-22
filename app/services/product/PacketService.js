const { v1: uuidv1 } = require('uuid')
const models = require('../../models')
const Packet = models.Packet
const Op = models.Sequelize.Op

const countPackets = async () => {
  return await Packet.count()
}

const getPackets = async (req) => {
  if (req.search) {
    return await Packet.findAll({
      where: {
        name: {
          [Op.like]: `%${req.search}%`
        }
      }
    })
  }

  return await Packet.findAll()
}

const createPacket = async (req) => {
  return await Packet.create({
    id: uuidv1(),
    name: req.body.name,
    description: req.body.description,
    distance: req.body.distance,
    price: req.body.price
  })
}

const findPacket = async (param) => {
  const packet = await Packet.findByPk(param)

  if (!packet) throw new Error('Packet not found')

  return packet
}


const updatePacket = async (packet, req) => {
  await packet.update({
    name: req.body.name,
    description: req.body.description,
    distance: req.body.distance,
    price: req.body.price
  })
}

const deletePacket = async (packet) => {
  await packet.destroy()
}

module.exports = {
  countPackets,
  getPackets,
  createPacket,
  findPacket,
  updatePacket,
  deletePacket
}
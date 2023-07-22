const { v1: uuidv1 } = require('uuid')
const Packet = require('../../../app/models').Packet

exports.AddPacketsForStartingSeeder = async () => {
    await Packet.bulkCreate([
        {
            id: uuidv1(),
            name: "Bandung - Jakarta",
            description: "Paket perjalanan dari Bandung ke Jakarta",
            distance: "150 km",
            price: 150000
        },
        {
            id: uuidv1(),
            name: "Bandung - Surabaya",
            description: "Paket perjalanan dari Bandung ke Surabaya",
            distance: "500 km",
            price: 500000
        },
        {
            id: uuidv1(),
            name: "Bandung - Karawang",
            description: "Paket perjalanan dari Bandung ke Karawang",
            distance: "100 km",
            price: 100000
        }
    ])
}
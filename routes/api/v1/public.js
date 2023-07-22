const express = require('express')
const router = express.Router()
const ApiController = '../../../app/controllers/api'
const PacketController = require(`${ApiController}/public/product/PacketController`)

router.get('/packets', async (req, res) => {
    PacketController.index(req, res)
})

module.exports = router
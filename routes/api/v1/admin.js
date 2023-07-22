const express = require('express')
const router = express.Router()
const ApiController = '../../../app/controllers/api'
const PacketController = require(ApiController + '/admin/product/PacketController')
const middlewares = '../../../app/middlewares'
const { isAdmin } = require(middlewares + '/RoleMiddleware')
const { verifyJwtToken } = require(middlewares + '/VerifyTokenMiddleware')

router.get('/packets', [verifyJwtToken, isAdmin], async (req, res) => {
    await PacketController.index(req, res)
})

router.post('/packets', [verifyJwtToken, isAdmin], async (req, res) => {
    await PacketController.store(req, res)
})

router.get('/packets/:id', [verifyJwtToken, isAdmin], async (req, res) => {
    await PacketController.show(req, res)
})

router.put('/packets/:id', [verifyJwtToken, isAdmin], async (req, res) => {
    await PacketController.update(req, res)
})

router.delete('/packets/:id', [verifyJwtToken, isAdmin], async (req, res) => {
    await PacketController.destroy(req, res)
})

module.exports = router
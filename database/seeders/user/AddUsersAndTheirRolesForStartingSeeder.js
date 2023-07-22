const { v1: uuidv1 } = require('uuid')
const bycrypt = require('bcryptjs')
const User = require('../../../app/models').User

exports.AddUsersAndTheirRolesForStartingSeeder = async () => {
    const userAdmin = await User.create({
        id: uuidv1(),
        name: 'Admin',
        username: 'admin',
        email: 'admin@example.com',
        password: bycrypt.hashSync('admin', 10)
    })
    userAdmin.assignRole(['Admin'])
    userAdmin.createAdmin({
        id: uuidv1(),
        name: 'Admin',
        phone_number: '081222951235',
        address: 'Jl. Lorem Ipsum Admin No.21',
    })

    const userCustomer = await User.create({
        id: uuidv1(),
        name: 'Customer',
        username: 'customer',
        email: 'customer@example.com',
        password: bycrypt.hashSync('customer', 10)
    })
    userCustomer.assignRole(['Customer'])
    userCustomer.createCustomer({
        id: uuidv1(),
        name: 'Customer',
        phone_number: '081222951236',
        address: 'Jl. Lorem Ipsum Customer No.21',
    })
}
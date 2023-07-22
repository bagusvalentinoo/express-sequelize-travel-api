const { v1: uuidv1 } = require('uuid')
const Role = require('../../../app/models').Role

exports.AddRolesForStartingSeeder = async () => {
    const roles = [
        {
            id: uuidv1(),
            name: 'Admin'
        },
        {
            id: uuidv1(),
            name: 'Customer'
        }
    ]

    for (let i = 0; i < roles.length; i++) {
        const role = await Role.findOne({
            where: {
                name: roles[i].name
            }
        })

        if (role) {
            console.log(`Role ${roles[i].name} already exists`)
        } else {
            await Role.create(roles[i])
        }
    }
}
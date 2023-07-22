const { AddRolesForStartingSeeder } = require('./user/AddRolesForStartingSeeder')
const { AddUsersAndTheirRolesForStartingSeeder } = require('./user/AddUsersAndTheirRolesForStartingSeeder')
const { AddPacketsForStartingSeeder } = require('./product/AddPacketsForStartingSeeder')

const seeding = async () => {
    await AddRolesForStartingSeeder()
    await AddUsersAndTheirRolesForStartingSeeder()
    await AddPacketsForStartingSeeder()
}

seeding()
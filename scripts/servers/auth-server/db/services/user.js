const Users = require('../models/Users')

const createUser = async (userData) => {
    const user = new Users(userData)
    return await user.save()
}

module.exports = {
    createUser
}
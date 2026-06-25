const { createUser } = require("../../db/services/user")

const createUserApi = async (userData) => {
    const user = await createUser(userData)
}

module.exports = {
    createUserApi
}
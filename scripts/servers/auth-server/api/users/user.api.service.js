const { createUser } = require("../../db/services/user")
const { sendEmail } = require("../../utils/email")

const createUserApi = async (userData) => {
    const user = await createUser(userData)
    // welcome email
    await sendEmail()
}

module.exports = {
    createUserApi
}
const { createUserApi } = require("./user.api.service")

const createUserController = async (req, res, next) => {
    const data = req.body
    const user = await createUserApi(data) // api service
    res.send(user)
}

module.exports = {
    createUserController
}
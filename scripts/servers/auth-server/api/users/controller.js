const { createUserApi } = require("./service")

const createUserController = async (req, res, next) => {
    const data = req.body
    const user = await createUserApi(data)
}

module.exports = {
    createUserController
}
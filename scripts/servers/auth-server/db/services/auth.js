const Users = require('../models/Users')

const loginService = async ({
    username,
    password
}) => {
    const user = await Users.findOne({
        username
    }).exec()
    
    if (user?.password === password) {
        return user
    }
    else {
        throw new Error("Wrong password");
    }
}

module.exports = {
    loginService
}
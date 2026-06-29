const { loginService } = require("../../db/services/auth")

const loginApiService = async ({
    username,
    password
}) => {
    // responsible for calling the db service or other 3rd party service
    try {
        return loginService({
            username,
            password
        })
    } catch (error) {
        throw new Error(error);
        
    }
}

module.exports = {
    loginApiService
}
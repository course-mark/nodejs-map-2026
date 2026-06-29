const { loginApiService } = require("./service.api")


const loginController = async (req, res, next) => {
    const username = req.body.username
    const password = req.body.password
    try {
        const login = await loginApiService({
            username,
            password
        })
        console.log({login});
        
        res.status(200).json("OK")
    } catch (error) {
        // check why it failed using 'error' param
        console.error(error)
        
        res.status(401).json(error.message)
    }
    
}





module.exports = { loginController }

const jwt = require('jsonwebtoken')

module.exports.authMiddleware = async(req, res, next) => {
    const {accessToken} = req.cookies
    if(!accessToken){
        return res.status(409).json({error: "User not authenticated. Please Login first!"})

    }else{

        try{
            const decoded = await jwt.verify(accessToken, process.env.JWT_SECRET)
            req.role = decodedToken.role
            req.id = decodedToken.id
            next()

        }catch(err){
            return res.status(409).json({error: "User not authenticated. Please Login first!"})
        }

        
    }
}
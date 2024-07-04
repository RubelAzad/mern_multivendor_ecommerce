const jwt = require('jsonwebtoken')
module.exports.createToken = async(data) => {
    const token = await jwt.sign({id: 1}, process.env.JWT_SECRET, {expiresIn: '7d'})
    return token
}
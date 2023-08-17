require('dotenv').config()
const jwt = require('jsonwebtoken')

const signToken = (user) => {
    return jwt.sign(
        {
            id: user.idUser,
            role: user.role,
            state: user.state
        },
        process.env.SECRET_KEY,
        {
            expiresIn: "5h"
        })
}

const verifyToken = (token) => {
    try {
        return jwt.verify(token, process.env.SECRET_KEY)
    } catch (error) {
        return null;
    }
}

module.exports = { signToken, verifyToken }
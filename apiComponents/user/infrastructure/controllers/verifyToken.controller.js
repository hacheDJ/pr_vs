const FindByIdService = require("../../application/findById.service")
const MysqlUserAdapter = require("../adapters/mysql.user.adapter")
const { verifyToken } = require("../helpers/jsonwebtoken")


const verifyTokenController = async (req, res) => {
    try {
        if(!req.headers.authorization) throw new Error('You have not send headers')

        const token = req.headers.authorization.split(' ').pop(),
         tokenData = verifyToken(token)

        if(!tokenData) throw new Error('Invalid token')

        if(Date.now() > (tokenData.exp * 1000)) throw new Error('Token expired')
        
        const id = tokenData.id,
         us = new FindByIdService(new MysqlUserAdapter()),
         userData = await us.findById(id)

        res.json({err:false, data:userData, msg:"Token is valid!"})

    } catch (err) {
        res.json({err:true, data:{}, msg:err.message})
    }
    
}

module.exports = verifyTokenController
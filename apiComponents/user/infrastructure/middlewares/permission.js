const { verifyToken } = require("../helpers/jsonwebtoken")
const FindByIdService = require('../../application/findById.service')
const MysqlUserAdapter = require("../adapters/mysql.user.adapter")

const checkAuthRole = (roles) => async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ').pop(),
         tokenData = verifyToken(token),
         fbis = new FindByIdService(new MysqlUserAdapter()),
         user = await fbis.findById(tokenData.id)

        if(user.err){
            res.json(user)
        }else{
            if([].concat(roles).includes(user.data.role)){
                next()
            } else{
                res
                 .status(401)
                 .json({err:true, data:{}, msg: "Unauthorized"})
            }
        }
    } catch (error) {
        res
         .status(401)
         .json({err:true, data:{}, msg: error.message})
    }

     
}

module.exports = { checkAuthRole }
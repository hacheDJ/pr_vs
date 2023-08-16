const { request, response } = require('express')
const { verifyToken } = require('../helpers/jsonwebtoken')

const checkAuth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ').pop(),
         tokenData = await verifyToken(token)

        if(tokenData){
            next()
        }else{
            res.status(401)
            .json({err:true, data:{}, msg: "Access denied!"})
        }
    } catch (err) {
        res.status(401)
         .json({err:true, data:{}, msg: "Access denied!"})
    }

}

const alreadyAuth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ').pop(),
         tokenData = await verifyToken(token)

        if(tokenData){
            console.log('Already authenticated');
            res
             .status(503)
             .json({err:true, data:{}, msg:"It is already authenticated!"})
        }else{
            console.log('ACCEDE!!!');
            next()
        }
    } catch (err) {
        res
        .status(503)
        .json({err:true, data:{}, msg:"It is already authenticated!"})
    }

}

module.exports = { checkAuth, alreadyAuth}
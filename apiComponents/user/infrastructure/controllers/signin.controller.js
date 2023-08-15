const { request, response } = require('express'),
 SigninService = require("../../application/signin.service"),
 MysqlUserAdapter = require("../adapters/mysql.user.adapter"),
 validateLogin = require('../helpers/validate.login'),
 { signToken } = require('../helpers/jsonwebtoken')

const signinController = (req = request, res = response) => {
    try{
        const { email, passwordUser } = req.body

        validateLogin(email, passwordUser)

        const ss = new SigninService(new MysqlUserAdapter()),
         data = ss.signin(email, passwordUser)

        data.then(d => {
            if(d.err)
                res.json(d)
            else{
                const token = signToken(d.data)
                res.json({err: false, data: d.data, token, msg: "Welcome!!"})
            }
    })
    }catch(err){
        res.json({err:true, data:err.message})
    }

}

module.exports = signinController
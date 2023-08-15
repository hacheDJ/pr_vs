const { response, request } = require("express"),
 RegisterService = require("../../application/register.service"),
 MysqlUserAdapter = require("../adapters/mysql.user.adapter"),
 { encrypt } = require('../helpers/bcrypt'),
 validateRegister = require("../helpers/validate.register")
const { toDomainModel } = require("../mappers");

const registerController = async(req = request, res = response) => {
    try {
        const { nameUser, lastNameUser, gender, documentType, documentNumber, address, email, passwordUser, /*role, state,*/ confPass } = req.body

        validateRegister({nameUser, lastNameUser, gender, documentType, documentNumber, address, email, passwordUser, confPass})

        const hashedPass = await encrypt(passwordUser),
         rs = new RegisterService(new MysqlUserAdapter()),
         user = toDomainModel({nameUser, lastNameUser, gender, documentType, documentNumber, address, email, passwordUser:hashedPass}),
         data = rs.register(user)

        data.then(d => res.json({err:false, data:d.affectedRows, msg:"Register successful"}))

    } catch (err) {
        res.json({err:true, data:0, msg:err.message})
    }
}

module.exports = registerController
const FindByIdService = require("../../application/findById.service")
const MysqlUserAdapter = require("../adapters/mysql.user.adapter")
const { verifyToken } = require("../helpers/jsonwebtoken")

const findByIdController = async (req, res) => {
    try {

        const token = req.headers.authorization.split(' ').pop(),
         tokenData = verifyToken(token),
         id = tokenData.id,
         us = new FindByIdService(new MysqlUserAdapter()),
         data = await us.findById(id)

        if(data.err)
            res.json(data)
        else
            res.json(data)

    } catch (err) {
        res.json({err:true, data:{}, msg: err.message})
    }
}

module.exports = findByIdController
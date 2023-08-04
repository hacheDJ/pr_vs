const { json } = require("body-parser")
const FindByIdService = require("../../application/findById.service")
const MysqlUserAdapter = require("../adapters/mysql.user.adapter")

const findByIdController = async (req, res) => {
    try {
        const id = req.params.id,
         us = new FindByIdService(new MysqlUserAdapter()),
         data = await us.findById(id)

        if(data.err)
            res.json(data)
        else
            res.json(data)

    } catch (err) {
        res.json({err:true, data: err.message})
    }
}

module.exports = findByIdController
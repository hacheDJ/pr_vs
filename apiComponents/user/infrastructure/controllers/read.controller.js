const ReadService = require("../../application/read.service")
const MysqlUserAdapter = require("../adapters/mysql.user.adapter")
const {request, response} = require('express')

const readController = (req = request, res = response) => {
        const rs = new ReadService(new MysqlUserAdapter())
        const data = rs.read()
        data.then( d => {res.json(d)} )
        
}

module.exports = readController
const OrderRepository = require("../../domain/repositories/order.repository"),
 { pool } = require('../../../../db/mysql')

function MySqlOrderAdapter(){}

MySqlOrderAdapter.prototype = new OrderRepository()

MySqlOrderAdapter.prototype.listByIdUser = (idUser) => {
    const sql = 'CALL sp_listOrderByIdUser(?)',
     params = [idUser],
     result = pool.query(sql, params)

     return result
}

MySqlOrderAdapter.prototype.listByState = (state) => {
    const sql = 'CALL sp_listByState(?)',
     params = [state],
     result= pool.query(sql, params)

     return result
}

module.exports = MySqlOrderAdapter
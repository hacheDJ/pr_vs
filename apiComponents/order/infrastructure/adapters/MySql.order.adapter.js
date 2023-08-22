const OrderRepository = require("../../domain/repositories/order.repository"),
 { pool } = require('../../../../db/mysql'),
 {toDomainModel} = require('../mappers')

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

MySqlOrderAdapter.prototype.editState = (order) => {
    const o = toDomainModel(order)
     sql = 'UPDATE tb_Order SET orderState=? WHERE idOrder=?',
     params = [o.orderState, o.idOrder],
     result = pool.query(sql, params)

     return result
}

MySqlOrderAdapter.prototype.listById = (id) => {
    const sql = 'CALL sp_listById(?)',
     params = [id],
     result= pool.query(sql, params)

     return result
}

module.exports = MySqlOrderAdapter
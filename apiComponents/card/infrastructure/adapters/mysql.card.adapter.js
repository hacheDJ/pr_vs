const CardRepository = require('../../domain/respositories/card.repository'),
 { pool } = require('../../../../db/mysql'),
 { toDomainModel } = require('../mappers')

function MySqlCardAdapter(){}

MySqlCardAdapter.prototype = new CardRepository()

MySqlCardAdapter.prototype.pay = async (card) => {
    const c = toDomainModel(card),
     sql = 'SELECT * FROM tb_Card WHERE cardNumber=? AND holder=? AND dateOfExpiry=? AND cvv=? AND passCard=?',
     params = [c.cardNumber, c.holder, c.dateOfExpiry, c.cvv, c.passCard],
     [result] = await pool.query(sql, params)

    if(result.length <= 0)
        return {err: true, data: "Incorrect data"}
    else
        return {err: false, data: result[0]}

}

MySqlCardAdapter.prototype.edit = async (card) => {
    const c = toDomainModel(card),
     sql = 'UPDATE tb_Card SET balance=? WHERE idCard=?',
     params = [c.balance, c.idCard],
     [result] = await pool.query(sql, params)

    return result

}

module.exports = MySqlCardAdapter
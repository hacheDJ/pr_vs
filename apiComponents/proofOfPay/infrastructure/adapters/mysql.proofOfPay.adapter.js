const ProofOfPayRepository = require('../../domain/repositories/proofOfPay.repository'),
 { pool } = require('../../../../db/mysql'),
 { toDomainModel } = require('../mappers')

function MySqlProofOfPayAdapter(){}

MySqlProofOfPayAdapter.prototype = new ProofOfPayRepository()

MySqlProofOfPayAdapter.prototype.register =  async (proofOfPay, listProofOfPayDetail, order) => {
   const pop = toDomainModel(proofOfPay),
    sql1 = 'INSERT INTO tb_ProofOfPay VALUES(null,?,?,default)',
    sql2 = 'INSERT INTO tb_ProofOfPayDetail VALUES(null,?,?,?,?)',
    sql3 = 'INSERT INTO tb_Order VALUES(null,?,?,?,"pending",?)',
    params1 = [pop.idUser, pop.paymentMethod]
    
    let i = 0

   await pool.getConnection()
   .then(async(con) => {
      return await con.beginTransaction()
       .then(async(x) => {        
        return await con.query(sql1, params1)
        })
        .then(async(x) => {
          let idPop = x[0].insertId

          await listProofOfPayDetail.forEach(async (element, index, array) => {
            let params2 = [
              element.idProofOfPay = idPop,
              element.idProduct,
              element.quantity,
              element.salePrice
            ]
            
            const q = await con.query(sql2, params2)
             .catch(async(r) => {
              console.log('ROLLBACK 2');
              await con.rollback()
              con.release()
              console.log('Error2 -> ', r.message);
            })

          })
          return idPop
       })
       .then(async(x) => {
        const params3 = [order.idProofOfPay= x, order.placeOfDelivery, order.deliveryDate, order.contactNumber]

        return await con.query(sql3, params3)
       })
       .then(async(x) => {
        i = x[0] 
        console.log('>>>>COMMIT<<<<');
        await con.commit()
        con.release()
       })
       .catch(async(r) => {
        console.log('>>>>ROLLBACK<<<<');
        console.log('Error -> ', r.message);
        await con.rollback()
        con.release()
       })
      
    }).catch(r => console.log(r.message))
  
    return i
}   

MySqlProofOfPayAdapter.prototype.findProofOfpayDetailByIdProofOfPay =  async (idProofOfPay) => {
  const sql = 'CALL sp_findProofOfPayDetailByIdProofOfPay(?)',
   params = [idProofOfPay],
   [[result]] = await pool.query(sql, params)

   return result
} 

module.exports = MySqlProofOfPayAdapter
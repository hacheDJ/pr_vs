const ProductRepository = require("../../domain/repositories/product.repository"),
 { pool } = require('../../../../db/mysql'),
 { toDomainModel } = require('../mappers/index')

function MySqlProductAdapter(){}

MySqlProductAdapter.prototype = new ProductRepository()

MySqlProductAdapter.prototype.listByCategory = async (des) => {
    const sql = 'CALL sp_listProductByCategory(?)',
     params = [des],
     [result] = await pool.query(sql, params)
     
     return result[0]
}

MySqlProductAdapter.prototype.register = async (product) => {
    const p = toDomainModel(product),
     sql = 'INSERT INTO tb_Product VALUES(null,?,?,?,?,default,null,?,?)',
     params = [p.nameProduct, p.description, p.urlImg, p.unitPrice, p.stock, p.idCategory],
     [result] = await pool.query(sql, params)

     return result
}

MySqlProductAdapter.prototype.findById = async (id) => {
    const sql = 'SELECT * FROM tb_Product WHERE idProduct=?',
     params = [id],
     [result] = await pool.query(sql, params)

    if(result.length === 0) return {err: true, data: "Product not found"}

     return {err: false, data: result[0]}
}

MySqlProductAdapter.prototype.edit = async (product) => {
    const p = toDomainModel(product),
     sql = 'UPDATE tb_Product SET nameProduct=ifnull(?,nameProduct),description=ifnull(?,description),unitPrice=ifnull(?,unitPrice),modificationDate=default,stock=ifnull(?,stock),idCategory=ifnull(?,idCategory) WHERE idProduct=?',
     params = [p.nameProduct, p.description, p.unitPrice, p.stock, p.idCategory, p.idProduct],
     [result] = await pool.query(sql, params)

     return result
}

MySqlProductAdapter.prototype.editPicture = async (product) => {
    try {
        const p = toDomainModel(product),
         sql = 'UPDATE tb_Product SET urlImg=? WHERE idProduct=?',
         params = [p.urlImg, p.idProduct],
         [result] = await pool.query(sql, params)

        return result

    } catch (err) {
        console.log(err.message);
    }
}

MySqlProductAdapter.prototype.findByName = async (nameProduct) => {
    try {
        const sql = 'SELECT * FROM tb_Product WHERE nameProduct LIKE ?',
         params = [`%${nameProduct}%`],
         [result] = await pool.query(sql, params)

        return result

    } catch (err) {
        console.log(err.message);
    }
}

module.exports = MySqlProductAdapter
const CategoryRepository = require("../../domain/repositories/category.repository"),
 { pool } = require('../../../../db/mysql'),
 { toDomainModel } = require('../mappers')

function MySqlCategoryAdapter(){}

MySqlCategoryAdapter.prototype = new CategoryRepository()

MySqlCategoryAdapter.prototype.list = async () => {
    const sql = 'SELECT * FROM tb_Category',
     [result] = await pool.query(sql)

     return result
}

MySqlCategoryAdapter.prototype.register = async (category) => {
    const c = toDomainModel(category),
     sql = 'INSERT INTO tb_Category VALUES(null,?,default,null)',
     params = [c.description],
     [result] = await pool.query(sql, params)

     return result
}

MySqlCategoryAdapter.prototype.edit = async (category) => {
    const c = toDomainModel(category),
     sql = 'UPDATE tb_Category SET description=ifnull(?,description), modificationDate=default WHERE idCategory=?',
     params = [c.description, c.idCategory],
     [result] = await pool.query(sql, params)

     return result
}

MySqlCategoryAdapter.prototype.findById = async (id) => {
    const sql = 'SELECT * FROM tb_Category WHERE idCategory=?',
     params = [id],
     [result] = await pool.query(sql, params)

    if(result.length === 0) 
        return {err: true, data: "Category not found"}
    else
        return {err: false, data: result}
}

module.exports = MySqlCategoryAdapter
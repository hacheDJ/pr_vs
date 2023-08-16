const { pool } = require('../../../../db/mysql')
const UserRepository = require('../../domain/repositories/user.repository')
const { toDTOModel, toDomainModel } = require('../mappers')
const { compare } = require('../helpers/bcrypt')

function MysqlUserAdapter(){}

MysqlUserAdapter.prototype = new UserRepository()
MysqlUserAdapter.prototype.contructor = MysqlUserAdapter

MysqlUserAdapter.prototype.read = async function (){
    console.log("MySQLAdapter")

    const [result] = await pool.query('SELECT * FROM tb_User')

    return result.map(toDTOModel)
}

MysqlUserAdapter.prototype.register = async function(user){
    try{
        const u = toDomainModel(user)
         sql = 'INSERT INTO tb_User VALUES(null,?,?,?,?,?,?,?,?,null,"client","active",default)',
         params = [u.nameUser, u.lastNameUser, u.gender, u.documentType, u.documentNumber, u.address, u.email, u.passwordUser],
         [result] = await pool.query(sql, params)
    
        return result
    }catch(err){
        console.log('>>>>>>>>>> ', err.message, ' <<<<<<<<<<')
    }
}

MysqlUserAdapter.prototype.signin = async (email, passwordUser) => {
    try{
        const sql = 'SELECT * FROM tb_User WHERE email=?',
         params = [email],
         [result] = await pool.query(sql, params)

        if(result.length === 0) return {err: true, data: {}, token:"", msg: "Email not found"}

        const passComp = await compare(passwordUser, result[0].passwordUser)

        if(!passComp) 
            return {err: true, data: {}, token:"", msg: "Incorrect password"} 
        else
            return {err: false, data: toDTOModel(result[0]), msg: "Welcome!!"}
    }catch(err){
        console.log('>>>>>>>>>> ', err.message, ' <<<<<<<<<<')
    }

}

MysqlUserAdapter.prototype.findById = async (id) => {
    try{
        const sql = 'SELECT * FROM tb_User WHERE idUser=?',
         params = [id],
         [result] = await pool.query(sql, params)

        if(result.length === 0) return {err: true, data:{}, msg:"User not found"}

        return {err: false, data: toDTOModel(result[0]), msg:"Successful"}
    }catch(err){
        console.log('>>>>>>>>>> ', err.message, ' <<<<<<<<<<')
    }
}

MysqlUserAdapter.prototype.edit = async (user) => {
    try{
        const u = toDomainModel(user),
         sql = 'UPDATE tb_User SET nameUser=ifnull(?,nameUser), lastNameUser=ifnull(?,lastNameUser), gender=ifnull(?,gender), documentType=ifnull(?,documentType), documentNumber=ifnull(?,documentNumber), address=ifnull(?,address), email=ifnull(?,email) WHERE idUser=?',
         params = [u.nameUser, u.lastNameUser, u.gender, u.documentType, u.documentNumber, u.address, u.email, u.idUser],
         [result] = await pool.query(sql, params)

        return result
    }catch(err){
        console.log('>>>>>>>>>> ', err.message, ' <<<<<<<<<<')
    }
}

MysqlUserAdapter.prototype.editProfilePicture = async (user) => {
    try{
        const u = toDomainModel(user),
         sql = 'UPDATE tb_User SET urlImg=? WHERE idUser=?',
         params = [u.urlImg, u.idUser],
         [result] = await pool.query(sql, params)

        return result
    }catch(err){
        console.log('>>>>>>>>>> ', err.message, ' <<<<<<<<<<')
    }
}

module.exports = MysqlUserAdapter
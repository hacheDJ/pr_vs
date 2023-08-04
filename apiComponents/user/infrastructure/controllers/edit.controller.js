const EditService = require('../../application/edit.service'),
 MysqlUserAdapter = require('../adapters/mysql.user.adapter'),
 validateEdit = require('../helpers/validate.edit')

const editController = async (req, res) => {
    try {
        const id = req.params.id,
         {nameUser, lastNameUser, gender, documentType, documentNumber, address, email} = req.body

        validateEdit(id, nameUser, lastNameUser, gender, documentType, documentNumber, address, email)
        
         const es = new EditService(new MysqlUserAdapter()),
         data = await es.edit({idUser:id, nameUser, lastNameUser, gender, documentType, documentNumber, address, email})

        res.json({err:false, data})

    } catch (err) {
        res.json({err:true, data:err.message})
    }
}

module.exports = editController
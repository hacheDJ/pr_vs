const CategoryService = require("../../application/category.service"),
 MySqlCategoryAdapter = require("../adapters/MySqlCategoryAdapter"),
 validateRegister = require('../helpers/validate.register'),
 validateEdit = require('../helpers/validate.edit')

const listController = async (req, res) => {
    try {
        const cs = new CategoryService(new MySqlCategoryAdapter()),
         data = await cs.list()

        res.json(data)
    } catch (err) {
        res.json({err:true, data:err.message})
    }
}

const registerController = async (req, res) => {
    try{
    const { description } = req.body
    
    validateRegister(description)

    const cs = new CategoryService(new MySqlCategoryAdapter()),
     data = await cs.register({description})

     res.json({err:false, data})
    
    }catch(err){
        res.json({err:true, data:err.message})
    }
}

const editController = async (req, res) => {
    try {
        const id = req.params.id,
         { description } = req.body

        validateEdit(description)

        const cs = new CategoryService(new MySqlCategoryAdapter()),
         data = await cs.edit({idCategory:id, description})

     res.json({err:false, data})

    } catch (err) {
        res.json({err:true, data:err.message})
    }
}

module.exports = { listController, registerController, editController }
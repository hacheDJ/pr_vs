const ProductService = require("../../application/product.service"),
 MySqlProductAdapter = require("../adapters/mysql.product.adapter"),
 validationRegister = require('../helpers/validation.register'),
 validationEdit = require("../helpers/validation.edit"),
 validationEditPicture = require('../helpers/validation.edit.picture')

const listByCategoryController = async (req, res) => {
    try {
        const des = req.params.des
         ps = new ProductService(new MySqlProductAdapter()),
         data = await ps.listByCategory(des)

        res.json(data)

    } catch (err) {
        res.json({err:true, data: err.message})
    }
}

const registerController = async (req, res) => {
    try {
        const urlImg = `\\${req.imgName}`,
         {nameProduct, description, unitPrice, stock, idCategory} = req.body

        validationRegister(nameProduct, description, urlImg, unitPrice, stock, idCategory)

        const ps = new ProductService(new MySqlProductAdapter()),
         data = await ps.register({nameProduct, description, urlImg, unitPrice, stock, idCategory})

        res.json({err:false, data})

    } catch (err) {
        res.json({err:true, data: err.message})
    }
}

const findByIdController = async (req, res) => {
    try {
        const id = req.params.id,
         ps = new ProductService(new MySqlProductAdapter()),
         d = await ps.findById(id)

        res.json(d)

    } catch (err) {
        res.json({err:true, data: err.message})
    }
}

const editController = async (req, res) => {
    try {
        const id = req.params.id,
         {nameProduct, description, unitPrice, stock, idCategory} = req.body

        validationEdit(nameProduct, description, unitPrice, stock, idCategory)

        const ps = new ProductService(new MySqlProductAdapter()),
         d = await ps.edit({idProduct:id, nameProduct, description, unitPrice, stock, idCategory})

        res.json(d)

    } catch (err) {
        res.json({err:true, data: err.message})
    }
}

const editPictureController = async (req, res) => {
    try {
        const id = req.params.id,
        urlImg = `\\${req.imgName}`

        validationEditPicture(id, req.imgName)

        const ps = new ProductService(new MySqlProductAdapter()),
         d = await ps.editPicture({idProduct:id, urlImg})

        res.json(d)

    } catch (err) {
        res.json({err:true, data: err.message})
    }
}

const findByNameController = async (req, res) => {
    try {
        const name = req.params.name,
         ps = new ProductService(new MySqlProductAdapter()),
         data = await ps.findByName(name)

        res.json(data)

    } catch (err) {
        res.json({err:true, data: err.message})
    }
}

module.exports = { listByCategoryController, registerController, findByIdController, editController, editPictureController, findByNameController }

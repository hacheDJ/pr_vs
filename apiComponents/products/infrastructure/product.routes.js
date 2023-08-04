const { Router } = require("express"),
 { listByCategoryController, registerController, findByIdController, editController, editPictureController, findByNameController } = require("./controllers/product.controller"),
 upload = require("./middlewares/multer"),
 { checkAuth } = require('../../user/infrastructure/middlewares/authenticate'),
 { checkAuthRole } = require('../../user/infrastructure/middlewares/permission')

const productRoutes = () => {
    const router = Router()

    router
     .get('/categories/:des', listByCategoryController)
     .post('/register', checkAuth, checkAuthRole(['employee']), upload.fields([{name:"nameProduct", maxCount:1},{name:"description", maxCount:1},{name:"urlImg", maxCount:1},{name:"unitPrice", maxCount:1},{name:"idLot", maxCount:1},{name:"idCategory", maxCount:1}]), registerController)
     .get('/:id', findByIdController)
     .patch('/edit/:id', checkAuth, checkAuthRole(['employee']), editController)
     .put('/edit/picture/:id', checkAuth, checkAuthRole(['employee']), upload.single('urlImg'), editPictureController)
     .get('/find/:name', findByNameController)

    return router
}

module.exports = productRoutes
const { Router } = require("express"),
 { listByCategoryController, registerController, findByIdController, editController } = require("./controllers/product.controller")

const proofOfPayDetailtRoutes = () => {
    const router = Router()

    router
     .get('/', listByCategoryController)

    return router
}

module.exports = proofOfPayDetailtRoutes
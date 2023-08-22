const { Router } = require("express"),
 { listByIdUserController, listByStateController, editEstateController, listByIdController } = require("./controllers/order.controller"),
 { checkAuth } = require('../../user/infrastructure/middlewares/authenticate'),
 { checkAuthRole } = require('../../user/infrastructure/middlewares/permission')

 const orderRoutes = () => {
    const router = Router()

    router
     .get('/user', checkAuth, listByIdUserController)
     .get('/:state', checkAuth, checkAuthRole(['employee', 'admin']), listByStateController)
     .put('/edit/:id', checkAuth, checkAuthRole(['employee', 'admin']), editEstateController)
     .get('/detail/:id', checkAuth, checkAuthRole(['employee', 'admin']), listByIdController)
    return router
}

module.exports = orderRoutes
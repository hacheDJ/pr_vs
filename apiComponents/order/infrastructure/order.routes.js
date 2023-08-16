const { Router } = require("express"),
 { listByIdUserController, listByStateController } = require("./controllers/order.controller"),
 { checkAuth } = require('../../user/infrastructure/middlewares/authenticate'),
 { checkAuthRole } = require('../../user/infrastructure/middlewares/permission')
const orderRoutes = () => {
    const router = Router()

    router
     .get('/user', checkAuth, listByIdUserController)
     .get('/:state', checkAuth, checkAuthRole(['employee', 'admin']), listByStateController)

    return router
}

module.exports = orderRoutes
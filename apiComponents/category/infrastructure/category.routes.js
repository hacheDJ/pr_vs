const { Router } = require("express"),
 { listController, registerController, editController } = require("./controllers/category.controller"),
 { checkAuth } = require('../../user/infrastructure/middlewares/authenticate'),
 { checkAuthRole } = require('../../user/infrastructure/middlewares/permission')

const categoryRoutes = () => {
    const router = Router()

    router
     .get('/', listController)
     .post('/register', checkAuth, checkAuthRole(['employee']), registerController)
     .put('/edit/:id', checkAuth, checkAuthRole(['employee']), editController)

    return router;
}

module.exports = categoryRoutes
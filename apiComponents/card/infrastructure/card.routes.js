const { Router } = require("express"),
 payController = require("./controllers/pay.controller"),
 { checkAuth } = require('../../user/infrastructure/middlewares/authenticate'),
 { checkAuthRole } = require('../../user/infrastructure/middlewares/permission')

const cardRoutes = () => {
    const router = Router()

    router
     .post('/pay', checkAuth, checkAuthRole(['client','employee']), payController)

    return router
}

module.exports = cardRoutes
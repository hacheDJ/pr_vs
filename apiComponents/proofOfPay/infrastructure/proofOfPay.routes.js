const { Router } = require("express"),
 { registerController, findProofOfpayDetailByIdProofOfPayController } = require("./controllers/proofOfPay.controller"),
 { checkAuth } = require('../../user/infrastructure/middlewares/authenticate'),
 { checkAuthRole } = require('../../user/infrastructure/middlewares/permission')

const proofOfPayRoutes = () => {
    const router = Router()

    router
     .post('/register', checkAuth, checkAuthRole(['admin']), registerController)
     .get('/:id', checkAuth, findProofOfpayDetailByIdProofOfPayController)

    return router
}

module.exports = proofOfPayRoutes
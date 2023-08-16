const { verifyToken } = require("../../../user/infrastructure/helpers/jsonwebtoken")
const OrderService = require("../../application/order.service")
const MySqlOrderAdapter = require("../adapters/MySql.order.adapter")

const listByIdUserController = (req, res) => {
    try {
        const token = req.headers.authorization.split(' ').pop(),
         tokenData = verifyToken(token),
         id = tokenData.id,
         os = new OrderService(new MySqlOrderAdapter()),
         data = os.listByIdUser(id)

         data.then(d => res.json(d[0][0]))
    } catch (err) {
        res.json({err:true, data:err.message})
    }
}

const listByStateController = (req, res) => {
    try {console.log(req.params.state);
        const state = req.params.state,
         os = new OrderService(new MySqlOrderAdapter()),
         data = os.listByState(state)

         data.then(d => res.json(d[0][0]))

    } catch (err) {
        res.json({err:true, data:err.message})
    }
}

module.exports = { listByIdUserController, listByStateController }
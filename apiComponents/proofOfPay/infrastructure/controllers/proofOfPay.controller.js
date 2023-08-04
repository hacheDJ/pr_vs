const ProofOfPayService = require('../../application/proofOfPay.service'),
 MySqlProofOfPayAdapter = require("../adapters/MySql.proofOfPay.adapter")

const registerController = async (req, res) => {
    try {
     const { idUser, paymentMethod, listProofOfPayDetail, placeOfDelivery, deliveryDate } = req.body,
     pops = new ProofOfPayService(new MySqlProofOfPayAdapter()),
     data = await pops.register({ idUser, paymentMethod }, listProofOfPayDetail, {placeOfDelivery, deliveryDate})
    
     res.json(data)

    } catch (err) {
        res.json({err:true, data:err.message});
    }

}

const findProofOfpayDetailByIdProofOfPayController = async (req, res) => {
    try {
     const id = req.params.id,
      pops = new ProofOfPayService(new MySqlProofOfPayAdapter()),
      data = await pops.findProofOfpayDetailByIdProofOfPay(id)

     res.json(data)

    } catch (err) {
        console.log(err.message);
    }

}

module.exports = { registerController, findProofOfpayDetailByIdProofOfPayController }
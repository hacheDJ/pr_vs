const { verifyToken } = require('../../../user/infrastructure/helpers/jsonwebtoken')
const CardService = require('../../application/card.service'),
 MySqlCardAdapter = require("../adapters/mysql.card.adapter"),
 ProofOfPayService = require('../../../proofOfPay/application/proofOfPay.service'),
 MySqlProofOfPayAdapter = require('../../../proofOfPay/infrastructure/adapters/mysql.proofOfPay.adapter')

const payController = async (req, res) => {

    try {
        const token = req.headers.authorization.split(' ').pop(),
           tokenData = verifyToken(token)

        if(Date.now() > (tokenData.exp * 1000)){
            throw new Error('Your session expired')
        }

        const {cardType, cardNumber, holder, dateOfExpiry, cvv, passCard, totalAmount} = req.body
         cs = new CardService(new MySqlCardAdapter()),
         d = await cs.pay({cardType, cardNumber, holder, dateOfExpiry, cvv, passCard})

         if(d.err)
            res.json(d)
        else{

            if(d.data.balance < totalAmount){
                res.json({err:false, data: "Insufficient balance"})

            }else{
                const remainigBalance = d.data.balance - totalAmount,
                 {idCard} = d.data,
                 d2 = await cs.edit({balance:remainigBalance, idCard})

            if(d2.affectedRows <= 0)
                res.status(500).json({err:false, data: "Payment could not be completed"})
            else{
                
                //const token = req.headers.authorization.split(' ').pop(),
                 //tokenData = verifyToken(token),
                 const idUser = tokenData.id,
                 {listProofOfPayDetail, placeOfDelivery, deliveryDate, contactNumber} = req.body,
                 pops = new ProofOfPayService(new MySqlProofOfPayAdapter()),
                 d3 = await pops.register({ idUser, paymentMethod: cardType }, listProofOfPayDetail, {placeOfDelivery, deliveryDate, contactNumber})
                
                if(d3.affectedRows === 1) res.json({err:false, data:"Registered Order"})
            }

        }

        }
    } catch (err) {
        res.json({err:false, data:err.message})
    }


}

module.exports = payController
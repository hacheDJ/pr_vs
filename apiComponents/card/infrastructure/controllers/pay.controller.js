const CardService = require('../../application/card.service'),
 MySqlCardAdapter = require("../adapters/mysql.card.adapter"),
 ProofOfPayService = require('../../../proofOfPay/application/proofOfPay.service'),
 MySqlProofOfPayAdapter = require('../../../proofOfPay/infrastructure/adapters/mysql.proofOfPay.adapter')

const payController = async (req, res) => {
    const {cardNumber, holder, dateOfExpiry, cvv, passCard, totalAmount} = req.body
     cs = new CardService(new MySqlCardAdapter()),
     d = await cs.pay({cardNumber, holder, dateOfExpiry, cvv, passCard})

    if(d.err)
        res.json(d)
    else{
        if(d.data.balance < totalAmount){
            res.json({data: "Insufficient balance"})      
        }else{
            const remainigBalance = d.data.balance - totalAmount,
             {idCard} = d.data,
             d2 = await cs.edit({balance:remainigBalance, idCard})

            if(d2.affectedRows <= 0)
                res.status(500).json({data: "Payment could not be completed"})
            else{
                const {idUser, paymentMethod, listProofOfPayDetail, placeOfDelivery, deliveryDate, contactNumber} = req.body,
                 pops = new ProofOfPayService(new MySqlProofOfPayAdapter()),
                 d3 = await pops.register({ idUser, paymentMethod }, listProofOfPayDetail, {placeOfDelivery, deliveryDate, contactNumber})
     
                res.json({err:false, data:d3})
            }

        }

    }


}

module.exports = payController
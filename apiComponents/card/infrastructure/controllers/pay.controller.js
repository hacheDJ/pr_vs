const CardService = require('../../application/card.service'),
 MySqlCardAdapter = require("../adapters/mysql.card.adapter"),
 ProofOfPayService = require('../../../proofOfPay/application/proofOfPay.service'),
 MySqlProofOfPayAdapter = require('../../../proofOfPay/infrastructure/adapters/mysql.proofOfPay.adapter')

const payController = async (req, res) => {
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
                const {idUser, listProofOfPayDetail, placeOfDelivery, deliveryDate, contactNumber} = req.body,
                 pops = new ProofOfPayService(new MySqlProofOfPayAdapter()),
                 d3 = await pops.register({ idUser, paymentMethod: cardType }, listProofOfPayDetail, {placeOfDelivery, deliveryDate, contactNumber})
                
                if(d3.affectedRows === 1) res.json({err:false, data:"Registered Order"})
            }

        }

    }


}

module.exports = payController
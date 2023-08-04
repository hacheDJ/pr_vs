function ProofOfPayRepository(){}

ProofOfPayRepository.prototype.register = function(proofOfPay, listProofOfPayDetail, order){
    throw new Error('Need to implement the method register')
}

ProofOfPayRepository.prototype.findProofOfpayDetailByIdProofOfPay = function(idProofOfPay){
    throw new Error('Need to implement the method findProofOfpayDetailByIdProofOfPay')
}
module.exports = ProofOfPayRepository
function ProofOfPayService(proofOfPayRepository){
    this.proofOfPayRepository = proofOfPayRepository
}

ProofOfPayService.prototype.register = function(proofOfPay, listProofOfPayDetail, order){
    return this.proofOfPayRepository.register(proofOfPay, listProofOfPayDetail, order)
}

ProofOfPayService.prototype.findProofOfpayDetailByIdProofOfPay = function(idProofOfPay){
    return this.proofOfPayRepository.findProofOfpayDetailByIdProofOfPay(idProofOfPay)
}
module.exports = ProofOfPayService
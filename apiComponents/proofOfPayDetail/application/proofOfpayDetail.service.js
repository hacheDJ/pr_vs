function ProofOfPayDetailService(proofOfPayDetailRepository){
    this.proofOfPayDetailRepository = ProofOfPayDetailRepository
}

ProofOfPayDetailService.prototype.register = function(proofOfPayDetail){
    return this.proofOfPayDetailRepository.register(proofOfPayDetail)
}

module.exports = ProofOfPayDetailService
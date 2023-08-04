const ProofOfPayDetailRepository = require("../../domain/repositories/proofOfPayDetail.repository");

function MySqlProofOfPayDetailAdapter(){}

MySqlProofOfPayDetailAdapter.prototype = new ProofOfPayDetailRepository

MySqlProofOfPayDetailAdapter.prototype.register = (proofOfPayDetail) => {

}

module.exports = MySqlProofOfPayDetailAdapter
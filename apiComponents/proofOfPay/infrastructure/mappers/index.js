const ProofOfPay = require("../../domain/proofOfPay"),
 ProofOfPayDTO = require("./proofOfPay.dto")

const toDomainModel = (proofOfPay) => {
    const {idProofOfPay, idUser, paymentMethod, payDate} = proofOfPay

    return new ProofOfPay(idProofOfPay, idUser, paymentMethod, payDate)
}

const toDTOModel = (proofOfPay) => {
    const {idProofOfPay, idUser, paymentMethod, payDate} = proofOfPay

    return new ProofOfPayDTO(idProofOfPay, idUser, paymentMethod, payDate)
}

module.exports = { toDTOModel, toDomainModel }
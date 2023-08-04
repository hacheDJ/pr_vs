const Card = require('../../domain/card')

const toDomainModel = (userDTO) => {
    const {idCard, accountNumber, cardNumber, holder, cardIssuer, dateOfExpiry, cvv, balance, passCard} = userDTO

    return new Card(idCard, accountNumber, cardNumber, holder, cardIssuer, dateOfExpiry, cvv, balance, passCard)
}

module.exports = { toDomainModel }
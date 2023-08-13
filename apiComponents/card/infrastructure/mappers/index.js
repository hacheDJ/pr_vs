const Card = require('../../domain/card')

const toDomainModel = (userDTO) => {
    const {idCard, cardType, accountNumber, cardNumber, holder, cardIssuer, dateOfExpiry, cvv, balance, passCard} = userDTO

    return new Card(idCard, cardType, accountNumber, cardNumber, holder, cardIssuer, dateOfExpiry, cvv, balance, passCard)
}

module.exports = { toDomainModel }
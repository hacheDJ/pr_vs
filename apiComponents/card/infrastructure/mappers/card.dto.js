function CardDTO(idCard, cardType, accountNumber, cardNumber, holder, cardIssuer, dateOfExpiry, cvv, balance, passCard){
    this.idCard = idCard
    this.cardType = cardType
    this.accountNumber = accountNumber
    this.cardNumber = cardNumber
    this.holder = holder
    this.cardIssuer = cardIssuer
    this.dateOfExpiry = dateOfExpiry
    this.cvv = cvv
    this.balance = balance
    this.passCard = passCard
}

module.exports = CardDTO
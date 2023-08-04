function Card(idCard, accountNumber, cardNumber, holder, cardIssuer, dateOfExpiry, cvv, balance, passCard){
    this.idCard = idCard
    this.accountNumber = accountNumber
    this.cardNumber = cardNumber
    this.holder = holder
    this.cardIssuer = cardIssuer
    this.dateOfExpiry = dateOfExpiry
    this.cvv = cvv
    this.balance = balance
    this.passCard = passCard
}

module.exports = Card
function CardService(cardRepository){
    this.cardRepository = cardRepository
}

CardService.prototype.pay = function(card){
    return this.cardRepository.pay(card)
}

CardService.prototype.edit = function(card){
    return this.cardRepository.edit(card)
}

module.exports = CardService
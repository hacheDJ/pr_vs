function CardRepository(){}

CardRepository.prototype.pay = function(card){
    throw new Error('Need to implement the method pay')
}

CardRepository.prototype.edit = function(card){
    throw new Error('Need to implement the method edit')
}

module.exports = CardRepository
function OrderRepository(){}

OrderRepository.prototype.listByIdUser = function (idUser){
    throw new Error('Need to implement the method findByIdUser')
}

OrderRepository.prototype.listByState = function (state){
    throw new Error('Need to implement the method listByState')
}

module.exports = OrderRepository
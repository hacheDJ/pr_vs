function OrderRepository(){}

OrderRepository.prototype.listByIdUser = function (idUser){
    throw new Error('Need to implement the method findByIdUser')
}

OrderRepository.prototype.listByState = function (state){
    throw new Error('Need to implement the method listByState')
}

OrderRepository.prototype.editState = function (order){
    throw new Error('Need to implement the method editState')
}

OrderRepository.prototype.listById = function (id){
    throw new Error('Need to implement the method listById')
}

module.exports = OrderRepository
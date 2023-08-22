function OrderService(orderRepository){
    this.orderRepository = orderRepository
}

OrderService.prototype.listByIdUser = function(idUser){
    return this.orderRepository.listByIdUser(idUser)
}

OrderService.prototype.listByState = function(state){
    return this.orderRepository.listByState(state)
}

OrderService.prototype.editState = function(order){
    return this.orderRepository.editState(order)
}

OrderService.prototype.listById = function(id){
    return this.orderRepository.listById(id)
}

module.exports = OrderService
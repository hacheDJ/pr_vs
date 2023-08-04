function OrderService(orderRepository){
    this.orderRepository = orderRepository
}

OrderService.prototype.listByIdUser = function(idUser){
    return this.orderRepository.listByIdUser(idUser)
}

OrderService.prototype.listByState = function(state){
    return this.orderRepository.listByState(state)
}

module.exports = OrderService
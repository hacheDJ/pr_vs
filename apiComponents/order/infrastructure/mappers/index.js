const OrderDto = require("./order.dto")
const Order = require("../../domain/order")


const toDTOModel = (order) => {
    const { idOrder, idProofOfPay, placeOfDelivery, deliveryDate, orderState, contactNumber } = oerder

    return new OrderDto(idOrder, idProofOfPay, placeOfDelivery, deliveryDate, orderState, contactNumber)
}

const toDomainModel = (orderDto) => {
    const { idOrder, idProofOfPay, placeOfDelivery, deliveryDate, orderState, contactNumber } = orderDto

    return new Order(idOrder, idProofOfPay, placeOfDelivery, deliveryDate, orderState, contactNumber)
}

module.exports = { toDTOModel, toDomainModel }
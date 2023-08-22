function OrderDto(idOrder, idProofOfPay, placeOfDelivery, deliveryDate, orderState, contactNumber){
    this.idOrder = idOrder
    this.idProofOfPay = idProofOfPay
    this.placeOfDelivery = placeOfDelivery
    this.deliveryDate = deliveryDate
    this.orderState = orderState
    this.contactNumber = contactNumber
}

module.exports = OrderDto
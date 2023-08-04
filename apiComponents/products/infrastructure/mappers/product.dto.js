function ProductDTO(idProduct, nameProduct, description, urlImg, unitPrice, creationDate, modificationDate, idLot, stock, idCategory){
    this.idProduct = idProduct
    this.nameProduct = nameProduct
    this.description = description
    this.urlImg = urlImg
    this.unitPrice = unitPrice
    this.creationDate = creationDate
    this.modificationDate = modificationDate
    this.idLot = idLot
    this.stock = stock
    this.idCategory = idCategory
}

module.exports = ProductDTO
function Product(idProduct, nameProduct, description, urlImg, unitPrice, creationDate, modificationDate, stock, idCategory){
    this.idProduct = idProduct
    this.nameProduct = nameProduct
    this.description = description
    this.urlImg = urlImg
    this.unitPrice = unitPrice
    this.creationDate = creationDate
    this.modificationDate = modificationDate
    this.stock = stock
    this.idCategory = idCategory
}

module.exports = Product
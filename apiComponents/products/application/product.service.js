function ProductService(productRepository){
    this.productRepository = productRepository
}

ProductService.prototype.listByCategory = function(des){
    return this.productRepository.listByCategory(des)
}

ProductService.prototype.register = function(product){
    return this.productRepository.register(product)
}

ProductService.prototype.findById = function(id){
    return this.productRepository.findById(id)
}

ProductService.prototype.edit = function(product){
    return this.productRepository.edit(product)
}

ProductService.prototype.editPicture = function(product){
    return this.productRepository.editPicture(product)
}

ProductService.prototype.findByName = function(nameProduct){
    return this.productRepository.findByName(nameProduct)
}

module.exports = ProductService
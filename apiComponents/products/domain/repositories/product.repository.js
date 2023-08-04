function ProductRepository(){}

ProductRepository.prototype.listByCategory = function (des){
    throw new Error('Needs to implement the method list')
}

ProductRepository.prototype.register = function (product){
    throw new Error('Needs to implement the method register')
}

ProductRepository.prototype.findById = function (id){
    throw new Error('Needs to implement the method findById')
}

ProductRepository.prototype.edit = function (product){
    throw new Error('Needs to implement the method edit')
}

ProductRepository.prototype.editPicture = function (product){
    throw new Error('Needs to implement the method editPicture')
}

ProductRepository.prototype.findByName = function (nameProduct){
    throw new Error('Needs to implement the method findByName')
}

module.exports = ProductRepository
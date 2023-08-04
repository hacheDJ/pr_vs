const User = require('../../domain/product'),
 ProductDTO = require('./product.dto')

const toDomainModel = (productDTO) => {
    const {idProduct, nameProduct, description, urlImg, unitPrice, creationDate, modificationDate, stock, idCategory} = productDTO
    
    return new User(idProduct, nameProduct, description, urlImg, unitPrice, creationDate, modificationDate, stock, idCategory);
}

const toDTOModel = (product) => {
    const {idProduct, nameProduct, description, urlImg, unitPrice, creationDate, modificationDate, stock, idCategory} = product
    
    return new ProductDTO(nameProduct, description, urlImg, unitPrice, creationDate, modificationDate, stock, idCategory);
}

module.exports = { toDTOModel, toDomainModel }


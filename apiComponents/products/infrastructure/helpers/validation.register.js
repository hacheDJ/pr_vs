const validationRegister = (nameProduct, description, urlImg, unitPrice, stock, idCategory) => {
    if(!nameProduct || nameProduct === undefined)
        throw new Error('Enter a name of product')
}

module.exports = validationRegister
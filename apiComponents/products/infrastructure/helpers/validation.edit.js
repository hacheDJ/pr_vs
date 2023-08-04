const validationEdit = (nameProduct, description, unitPrice, stock, idCategory) => {
    if(nameProduct === undefined)
        throw new Error('Enter a name product')
}

module.exports = validationEdit
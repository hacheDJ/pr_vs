const validateRegister = (description) => {
    if(!description || description === undefined || description === '')
        throw new Error('Enter a category name')
}

module.exports = validateRegister
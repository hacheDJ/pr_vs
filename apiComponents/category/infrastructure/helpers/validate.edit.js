const validateEdit = (description) => {
    if(!description || description === undefined || description === '')
        throw new Error('Enter a category name')
}

module.exports = validateEdit
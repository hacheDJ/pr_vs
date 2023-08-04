const Category = require("../../domain/category"),
 CategoryDTO = require("./categoryDTO")

const toDomainModel = (categoryDTO) => {
    const {idCategory, description, creationDate, modificationDate} = categoryDTO

    return new Category(idCategory, description, creationDate, modificationDate)
}

const toDTOModel = (category) => {
    const {idCategory, description, creationDate, modificationDate} = category

    return new CategoryDTO(idCategory, description, creationDate, modificationDate)
}

module.exports = { toDTOModel, toDomainModel }
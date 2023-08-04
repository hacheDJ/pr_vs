const User = require("../../domain/user")
const UserDTO = require("./user.dto")

const toDTOModel = (user) => {
    const { idUser, nameUser, lastNameUser, gender, documentType, documentNumber, address, email, urlImg, role, state, creationDate } = user

    return new UserDTO(idUser, nameUser, lastNameUser, gender, documentType, documentNumber, address, email, urlImg, role, state, creationDate)
}

const toDomainModel = (userDTO) => {
    const { idUser, nameUser, lastNameUser, gender, documentType, documentNumber, address, email, urlImg, passwordUser, role, state, creationDate } = userDTO

    return new User(idUser, nameUser, lastNameUser, gender, documentType, documentNumber, address, email, passwordUser, urlImg, role, state, creationDate)
}

module.exports = { toDTOModel, toDomainModel }
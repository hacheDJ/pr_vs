function User(idUser, nameUser, lastNameUser, gender, documentType,
    documentNumber, address, email, passwordUser, urlImg, role, state, creationDate){
    this.idUser = idUser
    this.nameUser = nameUser
    this.lastNameUser = lastNameUser
    this.gender = gender
    this.documentType = documentType
    this.documentNumber = documentNumber
    this.address = address
    this.email = email
    this.passwordUser = passwordUser
    this.urlImg = urlImg
    this.role = role
    this.state = state
    this.creationDate = creationDate
}

module.exports = User
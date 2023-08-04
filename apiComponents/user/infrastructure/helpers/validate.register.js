const validateRegister = ({nameUser, lastNameUser, gender, documentType, documentNumber, address, email, passwordUser, role, state, confPass}) => {
    /*if(!nameUser) throw new Error('User name not define')
    if(typeof nameUser != 'string') throw new Error('Not string')*/
    if(passwordUser !== confPass)
        throw new Error('Passwords do not match!')
}

module.exports = validateRegister
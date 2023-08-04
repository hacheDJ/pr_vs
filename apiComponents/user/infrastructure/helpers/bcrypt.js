const bcrypt = require('bcryptjs')

const encrypt = async (txtPlain) => {
    return await bcrypt.hash(txtPlain, 10) 
}

const compare = async (passTxtPlain, hashPass) => {
    return await bcrypt.compare(passTxtPlain, hashPass)
}

module.exports = {encrypt, compare}
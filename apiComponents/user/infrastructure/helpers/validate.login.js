const validateLogin = (email, passwordUser) => {
    if(!email) throw new Error('Enter your email')
    if(!passwordUser) throw new Error('Enter your password')
}

module.exports = validateLogin
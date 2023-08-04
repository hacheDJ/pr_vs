function SigninService(userRepository){
    this.userRepository = userRepository
}

SigninService.prototype.signin = function(email, passwordUser){
    console.log('signinService');
    return this.userRepository.signin(email, passwordUser)
}

module.exports = SigninService
function RegisterService(userRepository){
    this.userRepository = userRepository
}

RegisterService.prototype.register = function(user){
    return this.userRepository.register(user)
}

module.exports = RegisterService
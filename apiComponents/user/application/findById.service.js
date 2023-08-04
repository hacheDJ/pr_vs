function FindByIdService(userRepository){
    this.userRepository = userRepository
}

FindByIdService.prototype.findById = function(id){
    return this.userRepository.findById(id)
}

module.exports = FindByIdService
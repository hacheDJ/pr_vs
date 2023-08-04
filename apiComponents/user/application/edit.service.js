function EditService(userRepository){
    this.userRepository = userRepository
}

EditService.prototype.edit = function(user){
    return this.userRepository.edit(user)
}

module.exports = EditService
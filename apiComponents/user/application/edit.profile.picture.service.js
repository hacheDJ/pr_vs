function editProfilePictureService(userRepository){
    this.userRepository = userRepository
}

editProfilePictureService.prototype.editProfilePicture = function(user){
    return this.userRepository.editProfilePicture(user)
}

module.exports = editProfilePictureService
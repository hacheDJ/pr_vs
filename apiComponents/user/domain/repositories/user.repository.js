function UserRepository(){}

UserRepository.prototype.register = function(user){
    throw Error('Need to implement the method register')
}

UserRepository.prototype.read = function(){
    throw Error('Need to implement the method read')
}

UserRepository.prototype.edit = function(user){
    throw Error('Need to implement the method edit')
}

UserRepository.prototype.findById = function(id){
    throw Error('Need to implement the method findById')
}

UserRepository.prototype.signin = function(email, passwordUser){
    throw Error('Need to implement the method signin')
}

UserRepository.prototype.editProfilePicture = function(user){
    throw Error('Need to implement the method findById')
}

module.exports = UserRepository
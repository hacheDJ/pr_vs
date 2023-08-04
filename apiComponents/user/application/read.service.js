const UserRepository = require("../domain/repositories/user.repository")

/*const readService = function (userRepository) {
    //userRepository = new UserRepository()
    return userRepository.read()
}

module.exports = readService*/

function ReadService(userRepository){
    this._userRepository = userRepository
}

ReadService.prototype.read = function(){
    console.log('service')
    return this._userRepository.read()
}

module.exports = ReadService
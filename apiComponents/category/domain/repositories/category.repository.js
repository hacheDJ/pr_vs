function CategoryRepository(){}

CategoryRepository.prototype.list = function(){
    throw new Error('Need to implement the method list')
}

CategoryRepository.prototype.register = function (category){
    throw new Error('Need to implement the method register')
}

CategoryRepository.prototype.edit = function (category){
    throw new Error('Need to implement the method edit')
}

CategoryRepository.prototype.findById = function (id){
    throw new Error('Need to implement the method findById')
}

module.exports = CategoryRepository
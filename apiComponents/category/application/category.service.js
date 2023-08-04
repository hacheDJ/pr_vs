function CategoryService(categoryRepository){
    this.categoryRepository = categoryRepository
}

CategoryService.prototype.list = function(){
    return this.categoryRepository.list()
}

CategoryService.prototype.register = function(category){
    return this.categoryRepository.register(category)
}

CategoryService.prototype.edit = function(category){
    return this.categoryRepository.edit(category)
}

CategoryService.prototype.findById = function(id){
    return this.categoryRepository.findById(id)
}

module.exports = CategoryService
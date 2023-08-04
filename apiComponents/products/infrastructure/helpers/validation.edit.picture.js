const validationEditPicture = (id, urlImg) => {
    if(!urlImg || urlImg === undefined)
        throw new Error('Enter a photo')

}

module.exports = validationEditPicture
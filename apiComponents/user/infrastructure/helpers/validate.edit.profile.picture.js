const validateEditProfilePicture = (urlImg) => {
    if(!urlImg || urlImg === undefined) throw new Error('Enter a photo')
}

module.exports = validateEditProfilePicture
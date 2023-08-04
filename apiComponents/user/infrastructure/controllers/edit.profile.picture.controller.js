const editProfilePictureService = require("../../application/edit.profile.picture.service"),
 MysqlUserAdapter = require("../adapters/mysql.user.adapter"),
 validateEditProfilePicture = require('../helpers/validate.edit.profile.picture')

const editProfilePictureController = async (req, res) => {
    try {
        const id = req.params.id

        validateEditProfilePicture(req.imgName)
        
        const urlImg = `\\${req.imgName}`
         us = new editProfilePictureService(new MysqlUserAdapter()),
         data = await us.editProfilePicture({idUser:id, urlImg})

        res.json({err:false, data})

    } catch (err) {
        res.json({err:true, data: err.message})
    }
}

module.exports = editProfilePictureController
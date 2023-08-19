const { Router } = require("express"),
 { signinController, readController, registerController, editController, findByIdController, editProfilePictureController, verifyTokenCotroller} = require("./controllers"),
 { checkAuth, alreadyAuth } = require("./middlewares/authenticate"),
 { checkAuthRole } = require("./middlewares/permission"),
 upload = require('../../products/infrastructure/middlewares/multer')

const userRoutes = () => {
    const router = Router()

    router
     .get('/', checkAuth, checkAuthRole(['employee']), readController)
     .post('/signup', alreadyAuth, registerController)
     .post('/signin', alreadyAuth, signinController)
     .patch('/edit/:id', checkAuth, editController)
     .get('/detail', checkAuth, findByIdController)
     .put('/edit/profile-picture/:id', checkAuth, upload.single('urlImg'), editProfilePictureController)
     .get('/verify-token', verifyTokenCotroller)

    return router
}

module.exports = userRoutes
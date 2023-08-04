require('dotenv').config()

module.exports = {
    PORT: process.env.PORT_P,
    DB: {
        host: process.env.HOST_P,
        database: process.env.DATABASE_P,
        username: process.env.USER_NAME_P,
        password: process.env.PASSWORD_P
    }
}
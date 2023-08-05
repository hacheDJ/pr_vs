require('dotenv').config()

module.exports = {
    PORT: process.env.PORT,
    DB: {
        port: process.env.PORT_DB,
        host: process.env.HOST,
        database: process.env.DATABASE,
        user: process.env.USER_NAME,
        password: process.env.PASSWORD
    }
}
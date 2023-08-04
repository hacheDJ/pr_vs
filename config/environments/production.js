require('dotenv').config()

module.exports = {
    PORT: process.env.PORT_P,
    DB: {
        host: process.env.HOST,
        database: process.env.DATABASE,
        username: process.env.USER_NAME,
        password: process.env.PASSWORD
    }
}
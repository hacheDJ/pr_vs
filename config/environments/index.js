require('dotenv').config()

const DEVELOPMENT = require('./development'),
 PRODUCTION = require('./production'),
 QA = require('./qa'),
 { NODE_ENV } = process.env

 let currentEnv = DEVELOPMENT

 switch (NODE_ENV) {
    case 'production':
        currentEnv = PRODUCTION
        break;

    case 'qa':
        currentEnv = QA
        break;
 }

 module.exports = currentEnv
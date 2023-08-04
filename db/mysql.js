const mysql = require('mysql2/promise'),
 { DB } = require('../config/environments')

const pool = mysql.createPool(DB)

console.log('Connection MySQL successfully!');


module.exports = { pool}

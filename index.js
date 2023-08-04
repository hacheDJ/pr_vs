/*const { PORT } = require('./config/environments')

console.log('hey!')
console.log(PORT);*/

//const UserController = require('./apiComponents/users/application/create.service');
//const UserRepository = require('./apiComponents/users/domain/repositories/user.repository');
const Run = require('./server/run'),
 Server = require('./server/server'),
 config = require('./config/environments'),
 express = require('express'),
 router = require('./routes/router'),
 { pool } = require('./db/mysql')

 const server = new Server(config, express, router()),
 run = new Run(server)
 
 //console.log(typeof run, ' - ', run.startup());
 
 run.startup().catch((err) => {
     console.log(err);
    })

/*const result = async () => await pool.query('SELECT * FROM tb_User')

result().then((data) => {
    console.log(data[0]);
})*/

/*const userRep = new UserRepository()
const ctrl = new UserController()
console.log(Object.getPrototypeOf(ctrl));*/
    
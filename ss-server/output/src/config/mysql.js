"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_typescript_1 = require("sequelize-typescript");
var db_1 = require("./db");
var sequelize = new sequelize_typescript_1.Sequelize({
    database: db_1.MYSQL_CONF.database,
    host: '192.168.1.112 ',
    dialect: 'mysql',
    username: 'root',
    password: 'root',
    storage: ':memory:',
    // models: [__dirname + '/models'], // or [Player, Team],
    define: {
        createdAt: false,
        updatedAt: false,
        deletedAt: false,
    },
});
sequelize.addModels([__dirname + '/../model/*.model.ts']);
// sequelize.addModels([UserTable]);
// setImmediate(() => {
//  UserTable.create({
//     uname: 'admin',
//     upass: '123',
//     rule: 1,
//   });
// //   u.save();
//   UserTable.findOne().then((user) => {
//     user.upass = '123456';
//     console.log(user);
//     return user.save();
//   });
// }, 1000);
// Person
//  .findOne()
//  .then(person => {
//      person.age = 100;
//      return person.save();
//  });
// Person
//  .update({
//    name: 'bobby'
//  }, {where: {id: 1}})
//  .then(() => {
//  });
// CREATE TABLE IF NOT EXISTS `user`(
//     `id` INT UNSIGNED AUTO_INCREMENT,
//     `uname` VARCHAR(10) NOT NULL,
//     `upass` VARCHAR(100) NOT NULL,
//     `rule` int(4) NOT NULL,
//     PRIMARY KEY ( `runoob_id` )
//  )ENGINE=InnoDB DEFAULT CHARSET=utf8;
sequelize
    .authenticate()
    .then(function () {
    console.log('Connection has been established successfully.');
    // sequelize.addModels([UserTable]);
    setImmediate(function () {
        // let u = new UserTable();
        // u.$get('uname').then((res) => {
        //   console.log(res);
        // });
        // const person = new UserTable({ uname: 'bob', upass: '99',rule:1 });
        //   person.save();
        // UserTable.findOne().then((user) => {
        //   // user.upass = '123456';
        //   console.log(user);
        //   return user.save();
        // });
        console.log(sequelize.models);
    }, 1000);
})
    .catch(function (err) {
    console.error('Unable to connect to the database:', err);
});
exports.default = sequelize;

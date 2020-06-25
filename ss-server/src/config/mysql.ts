import { Sequelize } from 'sequelize-typescript';
import { MYSQL_CONF } from './db';
const sequelize = new Sequelize({
  database: MYSQL_CONF.database,
  host: MYSQL_CONF.host,
  dialect: 'mysql',
  username: MYSQL_CONF.user,
  password: MYSQL_CONF.password,
  storage: ':memory:',
  // models: [__dirname + '/models'], // or [Player, Team],
  define: {
    createdAt: false,
    updatedAt: false,
    deletedAt: false,
  },
});

sequelize.addModels([__dirname + '/../model/*.model.ts']);

import UserTable from '../model/user.model';
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
  .then(() => {
    console.log('Connection has been established successfully.');
    // sequelize.addModels([UserTable]);
    setImmediate(() => {
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

      console.log(sequelize.models)



    }, 1000);
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

  export default sequelize;
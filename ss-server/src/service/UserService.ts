import { provide } from 'inversify-binding-decorators';
// import { injectable, inject } from 'inversify';
// import userTable from '../model/user.model';
import sequelize from '../config/mysql';
const MAX_ROW = 30;
@provide('user')
class UserService {
  // private usertable;

  // constructor(@inject('type-userTable') usertable) {
  //   this.usertable = usertable;
  //   // 实现不了
  // }

  async getData(opt) {
    return sequelize.models.UserTable.findOne({
      where: {
        ...opt,
      },
    });
  }

  async register({ username, password }) {
    let allRows = await sequelize.models.UserTable.findAll();
    if (allRows.length >= MAX_ROW) {
      return {
        dangerous: true,
      };
    }
    let exist = await sequelize.models.UserTable.findAll({
      where: { username },
    });
    if (exist.length >= 1) {
      return {
        exist: true,
      };
    }

    let result = await sequelize.models.UserTable.create(
      {
        username,
        password,
        rule: 1,
      },
      {
        raw: true,
      }
    );
    return result;
  }
}

export default UserService;

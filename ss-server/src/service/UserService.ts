import { provide } from 'inversify-binding-decorators';
// import { injectable, inject } from 'inversify';
// import userTable from '../model/user.model';
import sequelize from '../config/mysql';
const MAX_ROW = 30;
const MAX_AGE = 5 * 60 * 1000;
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
    let exist = await this.checkUsernameExist(username);

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

  async checkUsernameExist(username) {
    return sequelize.models.UserTable.findAll({
      where: { username },
    });
  }
  async checkSMSExist(code) {
    let date = Date.now() + MAX_AGE;
    return sequelize.models.UserTable.findAll({
      where: {
        code,
        dead_line: {
          $gte: date,
        },
      },
    });
  }

  async insertSms({ email, code, date, isLive }) {
    let result = await sequelize.models.SmsTable.create(
      {
        username: email,
        code,
        isLive,
        dead_line: date + MAX_AGE,
      },
      {
        raw: true,
      }
    );
    console.log('sms 插入成功' ,result);
    return result;
  }


  async updateSmsLiveStatus({ email, code, date, isLive }) {
    sequelize.models.SmsTable.update(
      { isLive: 0 },
      {
        where: {
          username: email,
          code,
          isLive,
          dead_line: date + MAX_AGE,
        },
      }
    ).then((res) => {
      console.log('修改isLIve status Sucess～～');
    });
  }
}

export default UserService;

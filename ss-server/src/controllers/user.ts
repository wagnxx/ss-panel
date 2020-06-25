import {
  controller,
  TYPE,
  httpGet,
  interfaces,
  httpPost,
  fluentProvide,
  inject,
  Router,
} from '../ioc/ioc.config';

import checkLogin from '../middleware/checkLogin';
import { ErrorModel, SuccessModel } from '../model/resModel';
import { genPssword } from '../utils/crypto';
import { VERSION } from '../config/project.property';

@controller(`/${VERSION}/user`)
@(fluentProvide(TYPE.Controller).whenTargetNamed('UserController').done())
export default class UserController implements interfaces.Controller {
  private userService;
  constructor(@inject('user') userService) {
    this.userService = userService;
  }
  @httpPost('/login')
  private async login(ctx: Router.IRouterContext) {
    let { username, password } = ctx.request.body;
    console.log('body==:', ctx.request.body);
    // const data = await login(username, password);
    password = genPssword(password);

    const data = await this.userService.getData({ username, password });
    // console.log('data', data);
    // ctx.body = data;
    // return;

    if (data?.username) {
      console.log('session:=======:', ctx.session);
      ctx.session.username = data.username;
      ctx.session.rule = data.rule;
      ctx.body = new SuccessModel('登录成功');
    } else {
      ctx.body = new ErrorModel('登录验证失败');
    }
  }
  @httpPost('/register')
  private async register(ctx: Router.IRouterContext) {
    let { username, password } = ctx.request.body; // body
    password = genPssword(password);
    const result = await this.userService.register({ username, password });

    if (result?.dangerous) {
      ctx.body = new ErrorModel('注册超过最大数');
      return;
    }

    if (result?.exist) {
      ctx.body = new ErrorModel('该用户已存在,请重新注册');
      return;
    }

    if (result) {
      console.log('session:=======:', ctx.session);
      console.log('result:=======:', result);
      ctx.session.username = username;
      ctx.body = new SuccessModel('注册成功');
    } else {
      ctx.body = new ErrorModel('注册失败');
    }
  }
  @httpGet('/login-test', checkLogin)
  private async loginTest(ctx: Router.IRouterContext) {
    console.log(ctx.session);
    ctx.body = new SuccessModel(
      {
        session: ctx.session,
      },
      '测试成功登录'
    );
  }
}

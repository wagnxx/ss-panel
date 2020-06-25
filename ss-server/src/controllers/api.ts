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
import { VERSION } from '../config/project.property';

@controller(`/${VERSION}/api`, checkLogin)
@(fluentProvide(TYPE.Controller).whenTargetNamed('ApiPage').done())
export default class ApiPage implements interfaces.Controller {
  private apiService;
  constructor(@inject('api') apiService) {
    this.apiService = apiService;
  }

  @httpGet('/test', checkLogin)
  private async test(ctx: Router.IRouterContext) {
    let result = await this.apiService.getList();
    ctx.body = new SuccessModel(result);
  }

  @httpGet('/ssList', checkLogin)
  private async ssList(ctx: Router.IRouterContext) {
    let result = await this.apiService.getSSList();
    ctx.body = new SuccessModel(result);
  }

  @httpGet('/chekckLogin', checkLogin)
  private async chekckLogin(ctx: Router.IRouterContext) {
    ctx.body = new SuccessModel();
  }
}

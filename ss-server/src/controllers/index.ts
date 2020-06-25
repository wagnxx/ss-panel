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

@controller('/ssr')
@(fluentProvide(TYPE.Controller).whenTargetNamed('IndexPage').done())
export default class IndexPage implements interfaces.Controller {
  @httpGet('/')
  private async indexCase(ctx: Router.IRouterContext) {
    ctx.body = await ctx.render('ssr/index');
  }
}

import { ErrorModel } from '../model/resModel';
export default async (ctx, next) => {
  console.log('开始验证  url:',ctx.request.url)
  if (ctx.session.username) {
    await next();
    return;
  }
  console.log('没有登录，验证不过')
  ctx.body = new ErrorModel(null, '未登录');
};

export { Container, inject } from 'inversify';

export {
  buildProviderModule,
  fluentProvide,
} from 'inversify-binding-decorators';

export {
  controller,
  TYPE,
  httpGet,
  interfaces,
  httpPost,
  InversifyKoaServer,
} from 'inversify-koa-utils';

import * as Router from 'koa-router';

export { Router };

import 'reflect-metadata';
import {
  Container,
  InversifyKoaServer,
  buildProviderModule,
} from './ioc/ioc.config';
import './ioc';
import './config/mysql';
import { config } from './config/index';
import middlewareCollections from './middleware/app_setting';
import * as bodyParser from 'koa-bodyparser';
const container = new Container();
container.load(buildProviderModule());

const server = new InversifyKoaServer(container);

server.setConfig((app) => {
  app.use(bodyParser());
  // 中间件 cors bodypaser,logger,erro ... 均在此
  middlewareCollections(app);
});

const app = server.build();

app.listen(config.PORT, () => {
  console.log('server is running over ' + config.PORT);
});

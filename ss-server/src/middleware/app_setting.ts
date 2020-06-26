
import * as serve from 'koa-static';
import * as render from 'koa-swig';
// import * as session from 'koa-generic-session';
// import * as redisStore from 'koa-redis';
const session = require('koa-generic-session');
const redisStore = require('koa-redis');
const { wrap } = require('co');
const { historyApiFallback } = require('koa2-connect-history-api-fallback');

import { REDIS_CONF } from '../config/db';
import { VERSION } from '../config/project.property';
import {config} from '../config/index';

export default (app) => {
  // api - v1 的proxy
 
  
  app.use(
    require('koa2-cors')({
      origin: function (ctx) {
        if (ctx.url === '/test') {
        }
        return '*';
        // return 'http://localhost:8001';
      },
      maxAge: 5,
      credentials: true,
      allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      allowHeaders: ['Content-Type', 'Authorization', 'Accept','Access-Control-Allow-Origin'],
      exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    })
  );
 
  

  

  app.context.render = wrap(
    render({
      root: config.VIEWS_DIR,
      autoescape: true,
      varControls: ['[[', ']]'],
      cache: false,
      ext: 'html',
      writeBody: false,
    })
  );

  app.use(serve(config.STATIC_DIR));
  app.use(historyApiFallback({ index: '/ssr', whiteList: [`/${VERSION}`] }));

  // session密匙
  app.keys = ['YUGUDS_87831#'];
  app.use(
    session({
      cookie: {
        path: '/',
        httpOnly: false,
        maxAge: 24 * 60 * 60 * 1000,
      },
      store: redisStore({
        all: `${REDIS_CONF.host}:${REDIS_CONF.port}`,
      }),
    })
  );
};

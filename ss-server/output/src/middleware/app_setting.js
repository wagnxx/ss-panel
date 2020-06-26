"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const serve = require("koa-static");
const render = require("koa-swig");
// import * as session from 'koa-generic-session';
// import * as redisStore from 'koa-redis';
const session = require('koa-generic-session');
const redisStore = require('koa-redis');
const { wrap } = require('co');
const { historyApiFallback } = require('koa2-connect-history-api-fallback');
const db_1 = require("../config/db");
const project_property_1 = require("../config/project.property");
const index_1 = require("../config/index");
exports.default = (app) => {
    // api - v1 的proxy
    app.use(require('koa2-cors')({
        origin: function (ctx) {
            if (ctx.url === '/test') {
            }
            return '*';
            // return 'http://localhost:8001';
        },
        maxAge: 5,
        credentials: true,
        allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        allowHeaders: ['Content-Type', 'Authorization', 'Accept', 'Access-Control-Allow-Origin'],
        exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    }));
    app.context.render = wrap(render({
        root: index_1.config.VIEWS_DIR,
        autoescape: true,
        varControls: ['[[', ']]'],
        cache: false,
        ext: 'html',
        writeBody: false,
    }));
    app.use(serve(index_1.config.STATIC_DIR));
    app.use(historyApiFallback({ index: '/ssr', whiteList: [`/${project_property_1.VERSION}`] }));
    // session密匙
    app.keys = ['YUGUDS_87831#'];
    app.use(session({
        cookie: {
            path: '/',
            httpOnly: false,
            maxAge: 24 * 60 * 60 * 1000,
        },
        store: redisStore({
            // all: `${db_1.REDIS_CONF.host}:${db_1.REDIS_CONF.port}`,
            host:db_1.REDIS_CONF.host,
            port:db_1.REDIS_CONF.port
        }),
    }));
};

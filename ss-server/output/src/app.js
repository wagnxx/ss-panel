"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("./ioc");
var inversify_koa_utils_1 = require("inversify-koa-utils");
var inversify_1 = require("inversify");
var inversify_binding_decorators_1 = require("inversify-binding-decorators");
var bodyParser = require("koa-bodyparser");
var serve = require("koa-static");
var render = require("koa-swig");
var co_1 = require("co");
// import * as session from 'koa-generic-session';
// import * as redisStore from 'koa-redis';
var session = require('koa-generic-session');
var redisStore = require('koa-redis');
require("./config/mysql");
var koa2_connect_history_api_fallback_1 = require("koa2-connect-history-api-fallback");
var container = new inversify_1.Container();
container.load(inversify_binding_decorators_1.buildProviderModule());
var server = new inversify_koa_utils_1.InversifyKoaServer(container);
server.setConfig(function (app) {
    // api - v1 的proxy
    app.use(bodyParser());
    app.context.render = co_1.wrap(render({
        root: require('path').join(__dirname, 'views'),
        autoescape: true,
        varControls: ['[[', ']]'],
        // cache: 'memory', // disable, set to false
        cache: false,
        ext: 'html',
        writeBody: false,
    }));
    app.use(serve(require('path').join(__dirname, '..', 'dist')));
    app.use(koa2_connect_history_api_fallback_1.historyApiFallback({ index: '/', whiteList: ['/api'] }));
    app.keys = ['YUGUDS_87831#']; // session密匙
    app.use(session({
        // 配置cookie
        cookie: {
            path: '/',
            httpOnly: false,
            // maxAge: 40*1000
            maxAge: 24 * 60 * 60 * 1000,
        },
        // 配置redis
        store: redisStore({
            all: '127.0.0.1:6379',
        }),
    }));
});
var app = server.build();
app.listen(3000, function () {
    console.log('server is running over 3000');
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.REDIS_CONF = exports.MYSQL_CONF = void 0;
var env = process.env.NDOE_ENV;
// cfg
var MYSQL_CONF;
exports.MYSQL_CONF = MYSQL_CONF;
var REDIS_CONF;
exports.REDIS_CONF = REDIS_CONF;
// mysql
exports.MYSQL_CONF = MYSQL_CONF = {
    host: 'mysql',
    user: 'root',
    password: 'root',
    port: '3306',
    database: 'ss',
};
// redis
exports.REDIS_CONF = REDIS_CONF = {
    port: 6379,
    host: '127.0.0.1',
};
if (env === 'dev') {
    // mysql
    exports.MYSQL_CONF = MYSQL_CONF = {
        host: '192.168.1.112',
        user: 'root',
        password: 'root',
        port: '3306',
        database: 'ss',
    };
    // redis
    exports.REDIS_CONF = REDIS_CONF = {
        port: 6379,
        host: '127.0.0.1',
    };
}
if (env === 'production') {
    exports.MYSQL_CONF = MYSQL_CONF = {
        host: 'localhost',
        user: 'root',
        port: '3306',
        database: 'myblog',
    };
    exports.REDIS_CONF = REDIS_CONF = {
        port: 6379,
        host: '127.0.0.1',
    };
}

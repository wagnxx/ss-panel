"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.REDIS_CONF = exports.MYSQL_CONF = void 0;
const env = process.env.NDOE_ENV;
// cfg
let MYSQL_CONF;
exports.MYSQL_CONF = MYSQL_CONF;
let REDIS_CONF;
exports.REDIS_CONF = REDIS_CONF;
// mysql  defualt
exports.MYSQL_CONF = MYSQL_CONF = {
    host: '192.168.1.112',
    user: 'root',
    password: 'root',
    port: '3306',
    database: 'ss',
};
// redis defult
exports.REDIS_CONF = REDIS_CONF = {
    port: 6379,
    host: '127.0.0.1',
};
if (env === 'dev') {
    MYSQL_CONF.host = 'localhost';
    REDIS_CONF.host = 'localhost';
}
if (env === 'production') {
    MYSQL_CONF.host = '192.168.1.112';
    REDIS_CONF.host = '192.168.1.112';
}
if (env === 'docker') {
    MYSQL_CONF.host = 'mysql';
    // MYSQL_CONF.host = 'redis';
}
console.log('mysql的配置项', REDIS_CONF);
console.log('redis的配置项', REDIS_CONF);
